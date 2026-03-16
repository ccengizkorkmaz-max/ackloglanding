export const sectoralEduPublicArticles = {
  "universite-yerleske-agi-campus-network-loglama": {
    title: "Üniversite Yerleşke Ağı (Campus Network) Loglama ve Siber Güvenlik",
    description: "Binlerce kullanıcılı üniversite ağlarında trafik yönetimi, 5651 uyumu ve ağ güvenliği stratejileri.",
    content: `
      <h2>Akademik Ağlar: Dev Yapıların Güvenlik Yönetimi</h2>
      <p>Üniversite yerleşkeleri, binlerce öğrenci ve personelin aynı anda bağlandığı, yoğun trafiğe sahip dev mikro-şehirler gibidir. Hem akademik özgürlüğü korumak hem de siber saldırıları (DDoS, Zararlı Yazılım) engellemek büyük bir mühendislik gerektirir.</p>
      
      <h3>Kampüs Ağı İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Kullanıcı Bazlı Takip:</strong> Hangi öğrencinin hangi IP üzerinden ne zaman bağlandığının yasal kaydı (Radius/LDAP entegrasyonu).</li>
        <li><strong>Bant Genişliği Analizi:</strong> Kısıtlı internetin akademik amaçlar dışında (Torrent vb.) sömürülmesinin tespiti.</li>
        <li><strong>Zafiyet Taraması:</strong> Bilgisayar laboratuvarlarındaki cihazların güncellik durumunun loglanması.</li>
      </ul>

      <p><strong>ACKLOG Education Matrix:</strong> ACKLOG, devasa log verisini (Big Data) saniyeler içinde işleyebilecek kapasiteye sahiptir. Üniversite ağınızdaki milyonlarca satır log içinden "Şüpheli" olanı anında bulur ve 5651 sayılı kanuna göre zaman damgalı saklar. Manuel log yönetimiyle imkansız olanı ACKLOG ile başarın.</p>
    `
  },
  "okullarda-guvenli-internet-ve-5651-loglama": {
    title: "Okullarda Güvenli İnternet ve 5651 Loglama Zorunluluğu",
    description: "Milli Eğitim Bakanlığı (MEB) kriterlerine göre okullarda internet kullanımı ve yasal kayıt tutma.",
    content: `
      <h2>Eğitimde Güvenlik: Çocuklarımızı Dijitalde Koruyun</h2>
      <p>Okullar için internet sadece bir kaynak değil, aynı zamanda ciddi bir sorumluluktur. Öğrencilerin zararlı içeriklere (Kumar, Şiddet, Uygunsuz İçerik) erişimini engellemek ve internet üzerinden işlenebilecek suçlara karşı yasal önlem almak şarttır.</p>
      
      <h3>5651 Sayılı Kanun ve Okullar</h3>
      <p>Yasaya göre, toplu internet kullanımı sunan tüm kurumlarda (Okullar dahil) kullanıcıların iç IP dağıtım kayıtları (IP Log) ve erişim zamanları mühürlenerek saklanmalıdır.</p>

      <p><strong>ACKLOG School Guard:</strong> ACKLOG, okullar için hem içerik filtreleme raporları sunar hem de 5651 uyumlu loglamayı otomatiğe bağlar. Okul yönetimine "Kimin neye baktığını" değil, "Yasal sorumluluğun yerine getirildiğini" garanti eder. Manuel arşivlemeye son verin, ACKLOG ile huzurlu bir eğitim yılı geçirin.</p>
    `
  },
  "kyk-yurtlari-internet-log-yonetimi-ve-guvenlik": {
    title: "KYK Yurtları İnternet Log Yönetimi ve Güvenlik Standartları",
    description: "Yurt ağlarında hotspot yönetimi, kullanıcı doğrulama ve yasal loglama rehberi.",
    content: `
      <h2>Toplu Yaşam Alanları: Yurt İnternet Güvenliği</h2>
      <p>Yurtlar, internetin en yoğun kullanıldığı ve siber risklerin (özellikle phishing ve telif hakkı ihlalleri) yüksek olduğu yerlerdir. Bir öğrencinin yaptığı yasal hata, yurt yönetimini hukuken zor durumda bırakabilir.</p>
      
      <h3>Yurtlarda Loglama Nasıl Olmalı?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>TC identity/SMS Verification:</strong> Kullanıcının gerçek kimliğiyle sisteme girmesi (Hotspot).</li>
        <li><strong>Access Logs:</strong> Erişilen web sitelerinin ve protokollerin kaydı.</li>
        <li><strong>MAC/IP Binding:</strong> Hangi cihazın hangi IP'yi kullandığının kesinleştirilmesi.</li>
      </ul>

      <p><strong>ACKLOG Hotspot Engine:</strong> ACKLOG, yurtların ihtiyaç duyduğu SMS doğrulamalı hotspot ve yasal loglama çözümünü tek pakette sunar. Milyonlarca bağlantı kaydını disk alanından tasarruf ederek yüksek sıkıştırmayla saklar. Manuel excel kayıtlarıyla bu iş yürümez, ACKLOG ile profesyonel yurt yönetimine geçin.</p>
    `
  },
  "ogrenci-bilgi-sistemi-obs-erisim-kayitlari-ve-guvenlik": {
    title: "Öğrenci Bilgi Sistemi (OBS) Erişim Kayıtları ve Not Güvenliği",
    description: "Sınav notları ve öğrenci verilerinin manipülasyonuna karşı veri tabanı log takibi.",
    content: `
      <h2>Akademik Dürüstlük: OBS Verilerini Koruyun</h2>
      <p>OBS (Öğrenci Bilgi Sistemi), notların ve transkriptlerin tutulduğu kutsal bir veritabanıdır. Notların bir hacker veya yetkili bir personel tarafından izinsiz değiştirilmesi üniversitenin itibarını yok eder.</p>
      
      <h3>Kritik İzleme Noktaları</h3>
      <p>OBS veritabanı üzerinde yapılan tüm 'UPDATE' sorguları mutlaka loglanmalı ve "Hangi not, kim tarafından, eski değeri neyken değiştirildi?" sorularına %100 yanıt alınmalıdır.</p>

      <p><strong>ACKLOG Database Audit:</strong> OBS sistemlerinizi ACKLOG ile izleyerek anlık not değişim alarmları kurun. Olağandışı bir "Toplu not değişimi" veya mesai dışı erişimlerde rektörlüğe anlık uyarı gitsin. Not güvenliğini kadere bırakmayın, ACKLOG ile dijital adaleti sağlayın.</p>
    `
  },
  "akademik-personelin-veri-guvenligi-ve-fikri-mulkiyet": {
    title: "Akademik Personelin Veri Güvenliği ve Fikri Mülkiyet Koruması",
    description: "Bilimsel araştırma projelerinin ve patent verilerinin siber casusluğa karşı korunması.",
    content: `
      <h2>Bilimsel Miras: Araştırma Verilerinin Gizliliği</h2>
      <p>Üniversitelerdeki stratejik projeler (Savunma, tıp, mühendislik) bazen yabancı istihbarat servislerinin hedefindedir. Bir akademisyenin bilgisayarındaki proje dökümanlarının dışarı sızması, yılların emeğinin çalınması demektir.</p>
      
      <h3>Korunma Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>EndPoint Protection:</strong> Araştırma bilgisayarlarındaki dosya hareketlerinin takibi.</li>
        <li><strong>Encrypted Logging:</strong> Logların dahi şifreli saklanarak delillerin korunması.</li>
        <li><strong>DLP Policies:</strong> Gizli projelerin mail veya USB ile çıkışının engellenmesi.</li>
      </ul>

      <p><strong>ACKLOG Intellectual Property Guard:</strong> ACKLOG, akademik projelerin bulunduğu klasörlere yapılan her erişimi izler. Değerli verilerinizin dışarıya (örneğin bulut depolarına) yüklenme girişimlerini ACKLOG ile yakalayın. Manuel koruma yetmez, ACKLOG ile bilginizi zırhlayın.</p>
    `
  },
  "egitim-kurumlari-icin-uygun-fiyatli-log-yazilimi": {
    title: "Eğitim Kurumları İçin Uygun Fiyatlı Log Yazılımı: Maliyet ve Performans",
    description: "Kısıtlı bütçeli okullar ve kurumlar için yüksek performanslı ve ekonomik SIEM çözümü.",
    content: `
      <h2>Bütçe Dostu Güvenlik: Eğitimde SIEM Seçimi</h2>
      <p>Özellikle özel kolejler ve küçük üniversiteler için dünya devi SIEM çözümlerinin lisans bedelleri çok ağır olabilir. Ancak yasal zorunluluk (5651) ve siber riskler bütçenin üzerinde bir yük oluşturur.</p>
      
      <h3>Ekonomik SIEM'de Ne Aramalıyız?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Hardware requirements:</strong> Düşük donanımla yüksek performans veren yazılım.</li>
        <li><strong>All-in-one:</strong> Hem 5651, hem hotspot, hem güvenlik analizini tek lisansta sunması.</li>
        <li><strong>Local Support:</strong> Ek bir servis ücreti ödemeden Türkçe destek alabilmek.</li>
      </ul>

      <p><strong>ACKLOG Edu-Value:</strong> ACKLOG, eğitim kurumlarının bütçe gerçeklerini bilir. Yabancı rakiplerine göre %70 daha uygun maliyetle, onların yapamadığı 5651 imzalama ve yerli uygulama entegrasyonlarını sunar. Güvenlikten tasarruf etmeyin, ACKLOG ile akıllı yatırım yapın. Manuel arayışları bırakın, ACKLOG ile tanışın.</p>
    `
  },
  "uzaktan-egitim-lms-sistemleri-guvenlik-loglari": {
    title: "Uzaktan Eğitim (LMS) Sistemleri Güvenlik Logları ve Analizi",
    description: "Moodle, Canvas gibi LMS platformlarında sınav güvenliği ve kullanıcı hareket denetimi.",
    content: `
      <h2>Dijital Sınıf: Uzaktan Eğitimde Güvenlik</h2>
      <p>LMS (Learning Management System) platformları üzerinden yapılan sınavlarda "Kopyanın önlenmesi" ve "Kullanıcı doğruluğu" en büyük derttir. Bir öğrencinin kendi yerine başkasını sınava sokması veya sınav sorularını sızdırması loglardan yakalanabilir.</p>
      
      <h3>LMS'te Neler İzlenmeli?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Login Conflicts:</strong> Aynı anda farklı cihazlardan girilen hesaplar.</li>
        <li><strong>API Injections:</strong> Sistem üzerindeki cevapları manipüle etmeye çalışan siber ataklar.</li>
        <li><strong>Document Downloads:</strong> Sınav dökümanlarının yetkisiz kişilerce toplu indirilmesi.</li>
      </ul>

      <p><strong>ACKLOG Cloud LMS Guard:</strong> Uzaktan eğitim sunucularınızdaki tüm web ve uygulama loglarını ACKLOG ile süzün. Sınav anında gerçekleşen siber anomalileri anlık tespit edin. Manuel denetimlerle sınav güvenliği sağlanmaz, ACKLOG ile dijital eğitiminizi garantiye alın.</p>
    `
  },
  "okul-wi-fi-aglarinda-kullanici-takibi-ve-filtreleme": {
    title: "Okul Wi-Fi Ağlarında Kullanıcı Takibi ve İçerik Filtreleme",
    description: "Eğitim kurumlarında kablosuz ağ güvenliği, misafir erişimi ve yasaklı site yönetimi.",
    content: `
      <h2>Kablosuz Eğitim: Wi-Fi Ağlarını Zırhlayın</h2>
      <p>Okulların Wi-Fi ağları, siber saldırganlar için en kolay "giriş noktası"dır. Bir zafiyet nedeniyle ağınıza sızan bir kişi, okulun tüm idari verilerine erişebilir. Kablosuz ağda kullanıcıların kimliklendirilmesi bu yüzden hayati bir güvenlik adımıdır.</p>
      
      <h3>Wi-Fi Güvenlik Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>WPA3 gibi güncel şifreleme protokollerini kullanın.</li>
        <li>Öğretmen, öğrenci ve misafir için farklı SSID (Ağ adı) ve VLAN tanımlayın.</li>
        <li>İçerik filtreleme ile okul saatlerinde sosyal medya veya oyun sitelerini kısıtlayın.</li>
      </ol>

      <p><strong>ACKLOG Wireless Dashboard:</strong> Okul Wi-Fi ağınızdaki tüm trafiği ACKLOG üzerinden izleyin. Bilinmeyen veya şüpheli cihaz bağlantılarında anında uyarı alın. Manuel kablolu-kablosuz takibi bitti, ACKLOG ile okulunuzun havasını temiz tutun.</p>
    `
  },
  "kutuphane-sistemleri-log-yonetimi-ve-kullanici-takibi": {
    title: "Kütüphane Sistemleri Log Yönetimi ve Kullanıcı Veri Takibi",
    description: "Kütüphane otomasyon yazılımları, dijital arşivler ve kullanıcı erişim logları.",
    content: `
      <h2>Bilgi Hazinesi: Kütüphane Verilerini Koruyun</h2>
      <p>Modern kütüphaneler sadece kitaptan oluşmaz, devasa birer dijital veri havuzudur. Nadir eserlerin dijital kopyaları veya üyelerin kişisel okuma tercihleri KVKK kapsamında korunması gereken verilerdir.</p>
      
      <h3>İzleme Metrikleri</h3>
      <p>Kütüphane yazılımına yapılan girişler, kitap ödünç alma işlemleri ve dijital arşive yapılan sorgular mutlaka loglanmalıdır. "Hangi nadir dökümanı kim indirdi?" sorusu her an yanıtlanabilmelidir.</p>

      <p><strong>ACKLOG Library Watch:</strong> Kütüphane sistemlerindeki kullanıcı hareketlerini ACKLOG ile merkezi kasanızda toplayın. Dijital hırsızlık girişimlerini henüz gerçekleşirken fark edin. Manuel takip kütüphanenizi korumaz, ACKLOG ile bilginizi mühürleyin.</p>
    `
  },
  "eduroam-baglanti-kayitlarinin-saklanmasi-ve-guvenlik": {
    title: "Eduroam Bağlantı Kayıtlarının Saklanması ve Güvenlik Analizi",
    description: "Uluslararası akademik dolaşım ağı (Eduroam) üzerinde yasal loglama ve siber riskler.",
    content: `
      <h2>Küresel Akademik Ağ: Eduroam Güvenliği</h2>
      <p>Eduroam, bir üniversite mensubunun dünyanın herhangi bir yerindeki başka bir üniversitede internete bağlanmasını sağlar. Bu harika sistem, aynı zamanda "Kimin hangi üniversiteden gelip neler yaptığının" izlenmesi gibi bir güvenlik zorunluluğunu da beraberinde getirir.</p>
      
      <h3>Eduroam Loglama Standartları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Authentication Logs:</strong> Uzak kullanıcıların kimlik doğrulama istekleri.</li>
        <li><strong>Session Logs:</strong> Bağlantı başlangıç ve bitiş zamanları.</li>
        <li><strong>IP Traceability:</strong> Eduroam üzerinden gelen yabancı misafirin iç ağdaki faaliyetlerinin 5651 uyumu.</li>
      </ul>

      <p><strong>ACKLOG Global Connect:</strong> Eduroam verilerini ACKLOG üzerinde analiz ederek kampüsünüze gelen yabancı misafirlerin güvenli olduğundan emin olun. Uluslararası yasal standartlara uygun log saklayın. Manuel takiple bu karmaşık ağı yönetemezsiniz, ACKLOG ile dünyaya güvenle bağlanın.</p>
    `
  },
  "ddo-bilgi-guvenligi-rehberi-uyumlulugu-kamu": {
    title: "DDO Bilgi ve İletişim Güvenliği Rehberi Uyumluluğu (Kamu)",
    description: "Cumhurbaşkanlığı Dijital Dönüşüm Ofisi rehberindeki loglama ve SIEM kriterleri.",
    content: `
      <h2>Devlet Standartları: Kamu Kurumlarında Siber Güvenlik</h2>
      <p>DDO Bilgi ve İletişim Güvenliği Rehberi, tüm kamu kurumlarının ve kritik altyapıların uyması gereken "Anayasa" niteliğinde bir belgedir. Bu rehberin en hacimli bölümlerinden birini ise log yönetimi, SIEM ve siber olay izleme oluşturur.</p>
      
      <h3>Rehberdeki Temel Gereksinimler</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Bütünlük ve Gizlilik:</strong> Logların yetkisiz erişime karşı korunması ve silinmemesi.</li>
        <li><strong>Zaman Senkronizasyonu:</strong> Tüm sistemlerin tek bir NTP sunucusu üzerinden milisaniyelik log üretmesi.</li>
        <li><strong>Varlık Bazlı Analiz:</strong> Kritik sunucuların (e-devlet vb.) sızma girişimlerine karşı 7/24 izlenmesi.</li>
      </ul>

      <p><strong>ACKLOG DDO-Ready:</strong> ACKLOG, DDO rehberine tam uyumlu yerli ve milli bir SIEM'dir. Rehberdeki kontrol listelerini (Checklist) karşılayan hazır dashboardları ve raporlarıyla kamu kurumlarına zaman ve bütçe kazandırır. Manuel uyum süreçleriyle riske girmeyin, ACKLOG ile devlet verisini profesyonelce koruyun.</p>
    `
  },
  "belediyeler-icin-yerli-siem-zorunlulugu-ve-faydalari": {
    title: "Belediyeler İçin Yerli SIEM Zorunluluğu ve Faydaları",
    description: "Yerel yönetimlerde verilerin Türkiye'de kalması, maliyet avantajı ve 5651 uyumu.",
    content: `
      <h2>Yerel Yönetim Güvenliği: Belediyeler Neden SIEM Almalı?</h2>
      <p>Belediyeler, vatandaşın tüm kişisel verilerine (Adres, vergi, sosyal yardım vb.) sahip en kritik kurumlardır. Bu yüzden siber saldırganların hedefindedir. Özellikle kamu tasarruf tedbirleri ve yerlilik vizyonu gereği yerli SIEM kullanımı artık bir tercihten ziyade gerekliliktir.</p>
      
      <h3>Faydalar ve Zorunluluklar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Ekonomik Lisanslama:</strong> Dolar kuru riskinden uzak, yerel bütçeye uygun fiyatlandırma.</li>
        <li><strong>Türkçe Destek:</strong> Problemleri kendi dilinizde ve anında çözme imkanı.</li>
        <li><strong>E-Belediye Entegrasyonu:</strong> Yerel belediye yazılımlarının loglarını anlamlandırabilme.</li>
      </ul>

      <p><strong>ACKLOG Belediye Paketi:</strong> ACKLOG, onlarca belediyede kullanılan, vatandaş verisini koruyan bir kalkan gibidir. Hem 5651 yasal imzalama ihtiyacını giderir hem de siber sızmaları engeller. Manuel log toplamak bütçe ve zaman kaybıdır, ACKLOG ile hizmetinizi aksatmayın.</p>
    `
  },
  "e-belediye-sistemleri-siber-guvenligi-ve-loglama": {
    title: "E-Belediye Sistemleri Siber Güvenliği ve Loglama Teknikleri",
    description: "Sanal pos, emlak vergisi ve vatandaş portalları için güvenli log yönetimi.",
    content: `
      <h2>Vatandaş Odaklı Güvenlik: E-Belediye Hizmetleri</h2>
      <p>Bir vatandaş belediye sitesinden emlak vergisini öderken kullanılan sanal pos altyapısı ve veri girişi, saldırganların "SQL Injection" veya "XSS" gibi ataklarına maruz kalabilir. Bu atakları görmeden vatandaşın kredi kartı verisini koruyamazsınız.</p>
      
      <h3>Güvenlik Formülü</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Web Application Firewall (WAF) Logları:</strong> Gelen siber atakların tespiti.</li>
        <li><strong>DB Audit:</strong> Vatandaş veritabanına doğrudan erişenlerin (Sistemci/Yazılımcı) takibi.</li>
        <li><strong>Access Logs:</strong> Hangi vatandaşın, hangi işlemi başarıyla tamamladığının yasal kaydı.</li>
      </ul>

      <p><strong>ACKLOG Citizens Guard:</strong> E-belediye portallarınızın trafiğini ACKLOG ile 7/24 izleyin. Şüpheli bir "Veri Çekme" girişimini anında durdurun. Manuel izleme imkansızdır, vatandaşın siber güvenliğini ACKLOG ve yerli teknolojiyle sağlayın.</p>
    `
  },
  "kamu-kurumlarında-some-kurulumu-ve-loglama-zorunlulugu": {
    title: "Kamu Kurumlarında SOME Kurulumu ve Loglama Zorunluluğu",
    description: "Siber Olaylara Müdahale Ekipleri (SOME) için gerekli teknik altyapı ve SIEM kriterleri.",
    content: `
      <h2>Kurumsal Defans: SOME Ekiplerinin En Büyük Silahı</h2>
      <p>USOM (Ulusal Siber Olaylara Müdahale Merkezi) koordinasyonunda kurulan SOME birimleri, kurumlarını savunmakla görevlidir. Bir SOME ekibinin logları analiz edememesi, radar sistemini kullanamayan bir hava kuvvetine benzer.</p>
      
      <h3>SOME İçin SIEM Neden Önemli?</h3>
      <p>Siber olaylar bazen günler veya aylar süren bir "Keşif" aşamasından sonra gerçekleşir. SIEM, SOME personeline geçmiş aylarda yapılan sızıntı denemelerini "Görselleştirerek" sunar.</p>

      <p><strong>ACKLOG SOME Dashboard:</strong> SOME personeli için özel olarak tasarlanmış arayüzlerle ACKLOG, kurumsal siber risk skorunuzu canlı gösterir. Bir saldırı olduğunda "Yasal Delilleri" 3 saniyede paketleyip USOM'a göndermenizi sağlar. Manuel raporlarla vakit kaybetmeyin, ACKLOG ile güçlü bir SOME timi olun.</p>
    `
  },
  "devlet-arsivleri-dijital-veri-guvenligi-ve-erisim-logu": {
    title: "Devlet Arşivleri Dijital Veri Güvenliği ve Erişim Logu Yönetimi",
    description: "Milli ve tarihi belgelerin dijital kopyalarının korunması, siber casusluğa karşı önlemler.",
    content: `
      <h2>Milli Hafıza: Devlet Arşivlerinin Siber Kalkanı</h2>
      <p>Tarihi belgeler, tapu kayıtları ve stratejik dökümanlar artık dijitalleşti. Bu verilere erişim, ulusal güvenliğin bir bacağıdır. Bir sızma sonucu belgelerin çalınması veya (daha kötüsü) değiştirilmesi büyük bir felaket olur.</p>
      
      <h3>Arşiv Güvenlik Standartları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Immutable Logging:</strong> Kayıtların silinmesini engelleyen (WORM) teknoloji.</li>
        <li><strong>Permission Analytics:</strong> "Kim bu belgeyi görmeye yetkili?" analizlerinin canlı yapılması.</li>
        <li><strong>Full Audit Trail:</strong> Belgeye bakılma, kopyalanma veya yazdırılma kayıtları.</li>
      </ul>

      <p><strong>ACKLOG Archive Protector:</strong> Dijital arşivlerinize yapılan her dokunuşu ACKLOG ile yasal güvenceli şekilde kaydedin. Değerli belgelerin yetkisiz kopyalanmasını anomali algoritmalarıyla yakalayın. Manuel kontroller milli hafızayı koruyamaz, ACKLOG ile mühürleyin.</p>
    `
  },
  "dmo-devlet-malzeme-ofisi-uzerinden-siem-alimi": {
    title: "DMO (Devlet Malzeme Ofisi) Üzerinden SIEM Alımı ve Şartname",
    description: "Kamu kurumlarının hızlı ve güvenli SIEM tedarik süreci, yerli ürün avantajları.",
    content: `
      <h2>Tedarik Kolaylığı: DMO Katalogdan SIEM Alımı</h2>
      <p>Kamu kurumları için satın alma süreci bazen aylar süren karmaşık bir ihale maratonuna dönüşebilir. Oysa siber güvenlikte "Aylar" beklemek, kapıları hırsıza açık bırakmak demektir. DMO üzerinden SIEM alımı, bu süreci haftalara ve hatta günlere indirir.</p>
      
      <h3>Alım Sürecinde Dikkat Edilecekler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Ürünün "Yerli Malı Belgesi"ne sahip olması (Puan ve vergi avantajı).</li>
        <li>DMO kataloğunda "Hızlı Tedarik" kapsamında bulunması.</li>
        <li>Bakım ve destek hizmetlerinin Türkiye genelinde yaygınlığı.</li>
      </ul>

      <p><strong>ACKLOG DMO Katalog:</strong> ACKLOG, DMO (Devlet Malzeme Ofisi) kataloğunda yer alan, kamu kurumlarının güvenle seçebileceği yerli SIEM çözümüdür. İhale süreçleriyle uğraşmadan, DMO üzerinden hızlıca kurumunuzu zırhlayın. Manuel alım süreçlerini otomatiğe bağlayın, ACKLOG ile bugün korunmaya başlayın.</p>
    `
  },
  "kamu-bulut-bilisim-stratejisi-loglama-zorunlulugu": {
    title: "Kamu Bulut Bilişim Stratejisi Loglama Zorunluluğu ve Güvenlik",
    description: "Yerli bulut (Public/Private Cloud) geçiş süreçlerinde yasal log yönetimi ve denetim.",
    content: `
      <h2>Bulut Dönüşümü: Kamu Verisi Nerede Durmalı?</h2>
      <p>T.C. Cumhurbaşkanlığı genelgesi uyarınca kamu verisinin yurt dışı bulutlarında (AWS, Azure vb.) tutulması kısıtlanmış, yerli bulut yatırımları teşvik edilmiştir. Bu bulut altyapılarında da fiziksel sunucularda olduğu gibi loglama zorunluluğu esnemez.</p>
      
      <h3>Bulutta Kamu Loglama Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Verinin fiziksel lokasyonunun Türkiye sınırları içinde olması.</li>
        <li>Bulut yöneticilerinin (Cloud admin) hareketlerinin kurum tarafından denetlenebilmesi.</li>
        <li>Tüm servis loglarının "Centralized" (Merkezi) bir SIEM'e akması.</li>
      </ul>

      <p><strong>ACKLOG Cloud-Local:</strong> Kamu kurumlarına özel hibrit bulut çözümlerinde ACKLOG, verinin hem bulutta hem de merkezde izlenmesini sağlar. Yasal uyumluluğunuzu bulutta da kaybetmeyin. Manuel takip bitti, ACKLOG ile göklerde de güvendesiniz.</p>
    `
  },
  "kurumsal-siber-hijyen-kurallari-kamu-personeli-icin": {
    title: "Kurumsal Siber Hijyen Kuralları: Kamu Personeli İçin Rehber",
    description: "Oltalamadan parola güvenliğine, kamu personelinin uyması gereken temel kurallar.",
    content: `
      <h2>Temiz Dijital Ortam: Siber Hijyen Nedir?</h2>
      <p>Siber hijyen, tıpkı fiziksel hijyen gibi, sistemin sağlığını korumak için personelin yapması gereken basit ama hayati alışkanlıklardır. Devlet dairelerindeki tek bir personelin tıkladığı "Sahte fatura" maili, tüm kurumun kilitlenmesine neden olabilir.</p>
      
      <h3>Temel Hijyen Kuralları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Ortak kullanılan USB belleklerle dosya taşımaktan kaçının.</li>
        <li>Bilgisayar başından kalkarken 'Win+L' ile ekranı mutlaka kilitleyin.</li>
        <li>Kurumsal mail ile alışveriş sitelerine veya sosyal medyaya kaydolmayın.</li>
      </ol>

      <p><strong>ACKLOG Hygiene Check:</strong> Personelinizin siber hijyen kurallarına ne kadar uyduğunu ACKLOG ile görün. "Kaç kişi kilitlenmeyen PC bırakmış?" veya "Kimler USB takmış?" sorularına anında yanıt alın. Manuel eğitimler tek başına yetmez, ACKLOG ile alışkanlıkları veriyle denetleyin.</p>
    `
  },
  "yerel-yonetimlerde-kvkk-ve-veri-sorumlusu-egitimi": {
    title: "Yerel Yönetimlerde KVKK ve Veri Sorumlusu Eğitimi",
    description: "Belediye personeli ve seçilmiş yöneticiler için yasal sorumluluklar ve cezai riskler.",
    content: `
      <h2>Yönetimsel Sorumluluk: Belediyede Kim Sorumlu?</h2>
      <p>Belediyelerde KVKK uyum süreci sadece BT biriminin işi değildir. Belediye Başkanı'ndan veznedara kadar herkes "Veri Sorumlusu" sıfatıyla yasal risk altındadır. Kişisel verilerin ifşa olması durumunda idari para cezalarının yanı sıra adli yaptırımlar da söz konusudur.</p>
      
      <h3>Eğitim ve Denetim Başlıkları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Aydınlatma metinlerinin vatandaşın görebileceği her yerde olması.</li>
        <li>Veri imha politikasının (Eski dilekçeler vb.) uygulanması.</li>
        <li>Siber güvenlik yatırımının (SIEM vb.) "Teknik Tedbir" olarak yapılması.</li>
      </ul>

      <p><strong>ACKLOG Evidence:</strong> Bir sızıntı mahkemeye taşındığında, "Gereken teknik özeni gösterdik" diyebilmenin tek yolu ACKLOG kayıtlarını sunmaktır. Personelin eğitimli olduğunu ama sistemin de 7/24 izlendiğini ispatlayın. Manuel süreçlerle hukuki savunma yapamazsınız, ACKLOG ile yasal zırhınızı kuşanın.</p>
    `
  },
  "milli-isletim-sistemi-pardus-uyumlu-siem-kurulumu": {
    title: "Milli İşletim Sistemi (Pardus) Uyumlu SIEM Kurulumu",
    description: "Pardus sunucularından ve kullanıcı bilgisayarlarından log toplama, merkezi izleme.",
    content: `
      <h2>Tam Yerlilik: Pardus + ACKLOG SIEM</h2>
      <p>Kamuda Pardus kullanımının yaygınlaşmasıyla birlikte, bu milli işletim sistemine uygun siber güvenlik araçlarının ihtiyacı da artmıştır. Pardus üzerindeki sitem hareketlerini (D-Bus, Auth.log vb.) anlamayan bir SIEM ile güvenliği sağlayamazsınız.</p>
      
      <h3>Entegrasyon Adımları</h3>
      <p>Pardus sunucularınıza hafif (Lightweight) ACKLOG ajanlarını kurarak sys-log ve uygulama loglarını saniyeler içinde merkezi dashboarda çekebilirsiniz.</p>

      <p><strong>ACKLOG Pardus Shield:</strong> ACKLOG, milli işletim sistemimiz Pardus ile tam uyumlu çalışan milli bir SIEM'dir. Laboratuvardan sahaya her Pardus makinesini ACKLOG ile izleyin. "Milli sistem, milli koruma!" vizyonuyla siber egemenliğinizi manuel süreçlerden kurtarıp ACKLOG ile otomatiğe bağlayın.</p>
    `
  }
};
