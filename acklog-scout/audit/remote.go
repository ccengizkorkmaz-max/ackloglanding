package audit

import (
	"bytes"
	"fmt"
	"time"

	"github.com/masterzen/winrm"
)

// RemoteWindowsAudit connects to a remote Windows machine via WinRM and runs auditpol.
func RemoteWindowsAudit(ip, username, password string) ([]PolicyCheck, error) {
	// Create WinRM endpoint (HTTP port 5985) with 30s connection timeout
	endpoint := winrm.NewEndpoint(ip, 5985, false, true, nil, nil, nil, 30*time.Second)

	params := winrm.DefaultParameters
	params.Timeout = "PT60S"

	// Create WinRM client with NTLM authentication
	client, err := winrm.NewClientWithParameters(endpoint, username, password, params)
	if err != nil {
		return nil, fmt.Errorf("WinRM bağlantısı kurulamadı (%s): %v", ip, err)
	}

	// Execute auditpol on remote machine
	var stdout, stderr bytes.Buffer
	exitCode, err := client.Run(winrm.Powershell(`auditpol /get /category:* /r`), &stdout, &stderr)
	if err != nil {
		return nil, fmt.Errorf("WinRM komut çalıştırılamadı (%s): %v", ip, err)
	}

	if exitCode != 0 {
		errMsg := stderr.String()
		if errMsg == "" {
			errMsg = "bilinmeyen hata"
		}
		return nil, fmt.Errorf("auditpol uzaktan çalıştırılamadı (%s, exit=%d): %s", ip, exitCode, errMsg)
	}

	// Reuse the shared CSV parser
	return ParseAuditpolCSV(stdout.String())
}

// RemoteSysmonCheck queries Sysmon status on a remote machine via WinRM.
func RemoteSysmonCheck(ip, username, password string) string {
	endpoint := winrm.NewEndpoint(ip, 5985, false, true, nil, nil, nil, 15*time.Second)

	params := winrm.DefaultParameters
	params.Timeout = "PT30S"

	client, err := winrm.NewClientWithParameters(endpoint, username, password, params)
	if err != nil {
		return "WinRM bağlantı hatası"
	}

	var stdout, stderr bytes.Buffer
	exitCode, err := client.Run(winrm.Powershell(`
		$svc = Get-Service Sysmon64 -ErrorAction SilentlyContinue
		if (-not $svc) { $svc = Get-Service Sysmon -ErrorAction SilentlyContinue }
		if ($svc) {
			$ver = ""
			$exe = "C:\Windows\Sysmon64.exe"
			if (-not (Test-Path $exe)) { $exe = "C:\Windows\Sysmon.exe" }
			if (Test-Path $exe) { $ver = (Get-Item $exe).VersionInfo.ProductVersion }
			Write-Output "INSTALLED|$($svc.Status)|$ver"
		} else {
			Write-Output "NOT_INSTALLED"
		}
	`), &stdout, &stderr)

	if err != nil || exitCode != 0 {
		return "Sorgulanamadı"
	}

	return stdout.String()
}
