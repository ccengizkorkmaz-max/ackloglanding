export const technicalArticles = {
  "windows-event-log-toplama-yontemleri": {
    title: "Windows Event Log Toplarken Yapılan 5 Kritik Hata ve Çözümü",
    description: "Windows sunucularınızdan log toplarken sisteminizi kilitlemeyin. En iyi Windows event log toplama yöntemleri ve performans ipuçları.",
    content: `
      <h2>Teknik Analiz: Windows Event Log Toplama Yöntemleri ve Verimlilik</h2>
      <p>
        Birçok sistem yöneticisi, tüm Windows loglarını "bas gitsin" mantığıyla SIEM'e gönderir. Sonuç? CPU tavan yapar, network şişer ve diskler dolar. <strong>Windows event log toplama yöntemleri</strong> arasından doğru olanı seçmek, siber güvenliğin sürdürülebilirliği için hayati önem taşır.
      </p>

      <h3>Sistem Yöneticilerinin Düştüğü 5 Hata</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Filtreleme Yapmamak:</strong> 4624 (Login) logu toplarken, gereksiz servis hesaplarının loglarını elememek.</li>
        <li><strong>Zaman Kayması:</strong> NTP ayarı bozuk sunucuların loglarını toplamak (Analiz yapılamaz hale gelir).</li>
        <li><strong>WMI Bağımlılığı:</strong> Ajansız toplama (Agentless) yaparken sunucu kaynaklarını aşırı tüketmek.</li>
        <li><strong>Şifrelemesiz Gönderim:</strong> Logların network içinde "Clear-text" akması (Saldırgan logları izleyebilir).</li>
        <li><strong>Eksik Audit Policy:</strong> Windows üzerinde log üretimi kapalıyken SIEM'den veri beklemek.</li>
      </ul>

      <p><strong>Teknik Araç:</strong> Sunucularınızın log kapasitesini ölçmek için <strong>"ACKLOG Windows Audit Checker"</strong> scriptimizi kullanabilirsiniz.</p>

      <p>
        <strong>ACKLOG Agent</strong>, rakiplerine göre %40 daha az kaynak harcayarak en güvenli <strong>Windows event log toplama yöntemleri</strong> çözümünü sunar.
      </p>
    `
  },
  "syslog-ng-yapilandirma-rehberi": {
    title: "Syslog-ng Yapılandırma Rehberi: Linux Sistemlerde Log Kaybına Son",
    description: "Merkezi log yönetimi için profesyonel syslog-ng yapılandırma rehberi. Filtreleme, yönlendirme ve güvenli veri iletimi teknikleri.",
    content: `
      <h2>Uzman Rehberi: Syslog-ng Yapılandırma Rehberi ve Püf Noktaları</h2>
      <p>
        Linux dünyasında log yönetimi denince akla gelen ilk isim syslog-ng'dir. Ancak yanlış bir konfigürasyon, sistemin tıkanmasına veya kritik logların uçup gitmesine neden olabilir. <strong>Syslog-ng yapılandırma rehberi</strong> ile sadece veri toplamakla kalmayıp, veriyi zenginleştirmeyi de öğrenmelisiniz.
      </p>

      <h3>Konfigürasyonda Otorite İpuçları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>UDP Yerine TCP:</strong> Paket doğrulaması (acknowledgement) için mutlaka TCP kullanın.</li>
        <li><strong>Disk Buffer:</strong> Network koptuğunda logları diske yazacak bir tampon (buffer) alanı oluşturun.</li>
        <li><strong>Macro Kullanımı:</strong> Host adı, IP ve tarih bilgisini log başına otomatik ekleyin.</li>
      </ul>

      <blockquote>
        <p><strong>Case Study:</strong> Bir holding, network kesintisi sırasında syslog-ng disk buffer özelliği sayesinde 3 saatlik log kaybını önleyerek saldırı izlerini tespit etmeyi başardı.</p>
      </blockquote>

      <p>
        ACKLOG, karmaşık <strong>syslog-ng yapılandırma rehberi</strong> dosyalarıyla uğraşmadan, tüm Linux akışınızı görsel bir ekrandan yönetmenize olanak tanır.
      </p>
    `
  },
  "firewall-loglarini-siem-e-aktarma": {
    title: "Firewall Loglarını SIEM'e Aktarma: Saldırganı Kapıda Durdurun",
    description: "Firewall loglarını SIEM'e aktarma süreçlerinde dikkat edilmesi gerekenler. Tehditleri gerçek zamanlı yakalamak için teknik altyapı rehberi.",
    content: `
      <h2>Network Güvenliği: Firewall Loglarını SIEM'e Aktarma Stratejileri</h2>
      <p>
        Güvenlik duvarınız saniyede binlerce paket engeller (drop). Peki bu engellemeler bir port taraması mı yoksa hedeflenmiş bir saldırı mı? <strong>Firewall loglarını SIEM'e aktarma</strong> yapmadığınız sürece bu soruya asla cevap veremezsiniz. Loglar, kapınızdaki hırsızın ayak sesleridir.
      </p>

      <h3>Başarılı Aktarım İçin 3 Kritere Dikkat</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>CEF/LEEF Formatı:</strong> SIEM'in logları anında anlayabilmesi için standart formatları destekleyin.</li>
        <li><strong>Verbose Logging:</strong> Sadece hataları değil, kritik erişim (permit) loglarını da toplayın.</li>
        <li><strong>Entegrasyon:</strong> ACKLOG üzerinden firewall'a otomatik "Kural Yaz (Block)" komutu gönderebilme yeteneği.</li>
      </ol>

      <p><strong>Magnet Blog:</strong> "En Çok İzlenen 10 Firewall Logu ve Anlamı" başlıklı teknik incelememizi sitemizden okuyun.</p>

      <p>
        ACKLOG, piyasadaki tüm markaların <strong>firewall loglarını SIEM'e aktarma</strong> süreçlerini saniyeler içinde tamamlayan hazır konnektörlere sahiptir.
      </p>
    `
  },
  "linux-log-analizi-nasil-yapilir": {
    title: "Linux Log Analizi Nasıl Yapılır? Bir Analistin El Kitabı",
    description: "Terminal başında saatlerce kaybolmayın. Linux log analizi nasıl yapılır? grep, tail ve journalctl komutlarıyla hızlı analiz teknikleri.",
    content: `
      <h2>Sistem Yöneticisinin Silahı: Linux Log Analizi Nasıl Yapılır?</h2>
      <p>
        Linux sunucunuz yavaşladıysa veya şüpheli bir süreç (process) gördüyseniz, cevap loglardadır. <strong>Linux log analizi nasıl yapılır?</strong> araması yapanlar için en pratik yöntem, olaylar arasındaki zaman bağını kurmaktır. Manuel yöntemler başınızı ağrıtabilir.
      </p>

      <h3>Analistin Terminal Komutları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><code>tail -f /var/log/auth.log</code>: Canlı SSH denemelerini izleme.</li>
        <li><code>journalctl -xe</code>: Sistem hatalarının detaylı dökümü.</li>
        <li><code>grep -i "fail" /var/log/syslog</code>: Hata içeren kayıtları filtreleme.</li>
      </ul>

      <p><strong>Teknik Öneri:</strong> Terminalde boğulmak yerine, <strong>"ACKLOG Linux Collector"</strong> ile logları merkezi dashboard'a çekip görsel analiz yapabilirsiniz.</p>

      <p>
        ACKLOG, "<strong>Linux log analizi nasıl yapılır?</strong>" sorusuna cevap arayanlar için en sezgisel ve hızlı raporlama modülünü sunar.
      </p>
    `
  },
  "active-directory-log-izleme": {
    title: "Active Directory Log İzleme: 'Domain Admin' Yetkisini Kim Aldı?",
    description: "Kimlik hırsızlığına karşı Active Directory log izleme rehberi. Kritik Event ID'ler ve şüpheli kullanıcı hareketleri takibi.",
    content: `
      <h2>Kurumsal Güvenlik: Active Directory Log İzleme ve Otorite Denetimi</h2>
      <p>
        Şirketinize giren bir saldırganın ilk yapacağı iş, bir kullanıcıyı "Domain Admin" grubuna dahil etmektir. Eğer <strong>active directory log izleme</strong> yapmıyorsanız, şirketinizin anahtarını saldırgana kendi ellerinizle teslim etmiş olursunuz. Kimlik güvenliği, ağ güvenliğinden önce gelir.
      </p>

      <h3>Takip Etmeniz Gereken 3 Kritik Senaryo</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Event ID 4720:</strong> Birileri gizlice yeni bir kullanıcı mı açtı?</li>
        <li><strong>Event ID 4728:</strong> Bir kullanıcı kritik bir gruba (Admins vb.) mı eklendi?</li>
        <li><strong>Privilege Use:</strong> Bir standart kullanıcı, yetkisi olmayan bir dosyaya mı erişmeye çalıştı?</li>
      </ul>

      <blockquote>
        <p><strong>Vaka Analizi:</strong> Bir siber saldırgan, mesai dışı saatte bir stajyer hesabına AD üzerinden tam yetki verdi. ACKLOG <strong>active directory log izleme</strong> alarmı tetiklendiği anda hesap dondurularak veri sızıntısı engellendi.</p>
      </blockquote>

      <p>
        ACKLOG ile AD güvenliğiniz artık tesadüflere değil, verilere emanet.
      </p>
    `
  },
  "sql-server-audit-log-toplama": {
    title: "SQL Server Audit Log Toplama: Veritabanı Sızıntılarını Durdurun",
    description: "Müşteri verileriniz güvende mi? SQL server audit log toplama teknikleri ve hassas sorgu (select/delete) izleme rehberi.",
    content: `
      <h2>Veriye Erişim Denetimi: SQL Server Audit Log Toplama ve Güvenlik</h2>
      <p>
        Uygulama sunucunuzun logları temiz görünebilir, peki ya veritabanına doğrudan (backdoor) erişenler? <strong>SQL server audit log toplama</strong>, veritabanı yöneticisinin (DBA) bile her hareketini kayıt altına alarak kurumsal hafızayı korur. Veri hırsızlığı veritabanında biter.
      </p>

      <h3>Audit Loglama İçin 3 Uzman Tavsiyesi</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Sadece Kritik Tablolar:</strong> Her şeyi değil, sadece KVKK kapsamındaki tablo erişimlerini loglayarak performansı koruyun.</li>
        <li><strong>Audit File vs. Event Log:</strong> Logları önce dosya olarak tutup, ardından SIEM'e çekmek disk yükünü azaltır.</li>
        <li><strong>Entegrasyon:</strong> SQL hatalarını SIEM üzerinden izleyerek muhtemel "SQL Injection" saldırılarını önceden görün.</li>
      </ol>

      <p><strong>Bilinçli Kullanım:</strong> Sitemizden <strong>"SQL Güvenlik Hardening Rehberi"</strong> dökümanını indirerek sunucunuzu zırhlayın.</p>

      <p>
        <strong>ACKLOG</strong>, yerleşik SQL agentları ile <strong>SQL server audit log toplama</strong> süreçlerini performans kaybı yaşatmadan otomatiğe bağlar.
      </p>
    `
  },
  "log-korelasyon-kurallari-ornekleri": {
    title: "Log Korelasyon Kuralları Örnekleri: Siber Tehditleri Nasıl Yakalarız?",
    description: "SIEM sisteminizin beynini güçlendirin. Log korelasyon kuralları örnekleri ve modern SOC merkezleri için alarm senaryoları.",
    content: `
      <h2>Zeki Güvenlik: Log Korelasyon Kuralları Örnekleri ve Analizi</h2>
      <p>
        Log toplamak "kayıt memurluğudur", korelasyon yapmak ise "dedektifliktir". <strong>Log korelasyon kuralları örnekleri</strong>, basit olayları birleştirerek büyük resmi görmenizi sağlar. Bir başarısız login tek başına hata olabilir, ama 5 ülkeden gelen 500 başarısız login bir savaştır.
      </p>

      <h3>En Popüler 3 Korelasyon Senaryosu</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Brute Force + Success:</strong> 20 başarısız denemenin ardından gelen ilk başarılı giriş (Hemen Şifreyi Sıfırlayın!).</li>
        <li><strong>Ransomware Indicators:</strong> Kısa sürede binlerce dosyanın isminin değişmesi veya silinmesi.</li>
        <li><strong>Impossible Travel:</strong> Bir kullanıcının aynı anda Ankara ve Londra'dan login olması.</li>
      </ul>

      <p><strong>Magnet İçerik:</strong> Sitemizdeki <strong>"Kendi Korelasyon Kuralını Yaz"</strong> interaktif aracını kullanarak hayali senaryolarınızı test edin.</p>

      <p>
        ACKLOG, kütüphanesindeki yüzlerce hazır <strong>log korelasyon kuralları örnekleri</strong> ile siber savunmanızı bir saniyede aktif eder.
      </p>
    `
  },
  "brute-force-saldirisi-tespit-kurallari": {
    title: "Brute Force Saldırısı Tespit Kuralları: Sistem Kapılarını Zırhlayın",
    description: "Kaba kuvvet saldırılarını henüz başlamadan engelleyin. Brute force saldırısı tespit kuralları ve otomatik IP bloklama stratejileri.",
    content: `
      <h2>Aktif Savunma: Brute Force Saldırısı Tespit Kuralları ve Önleme</h2>
      <p>
        Saldırganlar robotlar kullanarak saniyede binlerce şifre denerler. Manuel olarak bu IP'leri engellemeye çalışmak boşa vakit kaybıdır. <strong>Brute force saldırısı tespit kuralları</strong>, bu otomatize saldırılara karşı otomatize bir cevap vermelidir.
      </p>

      <h3>Etkili Tespit Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Kaynak IP Bazlı:</strong> Tek bir IP'den gelen başarısız isteklerin sayılması.</li>
        <li><strong>Zaman Aralığı:</strong> 5 dakika içinde gerçekleşen 20'den fazla deneme.</li>
        <li><strong>Servis Bazlı:</strong> Sadece RDP, SSH veya Panel girişlerini hedefleyen kurallar.</li>
      </ul>

      <blockquote>
        <p><strong>Uzman Görüşü:</strong> Brute force'u tespit etmek yetmez, ACKLOG SOAR entegrasyonu ile bu IP'yi Firewall üzerinde anında kara listeye (black list) almalısınız.</p>
      </blockquote>

      <p>
        ACKLOG, "<strong>Brute force saldırısı tespit kuralları</strong>" modülü ile kurumunuzun dijital kapılarını sızılması imkansız hale getirir.
      </p>
    `
  },
  "siem-dashboard-tasarimi-ornekleri": {
    title: "SIEM Dashboard Tasarımı Örnekleri: Veriyi Bilgiye Dönüştürün",
    description: "Bir SOC analisti için en iyi SIEM dashboard tasarımı örnekleri. Görselleştirme teknikleriyle tehditleri anında fark edin.",
    content: `
      <h2>Görsel Güç: SIEM Dashboard Tasarımı Örnekleri ve En İyi Pratikler</h2>
      <p>
        Veri yığınları arasında boğulmayın. <strong>SIEM dashboard tasarımı örnekleri</strong>, kurumunuzun siber sağlık durumunu bir bakışta anlamanızı sağlamalıdır. Kötü tasarlanmış bir dashboard, kritik bir alarmın gözden kaçmasına neden olabilir.
      </p>

      <h3>Bir Dashboard'da Olması Gereken 3 Temel Widget</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Log Velocity:</strong> Log geliş hızı aniden düştü mü? (Cihaz bağlantısı koptu mu?)</li>
        <li><strong>Tehdit Haritası:</strong> Saldırılar hangi coğrafyalardan yoğunlaşıyor?</li>
        <li><strong>Active Failures:</strong> Şu an sistemde çözülmeyi bekleyen kaç kritik olay var?</li>
      </ul>

      <p><strong>Görsel Rehber:</strong> Sitemizdeki <strong>"Hazır Dashboard Şablonları"</strong> galerisine göz atarak kendi ekranınızı tasarlamaya başlayın.</p>

      <p>
        ACKLOG'un sürükle-bırak (No-Code) arayüzü ile kendi <strong>siem dashboard tasarımı örnekleri</strong> setinizi hiçbir teknik destek almadan dakikalar içinde oluşturabilirsiniz.
      </p>
    `
  },
  "log-ayristirma-parsing-teknikleri": {
    title: "Log Ayrıştırma (Parsing) Teknikleri: Regex Karmaşasından Kurtulun",
    description: "Log verilerini anlamlı alanlara bölmek için en iyi log ayrıştırma (parsing) teknikleri. Veri işlemede hız ve doğruluk rehberi.",
    content: `
      <h2>Veri Mühendisliği: Log Ayrıştırma (Parsing) Teknikleri ve Performans</h2>
      <p>
        SIEM sistemlerinin en zor ve yorucu işi parsing'dir. Logları doğru alanlara (Source, Destination, Action vb.) bölemezseniz, ne korelasyon yapabilirsiniz ne de rapor alabilirsiniz. <strong>Log ayrıştırma (parsing) teknikleri</strong> konusunda uzmanlaşmak, bir siber güvenlik uzmanı için altın bileziktir.
      </p>

      <h3>Parsing'de Yeni Trend: No-Code</h3>
      <p>
        Eski sistemlerde her yeni log formatı için saatlerce Regex (Regular Expression) yazılırdı. Modern <strong>log ayrıştırma (parsing) teknikleri</strong>, artık yapay zeka ve sürükle-bırak yöntemlerini kullanıyor.
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Grok Patterns:</strong> Hızlı ama hata payı yüksek.</li>
        <li><strong>Regex:</strong> Güçlü ama karmaşık ve hata yapmaya müsait.</li>
        <li><strong>ACKLOG Visual Parser:</strong> Logu işaretleyin, alan adını verin, bitti!</li>
      </ul>

      <p>
        Karmaşık <strong>log ayrıştırma (parsing) teknikleri</strong> ile vakit kaybetmeyin, ACKLOG ile veriyi saniyeler içinde anlamlandırın.
      </p>
    `
  },
  "regex-ile-log-temizleme": {
    title: "RegEx İle Log Temizleme: Gereksiz Kayıtlarla Vedalaşın",
    description: "SIEM veritabanınızı gereksiz loglardan arındırın. RegEx ile log temizleme ve filtreleme teknikleri ile depolama tasarrufu.",
    content: `
      <h2>Veri Hijyeni: RegEx İle Log Temizleme ve Optimizasyon Stratejisi</h2>
      <p>
        Bir Firewall her gün milyonlarca "Keep-Alive" veya "TCP Connection Closed" mesajı üretir. Bu loglar genellikle güvenliğe bir katkı sağlamaz ama diskinizi şişirir. <strong>RegEx ile log temizleme</strong> yaparak, sadece siber güvenlik değeri olan verileri sistemde tutmalısınız.
      </p>

      <h3>Temizlik Sonrası Kazanımlar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>EPS Tasarrufu:</strong> Lisans limitlerinizi sadece değerli loglar için kullanın.</li>
        <li><strong>Sorgu Hızı:</strong> Milyonlarca boş kayıt elendiği için dashboard'lar ışık hızında açılır.</li>
        <li><strong>Disk Tasarrufu:</strong> Saklama maliyetlerini %30'a kadar düşürün.</li>
      </ul>

      <p><strong>Online Araç:</strong> Yazdığınız temizleme kuralının doğru çalışıp çalışmadığını <strong>"ACKLOG RegEx Tester"</strong> üzerinden canlı deneyin.</p>

      <p>
        ACKLOG, <strong>RegEx ile log temizleme</strong> işini arka planda otomatik yaparak sizi teknik karmaşadan kurtarır.
      </p>
    `
  },
  "netflow-verisi-analizi-siem": {
    title: "Netflow Verisi Analizi SIEM: Ağınızdaki Sessiz Tehditleri Görün",
    description: "Sadece loglara bakarak her şeyi anlayamazsınız. Netflow verisi analizi SIEM sistemleri için neden vazgeçilmezdir? Trafik analizi rehberi.",
    content: `
      <h2>Ağ Trafiği İzleme: Netflow Verisi Analizi SIEM Entegrasyonu Analizi</h2>
      <p>
        Loglar size hırsızın kapıyı açtığını söyler, Netflow ise hırsızın içeride hangi odalara girdiğini ve hangi çantayı dışarı çıkardığını gösterir. <strong>Netflow verisi analizi SIEM</strong> sistemlerinde kullanıldığında, ağınızdaki alışılmadık veri transferlerini ve "Shadow IT" (Kayıt dışı cihazlar) hareketlerini kabak gibi ortaya çıkarır.
      </p>

      <h3>Netflow Neden Kritiktir?</h3>
      <p>
        Saldırganlar bazı durumlarda izlerini (loglarını) silebilirler, ancak ağ üzerinden akan trafiği (flow) asla gizleyemezler. <strong>Netflow verisi analizi SIEM</strong> sayesinde, bir sunucunun aniden yurt dışındaki bir IP'ye GB'larca veri gönderdiğini anında fark edebilirsiniz.
      </p>

      <p><strong>Öneri:</strong> Ağ haritanızı çıkarmak için <strong>"ACKLOG Network Visualizer"</strong> modülünü aktif edin.</p>

      <p>
        ACKLOG, <strong>netflow verisi analizi SIEM</strong> yeteneğiyle ağınızdaki kör noktaları siber güvenlik kalkanına dönüştürür.
      </p>
    `
  },
  "switch-ve-router-loglarini-izleme": {
    title: "Switch ve Router Loglarını İzleme: Omurga Ağınızı Korun",
    description: "Altyapıda siber güvenlik switch'ten başlar. Switch ve router loglarını izleme teknikleri ve port bazlı güvenlik takibi rehberi.",
    content: `
      <h2>Altyapı Güvencesi: Switch ve Router Loglarını İzleme ve Önemi</h2>
      <p>
        Bir saldırgan şirketinize gelip bir switch portuna kablo taktığında ne olur? Eğer <strong>switch ve router loglarını izleme</strong> yapmıyorsanız, her şeyi izole ettiğiniz güvenli ağınız saniyeler içinde tehlikeye düşer. Omurga cihazlarınız, ağın en temel ve en kritik noktalarıdır.
      </p>

      <h3>İzlenmesi Gereken 3 Kritik Olay</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Port Up/Down:</strong> Kritik bir sunucunun kablosu mu çekildi?</li>
        <li><strong>Config Change:</strong> Birileri switch şifresini mi değiştirdi veya VLAN ayarlarıyla mı oynadı?</li>
        <li><strong>STP Loop:</strong> Ağın çökmesine neden olan bir loop (döngü) mu oluştu?</li>
      </ol>

      <p><strong>Teknik Blog:</strong> "Switch Loglarından Donanımsal Arıza Tespiti Nasıl Yapılır?" başlıklı yazımızı inceleyin.</p>

      <p>
        ACKLOG, <strong>switch ve router loglarını izleme</strong> modülüyle network yöneticilerinin en sadık dostudur.
      </p>
    `
  },
  "vpn-loglari-takibi": {
    title: "VPN Logları Takibi: Uzaktan Çalışanların Güvenliği Size Emanet",
    description: "Ofis dışında güvenlik zafiyeti bırakmayın. VPN loglari takibi ile hesap ele geçirme ve siber sızıntı tespiti rehberi.",
    content: `
      <h2>Remote Güvenlik: VPN Logları Takibi ve Anomali Analizi</h2>
      <p>
        Pandemi sonrası "Remote Work" (Uzaktan Çalışma) kalıcı hale geldi. Ancak bu durum, şifresi çalınan her çalışanın ağınıza doğrudan tünel açması riskini getirdi. <strong>VPN loglari takibi</strong>, bu tünelin güvenli mi yoksa bir Truva atı mı olduğunu belirlemenizi sağlar.
      </p>

      <h3>VPN İzleme İçin 3 Altın Kural</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Geo-IP Analizi:</strong> Sadece Türkiye'den bağlanması gereken personel neden Çin'den login oldu?</li>
        <li><strong>MFA Failure:</strong> İki aşamalı doğrulamayı (2FA) bypass etme denemelerini yakalayın.</li>
        <li><strong>Session Duration:</strong> 72 saattir açık kalan şüpheli VPN oturumlarını sonlandırın.</li>
      </ul>

      <p><strong>Ücretsiz Check-up:</strong> VPN sisteminizin güvenliğini ölçmek için <strong>"VPN Security Audit Checklist"</strong> dökümanımızı indirin.</p>

      <p>
        ACKLOG ile <strong>vpn loglari takibi</strong> artık bir yük değil, kurumunuzun siber zırhının bir parçasıdır.
      </p>
    `
  },
  "siem-uzerinde-alarm-olusturma": {
    title: "SIEM Üzerinde Alarm Oluşturma: Yanlış Alarmları (False Positive) Bitirin",
    description: "Analistlerinizin 'Alarm Yorgunluğu' (Alert Fatigue) yaşamasını engelleyin. Etkili SIEM üzerinde alarm oluşturma stratejileri.",
    content: `
      <h2>Siber Operasyon: SIEM Üzerinde Alarm Oluşturma Stratejileri</h2>
      <p>
        Günde 10.000 alarm üreten bir sistem, alarm üretmiyordur; gürültü yapıyordur. <strong>SIEM üzerinde alarm oluşturma</strong> süreci, "az ama öz" prensibine dayanmalıdır. Sadece analistin müdahale etmesi gereken olaylar "kritik" olarak atanmalıdır.
      </p>

      <h3>Etkili Alarm Tasarım Aşamaları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Baseline Belirleme:</strong> Sisteminizin "normal" trafik değerlerini ölçün.</li>
        <li><strong>Threshold (Eşik) Ayarı:</strong> 1-2 başarısız login normaldir, ama 5 dakikada 50 login saldırıdır.</li>
        <li><strong>Aksiyon Belirleme:</strong> Alarm çaldığında analistin önüne bir "Playbook" (Hap çözüm) çıkarın.</li>
      </ol>

      <p><strong>Profesyonel Tavsiye:</strong> Sitemizden <strong>"Top 50 SOC Alarm Senaryosu"</strong> dökümanını indirerek kendi kurallarınızı oluşturmaya başlayın.</p>

      <p>
        ACKLOG'un sezgisel arayüzü sayesinde <strong>siem üzerinde alarm oluşturma</strong> süreci teknik bir çile olmaktan çıkar, bir siber savunma sanatına dönüşür.
      </p>
    `
  }
};
