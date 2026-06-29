package audit

import (
	"bytes"
	"encoding/csv"
	"fmt"
	"os"
	"os/exec"
	"strings"
)

// PolicyCheck holds the result of a single security policy compliance check
type PolicyCheck struct {
	Name         string `json:"name"`
	GUID         string `json:"guid"`
	CurrentValue string `json:"current_value"`
	Required     string `json:"required"`
	Compliant    bool   `json:"compliant"`
	RiskLevel    string `json:"risk_level"`
	Description  string `json:"description"`
}

// WindowsAudit inspects local auditing policies using auditpol.exe and parses results.
func WindowsAudit() ([]PolicyCheck, error) {
	cmd := exec.Command("auditpol", "/get", "/category:*", "/r")
	var stdout bytes.Buffer
	cmd.Stdout = &stdout
	err := cmd.Run()
	if err != nil {
		return nil, fmt.Errorf("auditpol calistirilamadi: %v", err)
	}

	// Write debug dump
	_ = os.WriteFile("c:\\PROJELER\\Logsiem\\acklog-scout\\auditpol_debug.txt", stdout.Bytes(), 0644)

	return ParseAuditpolCSV(stdout.String())
}

// ParseAuditpolCSV parses raw auditpol CSV output and returns compliance checks.
// This is shared between local (WindowsAudit) and remote (RemoteWindowsAudit) audit paths.
func ParseAuditpolCSV(csvData string) ([]PolicyCheck, error) {
	// Detect delimiter based on locale (semicolon for Turkish Windows)
	delimiter := ','
	if strings.Contains(csvData, ";") {
		delimiter = ';'
	}

	r := csv.NewReader(strings.NewReader(csvData))
	r.Comma = delimiter
	r.LazyQuotes = true
	r.FieldsPerRecord = -1

	records, err := r.ReadAll()
	if err != nil {
		return nil, fmt.Errorf("csv parse hatasi: %v", err)
	}

	// Standard critical audit policies mapping by Subcategory GUID (language independent)
	requiredMap := map[string]struct {
		Name     string
		Required string
		Risk     string
		Desc     string
	}{
		"{0CCE9215-69AE-11D9-BED3-505054503030}": {
			Name:     "Oturum Açma (Logon)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Sisteme yapılan başarılı/başarısız oturum açma girişimlerini izler.",
		},
		"{0CCE9217-69AE-11D9-BED3-505054503030}": {
			Name:     "Hesap Kilitleme (Account Lockout)",
			Required: "Success",
			Risk:     "Yüksek",
			Desc:     "Brute-force (kaba kuvvet) saldırılarında kilitlenen hesapları tespit eder.",
		},
		"{0CCE9235-69AE-11D9-BED3-505054503030}": {
			Name:     "Kullanıcı Hesabı Yönetimi (User Account Management)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Yeni kullanıcı oluşturma, silme ve şifre değişikliklerini takip eder.",
		},
		"{0CCE9237-69AE-11D9-BED3-505054503030}": {
			Name:     "Güvenlik Grubu Yönetimi (Security Group Management)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Domain Admin veya yetkili gruplara yapılan üye ekleme/çıkarma işlemlerini izler.",
		},
		"{0CCE922B-69AE-11D9-BED3-505054503030}": {
			Name:     "İşlem Oluşturma (Process Creation)",
			Required: "Success",
			Risk:     "Yüksek",
			Desc:     "Sistemde çalışan exe ve scriptleri (cmd/powershell vb.) takip eder.",
		},
		"{0CCE9210-69AE-11D9-BED3-505054503030}": {
			Name:     "Güvenlik Durumu Değişikliği (Security State Change)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Sistem saati değişiklikleri, kapatma/yeniden başlatma ve audit log temizlemeyi izler.",
		},
		"{0CCE922F-69AE-11D9-BED3-505054503030}": {
			Name:     "Denetim İlkesi Değişikliği (Audit Policy Change)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Log politikasını kapatmaya veya manipüle etmeye yönelik eylemleri izler.",
		},
	}

	var checks []PolicyCheck

	for _, rec := range records {
		if len(rec) < 5 {
			continue
		}
		guid := strings.ToUpper(strings.TrimSpace(rec[3]))
		setting := strings.TrimSpace(rec[4])

		if req, exists := requiredMap[guid]; exists {
			compliant := checkCompliance(setting, req.Required)
			checks = append(checks, PolicyCheck{
				Name:         req.Name,
				GUID:         guid,
				CurrentValue: setting,
				Required:     req.Required,
				Compliant:    compliant,
				RiskLevel:    req.Risk,
				Description:  req.Desc,
			})
		}
	}

	return checks, nil
}

func checkCompliance(current string, required string) bool {
	curr := strings.ToLower(current)
	req := strings.ToLower(required)

	// Match logic supporting English & Turkish locales
	if req == "success and failure" {
		return strings.Contains(curr, "success and failure") ||
			strings.Contains(curr, "başarı ve hata") ||
			strings.Contains(curr, "basari ve hata") ||
			strings.Contains(curr, "başarılı ve başarısız") ||
			strings.Contains(curr, "basarili ve basarisiz")
	}
	if req == "success" {
		return strings.Contains(curr, "success") ||
			strings.Contains(curr, "başarı") ||
			strings.Contains(curr, "basari") ||
			strings.Contains(curr, "başarılı") ||
			strings.Contains(curr, "basarili")
	}
	if req == "failure" {
		return strings.Contains(curr, "failure") ||
			strings.Contains(curr, "hata") ||
			strings.Contains(curr, "başarısız") ||
			strings.Contains(curr, "basarisiz")
	}

	return false
}

// SysmonStatus holds the Sysmon installation and running status
type SysmonStatus struct {
	Installed   bool   `json:"installed"`
	Running     bool   `json:"running"`
	ServiceName string `json:"service_name"`
	Version     string `json:"version"`
}

// CheckSysmon audits the presence and state of Sysmon/Sysmon64 service.
func CheckSysmon() SysmonStatus {
	status := SysmonStatus{Installed: false, Running: false, ServiceName: "", Version: "Bilinmiyor"}

	// Check Sysmon64 first (64-bit standard)
	serviceName := "Sysmon64"
	cmd := exec.Command("sc", "query", serviceName)
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()

	// Fallback to Sysmon (32-bit legacy) if Sysmon64 not found
	if err != nil || strings.Contains(out.String(), "1060") {
		serviceName = "Sysmon"
		cmd = exec.Command("sc", "query", serviceName)
		out.Reset()
		cmd.Stdout = &out
		err = cmd.Run()
	}

	if err == nil && !strings.Contains(out.String(), "1060") {
		status.Installed = true
		status.ServiceName = serviceName
		if strings.Contains(strings.ToUpper(out.String()), "RUNNING") {
			status.Running = true
		}

		// Query Sysmon version directly from binary properties (more robust)
		versionCmd := exec.Command("powershell", "-Command", "(Get-Item C:\\Windows\\"+serviceName+".exe).VersionInfo.ProductVersion")
		var vOut bytes.Buffer
		versionCmd.Stdout = &vOut
		if versionCmd.Run() == nil {
			status.Version = strings.TrimSpace(vOut.String())
		} else {
			// Fallback registry query
			regCmd := exec.Command("reg", "query", "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\"+serviceName, "/v", "DisplayVersion")
			vOut.Reset()
			regCmd.Stdout = &vOut
			if regCmd.Run() == nil {
				lines := strings.Split(vOut.String(), "\n")
				for _, line := range lines {
					if strings.Contains(line, "DisplayVersion") {
						parts := strings.Fields(line)
						if len(parts) >= 3 {
							status.Version = parts[2]
							break
						}
					}
				}
			}
		}
	}

	return status
}
