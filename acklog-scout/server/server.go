package server

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"acklog-scout/audit"
	"acklog-scout/scan"
)

// ClientPayload represents the incoming data structure from distributed agents
type ClientPayload struct {
	ClientIP   string                    `json:"client_ip"`
	ScanTime   string                    `json:"scan_time"`
	Type       string                    `json:"type"` // "local_audit" or "network_scan"
	AuditPol   []audit.PolicyCheck       `json:"audit_pol,omitempty"`
	Sysmon     audit.SysmonStatus        `json:"sysmon,omitempty"`
	Database   audit.DatabaseAuditStatus `json:"database,omitempty"`
	NetDevices []scan.ScanResult         `json:"net_devices,omitempty"`
}

const reportsDir = "./reports"

// DashboardStats holds calculated metrics for the template
type DashboardStats struct {
	TotalClients         int
	TotalHostsScanned    int
	CompliantCount       int
	NonCompliantCount    int
	CompliancePercentage int
	SysmonCoverage       int
	DatabaseCount        int
	Reports              []ClientPayload
}

// StartServer starts the HTTP server for ACKLOG Scout dashboard and api collection
func StartServer(port int) {
	_ = os.MkdirAll(reportsDir, 0755)

	http.HandleFunc("/api/report", handleReport)
	http.HandleFunc("/", handleDashboard)

	fmt.Printf("[+] ACKLOG Scout Sunucu Modu aktif! Port: %d\n", port)
	fmt.Printf("[+] Raporlar merkezi olarak '%s' dizinine kaydedilecek.\n", reportsDir)
	fmt.Printf("[+] Yonetici paneli ve VLAN rehberi için su adresi acin: http://localhost:%d\n", port)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		fmt.Printf("[!] Hata: Sunucu baslatilamadi: %v\n", err)
	}
}

func handleReport(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Gecersiz istek metodu", http.StatusMethodNotAllowed)
		return
	}

	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Request body okunamadi", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	var payload ClientPayload
	err = json.Unmarshal(body, &payload)
	if err != nil {
		http.Error(w, "Gecersiz JSON verisi", http.StatusBadRequest)
		return
	}

	// Auto-fill client IP if empty
	if payload.ClientIP == "" {
		payload.ClientIP = strings.Split(r.RemoteAddr, ":")[0]
	}
	if payload.ScanTime == "" {
		payload.ScanTime = time.Now().Format("2006-01-02 15:04:05")
	}

	// Save client report file
	fileName := fmt.Sprintf("%s/%s_%s_report.json", reportsDir, payload.ClientIP, payload.Type)
	err = os.WriteFile(fileName, body, 0644)
	if err != nil {
		http.Error(w, "Rapor kaydedilemedi", http.StatusInternalServerError)
		return
	}

	fmt.Printf("[+] Yeni Rapor Alindi: %s (%s) -> Kaydedildi: %s\n", payload.ClientIP, payload.Type, fileName)

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"status":"success","message":"Rapor basariyla sunucuya iletildi"}`))
}

func handleDashboard(w http.ResponseWriter, r *http.Request) {
	files, err := os.ReadDir(reportsDir)
	if err != nil {
		http.Error(w, "Rapor dizini okunamadi", http.StatusInternalServerError)
		return
	}

	var payloads []ClientPayload
	totalHosts := 0
	totalChecks := 0
	compliantChecks := 0
	sysmonInstalled := 0
	dbCount := 0

	for _, file := range files {
		if !strings.HasSuffix(file.Name(), ".json") {
			continue
		}

		filePath := filepath.Join(reportsDir, file.Name())
		data, err := os.ReadFile(filePath)
		if err != nil {
			continue
		}

		var payload ClientPayload
		err = json.Unmarshal(data, &payload)
		if err == nil {
			payloads = append(payloads, payload)

			// Aggregate stats
			if payload.Type == "network_scan" {
				totalHosts += len(payload.NetDevices)
			} else if payload.Type == "local_audit" {
				totalHosts++ // count itself
				for _, check := range payload.AuditPol {
					totalChecks++
					if check.Compliant {
						compliantChecks++
					}
				}
				if payload.Sysmon.Installed {
					sysmonInstalled++
				}
				if payload.Database.DBInstalled {
					dbCount++
				}
			}
		}
	}

	nonCompliant := totalChecks - compliantChecks
	compliancePct := 100
	if totalChecks > 0 {
		compliancePct = (compliantChecks * 100) / totalChecks
	}

	stats := DashboardStats{
		TotalClients:         len(payloads),
		TotalHostsScanned:    totalHosts,
		CompliantCount:       compliantChecks,
		NonCompliantCount:    nonCompliant,
		CompliancePercentage: compliancePct,
		SysmonCoverage:       sysmonInstalled,
		DatabaseCount:        dbCount,
		Reports:              payloads,
	}

	tmpl := template.Must(template.New("dashboard").Parse(dashboardHTML))
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	_ = tmpl.Execute(w, stats)
}

// Visual premium security dashboard HTML page
const dashboardHTML = `<!DOCTYPE html>
<html lang="tr">
<head>
	<meta charset="UTF-8">
	<title>ACKLOG Scout Merkezi Yonetim Paneli</title>
	<style>
		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			background-color: #0b0f19;
			color: #c9d1d9;
			margin: 0;
			padding: 0;
		}
		.navbar {
			background-color: #111827;
			border-bottom: 1px solid #1f2937;
			padding: 15px 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.navbar h1 {
			margin: 0;
			font-size: 22px;
			color: #10b981;
			font-weight: 900;
		}
		.navbar span {
			font-size: 13px;
			color: #6b7280;
			font-family: monospace;
		}
		.container {
			max-width: 1200px;
			margin: 40px auto;
			padding: 0 20px;
		}
		.stats-grid {
			display: grid;
			grid-template-cols: repeat(auto-fit, minmax(220px, 1fr));
			gap: 20px;
			margin-bottom: 40px;
		}
		.stat-card {
			background: #1f2937;
			border: 1px solid #374151;
			border-radius: 12px;
			padding: 20px;
			text-align: center;
			box-shadow: 0 4px 6px rgba(0,0,0,0.15);
		}
		.stat-card h3 {
			margin: 0 0 10px 0;
			color: #9ca3af;
			font-size: 14px;
			text-transform: uppercase;
			letter-spacing: 0.05em;
		}
		.stat-card .num {
			font-size: 36px;
			font-weight: 800;
			color: #3b82f6;
		}
		.stat-card .num.green { color: #10b981; }
		.stat-card .num.red { color: #ef4444; }
		
		h2 {
			color: #3b82f6;
			border-bottom: 2px solid #1f2937;
			padding-bottom: 10px;
			margin-top: 50px;
		}
		
		/* Reports table */
		table {
			width: 100%;
			border-collapse: collapse;
			background: #111827;
			border: 1px solid #1f2937;
			border-radius: 10px;
			overflow: hidden;
			margin-bottom: 40px;
		}
		th, td {
			padding: 12px 15px;
			text-align: left;
			border-bottom: 1px solid #1f2937;
		}
		th {
			background-color: #1f2937;
			color: #3b82f6;
			font-weight: 700;
		}
		tr:hover { background-color: #1f2937/40; }
		
		.badge {
			padding: 4px 8px;
			border-radius: 20px;
			font-size: 11px;
			font-weight: bold;
		}
		.badge.audit { background: #3b82f6; color: #fff; }
		.badge.scan { background: #8b5cf6; color: #fff; }

		/* VLAN deployment guide tabs/cards */
		.guide-grid {
			display: grid;
			grid-template-cols: 1fr;
			gap: 25px;
		}
		@media(min-width: 768px) {
			.guide-grid { grid-template-cols: repeat(3, 1fr); }
		}
		.guide-card {
			background: #111827;
			border: 1px solid #1f2937;
			border-radius: 12px;
			padding: 25px;
			box-shadow: 0 4px 6px rgba(0,0,0,0.1);
			border-top: 4px solid #3b82f6;
		}
		.guide-card.recommend {
			border-top-color: #10b981;
			background: radial-gradient(circle at top right, #10b981/5, transparent);
		}
		.guide-card h3 {
			margin: 0 0 15px 0;
			color: #fff;
		}
		.guide-card p {
			font-size: 14px;
			color: #9ca3af;
			line-height: 1.6;
		}
		.code-box {
			background: #000;
			padding: 10px;
			border-radius: 6px;
			font-family: monospace;
			font-size: 12px;
			color: #10b981;
			overflow-x: auto;
			margin-top: 15px;
		}
	</style>
</head>
<body>
	<div class="navbar">
		<h1>ACKLOG Scout</h1>
		<span>YONETICI BILGI TOPLAMA PANELİ v1.0.0</span>
	</div>

	<div class="container">
		
		<!-- Aggregated Security Posture Cards -->
		<div class="stats-grid">
			<div class="stat-card">
				<h3>Aktif Vlan / Ajan</h3>
				<div class="num">{{.TotalClients}}</div>
			</div>
			<div class="stat-card">
				<h3>Taranan Toplam Host</h3>
				<div class="num green">{{.TotalHostsScanned}}</div>
			</div>
			<div class="stat-card">
				<h3>Log Uyum Oranı</h3>
				<div class="num green">{{.CompliancePercentage}}%</div>
			</div>
			<div class="stat-card">
				<h3>Sysmon Kurulu Ajan</h3>
				<div class="num">{{.SysmonCoverage}}</div>
			</div>
			<div class="stat-card">
				<h3>Veritabani Sayisi</h3>
				<div class="num">{{.DatabaseCount}}</div>
			</div>
		</div>

		<!-- Central Scanned Clients Logs Table -->
		<h2>VLAN Ajan Raporlari</h2>
		<table>
			<thead>
				<tr>
					<th>Ajan IP</th>
					<th>Rapor Türü</th>
					<th>Zaman Damgası</th>
					<th>Özet Durum / Tespit Edilen Cihazlar</th>
				</tr>
			</thead>
			<tbody>
				{{range .Reports}}
				<tr>
					<td><strong>{{.ClientIP}}</strong></td>
					<td>
						{{if eq .Type "local_audit"}}
							<span class="badge audit">Yerel Denetim</span>
						{{else}}
							<span class="badge scan">Vlan Ağ Taraması</span>
						{{end}}
					</td>
					<td>{{.ScanTime}}</td>
					<td>
						{{if eq .Type "local_audit"}}
							Sysmon: {{if .Sysmon.Installed}}Aktif (v{{.Sysmon.Version}}){{else}}Eksik ❌{{end}} | 
							Veritabanı: {{if .Database.DBInstalled}}{{.Database.DBType}} ({{.Database.LogSourceText}}){{else}}Yok{{end}}
						{{else}}
							{{len .NetDevices}} Cihaz Algılandı
						{{end}}
					</td>
				</tr>
				{{else}}
				<tr>
					<td colspan="4" style="text-align: center; color: #6b7280; padding: 30px;">Henüz hiç bir istemciden veri gönderilmedi.</td>
				</tr>
				{{end}}
			</tbody>
		</table>

		<!-- VLAN Scanning Best Practices Guide -->
		<h2>Kurumsal VLAN Tarama Stratejileri Rehberi</h2>
		<p style="color: #9ca3af; font-size: 15px; margin-bottom: 25px;">
			VLAN'lerin izole edildiği kurumsal ortamlarda aşağıdaki 3 tarama senaryosundan birini ağ yapınıza göre seçebilirsiniz:
		</p>
		<div class="guide-grid">
			
			<div class="guide-card">
				<h3>1. Merkezi Layer 3 Yönlendirme</h3>
				<p>
					ACKLOG Scout'un çalıştığı sunucunun (Core Switch / Firewall ACL kurallarıyla) hedef VLAN'lerdeki portlara TCP bağlantısı yapmasına izin verilir.
				</p>
				<div class="code-box">
					# Tek komutla birden cok vlan taranir:<br>
					acklog-scout -scan 10.1.1.0/24,10.1.2.0/24
				</div>
			</div>

			<div class="guide-card">
				<h3>2. Switch Trunking (802.1Q)</h3>
				<p>
					Sunucunun switch portu Trunk olarak ayarlanır. İşletim sistemi seviyesinde her VLAN için sanal sub-interface kurulup Scout üzerinden yerel Layer 2 taraması tetiklenir.
				</p>
				<div class="code-box">
					# Sanal NIC (eth0.10) uzerinden taranir:<br>
					acklog-scout -scan 10.1.10.0/24
				</div>
			</div>

			<div class="guide-card recommend">
				<h3>3. Dağıtık Ajan (Önerilen) ✅</h3>
				<p>
					Her VLAN'de 1 sunucuya Scout kopyalanır. Ajanlar kendi VLAN'ini tarayarak sonucu HTTPS (443) ile buradaki Scout Sunucunuza iletir. Firewall delmeye gerek kalmaz.
				</p>
				<div class="code-box">
					# Client olarak taranan veriyi merkeze post et:<br>
					acklog-scout -mode client -server http://&lt;SUNUCU_IP&gt;:8080 -local -action audit
				</div>
			</div>

		</div>
	</div>
</body>
</html>`
