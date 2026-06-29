package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"time"

	"acklog-scout/audit"
	"acklog-scout/enroll"
	"acklog-scout/scan"
	"acklog-scout/server"
	"acklog-scout/utils"
)

// App struct defines the desktop backend context
type App struct {
	ctx context.Context
}

// NewApp creates a new App struct instance
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// IsAdmin checks if the desktop app is running with elevated administrator privileges
func (a *App) IsAdmin() bool {
	return utils.IsAdmin()
}

// AuditResult holds combined audit parameters for GUI rendering
type AuditResult struct {
	IsAdmin    bool                        `json:"is_admin"`
	Checks     []audit.PolicyCheck         `json:"checks"`
	Sysmon     audit.SysmonStatus          `json:"sysmon"`
	Database   audit.DatabaseAuditStatus   `json:"database"`
	Error      string                      `json:"error"`
}

// RunLocalAudit performs a security compliance scan of the local host
func (a *App) RunLocalAudit() AuditResult {
	result := AuditResult{
		IsAdmin: utils.IsAdmin(),
	}

	if !result.IsAdmin {
		result.Error = "Yönetici yetkisi (Administrator) bulunmuyor."
		return result
	}

	checks, err := audit.WindowsAudit()
	if err != nil {
		result.Error = err.Error()
	} else {
		result.Checks = checks
	}

	result.Sysmon = audit.CheckSysmon()
	result.Database = audit.CheckDatabaseLogs()

	return result
}

// RunAutoEnroll automatically repairs audit policies and deploys Sysmon
func (a *App) RunAutoEnroll() string {
	if !utils.IsAdmin() {
		return "Hata: Yonetici yetkisi gerekiyor!"
	}

	// 1. Repair audit policies
	checks, err := audit.WindowsAudit()
	if err == nil {
		for _, check := range checks {
			if !check.Compliant {
				_ = enroll.EnrollPolicy(check.GUID, check.Required)
			}
		}
	}

	// 2. Deploy Sysmon
	sysmon := audit.CheckSysmon()
	if !sysmon.Installed {
		err := enroll.InstallSysmon()
		if err != nil {
			return fmt.Sprintf("Kismen basarisiz: Auditler düzeltildi, fakat Sysmon yuklenemedi: %v", err)
		}
	}

	return "Basariyla tamamlandi. Tum politikalar uyumlu hale getirildi ve Sysmon kuruldu."
}

// RunNetworkScan scans a CIDR subnet and reports open ports & OS fingerprinting
func (a *App) RunNetworkScan(cidr string) []scan.ScanResult {
	ips, err := scan.ParseCIDR(cidr)
	if err != nil {
		return nil
	}

	criticalPorts := []int{22, 80, 135, 443, 445, 1433, 1521, 3306, 5432}
	results := scan.ScanRange(ips, criticalPorts, 50, 400*time.Millisecond)
	return results
}

// StartCollectorServer starts the central collector server in the background
func (a *App) StartCollectorServer(port int) string {
	go server.StartServer(port)
	return fmt.Sprintf("Kolektör sunucusu port %d üzerinde başarıyla başlatıldı. Canlı izlemek için tarayıcınızda http://localhost:%d adresini açabilirsiniz.", port, port)
}

// SendReportToCentralServer performs local audit and uploads JSON payload to central server
func (a *App) SendReportToCentralServer(serverURL string) string {
	checks, err := audit.WindowsAudit()
	if err != nil {
		return fmt.Sprintf("Hata: Yerel denetim çalıştırılamadı: %v", err)
	}

	sysmon := audit.CheckSysmon()
	dbAudit := audit.CheckDatabaseLogs()

	payload := server.ClientPayload{
		ClientIP: "", // Auto-filled by server
		ScanTime: time.Now().Format("2006-01-02 15:04:05"),
		Type:     "local_audit",
		AuditPol: checks,
		Sysmon:   sysmon,
		Database: dbAudit,
	}

	jsonData, err := json.Marshal(payload)
	if err != nil {
		return fmt.Sprintf("Hata: Rapor JSON paketleme hatası: %v", err)
	}

	resp, err := http.Post(serverURL+"/api/report", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return fmt.Sprintf("Hata: Sunucuya bağlanılamadı: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK {
		return "Rapor merkezi sunucuya başarıyla iletildi. ✅"
	}
	return fmt.Sprintf("Hata: Sunucu geçersiz status döndü: %s", resp.Status)
}

// NetworkInterface represents an active network card IP configuration
type NetworkInterface struct {
	Name string `json:"name"`
	IP   string `json:"ip"`
	CIDR string `json:"cidr"`
}

// GetLocalSubnets detects and returns active local network interface segments
func (a *App) GetLocalSubnets() []NetworkInterface {
	var list []NetworkInterface
	ifaces, err := net.Interfaces()
	if err != nil {
		return list
	}

	for _, iface := range ifaces {
		// Skip down or loopback interfaces
		if (iface.Flags & net.FlagUp) == 0 || (iface.Flags & net.FlagLoopback) != 0 {
			continue
		}

		addrs, err := iface.Addrs()
		if err != nil {
			continue
		}

		for _, addr := range addrs {
			ipNet, ok := addr.(*net.IPNet)
			if !ok {
				continue
			}

			ip4 := ipNet.IP.To4()
			if ip4 == nil {
				continue
			}

			// Calculate network subnet address
			mask := ipNet.Mask
			networkIP := make(net.IP, len(ip4))
			for i := 0; i < len(ip4); i++ {
				networkIP[i] = ip4[i] & mask[i]
			}

			ones, _ := mask.Size()
			cidrStr := fmt.Sprintf("%s/%d", networkIP.String(), ones)

			list = append(list, NetworkInterface{
				Name: iface.Name,
				IP:   ip4.String(),
				CIDR: cidrStr,
			})
		}
	}

	return list
}
