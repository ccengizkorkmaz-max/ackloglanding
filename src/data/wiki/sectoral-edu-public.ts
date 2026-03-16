export const sectoralEduPublicArticles = {
  "universite-yerleske-agi-guvenligi-ve-loglama": {
    title: "Üniversite Yerleşke Ağı (Campus Network) Güvenliği ve Loglama Stratejisi",
    description: "Binlerce öğrenci ve akademisyenin bulunduğu karmaşık üniversite ağlarında siber güvenlik ve yasal log yönetimi.",
    content: `
      <h2>Kampüs Güvenliği: Dev Ağların Yönetimi</h2>
      <p>Üniversite ağları, hem akademik özgürlüğü desteklemeli hem de binlerce kullanıcıdan gelebilecek siber tehditleri (zararlı içerik, telif hakları ihlalleri, siber saldırılar) dizginlemelidir. Bir yerleşke ağı, doğası gereği en zor yönetilen ağ tiplerinden biridir.</p>
      
      <h3>Yerleşke Ağında Loglama Zorlukları</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Kullanıcı Sayısı:</strong> On binlerce cihazın aynı anda bağlı olması devasa bir log hacmi yaratır.</li>
        <li><strong>Kendi Cihazını Getir (BYOD):</strong> Öğrencilerin şahsi laptop ve telefonlarındaki virüslerin ağa yayılması.</li>
        <li><strong>Yasal Sorumluluk:</strong> 5651 sayılı kanun gereği, her bir öğrencinin internet aktivitesinin IP ve zaman damgasıyla eşleştirilmesi zorunluluğu.</li>
      </ul>

      <h3>Teknik Gereksinimler</h3>
      <p>Üniversiteler, güvenlik loglarını merkezi bir SIEM sisteminde (ACKLOG) toplayarak 'Netflow' ve 'User Identity' verilerini birleştirmelidir. Bu, bir siber suç işlendiğinde "Bu IP'yi o saatte hangi öğrenci kullandı?" sorusuna 3 saniyede cevap verebilmeyi sağlar.</p>

      <div class="bg-blue-500/10 p-6 rounded-xl my-8 border border-blue-500/20">
        <h4 class="text-blue-400 font-bold mb-2">ACKLOG Edu-Core Çözümü:</h4>
        <p>ACKLOG, üniversitelerin devasa log yükünü performans kaybı olmadan işleyebilen nadir yerli çözümlerden biridir. Radius ve Active Directory entegrasyonu ile öğrenci kimliklerini IP kayıtlarıyla milisaniye bazında eşleştirir. Manuel log eşleştirme çilesine son verin, ACKLOG ile kampüsünüzü siber kale haline getirin.</p>
      </div>

      <h3>Sıkça Sorulan Sorular (FAQ)</h3>
      <div class="space-y-4">
        <details class="group border-b border-white/10 pb-4">
          <summary class="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-blue-400">
            Üniversiteler logları ne kadar süre saklamalı?
            <span class="text-xl">+</span>
          </summary>
          <div class="mt-4 text-gray-400">5651 sayılı kanun gereği tüm trafik logları en az 2 yıl boyunca, zaman damgalı ve mühürlü olarak saklanmalıdır. KVKK gereğince personel verileri için bu süre değişiklik gösterebilir.</div>
        </details>
        <details class="group border-b border-white/10 pb-4">
          <summary class="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-blue-400">
            Wi-Fi loglama için ek bir donanım gerekir mi?
            <span class="text-xl">+</span>
          </summary>
          <div class="mt-4 text-gray-400">Genellikle hayır. ACKLOG, mevcut Wi-Fi denetleyicileriniz (Controller) veya Firewall cihazlarınızdan Syslog üzerinden veriyi alarak işler.</div>
        </details>
      </div>
    `
  },
  "5651-kanunu-okullarda-internet-loglama-rehberi": {
    title: "5651 Sayılı Kanun: Okullarda İnternet Loglama ve Güvenlik Rehberi",
    description: "K12 okulları ve kolejler için yasal internet loglama ve içerik filtreleme zorunlulukları.",
    content: `
      <h2>Okul Güvenliği: 5651 Sayılı Kanuna Tam Uyum</h2>
      <p>Türkiye'deki tüm eğitim kurumları, öğrencilerine sundukları internet hizmetini 5651 sayılı kanun çerçevesinde kayıt altına almakla yükümlüdür. Bu sadece teknik bir iş değil, okul yönetiminin siber suçlara karşı yasal kalkanıdır.</p>
      
      <h3>Yasal Zorunluluklar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Zaman Damgası:</strong> Logların değiştirilmediğini ispatlayan TÜBİTAK onaylı mühür.</li>
        <li><strong>Erişim Kaydı:</strong> IP adresi, MAC adresi ve Port bilgilerinin eksiksiz tutulması.</li>
        <li><strong>İçerik Filtreleme:</strong> Öğrencilerin zararlı (kumar, müstehcenlik, şiddet) sitelere erişiminin engellenmesi ve bu engellemelerin loglanması.</li>
      </ul>

      <p><strong>ACKLOG School Guard:</strong> Okulunuzdaki internet trafiğini ACKLOG ile yasal güvence altına alın. Otomatik zaman damgası özelliğiyle sizi her türlü denetimden alnınızın akıyla çıkarır. Manuel log tutmak yasal risk taşır, ACKLOG ile huzurlu bir eğitim ortamı kurun.</p>
    `
  },
  "uzaktan-egitim-platformlari-lms-siber-isletim-guvenligi": {
    title: "Uzaktan Eğitim Platformları (LMS) Siber Güvenliği ve Erişim Denetimi",
    description: "E-öğrenme (Moodle, Canvas vb.) sistemlerine yönelik siber saldırıları engelleme ve log analizi.",
    content: `
      <h2>Dijital Sınıf: LMS Sistemlerini Siber Saldırılardan Koruyun</h2>
      <p>Uzaktan eğitim platformları (LMS), binlerce öğrencinin kişisel verisini ve sınav sorularını barındırır. Bu sistemlerin hacklenmesi, hem veri sızıntısı hem de akademik itibar kaybı demektir.</p>
      
      <h3>İzleme Kritik Noktaları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Login Anomalileri:</strong> Tek bir öğrenci hesabının 10 farklı şehirden aynı anda giriş yapması (Login sharing).</li>
        <li><strong>Soru Sızıntısı:</strong> Sınav veritabanına mesai dışı erişim denemeleri.</li>
        <li><strong>DDoS Koruması:</strong> Sınav anında sistemi kilitlemeye yönelik bot saldırılarının log analizi.</li>
      </ul>

      <p><strong>ACKLOG App-Shield:</strong> LMS yazılımlarınızın (PHP, .NET, Java tabanlı) ürettiği her bir logu ACKLOG ile analiz edin. "Sınav sorularına yetkisiz erişim" uyarısını anında alın. ACKLOG ile eğitim materyallerinizi dijital zırhla koruyun.</p>
    `
  },
  "akademik-verilerin-korunması-ve-dosya-loglama": {
    title: "Akademik Verilerin Korunması: Araştırma Projeleri ve Dosya Loglama",
    description: "Üniversitelerdeki stratejik araştırma projeleri ve patent dosyalarının sızdırılmasını engelleme.",
    content: `
      <h2>Bilginin Korunması: Akademik Hırsızlığa Karşı Siber Defans</h2>
      <p>Üniversitelerin en değerli varlığı, yıllarca süren araştırmalardır. Bu verilerin bir rakip kurum veya devlet tarafından siber casuslukla çalınması, ulusal bir kayıptır.</p>
      
      <h3>Dosya Takip Stratejisi (FIM)</h3>
      <p>Kritik proje klasörlerinde 'File Integrity Monitoring' (FIM) uygulanmalıdır. "Bu proje dökümanını kim kopyaladı?" sorusu cevapsız kalmamalıdır.</p>

      <p><strong>ACKLOG Project Watch:</strong> Laboratuvar ve fakülte bilgisayarlarındaki dosya hareketlerini ACKLOG ile mühürleyin. Şüpheli bir "Toplu Veri Aktarımı" tespit edildiğinde ACKLOG sizi uyarsın. Manuel koruma yetmez, ACKLOG ile bilimsel birikiminize sahip çıkın.</p>
    `
  },
  "kütüphane-ve-veritabanı-erisim-log-yonetimi": {
    title: "Kütüphane ve Veritabanı Erişim Log Yönetimi: Lisans Güvenliği",
    description: "Üniversite kütüphanelerindeki ücretli akademik veritabanlarının kötüye kullanımını engelleme.",
    content: `
      <h2>Lisans Güvenliği: Kütüphane Kaynaklarını Korumak</h2>
      <p>Üniversiteler kütüphane veritabanları (Scopus, IEEE vb.) için milyonlarca TL öder. Bu kaynakların kurumsal IP dışından sızdırılması veya botlarla toplu indirilmesi, üniversitenin bu servislerden yasaklanmasına neden olabilir.</p>
      
      <h3>Neler İzlenmeli?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Proxy veya VPN üzerinden kütüphaneye bağlanan kullanıcıların hareketleri.</li>
        <li>Birim zamanda yapılan 'Download' sayısındaki anormal artışlar (Scraping tespiti).</li>
      </ul>

      <p><strong>ACKLOG Proxy Guard:</strong> Kütüphane trafiğinizi ACKLOG üzerinden süzün. Lisans sözleşmelerinizi ihlal edebilecek agresif indirmeleri anında bloklayın. ACKLOG ile akademik kaynaklarınızı adil ve güvenli kullanın.</p>
    `
  },
  "okul-yonetim-sistemleri-e-okul-benzeri-guvenlik-iz": {
    title: "Okul Yönetim Sistemleri (E-Okul Benzeri) Güvenlik İzleme Teknikleri",
    description: "Not girme, devamsızlık ve kayıt sistemlerinin siber savunması ve yetki denetimi.",
    content: `
      <h2>Not Güvenliği: Eğitimde Veri Bütünlüğü</h2>
      <p>Notların değiştirilmesi, bir okulun başına gelebilecek en büyük skandaldır. Bu sistemlerdeki güvenliğin tek teminatı, her bir 'Update' (Güncelleme) işleminin geri döndürülemez şekilde loglanmasıdır.</p>
      
      <h3>İzleme Kriterleri</h3>
      <p>Sistem yöneticisi (Admin) ve öğretmen hesaplarının davranışları modelize edilmelidir. Bir öğretmenin sadece kendi sınıfının notlarını değiştirdiğinden emin olunmalıdır.</p>

      <p><strong>ACKLOG Integrity Checker:</strong> Eğitim yönetim sistemlerinizdeki veritabanı hareketlerini ACKLOG ile takip edin. "Not tablosunda yetkisiz bir değişim yapıldı" alarmını milisaniyeler içinde alın. Manuel takip skandalı önleyemez, ACKLOG ile prestijinizi koruyun.</p>
    `
  },
  "yurt-internet-aglarinda-yasal-sorumluluk-ve-loglama": {
    title: "Yurt İnternet Ağlarında Yasal Sorumluluk ve Loglama Rehberi",
    description: "Öğrenci yurtlarında 5651 sayılı kanun uyumu ve 'Hotspot' güvenlik çözümleri.",
    content: `
      <h2>Yurt Güvenliği: Hotspot ve Yasal Loglar</h2>
      <p>Yurtlar, internetin yüzlerce farklı kişi tarafından ortak kullanıldığı yerlerdir. Eğer interneti kullanan bir kişi yasa dışı bir işlem yaparsa, yasal muhatap yurt yönetimidir. Bu riskten kurtulmanın tek yolu 'Hatasız Loglama'dır.</p>
      
      <h3>Hotspot Standartları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>TC Kimlik No doğrulamalı (SMS veya Portal) giriş sistemi.</li>
        <li>Ağda 'Logon' ve 'Logoff' yapan kullanıcıların zaman damgalı mühürlenmesi.</li>
        <li>Kullanıcılar arası trafiğin (Client Isolation) izlenmesi.</li>
      </ul>

      <p><strong>ACKLOG Hotspot Guard:</strong> Yurt ağlarınızdaki tüm trafiği ACKLOG ile süzün. Bir adli makamdan "Şu saatte kim bu siteye girdi?" sorusu geldiğinde, ACKLOG raporuyla faili kesin olarak gösterin. Manuel kağıt kayıtları kanıt sayılmaz, ACKLOG ile yasal zırhınızı kuşanın.</p>
    `
  },
  "eduroam-baglanti-kayitlari-izleme-ve-analiz": {
    title: "Eduroam Bağlantı Kayıtları İzleme ve Siber Analiz",
    description: "Uluslararası akademik dolaşım ağı (Eduroam) erişimlerinin güvenli loglanması.",
    content: `
      <h2>Eduroam Güvenliği: Global Erişim Yerel Denetim</h2>
      <p>Eduroam, bir akademisyenin dünyanın her yerinde internete çıkmasını sağlar. Ancak bu 'Açıklık', siber riskleri de beraberinde getirir. Radius logları üzerinden Eduroam trafiği 7/24 izlenmelidir.</p>
      
      <h3>Teknik Takip</h3>
      <p>Ziyaretçi akademisyenlerin ağdaki hareketleri ve kendi öğrencilerinizin dış üniversitelerdeki login hareketleri korele edilmelidir.</p>

      <p><strong>ACKLOG RADIUS Monitor:</strong> Eduroam RADIUS loglarınızı ACKLOG SIEM’e bağlayın. Şüpheli bir Eduroam hesabıyla ağınıza sızma denemelerini anında görün. ACKLOG ile global erişimi güvenli hale getirin.</p>
    `
  },
  "kampuslerde-siber-zorbalik-tespiti-icin-ag-izleme": {
    title: "Kampüslerde Siber Zorbalık Tespiti İçin Ağ İzleme ve Analiz",
    description: "Öğrenci forumları ve ağ trafiği üzerinden siber zorbalık ve tehdit unsurlarını saptama.",
    content: `
      <h2>Sosyal Güvenlik: Siber Zorbalığı Önlemek</h2>
      <p>Üniversite ağlarında gerçekleşen siber zorbalık, taciz veya yasa dışı gruplaşmalar trafik paternlerinden (Pattern Analysis) analiz edilebilir. Bu sadece bir güvenlik değil, bir sosyal sorumluluktur.</p>
      
      <h3>Davranışsal Analiz</h3>
      <p>Ağda belli kelimelerin (Tehdit, Şiddet vb.) sıklığının artması veya belli saatlerdeki internet hareketliliği SIEM üzerinden rasyonalize edilmelidir.</p>

      <p><strong>ACKLOG Safety Shield:</strong> Kampüs trafiğindeki aykırı durumları ACKLOG'un yapay zeka destekli motoruyla yakalayın. Olaylar büyümeden müdahale etme şansı yakalayın. ACKLOG ile kampüs hayatını dijitalde de koruyun.</p>
    `
  },
  "egitim-kurumları-icin-ucretsiz-vs-ucretli-siem": {
    title: "Eğitim Kurumları İçin Ücretsiz vs Ücretli SIEM: Hangisi Mantıklı?",
    description: "Open source çözümlerin (ELK vb.) gizli maliyetleri ve profesyonel SIEM'in avantajları.",
    content: `
      <h2>SIEM Seçimi: Okullar İçin En Doğru Yatırım</h2>
      <p>Eğitim kurumları genellikle "Ücretsiz olsun" diyerek ELK gibi sistemlere yönelir. Ancak bu sistemlerin kurulumu, bakımı ve donanım ihtiyacı, ücretli bir çözümden (ACKLOG) daha pahalıya mal olabilir.</p>
      
      <h3>Gizli Maliyetler Karşılaştırması</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6 text-gray-400">
        <li><strong>Donanım:</strong> Ücretsiz sistemler çok yüksek RAM/Disk ister. ACKLOG ise optimize edilmiştir.</li>
        <li><strong>Personel:</strong> ELK yönetmek için 1 uzman gerekir. ACKLOG'u herkes yönetebilir.</li>
        <li><strong>Zaman Damgası:</strong> Ücretsizlerde hazır 5651 modülü yoktur, manuel entegre etmek zordur.</li>
      </ul>

      <p><strong>Neden ACKLOG?</strong> ACKLOG, eğitim kurumlarına özel "Edu-Pack" fiyatlandırmasıyla gelir. Kurulumu 2 saat sürer, eğitimi 1 gündür. Manuel sistemlerle boğuşmak yerine ACKLOG ile %100 uyum ve güvenliği uygun maliyetle alın.</p>
    `
  },
  "ddo-bilgi-guvenligi-rehberi-kamu-kurumlari-icin-siem": {
    title: "DDO Bilgi Güvenliği Rehberi Kamu Kurumları İçin SIEM Zorunluluğu",
    description: "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi rehberine tam uyumlu loglama ve siber güvenlik.",
    content: `
      <h2>Kamu Mevzuatı: DDO Rehberi ve Yerli Yazılım Gücü</h2>
      <p>Cumhurbaşkanlığı Dijital Dönüşüm Ofisi (DDO) tarafından yayınlanan Bilgi ve İletişim Güvenliği Rehberi, tüm kamu kurumları ve kritik altyapılar için bir 'Anayasa' niteliğindedir. Rehberin en güçlü vurgusu "Yerli ve Milli Yazılım" kullanımıdır.</p>
      
      <h3>Rehberdeki SIEM Gereklilikleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Merkezi Loglama:</strong> Tüm varlıkların (Sunucu, Switch, PC) loglarının bir merkezde toplanması.</li>
        <li><strong>Alt Seviye Loglama:</strong> Sadece Windows değil, uygulama bazlı derinlemesine log tutulması.</li>
        <li><strong>Korelasyon:</strong> Farklı cihazlardan gelen logların bir anlam ifade etmesi (Senaryo yazımı).</li>
        <li><strong>Zaman Damgası:</strong> TÜBİTAK onaylı damgalama ile inkar edilemezlik.</li>
      </ul>

      <div class="bg-blue-500/10 p-6 rounded-xl my-8 border border-blue-500/20">
        <h4 class="text-blue-400 font-bold mb-2">ACKLOG DDO Uyum Paketi:</h4>
        <p>ACKLOG, DDO rehberinde belirtilen "Yerlilik" maddesini %100 karşılayan ve DDO Standartları ile tam uyumlu raporlar üreten yerli bir SIEM'dir. Kamu kurumlarında kurulum ve denetim süreçlerini tek tuşla yönetmenizi sağlar. Devletin verisini devletin yerli yazılımı ACKLOG ile koruyun.</p>
      </div>

      <h3>Adım Adım Uyum Planı</h3>
      <p>Kurumunuzun siber olgunluk seviyesini ölçün, log envanterinizi çıkarın ve ACKLOG’un hazır DDO kurallarını aktif ederek güvenliğinizi belgelendirin.</p>
    `
  },
  "e-devlet-servislerine-erisim-loglarinin-guvenligi": {
    title: "E-Devlet Servislerine Erişim Loglarının Güvenliği ve Denetimi",
    description: "Kamu kurumlarının e-devlet (tbs vb.) servisleri ile haberleşme güvenliği ve veri sızıntısı takibi.",
    content: `
      <h2>Devlet Kapısı Güvenliği: Servis Web Logları</h2>
      <p>Vatandaşlık verisi, tapu kayıtları veya adli sicil dökümlerine e-devlet entegrasyonu ile erişen kurumlar, bu trafiği en yüksek hassasiyetle loglamalıdır. Bir memurun yetkisi dışında sorgu yapması ciddi bir 'Görev Suçu'dur.</p>
      
      <h3>Denetim Metrikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Aynı TC Sorgusu:</strong> Aynı personelin kısa sürede çok sayıda TC sorgusu yapmasının tespiti.</li>
        <li><strong>Access Spikes:</strong> Mesai dışı yapılan e-devlet servisi çağrıları.</li>
        <li><strong>IP Whitelist:</strong> Servise sadece yetkili sunucu bloğundan erişildiğinin log teyidi.</li>
      </ul>

      <p><strong>ACKLOG Service Monitor:</strong> E-devlet entegrasyonu yapan uygulamalarınızın API loglarını ACKLOG ile süzün. Suiistimalleri daha gerçekleşirken fark edin. ACKLOG ile devlet verisini emanet bilinciyle koruyun.</p>
    `
  },
  "kamu-kurumlarında-5651-yasasi-ve-zaman-damgası": {
    title: "Kamu Kurumlarında 5651 Yasası ve Zaman Damgası Zorunluluğu",
    description: "Belediyeler ve valilikler gibi kamu binalarında internet loglama ve yasal sorumluluklar.",
    content: `
      <h2>Yasal Mühür: Kamu Loglarında İnkar Edilemezlik</h2>
      <p>Kamu kurumları hem çalışanları hem de misafirleri (Open Wi-Fi) için internet sunar. 5651 sayılı kanun, bu trafiğin zaman damgalı saklanmasını emreder. Eksik veya imzasız loglar, kurum yöneticilerini siber suçlara 'atak' durumuna düşürebilir.</p>
      
      <h3>5651 Checklist</h3>
      <p>Loglar sadece 'tutulmakla' kalmamalı, her akşam TÜBİTAK/Zaman Damgası sunucularından alınan mühürle imzalanmalı ve bu imza dosyaları ayrı bir yedek ünitesinde saklanmalıdır.</p>

      <p><strong>ACKLOG 5651 Engine:</strong> ACKLOG, mühürleme işlemini arka planda saniyeler içinde yapar. Arşivleriniz her zaman denetime hazırdır. Manuel imzalama süreçleriyle uğraşmayın, ACKLOG ile yasal güvencenizi otomatiğe bağlayın.</p>
    `
  },
  "belediyeler-icin-akilli-sehir-iot-aglari-izleme": {
    title: "Belediyeler İçin Akıllı Şehir (Smart City) IoT Ağları İzleme",
    description: "Parklar, duraklar ve trafik sistemlerindeki IoT cihazlarının siber güvenliği.",
    content: `
      <h2>Şehir Güvenliği: Akıllı Sistemlerin Siber Zırhı</h2>
      <p>Akıllı şehir projeleri (Aydınlatma, Atık yönetimi, Trafik sinyalizasyonu) devasa bir IoT ağı yaratır. Bu ağlara yapılabilecek bir siber sabotaj, tüm şehir trafiğini kilitleyebilir veya kamu hizmetlerini durdurabilir.</p>
      
      <h3>Riskler ve Loglama</h3>
      <p>Sokaktaki sensörlerden gelen verilerin doğruluğu ve bu sensörlere yapılan login hareketleri merkezi bir SIEM ekranından 7/24 takip edilmelidir.</p>

      <p><strong>ACKLOG Smart City Shield:</strong> Şehrin dijital sinir sistemini ACKLOG ile koruyun. Olağandışı bir sensor sinyalinde veya siber müdahalede anlık alarm alın. ACKLOG ile şehirlerin geleceğini siber tehditlerden arındırın.</p>
    `
  },
  "milli-isletim-sistemi-pardus-log-yonetimi-ve-siem": {
    title: "Milli İşletim Sistemi Pardus Log Yönetimi ve SIEM Uyumu",
    description: "Kamu kurumlarında yaygınlaşan Pardus yüklü bilgisayarların merkezi log takibi ve güvenliği.",
    content: `
      <h2>Yerli Güç: Pardus Bilgisayarların Siber Savunması</h2>
      <p>Pardus, kamu kurumlarımızın bağımsızlığı için kritik bir adımdır. Ancak her işletim sistemi gibi Pardus'un da profesyonelce loglanması ve izlenmesi gerekir. Linux tabanlı bu yapıda 'Auditd' kayıtları hayati önem taşır.</p>
      
      <h3>Pardus İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Sudo Actions:</strong> Admin yetkisiyle (Sudo) çalıştırılan tüm komutların kaydı.</li>
        <li><strong>User Access:</strong> SSH veya masaüstü ortamına yapılan girişler.</li>
        <li><strong>Package Management:</strong> Sisteme kurulan veya kaldırılan tüm yazılımların izlenmesi.</li>
      </ul>

      <p><strong>ACKLOG Pardus Pack:</strong> ACKLOG, Pardus ile %100 yerli ve tam entegre çalışır. Pardus loglarını merkezi dashboardda Windows loglarıyla beraber izlemenizi sağlar. Milli işletim sisteminizi yerli SIEM ACKLOG ile koruyun.</p>
    `
  },
  "kamu-verilerinin-bulut-cloud-siem-ile-korunması": {
    title: "Kamu Verilerinin Bulut (Cloud) SIEM İle Korunması: KVKK Kuralları",
    description: "Kamuda bulut kullanımı ve verilerin yurt dışına çıkış yasağı kapsamında siber güvenlik.",
    content: `
      <h2>Dijital Egemenlik: Kamu Datası Yurt Dışına Çıkmamalı</h2>
      <p>KVKK ve DDO rehberi uyarınca, kamu verilerinin yurt dışı merkezli bulut sistemlerinde loglanması ve saklanması yasaktır. Bu durum, kamu kurumlarını "Yerel Bulut" (Local Cloud) veya "On-Premise" çözümlere yönlendirir.</p>
      
      <h3>Neden ACKLOG Cloud?</h3>
      <p>ACKLOG'un bulut hizmeti Türkiye sınırları içindeki veri merkezlerinden sunulmaktadır. Bu sayede kamu kurumları hem bulut esnekliğinden faydalanabilir hem de mevzuatı ihlal etmezler.</p>

      <p><strong>ACKLOG Local Cloud:</strong> Verinizi sınırların ötesine göndermeden, dünya standartlarında bulut SIEM hizmeti alın. ACKLOG ile yasalara tam uyum sağlayın, siber riskleri sınır içinde durdurun.</p>
    `
  },
  "yüksek-guvenlikli-kamu-tesislerinde-ic-tehdit-izleme": {
    title: "Yüksek Güvenlikli Kamu Tesislerinde İç Tehdit İzleme Teknikleri",
    description: "Kritik devlet tesislerinde (Savunma, Enerji vb.) personel kaynaklı siber riskleri önleme.",
    content: `
      <h2>İçerideki Tehlike: Personel Davranış Analizi (UEBA)</h2>
      <p>Siber saldırıların %60'ı içeriden başlar (Kaza veya Kasıt). Kamu personelin veya yüklenicilerin kritik sistemlerdeki 'Aykırı' hareketleri ancak derin analizle saptanabilir.</p>
      
      <h3>İzlencek Anomaliler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>USB portuna yapılan her türlü erişim ve dosya kopyalama.</li>
        <li>Kritik sunuculara yapılan mesai dışı 'Ping' veya 'Port Scan' hareketleri.</li>
        <li>Çok miktarda döküman yazdırma veya mail gönderme girişimleri.</li>
      </ul>

      <p><strong>ACKLOG Behavior Guard:</strong> ACKLOG'un UEBA motoru, kamu kurumlarınızdaki her bir profilin 'Normal'ini öğrenir. Normalden sapan sinsi hareketlerde "Kırmızı Alarm" üretir. Manuel takip yakalayamaz, ACKLOG ile içerideki gözünüz her zaman açık olsun.</p>
    `
  },
  "kamu-web-sitelerine-yapılan-defacement-saldirilarini-izleme": {
    title: "Kamu Web Sitelerine Yapılan Defacement Saldırılarını İzleme",
    description: "Web sitelerinin ana sayfasının değiştirilmesini (Hacklenme) durdurma ve FIM rolü.",
    content: `
      <h2>Prestij Koruma: Web Sayfa Sabotajını Durdurun</h2>
      <p>Bir kamu kurumunun web sitesine girildiğinde siber korsanların mesajını görmek büyük bir itibar kaybıdır. Buna 'Defacement' denir. Bu saldırı genellikle site dosyalarının değiştirilmesiyle gerçekleşir.</p>
      
      <h3>Anlık Tespit</h3>
      <p>Web sunucusundaki <code>index.html</code> veya <code>default.aspx</code> dosyalarındaki değişiklik saniyeler içinde fark edilmelidir.</p>

      <p><strong>ACKLOG Web-FIM:</strong> ACKLOG, web sitenizin dosyalarını 7/24 mühürlü kontrol eder. Habersiz bir değişiklik yapıldığı an web servisini durdurabilir veya size anlık alarm geçebilir. ACKLOG ile web sitenizi siber saldırganların panosu olmaktan kurtarın.</p>
    `
  },
  "polis-ve-adli-makamlar-icin-siber-delil-yonetimi": {
    title: "Polis ve Adli Makamlar İçin Siber Delil Yönetimi ve SIEM",
    description: "Siber suç soruşturmalarında logların kanıt değeri ve adli bilişim analizi.",
    content: `
      <h2>Dijital Adalet: Logların Mahkemede Kanıt Olarak Sunulması</h2>
      <p>Bir siber suç davasında hakim sadece bir "Ekran Görüntüsü"ne inanmaz. Değiştirilemezlik (Hashing) ve Zaman Damgası (Timestamping) olan ham log verilerini 'Adli Kanıt' olarak kabul eder.</p>
      
      <h3>Kanıt Zinciri (Chain of Custody)</h3>
      <p>Logun toplandığı andan itibaren kimsenin dokunmadığının ve üzerine zaman damgası vurulduğunun SIEM tarafından kanıtlanması gerekir.</p>

      <p><strong>ACKLOG Forensic Port:</strong> ACKLOG, siber olayları tek tuşla "Mahkeme Dosyası" formatında hazırlar ve hukuken reddedilemez bir hale getirir. Dijital delillerinizi ACKLOG ile mühürleyin, adaletin tecellisine veriyle katkı sağlayın.</p>
    `
  },
  "kamu-kurumlari-icin-siem-satin-alma-sartnamesi-haz": {
    title: "Kamu Kurumları İçin SIEM Satın Alma Şartnamesi Hazırlama Rehberi",
    description: "İhale süreçlerinde doğru SIEM kriterlerini belirleme ve yerli ürün puanlaması.",
    content: `
      <h2>İhale Rehberi: Doğru SIEM Şartnamesi Nasıl Yazılır?</h2>
      <p>Yanlış yazılan bir şartname, kurumunuza yıllarca kullanamayacağınız karmaşık bir yazılımın girmesine neden olabilir. Şartnamede performansa, yerli desteğe ve DDO uyumuna odaklanılmalıdır.</p>
      
      <h3>Şartnameye Eklenmesi Gereken 5 Kritik Madde</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-gray-400">
        <li>"Ürün %100 yerli malı belgesine sahip olmalıdır."</li>
        <li>"Sanallaştırma ortamlarında ek lisans maliyeti olmaksızın çalışmalıdır."</li>
        <li>"TÜBİTAK Zaman Damgası entegrasyonu kutudan çıktığı gibi (out-of-the-box) hazır olmalıdır."</li>
        <li>"DDO Bilgi Güvenliği Rehberi regülasyon raporu tek tuşla alınabilmelidir."</li>
        <li>"EPS (Saniyedeki Olay Sayısı) kısıtlaması olmaksızın sınırsız log işleyebilmelidir."</li>
      </ol>

      <p><strong>Neden ACKLOG?</strong> ACKLOG, tüm bu şartname maddelerini eksiksiz karşılayan ve kamu kurumlarında en yüksek performansı veren yerli liderdir. Şartnameniz hazırsa, ACKLOG ile siber güvenliğinizi en üst lige taşıyın.</p>
    `
  }
};
