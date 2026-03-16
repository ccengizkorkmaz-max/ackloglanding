export const serverCloudAdminArticles = {
  "sql-server-tablo-silme-logu-acma": {
    title: "SQL Server Tablo Silme Logu Açma: Kim Bu Veriyi Sildi?",
    description: "Veritabanında Drop/Delete işlemlerini Audit (Denetim) ile takip etme ve ACKLOG SIEM entegrasyonu.",
    content: `
      <h2>Veritabanı Denetimi: Kritik Tabloları Kim Siliyor?</h2>
      <p>SQL Server üzerinde bir tablonun veya satırın silinmesi genellikle "kaza" olarak nitelendirilir, ancak bazen bu bir iç tehdit (insider threat) veya saldırı işaretidir. Standard SQL logları (Error Log) size kimin hangi veriyi sildiğini söylemez. Bunun için **SQL Server Audit** yapılandırmasını kurmanız gerekir.</p>
      
      <h3>SQL Audit Kurulum Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Server Audit Oluşturma:</strong> Logların nereye (File, Windows Event veya Application Log) yazılacağını belirleyin.</li>
        <li><strong>Database Audit Specification:</strong> Hangi işlemlerin (DELETE, DROP, TRUNCATE) ve hangi tabloların izleneceğini seçin.</li>
        <li><strong>State: ON:</strong> Denetimi aktif hale getirmeyi unutmayın!</li>
      </ol>

      <p><strong>Neden SIEM Şart?</strong> SQL logları sunucuda dosya olarak tutulduğunda, saldırgan bu dosyayı da silebilir. ACKLOG SIEM, SQL Audit loglarını üretildiği anda merkezi kasasına çeker. "Maaş tablosu silindi" uyarısını ACKLOG ile anında alın. Manuel log takibiyle vakit kaybetmeyin, veritabanınızı ACKLOG ile koruyun.</p>
    `
  },
  "veritabanina-uzaktan-baglanan-ipleri-gorme": {
    title: "Veritabanına Uzaktan Bağlanan IP'leri Görme ve Kontrol Rehberi",
    description: "Veritabanı sunucularına doğrudan (backdoor) erişim denetimi, şüpheli IP tespiti ve güvenlik.",
    content: `
      <h2>DB Erişimi: Kapılar Kimlere Açık?</h2>
      <p>Veritabanı sunucuları (MSSQL, Oracle, MySQL) genellikle iç ağda durur ancak bazen yanlış yapılandırma nedeniyle internete (Port 1433, 3306) açık unutulur. Dışarıdan gelen her bir IP bağlantısı, verilerinizin çalınması için bir fırsattır.</p>
      
      <h3>Bağlantı Kontrol Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>NETSTAT Komutu:</strong> Canlı bağlantıları <code>netstat -an | findstr 1433</code> ile izleyin.</li>
        <li><strong>SQL Login Logları:</strong> Başarılı ve başarısız giriş denemelerini loglayın.</li>
        <li><strong>Firewall Analizi:</strong> DB sunucusuna gelen dış IP'leri süzün.</li>
      </ul>

      <p><strong>ACKLOG Çözümü:</strong> Manuel kontroller anlıktır; oysa saldırganlar gece yarısı gelir. ACKLOG SIEM, DB sunucunuza gelen yabancı IP'leri 7/24 harita üzerinde görselleştirir. Olağandışı bir dış IP bağlantısı gördüğünde Firewall üzerinden bu IP'yi otomatik bloklar. ACKLOG ile veritabanınızı siber kalkanla savunun.</p>
    `
  },
  "windows-server-sistem-hatalari-ve-cozumleri": {
    title: "Windows Server Sistem Hataları ve Çözümleri: Event Viewer Analizi",
    description: "Mavi ekran (BSOD) ve uygulama çökmelerini loglardan bulma, sistem uptime stratejileri.",
    content: `
      <h2>Sistem Sağlığı: Hataları Görünür Kılın</h2>
      <p>Windows Server işletim sistemlerinde oluşan "Sistem Hataları", genellikle ciddi bir donanım veya yazılım arızasının öncü habercisidir. Event Viewer içinde binlerce log akar; ancak kritik olanlar (Critical/Error) gözden kaçtığında servis kesintisi kaçınılmazdır.</p>
      
      <h3>Sık Karşılaşılan Hatalar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Event ID 41 (Kernel-Power):</strong> Sistemin beklenmedik şekilde kapanması.</li>
        <li><strong>Event ID 7034 (Service Control Manager):</strong> Kritik bir servisin aniden durması.</li>
        <li><strong>Disk Errors (ID 7, 11, 55):</strong> Depolama ünitesinde fiziksel arıza başlangıcı.</li>
      </ul>

      <p><strong>ACKLOG Dashboard:</strong> Tüm bu hataları tek tek sunuculardan toplamak yerine ACKLOG ile tek ekranda "Kritik Hata Raporu" olarak görün. Bir sunucu kapanmadan 5 dakika önce ACKLOG size uyarısını göndersin. Manuel kontroller veri kurtarmaz, ACKLOG proaktif çözüm sunar.</p>
    `
  },
  "linux-sunucu-guvenlik-sikilastirma-hardening": {
    title: "Linux Sunucu Güvenlik Sıkılaştırma (Hardening) Kılavuzu",
    description: "SSH güvenliği, dosya izinleri ve süreç denetimi. Linux log yönetimi rehberi.",
    content: `
      <h2>Linux Hardening: Sunucunuzu Zırhlayın</h2>
      <p>Linux sunucular varsayılan kurulumda oldukça "açık" gelebilir. SSH portundan şifre deneme saldırıları (Brute force) saniyede yüzlerce kez yapılır. Sisteminizi sıkılaştırmadan internete açmak, bir hacker'a evinizin anahtarını paspasın altına bırakmak demektir.</p>
      
      <h3>Temel Sıkılaştırma Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>SSH portunu (22) değiştirin ve Root loginini yasaklayın.</li>
        <li>Fail2Ban kullanarak hatalı giriş yapanları engelleyin (veya ACKLOG ile merkezileştirin).</li>
        <li>Kullanılmayan servisleri (FTP, Telnet) kapatın.</li>
        <li>Dizin izinlerini (Chmod) en az yetki prensibine göre ayarlayın.</li>
      </ol>

      <p><strong>ACKLOG Linux Agent:</strong> ACKLOG, Linux sunucularınızdaki <code>auth.log</code>, <code>syslog</code> ve <code>audit.log</code> gibi kritik dosyaları analiz ederek "anomali" avcılığı yapar. Manuel log okuma devri bitti, ACKLOG ile Linux omurganızı koruyun.</p>
    `
  },
  "iis-web-sunucusu-erisim-loglari-analizi": {
    title: "IIS (Web Sunucusu) Erişim Logları Analizi ve Otomasyon Rehberi",
    description: "Web sitenize gelen '404' ve '500' hatalarının gerçek sebebini bulun. IIS saldırı tespiti.",
    content: `
      <h2>Web Sunucu Analizi: Trafiğin Ötesine Geçin</h2>
      <p>IIS (Internet Information Services) logları, sitenize gelen her bir isteğin (Request) röntgenini çeker. Ancak bu loglar metin dosyası olarak tutulduğunda binlerce satır arasında kaybolmak çok kolaydır.</p>
      
      <h3>Neden Analiz Etmelisiniz?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>404 Hataları:</strong> Sitenizde olmayan sayfaları arayan ("Scanners") botları yakalayın.</li>
        <li><strong>500 Hataları:</strong> Kodunuzdaki hataları developerlara raporlayın.</li>
        <li><strong>Boyut (Bytes Sent):</strong> Olağandışı veri çıkışlarını (Data leakage) fark edin.</li>
      </ul>

      <p><strong>ACKLOG Web Monitoring:</strong> IIS loglarınızı ACKLOG SIEM'e aktararak, grafiklerle süslenmiş bir trafik tablosu elde edin. Sitenize kim, nereden ve ne amaçla (Saldırı mı, ziyaret mi?) gelmiş anında görün. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile web performansınızı zirveye taşıyın.</p>
    `
  },
  "uygulama-cokme-crash-raporlarini-izleme": {
    title: "Uygulama Çökme (Crash) Raporlarını İzleme Sistemi Kurma",
    description: "Kurumsal yazılımların çalışma sağlığını nasıl ölçersiniz? Crash loglarını SIEM ile yönetin.",
    content: `
      <h2>Crash Yönetimi: Yazılım Çökmelerini Önceden Görün</h2>
      <p>Bir uygulamanın "Donması" veya "Çökmesi", iş akışını anında durdurur. Çoğu BT yöneticisi bu çökmeden ancak kullanıcı aradığında haberdar olur. Oysa sistem, çökmeden saniyeler önce "Application Log" içine bir 'Exception' bırakır.</p>
      
      <h3>Monitor Etme Kriterleri</h3>
      <p>Bellek kullanımındaki (Leak) artış, veritabanı bağlantı hataları ve peş peşe gelen 'Hang' durumları mutlaka izlenmelidir.</p>

      <p><strong>ACKLOG AppInsights:</strong> Yazılım hatalarını parçalayarak (Parsing) hangi modülün hata verdiğini ACKLOG dashboarddan görün. Developer ekibinize "Kodun şu satırı sorunlu" diyebilmek profesyonelliktir. Manuel log taramakla zaman harcamayın, ACKLOG ile sisteminizin sağlığını otomatik takip edin.</p>
    `
  },
  "sunucu-disk-doluluk-uyarisi-mail-atma": {
    title: "Sunucu Disk Doluluk Uyarısı Mail Atma: Kesintisiz Hizmet Rehberi",
    description: "Disk %90 olunca BT ekibini nasıl uyarırsınız? ACKLOG ile eşik değeri (Threshold) yönetimi.",
    content: `
      <h2>Performans İzleme: Disk Dolması Felakettir</h2>
      <p>Bir veritabanı sunucusunun disk alanının dolması, sadece o uygulamanın değil, tüm sistemin donmasına veya veri kaybına neden olabilir. Disk takibi yapmak bir "BT Lüksü" değil, temel bir operasyonel zorunluluktur.</p>
      
      <h3>Basit vs Profesyonel Çözüm</h3>
      <p>Basit PowerShell scriptleri ile mail atabilirsiniz; ancak 100 sunucunuz varsa her biri için ayrı script yönetmek yorucudur. Ayrıca sunucu kapandığında script de çalışmaz.</p>

      <p><strong>ACKLOG İzleme:</strong> ACKLOG SIEM, tüm sunucularınızın disk, CPU ve RAM durumunu merkezi olarak izler. "Disk %90 oldu" uyarısını tek bir yerden tüm ağınız için aktif edin. Manuel kontroller veri kurtarmaz, ACKLOG ile proaktif olun ve sistemleriniz asla durmasın.</p>
    `
  },
  "event-id-4624-ve-4625-ne-anlama-gelir": {
    title: "Event ID 4624 ve 4625 Ne Anlama Gelir? Login Analizi Rehberi",
    description: "Siber güvenlikte başaralı ve başarısız girişlerin (Anatomi) incelenmesi.",
    content: `
      <h2>Login Analizi: Güvenliğin Kilidini Açın</h2>
      <p>Windows siber güvenlik loglarının temel yapı taşları 4624 (Başarılı) ve 4625 (Başarısız) olay kimlikleridir. Ancak bu ID'lerin içindeki "Logon Type" bilgisini okumazsanız, asıl hikayeyi kaçırırsınız.</p>
      
      <h3>Logon Type Listesi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Type 2:</strong> Klavyeden oturum açma (Fiziksel erişim).</li>
        <li><strong>Type 3:</strong> Ağdan erişim (Paylaşılan klasör veya Web).</li>
        <li><strong>Type 10:</strong> Uzak Masaüstü (RDP).</li>
      </ul>

      <p><strong>ACKLOG Insight:</strong> Manuel olarak binlerce 4624 logunu okumak imkansızdır. ACKLOG, bu logları anlamlı bir hikayeye dönüştürür: "Saldırgan RDP (Type 10) ile 20 kez başarısız deneme yaptı ve sonunda başarılı oldu (Type 2)". ACKLOG ile siber olayların anatomisini saniyeler içinde çözün.</p>
    `
  },
  "powershell-ile-log-toplama-scriptleri": {
    title: "PowerShell İle Log Toplama Scriptleri ve Otomasyon Rehberi",
    description: "Kendi scriptlerinizi merkezi bir sisteme entegre edin. ACKLOG API kullanımı.",
    content: `
      <h2>Script Otomasyonu: BT Gücünüzü Artırın</h2>
      <p>PowerShell, Windows yöneticileri için İsviçre çakısı gibidir. Kendi özel uygulamalarınızın loglarını veya sistem metriklerini toplamak için yazacağınız scriptler çok değerlidir. Peki bu script çıktılarını güvenli bir şekilde nasıl saklayacaksınız?</p>
      
      <h3>Scripting Best Practices</h3>
      <p>Logları yerel diskte TXT olarak bırakmayın. Mutlaka Syslog veya HTTP Post ile merkezi bir SIEM'e gönderin.</p>

      <p><strong>ACKLOG Integration:</strong> Yazdığınız tüm özel PowerShell scriptlerini tek bir satır ekleyerek ACKLOG'a bağlayabilirsiniz. "Benim özel raporumu da ACKLOG dashboardda göster" demek artık çok kolay. Manuel raporlamaya son verin, ACKLOG ile tam otomasyon kurun.</p>
    `
  },
  "docker-konteyner-guvenlik-taramasi": {
    title: "Docker Konteyner Güvenlik Taraması ve İzole Çalışma Rehberi",
    description: "Mikroservis mimarisinde siber güvenlik risklerini yönetme ve konteyner log analizi.",
    content: `
      <h2>Modern Altyapı: Konteyner Güvenliği</h2>
      <p>Docker ve Kubernetes kullanımı arttıkça, saldırılar da bu alana kaymaya başladı. Bir konteyner içindeki güvenlik açığı, tüm host sisteminizi (ve diğer konteynerları) tehlikeye atabilir.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Privileged Containers:</strong> Gereksiz yere 'Root' yetkisiyle çalışan konteyner tespiti.</li>
        <li><strong>Image Vulnerabilities:</strong> Eski veya yamalı olmayan imaj kullanımı.</li>
        <li><strong>Container Logs:</strong> Uygulama içindeki şüpheli hareketler.</li>
      </ul>

      <p><strong>ACKLOG Docker Support:</strong> Docker daemon loglarını ACKLOG SIEM'e çekerek, mikroservislerinizdeki anomalileri anında saptayın. Manuel olarak 50 farklı konteynerın içine girmekle uğraşmayın, ACKLOG ile mikroservis evreninizi tek camdan yönetin.</p>
    `
  },
  "microsoft-365-office-admin-loglari-izleme": {
    title: "Microsoft 365 (Office) Admin Logları İzleme ve Bulut Güvenliği",
    description: "Exchange ve SharePoint hareketlerini bulutta takip etme, yönetici denetimi.",
    content: `
      <h2>Cloud Office: Bulutun Arkasını Görün</h2>
      <p>Şirketinizi Office 365'e taşıdığınızda güvenlik bitmez, sadece şekil değiştirir. Admin yetkisine sahip birinin mail kutularını silmesi veya gizlice paylaşım açması, kurum hafızasını yok edebilir.</p>
      
      <h3>Bulutta Ne Oluyor?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Privilege Changes:</strong> Bir kullanıcıya kritik bir mailbox yetkisi verildi mi?</li>
        <li><strong>Configuration Change:</strong> Güvenlik duvarı veya spam ayarlarıyla oynandı mı?</li>
      </ul>

      <p><strong>ACKLOG Cloud Connector:</strong> ACKLOG, Microsoft 365 API'leri üzerinden tüm admin hareketlerini anlık toplar. "Bulutta silinen verinin faili kim?" sorusuna anında yanıt verir. Manuel kontrollerle bulutta kaybolmayın, ACKLOG ile tam görünürlük sağlayın.</p>
    `
  },
  "onedrive-paylasilan-dosya-raporu-alma": {
    title: "OneDrive Paylaşılan Dosya Raporu Alma: Bilginiz Dışında Paylaşım Var mı?",
    description: "Dosya paylaşımlarının güvenliğini nasıl sağlarsınız? ACKLOG ile dış paylaşım takibi.",
    content: `
      <h2>Veri Sızıntısı: OneDrive "Herkese Açık" Linkleri</h2>
      <p>Personelinizin "Yanlışlıkla" şirket dökümanlarını dışarıdaki birilerine (veya herkese) link olarak gönderdiğini biliyor muydunuz? OneDrive dökümanlarının kontrolsüz paylaşımı, en sessiz veri sızıntısı yoludur.</p>
      
      <h3>Denetleme Stratejisi</h3>
      <p>Hangi personelin, hangi dosyayı, hangi e-posta adresine "Share" (Paylaş) yaptığını raporlayın. Sadece link oluşturmak yetmez, o linke dışarıdan kimler erişti? (External Access Log).</p>

      <p><strong>ACKLOG DLP:</strong> Bu tür bulut paylaşımlarını ACKLOG dashboardunda tek bir liste halinde görün. "Şu kritik döküman internete açık!" uyarısıyla sızıntıyı anında durdurun. Manuel kontrollerle risk almayın, ACKLOG ile bulut verilerinizi koruyun.</p>
    `
  },
  "azure-guvenligi-nasil-saglanir": {
    title: "Azure Güvenliği Nasıl Sağlanır? Microsoft Bulut Denetimi Rehberi",
    description: "Azure sunucularınızın loglarını merkezi bir yere çekin, VM ve Network güvenliğini yönetin.",
    content: `
      <h2>Azure Monitoring: Bulut Altyapı Savunması</h2>
      <p>Azure üzerindeki sanal makineleriniz (VM), NSG (Network Security Groups) ayarlarınız ve depolama alanlarınız sürekli bir denetim gerektirir. "Azure Portal var, güvendeyim" demek büyük bir yanılgıdır.</p>
      
      <h3>Kritik Azure Logları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Activity Logs:</strong> Abonelik seviyesindeki tüm yönetimsel değişimler.</li>
        <li><strong>AD Sign-in Logs:</strong> Bulut portalına girişler (MFA başarılı mı?).</li>
        <li><strong>Diagnostic Logs:</strong> SQL Azure veya Load Balancer hataları.</li>
      </ul>

      <p><strong>ACKLOG Azure Integration:</strong> ACKLOG, Azure loglarınızı yereldeki loglarla birleştirerek (Hybrid Cloud) size "Büyük Resmi" gösterir. Bir saldırı hem bulutta hem yerelde eş zamanlı yapılıyorsa bunu ancak ACKLOG ile görebilirsiniz. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, karmaşık bulut yapınızı basitleştirin.</p>
    `
  },
  "bulut-depolama-guvenligi-riskleri": {
    title: "Bulut Depolama Güvenliği Riskleri ve Veri Sızıntısı Önleme",
    description: "Gereksiz açık bırakılmış bulut kovalarını (buckets) tespit edin, S3 ve Blob güvenliği.",
    content: `
      <h2>Storage Güvenliği: Açık Bırakılan Kapıları Kapatın</h2>
      <p>Tarihin en büyük veri sızıntılarının çoğu, yanlış yapılandırılmış "Public" bulut depolama alanları (S3 Buckets, Azure Blobs) yüzünden yaşanmıştır. Şirket verilerinin parola olmadan her yerden erişilebilmesi bir kabustur.</p>
      
      <h3>Nasıl Korunursunuz?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Public erişimi varsayılan olarak KAPALI tutun.</li>
        <li>Access Keys (Erişim Anahtarları) kullanımını loglayın ve düzenli değiştirin.</li>
        <li>Şüpheli veri indirme (Egress traffic) artışlarını izleyin.</li>
      </ul>

      <p><strong>ACKLOG Cloud Watcher:</strong> Depolama alanlarınıza yapılan her eriçimi ACKLOG ile mühürleyin. Olağandışı bir "Toplu İndirme" işlemi gördüğünde ACKLOG size saniyeler içinde haber verir. Manuel kontroller veri kaçırmanızı engellemez, ACKLOG ile güvende kalın.</p>
    `
  },
  "saas-uygulamalarinda-kimlik-yonetimi": {
    title: "SaaS Uygulamalarında Kimlik Yönetimi ve Erişim Denetimi Rehberi",
    description: "Salesforce, Slack, Jira gibi uygulamalarda kim, ne yapıyor? Merkezi login takibi.",
    content: `
      <h2>Uygulama Güvenliği: SaaS Ekosistemini Yönetin</h2>
      <p>Bir çalışanınız Jira'dan veya Salesforce'tan tüm müşteri veritabanını dışarı aktarırsa (Export) haberiniz olur mu? Şirketlerin kullandığı onlarca SaaS (Software as a Service) uygulaması, kontrol dışı birer veri adacığıdır.</p>
      
      <h3>SSO ve SIEM Entegrasyonu</h3>
      <p>Tüm SaaS uygulamalarınızı tek bir kimlik (SSO) sistemine bağlayın ve bu sistemin loglarını ACKLOG SIEM'e aktarın. Bu sayede her personelin tüm uygulamalardaki "dijital karnesini" tek bir ekranda görebilirsiniz.</p>

      <p><strong>ACKLOG Unified ID:</strong> ACKLOG, farklı platformlardaki hareketleri birleştirerek (Correlation) size tam bir siber panorama sunar. Manuel olarak 20 farklı panelden log çekmekle uğraşmayın, ACKLOG ile hız kazanın.</p>
    `
  },
  "calisanlarin-kullandigi-bulut-uygulamalarini-gorme-shadow-it": {
    title: "Çalışanların Kullandığı Bulut Uygulamalarını Görme (Shadow IT) Rehberi",
    description: "Şirket verilerinin onaylanmamış bulut servislerine gidişini durdurun, riskleri minimize edin.",
    content: `
      <h2>Shadow IT: Gizli Bilişimle Mücadele</h2>
      <p>Personelinizin dosyaları WeTransfer ile gönderdiğini veya gizli bir Trello panosu kurduğunu biliyor musunuz? Şirket onayı olmayan her yazılım 'Shadow IT'dir ve güvenlik politikanızı deler.</p>
      
      <h3>Tespit Teknikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>DNS Sorguları:</strong> Ağınızda wetransfer.com sorgusu yapılıyor mu?</li>
        <li><strong>Endpoint Process:</strong> Bilgisayarlarda onaylanmamış bir senkronizasyon aracı (Dropbox vb.) yüklü mü?</li>
        <li><strong>Proxy Logları:</strong> Kimler hangi bulut sitesine ne kadar veri yüklüyor?</li>
      </ul>

      <p><strong>ACKLOG Shadow IT Discovery:</strong> Ağ trafiği ve uç nokta verilerini birleştirerek gizli kullanılan tüm uygulamaları ACKLOG ile listeler. Şirket verilerinizin nerede olduğunu bilmemek en büyük risktir. ACKLOG ile görünürlük kazanın.</p>
    `
  },
  "uzaktan-calisma-guvenlik-protokolleri": {
    title: "Uzaktan Çalışma Güvenlik Protokolleri ve Şirket Ağına Erişim Rehberi",
    description: "Evden çalışan personelin güvenliğini nasıl garanti edersiniz? VPN ve endpoint güvenliği.",
    content: `
      <h2>Remote Work Savunması: Şirket Sınırlarının Ötesi</h2>
      <p>Bir personelin evindeki güvenli olmayan Wi-Fi ağı üzerinden şirkete bağlanması, tüm ağınızı tehdit altına sokar. Uzaktan çalışma, siber saldırganlar için en "kolay lokma" dır.</p>
      
      <h3>Olmazsa Olmaz Maddeler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Zorunlu MFA (Her girişte ikinci onay).</li>
        <li>Disk Şifreleme (Laptop çalınırsa veri okunamasın).</li>
        <li>Her zaman açık VPN (Always-on VPN).</li>
      </ul>

      <p><strong>ACKLOG Remote Shield:</strong> Personel ofis dışında dahi olsa ACKLOG loglarını toplamaya devam eder. Olağandışı bir "VPN Login" veya evdeki bilgisayarda başlayan bir "Saldırı Belirtisi" ACKLOG tarafından anında fark edilir. Manuel takip bitmiştir, ACKLOG ile mobil dünyayı yönetin.</p>
    `
  },
  "zoom-teams-toplanti-guvenligi": {
    title: "Zoom/Teams Toplantı Güvenliği: Gizli Katılımcı Analizi ve Loglama",
    description: "Toplantılarınıza kimlerin sızdığını loglardan görün. Kurumsal gizliliği koruma rehberi.",
    content: `
      <h2>Konferans Güvenliği: Dinlenen Odalardan Kaçının</h2>
      <p>Kritik bir yönetim kurulu toplantısına yetkisiz birinin "misafir" olarak sızması, ticari sırların çalınmasına neden olabilir. Video konferans araçlarının logları, toplantıya katılanların IP adreslerini ve isimlerini saklar.</p>
      
      <h3>İzlenmesi Gerekenler</h3>
      <p>Hangi toplantı linkleri şifresiz paylaşıldı? Dışarıdaki bir IP adresi toplantıya sızmaya çalıştı mı? (Zoom-bombing tespiti).</p>

      <p><strong>ACKLOG Meeting Audit:</strong> ACKLOG, Teams ve Zoom admin loglarını süzerek "Olağandışı Katılımcı" alarmları üretir. Toplantılarınızın ne kadar güvenli olduğunu ACKLOG raporlarıyla ispatlayın. Manuel kontrollerle vakit kaybetmeyin.</p>
    `
  },
  "vpn-loglarini-raporlama": {
    title: "VPN Loglarını Raporlama ve Siber Sızıntı Analizi Rehberi",
    description: "VPN üzerinden yapılan siber hareketlerin dökümü, coğrafi IP analizi ve güvenlik.",
    content: `
      <h2>VPN Raporları: Güvenli Tünelin Denetimi</h2>
      <p>VPN (Virtual Private Network), ağınıza dışarıdan açılan bir "Tünel"dir. Bu tünelden geçen veriyi görmüyorsanız, kapıları ardına kadar açmışsınız demektir. Sadece "Kim girdi?" değil "İçeride ne yaptı?" sorusuna yanıt bulmalısınız.</p>
      
      <h3>Rapor Detayları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Session Duration:</strong> 24 saat boyunca açık kalan şüpheli VPN oturumları.</li>
        <li><strong>Source Country:</strong> Personeliniz Türkiye'de ama IP Hollanda'dan mı?</li>
        <li><strong>Traffic Volume:</strong> VPN tünelinden dışarı doğru yoğun veri akışı.</li>
      </ul>

      <p><strong>ACKLOG Geo-Tracking:</strong> Tüm VPN akışını canlı bir dünya haritası üzerinde ACKLOG dashboardunda izleyin. Bir risk oluştuğunda ACKLOG sizi SMS ile uyarsın. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, tünellerinizi siber kalkanla koruyun.</p>
    `
  },
  "cok-faktörlü-kimlik-dogrulama-mfa-zorunlulugu": {
    title: "Çok Faktörlü Kimlik Doğrulama (MFA) Zorunluluğu ve Güvenlik",
    description: "Şifrelerin çalınması siber felaket olmaktan nasıl çıkarılır? MFA denetim rehberi.",
    content: `
      <h2>MFA: Siber Güvenliğin En Güçlü Adımı</h2>
      <p>Siber saldırıların %80'i zayıf veya çalınmış şifrelerden kaynaklanır. Eğer sadece kullanıcı adı ve şifreye güveniyorsanız, hacklenmek bir an meselesidir. MFA (Multi-Factor Authentication), çalınan şifreyi değersiz hale getiren "İkinci Anahtardır".</p>
      
      <h3>Neden SIEM İle İzlemelisiniz?</h3>
      <p>Saldırganlar "MFA Fatigue" (Yorma) denilen yöntemle personelin telefonuna yüzlerce onay isteği gönderir. Personel yanlışlıkla "Onayla" dediği an sistem düşer. SIEM, bu tür peş peşe gelen MFA isteklerini yakalayıp hesabı kitler.</p>

      <p><strong>ACKLOG MFA Integration:</strong> ACKLOG, Duo, Microsoft Authenticator veya Okta gibi servislerin loglarını izleyerek "MFA Bypass" veya "MFA Fatigue" saldırılarını anında durdurur. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile kimlik güvenliğinizi %100'e yaklaştırın.</p>
    `
  }
};
