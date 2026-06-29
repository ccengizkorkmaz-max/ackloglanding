package scan

import (
	"fmt"
	"net"
	"net/http"
	"strings"
	"sync"
	"time"
)

// ScanResult represents the scan output for an alive host
type ScanResult struct {
	IP        string
	OpenPorts []int
	IsAlive   bool
	OS        string
}

// ParseCIDR expands a CIDR string (e.g. 192.168.1.0/24) into a list of IP addresses.
func ParseCIDR(cidr string) ([]string, error) {
	ip, ipnet, err := net.ParseCIDR(cidr)
	if err != nil {
		// Attempt to parse as a single IP address
		singleIP := net.ParseIP(cidr)
		if singleIP == nil {
			return nil, fmt.Errorf("gecersiz IP veya CIDR formati: %s", cidr)
		}
		return []string{cidr}, nil
	}

	var ips []string
	for ip := ip.Mask(ipnet.Mask); ipnet.Contains(ip); incrementIP(ip) {
		ips = append(ips, ip.String())
	}

	// Exclude subnet network and broadcast addresses for standard subnets
	if len(ips) > 2 {
		return ips[1 : len(ips)-1], nil
	}
	return ips, nil
}

func incrementIP(ip net.IP) {
	for i := len(ip) - 1; i >= 0; i-- {
		ip[i]++
		if ip[i] > 0 {
			break
		}
	}
}

// ScanRange scans a slice of IP addresses for specified critical ports concurrently.
func ScanRange(ips []string, ports []int, concurrency int, timeout time.Duration) []ScanResult {
	var results []ScanResult
	var mu sync.Mutex

	ipChan := make(chan string, len(ips))
	for _, ip := range ips {
		ipChan <- ip
	}
	close(ipChan)

	var wg sync.WaitGroup
	for i := 0; i < concurrency; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for ip := range ipChan {
				var openPorts []int
				alive := false

				for _, port := range ports {
					address := fmt.Sprintf("%s:%d", ip, port)
					conn, err := net.DialTimeout("tcp", address, timeout)
					if err == nil {
						conn.Close()
						openPorts = append(openPorts, port)
						alive = true
					}
				}

				if alive {
					osGuess := FingerprintHost(ip, openPorts, timeout)
					mu.Lock()
					results = append(results, ScanResult{
						IP:        ip,
						OpenPorts: openPorts,
						IsAlive:   true,
						OS:        osGuess,
					})
					mu.Unlock()
				}
			}
		}()
	}
	wg.Wait()
	return results
}

// FingerprintHost tries to identify the Operating System based on open ports and banners.
func FingerprintHost(ip string, openPorts []int, timeout time.Duration) string {
	hasSSH := false
	hasSMBOrRPC := false
	hasHTTP := false

	for _, p := range openPorts {
		if p == 22 {
			hasSSH = true
		}
		if p == 135 || p == 445 {
			hasSMBOrRPC = true
		}
		if p == 80 || p == 443 {
			hasHTTP = true
		}
	}

	// 1. If SMB/RPC ports are open, it's highly likely Windows
	if hasSMBOrRPC {
		if hasHTTP {
			serverHeader := fetchHTTPBanner(ip, timeout)
			if serverHeader != "" {
				return fmt.Sprintf("Windows Server (%s)", serverHeader)
			}
		}
		return "Windows Server / Desktop (SMB/RPC Tespit Edildi)"
	}

	// 2. If SSH port is open, read SSH banner to extract distro details
	if hasSSH {
		banner := fetchSSHBanner(ip, timeout)
		if banner != "" {
			return banner
		}
		return "Linux/Unix (SSH Tespit Edildi)"
	}

	// 3. Fallback to HTTP banner info
	if hasHTTP {
		serverHeader := fetchHTTPBanner(ip, timeout)
		if serverHeader != "" {
			return fmt.Sprintf("Cihaz (%s)", serverHeader)
		}
	}

	return "Bilinmeyen Cihaz (Firewall/Switch/Yazici)"
}

func fetchSSHBanner(ip string, timeout time.Duration) string {
	conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:22", ip), timeout)
	if err != nil {
		return ""
	}
	defer conn.Close()

	conn.SetReadDeadline(time.Now().Add(timeout))

	buf := make([]byte, 256)
	n, err := conn.Read(buf)
	if err != nil || n == 0 {
		return ""
	}

	rawBanner := string(buf[:n])
	return cleanBanner(rawBanner)
}

func fetchHTTPBanner(ip string, timeout time.Duration) string {
	netClient := &http.Client{
		Timeout: timeout,
	}

	// Try HTTP first
	url := fmt.Sprintf("http://%s", ip)
	resp, err := netClient.Get(url)
	if err != nil {
		// Try HTTPS as fallback
		url = fmt.Sprintf("https://%s", ip)
		resp, err = netClient.Get(url)
		if err != nil {
			return ""
		}
	}
	defer resp.Body.Close()

	return resp.Header.Get("Server")
}

func cleanBanner(banner string) string {
	cleaned := strings.TrimSpace(banner)
	// Remove carriage returns or newlines
	cleaned = strings.ReplaceAll(cleaned, "\r", "")
	cleaned = strings.ReplaceAll(cleaned, "\n", "")
	
	// Format nicely for known strings
	if strings.Contains(cleaned, "OpenSSH") {
		parts := strings.Split(cleaned, " ")
		if len(parts) > 1 {
			return fmt.Sprintf("Linux (%s %s)", parts[0], parts[1])
		}
		return fmt.Sprintf("Linux (%s)", cleaned)
	}
	return cleaned
}
