package audit

import (
	"bytes"
	"encoding/csv"
	"fmt"
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

	// Parse CSV output
	r := csv.NewReader(strings.NewReader(stdout.String()))
	r.LazyQuotes = true
	r.FieldsPerRecord = -1 // Flexible fields

	records, err := r.ReadAll()
	if err != nil {
		return nil, fmt.Errorf("csv parse hatasi: %v", err)
	}

	// Standard critical audit policies mapping by Subcategory GUID (language independent)
	requiredMap := map[string]struct {
		Name     string
		Required string // "Success", "Success and Failure", "Failure"
		Risk     string
		Desc     string
	}{
		"{0CCE8215-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Oturum Acma (Logon)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Sisteme yapilan basarili/basarisiz oturum acma girisimlerini izler.",
		},
		"{0CCE8217-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Hesap Kilitleme (Account Lockout)",
			Required: "Success",
			Risk:     "Yuksek",
			Desc:     "Brute-force (kaba kuvvet) saldirilarinda kilitlenen hesaplari tespit eder.",
		},
		"{0CCE8218-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Kullanici Hesabi Yonetimi (User Account Management)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Yeni kullanici olusturma, silme ve sifre degisikliklerini takip eder.",
		},
		"{0CCE821C-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Guvenlik Grubu Yonetimi (Security Group Management)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Domain Admin veya yetkili gruplara yapilan uye ekleme/cikarma islemlerini izler.",
		},
		"{0CCE822B-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Islem Olusturma (Process Creation)",
			Required: "Success",
			Risk:     "Yuksek",
			Desc:     "Sistemde calisan exe ve scriptleri (cmd/powershell vb.) takip eder.",
		},
		"{0CCE8210-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Guvenlik Durumu Degisikligi (Security State Change)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Sistem saati degisiklikleri, kapatma/yeniden baslatma ve audit log temizlemeyi izler.",
		},
		"{0CCE8222-E568-11D1-A47F-00A0C9068F20}": {
			Name:     "Denetim Ilkesi Degisikligi (Audit Policy Change)",
			Required: "Success and Failure",
			Risk:     "Kritik",
			Desc:     "Log politikasini kapatmaya veya manipule etmeye yonelik eylemleri izler.",
		},
	}

	var checks []PolicyCheck

	for _, rec := range records {
		if len(rec) < 5 {
			continue
		}
		// Column index:
		// 0: Machine Name, 1: Policy Target, 2: Subcategory, 3: Subcategory GUID, 4: Inclusion Setting
		guid := strings.TrimSpace(rec[3])
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

		// Query Registry for Sysmon version
		versionCmd := exec.Command("reg", "query", "HKLM\\Software\\Sysmon", "/v", "Version")
		var vOut bytes.Buffer
		versionCmd.Stdout = &vOut
		if versionCmd.Run() == nil {
			lines := strings.Split(vOut.String(), "\n")
			for _, line := range lines {
				if strings.Contains(line, "Version") {
					parts := strings.Fields(line)
					if len(parts) >= 3 {
						status.Version = parts[2]
						break
					}
				}
			}
		}
	}

	return status
}
