package report

import (
	"fmt"
	"os"
	"runtime"
	"strings"
	"syscall"

	"acklog-scout/audit"
)

const (
	ColorReset  = "\033[0m"
	ColorRed    = "\033[31m"
	ColorGreen  = "\033[32m"
	ColorYellow = "\033[33m"
	ColorBlue   = "\033[34m"
	ColorCyan   = "\033[36m"
	ColorBold   = "\033[1m"
)

// EnableVirtualTerminal enables ANSI escape codes support on Windows console.
func EnableVirtualTerminal() {
	if runtime.GOOS != "windows" {
		return
	}
	handle, err := syscall.GetStdHandle(syscall.STD_OUTPUT_HANDLE)
	if err != nil {
		return
	}
	var mode uint32
	err = syscall.GetConsoleMode(handle, &mode)
	if err != nil {
		return
	}
	mode |= 0x0004 // ENABLE_VIRTUAL_TERMINAL_PROCESSING
	syscall.SetConsoleMode(handle, mode)
}

// GenerateHTMLReport creates a modern, styled HTML security compliance log audit report.
func GenerateHTMLReport(checks []audit.PolicyCheck, sysmon audit.SysmonStatus, dbAudit audit.DatabaseAuditStatus, filePath string) error {
	var tableRows strings.Builder
	compliantCount := 0

	for _, check := range checks {
		statusClass := "non-compliant"
		statusText := "UYUMSUZ"
		badge := "❌"
		if check.Compliant {
			statusClass = "compliant"
			statusText = "UYUMLU"
			badge = "✅"
			compliantCount++
		}

		row := fmt.Sprintf(`
			<tr>
				<td><strong>%s</strong><br><small style="color: #888;">%s</small></td>
				<td>%s</td>
				<td>%s</td>
				<td><span class="risk-badge risk-%s">%s</span></td>
				<td><span class="status-badge %s">%s %s</span></td>
			</tr>`,
			check.Name, check.Description,
			check.CurrentValue,
			check.Required,
			strings.ToLower(check.RiskLevel), check.RiskLevel,
			statusClass, badge, statusText,
		)
		tableRows.WriteString(row)
	}

	sysmonStatusHTML := ""
	if sysmon.Installed {
		state := "DURDU ❌"
		stateClass := "non-compliant"
		if sysmon.Running {
			state = "CALISIYOR ✅"
			stateClass = "compliant"
		}
		sysmonStatusHTML = fmt.Sprintf(`
			<div class="sysmon-card">
				<h3>Sysmon (System Monitor) Bilgileri</h3>
				<p><strong>Servis Adi:</strong> %s</p>
				<p><strong>Versiyon:</strong> %s</p>
				<p><strong>Durum:</strong> <span class="status-badge %s">%s</span></p>
			</div>`,
			sysmon.ServiceName, sysmon.Version, stateClass, state,
		)
	} else {
		sysmonStatusHTML = `
			<div class="sysmon-card warning-card">
				<h3>⚠️ Sysmon Servisi Eksik!</h3>
				<p>Sistemde kurulu bir Sysmon servisi tespit edilemedi. Siber saldirganlarin gerceklestirdigi proses olusturma, uzaktan thred enjeksiyonu veya LSASS hafiza dokumu (credential dumping) gibi gelismis eylemleri tespit edebilmek icin Sysmon kurulmasi hayati onem tasir.</p>
			</div>`
	}

	dbStatusHTML := ""
	if dbAudit.DBInstalled {
		stateClass := "non-compliant"
		statusText := "UYUMSUZ"
		if dbAudit.Compliant {
			stateClass = "compliant"
			statusText = "UYUMLU"
		}
		dbStatusHTML = fmt.Sprintf(`
			<div class="sysmon-card">
				<h3>Veritabani Loglama ve Guvenlik Duvari (DBF) Bilgileri</h3>
				<p><strong>Veritabani Turu:</strong> %s</p>
				<p><strong>Yontem / Log Kaynagi:</strong> %s</p>
				<p><strong>Uyum Durumu:</strong> <span class="status-badge %s">%s</span></p>
			</div>`,
			dbAudit.DBType, dbAudit.LogSourceText, stateClass, statusText,
		)
	}

	htmlContent := fmt.Sprintf(`<!DOCTYPE html>
<html lang="tr">
<head>
	<meta charset="UTF-8">
	<title>ACKLOG Scout - Log Uyum Raporu</title>
	<style>
		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			background-color: #0d1117;
			color: #c9d1d9;
			margin: 0;
			padding: 40px 20px;
		}
		.container {
			max-width: 1000px;
			margin: 0 auto;
			background: #161b22;
			border-radius: 8px;
			border: 1px solid #30363d;
			padding: 40px;
			box-shadow: 0 4px 10px rgba(0,0,0,0.3);
		}
		h1, h2, h3 {
			color: #58a6ff;
		}
		.header {
			text-align: center;
			border-bottom: 2px solid #30363d;
			padding-bottom: 20px;
			margin-bottom: 30px;
		}
		.header h1 {
			margin: 0 0 10px 0;
			font-size: 32px;
			color: #10b981;
		}
		.stats {
			display: flex;
			justify-content: space-around;
			margin-bottom: 30px;
			background: #21262d;
			padding: 15px;
			border-radius: 6px;
		}
		.stat-box {
			text-align: center;
		}
		.stat-box .num {
			font-size: 28px;
			font-weight: bold;
		}
		.stat-box .label {
			font-size: 14px;
			color: #8b949e;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			margin-bottom: 30px;
		}
		th, td {
			padding: 12px 15px;
			text-align: left;
			border-bottom: 1px solid #30363d;
		}
		th {
			background-color: #21262d;
			color: #58a6ff;
		}
		.risk-badge {
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 12px;
			font-weight: bold;
		}
		.risk-kritik { background: #f85149; color: #fff; }
		.risk-yuksek { background: #db6d28; color: #fff; }
		.risk-orta { background: #d29922; color: #000; }
		.status-badge {
			padding: 6px 12px;
			border-radius: 12px;
			font-size: 13px;
			font-weight: bold;
		}
		.compliant { background: #238636; color: #fff; }
		.non-compliant { background: #da3637; color: #fff; }
		.sysmon-card {
			background: #21262d;
			border: 1px solid #30363d;
			padding: 20px;
			border-radius: 6px;
			margin-top: 30px;
		}
		.warning-card {
			border-left: 5px solid #d29922;
		}
		.footer {
			margin-top: 50px;
			text-align: center;
			font-size: 13px;
			color: #8b949e;
			border-top: 1px solid #30363d;
			padding-top: 20px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>ACKLOG Scout</h1>
			<h2>Yerel Guvenlik Log Denetim Raporu</h2>
			<p>Analiz Edilen Sistem: Windows Host</p>
		</div>
		
		<div class="stats">
			<div class="stat-box">
				<div class="num" style="color: #58a6ff;">%d</div>
				<div class="label">Toplam Denetim</div>
			</div>
			<div class="stat-box">
				<div class="num" style="color: #10b981;">%d</div>
				<div class="label">Uyumlu Ilkeler</div>
			</div>
			<div class="stat-box">
				<div class="num" style="color: #f85149;">%d</div>
				<div class="label">Uyumsuz Ilkeler</div>
			</div>
		</div>

		<table>
			<thead>
				<tr>
					<th>Denetim Ilkesi</th>
					<th>Mevcut Durum</th>
					<th>Gereksinim</th>
					<th>Risk Seviyesi</th>
					<th>Uyum Durumu</th>
				</tr>
			</thead>
			<tbody>
				%s
			</tbody>
		</table>

		%s

		%s

		<div class="footer">
			<p>Bu rapor <strong>ACKLOG Scout</strong> denetim araci tarafindan otomatik uretilmistir.</p>
			<p>Daha detayli analiz ve kurumsal log yonetimi icin <a href="https://logsiem.com" style="color: #58a6ff; text-decoration: none;">logsiem.com</a> adresini ziyaret edin.</p>
		</div>
	</div>
</body>
</html>`,
		len(checks), compliantCount, len(checks)-compliantCount,
		tableRows.String(),
		sysmonStatusHTML,
		dbStatusHTML,
	)

	return os.WriteFile(filePath, []byte(htmlContent), 0644)
}
