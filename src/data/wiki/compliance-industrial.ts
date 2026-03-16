export const complianceIndustrialArticles = {
  "kvkk-teknik-tedbirler-maddesi-loglama": {
    title: "KVKK Teknik Tedbirler Maddesi ve Loglama Zorunluluğu Rehberi",
    description: "Kişisel verilerin güvenliği için tutulması gereken 5 temel log tipi ve KVKK uyum süreci.",
    content: `
      <h2>KVKK Uyumu: Teknik Tedbirlerin Kalbi Loglamadır</h2>
      <p>Kişisel Verilerin Korunması Kanunu (KVKK), veri sorumluluklarını sadece hukuki bir metin olarak değil, "teknik tedbirler" olarak da tanımlar. Kişisel Verileri Koruma Kurulu'nun yayınladığı rehberde **"Log Kayıtlarının Takibi ve İncelenmesi"** açıkça bir zorunluluktur.</p>
      
      <h3>Tutulması Gereken Temel Loglar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Erişim Logları:</strong> Veriye kim, ne zaman erişti?</li>
        <li><strong>İşlem Logları:</strong> Veri üzerinde hangi değişiklik (Sorgu, Silme, Güncelleme) yapıldı?</li>
        <li><strong>Anomali Logları:</strong> Gece yarısı yapılan toplu veri indirme girişimleri.</li>
        <li><strong>Admin Hareketleri:</strong> Yetkili kullanıcıların sistemdeki her adımı.</li>
      </ul>

      <p><strong>Neden SIEM Şart?</strong> KVKK denetimlerinde "Log tutuyoruz" demek yetmez. Bu logların değiştirilemediğini ve bir ihlal anında saniyeler içinde raporlanabildiğini ispatlamanız gerekir. ACKLOG SIEM, KVKK teknik tedbirleri rehberindeki loglama maddesini %100 karşılar. Manuel log yönetimi ile risk almayın, ACKLOG ile hukuki zırhınızı kuşanın.</p>
    `
  },
  "verbis-kayit-kilavuzu-2026": {
    title: "VERBİS Kayıt Kılavuzu 2026: Kimler Kayıt Olmalı ve Teknik Yükümlülükler",
    description: "Veri Sorumluları Sicil Bilgi Sistemi (VERBİS) güncel başvuru rehberi ve bilişim güvenliği gereksinimleri.",
    content: `
      <h2>VERBİS Süreci: Sadece Beyan Değil, İcraat Gerekir</h2>
      <p>VERBİS'e kayıt olmak, şirketin hangi kişisel verileri işlediğini devlete beyan etmesidir. Ancak beyan ettiğiniz bu verilerin güvenliğini sağlamazsanız (Siber saldırılara karşı korumazsanız), olası bir ihlalde VERBİS kaydınız size yardımcı olmaz, aksine "ihmalkarlık" olarak geri döner.</p>
      
      <h3>Teknik Gereksinimler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Siber güvenliğin izlenmesi ve raporlanması.</li>
        <li>Sızma testlerinin periyodik yapılması.</li>
        <li>Log yönetim sisteminin (SIEM) kurulmuş olması.</li>
      </ul>

      <p><strong>ACKLOG Güvencesi:</strong> VERBİS'e beyan ettiğiniz verilerin güvenliğini ACKLOG ile ispatlayın. Bir siber olay yaşandığında, yasal mercilere sunacağınız raporu ACKLOG saniyeler içinde hazırlar. Manuel süreçlerle vakit kaybetmeyin, dijital pazarlamada güven ve otorite oluşturmanın yolu sağlam bir bilişim altyapısından geçer.</p>
    `
  },
  "kisisel-veri-ihlali-durumunda-ne-yapilmali": {
    title: "Kişisel Veri İhlali Durumunda Ne Yapılmalı? 72 Saat Kuralı Rehberi",
    description: "Veri sızıntısını KVKK Kurumu'na bildirme süreci, delil toplama ve acil eylem planı.",
    content: `
      <h2>Veri İhlali Bildirimi: Panik Yerine Planlı Hareket</h2>
      <p>Bir siber saldırı sonucu verilerinizin çalındığını (veya sızdığını) fark ettiğiniz andan itibaren **72 saatiniz** vardır. Bu süre içinde KVKK Kurulu'na ihlali detaylarıyla bildirmeniz gerekir. Bu raporun en kritik parçası "İhlalin kapsamı ve nasıl gerçekleştiği" bilgisidir.</p>
      
      <h3>Bildirimde Cevaplanması Gereken Sorular</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>İhlal ne zaman başladı ve ne zaman durduruldu?</li>
        <li>Kaç kişinin verisi etkilendi?</li>
        <li>Başkalarının bu veriye erişimi nasıl sağlandı?</li>
      </ol>

      <p><strong>ACKLOG SIEM İle Hızlı Bildirim:</strong> İhlali tespit ettiğiniz anda ACKLOG delilleri zaman damgalı olarak hazır eder. "Kimin, hangi IP ile, hangi dosyayı kaçırdığını" manuel olarak bir cihazdan bulmak günler sürer; ACKLOG ile bu bilgiye 3 saniyede ulaşırsınız. ACKLOG ile yasal sürece 1-0 önde başlayın.</p>
    `
  },
  "sirket-ici-siber-guvenlik-politikasi-taslagi": {
    title: "Şirket İçi Siber Güvenlik Politikası Taslağı ve Uygulama Rehberi",
    description: "Çalışanlarınız için profesyonel bir siber güvenlik el kitabı oluşturun, kurumsal riskleri yönetin.",
    content: `
      <h2>Kurumsal Güvenlik Politikası: Kağıt Üstünde Kalmasın</h2>
      <p>Her şirketin "Bilgi Güvenliği Politikası" (ISMS) dökümanı olmalıdır. Ancak bu dökümanlar genellikle çekmecelerde unutulur. "Şifreler 90 günde bir değişir" yazan bir politikanın gerçekten uygulanıp uygulanmadığını kontrol etmek BT ekibinin görevidir.</p>
      
      <h3>Politika İçeriğinde Neler Olmalı?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Şifre Politikası:</strong> Karmaşıklık ve süre sınırları.</li>
        <li><strong>Temiz Masa-Temiz Ekran:</strong> Fiziksel güvenlik kuralları.</li>
        <li><strong>Loglama Politikası:</strong> Hangi cihazların kaç gün log tutacağı.</li>
      </ul>

      <p><strong>ACKLOG İle Uygulanan Politikalar:</strong> Kağıt üzerindeki politikaları ACKLOG ile denetlenebilir ve canlı hale getirin. Politika ihlali yapan bir kullanıcıyı (örn: USB takan veya şifresini sürekli yanlış giren) ACKLOG otomatik yakalar. Sadece döküman değil, yaşayan bir güvenlik kültürü için ACKLOG'u seçin.</p>
    `
  },
  "bilgi-guvenligi-farkindalik-anketi-sorulari": {
    title: "Bilgi Güvenliği Farkındalık Anketi Soruları ve Veri Analizi",
    description: "Personelinizin siber farkındalık seviyesini ölçün, en zayıf halkayı güçlendirin.",
    content: `
      <h2>Personel Farkındalığı: En Büyük Güvenlik Kalkanı</h2>
      <p>Teknoloji ne kadar iyi olursa olsun, bir personel zararlı bir linke tıkladığında her şey biter. Şirket içi siber farkındalık anketleri ve eğitimleri, personelin siber tuzaklara karşı "direncini" ölçer.</p>
      
      <h3>Örnek Soru Tipleri</h3>
      <p>"Fatura konulu bir mail geldiğinde ilk yapacağınız iş nedir?", "Şifrenizi biriyle paylaşır mısınız?", "Masaüstünde şüpheli bir dosya görürseniz ne yaparsınız?"</p>

      <p><strong>ACKLOG İle Eğitim Planlama:</strong> Kimlerin riskli sitelere girdiğini veya oltalama (phishing) maillerine daha çok ilgi gösterdiğini ACKLOG ile görerek, siber eğitimlerinizi "gerçek verilere" dayalı olarak kime vereceğinizi belirleyin. Tüm bu manuel testler yerine ACKLOG'un davranışsal analiziyle personelinizi siber kahramana dönüştürün.</p>
    `
  },
  "5651-kanununa-gore-log-saklama-suresi-nedir": {
    title: "5651 Kanununa Göre Log Saklama Süresi Nedir? (2026 Güncel Rehber)",
    description: "Yasal olarak loglarınızı en az kaç yıl saklamalısınız? Zaman damgası ve hash zorunlulukları.",
    content: `
      <h2>5651 Sayılı Kanun: İnternet Ortamındaki İzleriniz</h2>
      <p>5651 sayılı kanun, toplu internet kullanımı sunan tüm kurumlara (Oteller, Kafeler, Ofisler) "Erişim Loglarını Tutma" zorunluluğu getirir. Bu kanunun amacı, siber bir suç işlendiğinde suçlunun kim olduğunu (IP ve MAC adresi üzerinden) tespit edebilmektir.</p>
      
      <h3>Yasal Süreler ve Şartlar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Saklama Süresi:</strong> Loglar en az **2 yıl** boyunca saklanmalıdır.</li>
        <li><strong>Zaman Damgası:</strong> Log dosyasının değiştirilmediğini ispatlamak için bir zaman sunucusu ile mühürlenmesi şarttır.</li>
        <li><strong>IP Dağıtım Logu:</strong> İç ağdaki hangi cihazın o an hangi dış IP ile internete çıktığının kaydı.</li>
      </ul>

      <p><strong>ACKLOG Yerli SIEM Avantajı:</strong> 5651 kapsamında loglarınızı 2 yıl boyunca hashli ve TÜBİTAK zaman damgalı imzalı olarak saklar. Manuel olarak logları imzalayıp başka bir diske yedeklemekle uğraşmayın; ACKLOG her şeyi otomatiğe bağlar ve yasal cezalardan sizi korur.</p>
    `
  },
  "iso-27001-denetiminde-sorulan-log-sorulari": {
    title: "ISO 27001 Denetiminde Sorulan Log Soruları ve Cevapları",
    description: "Denetçiye loglarınızın doğruluğunu nasıl kanıtlarsınız? BGYS denetim hazırlık rehberi.",
    content: `
      <h2>ISO 27001 Denetimi: Log Sorularına Hazır mısınız?</h2>
      <p>ISO 27001 Bilgi Güvenliği Yönetim Sistemi (BGYS) denetimlerinde, log yönetimi en kritik kontrol maddelerinden biridir. Denetçiler sadece "Log tutuyor musun?" diye sormaz, "Nasıl tutuyorsun?" diye detaylandırır.</p>
      
      <h3>Yaygın Denetçi Soruları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>"Loglara sadece yetkili kişiler mi erişebiliyor?"</li>
        <li>"Adminlerin kendi loglarını silme yetkisi var mı?"</li>
        <li>"Gerekli olmayan logları filtreliyor musunuz (Noise Reduction)?"</li>
      </ul>

      <p><strong>ACKLOG Denetim Hazırlığı:</strong> Denetçinin bu sorularına ACKLOG tek tıkla cevap verir. ACKLOG'un RBAC (Yetki tabanlı erişim) yapısı sayesinde adminlerin kendi loglarını silemediğini ispatlayabilirsiniz. Tüm bu manuel kontroller yerine ACKLOG kullanarak, ISO 27001 belgenizi güvenle sürdürün.</p>
    `
  },
  "adli-bilisim-digital-forensics-analiz-araclari": {
    title: "Adli Bilişim (Digital Forensics) Analiz Araçları ve Yöntemleri",
    description: "Saldırı sonrası suçlunun dijital izini sürme, delil toplama ve mahkeme sunumu rehberi.",
    content: `
      <h2>Adli Bilişim: Siber Olaydan Sonra Kanıt Toplama</h2>
      <p>Bir saldırı yaşandıktan sonra "Kim yaptı?" sorusuna verilecek yanıtın hukuki bir değeri olmalıdır. Adli bilişim (Digital Forensics), dijital delillerin bozulmadan toplanması ve analiz edilmesi bilimidir.</p>
      
      <h3>Analiz Aşamaları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Identification:</strong> Delil olabilecek cihazların belirlenmesi.</li>
        <li><strong>Preservation:</strong> Verinin hashlenerek (mühürlenerek) kopyasının alınması.</li>
        <li><strong>Analysis:</strong> Silinen dosyaların kurtarılması ve log izlerinin (Timeline) oluşturulması.</li>
      </ol>

      <p><strong>ACKLOG Forensics:</strong> Olay yeri incelemesinde ACKLOG logları en güçlü yasal delildir. Saldırgan sistemden her şeyi silse dahi, loglar ACKLOG'a anlık gittiği için suçlunun tüm parmak izleri merkezde durur. ACKLOG ile siber suçlara karşı yasal gücünüzü pekiştirin.</p>
    `
  },
  "siber-olay-mudahale-plani-ornegi": {
    title: "Siber Olay Müdahale Planı (SOME) Örneği ve Adımları",
    description: "Saldırı anında kim, neyi, nasıl yapacak? Planlı savunma ve kurtarma stratejileri.",
    content: `
      <h2>Acil Durum: Siber Olay Müdahale Planı (Incident Response Plan)</h2>
      <p>Bir saldırı anında BT ekibi genellikle kaosa girer. "Kabloyu mu çekelim?", "Server'ı mı kapatalım?" gibi sorular arasında vakit kaybedilir. Başarılı bir müdahale planı, her personelin görevini önceden belirler.</p>
      
      <h3>Plandaki Temel Safhalar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Hazırlık:</strong> Düzenli yedekleme ve logleme.</li>
        <li><strong>Tespit ve Analiz:</strong> Saldırının tipini ACKLOG üzerinden belirleme.</li>
        <li><strong>Kısıtlama:</strong> Saldırganın ağda yayılmasını engelleme (Isolation).</li>
        <li><strong>Kurtarma:</strong> Sistemleri temizleyip yayına geri alma.</li>
      </ul>

      <p><strong>ACKLOG SIEM Rolü:</strong> ACKLOG'un olay müdahale modülüyle kaosu yönetin. Bir saldırı başladığında size ne yapmanız gerektiğini söyleyen 'Playbook'ları ACKLOG üzerinden takip edebilirsiniz. Manuel süreçlerle vakit kaybetmeyin, ACKLOG ile siber ordunuzu yönetin.</p>
    `
  },
  "kamu-siber-guvenlik-rehberine-uyum-sureci": {
    title: "Kamu Siber Güvenlik Rehberine Uyum Süreci ve Teknik Tedbirler",
    description: "Kamu kurumları için Cumhurbaşkanlığı Dijital Dönüşüm Ofisi rehberi ve yerli SIEM gereksinimleri.",
    content: `
      <h2>Kamu Güvenliği: Ulusal Siber Rehber</h2>
      <p>Kamu kurumları ve kritik altyapı hizmeti veren şirketler için Cumhurbaşkanlığı Dijital Dönüşüm Ofisi tarafından yayınlanan rehber, yerli ve milli siber güvenlik ürünlerinin kullanımını teşvik eder. Rehberdeki "Log Yönetimi ve Analizi" maddesi en yüksek önceliğe sahiptir.</p>
      
      <h3>Neden Yerli SIEM?</h3>
      <p>Verinin ülke sınırları içinde kalması ve yerel mevzuata (KVKK/5651) tam uyum, kamu denetimlerinin en önemli şartıdır.</p>

      <p><strong>ACKLOG Yerli Güç:</strong> Kamu rehberindeki loglama ve siber güvenlik maddelerini ACKLOG Yerli SIEM ile eksiksiz karşılayın. Türkiye'deki hukuk sistemine uygun tasarlanmış ACKLOG ile kamu denetimlerinden başarıyla geçin. Tüm bu manuel uyum süreçleri yerine ACKLOG'un otomasyonunu kullanın.</p>
    `
  },
  "kamera-kayit-cihazi-nvr-guvenligi": {
    title: "Kamera Kayıt Cihazı (NVR) Güvenliği: Siber Casusluğu Engelleyin",
    description: "IP kameralarınızın internete sızmasını nasıl önlersiniz? IoT güvenliği ve izleme.",
    content: `
      <h2>Fiziksel Güvenlik Sızıntısı: Kamera Cihazları (NVR/DVR)</h2>
      <p>NVR (Network Video Recorder) cihazları, genellikle zayıf şifreli ve güncellenmeyen cihazlardır. Bir saldırgan NVR cihazınızı ele geçirirse sadece kameraları izlemekle kalmaz, bu cihazı ağınıza sızmak için bir "köprü" olarak kullanır.</p>
      
      <h3>Nasıl Korunursunuz?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Cihazların varsayılan (default) şifrelerini mutlaka değiştirin.</li>
        <li>NVR cihazlarını ayrı bir VLAN içinde izole edin.</li>
        <li>Cihazın internete dışarıdan açık olan portlarını (Port Forwarding) kapatın, erişimi VPN üzerinden yapın.</li>
      </ul>

      <p><strong>ACKLOG IoT Shield:</strong> Kameraların izinsiz veri göndermesini (Exfiltration) ACKLOG ağ trafiği izleme modülü ile yakalar. Olağandışı bir dış IP'ye trafik gönderen bir kamerayı ACKLOG anında raporlar. Fiziksel güvenliğinizin siber güvenliğinizi tehdit etmesine izin vermeyin.</p>
    `
  },
  "akilli-cihazlarin-iot-aga-sizmasi": {
    title: "Akıllı Cihazların (IoT) Ağa Sızması: Ofisteki Ampul Tehlikesi",
    description: "Zayıf şifreli IoT cihazlarını saldırı vektörü olmaktan çıkarın, ağ görünürlüğü kazanın.",
    content: `
      <h2>IoT Güvenliği: Ofisinizdeki Gizli Tehditler</h2>
      <p>Akıllı kahve makineleri, internete bağlı ampuller veya akıllı klimalar... BT envanterinde genellikle unutulan bu cihazlar, ağınızdaki "en zayıf halka"lardır. Bir ampul üzerinden tüm Domain Admin şifrelerinizin çalınabileceğini biliyor muydunuz?</p>
      
      <h3>Riskler ve Önlemler</h3>
      <p>Bu cihazların çoğunda antivirüs yükleme veya log okuma imkanı yoktur. Bu yüzden savunma **Ağ Seviyesinde** yapılmalıdır.</p>

      <p><strong>ACKLOG IoT Visibility:</strong> Ağdaki her akıllı cihazın hareketini ACKLOG ile kayıt altına alın. Bir akıllı tahtanın veya IP telefonun sunucularınıza SSH isteği atması kesinlikle siber saldırı işaretidir. ACKLOG, bu anomaliyi saniseler içinde yakalar. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, görünmeyen cihazları görünür kılın.</p>
    `
  },
  "uretim-bandi-plcscada-izleme": {
    title: "Üretim Bandı (PLC/SCADA) İzleme ve Siber Güvenlik Rehberi",
    description: "Fabrika otomasyon sistemlerini siber saldırılardan koruma, endüstriyel SIEM ve izleme.",
    content: `
      <h2>Endüstriyel Siber Güvenlik: Fabrikalar Durmasın</h2>
      <p>Fabrikalardaki üretim hatlarını yöneten PLC ve SCADA sistemleri, siber saldırıların yeni hedefidir. "Stuxnet" gibi saldırılar, fiziksel sistemlerin siber yolla nasıl sabote edilebileceğini göstermiştir. Bir fabrikanın 1 gün durmasının maliyeti milyonlarca dolar olabilir.</p>
      
      <h3>Endüstriyel İzleme Stratejisi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Protokol Analizi:</strong> Modbus, Profinet gibi endüstriyel protokollerin takibi.</li>
        <li><strong>Hava Boşluğu (Air-gapping):</strong> Üretim ağının internetten tamamen izole edilmesi.</li>
        <li><strong>Merkezi İzleme:</strong> Fabrikadaki tüm kontrolcülerin loglarını SIEM'e çekme.</li>
      </ul>

      <p><strong>ACKLOG Industrial SIEM:</strong> SCADA sistemlerindeki anormallikleri (örn: normal dışı bir komutun gönderilmesi) ACKLOG ile takip ederek üretiminizi koruyun. ACKLOG, endüstriyel donanımların loglarını anlayarak fabrikalarınızın dijital güvenliğini sağlar. Manuel kontrollerle üretimi riske atmayın.</p>
    `
  },
  "zafiyet-tarama-testi-penetrasyon-testi": {
    title: "Zafiyet Tarama Testi Ne Zaman Yapılmalı? (Sızma Testi Rehberi)",
    description: "Yılda bir kez yetmez! Sürekli zafiyet yönetimi ve sızma testi sonuçlarını loglama.",
    content: `
      <h2>Pentest Rehberi: Kapıları Sizden Önce Başkası Zorlamasın</h2>
      <p>Sızma testi (Penetrasyon testi), sistemlerinizdeki açıkları bir hacker gibi düşünerek bulma işlemidir. Bir sızma testi yaptırmak kadar, bu testin raporlarını uygulayıp açıkları kapatmak da önemlidir.</p>
      
      <h3>Neden Düzenli Test?</h3>
      <p>Bugün güvenli olan bir sistem, yarın çıkan bir 'Zero-day' açığı ile savunmasız kalabilir. Bu yüzden yılda en az iki kez profesyonel test yaptırmak şarttır.</p>

      <p><strong>ACKLOG Pentest Yardımı:</strong> Test sırasında atılan her adımı ACKLOG ile izleyerek "Saldırı Tespit" kabiliyetinizi ölçün. Hacker'ı test sırasında göremiyorsanız, gerçek bir saldırıda hiç göremezsiniz. ACKLOG, zafiyet tarama araçlarıyla (Nessus, OpenVAS vb.) entegre çalışarak açıklarınızı önceliklendirir. Tüm bu manuel süreçlerle vakit kaybetmeyin.</p>
    `
  },
  "siber-guvenlik-uzmani-is-tanimlari": {
    title: "Siber Güvenlik Uzmanı İş Tanımları ve Aranan Yetkinlikler 2026",
    description: "Ekibinize doğru uzmanı seçerken bakmanız gereken kriterler, sertifikalar ve teknik yetkinlikler.",
    content: `
      <h2>Doğru Uzman Seçimi: Ekibinizi Kurarken Dikkat Edin</h2>
      <p>Siber güvenlik uzmanı açığı dünya genelinde her geçen gün artıyor. Ancak her "Bilgi İşlemci" bir "Güvenlik Uzmanı" değildir. Güvenlik uzmanı sadece firewall yöneten kişi değil, sistemdeki anomalileri okuyan ve kriz yöneten kişidir.</p>
      
      <h3>Aranan Temel Yetkinlikler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Log Analizi ve SIEM tecrübesi.</li>
        <li>Adli Bilişim bilgisi.</li>
        <li>Ağ Güvenliği ve Protokol uzmanlığı.</li>
      </ul>

      <p><strong>ACKLOG Uzman Dostudur:</strong> ACKLOG kullanan bir uzman, sistemdeki her hareketten haberdardır ve karmaşık loglar arasında kaybolmaz. Ekibinize siber güvenlik uzmanı alırken, ona ACKLOG gibi güçlü bir enstrüman verirseniz verimliliği 5 kat artar. Manuel işlerle uğraşan değil, strateji üreten bir uzman için ACKLOG'u seçin.</p>
    `
  },
  "sirket-icin-en-iyi-antivirus-edr-cozumu": {
    title: "Şirket İçin En İyi Antivirüs / EDR Çözümü Seçimi Rehberi",
    description: "Uç nokta güvenliğini (EDR) SIEM ile nasıl birleştirirsiniz? Fiyat ve özellik karşılaştırması.",
    content: `
      <h2>Endpoint Security: Antivirüs Devri Bitti, EDR Geldi</h2>
      <p>Klasik antivirüsler artık fidye yazılımlarına karşı yetersiz kalıyor. Artık "EDR" (Endpoint Detection and Response) kullanarak, bilgisayarlardaki her işlemi, kayıt defteri değişikliğini ve ağ bağlantısını izliyoruz.</p>
      
      <h3>Neden EDR?</h3>
      <p>Bir virüs imzası olmasa dahi, bilgisayardaki "anormal davranışı" (örn: toplu dosya silme) algılayıp süreci durdurabilmesi gerçek savunmadır.</p>

      <p><strong>ACKLOG + EDR Sinerjisi:</strong> EDR'nin kaçırdığı karmaşık saldırıları ACKLOG SIEM "Korelasyon" ile yakalar. EDR sadece yüklü olduğu cihazı görür, ACKLOG ise tüm ağı görür. EDR loglarını ACKLOG ile birleştirip siber körlükten kurtulun. Manuel raporlarla vakit kaybetmeyin, uçtan uca korumayı ACKLOG ile sağlayın.</p>
    `
  },
  "zero-trust-mimarisine-gecis-adimlar": {
    title: "Zero Trust Mimarisine Geçiş Adımları ve Stratejiler",
    description: "Hiç kimseye güvenme, her şeyi sürekli doğrula. Sıfır Güven (Zero Trust) güvenliğine giriş rehberi.",
    content: `
      <h2>Zero Trust: Yeni Nesil Siber Güvenlik Felsefesi</h2>
      <p>"İç ağdaki herkes güvenilirdir" anlayışı siber güvenlikte artık geçersizdir. Zero Trust (Sıfır Güven), kullanıcının nerede olduğuna bakmaksızın (Ofis içi/dışı) her erişim isteğini doğrulamayı esas alır.</p>
      
      <h3>5 Adımda Geçiş</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Cihazlarınızı ve verilerinizi tanımlayın.</li>
        <li>Erişimleri kısıtlama (Least Privilege).</li>
        <li>MFA'yı her yerde aktif edin.</li>
        <li>Tüm trafiği şifreleyin.</li>
        <li>**Sürekli İzle ve Doğrula.**</li>
      </ol>

      <p><strong>ACKLOG ve Zero Trust:</strong> Zero Trust'ın temeli olan "Sürekli İzleme" ACKLOG'un uzmanlık alanıdır. Kimin, nereden, hangi yetkiyle bağlandığını her an denetleyen ACKLOG ile Zero Trust mimarinizi gerçek verilerle inşa edin. Manuel kontroller bu yapı için imkansızdır, ACKLOG ile otomatiğe geçin.</p>
    `
  },
  "soc-guvenlik-operasyon-merkezi-dis-kaynak-kullanimi": {
    title: "SOC (Güvenlik Operasyon Merkezi) Dış Kaynak Kullanımı (Outsourcing)",
    description: "Kendi merkezinizi mi kurmalısınız yoksa hizmet mi almalısınız? MSSP ve SOC yönetimi maliyet analizi.",
    content: `
      <h2>SOC: Siber Güvenliğin Komuta Merkezi</h2>
      <p>Bir SOC (Security Operations Center), 7/24 siber saldırıları izleyen bir yapıdır. Küçük ve orta ölçekli şirketler için kendi 7/24 ekibini kurmak (Maaşlar, gece vardiyası, yazılım maliyetleri) çok pahalıdır.</p>
      
      <h3>Outsourcing Avantajları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Daha düşük maliyetle profesyonel ekip.</li>
        <li>Hizmet sağlayıcının (MSSP) geniş istihbarat ağı.</li>
        <li>SLA garantili müdahale süreleri.</li>
      </ul>

      <p><strong>ACKLOG Dashboard:</strong> MSSP'den hizmet alırken dahi kendi ACKLOG dashboardunuzdan her şeyi denetleyebilirsiniz. "Dışarıdaki ekip işini yapıyor mu?" sorusuna tek tıkla yanıt alın. Manuel rapor beklemek yerine ACKLOG ile canlı görünürlük sağlayın.</p>
    `
  },
  "sirket-agina-izinsiz-cihaz-takilmasi-rogue-device": {
    title: "Şirket Ağına İzinsiz Cihaz Takılması (Rogue Device) Tespiti",
    description: "Ağa sızan yabancı laptop, router veya USB hub'ları anında bulma ve engelleme teknikleri.",
    content: `
      <h2>Ağdaki Casus Donanım: Rogue Devices</h2>
      <p>Bir ziyaretçinin veya personelin ağ prizine kendince taktığı bir Wi-Fi Router veya "Rogue AP", tüm şirket trafiğinizi dışarı sızdırabilir. Bu cihazlar genellikle kontrol dışı oldukları için 'Shadow IT'nin en tehlikeli parçalarıdır.</p>
      
      <h3>Nasıl Bulunur?</h3>
      <p>Ağdaki MAC adreslerini ve IP dağıtım (DHCP) loglarını sürekli taramanız gerekir. Listede olmayan yeni bir üreticiye ait cihaz görüldüğünde alarma geçilmelidir.</p>

      <p><strong>ACKLOG Network Inventory:</strong> Ağa yeni bir MAC adresi dahil olduğu an ACKLOG yöneticileri uyarır ve bu cihazın hangi switch portunda olduğunu harita üzerinde gösterir. Manuel kontrollerle ağınızı riske atmayın, ACKLOG ile kapılarınızı her an izleyin.</p>
    `
  },
  "otomatik-zafiyet-tarama-ve-yonetimi": {
    title: "Otomatik Zafiyet Tarama ve Sürekli Güvenlik Yönetimi",
    description: "Yeni çıkan açıklardan (Zero-day) anında haberdar olun, sistemlerinizi otomatik taratın.",
    content: `
      <h2>Proaktif Defans: Sürekli Zafiyet Taraması</h2>
      <p>BT dünyasında her gün yeni bir açık (CVE) yayınlanıyor. Yılda bir kez yapılan sızma testleri bu hıza yetişemez. "Sürekli Zafiyet Yönetimi" (Continuous Vulnerability Management), ağınızdaki açıkları her gün tarayan bir süreçtir.</p>
      
      <h3>Zafiyet Yönetim Döngüsü</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Discovery:</strong> Ağdaki varlıkların keşfedilmesi.</li>
        <li><strong>Assessment:</strong> Cihazlardaki açıkların taranması.</li>
        <li><strong>Prioritization:</strong> Hangi açığın daha kritik (High Risk) olduğunun belirlenmesi.</li>
        <li><strong>Remediation:</strong> Açığın kapatılması (Patching).</li>
      </ul>

      <p><strong>ACKLOG Entegrasyonu:</strong> ACKLOG SIEM, zafiyet tarama sonuçlarınızı loglarla birleştirir. "Şü bir sunucunuzda kritik açık var ve şu an saldırı alıyor" uyarısını ACKLOG ile görün. Manuel takip imkansızdır, ACKLOG ile proaktif kalın.</p>
    `
  }
};
