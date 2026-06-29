package enroll

import (
	"fmt"
	"time"

	"golang.org/x/crypto/ssh"
)

// EnrollLinuxRsyslog configures remote Linux host to forward all logs to the SIEM IP via SSH.
func EnrollLinuxRsyslog(host, username, password, siemIP string) error {
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
		return fmt.Errorf("SSH baglanti hatasi: %v", err)
	}
	defer client.Close()

	session, err := client.NewSession()
	if err != nil {
		return err
	}
	defer session.Close()

	// Append forwarding line (*.* @siemIP:514) to a dedicated config file and restart service
	forwardLine := fmt.Sprintf("*.* @%s:514", siemIP)
	cmd := fmt.Sprintf(
		"echo '%s' | sudo tee /etc/rsyslog.d/50-acklog.conf && sudo systemctl restart rsyslog",
		forwardLine,
	)

	err = session.Run(cmd)
	if err != nil {
		return fmt.Errorf("rsyslog konfigurasyon hatasi: %v", err)
	}

	return nil
}
