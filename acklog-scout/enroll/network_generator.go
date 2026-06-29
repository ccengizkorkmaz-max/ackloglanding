package enroll

import "fmt"

// GenerateCLICommands returns copy-paste command snippets for proprietary firewalls/switches
func GenerateCLICommands(deviceType, siemIP string, port int) string {
	switch deviceType {
	case "Cisco IOS":
		return fmt.Sprintf(
			"Cisco IOS cihazina Console/SSH uzerinden baglanip sirasiyla su komutlari girin:\n\n"+
				"  enable\n"+
				"  configure terminal\n"+
				"  logging host %s\n"+
				"  logging trap informational\n"+
				"  logging facility local7\n"+
				"  end\n"+
				"  write memory\n",
			siemIP,
		)
	case "FortiGate":
		return fmt.Sprintf(
			"FortiGate CLI konsoluna baglanip sirasiyla su komutlari girin:\n\n"+
				"  config log syslogd setting\n"+
				"    set status enable\n"+
				"    set server \"%s\"\n"+
				"    set port %d\n"+
				"    set mode udp\n"+
				"    set facility local7\n"+
				"  end\n"+
				"  config log syslogd filter\n"+
				"    set severity information\n"+
				"  end\n",
			siemIP, port,
		)
	case "Sophos XG":
		return fmt.Sprintf(
			"Sophos XG Firewall konsoluna baglanip sirasiyla su komutlari girin:\n\n"+
				"  system diagnostics syslog host add name ACKLOG_Syslog ipaddress %s port %d facility Local7 severity Debug\n"+
				"  system diagnostics syslog filter add name ACKLOG_Filter logtype Traffic status Enable\n",
			siemIP, port,
		)
	}
	return "Desteklenmeyen network cihaz tipi."
}
