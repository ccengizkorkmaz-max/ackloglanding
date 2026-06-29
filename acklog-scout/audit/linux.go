package audit

import (
	"fmt"
	"strings"
	"time"

	"golang.org/x/crypto/ssh"
)

// LinuxAuditResult captures the status of remote Linux logging
type LinuxAuditResult struct {
	IP                 string
	RsyslogInstalled   bool
	RsyslogRunning     bool
	ForwardingConfigured bool
	ForwardingTarget     string
	Compliant          bool
}

// RemoteLinuxAudit connects to a remote Linux host via SSH and checks rsyslog configuration.
func RemoteLinuxAudit(host, username, password string) (LinuxAuditResult, error) {
	result := LinuxAuditResult{IP: host, RsyslogInstalled: false, RsyslogRunning: false, ForwardingConfigured: false, Compliant: false}

	config := &ssh.ClientConfig{
		User: username,
		Auth: []ssh.AuthMethod{
			ssh.Password(password),
		},
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
		Timeout:         5 * time.Second,
	}

	client, err := ssh.Dial("tcp", fmt.Sprintf("%s:22", host), config)
	if err != nil {
		return result, fmt.Errorf("SSH baglanti hatasi: %v", err)
	}
	defer client.Close()

	// 1. Check if rsyslog is active
	session, err := client.NewSession()
	if err != nil {
		return result, err
	}
	defer session.Close()

	var outBuf, errBuf strings.Builder
	session.Stdout = &outBuf
	session.Stderr = &errBuf

	err = session.Run("systemctl is-active rsyslog")
	if err == nil && strings.TrimSpace(outBuf.String()) == "active" {
		result.RsyslogInstalled = true
		result.RsyslogRunning = true
	}

	// 2. Read rsyslog configuration files to check for syslog forwarding
	session2, err := client.NewSession()
	if err != nil {
		return result, err
	}
	defer session2.Close()

	outBuf.Reset()
	errBuf.Reset()
	session2.Stdout = &outBuf
	session2.Stderr = &errBuf

	err = session2.Run("cat /etc/rsyslog.conf /etc/rsyslog.d/*.conf 2>/dev/null")
	if err == nil {
		content := outBuf.String()
		lines := strings.Split(content, "\n")
		for _, line := range lines {
			line = strings.TrimSpace(line)
			if strings.HasPrefix(line, "#") {
				continue
			}
			// Look for active rsyslog forwarding destination: e.g. *.* @192.168.1.100:514
			if strings.Contains(line, "@") {
				parts := strings.Fields(line)
				if len(parts) >= 2 {
					lastPart := parts[len(parts)-1]
					if strings.HasPrefix(lastPart, "@") {
						result.ForwardingConfigured = true
						result.ForwardingTarget = lastPart
						result.Compliant = true
						break
					}
				}
			}
		}
	}

	return result, nil
}
