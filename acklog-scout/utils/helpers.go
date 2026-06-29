package utils

import (
	"os"
	"runtime"
	"syscall"
)

// IsAdmin checks if the current process is running with elevated Administrator (Windows) or root (Linux) privileges.
func IsAdmin() bool {
	if runtime.GOOS == "windows" {
		shell32 := syscall.NewLazyDLL("shell32.dll")
		isUserAnAdmin := shell32.NewProc("IsUserAnAdmin")
		ret, _, _ := isUserAnAdmin.Call()
		return ret != 0
	}
	
	// Fallback check for Linux/macOS root
	return os.Getuid() == 0
}
