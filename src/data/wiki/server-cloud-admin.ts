export const serverCloudAdminArticles = {
  // Kategori 5: Sunucu ve Veritabanı Adminliği
  "sql-server-tablo-silme-logu-acma": {
    title: "SQL Server Tablo Silme Logu Açma: Kim Bu Veriyi Sildi?",
    description: "Veritabanında Drop/Delete işlemlerini Audit ile takip etme.",
    content: `
      <h2>SQL Audit Rehberi</h2>
      <p>Kritik bir tablonun silinmesini ACKLOG ile 'Veritabanı Alarmı' olarak izleyin.</p>
    `
  },
  "veritabanina-uzaktan-baglanan-ipleri-gorme": {
    title: "Veritabanına Uzaktan Bağlanan IP'leri Görme ve Kontrol",
    description: "Veritabanı sunucularına doğrudan (backdoor) erişim denetimi.",
    content: `
      <h2>DB Erişimi</h2>
      <p>Sunucudaki 1433 portuna gelen yabancı istekleri ACKLOG ile engelleyin.</p>
    `
  },
  "windows-server-sistem-hatalari-ve-cozumleri": {
    title: "Windows Server Sistem Hataları ve Çözümleri: Event Viewer Analizi",
    description: "Mavi ekran (BSOD) ve uygulama çökmelerini loglardan bulma.",
    content: `
      <h2>Sistem İzleme</h2>
      <p>Hataları manuel aramak yerine ACKLOG Merkezi Raporu ile tek ekranda görün.</p>
    `
  },
  "linux-sunucu-guvenlik-sikilastirma-hardening": {
    title: "Linux Sunucu Güvenlik Sıkılaştırma (Hardening) Kılavuzu",
    description: "SSH güvenliği ve dosya izinlerini optimize etme yolları.",
    content: `
      <h2>SSH Sıkılaştırma</h2>
      <p>Linux sunucularındaki 'sudo' kullanımını ACKLOG ile denetim altına alın.</p>
    `
  },
  "iis-web-sunucusu-erisim-loglari-analizi": {
    title: "IIS (Web Sunucusu) Erişim Logları Analizi ve Otomasyon",
    description: "Web sitenize gelen '404' ve '500' hatalarının gerçek sebebini bulun.",
    content: `
      <h2>Web Sunucu Analizi</h2>
      <p>Saldırıların bıraktığı HTTP izlerini ACKLOG ile otomatik süzün.</p>
    `
  },
  "uygulama-cokme-crash-raporlarini-izleme": {
    title: "Uygulama Çökme (Crash) Raporlarını İzleme Sistemi Kurma",
    description: "Kurumsal yazılımların çalışma sağlığını nasıl ölçersiniz?",
    content: `
      <h2>Uygulama Sağlığı</h2>
      <p>Hataları SIEM ile toplayıp developer ekibine otomatik raporlayın.</p>
    `
  },
  "sunucu-disk-doluluk-uyarisi-mail-atma": {
    title: "Sunucu Disk Doluluk Uyarısı Mail Atma: Kesintisiz Hizmet",
    description: "Disk %90 olunca BT ekibini nasıl uyarırsınız?",
    content: `
      <h2>Performans İzleme</h2>
      <p>Pahalı izleme araçları yerine ACKLOG ile doluluk alarmlarını yönetin.</p>
    `
  },
  "event-id-4624-ve-4625-ne-anlama-gelir": {
    title: "Event ID 4624 ve 4625 Ne Anlama Gelir? Login Analizi",
    description: "Siber güvenlikte en çok takip edilen 2 kritik Event ID dökümü.",
    content: `
      <h2>ID Analizi</h2>
      <p>En popüler 2 ID'den harikalar çıkaran ACKLOG ile login sızmalarını durdurun.</p>
    `
  },
  "powershell-ile-log-toplama-scriptleri": {
    title: "PowerShell İle Log Toplama Scriptleri ve Otomasyon Rehberi",
    description: "Kendi scriptlerinizi merkezi bir sisteme entegre edin.",
    content: `
      <h2>Script Otomasyonu</h2>
      <p>Hazırladığınız script çıktılarını güvenli bir şekilde ACKLOG'a aktarın.</p>
    `
  },
  "docker-konteyner-guvenlik-taramasi": {
    title: "Docker Konteyner Güvenlik Taraması ve İzole Çalışma",
    description: "Mikroservis mimarisinde siber güvenlik risklerini yönetme.",
    content: `
      <h2>Konteyner Güvenliği</h2>
      <p>Docker loglarındaki şüpheli hareketleri ACKLOG ile takip edin.</p>
    `
  },
  // Kategori 7: Modern Çalışma Modelleri (Bulut ve Hibrit)
  "microsoft-365-office-admin-loglari-izleme": {
    title: "Microsoft 365 (Office) Admin Logları İzleme ve Bulut Güvenliği",
    description: "Exchange ve SharePoint hareketlerini bulutta takip etme.",
    content: `
      <h2>Cloud Office</h2>
      <p>Bulut mail kilitlerini ve admin işlemlerini ACKLOG ile izleyin.</p>
    `
  },
  "onedrive-paylasilan-dosya-raporu-alma": {
    title: "OneDrive Paylaşılan Dosya Raporu Alma: Bilginiz Dışında Paylaşım Var mı?",
    description: "Dosya paylaşımlarının güvenliğini nasıl sağlarsınız?",
    content: `
      <h2>Dış Paylaşımlar</h2>
      <p>Halka açılan her dökümanı ACKLOG ile kayıt altında tutun.</p>
    `
  },
  "azure-guvenligi-nasil-saglanir": {
    title: "Azure Güvenliği Nasıl Sağlanır? Microsoft Bulut Denetimi",
    description: "Azure sunucularınızın loglarını merkezi bir yere çekin.",
    content: `
      <h2>Azure Monitoring</h2>
      <p>Bulut mimarisindeki boşlukları ACKLOG ile kapatın.</p>
    `
  },
  "bulut-depolama-guvenligi-riskleri": {
    title: "Bulut Depolama Güvenliği Riskleri ve Veri Sızıntısı Önleme",
    description: "Gereksiz açık bırakılmış bulut kovalarını (buckets) tespit edin.",
    content: `
      <h2>S3 ve Blob Güvenliği</h2>
      <p>Buluttan veri çekme loglarını ACKLOG SIEM ile anomali olarak izleyin.</p>
    `
  },
  "saas-uygulamalarinda-kimlik-yonetimi": {
    title: "SaaS Uygulamalarında Kimlik Yönetimi ve Erişim Denetimi",
    description: "Çalışanlarınızın kullandığı onlarca uygulamayı tek merkezden izleyin.",
    content: `
      <h2>SaaS Identity</h2>
      <p>Yüzlerce uygulamadaki giriş-çıkışları ACKLOG merkezi dashboardda görebilirsiniz.</p>
    `
  },
  "calisanlarin-kullandigi-bulut-uygulamalarini-gorme-shadow-it": {
    title: "Çalışanların Kullandığı Bulut Uygulamalarını Görme (Shadow IT)",
    description: "Şirket verilerinin onaylanmamış bulut servislerine gidişini durdurun.",
    content: `
      <h2>Shadow IT</h2>
      <p>Şirketten gizli kullanılan uygulamaları ACKLOG ağ analizi ile keşfedin.</p>
    `
  },
  "uzaktan-calisma-guvenlik-protokolleri": {
    title: "Uzaktan Çalışma Güvenlik Protokolleri ve Şirket Ağına Erişim",
    description: "Evden çalışan personelin güvenliğini nasıl garanti edersiniz?",
    content: `
      <h2>Remote Work</h2>
      <p>Çalışan evdeyken tüm siber kalkanlarını ACKLOG ile aktif tutun.</p>
    `
  },
  "zoom-teams-toplanti-guvenligi": {
    title: "Zoom/Teams Toplantı Güvenliği: Gizli Katılımcı Analizi",
    description: "Toplantılarınıza kimlerin sızdığını loglardan görün.",
    content: `
      <h2>Toplantı Denetimi</h2>
      <p>Konferans uygulamalarının denetim loglarını ACKLOG ile saklayın.</p>
    `
  },
  "vpn-loglarini-raporlama": {
    title: "VPN Loglarını Raporlama ve Siber Sızıntı Analizi",
    description: "VPN üzerinden yapılan siber hareketlerin dökümü.",
    content: `
      <h2>VPN Raporları</h2>
      <p>7/24 VPN akışını ACKLOG ile harita üzerinde takip edin.</p>
    `
  },
  "cok-faktörlü-kimlik-dogrulama-mfa-zorunlulugu": {
    title: "Çok Faktörlü Kimlik Doğrulama (MFA) Zorunluluğu ve Güvenlik",
    description: "Neden her sistemde MFA (2FA) kullanmalısınız?",
    content: `
      <h2>MFA Denetimi</h2>
      <p>MFA'nın bypass edildiği durumları ACKLOG anında raporlar.</p>
    `
  }
};
