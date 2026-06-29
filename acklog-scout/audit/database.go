package audit

import (
	"bytes"
	"os/exec"
	"strings"
)

// DatabaseAuditStatus holds the audit parameters of database servers
type DatabaseAuditStatus struct {
	DBInstalled         bool
	DBType              string
	NativeLogonEnabled  bool
	DAMDetected         bool
	SPANModeEnabled     bool
	Compliant           bool
	LogSourceText       string
}

// CheckDatabaseLogs audits database logging health and DAM/SPAN posture on the local server.
func CheckDatabaseLogs() DatabaseAuditStatus {
	status := DatabaseAuditStatus{
		DBInstalled:        false,
		DBType:             "Yok",
		NativeLogonEnabled: false,
		DAMDetected:        false,
		SPANModeEnabled:    false,
		Compliant:          false,
		LogSourceText:      "Log Kaynagi Yok",
	}

	// 1. Detect if a database engine is running locally (using tasklist)
	cmd := exec.Command("tasklist")
	var out bytes.Buffer
	cmd.Stdout = &out
	_ = cmd.Run()
	processes := strings.ToLower(out.String())

	if strings.Contains(processes, "sqlservr.exe") {
		status.DBInstalled = true
		status.DBType = "Microsoft SQL Server"
	} else if strings.Contains(processes, "postgres.exe") {
		status.DBInstalled = true
		status.DBType = "PostgreSQL"
	} else if strings.Contains(processes, "mysqld.exe") {
		status.DBInstalled = true
		status.DBType = "MySQL"
	}

	if !status.DBInstalled {
		return status
	}

	// 2. Check Native Logon Audit (For MSSQL, check registry)
	if status.DBType == "Microsoft SQL Server" {
		// AuditLevel: 1 = Success, 2 = Failure, 3 = All (Success & Failure)
		regCmd := exec.Command("reg", "query", "HKLM\\Software\\Microsoft\\Microsoft SQL Server\\MSSQLSERVER\\MSSQLServer", "/v", "AuditLevel")
		var regOut bytes.Buffer
		regCmd.Stdout = &regOut
		if regCmd.Run() == nil {
			if strings.Contains(regOut.String(), "0x3") || strings.Contains(regOut.String(), "3") {
				status.NativeLogonEnabled = true
			}
		}
	}

	// 3. Check for Database Security Firewalls (DAM/DBF proxies)
	// We search for common DAM agent processes (e.g. IBM Guardium, Imperva SecureSphere, etc.)
	if strings.Contains(processes, "guardium") || strings.Contains(processes, "imperva") || strings.Contains(processes, "dbfagent") {
		status.DAMDetected = true
	}

	// 4. Check if SPAN/TAP Promiscuous Mode is enabled on any network adapter
	// (Allows capturing database network queries with zero impact on database CPU/Disk)
	psCmd := exec.Command("powershell", "-Command", "Get-NetAdapter | Where-Object {$_.Promiscuous -eq $true} | Select-Object -ExpandProperty Name")
	var psOut bytes.Buffer
	psCmd.Stdout = &psOut
	if psCmd.Run() == nil && strings.TrimSpace(psOut.String()) != "" {
		status.SPANModeEnabled = true
	}

	// 5. Evaluate overall compliance
	// Database logging is compliant if:
	// A. Native Logon audit is fully enabled (Success & Failure), OR
	// B. A Database Activity Monitoring (DAM) agent is active, OR
	// C. Network interface card is configured in SPAN/TAP mirror mode (Promiscuous active)
	if status.NativeLogonEnabled || status.DAMDetected || status.SPANModeEnabled {
		status.Compliant = true
	}

	// Set Log Source explanation text
	if status.DAMDetected {
		status.LogSourceText = "Database Security Firewall (DAM / DBF) Ajanı Aktif"
	} else if status.SPANModeEnabled {
		status.LogSourceText = "Ağ Aynalama (SPAN/TAP - Promiscuous Mod) Aktif"
	} else if status.NativeLogonEnabled {
		status.LogSourceText = "Veritabanı Yerel Logon Loglaması Aktif"
	} else {
		status.LogSourceText = "LOGLAMA EKSİK! (Yerel log kapalı, DBF/SPAN tespit edilemedi)"
	}

	return status
}
