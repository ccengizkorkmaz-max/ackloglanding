export const networkOpsSecurityArticles = {
  // Kategori 3: Ağ ve Altyapı Sorunları
  "ag-trafigi-izleme-araclari-network-sniffer": {
    title: "Ağ Trafiği İzleme Araçları (Network Sniffer) ve Paket Analizi",
    description: "Wireshark ötesinde profesyonel şüpheli trafik analizi yöntemleri.",
    content: `
      <h2>Network Sniffing Rehberi</h2>
      <p>Ağınızda yavaşlık mı var? Hangi cihazın paket kaybettiğini veya multicast fırtınası yarattığını ACKLOG ile görselleştirin.</p>
    `
  },
  "hangi-uygulama-interneti-yavaslatiyor": {
    title: "Hangi Uygulama İnterneti Yavaşlatıyor? Bant Genişliği Analizi",
    description: "Cloud backup mı yoksa gizli bir download mı? İnternet trafiği tespiti.",
    content: `
      <h2>İnternet Yavaşlığı Tespiti</h2>
      <p>Kullanıcıların ne kadar bant genişliği harcadığını ACKLOG üzerinden uygulama bazlı (L7) raporlayın.</p>
    `
  },
  "anormal-trafik-artisi-tespiti": {
    title: "Anormal Trafik Artışı Tespiti: Ağınızda DDoS mu var?",
    description: "Saniyedeki paket sayısındaki (PPS) ani artışları anlama ve önleme.",
    content: `
      <h2>DDoS ve Anomali</h2>
      <p>Normalin %200 üzerine çıkan trafik artışlarını ACKLOG SIEM "DDoS Başlangıcı" olarak işaretler.</p>
    `
  },
  "ic-agda-lan-port-taramasi-yapan-ip-bulma": {
    title: "İç Ağda (LAN) Port Taraması Yapan IP'yi Bulma",
    description: "Bir cihazınız hacklendi ve diğerlerini mi tarıyor? Hemen yakalayın.",
    content: `
      <h2>Lateral Movement Tespiti</h2>
      <p>Kendi cihazlarınızın birbirine saldırmasını ACKLOG "Port Scan" korelasyonu ile görün.</p>
    `
  },
  "switch-loglarini-merkezi-bir-yerde-toplama": {
    title: "Switch Loglarını Merkezi Bir Yerde Toplama ve Analiz",
    description: "Cisco, HP, Aruba switch loglarını Syslog ile SIEM'e çekme.",
    content: `
      <h2>Omurga Güvenliği</h2>
      <p>Switchlerdeki 'Port Security' olaylarını ACKLOG ile merkezi dashboarda taşıyın.</p>
    `
  },
  "firewall-uzerinden-gecen-trafik-analizi": {
    title: "Firewall Üzerinden Geçen Trafik Analizi: Dropped vs Permitted",
    description: "Hangi kurallar en çok trafiğe neden oluyor? Kural optimizasyonu.",
    content: `
      <h2>Firewall Analizi</h2>
      <p>Engellenen (drop) trafikler size saldırı rotasını gösterir. ACKLOG ile bu trafiği harita üzerinde izleyin.</p>
    `
  },
  "wi-fi-sifresini-kimler-biliyor": {
    title: "Wi-Fi Şifresini Kimler Biliyor? (Misafir Ağ Takibi ve Güvenlik)",
    description: "Kurumsal kablosuz ağlarda izinsiz cihaz tespiti.",
    content: `
      <h2>Wi-Fi Güvenliği</h2>
      <p>Radius loglarını ACKLOG ile analiz ederek ağınıza bağlanan her cihazın kimliğini doğrulayın.</p>
    `
  },
  "bant-genisligi-bandwidth-raporlama-araclari": {
    title: "Bant Genişliği (Bandwidth) Raporlama Araçları ve Kapasite Planlama",
    description: "İnternet hattınızı büyütmeli misiniz? Verilere dayalı karar verin.",
    content: `
      <h2>Kapasite Planlama</h2>
      <p>Haftalık bant genişliği değişimlerini ACKLOG ile raporlayıp yatırım maliyetlerinizi optimize edin.</p>
    `
  },
  "dns-sorgularini-izleme-ve-engelleme": {
    title: "DNS Sorgularını İzleme ve Engelleme: Veri Kaçırma (Exfiltration) Tespiti",
    description: "Zararlı sitelere giden istekleri yakalayın.",
    content: `
      <h2>DNS Tünelleme Önleme</h2>
      <p>Saldırganlar veriyi DNS üzerinden kaçırabilir. ACKLOG DNS trafiğini derinlemesine denetler.</p>
    `
  },
  "supheli-ip-adresleri-listesi-threat-intelligence": {
    title: "Şüpheli IP Adresleri Listesi (Threat Intelligence) Nedir?",
    description: "Siber istihbarat verileriyle sistemlerinizi nasıl korursunuz?",
    content: `
      <h2>TI Veri Beslemesi</h2>
      <p>ACKLOG, dünya çapındaki güncel 'Zararlı IP' listelerini (Threat Intel) sisteminize entegre eder.</p>
    `
  },
  // Kategori 8: BT Operasyon ve Raporlama
  "bt-departmani-haftalik-faaliyet-raporu-ornegi": {
    title: "BT Departmanı Haftalık Faaliyet Raporu Örneği ve Otomasyon",
    description: "Yönetime sunabileceğiniz profesyonel bir örnek IT raporu.",
    content: `
      <h2>Yönetimsel Raporlama</h2>
      <p>Manuel rapor yazmayı bırakın. ACKLOG size haftalık 'Güvenlik ve Operasyon' özetini otomatik mail atar.</p>
    `
  },
  "sistem-odasi-sicaklik-ve-nem-takibi-loglama": {
    title: "Sistem Odası Sıcaklık ve Nem Takibi: Neden Loglanmalıdır?",
    description: "Fiziksel çevre birimlerini merkezi izleme sistemiyle takip etme.",
    content: `
      <h2>Fiziksel İzleme</h2>
      <p>Sunucularınızın ısınmasını ACKLOG SIEM üzerinden kritik bir alarm olarak izleyebilirsiniz.</p>
    `
  },
  "envanter-yonetimi-ve-yazilim-lisans-takibi": {
    title: "Envanter Yönetimi ve Yazılım Lisans Takibi Otomasyonu",
    description: "Cihazlarda hangi yazılımlar yüklü? Manuel takibe son.",
    content: `
      <h2>Varlık Yönetimi</h2>
      <p>Ağınızdaki tüm cihazları ve yüklü programları ACKLOG Asset Discovery ile listeleyin.</p>
    `
  },
  "itil-sureclerinde-olay-yonetimi": {
    title: "ITIL Süreçlerinde Olay Yönetimi (Incident Management) ve SIEM",
    description: "Problemleri nasıl çözersiniz ve siber olaylara nasıl müdahale edersiniz?",
    content: `
      <h2>ITIL ve SIEM Uyumu</h2>
      <p>SIEM, bir olayın başladığını size saniyeler içinde bildirerek SLA sürelerinizi korur.</p>
    `
  },
  "servis-seviyesi-sozlesmesi-sla-takibi": {
    title: "Servis Seviyesi Sözleşmesi (SLA) Takibi Nasıl Yapılır?",
    description: "Hizmet sağlayıcılarınızın performansını denetleme rehberi.",
    content: `
      <h2>SLA Denetimi</h2>
      <p>Internet kesintileri veya sistem arızaları için otomatik SLA raporlarını ACKLOG oluşturur.</p>
    `
  },
  "help-desk-performans-olcumu": {
    title: "Help Desk Performans Ölçümü ve Analitik Veriler",
    description: "BT destek ekibinizin başarısını rakamlarla ölçün.",
    content: `
      <h2>Destek Takibi</h2>
      <p>BT biletlerindeki artışlar bir sistem geneli soruna mı işaret ediyor? ACKLOG ile bu bağı kurun.</p>
    `
  },
  "sirket-ici-siber-guvenlik-butcesi-hazirlama": {
    title: "Şirket İçi Siber Güvenlik Bütçesi Hazırlama Rehberi",
    description: "Bütçe onaylatmak için yönetime sunulacak veriler.",
    content: `
      <h2>Bütçe Savunusu</h2>
      <p>Bütçeyi onaylatmak için somut risk verileri gerekir. ACKLOG size bu risklerin dökümünü verir.</p>
    `
  },
  "siber-sigorta-yaptirmak-icin-gereken-sartlar": {
    title: "Siber Sigorta Yaptırmak İçin Gereken Şartlar ve Loglama",
    description: "Siber güvenliğinizi sigortalatırken aranan teknik kriterler.",
    content: `
      <h2>Sigorta Uyumu</h2>
      <p>Siber sigorta şirketleri değişmez log kaydı (SIEM) şartı koşturur. ACKLOG 5651 imzasıyla bu şartı karşılar.</p>
    `
  },
  "bilgi-islem-denetim-listesi-checklist": {
    title: "Bilgi İşlem Denetim Listesi (Checklist) ve Özdenetim",
    description: "Denetime girmeden önce yapmanız gereken 50 kontrol.",
    content: `
      <h2>Denetim Hazırlığı</h2>
      <p>ACKLOG Compliance modülü ile kendinizi her an denetimdeymiş gibi hazır tutun.</p>
    `
  },
  "is-surekliligi-ve-felaket-kurtarma-senaryolari": {
    title: "İş Sürekliliği ve Felaket Kurtarma (Disaster Recovery) Senaryoları",
    description: "Sistemlerinizi en kötü duruma nasıl hazırlarsınız?",
    content: `
      <h2>DRP ve Loglama</h2>
      <p>Felaket anında elinizdeki tek yol haritası loglardır. ACKLOG ile bu verileri bulutta yedekleyin.</p>
    `
  }
};
