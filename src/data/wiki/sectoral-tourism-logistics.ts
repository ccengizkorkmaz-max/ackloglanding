export const sectoralTourismLogisticsArticles = {
  "otellerde-misafir-internet-loglama-hotspot-rehberi": {
    title: "Otellerde Misafir İnternet Loglama (Hotspot) ve 5651 Yasası",
    description: "Turizm tesislerinde yasal internet paylaşımı, kullanıcı doğrulama ve yasal log yönetim rehberi.",
    content: `
      <h2>Turizm ve Hukuk: Hotspot Neden Önemli?</h2>
      <p>Oteller, misafirlerine ücretsiz internet sunarken aslında büyük bir yasal sorumluluğun altına girerler. Bir misafirin otel Wi-Fi ağı üzerinden yasa dışı bir faaliyet (Hacking, hakaret, terör vb.) yürütmesi durumunda, yasal muhatap otel işletmesidir. Kendinizi aklamanın tek yolu 5651 uyumlu log tutmaktır.</p>
      
      <h3>Loglamada 3 Adım</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Kimlik Doğrulama:</strong> Pasaport no, TC kimlik no veya Oda no ile doğrulama (Radius/Hotspot).</li>
        <li><strong>Zaman Damgası:</strong> Log dosyasının TÜBİTAK/milli zaman sunucusuyla mühürlenmesi.</li>
        <li><strong>İçerik Filtreleme:</strong> Otelin internet hızını ve itibarını korumak için zararlı sitelerin engellenmesi.</li>
      </ul>

      <p><strong>ACKLOG Hotel Hotspot:</strong> ACKLOG, otellerin ihtiyaç duyduğu PMS (Otel yazılımı) entegreli hotspot çözümünü sunar. Misafir odaya girdiği anda interneti aktif olur ve her hareketi yasal güvenceyle loglanır. Manuel excel listeleriyle mahkemede kendinizi savunamazsınız, ACKLOG ile yasal zırhınızı kuşanın.</p>
    `
  },
  "otel-yonetim-sistemleri-pms-guvenligi-ve-erisim-takibi": {
    title: "Otel Yönetim Sistemleri (PMS) Güvenliği ve Erişim Takibi",
    description: "Opera, Fidelio, Amonra gibi PMS yazılımlarının siber saldırılara karşı korunması.",
    content: `
      <h2>Otel Operasyonu: PMS Verilerini Koruyun</h2>
      <p>PMS (Property Management System), bir otelin kalbidir. Müşteri bilgileri, oda rezervasyonları ve en önemlisi ödeme kayıtları burada durur. Bir saldırganın PMS'e sızması, otelin tüm dijital operasyonunu kitleyerek büyük maddi zararlara yol açabilir.</p>
      
      <h3>Kritik İzleme Noktaları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Admin Logon:</strong> PMS yönetici hesaplarına yapılan her erişim.</li>
        <li><strong>Rate Changes:</strong> Oda fiyatlarının yetkisiz kişilerce değiştirilmesi.</li>
        <li><strong>Bulk Data Export:</strong> Müşteri listelerinin Excel olarak indirilmesi.</li>
      </ul>

      <p><strong>ACKLOG PMS Shield:</strong> ACKLOG, otel yönetim sisteminizdeki veritabanı hareketlerini anlık izler. Olağandışı bir veri indirme girişimi olduğunda genel müdüre anlık bildirim gönderir. Manuel kontrollerle sızıntıları durduramazsınız, ACKLOG ile misafir kayıtlarınıza sahip çıkın.</p>
    `
  },
  "turizm-acenteleri-icin-kisisel-veri-guvenligi-rehberi": {
    title: "Turizm Acenteleri İçin Kişisel Veri Güvenliği ve KVKK",
    description: "Seyahat acentelerinin yönettiği yolcu verilerinin güvenliği ve teknik tedbirler listesi.",
    content: `
      <h2>Yolcu Mahremiyeti: Acentelerde KVKK Uyumu</h2>
      <p>Acenteler, müşterilerinin kimlik, iletişim ve hatta bazen pasaport/vize bilgilerine sahiptir. Bu verilerin yurt dışı partnerlerle paylaşımı (Yurt dışı aktarımı) KVKK kapsamında en riskli konulardan biridir. Sadece sözleşme yetmez, verinin aktarım sürecindeki her adım loglanmalıdır.</p>
      
      <h3>Teknik Gereklilikler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>E-posta trafiğinin DLP (Veri Sızıntısı Önleme) ile taranması.</li>
        <li>Rezervasyon sistemlerine erişimlerin merkezi SIEM’de toplanması.</li>
        <li>Eski yolcu kayıtlarının yasal sürede (Purge) silinmesi.</li>
      </ul>

      <p><strong>ACKLOG Agency Guard:</strong> Turizm acentenizdeki veri trafiğini ACKLOG ile mühürleyin. "Hangi personelin hangi yolcu verisine ulaştığını" saniyeler içinde raporlayın. Manuel takip acentenizi yasal cezalardan kurtarmaz, ACKLOG ile profesyonelliğinizi ispatlayın.</p>
    `
  },
  "restoran-zincirlerinde-merkezi-log-toplama-ve-analiz": {
    title: "Restoran Zincirlerinde Merkezi Log Toplama ve Analiz Stratejisi",
    description: "Çok şubeli gıda işletmelerinde ağ güvenliği ve şube-merkez veri senkronizasyonu.",
    content: `
      <h2>Gıda Sektöründe Siber Güvenlik: Şubeleri Unutmayın</h2>
      <p>Restoran zincirlerinde her şubenin bir modem/firewall cihazı ve bir adisyon sistemi vardır. Bir şubeye sızan saldırgan, VPN üzerinden merkeze ve diğer tüm şubelere yayılabilir. Şube güvenliğini sağlamanın tek yolu tüm logları "Merkezi" bir noktada toplamaktır.</p>
      
      <h3>Merkezi Loglamanın Faydaları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Tüm şubelerdeki POS cihazlarının sağlık durumunu izleme.</li>
        <li>Şube internetinin verimli kullanılmasını sağlama (5651 uyumlu).</li>
        <li>Bir siber saldırı dalgasını ilk şubede fark edip diğerlerini koruma.</li>
      </ol>

      <p><strong>ACKLOG Multi-Branch:</strong> ACKLOG, yüzlerce restoran şubesinden gelen logları tek ekranda birleştirir. "Şubede internet koptu mu?" veya "Siber bir sızma mı var?" sorularını merkezden anında görün. Manuel şube denetimi bitti, ACKLOG ile restoran imparatorluğunuzu tek noktadan yönetin.</p>
    `
  },
  "havayolu-sirketleri-yolcu-verisi-guvenligi-ve-pnr-izleme": {
    title: "Havayolu Şirketleri Yolcu Verisi Güvenliği ve PNR İzleme",
    description: "Uçuş sistemleri (PNR), online check-in ve yolcu sadakat verilerinin siber savunması.",
    content: `
      <h2>Gökyüzündeki Veriler: Havayolu Siber Güvenliği</h2>
      <p>Havayolu şirketleri dünyanın en karmaşık IT altyapılarından birine sahiptir. PNR (Passenger Name Record) verileri, siber saldırganlar ve bazen devletler için bile hedef tahtasındadır. Bir uçağın yer operasyonlarından online biletleme sistemine kadar her adım siber zırh altında olmalıdır.</p>
      
      <h3>Hayati İzleme Noktaları</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>GDS Connectivity:</strong> Küresel dağıtım sistemleriyle yapılan veri alışverişinin anormallik analizi.</li>
        <li><strong>Account Hijacking:</strong> Miles programı kullanıcılarının hesap çalınma girişimleri.</li>
        <li><strong>Critical Infrastructures:</strong> Bagaj takip ve check-in kiosklarının ağ trafiği.</li>
      </ul>

      <p><strong>ACKLOG Aviation Guard:</strong> Havayolu operasyonlarınızdaki milyarlarca logu ACKLOG’un devasa işleme gücüyle analiz edin. "Şüpheli uçuş kayıtlarını" veya "Sistem sızmalarını" anlık teşhis edin. Manuel takip uçuş güvenliğini koruyamaz, ACKLOG ile emniyetle uçun.</p>
    `
  },
  "booking-expedia-entegrasyonu-guvenlik-loglari-analizi": {
    title: "Booking/Expedia Entegrasyonu Güvenlik Logları Analizi",
    description: "Kanal yöneticileri (Channel Manager) üzerinden gelen dış veri trafiğinin denetimi.",
    content: `
      <h2>Dış Kaynak Riski: Rezervasyon Kanallarından Sızma Tehdidi</h2>
      <p>Otellerin %80 cirosu Booking.com, Expedia gibi dev kanallardan gelir. Bu kanallarla kurulan API bağlantıları (Channel Manager), kurum içine açılan birer penceredir. Bu pencerelerden içeri sızabilecek zararlı komutlar tüm yerel sisteminizi çökertebilir.</p>
      
      <h3>Güvenlik Denetimi</h3>
      <p>API entegrasyonlarınızdan gelen 'Inbound' trafiği her saniye loglamalı ve standart dışı (Malformed) paketleri anında drop etmelisiniz.</p>

      <p><strong>ACKLOG API Shield:</strong> Rezervasyon kanallarınızdan gelen API trafiğini ACKLOG ile analiz edin. Kanal yöneticisi üzerinden gelebilecek siber riskleri henüz eşikteyken yakalayın. Manuel kontroller bu hıza yetişemez, ACKLOG ile rezervasyon akışınızı mühürleyin.</p>
    `
  },
  "turizm-sektorunde-kredi-karti-pci-uyumlulugu-esasları": {
    title: "Turizm Sektöründe Kredi Kartı (PCI) Uyumluluğu Esasları",
    description: "Otel ve acentelerde kredi kartı bilgilerinin (Mail order vb.) güvenli saklanması ve loglanması.",
    content: `
      <h2>Mail Order Kabusu: Turizmde Kart Güvenliği</h2>
      <p>Turizm sektörü hala yoğun olarak 'Mail Order' ile ödeme almaktadır. Bu durum, kredi kartı bilgilerinin şifresiz formlarda veya mail kutularında durması demektir. PCI-DSS uyumlu olmayan bir otel, büyük bir veri sızıntısı anında milyonlarca dolarlık tazminatla karşılaşabilir.</p>
      
      <h3>PCI-DSS İçin 3 Altın Kural</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Kart numaralarını dökümanların içinde 'Maskelemeden' (Yıldızlamadan) tutmayın.</li>
        <li>Bu verilere erişen her çalışanın logunu (SIEM) en az 1 yıl saklayın.</li>
        <li>Kart verisinin geçtiği ağı (VLAN) diğer ağlardan ayırın.</li>
      </ol>

      <p><strong>ACKLOG PCI Protector:</strong> Otelinizdeki kart verisi içeren tüm sistemleri ACKLOG ile koruma altına alın. Kimin hangi kart datasına baktığını saniyeler içinde raporlayarak PCI ve KVKK denetimlerinden başarıyla geçin. Manuel takip sizi kurtarmaz, ACKLOG ile misafirinizin cüzdanını koruyun.</p>
    `
  },
  "gemi-ve-yat-isletmeciligi-siber-guvenligi-ve-loglama": {
    title: "Gemi ve Yat İşletmeciliği Siber Güvenliği ve Loglama Teknikleri",
    description: "Denizde siber güvenlik! Uydu interneti (V-SAT) ve gemi ağlarının korunması.",
    content: `
      <h2>Denizde Siber Tehdit: Gemiler Neden Risk Altında?</h2>
      <p>Lüks yatlar ve ticari gemiler artık sürekli internete bağlıdır. Uydu interneti (V-SAT) üzerinden yapılan bağlantılar bazen karasal ağlara göre daha savunmasız olabilir. Gemideki navigasyon sistemlerinin (ECDIS) veya makine kontrol sistemlerinin hacklenmesi "Deniz Kazalarına" yol açabilir.</p>
      
      <h3>Denizcilikte Log Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Uydu terminaline yapılan dış erişimlerin takibi.</li>
        <li>Gemi içi misafir Wi-Fi ağının mürettebat ağından izolasyonu.</li>
        <li>Kritik gemi sistemlerinin loglarının kara ofisine senkronize edilmesi.</li>
      </ul>

      <p><strong>ACKLOG Maritime Security:</strong> Geminizdeki tüm siber hareketleri karadaki merkezinizden ACKLOG ile izleyin. "Demirdeki bir gemi neden radyo sessizliğini bozup veri yayıyor?" sorusuna yanıt bulun. Manuel takip yetmez, ACKLOG ile ufkunuz açık, güvenliğiniz tam olsun.</p>
    `
  },
  "otel-kapi-kart-sistemleri-log-izleme-ve-guvenlik": {
    title: "Otel Kapı Kart Sistemleri Log İzleme ve Fiziksel-Siber Korelasyon",
    description: "Kartlı kilit sistemlerinin hacklenmesine karşı önlemler ve erişim denetimi.",
    content: `
      <h2>Giriş Güvenliği: Kapı Kilitleri Siber Saldırılara Açık Mı?</h2>
      <p>Otel odalarının kapı kilitleri genellikle merkezi bir sunucu üzerinden yönetilir. Bir saldırganın bu sunucuya sızarak "Tüm kapıları aç" komutu vermesi veya kilitleri iptal etmesi fiziksel bir hırsızlık felaketine kapı açar.</p>
      
      <h3>Korelasyonun Önemi</h3>
      <p>Fiziksel kilit hareketlerini (Loglarını) SIEM sisteminize dahil ederek, "Yetkisiz bir admin girişi" sonrası yapılan "Anahtar Kopyalama" işlemini anında tespit edebilirsiniz.</p>

      <p><strong>ACKLOG Physical Sync:</strong> Otelinizin dijital güvenliğiyle fiziksel kilit güvenliğini ACKLOG üzerinde birleştirin. Şüpheli anahtar kart üretimi denemelerinde güvenlik ekibine anlık alarm gönderin. Manuel takip odaya girildikten sonra fark edilir, ACKLOG ile girmeden durdurun.</p>
    `
  },
  "turizmde-siber-sigorta-gereksinimleri-ve-siem": {
    title: "Turizmde Siber Sigorta Gereksinimleri ve SIEM Zorunluluğu",
    description: "Otel ve acenteler için siber sigorta poliçesi alırken istenen teknik belgeler.",
    content: `
      <h2>Finansal Korunma: Turizm Şirketleri Neden Siber Sigorta Almalı?</h2>
      <p>Bir veri sızıntısı sonrası misafirlerinizin dava açması, otelin itibarının zedelenmesi ve yasal cezalar milyonlarca liralık bir yük oluşturur. Siber sigorta bu maddi zararı karşılar ama sigorta şirketleri "Kapısını kilitlemeyeni" sigortalamazlar.</p>
      
      <h3>Sigorta Şartnamesindeki 3 Madde</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Log Management:</strong> Tüm logların zaman damgalı tutulması gerekiyor mu? (Evet).</li>
        <li><strong>Intrusion Detection:</strong> Aktif bir sızma tespit sisteminiz (SIEM) var mı? (Gerekli).</li>
        <li><strong>Back-up:</strong> Güncel ve ağdan bağımsız bir yedekleme politikanız var mı?</li>
      </ul>

      <p><strong>ACKLOG Insurance-Ready:</strong> Siber sigorta başvurusu yaparken "SIEM kullanıyoruz" kutucuğunu ACKLOG raporlarıyla doldurun. Sigorta primleriniz düşsün, güvenliğiniz artsın. Manuel süreçlerle sigortacıları ikna edemezsiniz, ACKLOG ile kurumsal güvence kazanın.</p>
    `
  },
  "filo-takip-sistemleri-veri-guvenligi-ve-lojustik-siem": {
    title: "Filo Takip Sistemleri Veri Güvenliği ve Lojistik Siber Savunma",
    description: "Kamyon ve araçlardaki GPS verileri ile sürüş loglarının siber güvenliği.",
    content: `
      <h2>Lojistik Yönetimi: Araçlarınızın Verisi Güvende Mi?</h2>
      <p>Filo takip sistemleri, araçların anlık konumunu, hızını ve yakıt durumunu merkeze iletir. Bu verilerin manipüle edilmesi veya sızdırılması; yük hırsızlığından yakıt yolsuzluğuna kadar pek çok riske davetiye çıkarır.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>GPS Jamming detection:</strong> Sinyalin kasti olarak bozulma girişimleri.</li>
        <li><strong>Unauthorized API access:</strong> Araç verilerini çeken dış uygulamaların denetimi.</li>
        <li><strong>Server availability:</strong> Lojistik merkezinin 7/24 ulaşılamaz hale gelmesi (DDoS).</li>
      </ul>

      <p><strong>ACKLOG Fleet Watcher:</strong> Lojistik ağınızdaki tüm siber akışları ACKLOG ile izleyin. Bir aracın rotasından sapmasını siber bir anomali olarak yakalayın. Manuel kontroller araç durunca fark edilir, ACKLOG ile hareket halindeyken korunur.</p>
    `
  },
  "lojistik-operasyonlarında-siber-risk-yonetimi-bt": {
    title: "Lojistik Operasyonlarında Siber Risk Yönetimi ve IT Stratejisi",
    description: "Tedarik zinciri boyunca oluşabilecek siber kesintilere karşı korunma rehberi.",
    content: `
      <h2>Kesintisiz Tedarik: Lojistik Neden Siber Hedef?</h2>
      <p>Lojistik firmaları, dünya ticaretinin fiziksel bacağıdır. Bir siber saldırı ile lojistik operasyonunun durması demek, rafların boş kalması ve üretim bantlarının durması demektir (JIT - Just In Time riskleri).</p>
      
      <h3>Risk Azaltma Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Sunucuların performans loglarını izleyerek "Yorulma" belirtilerini önceden görün.</li>
        <li>Gümrük sistemleriyle olan bağlantıların siber güvenliğini her an kontrol edin.</li>
        <li>Bölgesel şube-depo internet güvenliğini 5651 uyumlu yapın.</li>
      </ul>

      <p><strong>ACKLOG Logistics Protection:</strong> Lojistik operasyonlarınızdaki her bir dijital adımı ACKLOG ile kaydedin. Bir "Operasyonel Duruş" riski sezildiğinde ACKLOG sizi önceden uyarsın. Manuel risk yönetimi bitti, ACKLOG ile lojistiğiniz her zaman yolda kalsın.</p>
    `
  },
  "liman-isletmeleri-siber-guvenlik-regulasyonlari-u-bot": {
    title: "Liman İşletmeleri Siber Güvenlik Regülasyonları ve Liman-SIEM",
    description: "Liman otomasyon sistemleri (TOS) ve gemi trafiği (VTS) için siber güvenlik şartları.",
    content: `
      <h2>Mavi Vatan Güvenliği: Limanlarda Siber Tehdit Analizi</h2>
      <p>Limanlar, binlerce konteynerin yer değiştirdiği dev otomasyon merkezleridir. TOS (Terminal Operating System) yazılımının hacklenmesi, bir limanı tamamen kör ve işlevsiz bırakabilir. Limanlar, uluslararası denizcilik örgütü (IMO) ve Ulaştırma Bakanlığı kuralları gereği siber kalkanla korunmalıdır.</p>
      
      <h3>Limanlardaki Kritik Sistemler</h3>
      <p>Konteyner vinçlerinin (STS/RTG) uzaktan kontrol sistemleri ve liman sahası içindeki otonom araçların ağ trafiği en yüksek öncelikli izleme alanlarıdır.</p>

      <p><strong>ACKLOG Port Sentinel:</strong> Limanınızdaki tüm otomasyon ve BT loglarını ACKLOG üzerinde birleştirin. Bir siber sabotaj girişimini Vincent vinçlerin üzerindeki bir anomaliyle bile yakalayın. Manuel takip limanı yavaşlatır, ACKLOG ile liman güvenliğinizi ve hızınızı artırın.</p>
    `
  },
  "gumruk-musavirligi-firmalari-icin-kvkk-teknik-tedbirler": {
    title: "Gümrük Müşavirliği Firmaları İçin KVKK Teknik Tedbirler",
    description: "Müşterilerin vergi, beyanname ve kimlik verilerinin korunması, siber arşiv güvenliği.",
    content: `
      <h2>Gümrük Güvenliği: Beyannamelerin Gizliliği</h2>
      <p>Gümrük müşavirleri, firmaların en gizli ticari sırlarına (Ürün maliyetleri, tedarikçi listeleri) sahiptir. Bu verilerin sızması bir "Ticareti Casusluk" boyutuna varabilir. KVKK kapsamında bu verilerin işlenmesi ve saklanması yüksek güvenlik önlemleri gerektirir.</p>
      
      <h3>BT Teknik Tedbirleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li>Gümrük portalı (Tek Pencere vb.) şifrelerinin güvenli tutulması ve login takibi.</li>
        <li>Müşteri dökümanlarının bulunduğu sunucuların erişim loglarının 2 yıl saklanması.</li>
        <li>Personelin yasal sorumluluk aydınlatma metinlerini imzalamış olması.</li>
      </ul>

      <p><strong>ACKLOG Custom Guard:</strong> Gümrük müşavirliği ofisinizdeki veri trafiğini ACKLOG ile mühürleyin. Müşterilerinize "Verileriniz bizimle TÜBİTAK zaman damgalı güvencededir" diyerek değer katın. Manuel arşivleme sizi risklerden korumaz, ACKLOG ile yasal güvenceniz her zaman tam olsun.</p>
    `
  },
  "depo-yonetim-sistemleri-wms-loglama-ve-stok-guvenligi": {
    title: "Depo Yönetim Sistemleri (WMS) Loglama ve Stok Güvenliği",
    description: "WMS üzerindeki stok hareketlerinin takibi, siber hırsızlık ve manipülasyon önleme.",
    content: `
      <h2>Depo Güvenliği: Dijital Stokların Korunması</h2>
      <p>WMS (Warehouse Management System), saniyeler içinde binlerce paletin yer değiştirdiği sistemdir. Bir saldırganın WMS'te "Stoğu var ama yok göstermesi" (veya tam tersi) büyük bir operasyonel kaosa ve fiziksel hırsızlığa neden olabilir.</p>
      
      <h3>Neler İzlenmeli?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Inventory Corrections:</strong> Stok sayısında yapılan manuel ve toplu düzeltmeler.</li>
        <li><strong>Unauthorized Pick Requests:</strong> Adresleme hatalarını kullanarak veri sızma/stok çıkarma girişimleri.</li>
        <li><strong>API Integration with ERP:</strong> ERP ve WMS arasındaki veri senkronizasyon hataları.</li>
      </ul>

      <p><strong>ACKLOG Warehouse Watch:</strong> Depo sistemlerinizdeki her bir hareketi ACKLOG ile kayıt altına alın. Stoklardaki anormallikleri siber bir uyarı olarak görün. Manuel sayımlar vakit kaybettirir, ACKLOG ile stoklarınızın dijital güvenliğini otomatiğe bağlayın.</p>
    `
  },
  "akilli-ulasim-sistemleri-siber-saldiri-tespiti-stratejisi": {
    title: "Akıllı Ulaşım Sistemleri Siber Saldırı Tespiti ve Kamu Güvenliği",
    description: "Trafik ışıkları, tünel kontrol ve ücret toplama sistemlerinin siber savunması.",
    content: `
      <h2>Ulaşım Güvenliği: Kaosu Siber Savunmayla Durdurun</h2>
      <p>Akıllı ulaşım sistemleri (AUS), şehir hayatının akışını sağlar. Trafik ışıklarının bir saldırgan tarafından yönetilmesi veya otoyol tünelindeki havalandırmanın kapatılması can kayıplarına yol açabilir. Bu sistemlerin "Kritik Altyapı" olarak en üst düzeyde korunması gerekir.</p>
      
      <h3>İzlencek Kritik Olaylar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Signal Tampering:</strong> Trafik lambası kontrolcülerine yapılan yetkisiz ağ erişimleri.</li>
        <li><strong>Video Analytics Feed:</strong> Güvenlik kameralarının bağlantı kesintileri ve siber atakları.</li>
        <li><strong>Payment Gateway Logs:</strong> OGS/HGS veya toplu taşıma ödeme sistemlerine yönelik saldırılar.</li>
      </ul>

      <p><strong>ACKLOG Transport Sentinel:</strong> Şehir içi ulaşım sistemlerinizin siber nabzını ACKLOG ile tutun. "Kaos" yaratmak isteyen siber grupları henüz ağınıza dokundukları an yakalayın. Manuel trafik kontrolü bitti, ACKLOG ile şehriniz her zaman güvende akmaya devam etsin.</p>
    `
  },
  "kargo-takip-verilerinin-guvenligi-ve-pazaryeri-loglari": {
    title: "Kargo Takip Verilerinin Güvenliği ve Pazaryeri Log Entegrasyonu",
    description: "Kargo firmaları için paket teslimat verilerinin siber güvenliği ve müşteri mahremiyeti.",
    content: `
      <h2>Teslimat Güvenliği: Kargo Verisi Neden Kritik?</h2>
      <p>Bir kargo takip numarası ile bir kişinin ev adresi, telefon numarası ve alışveriş alışkanlığı öğrenilebilir. Kargo firmaları, binlerce alt acentesiyle beraber devasa bir veri sorumlusudur. Acentelerdeki bilgisayar güvenliği, ana şirketin itibarını doğrudan etkiler.</p>
      
      <h3>Güvenlik Önlemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Acente ekranlarına yapılan tüm sorguların (Query) kullanıcı bazlı loglanması.</li>
        <li>SMS doğrulama olmadan adres bilgilerinin gösterilmemesi ve bunun log kaydı.</li>
        <li>Kargo operasyon PDA cihazlarının ağ trafiği izlemesi.</li>
      </ul>

      <p><strong>ACKLOG Logistics Shield:</strong> Milyonlarca kargo paketinin dijital izini ACKLOG ile güvenli kasanızda tutun. Veri sızıntısı girişimlerini anomali tespitiyle durdurun. Manuel izleme kitleleri koruyamaz, ACKLOG ile kargonuz her zaman adreste kalsın.</p>
    `
  },
  "tedarik-zinciri-siber-guvenlik-denetimi-nasil-yapilir": {
    title: "Tedarik Zinciri Siber Güvenlik Denetimi ve SIEM'in Rolü",
    description: "Satın alma yaptığınız firmaların (Vendor) siber güvenliğini nasıl ölçersiniz?",
    content: `
      <h2>Supply Chain Security: En Zayıf Halka Partneriniz Olmasın</h2>
      <p>Kendi kalenizi çok iyi koruyabilirsiniz ama kapıyı bir partnerinize (Yazılımcı, Bakımcı, Lojistikçi) açtıysanız tehlike içeridedir. "Tedarik Zinciri Saldırıları" günümüzde en yaygın ve en yıkıcı saldırı tipidir.</p>
      
      <h3>Denetleme Listesi</h3>
      <p>Partnerlerinize sağladığınız VPN erişimlerini "Sıfır Güven" (Zero Trust) felsefesiyle izleyin. Onlar için ayırdığınız hesapların yaptığı her hareketi her saniye loglayın.</p>

      <p><strong>ACKLOG Vendor Monitor:</strong> Dışarıdan sisteminize bağlanan partnerlerin hareketlerini ACKLOG üzerinde "Kırmızı Alan" olarak işaretleyin ve daha dikkatli izleyin. Partnerden gelen virüsü henüz yayılmadan ACKLOG ile durdurun. Manuel güven bitti, ACKLOG ile denetim kazanın.</p>
    `
  },
  "lojistik-sektorunde-is-surekliligi-ve-siem-kullanimi": {
    title: "Lojistik Sektöründe İş Sürekliliği (BCM) ve SIEM Kullanımı",
    description: "Lojistik firmalarında 7/24 operasyon sürekliliği için siber izleme stratejileri.",
    content: `
      <h2>7/24 Operasyon: Lojistikte Kesintiye Yer Yok</h2>
      <p>Bir lojistik firmasının sunucularının 4 saat durması, limanda bekleyen gemilerin gecikmesine veya soğuk zincir ürünlerinin bozulmasına neden olabilir. İş sürekliliği (Business Continuity), lojistik için sadece bir belge değil, operasyonun devamıdır.</p>
      
      <h3>SIEM'in Sürekliliğe Katkısı</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Performance Pre-Alerts:</strong> Disk doluluk veya CPU yükünü görüp "Sistem kapanmadan" müdahale etme.</li>
        <li><strong>Cyber Resilience:</strong> Bir saldırı anında sistemleri en kısa sürede (RTO) ayağa kaldırma.</li>
        <li><strong>Root Cause Analysis:</strong> Hatayı hızlı bulup operasyonu devam ettirme.</li>
      </ul>

      <p><strong>ACKLOG Continuity Pack:</strong> Lojistik operasyonunuzun "Dijital Sağlık Durumunu" ACKLOG dashboardlarında canlı izleyin. Krizleri büyümeden söndürün. Manuel takipler yavaşlatır, ACKLOG ile her zaman en hızlı rotada kalın.</p>
    `
  },
  "uluslararasi-tasimacilikta-veri-transferi-guvenligi-gv": {
    title: "Uluslararası Taşımacılıkta Veri Transferi Güvenliği ve Regülasyonlar",
    description: "Ülkeler arası veri paylaşırken uyulması gereken siber güvenlik ve GDPR kuralları.",
    content: `
      <h2>Sınır Ötesi Veri: Global Lojistikte Güvenlik</h2>
      <p>Uluslararası taşımacılık yapan firmalar hem Türkiye'deki KVKK'ya hem de Avrupa Birliği'ndeki GDPR'a uymak zorundadır. Verinin başka bir ülkedeki depoya transferi, yasal olarak en ince ayrıntısına kadar loglanması gereken bir süreçtir.</p>
      
      <h3>Güvenli Transfer Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Transfer edilen verinin şifrelenmiş (encrypted) olması.</li>
        <li>Veriye erişen yabancı lokasyondaki kullanıcıların loglarının merkezde (Türkiye'de) tutulması.</li>
        <li>Verinin sadece "İş Amaçlı" kullanıldığının ispatlanması.</li>
      </ul>

      <p><strong>ACKLOG Global Archive:</strong> Uluslararası tüm veri akışlarınızın loglarını ACKLOG üzerinde Türkiye'deki sunucularınızda güvenle saklayın. Global denetçilere her an hazır raporlar sunun. Manuel kayıtlar global dünyada yetmez, ACKLOG ile sınırları güvenle aşın.</p>
    `
  }
};
