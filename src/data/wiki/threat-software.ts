export const threatSoftwareArticles = {
  "brute-force-saldirisi-nedir-ve-nasil-engellenir": {
    title: "Brute Force (Kaba Kuvvet) Saldırısı Nedir ve Nasıl Engellenir?",
    description: "Deneme-yanılma yoluyla şifre kırma saldırılarının tespiti, analizi ve otomatik bloklama yöntemleri.",
    content: `
      <h2>Siber Tehdit: Brute Force Ataklarının Anatomisi</h2>
      <p>Brute Force (Kaba Kuvvet), bir saldırganın sisteminize girmek için tüm olası şifre kombinasyonlarını tek tek denemesi sürecidir. Saniyede binlerce deneme yapan botlar, zayıf şifreli hesapları dakikalar içinde ele geçirebilir.</p>
      
      <h3>Tespit Teknikleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Windows Event ID 4625:</strong> Peş peşe gelen başarısız login loglarını izleyin.</li>
        <li><strong>Kaynak IP Analizi:</strong> Tek bir IP'den farklı kullanıcı isimlerine yapılan saldırılar.</li>
        <li><strong>Password Spraying:</strong> Tek bir şifrenin (örn: Sifre123) yüzlerce kullanıcıda denenmesi.</li>
      </ul>

      <p><strong>ACKLOG Anti-Brute Alert:</strong> ACKLOG, bu hataları anlık olarak sayar. "10 saniyede 10 hata veren IP'yi firewall'dan banla" kuralıyla sisteminizi otomatik korur. Manuel olarak bu logları sayamazsınız, ACKLOG ile kalkanınızı otomatiğe bağlayın.</p>
    `
  },
  "ransomware-fidye-yazilimi-nasil-bulasir-onlemler": {
    title: "Ransomware (Fidye Yazılımı) Nasıl Bulaşır? Korunma Rehberi",
    description: "Şirket dosyalarını şifreleyen fidyecilerin en sevdiği yöntemler ve proaktif savunma.",
    content: `
      <h2>Büyük Tehlike: Ransomware Bulaşma Kanalları</h2>
      <p>Ransomware saldırıları sadece bir "Virüs" değil, bir "Operasyondur". Dosyalarınız şifrelenmeden önce saldırgan içeri sızar, yedekleri siler ve en son kilidi vurur.</p>
      
      <h3>En Yaygın Giriş Noktaları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Phishing (Oltalama):</strong> Personelin tıkladığı "Fatura Ekli" sahte mail.</li>
        <li><strong>Açık RDP Portu:</strong> İnternete doğrudan açık ve şifresi zayıf uzak masaüstü.</li>
        <li><strong>Zafiyetler:</strong> Güncellenmemiş VPN veya Web sunucuları.</li>
      </ul>

      <p><strong>ACKLOG Ransomware Detection:</strong> ACKLOG, sunuculardaki dosya hareketlerini ve uzantı değişikliklerini milisaniye bazında takip eder. Şüpheli bir şifreleme aktivitesi gördüğü anda ağ bağlantısını keser ve "Saldırı Var!" alarmını tetikler. Manuel kontroller veri kurtarmaz, ACKLOG ile sisteminizi zırhlayın.</p>
    `
  },
  "phishing-oltalama-saldirisi-analizi-ve-korunma": {
    title: "Phishing (Oltalama) Saldırısı Analizi ve Personel Korunma Rehberi",
    description: "Sahte e-postalarla kimlik hırsızlığına karşı şirket personelinizi nasıl eğitirsiniz?",
    content: `
      <h2>Dijital Tuzak: Phishing Nasıl Çalışır?</h2>
      <p>Phishing (Oltalama), siber saldırganların kendilerini güvenilir bir kurum (Banka, Devlet, Kargo) gibi göstererek şifrelerinizi veya kredi kartı bilgilerinizi çalma yöntemidir. Teknik bir açık değil, bir "İnsan açığı" saldırısıdır.</p>
      
      <h3>Bir Mailin Sahte Olduğunu Gösteren 3 İşaret</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Gönderen mail adresindeki harf oyunları (örn: g00gle.com).</li>
        <li>Aciliyet duygusu ve korkutma ("Hesabınız kapatılacaktır").</li>
        <li>Linkin üzerine gelindiğinde görünen farklı hedef URL.</li>
      </ol>

      <p><strong>ACKLOG Mail Watcher:</strong> Kurumsal mail sunucunuzun loglarını ACKLOG ile analiz edin. Olağandışı bir "Toplu Gelen Mail" akınını veya zararlı link içeren mesajları ACKLOG ile anında raporlayın. Personel farkındalığı önemlidir ama ACKLOG ile teknik denetim yapmak hayati önemdedir.</p>
    `
  },
  "sirket-maillerinin-dark-web-e-dusmesi-ne-anlama-gelir": {
    title: "Şirket Maillerinin Dark Web'e Düşmesi: Ne Yapmalısınız?",
    description: "Sızdırılan kurumsal şifrelerin takibi, veri sızıntısı analizi ve hesap güvenliği.",
    content: `
      <h2>Yerin Altı: Dark Web ve Veri Sızıntıları</h2>
      <p>Üçüncü taraf bir site (LinkedIn, Adobe vb.) hacklendiğinde, personelinizin o sitede kullandığı kurumsal maili ve şifresi Dark Web forumlarında satışa çıkar. Saldırganlar bu şifreleri kullanarak doğrudan şirket VPN'inize girmeye çalışırlar.</p>
      
      <h3>Kurtarma Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Tüm personelin şifrelerini acilen resetleyin.</li>
        <li>MFA (Çok Faktörlü Doğrulama) kullanımını zorunlu kılın.</li>
        <li>VPN loglarında "Hatalı şifre denemelerini" izleyin.</li>
      </ul>

      <p><strong>ACKLOG Dark Web Monitor Entegrasyonu:</strong> ACKLOG, sızdırılmış veri tabanlarıyla entegre çalışarak şirket maillerinizi izler. Bir sızıntı olduğunda size mail daha saldırgana ulaşmadan haber verir. Manuel kontrollerle sızıntıları göremezsiniz, ACKLOG ile siber istihbaratı yanınıza alın.</p>
    `
  },
  "zararli-yazilim-malware-analizi-bt-ekipleri-icin": {
    title: "Zararlı Yazılım (Malware) Analizi: BT Ekipleri İçin Giriş Rehberi",
    description: "Sunucuda bulunan şüpheli bir dosya nasıl analiz edilir? Statik ve dinamik yöntemler.",
    content: `
      <h2>Siber İnceleme: Malware Nasıl Teşhis Edilir?</h2>
      <p>Malware (Kötü amaçlı yazılım), sisteminizde izinsiz çalışan her türlü programdır. Bazıları reklam gösterir (Adware), bazıları ise tüm dosyaları çalar (Spyware). BT yöneticileri bu "Misafirleri" anında kovmak zorundadır.</p>
      
      <h3>Analiz Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Hash Kontrolü:</strong> Dosyanın parmak izini (MD5/SHA256) VirusTotal üzerinde taratın.</li>
        <li><strong>Process İzleme:</strong> Görev yöneticisinde bilinmeyen ve CPU sömüren işlemleri bulun.</li>
        <li><strong>Network Connections:</strong> Dosya hangi dış IP ile (C&C) konuşuyor?</li>
      </ul>

      <p><strong>ACKLOG Endpoint Security:</strong> ACKLOG, sunucularda yeni oluşan dosyaları ve bunların ağ hareketlerini anlık loglar. Bir malware dışarıya veri sızdırmaya çalıştığı an ACKLOG alarm verir. Manuel analiz vakit kaybettirir, ACKLOG ile zararlıyı daha "Uyandığında" yakalayın.</p>
    `
  },
  "sql-injection-saldirisi-tespiti-ve-waff": {
    title: "SQL Injection Saldırısı Tespiti ve WAF Kullanımı",
    description: "Web sitenize gelen veritabanı saldırılarını (SQLi) loglar üzerinden nasıl yakalarsınız?",
    content: `
      <h2>Web Güvenliği: SQL Injection Nedir?</h2>
      <p>SQL Injection, web sitenizdeki formlar aracılığıyla veritabanınıza zararlı SQL komutları gönderilmesi saldırısıdır. Amacı veritabanını çalmak veya yönetici şifrelerini bypass etmektir.</p>
      
      <h3>Analiz Belirtileri (Web Logs)</h3>
      <p>Web sunucusu loglarınızda (IIS/Nginx) URL içinde <strong>' OR '1'='1</strong> veya <strong>UNION SELECT</strong> gibi ifadeler görüyorsanız web siteniz saldırı altındadır.</p>

      <p><strong>ACKLOG Web Guard:</strong> ACKLOG, web erişim loglarını gerçek zamanlı analiz eder. Gelen isteklerin içinde SQLi desenleri (patterns) saptadığında WAF'a (Web Application Firewall) blok emri gönderir. Manuel kod incelemesi zordur, ACKLOG ile veritabanınızı siber kalkanla savunun.</p>
    `
  },
  "botnet-saldirilarini-engelleme-stratejileri": {
    title: "Botnet Saldırılarını Engelleme: Zombi Ordularına Karşı Savunma",
    description: "Binlerce cihazdan gelen koordineli saldırıları durdurma ve ağ trafiği analizi.",
    content: `
      <h2>Siber Ordu: Botnet Tehdidi Nedir?</h2>
      <p>Botnet, bir saldırganın kontrolündeki binlerce hacklenmiş cihazdan oluşan (Zombi ordusu) bir ağdır. Bu cihazlar aynı anda tek bir hedefe saldırarak (DDoS) sistemleri çökertebilir veya toplu Spam mailler gönderebilir.</p>
      
      <h3>Savunma Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>IP itibar (Reputation) servislerini kullanın.</li>
        <li>Ağdaki aniden artan dış trafik hacmini izleyin.</li>
        <li>Cihazlarınızın (IoT, Sunucu) dışarıya bilinmeyen bağlantılar yapmasını bloklayın.</li>
      </ul>

      <p><strong>ACKLOG Botnet Defense:</strong> ACKLOG, bilinen botnet komuta kontrol merkezlerinin (C&C) IP'lerini bilir. Cihazlarınızdan bu IP'lere giden en ufak bir paket gittiğinde ACKLOG "Sisteminiz Enfekte Olmuş Olabilir!" uyarısı verir. Manuel takip bitti, ACKLOG ile zombileri ağınızdan uzak tutun.</p>
    `
  },
  "bilgisayarima-sizildigini-nasil-anlarim-bt-rehberi": {
    title: "Bilgisayarıma Sızıldığını Nasıl Anlarım? 10 Kritik Belirti",
    description: "Siber sızma teşhis rehberi: Fare kendiliğinden hareket mi ediyor? Şifreler mi değişti?",
    content: `
      <h2>Siber Teşhis: Sızma Belirtileri</h2>
      <p>İçeri sızan bir saldırgan bazen çok gürültü çıkarır, bazen ise aylar boyunca hiç fark edilmez. BT sistemlerinde sızma belirtilerini okumak bir "Dijital Dedektiflik" işidir.</p>
      
      <h3>En Önemli 5 İşaret</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li><strong>Yeni Kullanıcı Hesapları:</strong> Sizin açmadığınız "Admin" veya "Test" hesaplarının oluşması.</li>
        <li><strong>Durmayan Fan Sesi:</strong> Arkada kripto madencilik (CryptoJacking) yapılması.</li>
        <li><strong>Devre Dışı Kalan Antivirüs:</strong> Güvenlik yazılımının kendiliğinden kapanması.</li>
        <li><strong>Garip Ağ Trafiği:</strong> Bilgisayar boştayken bile internet ışığının sürekli yanması.</li>
      </ol>

      <p><strong>ACKLOG Forensic:</strong> Tüm bu anormallikleri manuel görmeniz zordur. ACKLOG 24 saat boyunca "Normal olanı" öğrenir ve sapan her hareketi raporlar. Bilgisayarınıza sızıldığından şüpheleniyorsanız ACKLOG'un geçmiş log analizine bakın, gerçeği saniyeler içinde öğrenin.</p>
    `
  },
  "siber-saldiri-haritasi-canli-izleme-ve-analiz": {
    title: "Siber Saldırı Haritası: Dünya Neden Saldırı Altında?",
    description: "Canlı siber saldırı haritaları neyi gösterir? Honeypot verileri ve trend analizleri.",
    content: `
      <h2>Savaşın Rengi: Canlı Siber Saldırı Haritaları</h2>
      <p>İnternette gördüğünüz siber saldırı haritaları (Norse, Kaspersky vb.) aslında "Honeypot" (Yem) sunucularına gelen atakların görselleştirilmiş halidir. Bu haritalar size siber savaş dünyasının anlık nabzını verir.</p>
      
      <h3>Haritaları Nasıl Okumalısınız?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Kırmızı Çizgiler:</strong> Genellikle DDoS saldırılarını temsil eder.</li>
        <li><strong>Yoğunluk:</strong> Hangi ülkelerin hedef alındığı (Genellikle ABD, Çin, Rusya).</li>
        <li><strong>Atak Tipleri:</strong> En çok hangi portların (SSH, Telnet) tarandığı.</li>
      </ul>

      <p><strong>ACKLOG Internal Map:</strong> Keşke kendi ağınızın da böyle canlı bir haritası olsa değil mi? ACKLOG size kurum içi ağ trafiğinizin canlı siber haritasını sunar. Dışarıdan gelen atakları gerçek zamanlı izleyin ve kendi "Savaş Odanızı" kurun. Manuel raporlar geçmişi söyler, ACKLOG anı yaşatır.</p>
    `
  },
  "en-son-siber-guvenlik-haberleri-nasil-takip-edilir": {
    title: "En Son Siber Güvenlik Haberleri: Gündemden Geri Kalmayın",
    description: "Siber bültenler, podcastler ve haber kaynakları ile güncel kalın.",
    content: `
      <h2>Bilgi En Büyük Güçtür: Siber Gündem</h2>
      <p>Yeni çıkan bir "Zero Day" (Sıfırıncı Gün) açığından haberiniz olmazsa, savunmanız anlamsızdır. Siber güvenlik dünyasında haber okumak lüks değil, mesainin bir parçasıdır.</p>
      
      <h3>Önemli Kaynaklar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>The Hacker News:</strong> Global siber olaylar.</li>
        <li><strong>USOM (TR-CERT):</strong> Türkiye'ye yönelik siber tehdit bültenleri.</li>
        <li><strong>Reddit r/netsec:</strong> Teknik tartışmalar ve yeni araçlar.</li>
      </ul>

      <p><strong>ACKLOG News Feed:</strong> ACKLOG arayüzünde bulunan "Security News" bölümüyle en güncel siber haberler önünüze gelsin. Bir saldırı tipi dünyada yayıldığında ACKLOG sizi önceden uyarsın ve "Siz de riskte misiniz?" analizi yapsın. Manuel araştırmayı bırakın, ACKLOG ile siber gündemi tek merkezden yönetin.</p>
    `
  },
  "uygulama-loglarini-merkezi-toplama-yontemleri": {
    title: "Uygulama Loglarını Merkezi Toplama ve Analiz Yöntemleri",
    description: "Yazılımların ürettiği logları merkezi bir SIEM'e (ACKLOG) aktarma rehberi.",
    content: `
      <h2>Yazılım İzleme: Uygulama Logları Neden Önemli?</h2>
      <p>Sunucu logları işletim sistemini anlatır, Uygulama logları ise "İşi" anlatır. Bir banka uygulamasında "Kredi kartı limiti artırıldı" bilgisini ancak uygulama logundan alabilirsiniz.</p>
      
      <h3>Toplama Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>File Logging:</strong> Logları bir dosyaya yazıp SIEM ajanıyla toplama.</li>
        <li><strong>Structured Logging (JSON):</strong> Analiz edilebilir, başlıkları belli veri üretme.</li>
        <li><strong>Direct API Send:</strong> Yazılımın içinden logu doğrudan SIEM'e (HTTPS/UDP) gönderme.</li>
      </ul>

      <p><strong>ACKLOG App Analytics:</strong> Kendi yazdığınız yazılımların loglarını ACKLOG'a gönderin ve size özel dashboardlar oluşturun. "Hatalı sipariş sayısı" veya "Yavaş çalışan sayfalar" grafiklerini ACKLOG ile izleyin. Manuel log okumakla vakit kaybetmeyin, yazılımınızı ACKLOG ile konuşturun.</p>
    `
  },
  "api-loglama-yontemleri-ve-guvenlik-denetimi": {
    title: "API Loglama Yöntemleri ve Güvenlik Denetimi Rehberi",
    description: "API uç noktalarına (Endpoints) gelen istekleri ve dönen cevapları nasıl izlersiniz?",
    content: `
      <h2>Dijital Bağlantılar: API Güvenliği ve İzleme</h2>
      <p>Modern internet API'lar (Application Programming Interface) üzerinde yükselir. API'larınıza kimin bağlandığını, ne sorduğunu ve ne cevap aldığınızı loglamıyorsanız, verileriniz çalınsa dahi ruhunuz duymaz.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>HTTP Status Codes:</strong> 401 (Unauthorized) ve 500 (Server Error) takibi.</li>
        <li><strong>Request Payload:</strong> Gelen verinin içinde zararlı kod taraması.</li>
        <li><strong>Response Time:</strong> API'nın performans analizi.</li>
      </ul>

      <p><strong>ACKLOG API Monitor:</strong> Tüm API akışınızı ACKLOG ile görselleştirin. "Aynı IP'den saniyede 1000 API isteği geliyor (Brute Force/Scraping)" uyarısını ACKLOG ile alın. Manuel kod inceleme bitti, ACKLOG ile API güvenliğinizi otomatiğe bağlayın.</p>
    `
  },
  "microservices-mimarisinde-log-izleme-stratejileri": {
    title: "Microservices Mimarisinde Log İzleme ve Trace Stratejileri",
    description: "Dağıtık sistemlerde hata takibi (Tracing) ve merkezi log yönetiminin zorlukları.",
    content: `
      <h2>Karmaşık Yapı: Microservices'te Loglama</h2>
      <p>Sizin sisteminiz 50 farklı konteyner üzerinde çalışıyorsa, bir hatanın hangi serviste başladığını bulmak samanlıkta iğne aramaktır. Microservices mimarisinde "Dağıtık Loglama" (Distributed Logging) şarttır.</p>
      
      <h3>Çözüm: Centralized Logging + Correlation ID</h3>
      <p>Her bir isteğe (Request) özel bir 'Correlation ID' atayın. Bu ID ile tüm servislerdeki logları ACKLOG üzerinde birleştirerek isteğin baştan sona seyahatini izleyin.</p>

      <p><strong>ACKLOG Distributed Arch:</strong> ACKLOG, Docker ve Kubernetes ortamlarındaki tüm servis loglarını tek bir havuzda toplar. Hatanın kök nedenini 50 servis içinde saniyeler içinde bulun. Manuel log tarama bitti, ACKLOG ile karmaşıklığı yönetin.</p>
    `
  },
  "docker-konteyner-loglari-yonetimi-ve-guvenlik": {
    title: "Docker Konteyner Logları Yönetimi ve Güvenlik Sıkılaştırma",
    description: "Docker kapalı kutu olmasın! Konteyner içindeki olayları SIEM'e aktarma.",
    content: `
      <h2>Konteyner Dünyası: Docker Logları Nerede?</h2>
      <p>Docker konteynerları geçicidir (Ephemeral). Konteyner kapandığında veya silindiğinde içindeki loglar da yok olur. Bu yüzden loglar üretildiği anda merkezi bir SIEM'e akmalıdır.</p>
      
      <h3>Log Toplama Yolları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Docker Log Drivers:</strong> Gelf, Syslog veya Json-file driver kullanımı.</li>
        <li><strong>Sidecar Logging:</strong> Konteynerın yanına bir log toplayıcı koyma.</li>
        <li><strong>Volume Mapping:</strong> Logları host makinedeki bir klasöre yazıp oradan toplama.</li>
      </ul>

      <p><strong>ACKLOG Container Guard:</strong> Docker ortamınızdaki her hareketi ACKLOG ile izleyin. Bir konteyner içinden dışarıya dosya sızdırılmaya çalışıldığında ACKLOG sizi uyarsın. Manuel kontrollerle konteynerların içini göremezsiniz, ACKLOG ile şeffaflık kazanın.</p>
    `
  },
  "nginx-erisim-loglari-analizi-ve-hiz-limitlendirme": {
    title: "Nginx Erişim Logları Analizi ve Hız Limitlendirme (Rate Limiting)",
    description: "Web sunucunuzu (Nginx) yoran botları ve saldırganları loglar üzerinden tespit edin.",
    content: `
      <h2>Web Sunucu Performansı: Nginx Log Okuma Rehberi</h2>
      <p>Nginx dünyadaki en hızlı web sunucularından biridir ancak yanlış bir konfigürasyon veya bot saldırısı onu saniyeler içinde kitleyebilir. Erişim logları (Access Logs), ağınızdaki "İstenmeyen Misafirlerin" parmak izlerini taşır.</p>
      
      <h3>Analiz Metrikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>404 Hataları:</strong> Sunucunuzdaki "Açıkları" arayan tarama botları.</li>
        <li><strong>Top User Agents:</strong> Hangi tarayıcılar veya botlar (Python-requests vb.) sitenize geliyor?</li>
        <li><strong>Upstream Response Time:</strong> Arka taraftaki uygulamanın (PHP/Python) yavaşlıkları.</li>
      </ul>

      <p><strong>ACKLOG Web Performance:</strong> Nginx loglarını ACKLOG dashboardlarına yansıtın. Bir IP'den gelen aşırı isteği görüp ACKLOG üzerinden tek tıkla banlayın. Manuel olarak büyük log dosyalarını 'cat' ile okumayın, ACKLOG ile analitikte devrim yapın.</p>
    `
  },
  "yazilim-hatalarini-merkezi-izleme-centralized-logging": {
    title: "Yazılım Hatalarını Merkezi İzleme (Centralized Logging) Nedir?",
    description: "Yazılım geliştirme ekipleri için hata ayıklama (Debug) sürelerini kısaltan merkezi log tutma.",
    content: `
      <h2>Geliştirici Gücü: Merkezi Loglama Neden Şart?</h2>
      <p>Bir yazılım hatası olduğunda geliştiricinin sunucuya SSH ile bağlanıp 'tail -f' yapması, 2010 model bir yöntemdir. Modern şirketlerde hata logları (Exceptions, Stack traces) tek bir ekranda toplanır.</p>
      
      <h3>Avantajları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Tüm sunuculardaki hataları tek yerde görme.</li>
        <li>Hata sıklığına göre alarm kurma.</li>
        <li>Saniyeler içinde "Hatanın Kök Nedeni" analizi.</li>
      </ul>

      <p><strong>ACKLOG DevOps Hub:</strong> Yazılım ekibiniz ACKLOG'un filtreleme gücünü sevecek. "Bugün en çok hangi hata alındı?" sorusuna Grafik-Dashboard yanıtı alın. Manuel debug süreçlerini ACKLOG ile otomatiğe bağlayın, yazılım kalitenizi artırın.</p>
    `
  },
  "saas-uygulama-guvenligi-ve-veri-denetimi-yollari": {
    title: "SaaS Uygulama Güvenliği ve Veri Denetimi Yolları",
    description: "Bulut uygulamalarındaki (Salesforce, Slack, Zoom) kullanıcı hareketlerini nasıl izlersiniz?",
    content: `
      <h2>Ofis Dışı Veri: SaaS Güvenlik Riskleri</h2>
      <p>Veriniz sadece sizin sunucunuzda değil, artık SaaS uygulamalarındadır. Bir çalışanın Slack üzerinden bir şifre paylaşması veya Dropbox'a müşteri listesi yüklemesi bir güvenlik ihlalidir.</p>
      
      <h3>Denetim Teknikleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>API Integration:</strong> SaaS uygulamalarının loglarını API ile SIEM'e aktarma.</li>
        <li><strong>SSO Logging:</strong> Uygulamalara girişte kullanılan şifrelerin login takibi.</li>
        <li><strong>CASB (Cloud Access Security Broker) kullanımı.</strong></li>
      </ul>

      <p><strong>ACKLOG Cloud Watcher:</strong> ACKLOG, popüler SaaS uygulamalarıyla haberleşerek buluttaki hareketleri de kurum içi loglarınızla birleştirir. "Bu kullanıcı önce veriyi indirdi sonra Slack'ten paylaştı!" senaryosunu yakalayın. Manuel kontroller yetmez, ACKLOG ile bulutta tam hakimiyet kurun.</p>
    `
  },
  "web-uygulama-duvari-waf-loglari-analiz-stratejisi": {
    title: "Web Uygulama Duvarı (WAF) Logları Analiz Stratejisi",
    description: "Web sitenizi zırhlayan WAF cihazlarından gelen 'Bloklama' loglarını anlamlandırma.",
    content: `
      <h2>Dış Kalkan: WAF Loglarını Okumak</h2>
      <p>WAF (Web Application Firewall), web sitenize gelen SQLi, XSS ve L7 saldırılarını durdurur. Ancak WAF'ın neyi, neden durdurduğunu takip etmezseniz, savunmanızı geliştiremezsiniz.</p>
      
      <h3>Analiz Edilecek Metrikler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Top Blocked Rules:</strong> En çok hangi saldırı tipiyle karşılaşıyorsunuz?</li>
        <li><strong>False Positives:</strong> Yanlışlıkla engellenen normal kullanıcılar var mı?</li>
        <li><strong>Attacker Geolocation:</strong> Saldırganlar hangi kıtadan saldırıyor?</li>
      </ul>

      <p><strong>ACKLOG Web Fortress:</strong> WAF loglarını ACKLOG ile görselleştirin. Bir saldırı dalgası başladığında ACKLOG sizi anında uyarsın ve "Sadece şu ülkeden gelen bu saldırı tipini blokla" gibi daha akıllı kararlar almanızı sağlasın. Manuel kontrol veri sızıntısını durdurmaz, ACKLOG durdurur.</p>
    `
  },
  "yazilim-guvenligi-test-araclari-ve-surecleri": {
    title: "Yazılım Güvenliği Test Araçları (SAST vs DAST) ve Süreçleri",
    description: "Kodunuzu dünyaya açmadan önce siber açıklardan nasıl arındırırsınız?",
    content: `
      <h2>Güvenli Yazılım: Test Metodolojileri</h2>
      <p>Yazılım güvenliği (AppSec), kod yazım aşamasında başlar. Hata çıktıktan sonra kapatmak, hata çıkmadan önce engellemekten 10 kat daha maliyetlidir.</p>
      
      <h3>Test Tipleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>SAST (Static Analysis):</strong> Kodun içine bakarak (yazarken) açık bulma.</li>
        <li><strong>DAST (Dynamic Analysis):</strong> Çalışan uygulamaya dışarıdan saldırarak açık bulma (Pentest gibi).</li>
        <li><strong>SCA:</strong> Kullanılan açık kaynak kütüphanelerdeki (Log4j vb.) açıkları bulma.</li>
      </ul>

      <p><strong>ACKLOG AppSec Integration:</strong> Bu testlerin sonuçlarını ACKLOG'a aktarın. Uygulamanızın "Zayıf noktalarını" her an görün ve müdahale edin. Manuel testleri ACKLOG ile sürekli hale getirin, her zaman güvenli kod yayınlayın.</p>
    `
  },
  "ci-cd-sureclerinde-guvenlik-devsecops-nedir": {
    title: "CI/CD Süreçlerinde Güvenlik (DevSecOps) Nedir ve Nasıl Uygulanır?",
    description: "Yazılım yayınlama hattına (Pipeline) güvenlik adımlarını nasıl entegre edersiniz?",
    content: `
      <h2>Hızlı ve Güvenli: DevSecOps Kültürü</h2>
      <p>DevSecOps, "Geliştirme, Operasyon ve Güvenlik" ekiplerinin ortak bir amaca (Hızlı ve güvenli yazılım) odaklanmasıdır. Eskiden güvenlik en sonda bir "Engel" gibiydi, şimdi ise kodun her satırında bir "Yardımcı" olarak yer alıyor.</p>
      
      <h3>Pipeline İçinde Güvenlik</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li>Kodu yazarkam (IDE) otomatik uyarılar.</li>
        <li>Commit/Push anında zafiyet taraması.</li>
        <li>Canlıya alınmadan önce otomatik sızma testi (DAST).</li>
        <li>Canlıdaki sistemin 7/24 log takibi (SIEM).</li>
      </ol>

      <p><strong>ACKLOG CI/CD Dash:</strong> DevSecOps sürecinin "Canlı İzleme (Monitoring)" bacağını ACKLOG ile kurun. Canlıya yeni bir sürüm çıktığında hata sayılarını veya siber hareketleri anlık izleyin. Manuel kontroller siber hıza yetişemez, ACKLOG ve DevSecOps ile hız kazanın.</p>
    `
  }
};
