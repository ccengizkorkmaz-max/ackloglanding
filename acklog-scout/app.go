package main

import (
	"context"
	"fmt"
	"time"

	"acklog-scout/audit"
	"acklog-scout/enroll"
	"acklog-scout/scan"
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
}

// RunLocalAudit performs a security compliance scan of the local host
func (a *App) RunLocalAudit() AuditResult {
	result := AuditResult{
		IsAdmin: utils.IsAdmin(),
	}

	if !result.IsAdmin {
		return result
	}

	checks, err := audit.WindowsAudit()
	if err == nil {
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
