export const technicalArticles = {
  "windows-event-log-toplama-yontemleri": {
    title: "En İyi Windows Event Log Toplama Yöntemleri (Agent vs. Agentless)",
    description: "Sunucularınızdan Windows event log toplama yöntemleri nelerdir? WinRM, RPC ve agent tabanlı log toplama teknikleri karşılaştırması.",
    content: `
      <h2>Merkezi İzleme: Windows Event Log Toplama Yöntemleri Rehberi</h2>
      <p>
        Kurumsal ağların %90'ı Windows tabanlıdır. Bu yüzden <strong>Windows event log toplama yöntemleri</strong>, bir SIEM projesinin başarısında kritik rol oynar. 
        Sistemlerinizden gelen güvenlik (security), sistem (system) ve uygulama (application) kayıtlarını merkezi bir noktaya almanın farklı yolları vardır.
      </p>

      <h3>Popüler Toplama Teknikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>WMI (Windows Management Instrumentation):</strong> Agentless (ajansız) bir yöntemdir ancak ağ trafiği ve CPU üzerinde yük oluşturabilir.</li>
        <li><strong>WinRM (Windows Remote Management):</strong> Microsoft'un önerdiği, HTTP/HTTPS tabanlı modern bir toplama metodudur.</li>
        <li><strong>Agent Tabanlı (ACKLOG Agent):</strong> Sunucuya ufak bir servis kurularak logların anlık ve şifreli iletilmesi. En güvenilir <strong>Windows event log toplama yöntemleri</strong> arasındadır.</li>
      </ul>

      <p>
        ACKLOG, <strong>Windows event log toplama yöntemleri</strong> konusunda sunduğu hibrit yapı ile hem ajansız hem de ajanlı modellerde yüksek performans sunar.
      </p>
    `
  },
  "syslog-ng-yapilandirma-rehberi": {
    title: "Syslog-ng Yapılandırma Rehberi ve Merkezi Log Sunucusu",
    description: "Linux tabanlı sistemlerde syslog-ng yapılandırma rehberi. Logları filtreleme, yönlendirme ve SIEM sistemine güvenli aktarma teknikleri.",
    content: `
      <h2>Linux Dünyasında Standart: Syslog-ng Yapılandırma Rehberi</h2>
      <p>
        Linux sunucular, firewall cihazları ve network ekipmanları genellikle syslog protokolünü kullanır. <strong>Syslog-ng yapılandırma rehberi</strong>, bu cihazlardan gelen akışı yönetmek için en güçlü araçlardan biridir.
      </p>

      <h3>Temel Syslog-ng Konfigürasyonu</h3>
      <p>
        Bir <strong>syslog-ng yapılandırma rehberi</strong> şu üç ana bileşeni içermelidir:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Source (Kaynak):</strong> Logların hangi porttan (genellikle UDP 514) geleceği.</li>
        <li><strong>Filter (Filtre):</strong> Sadece kritik (critical) veya uyarı (warning) seviyesindeki logların seçilmesi.</li>
        <li><strong>Destination (Hedef):</strong> Logların ACKLOG SIEM sunucusuna aktarılması.</li>
      </ul>

      <p>
        Hatalı bir <strong>syslog-ng yapılandırma rehberi</strong> uygulanması log kaybına yol açabilir. ACKLOG ile loglarınızı dinlemeye başlamak için sadece hedef IP girmeniz yeterlidir.
      </p>
    `
  },
  "firewall-loglarini-siem-e-aktarma": {
    title: "Adım Adım Firewall Loglarını SIEM'e Aktarma Teknikleri",
    description: "Cihazlarınızdan firewall loglarını SIEM'e aktarma nasıl yapılır? UDP vs TCP syslog ve format (CEF/LEEF) uyumluluğu rehberi.",
    content: `
      <h2>Ağ Güvenliği Kapısı: Firewall Loglarını SIEM'e Aktarma</h2>
      <p>
        Firewall cihazınız ne kadar güçlü olursa olsun, logları analiz edilmiyorsa kör noktalarınız var demektir. <strong>Firewall loglarını SIEM'e aktarma</strong> işlemi, ağdaki giden ve gelen tüm trafiğin röntgenini çekmenizi sağlar.
      </p>

      <h3>Dikkat Edilmesi Gereken 3 Kriter</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>İletim Protokolü:</strong> Paket kaybı riskine karşı TCP (veya TLS) üzerinden <strong>firewall loglarını SIEM'e aktarma</strong> tercih edilmelidir.</li>
        <li><strong>Veri Formatı:</strong> Logların SIEM tarafından anında anlaşılması için CEF (Common Event Format) kullanılmalıdır.</li>
        <li><strong>Detay Seviyesi:</strong> "Deny" loglarının yanında "Allow" loglarının da gönderilmesi siber olay müdahalesinde kritiktir.</li>
      </ol>

      <p>
        ACKLOG, piyasadaki tüm popüler markaların <strong>firewall loglarını SIEM'e aktarma</strong> süreçlerini otomatik parse (ayrıştırma) özelliğiyle basitleştirir.
      </p>
    `
  },
  "linux-log-analizi-nasil-yapilir": {
    title: "Linux Log Analizi Nasıl Yapılır? Komutlar ve Araçlar",
    description: "Sistem yöneticileri için linux log analizi nasıl yapılır? /var/log/ dizini, journalctl kullanımı ve kritik log dosyalarının incelenmesi.",
    content: `
      <h2>Uçtan Uca Takip: Linux Log Analizi Nasıl Yapılır?</h2>
      <p>
        Linux sunucularda bir sorun çıktığında veya saldırı şüphesi doğduğunda ilk bakılması gereken yer log dosyalarıdır. <strong>Linux log analizi nasıl yapılır?</strong> sorusunun cevabı, sistemin mimarisini anlamaktan geçer.
      </p>

      <h3>Bakılması Gereken Kritik Loglar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>/var/log/auth.log:</strong> SSH giriş denemeleri ve yetki yükseltme (sudo) hareketleri.</li>
        <li><strong>/var/log/syslog:</strong> Genel sistem olayları ve donanım hataları.</li>
        <li><strong>/var/log/apache2/error.log:</strong> Web sunucusuna yönelik saldırı izleri.</li>
      </ul>

      <p>
        Manuel analiz yerine <strong>linux log analizi nasıl yapılır?</strong> diye merak eden uzmanlar için ACKLOG, tüm bu dizinleri otomatik izleyerek tek bir panelde görselleştirir.
      </p>
    `
  },
  "active-directory-log-izleme": {
    title: "Active Directory Log İzleme ve Kimlik Güvenliği Rehberi",
    description: "Domain Controller sunucularında active directory log izleme neden önemlidir? Kullanıcı hareketleri, login anomalileri ve GPO değişiklikleri takibi.",
    content: `
      <h2>Siber Savunmanın Kalbi: Active Directory Log İzleme</h2>
      <p>
        Saldırganlar sisteme girdiklerinde genellikle ilk hedefleri AD (Active Directory) üzerinden yetki yükseltmektir. Bu yüzden <strong>active directory log izleme</strong>, bir kurumun siber hijyeni için vazgeçilmezdir.
      </p>

      <h3>İzlenmesi Şart Olan Olay Kimlikleri (Event IDs)</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>4624/4625:</strong> Başarılı ve başarısız oturum açma denemeleri.</li>
        <li><strong>4720:</strong> Yeni bir kullanıcı oluşturulması.</li>
        <li><strong>4728:</strong> Bir kullanıcının "Domain Admins" grubuna eklenmesi (Çok Kritik!).</li>
      </ul>

      <p>
        ACKLOG SIEM, <strong>active directory log izleme</strong> modülü ile bu kritik olayları saniyeler içinde yakalar ve anında SOC ekiplerine bildirim gönderir.
      </p>
    `
  },
  "sql-server-audit-log-toplama": {
    title: "SQL Server Audit Log Toplama ve Veritabanı Güvenliği",
    description: "Hassas verilere erişimi denetlemek için SQL server audit log toplama teknikleri. Veri sızıntısı önleme ve veritabanı log analizi.",
    content: `
      <h2>Veri Korumada Son Durak: SQL Server Audit Log Toplama</h2>
      <p>
        Kişisel verileriniz ve ticari sırlarınız genellikle bir veritabanında saklanır. <strong>SQL server audit log toplama</strong>, "kim hangi tabloyu sorguladı?" sorusuna kesin cevap verir. 
        Sadece sistem logları değil, veriye erişim audit kayıtları da SIEM'e aktarılmalıdır.
      </p>

      <h3>Audit Loglama Stratejileri</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Veritabanı Seviyesi:</strong> Tablo bazlı Select, Update, Delete işlemlerinin kaydı.</li>
        <li><strong>Sunucu Seviyesi:</strong> Login değişiklikleri, permission (yetki) atamaları.</li>
        <li><strong>SIEM Entegrasyonu:</strong> Bu logların dışarıya (SIEM) aktarılarak silinmesinin engellenmesi.</li>
      </ol>

      <p>
        ACKLOG, <strong>SQL server audit log toplama</strong> süreçlerini performans kaybı yaşatmadan yönetmeniz için optimize edilmiş agent'lara sahiptir.
      </p>
    `
  },
  "log-korelasyon-kurallari-ornekleri": {
    title: "En Popüler Log Korelasyon Kuralları Örnekleri (SOC)",
    description: "Siber saldırıları tespit etmek için log korelasyon kuralları örnekleri. Brute force, lateral movement ve veri sızıntısı tespit senaryoları.",
    content: `
      <h2>Zekayı Sisteme Eklemek: Log Korelasyon Kuralları Örnekleri</h2>
      <p>
        Log toplamak yetmez, bu loglar arasındaki ilişkiyi bulmak gerekir. <strong>Log korelasyon kuralları örnekleri</strong>, "Eğer şu olursa ve ardından bu gelirse, alarm üret" mantığına dayanır. 
        Korelasyon, SIEM'in beynidir.
      </p>

      <h3>KRİTİK Korelasyon Senaryoları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Şüpheli Zamanleme:</strong> Mesai saatleri dışında 10'dan fazla başarısız login + 1 başarılı login.</li>
        <li><strong>VPN Anomalisi:</strong> Kullanıcının 1 saat arayla iki farklı ülkeden VPN yapması (Impossible Travel).</li>
        <li><strong>Ağ Taraması:</strong> Bir iç IP'den 1 dakika içinde 100 farklı porta bağlantı isteği.</li>
      </ul>

      <p>
        ACKLOG, yüzlerce hazır <strong>log korelasyon kuralları örnekleri</strong> ile yüklü gelir ve tek tıkla aktif edilebilir.
      </p>
    `
  },
  "brute-force-saldirisi-tespit-kurallari": {
    title: "Brute Force Saldırısı Tespit Kuralları ve SIEM Alarmları",
    description: "Kaba kuvvet saldırılarına karşı brute force saldırısı tespit kuralları nasıl yazılır? IP engelleme ve şüpheli login takibi ipuçları.",
    content: `
      <h2>Kapıyı Zorlayanları Yakalayın: Brute Force Saldırısı Tespit Kuralları</h2>
      <p>
        En yaygın saldırı tipi olan kaba kuvvet (Brute Force), otomatik botlarla şifre denemesi yapılmasıdır. <strong>Brute force saldırısı tespit kuralları</strong>, binlerce log içinde bu örüntüyü anında fark etmelidir.
      </p>

      <h3>Kural Parametreleri Nasıl Olmalı?</h3>
      <p>
        Etkili bir <strong>brute force saldırısı tespit kuralları</strong> seti şu kriterleri içermelidir:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Aynı kaynak (Source IP) üzerinden gelmesi.</li>
        <li>Belirli bir zaman diliminde (örn: 5 dakika) gerçekleşmesi.</li>
        <li>Eşik değerin (threshold) aşılması (örn: 20'den fazla başarısız deneme).</li>
      </ul>

      <p>
        ACKLOG, <strong>brute force saldırısı tespit kuralları</strong> ile sadece uyarı vermez, isterseniz firewall veya AD üzerinden bu saldırganı otomatik olarak engeller.
      </p>
    `
  },
  "siem-dashboard-tasarimi-ornekleri": {
    title: "Görsel Güvenlik: SIEM Dashboard Tasarımı Örnekleri",
    description: "Güvenlik operasyon merkezi için en iyi SIEM dashboard tasarımı örnekleri. Tehdit haritaları, EPS grafikleri ve olay özet panelleri tasarımı.",
    content: `
      <h2>Büyük Resmi Görün: SIEM Dashboard Tasarımı Örnekleri</h2>
      <p>
        Veri ancak görselleştirildiğinde anlam kazanır. <strong>SIEM dashboard tasarımı örnekleri</strong>, bir yöneticinin veya analistin ağın durumunu saniyeler içinde anlamasını sağlamalıdır. 
      </p>

      <h3>Bir Dashbord'da Olması Gereken 4 Grafik</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Top Alarms:</strong> En çok hangi tehdit alarmları tetiklendi?</li>
        <li><strong>Geographic Map:</strong> Saldırılar hangi ülkelerden geliyor?</li>
        <li><strong>System Health:</strong> Log toplayıcıların (collector) CPU/RAM durumu.</li>
        <li><strong>Event Trends:</strong> Log hacminde olağandışı bir artış var mı?</li>
      </ol>

      <p>
        ACKLOG'un özelleştirilebilir Widget kütüphanesi ile kendi <strong>siem dashboard tasarımı örnekleri</strong> setinizi kod yazmadan oluşturabilirsiniz.
      </p>
    `
  },
  "log-ayristirma-parsing-teknikleri": {
    title: "Veri Anlamlandırma: Log Ayrıştırma (Parsing) Teknikleri",
    description: "Log verilerini alanlara bölmek için kullanılan en iyi log ayrıştırma (parsing) teknikleri. Regex, Grok ve modern No-code parsing araçları.",
    content: `
      <h2>Karmaşadan Düzene: Log Ayrıştırma (Parsing) Teknikleri</h2>
      <p>
        Log verileri metin yığınıdır. <strong>Log ayrıştırma (parsing) teknikleri</strong>, bu metni anlamlı veritabanı alanlarına dönüştürür. Parse edilmemiş loglar üzerinde arama yapmak "iğneyle kuyu kazmak" gibidir.
      </p>

      <h3>Parsing Metodolojileri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Grok Patterns:</strong> Logstash dünyasında yaygın olan, hazır regex şablonları.</li>
        <li><strong>Key-Value Pair:</strong> Programlama dillerindeki "Field=Value" yapısını kullanan ayrıştırma.</li>
        <li><strong>No-Code Parsing:</strong> Modern SIEM'lerdeki (örneğin ACKLOG) sürükle-bırak yöntemi.</li>
      </ul>

      <p>
        En gelişmiş <strong>log ayrıştırma (parsing) teknikleri</strong>, veri boyutunu küçültürken sorgu performansını 100 kata kadar artırabilir.
      </p>
    `
  },
  "regex-ile-log-temizleme": {
    title: "Veri Hijyeni: RegEx İle Log Temizleme ve Optimizasyon",
    description: "Gereksiz log verilerinden kurtulmak için RegEx ile log temizleme nasıl yapılır? SIEM sistemini şişirmeden verimli loglama yöntemleri.",
    content: `
      <h2>Veritabanını Şişirmeyin: RegEx İle Log Temizleme İpuçları</h2>
      <p>
        Her log değerli değildir. Gereksiz veya tekrarlayan "gürültü" loglar, SIEM'de yer kaplar ve performansı düşürür. <strong>RegEx ile log temizleme</strong>, verinin daha kaynağındayken filtrelenmesini sağlar.
      </p>

      <h3>Pratik Temizleme Örnekleri</h3>
      <p>
        Örneğin her saniye üretilen "System Alive" mesajlarını <strong>RegEx ile log temizleme</strong> kuralıyla SIEM'e alınmadan önce silebilirsiniz. Bu işlem:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Depolama maliyetlerini düşürür.</li>
        <li>Sistem EPS değerini gereksiz yere yükseltmez.</li>
        <li>Sadece "anlamlı" alarmlara odaklanmanızı sağlar.</li>
      </ul>

      <p>
        ACKLOG ile <strong>RegEx ile log temizleme</strong> yapmak yerine görsel filtreleri kullanarak hangi logları istemediğinizi saniyeler içinde seçebilirsiniz.
      </p>
    `
  },
  "netflow-verisi-analizi-siem": {
    title: "Netflow Verisi Analizi SIEM: Ağ Trafiği Görünürlüğü",
    description: "Sadece log değil, netflow verisi analizi SIEM sistemleri için neden kritiktir? Ağdaki darboğazları ve şüpheli trafiği tespit etme yolları.",
    content: `
      <h2>Akan Verinin Analizi: Netflow Verisi Analizi SIEM Entegrasyonu</h2>
      <p>
        Loglar olayları anlatır, Netflow ise trafiğin kendisini. <strong>Netflow verisi analizi SIEM</strong> sistemlerinde kullanıldığında, "log üretmeyen" saldırı türlerini (örneğin veri sızıntısı) tespit etmek mümkün hale gelir.
      </p>

      <h3>Netflow Neyi Gösterir?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Hangi host, hangi sunucuya, ne kadar veri gönderdi?</li>
        <li>Standart dışı port kullanım oranları neler?</li>
        <li>Bandwidth (Bant genişliği) canavarı uygulamaların tespiti.</li>
      </ul>

      <p>
        ACKLOG, <strong>netflow verisi analizi SIEM</strong> yeteneği ile ağınızdaki her bir paketin hikayesini size raporlayarak tam görünürlük sağlar.
      </p>
    `
  },
  "switch-ve-router-loglarini-izleme": {
    title: "Switch ve Router Loglarını İzleme: Ağ Altyapı Güvenliği",
    description: "Omurga switch ve router loglarını izleme neden bir zorunluluktur? Port güvenliği, STP hataları ve yetkisiz cihaz bağlantı tespiti.",
    content: `
      <h2>Temel Altyapı Koruması: Switch ve Router Loglarını İzleme Detayları</h2>
      <p>
        Ağ cihazları siber güvenliğin en temel katmanıdır. <strong>Switch ve router loglarını izleme</strong> sayesinde ağda fiziksel veya mantıksal olarak yapılan her değişikliği takip edebilirsiniz.
      </p>

      <h3>Neleri Takip Etmelisiniz?</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Konfigürasyon Değişikliği:</strong> Bir switch portunun modunun değiştirilmesi.</li>
        <li><strong>Port Durumu:</strong> Bir server portunun "down" olması veya flapping (sürekli açılıp kapanma) yapması.</li>
        <li><strong>MAC Spoofing:</strong> Aynı portta birden fazla MAC adresinin görünmesi.</li>
      </ol>

      <p>
        ACKLOG, <strong>switch ve router loglarını izleme</strong> için özel SNMP ve Syslog parserları sunarak, ağ cihazı markanız ne olursa olsun sizi güvende tutar.
      </p>
    `
  },
  "vpn-loglari-takibi": {
    title: "VPN Logları Takibi ve Uzaktan Çalışma Güvenliği",
    description: "Evden çalışma döneminde VPN loglari takibi neden kritiktir? Yetkisiz erişimler ve brute force saldırılarına karşı VPN izleme teknikleri.",
    content: `
      <h2>Uzaktan Erişimi Denetleyin: VPN Logları Takibi Rehberi</h2>
      <p>
        Kullanıcılarınızın ofis dışından iç ağa bağlanması en büyük güvenlik risklerinden biridir. <strong>VPN logları takibi</strong>, bu tünelin kimler tarafından ve ne amaçla kullanıldığını belgeler.
      </p>

      <h3>KRİTİK VPN İzleme Senaryosu</h3>
      <p>
        <strong>VPN logları takibi</strong> yaparken "Impossible Travel" alarmları kurmak hayati önem taşır. Eğer bir kullanıcı saat 10:00'da İstanbul'dan, saat 10:30'da ise Berlin'den login oluyorsa, bu hesap ele geçirilmiş demektir.
      </p>

      <p>
        ACKLOG, coğrafi IP (Geo-IP) desteğiyle <strong>vpn logları takibi</strong> sırasında bu tür anomalileri saniyeler içinde fark eder ve bağlantıyı keser.
      </p>
    `
  },
  "siem-uzerinde-alarm-olusturma": {
    title: "Etkili Bir SIEM Üzerinde Alarm Oluşturma Stratejileri",
    description: "Yanlış alarmları (false positive) önlemek için SIEM üzerinde alarm oluşturma nasıl yapılır? Kritiklik seviyeleri ve bildirim yöntemleri.",
    content: `
      <h2>Gürültüden Kurtulun: SIEM Üzerinde Alarm Oluşturma Sanatı</h2>
      <p>
        Bir SIEM her gün binlerce alarm üretiyorsa, analistler bu alarmları görmezden gelmeye başlar. <strong>SIEM üzerinde alarm oluşturma</strong> işlemi, kaliteyi niceliğe tercih etmelidir.
      </p>

      <h3>Başarılı Bir Alarmın Özellikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Eylem Odaklılık:</strong> Analist alarmı gördüğünde ne yapacağını bilmeli (Playbook).</li>
        <li><strong>Doğru Öncelik:</strong> Kritik bir sızıntı ile basit bir sistem uyarısı aynı tonda çalmamalıdır.</li>
        <li><strong>Düşük False-Positive:</strong> Meşru kullanıcı hareketleri alarmı tetiklememelidir.</li>
      </ul>

      <p>
        ACKLOG ile <strong>siem üzerinde alarm oluşturma</strong> süreci oldukça basittir; sürükle-bırak kurallar ile kesin ve net alarmlar kurgulayabilirsiniz.
      </p>
    `
  }
};
