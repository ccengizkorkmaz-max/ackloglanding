export const userDataSecurityArticles = {
  "sunucuda-silinen-dosyalari-kim-sildi": {
    title: "Sunucuda Silinen Dosyaları Kimin Sildiğini Nasıl Görürüm?",
    description: "Windows File Server üzerinde silinen dosyaların izini sürmek. Event ID 4660 ve 4663 ile faili bulma rehberi.",
    content: `
      <h2>Adli Analiz: Sunucuda Silinen Dosyayı Kim Sildi?</h2>
      <p>Sunucunuzdaki kritik bir Excel dosyası veya proje klasörü aniden yok mu oldu? "Kim sildi?" sorusu sistem yöneticilerinin en çok karşılaştığı kabustur. Eğer önceden 'Audit Policy' yapılandırmadıysanız, geçmişe dönük bunu bulmak imkansızdır.</p>
      <h3>Windows Üzerinde Takip Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Audit Object Access:</strong> GPO üzerinden dosya sistemi denetlemeyi aktif edin.</li>
        <li><strong>Event ID 4663:</strong> Bir nesneye erişildiğini gösterir.</li>
        <li><strong>Event ID 4660:</strong> Bir nesnenin gerçekten silindiğini teyit eder.</li>
      </ul>
      <p><strong>ACKLOG Çözümü:</strong> Manuel log taramak yerine ACKLOG SIEM ile "Dosya Silindi" alarmını kurun, olayı gerçekleştiği anda cep telefonunuzda görün.</p>
    `
  },
  "file-server-erisim-loglari-nerede": {
    title: "Dosya Sunucusu (File Server) Erişim Logları Nerede Tutulur?",
    description: "Dosya sunucusu kayıtlarının depolandığı yerler ve güvenli saklama yöntemleri.",
    content: `
      <h2>File Server Log Konumları</h2>
      <p>Erişim kayıtları Windows üzerinde <code>Security.evtx</code> dosyasında, Linux üzerinde ise <code>/var/log/audit/audit.log</code> altındadır. Ancak bu dosyalar sınırlı kapasiteye sahiptir. Veri kaybını önlemek için merkezi loglama şarttır.</p>
      <p>ACKLOG, dosya sunucusu loglarını otomatik pars eder ve aylar sonra bile kime ait olduğunu raporlar.</p>
    `
  },
  "paylasimdaki-klasore-kim-eristi": {
    title: "Paylaşımdaki Klasöre Kim Erişti? Adım Adım İzleme",
    description: "Network paylaşımlarında (Shared Folders) dosya erişimlerini takip etme teknikleri.",
    content: `
      <h2>Paylaşım Güvenliği</h2>
      <p>Paylaşımdaki klasörlere sızan bir kullanıcıyı tespit etmek için 'Full Control' yetkilerini kısıtlamalı ve 'Success/Failure' loglarını açmalısınız. ACKLOG'un FIM (File Integrity Monitoring) modülü, klasördeki her tıklamayı kayıt altına alır.</p>
    `
  },
  "excel-dosyasini-en-son-kim-degistirdi": {
    title: "Excel Dosyasını En Son Kim Değiştirdi? (Sistem Seviyesinde Takip)",
    description: "Excel versiyon geçmişi dışında, sunucu loglarından dosya değişimlerini yakalama.",
    content: `
      <h2>Veri Bütünlüğü Takibi</h2>
      <p>Bir belgenin içeriğinin değiştirilmesi, siber güvenlikte 'Tamper' olarak adlandırılır. ACKLOG SIEM ile kritik belgelerin (Maaş listesi, fiyat teklifleri vb.) değişimini gerçek zamanlı izleyebilirsiniz.</p>
    `
  },
  "file-integrity-monitoring-yazilimi": {
    title: "Dosya Değişiklik İzleme Yazılımları (File Integrity Monitoring) Nedir?",
    description: "FIM nedir? Neden her şirket dosya bütünlüğünü izlemelidir?",
    content: `
      <h2>FIM: Dosya Bütünlük İzleme</h2>
      <p>FIM, dosya ve klasörlerin özniteliklerindeki (hash, boyut, izin) değişiklikleri takip eder. ACKLOG, yerleşik FIM motoru ile sistem dosyalarınızın saldırganlar tarafından değiştirilmesini engeller.</p>
    `
  },
  "hassas-verilere-erisim-kontrolü": {
    title: "Hassas Verilere Erişim Kontrolü Nasıl Yapılır?",
    description: "Kişisel veriler ve gizli dökümanlar için erişim denetim stratejileri.",
    content: `
      <h2>Hassas Veri Denetimi</h2>
      <p>Hassas verilere erişim sadece yetkiyle değil, izleme ile korunur. Kimin hangi veriye 'Select' veya 'Read' yaptığını bilmek ACKLOG SIEM ile mümkündür.</p>
    `
  },
  "veri-sizintisi-dlp-engelleme-yontemleri": {
    title: "Veri Sızıntısı (DLP) Engelleme Yöntemleri ve SIEM İlişkisi",
    description: "Şirket verilerinin dışarı sızmasını önlemek için en etkili 5 yöntem.",
    content: `
      <h2>DLP ve SIEM Sinerjisi</h2>
      <p>DLP sızıntıyı durdurur, SIEM ise sızıntının kaynağını ve rotasını raporlar. ACKLOG, DLP loglarını analiz ederek veri kaçırma girişimlerini "Korelasyon" ile yakalar.</p>
    `
  },
  "usb-bellek-takilma-kayitlarini-gorme": {
    title: "USB Bellek Takılma Kayıtlarını Görme: Kim Ne Zaman Taktı?",
    description: "Sunucu ve kullanıcı bilgisayarlarına takılan USB aygıtların izini sürme.",
    content: `
      <h2>USB Güvenlik Logları</h2>
      <p>Windows Event ID 4688 üzerinden 'Process' takibi yaparak hangi kullanıcının USB taktığını görebilirsiniz. ACKLOG, bu karmaşık logları "USB TAKILDI" uyarısına dönüştürür.</p>
    `
  },
  "klasor-yetkilendirme-ve-denetleme-raporu": {
    title: "Klasör Yetkilendirme ve Denetleme Raporu Nasıl Alınır?",
    description: "BT yöneticileri için otomatik yetki raporu oluşturma rehberi.",
    content: `
      <h2>Otomatik Raporlama</h2>
      <p>Haftalık olarak 'Kim nereye yetkili' raporu almak, denetimlerin vazgeçilmezidir. ACKLOG, Active Directory ve File Server'ı tarayarak size temiz bir yetki matrisi raporu sunar.</p>
    `
  },
  "cryptolocker-saldirisi-nasil-tespit-edilir": {
    title: "CryptoLocker Saldırısı Nasıl Tespit Edilir? Belirtiler ve Önlemler",
    description: "Dosyalarınız şifrelenmeden önce saldırıyı durdurmanın yolları.",
    content: `
      <h2>Fidye Yazılımı Tespiti</h2>
      <p>Belli bir süre içinde binlerce dosyanın uzantısının değişmesi CryptoLocker işaretidir. ACKLOG'un Ransomware Detection algoritması bunu saniseler içinde yakalar ve sistemleri izole eder.</p>
    `
  },
  // Kategori 2: Kullanıcı ve Yetki Yönetimi
  "active-directory-oturum-acma-kayitlari": {
    title: "Active Directory Kullanıcı Oturum Açma Kayıtları Analizi",
    description: "AD login loglarını anlamlandırma ve sahte login tespiti.",
    content: `
      <h2>AD Login Takibi</h2>
      <p>Hesap ele geçirmeleri yakalamanın yolu başarılı/başarısız oturum açma (Event ID 4624/4625) kayıtlarını ACKLOG ile süzmektir.</p>
    `
  },
  "domain-admin-yetkisi-alan-kullanicilari-listeleme": {
    title: "Domain Admin Yetkisi Alan Kullanıcıları Listeleme",
    description: "Kritik gruplara yapılan eklemeleri anında nasıl görürüz?",
    content: `
      <h2>Kritik Grup Denetimi</h2>
      <p>Saldırganlar Domain Admin olmayı hedefler. ACKLOG ile bu gruba bir kullanıcı eklendiğinde sistem anında alarm üretir.</p>
    `
  },
  "rdp-uzak-masaustu-baglantilarini-izleme": {
    title: "RDP (Uzak Masaüstü) Bağlantılarını İzleme Yazılımı",
    description: "Sunuculara yapılan RDP erişimlerini görselleştirme ve takip etme.",
    content: `
      <h2>RDP İzleme</h2>
      <p>Dışarıdan RDP ile sızmalar (Brute Force) en yaygın saldırıdır. ACKLOG tüm RDP akışını IP ve User bazlı raporlar.</p>
    `
  },
  "mesai-saatleri-disinda-sisteme-giren-kullanicilar": {
    title: "Mesai Saatleri Dışında Sisteme Giren Kullanıcılar: Şüpheli Hareket Takibi",
    description: "Anomali tespiti: Neden gece saat 03:00'da dosya kopyalandı?",
    content: `
      <h2>Zaman Bazlı Anomali</h2>
      <p>Personelin çalışma saatleri dışındaki loginlerini ACKLOG SIEM "Şüpheli İşlem" olarak işaretler.</p>
    `
  },
  "sifresini-3-kez-yanlis-giren-kullanicilar": {
    title: "Şifresini 3 Kez Yanlış Giren Kullanıcıları Görme ve Engelleme",
    description: "Hesap kilitleme (Account Lockout) olaylarının analizi.",
    content: `
      <h2>Kaba Kuvvet Engelleme</h2>
      <p>ACKLOG, peş peşe gelen hatalı şifre denemelerini yakalar ve brute-force saldırganını engeller.</p>
    `
  },
  "kullanici-hesap-kilitleme-nedenleri": {
    title: "Kullanıcı Hesap Kilitleme (Account Lockout) Nedenleri",
    description: "Sürekli kilitlenen hesapların asıl kaynağını (source machine) bulma.",
    content: `
      <h2>Lockout Analizi</h2>
      <p>Hesabın hangi cihazdan gelen istek yüzünden kilitlendiğini ACKLOG SIEM "Caller Computer Name" verisiyle anında söyler.</p>
    `
  },
  "vpn-uzerinden-kimler-bagli": {
    title: "VPN Üzerinden Kimler Bağlı? Canlı İzleme ve Loglama",
    description: "Uzaktan erişim yapan kullanıcıların trafik ve oturum takibi.",
    content: `
      <h2>VPN Görünürlüğü</h2>
      <p>VPN üzerinden gelen kullanıcıların LAN'da ne yaptığını ACKLOG ile takip edin.</p>
    `
  },
  "ayricalikli-hesap-yonetimi-pam-nedir": {
    title: "Ayrıcalıklı Hesap Yönetimi (PAM) Nedir ve SIEM ile Farkı?",
    description: "Admin hesaplarını kontrol altında tutmanın 3 yolu.",
    content: `
      <h2>PAM vs SIEM</h2>
      <p>PAM yetkiyi yönetir, SIEM ise bu yetkinin kullanımını denetler. ACKLOG, PAM sistemleriyle entegre çalışır.</p>
    `
  },
  "local-admin-yetkisi-kisitlama-yontemleri": {
    title: "Local Admin Yetkisi Kısıtlama Yöntemleri ve Log Takibi",
    description: "Kullanıcı bilgisayarlarında admin yetkisi olmamasının 10 faydası.",
    content: `
      <h2>Yanal Hareket Önleme</h2>
      <p>Local admin yetkilerinin kısıtlanması 'Lateral Movement'ı durdurur. ACKLOG ile yetkisiz admin girişlerini denetleyin.</p>
    `
  },
  "personel-bilgisayar-takip-programlari-yasal-mi": {
    title: "Personel Bilgisayar Takip Programları Yasal mı? (KVKK Perspektifi)",
    description: "İş yerinde izleme yaparken hukuki sınırlar ve loglama gereksinimleri.",
    content: `
      <h2>Hukuki İzleme</h2>
      <p>KVKK'ya göre çalışanları "nedensiz" izleyemezsiniz, ancak "güvenlik" amaçlı loglamak zorunluluktur. ACKLOG, yasal sınırda güvenlik sağlar.</p>
    `
  }
};
