package main

import (
	"flag"
	"fmt"
	"os"
	"os/exec"
	"time"
	"acklog-scout/audit"
	"acklog-scout/enroll"
	"acklog-scout/report"
	"acklog-scout/scan"
	"acklog-scout/utils"
)

func main() {
	// Enable Virtual Terminal coloring on Windows
	report.EnableVirtualTerminal()

	// Parse CLI flags
	localAudit := flag.Bool("local", false, "Yerel makinede log denetimi gerceklestir")
	scanRange := flag.String("scan", "", "Ag taramasi yapilacak IP araligi (Orn: 192.168.1.0/24)")
	action := flag.String("action", "audit", "Uygulanacak islem: 'audit' (denetim) veya 'enroll' (otomatik yapilandirma)")
	help := flag.Bool("help", false, "Yardim menusu")

	flag.Parse()

	if *help || ( !*localAudit && *scanRange == "" ) {
		printHelp()
		os.Exit(0)
	}

	fmt.Println("==================================================")
	fmt.Println("    ACKLOG Scout - Log Denetim ve Kurulum Araci   ")
	fmt.Println("==================================================")

	if *localAudit {
		fmt.Printf("Islem: Yerel Denetim (Mod: %s)\n", *action)
		runLocalAudit(*action)
	} else if *scanRange != "" {
		fmt.Printf("Islem: Ag Taramasi (%s) (Mod: %s)\n", *scanRange, *action)
		runNetworkScan(*scanRange, *action)
	}
}

func printHelp() {
	fmt.Println("ACKLOG Scout Kullanimi:")
	fmt.Println("  acklog-scout [secenekler]")
	fmt.Println("\nSecenekler:")
	fmt.Println("  -local         Yerel makinede log denetimi gerceklestir")
	fmt.Println("  -scan <ip>     Belirtilen ag araliginda tarama yap (Orn: 192.168.1.0/24)")
	fmt.Println("  -action <mod>  Uygulanacak islem: 'audit' (varsayilan) veya 'enroll'")
	fmt.Println("  -help          Bu yardim ekranini goster")
	fmt.Println("\nOrnekler:")
	fmt.Println("  acklog-scout -local -action audit")
	fmt.Println("  acklog-scout -scan 192.168.1.0/24 -action audit")
}

func runLocalAudit(action string) {
	fmt.Println("[*] Yerel Windows log denetim modulu baslatiliyor...")

	if !utils.IsAdmin() {
		fmt.Println("[!] HATA: Bu islemi gerceklestirmek icin yetkileriniz yetersiz.")
		fmt.Println("[!] Lutfen programi Administrator (Yonetici) olarak calistirin.")
		return
	}

	fmt.Println("[+] Yonetici yetkileri dogrulandi. Denetim basliyor...\n")

	checks, err := audit.WindowsAudit()
	if err != nil {
		fmt.Printf("[!] Hata: %v\n", err)
		return
	}

	fmt.Println("----------------------------------------------------------------------------------------------------")
	fmt.Printf("%-35s | %-15s | %-15s | %-15s | %-10s\n", "Denetim Ilkesi", "Mevcut Durum", "Gereksinim", "Risk Seviyesi", "Uyum Durumu")
	fmt.Println("----------------------------------------------------------------------------------------------------")

	compliantCount := 0
	var nonCompliantGUIDs []string
	for _, check := range checks {
		status := "UYUMSUZ ❌"
		if check.Compliant {
			status = "UYUMLU  ✅"
			compliantCount++
		} else {
			nonCompliantGUIDs = append(nonCompliantGUIDs, check.GUID)
		}
		fmt.Printf("%-35s | %-15s | %-15s | %-15s | %-10s\n", 
			check.Name, 
			truncateString(check.CurrentValue, 15), 
			truncateString(check.Required, 15), 
			check.RiskLevel, 
			status,
		)
	}
	fmt.Println("----------------------------------------------------------------------------------------------------")
	fmt.Printf("\n[+] Toplam Denetim: %d | Uyumlu: %d | Uyumsuz: %d\n", len(checks), compliantCount, len(checks)-compliantCount)

	// Sysmon Audit Output
	sysmon := audit.CheckSysmon()
	fmt.Println("\n================================================================================================----")
	fmt.Println("    Sysmon (System Monitor) Denetim Raporu")
	fmt.Println("================================================================================================----")
	if sysmon.Installed {
		state := "DURDU ❌"
		if sysmon.Running {
			state = "CALISIYOR ✅"
		}
		fmt.Printf("Servis Adi: %-15s | Versiyon: %-10s | Durum: %-10s\n", sysmon.ServiceName, sysmon.Version, state)
	} else {
		fmt.Println("[!] UYARI: Sysmon servisi sistemde tespit edilemedi! ❌")
	}
	fmt.Println("================================================================================================----")

	// Database Audit Output
	dbAudit := audit.CheckDatabaseLogs()
	if dbAudit.DBInstalled {
		fmt.Println("\n================================================================================================----")
		fmt.Println("    Veritabani (Database) Loglama ve Guvenlik Duvari (DBF) Denetim Raporu")
		fmt.Println("================================================================================================----")
		fmt.Printf("Veritabani Turu: %-15s | Log Kaynagi Yontemi: %s\n", dbAudit.DBType, dbAudit.LogSourceText)
		if dbAudit.Compliant {
			fmt.Println("Durum: UYUMLU ✅ (Yuksek performansli loglama yontemi dogrulanmistir)")
		} else {
			fmt.Println("Durum: UYUMSUZ ❌ (Yerel loglama kapali ve DBF/Ag Aynalama korumasi bulunamadi)")
		}
		fmt.Println("================================================================================================----")
	}

	// Generate HTML Report
	reportPath := "acklog-scout-report.html"
	err = report.GenerateHTMLReport(checks, sysmon, dbAudit, reportPath)
	if err == nil {
		fmt.Printf("\n[+] Kurumsal HTML uyumluluk raporu basariyla uretildi: %s\n", reportPath)
	} else {
		fmt.Printf("\n[!] Hata: HTML raporu uretilemedi: %v\n", err)
	}

	// 2. Enroll Phase (Only runs if action is 'enroll')
	if action == "enroll" {
		fmt.Println("\n[*] Otomatik Yapilandirma (Auto-Enrollment) baslatiliyor...")

		// A. Fix Audit Policies
		if len(nonCompliantGUIDs) > 0 {
			fmt.Printf("[*] %d adet uyumsuz denetim ilkesi otomatik etkinlestiriliyor...\n", len(nonCompliantGUIDs))
			for _, check := range checks {
				if !check.Compliant {
					fmt.Printf("  -> %s etkinlestiriliyor...", check.Name)
					err := enroll.EnrollPolicy(check.GUID, check.Required)
					if err != nil {
						fmt.Printf(" [HATA: %v]\n", err)
					} else {
						fmt.Println(" [TAMAMLANDI ✅]")
					}
				}
			}
		} else {
			fmt.Println("[+] Tum denetim ilkeleri zaten uyumlu durumda.")
		}

		// B. Fix Sysmon
		if !sysmon.Installed {
			fmt.Println("[*] Sysmon kurulu degil, otomatik kurulum baslatiliyor...")
			err := enroll.InstallSysmon()
			if err != nil {
				fmt.Printf("[!] Hata: Sysmon otomatik kurulamadi: %v\n", err)
			}
		} else if !sysmon.Running {
			fmt.Println("[*] Sysmon servisi durdurulmus, baslatiliyor...")
			cmd := exec.Command("sc", "start", sysmon.ServiceName)
			if cmd.Run() == nil {
				fmt.Println("[+] Sysmon servisi baslatildi. ✅")
			} else {
				fmt.Println("[!] Hata: Sysmon servisi baslatilamadi.")
			}
		} else {
			fmt.Println("[+] Sysmon zaten kurulu ve aktif durumda. ✅")
		}

		fmt.Println("\n[+] Otomatik yapilandirma tamamlandi. Degisiklikleri gormek icin programi tekrar '-action audit' ile calistirin.")
	}
}

func truncateString(str string, length int) string {
	if len(str) > length {
		return str[:length-3] + "..."
	}
	return str
}

func runNetworkScan(targetRange string, action string) {
	fmt.Printf("[*] Ag taramasi baslatiliyor: %s...\n", targetRange)

	ips, err := scan.ParseCIDR(targetRange)
	if err != nil {
		fmt.Printf("[!] Hata: %v\n", err)
		return
	}

	criticalPorts := []int{22, 80, 135, 443, 445, 1433, 1521, 3306, 5432} // SSH, HTTP, RPC, HTTPS, SMB, MSSQL, Oracle, MySQL, PGSQL
	fmt.Printf("[*] Toplam %d IP adresi kritik portlar (%v) uzerinden taranacak...\n", len(ips), criticalPorts)

	start := time.Now()
	results := scan.ScanRange(ips, criticalPorts, 50, 500*time.Millisecond)
	duration := time.Since(start)

	fmt.Printf("\n[*] Tarama tamamlandi. Sure: %v\n", duration)
	fmt.Printf("[+] Bulunan Aktif Cihaz Sayisi: %d\n\n", len(results))

	for _, host := range results {
		fmt.Printf("IP: %-15s | Cihaz Tipi: %-45s | Portlar: %v\n", host.IP, host.OS, host.OpenPorts)
	}
}
