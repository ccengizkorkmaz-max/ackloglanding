package enroll

import (
	"archive/zip"
	"bytes"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

// SysmonConfigXML defines the standard siber guvenlik rules template for Sysmon
const SysmonConfigXML = `<Sysmon schemaversion="4.50">
  <HashAlgorithms>md5,sha256</HashAlgorithms>
  <EventFiltering>
    <!-- Process Creation (Event 1) - Capture cmd, powershell and other process spawns -->
    <RuleGroup name="Process Creation" groupRelation="or">
      <ProcessCreate onmatch="include">
        <Image condition="contains">cmd.exe</Image>
        <Image condition="contains">powershell.exe</Image>
        <Image condition="contains">wscript.exe</Image>
        <Image condition="contains">cscript.exe</Image>
        <Image condition="contains">mshta.exe</Image>
        <Image condition="contains">scrcons.exe</Image>
      </ProcessCreate>
    </RuleGroup>
    <!-- Driver Load (Event 6) -->
    <RuleGroup name="Driver Load" groupRelation="or">
      <DriverLoad onmatch="exclude" />
    </RuleGroup>
    <!-- Raw Access Read (Event 9) -->
    <RuleGroup name="Raw Access Read" groupRelation="or">
      <RawAccessRead onmatch="exclude" />
    </RuleGroup>
    <!-- Process Access (Event 10) - LSASS credential dumping protection -->
    <RuleGroup name="Process Access" groupRelation="or">
      <ProcessAccess onmatch="include">
        <TargetImage condition="is">C:\Windows\system32\lsass.exe</TargetImage>
      </ProcessAccess>
    </RuleGroup>
  </EventFiltering>
</Sysmon>`

// EnrollPolicy enables a specific Windows advanced audit policy GUID using auditpol.exe.
func EnrollPolicy(guid string, required string) error {
	success := "disable"
	failure := "disable"

	req := strings.ToLower(required)
	if strings.Contains(req, "success") {
		success = "enable"
	}
	if strings.Contains(req, "failure") {
		failure = "enable"
	}

	cmd := exec.Command("auditpol", "/set", "/subcategory:"+guid, "/success:"+success, "/failure:"+failure)
	var stderr bytes.Buffer
	cmd.Stderr = &stderr
	err := cmd.Run()
	if err != nil {
		return fmt.Errorf("auditpol set hatasi: %s (%v)", strings.TrimSpace(stderr.String()), err)
	}

	return nil
}

// DownloadFile downloads a file from a URL and saves it locally.
func DownloadFile(url string, destPath string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("sunucu HTTP hatasi verdi: %s", resp.Status)
	}

	out, err := os.Create(destPath)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}

// Unzip extracts a ZIP file into a destination directory.
func Unzip(src string, dest string) ([]string, error) {
	var filenames []string

	r, err := zip.OpenReader(src)
	if err != nil {
		return nil, err
	}
	defer r.Close()

	for _, f := range r.File {
		fpath := filepath.Join(dest, f.Name)

		// Guard against Zip Slip vulnerability
		if !strings.HasPrefix(fpath, filepath.Clean(dest)+string(os.PathSeparator)) {
			return nil, fmt.Errorf("gecersiz dosya yolu: %s", fpath)
		}

		filenames = append(filenames, fpath)

		if f.FileInfo().IsDir() {
			os.MkdirAll(fpath, os.ModePerm)
			continue
		}

		if err = os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
			return nil, err
		}

		outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
		if err != nil {
			return nil, err
		}

		rc, err := f.Open()
		if err != nil {
			outFile.Close()
			return nil, err
		}

		_, err = io.Copy(outFile, rc)

		outFile.Close()
		rc.Close()

		if err != nil {
			return nil, err
		}
	}
	return filenames, nil
}

// InstallSysmon downloads, extracts, and installs Microsoft Sysmon with standard security rule baseline config.
func InstallSysmon() error {
	tempDir := filepath.Join(os.TempDir(), "acklog-sysmon-install")
	os.MkdirAll(tempDir, os.ModePerm)
	defer os.RemoveAll(tempDir) // Ensure cleanup of temp files

	zipPath := filepath.Join(tempDir, "Sysmon.zip")
	url := "https://download.sysinternals.com/files/Sysmon.zip"

	fmt.Println("[*] Sysmon paketi Microsoft Sysinternals uzerinden indiriliyor...")
	err := DownloadFile(url, zipPath)
	if err != nil {
		return fmt.Errorf("Sysmon indirilemedi: %v", err)
	}

	fmt.Println("[*] Arxivden cikariliyor...")
	_, err = Unzip(zipPath, tempDir)
	if err != nil {
		return fmt.Errorf("Sysmon zipten cikarilamadi: %v", err)
	}

	// Write baseline XML config
	configPath := filepath.Join(tempDir, "sysmon-config.xml")
	err = os.WriteFile(configPath, []byte(SysmonConfigXML), 0644)
	if err != nil {
		return fmt.Errorf("Sysmon kural dosyasi yazilamadi: %v", err)
	}

	// Find the correct executable (64-bit is standard)
	binaryPath := filepath.Join(tempDir, "Sysmon64.exe")
	if _, err := os.Stat(binaryPath); os.IsNotExist(err) {
		binaryPath = filepath.Join(tempDir, "Sysmon.exe")
	}

	fmt.Println("[*] Sysmon servisi kuruluyor (EULA onaylaniyor)...")
	cmd := exec.Command(binaryPath, "-i", configPath, "-accepteula")
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	err = cmd.Run()
	if err != nil {
		return fmt.Errorf("Sysmon kurulum hatasi: %s (%v)", strings.TrimSpace(stderr.String()), err)
	}

	fmt.Println("[+] Sysmon basariyla kuruldu ve güvenlik kuralları uygulandi.")
	return nil
}
