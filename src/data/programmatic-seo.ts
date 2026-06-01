export interface SEOData {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  badge: string;
  content: string;
  faqs: { question: string; answer: string }[];
  features?: string[];
  specs?: { label: string; value: string }[];
}

export const programmaticCities: Record<string, SEOData> = {
  "istanbul-siem-cozumu": {
    title: "İstanbul SIEM ve Log Yönetimi Çözümleri | ACKLOG",
    description: "İstanbul'daki işletmeler ve holdingler için KVKK ve 5651 uyumlu, in-memory performansına sahip yerli SIEM ve loglama çözümleri.",
    badge: "Bölgesel Siber Güvenlik",
    heroTitle: "İstanbul SIEM Çözümleri",
    heroSubtitle: "İstanbul merkezli işletmeler için yüksek performanslı yerli SIEM ve 5651 loglama altyapısı.",
    content: `
      <h2>İstanbul'daki Kurumlar İçin Siber Görünürlük</h2>
      <p>Türkiye'nin finans ve sanayi kalbi olan İstanbul'da faaliyet gösteren şirketler, her gün binlerce siber tehditle karşı karşıya kalmaktadır. ACKLOG, İstanbul'daki holdingler, finans kuruluşları ve KOBİ'ler için donanım maliyetlerini %80 oranında azaltan yeni nesil bir SIEM alternatifi sunar.</p>
      <h3>Neden İstanbul'daki İşletmeler ACKLOG Tercih Ediyor?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Yerinde Destek Avantajı:</strong> İstanbul'daki uzman kadromuz ve iş ortaklarımızla yerinde kurulum ve 7/24 kesintisiz destek hizmeti sunuyoruz.</li>
        <li><strong>Mevzuata Tam Uyum:</strong> KVKK teknik tedbirleri ve 5651 Sayılı Kanun loglama gerekliliklerini kutudan çıktığı anda çözer.</li>
        <li><strong>Yüksek Ölçeklenebilirlik:</strong> Milyonlarca EPS üreten devasa altyapılarda bile donanım darboğazı yaşatmaz.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "İstanbul'da yerinde SOC kurulum desteği veriyor musunuz?", answer: "Evet, ACKLOG teknik ekiplerimiz ve İstanbul'daki yetkili iş ortaklarımızla yerinde analiz, kurulum ve SOC operasyonları yapılandırma desteği sağlıyoruz." },
      { question: "5651 ve KVKK için yerli SIEM kullanmak avantajlı mı?", answer: "Yerli çözümler, Türkiye'deki yasal mevzuatlara ve kurumların Türkçe destek ihtiyaçlarına doğrudan yanıt verdiği için operasyonel riskleri en aza indirir." }
    ],
    features: ["Yerinde Destek & Kurulum", "7/24 SOC Yönetim Desteği", "Esnek ve Yerel Lisanslama"]
  },
  "ankara-siem-cozumu": {
    title: "Ankara SIEM ve Kamu Log Yönetimi Çözümleri | ACKLOG",
    description: "Ankara'daki kamu kurumları, belediyeler ve üniversiteler için DMO uyumlu yerli SIEM ve KVKK/5651 log yönetimi platformu.",
    badge: "Kamu ve Bölgesel Güvenlik",
    heroTitle: "Ankara SIEM Çözümleri",
    heroSubtitle: "Ankara'daki kamu kurumları ve özel sektör için yasal uyumlu yerli SIEM çözümü.",
    content: `
      <h2>Kamu ve Savunma Sanayi Standartlarında Güvenlik</h2>
      <p>Ankara'daki kamu kurumları, savunma sanayii temsilcileri ve stratejik tesisler siber güvenlikte en katı regülasyonlara tabidir. ACKLOG, yerli ve milli bir SIEM olarak, kamu kurumlarının yerli yazılım kullanım şartlarına ve Cumhurbaşkanlığı Bilgi ve İletişim Güvenliği Rehberi kriterlerine tam uyum sağlar.</p>
      <h3>Kamu Kurumları İçin ACKLOG Avantajları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>%100 Yerli Teknoloji:</strong> BTPROSES tarafından geliştirilen yerli SIEM yazılımımız, dışa bağımlılığı ortadan kaldırır.</li>
        <li><strong>TÜBİTAK Zaman Damgası:</strong> 5651 Sayılı Kanun loglarını KamuSM API entegrasyonu ile otomatik imzalar.</li>
        <li><strong>Güvenli Ağ İzolasyonu:</strong> İnternet erişimi olmayan (air-gapped) hassas askeri ve kamu ağlarında sorunsuz çalışır.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Kamu Bilgi Güvenliği Rehberi uyumluluğu var mı?", answer: "Evet, ACKLOG kamu kurumlarının siber güvenlik standartlarına, özellikle Bilgi ve İletişim Güvenliği Rehberi'ndeki loglama maddelerine tam uyumludur." },
      { question: "Ankara'da kamu projelerinde DMO üzerinden alım yapılabilir mi?", answer: "Evet, ürünümüz kamu alımlarına ve devlet teşvikli yerli teknoloji standartlarına uygun olarak tedarik edilebilmektedir." }
    ],
    features: ["Kamu Güvenlik Standartları", "KamuSM Zaman Damgası", "%100 Yerli Sermaye & Teknoloji"]
  },
  "izmir-log-yonetimi": {
    title: "İzmir Log Yönetimi ve Siber Güvenlik Çözümleri | ACKLOG",
    description: "İzmir ve Ege bölgesindeki sanayi kuruluşları, turizm tesisleri ve teknokent firmaları için KVKK uyumlu log yönetimi.",
    badge: "Bölgesel Log Çözümleri",
    heroTitle: "İzmir Log Yönetimi",
    heroSubtitle: "İzmir ve Ege bölgesindeki işletmeler için uygun maliyetli, yasal uyumlu loglama çözümleri.",
    content: `
      <h2>Ege Bölgesinin Sanayi ve Teknoloji Firmalarına Özel Loglama</h2>
      <p>İzmir'deki serbest bölgeler, teknokent firmaları ve üretim tesisleri siber saldırılardan korunurken aynı zamanda KVKK ve 5651 log yönetimi zorunluluklarına uymak zorundadır. ACKLOG, minimum donanım kaynağıyla çalışan hafif yapısıyla İzmirli firmaların bütçesini korur.</p>
      <h3>Öne Çıkan Faydalar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Kolay Yönetim:</strong> Karmaşık menüler yerine siber güvenliği basitleştiren kullanıcı dostu panel.</li>
        <li><strong>Bulut ve Hibrit Seçenekleri:</strong> Sunucu maliyeti olmadan ACKLOG Cloud ile anında log toplamaya başlayın.</li>
        <li><strong>Hızlı Kurulum:</strong> Aynı gün içerisinde log toplama, imzalama ve alarm kurallarını hazır hale getirin.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "İzmir'de Cloud (Bulut) SIEM hizmeti alabilir miyiz?", answer: "Evet, ACKLOG SaaS/Cloud mimarimiz sayesinde İzmir'deki işletmeler sunucu yatırımı yapmadan bulut üzerinden log yönetimi sağlayabilir." }
    ],
    features: ["Bulut & On-Prem Kurulum", "KOBİ Dostu Arayüz", "Hızlı Entegrasyon"]
  },
  "bursa-5651-loglama-cozumu": {
    title: "Bursa 5651 Loglama ve Sanayi SIEM Çözümleri | ACKLOG",
    description: "Bursa'daki otomotiv, tekstil ve sanayi devleri için 5651 Sayılı Kanun uyumlu zaman damgalı log saklama ve siber güvenlik çözümleri.",
    badge: "Sanayi & Mevzuat Uyumu",
    heroTitle: "Bursa 5651 Loglama",
    heroSubtitle: "Bursa'daki üretim ve sanayi tesisleri için değiştirilemez yasal loglama altyapısı.",
    content: `
      <h2>Sanayinin Başkentinde Güvenli Loglama</h2>
      <p>Bursa'daki büyük ölçekli fabrikalar ve sanayi tesisleri, yüzlerce ağ cihazı, endüstriyel kontrol sistemleri (OT/SCADA) ve kullanıcı bilgisayarı barındırır. ACKLOG, Bursa OSB'lerindeki fabrikaların siber görünürlüğünü sağlarken 5651 kanununa uygun zaman damgalı log arşivleme sunar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Fabrika ağlarındaki OT/SCADA loglarını toplayabiliyor musunuz?", answer: "Evet, endüstriyel protokoller ve özel log formatları parser motorumuz sayesinde kolayca normalleştirilebilir." }
    ]
  },
  "kocaeli-kvkk-uyumlu-siem": {
    title: "Kocaeli KVKK Uyumlu SIEM ve Loglama Çözümleri | ACKLOG",
    description: "Kocaeli ve Gebze bölgesindeki sanayi tesisleri, limanlar ve lojistik firmaları için KVKK teknik tedbirleri uyumlu SIEM.",
    badge: "KVKK & Endüstriyel SIEM",
    heroTitle: "Kocaeli KVKK Uyumlu SIEM",
    heroSubtitle: "Kocaeli'deki sanayi ve lojistik firmaları için veri koruma odaklı yerli SIEM platformu.",
    content: `
      <h2>Gebze ve Kocaeli Havzasında KVKK Uyumlu Siber Güvenlik</h2>
      <p>Limanlar, kimya sanayii ve lojistik devlerinin yer aldığı Kocaeli'de, kişisel verilerin korunması kanunu (KVKK) kapsamındaki siber güvenlik yükümlülükleri büyüktür. ACKLOG, kişisel veri içeren logların otomatik maskelenmesi ve yetkisiz erişimlerin engellenmesi konusunda tam koruma sağlar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Lojistik ve liman operasyon sistemleriyle entegrasyon mümkün mü?", answer: "Evet, ACKLOG geniş API entegrasyonu ve custom regex parse yetenekleriyle her sektöre özel sistemlerle entegre olur." }
    ]
  }
};

export const programmaticSectors: Record<string, SEOData> = {
  "bankalar-icin-siem": {
    title: "Bankacılık Sektörü İçin SIEM ve Siber Güvenlik | ACKLOG",
    description: "Finans kuruluşları ve bankalar için BDDK, PCI DSS ve KVKK uyumlu, yüksek performanslı in-memory siber tehdit algılama platformu.",
    badge: "Finans & Bankacılık",
    heroTitle: "Bankalar İçin SIEM",
    heroSubtitle: "Finansal regülasyonlara uyumlu, sıfır gecikmeli siber tehdit algılama çözümü.",
    content: `
      <h2>Bankacılıkta Sıfır Risk, Maksimum Performans</h2>
      <p>Finansal sistemler, siber saldırganların birincil hedefidir. Bankaların saniye başına log hacmi (EPS) yüz binleri bulur. ACKLOG, in-memory korelasyon motoru ve Columnar Database mimarisiyle bankacılık sektöründeki yüksek veri hacmini düşük maliyetlerle yönetir.</p>
      <h3>Finansal Uyum Yeteneklerimiz</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>BDDK Düzenlemelerine Uyum:</strong> Logların değiştirilemez olarak saklanması ve şüpheli hesap hareketlerinin anlık tespiti.</li>
        <li><strong>PCI DSS Kart Güvenliği Standartları:</strong> Ödeme sistemleri loglarının izlenmesi ve yetkisiz veri sızıntılarının durdurulması.</li>
        <li><strong>Gelişmiş UEBA:</strong> Banka personelinin veya dış kaynak kullanıcılarının olağan dışı veri erişim profillerinin çıkarılması.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "BDDK loglama gereksinimlerini karşılıyor mu?", answer: "Evet, BDDK'nın finansal altyapılar için zorunlu kıldığı detaylı kullanıcı audit logları ve zaman damgası standartlarını karşılar." }
    ],
    features: ["BDDK Mevzuat Uyumluluğu", "PCI DSS Raporlama Setleri", "Columnar Database Performansı"]
  },
  "belediyeler-icin-siem": {
    title: "Belediyeler ve Yerel Yönetimler İçin Yerli SIEM | ACKLOG",
    description: "Yerel yönetimler ve belediyeler için 5651 Sayılı Kanun log yükümlülüğü ve KVKK uyumlu uygun maliyetli SIEM sistemi.",
    badge: "Kamu & Yerel Yönetimler",
    heroTitle: "Belediyeler İçin SIEM",
    heroSubtitle: "Vatandaş verisi güvenliği ve 5651 loglama yükümlülüklerinde belediyelere özel bütçe dostu SIEM.",
    content: `
      <h2>Yerel Yönetimlerde Siber Güvenlik ve Vatandaş Verisi Koruması</h2>
      <p>Belediyeler, hem geniş bir ağ altyapısına sahiptir hem de binlerce vatandaşın kişisel verilerini işler. Bu durum KVKK yükümlülüğünü kritik hale getirir. Ayrıca ücretsiz sunulan belediye Wi-Fi ağlarının logları 5651 Sayılı Kanun uyarınca zaman damgasıyla saklanmalıdır. ACKLOG, belediye bütçelerine uygun lisanslama modelleriyle tüm bunları tek panelde çözer.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Ücretsiz belediye Wi-Fi logları KamuSM ile nasıl imzalanıyor?", answer: "ACKLOG, Wi-Fi gateway sistemlerinden gelen logları otomatik olarak derler ve KamuSM (TÜBİTAK) zaman damgasıyla mühürleyerek yasal süre boyunca saklar." }
    ]
  },
  "oteller-icin-5651-loglama": {
    title: "Oteller İçin 5651 Loglama ve Misafir İnternet Güvenliği | ACKLOG",
    description: "Turizm tesisleri ve oteller için misafir Wi-Fi loglarının 5651 kanununa uygun KamuSM zaman damgasıyla saklanması ve log yönetimi çözümü.",
    badge: "Turizm & Konaklama",
    heroTitle: "Oteller İçin 5651 Loglama",
    heroSubtitle: "Misafir Wi-Fi ağları için yasal 5651 imzalama ve KVKK veri güvenliği çözümleri.",
    content: `
      <h2>Otel ve Turizm Tesislerinde Yasal İnternet Loglama</h2>
      <p>Oteller, misafirlerine sundukları internet erişiminin loglarını 5651 Sayılı Kanun uyarınca kayıt altına almakla yükümlüdür. Olası bir siber suçta, suçun işlendiği IP ve MAC adresinin tespiti yasal olarak şarttır. ACKLOG Otel paketi, hotspot entegrasyonuyla misafirlerin T.C. Kimlik / SMS doğrulama loglarını otomatik imzalar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "T.C. Kimlik veya SMS doğrulama sistemleriyle entegre mi?", answer: "Evet, ACKLOG popüler otel PMS sistemleri ve SMS gateway sağlayıcıları ile entegre çalışarak doğrulama loglarını da zaman damgalar." }
    ]
  },
  "universiteler-icin-siem": {
    title: "Üniversiteler ve Eğitim Kurumları İçin SIEM Çözümleri | ACKLOG",
    description: "Kampüs içi binlerce öğrencinin internet loglarının 5651 uyumlu saklanması ve akademik ağların siber saldırılardan korunması.",
    badge: "Eğitim & Kampüs Güvenliği",
    heroTitle: "Üniversiteler İçin SIEM",
    heroSubtitle: "Geniş öğrenci ağları için yüksek EPS kapasiteli ve uygun maliyetli yerli SIEM.",
    content: `
      <h2>Akademik Ağlarda Siber Görünürlük ve Yasal Loglama</h2>
      <p>Üniversite kampüsleri, binlerce öğrenci ve akademisyenin ortak kullandığı yüksek bant genişliğine sahip ağlardır. Bu ağlarda oluşan log hacmi devasadır. ACKLOG, Big Data mimarisi ile milyonlarca logu donanım darboğazı oluşturmadan işler ve 5651 mevzuatına uygun şekilde zaman damgalar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Öğrenci eduroam veya yerel Wi-Fi loglarını toplayabiliyor musunuz?", answer: "Evet, eduroam ve benzeri radius logları ACKLOG parser motoruyla çözümlenerek yasal saklama sürecine dahil edilir." }
    ]
  },
  "hastaneler-icin-kvkk-log-yonetimi": {
    title: "Hastaneler İçin KVKK Sağlık Verisi Log Yönetimi | ACKLOG",
    description: "Sağlık kuruluşları ve hastaneler için özel nitelikli kişisel sağlık verilerinin (KVKK) korunması ve erişim denetimi loglama platformu.",
    badge: "Sağlık Sektörü",
    heroTitle: "Hastaneler İçin KVKK SIEM",
    heroSubtitle: "Özel nitelikli sağlık verilerine erişimin denetlenmesi ve KVKK teknik tedbirleri uyumluluğu.",
    content: `
      <h2>Sağlık Kuruluşlarında Hasta Verisi Güvenliği</h2>
      <p>Sağlık verileri, KVKK kapsamında \"Özel Nitelikli Kişisel Veri\" olarak sınıflandırılır ve sızıntı durumunda çok ağır idari para cezaları uygulanır. Hastaneler, HBYS (Hastane Bilgi Yönetim Sistemi) ve tıbbi cihaz veri erişim loglarını sıkı kontrol altında tutmalıdır. ACKLOG, bu verilere yönelik anormal erişimleri anında yakalar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "HBYS veritabanı erişimlerini denetleyebiliyor muyuz?", answer: "Evet, ACKLOG SQL server audit, Oracle audit veya PostgreSQL loglarını toplayarak hastane veritabanı sorgularını izler." }
    ]
  },
  "fabrikalar-icin-ot-it-log-yonetimi": {
    title: "Fabrikalar İçin OT/IT Siber Güvenlik ve Log Yönetimi | ACKLOG",
    description: "Endüstriyel üretim tesisleri için IT (Bilgi Teknolojileri) ve OT (Operasyonel Teknolojiler/SCADA) loglarının birleşik izlenmesi.",
    badge: "Sanayi & Endüstri 4.0",
    heroTitle: "Fabrikalar İçin OT/IT SIEM",
    heroSubtitle: "Üretim hatlarının güvenliği, siber sabotaj tespiti ve endüstriyel loglama.",
    content: `
      <h2>Endüstriyel Üretim Tesislerinde Siber Güvenlik</h2>
      <p>Fabrikalarda sadece ofis bilgisayarlarının (IT) değil, üretim bantlarını yöneten PLC, RTU ve SCADA (OT) sistemlerinin de siber saldırılardan korunması gerekir. Üretim durmasının maliyeti milyonlarca dolardır. ACKLOG, IT ve OT dünyasını tek bir Birleşik Güvenlik Operasyonları (USO) platformunda birleştirerek siber sabotaj tehditlerini durdurur.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Modbus veya OPC UA gibi endüstriyel logları parse edebiliyor musunuz?", answer: "Evet, ACKLOG gelişmiş parser kütüphanesi sayesinde endüstriyel otomasyon loglarını da sisteme dahil edebilir." }
    ]
  }
};

export const programmaticRegulations: Record<string, SEOData> = {
  "5651-uyumlu-log-yonetimi": {
    title: "5651 Sayılı Kanun Uyumlu Log Yönetim Çözümleri | ACKLOG",
    description: "İnternet toplu kullanım sağlayıcıları için logların zaman damgasıyla (KamuSM/TÜBİTAK) değiştirilemez saklanması rehberi.",
    badge: "Yasal Mevzuat",
    heroTitle: "5651 Uyumlu Log Yönetimi",
    heroSubtitle: "5651 Sayılı İnternet Yasası loglama zorunluluğunda KamuSM entegrasyonuyla tam hukuki koruma.",
    content: `
      <h2>5651 Sayılı Kanun Nedir ve Ne Gerektirir?</h2>
      <p>5651 Sayılı Kanun, internet ortamında yapılan yayınların düzenlenmesi ve bu yayınlar yoluyla işlenen suçlarla mücadele edilmesini amaçlar. İşletmeler, misafirlerine veya çalışanlarına sundukları internet erişim kayıtlarını (IP, port, MAC, zaman damgası) en az 2 yıl saklamak zorundadır.</p>
      <h3>ACKLOG 5651 Çözüm Paketi Özellikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>TÜBİTAK KamuSM Entegrasyonu:</strong> Yasal zaman damgası mühürleme işlemlerini arka planda otomatik yürütür.</li>
        <li><strong>DHCP ve NAT Eşleştirme:</strong> İç ağdaki kullanıcıların hangi dış IP ve porttan çıkış yaptığını saniyeler içinde analiz eder.</li>
        <li><strong>Değiştirilemezlik İspatı:</strong> Mühürlü logların bütünlüğü yasal denetimlerde tek tıkla ispatlanır.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "5651 imzalı logları nerede depoluyoruz?", answer: "Kendi sunucunuzda (On-premise) veya ACKLOG'un şifreli yerel bulut disklerinde tamamen güvenli bir şekilde saklayabilirsiniz." }
    ]
  },
  "kvkk-teknik-tedbirler-siem": {
    title: "KVKK Teknik Tedbirler SIEM ve Log Analizi Uyumluluğu | ACKLOG",
    description: "Kişisel Verilerin Korunması Kanunu (KVKK) teknik tedbirler kılavuzuna uyum için yerli SIEM ve kullanıcı erişim denetimi çözümü.",
    badge: "Veri Koruma Kanunu",
    heroTitle: "KVKK Teknik Tedbirler SIEM",
    heroSubtitle: "Kişisel verilere erişimin denetlenmesi, siber sızıntı tespiti ve KVKK log takibi.",
    content: `
      <h2>KVKK Kılavuzu Kapsamında SIEM Rolü</h2>
      <p>KVKK Kurumu tarafından yayınlanan Teknik Tedbirler Kılavuzu'nda; siber tehditlerin tespiti, log kayıtlarının saklanması, yetkisiz erişimlerin izlenmesi gibi teknik gereksinimler bulunmaktadır. ACKLOG, KVKK uyumluluğu için tüm bu süreçleri tek bir platformda çözmektedir.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Veri maskeleme KVKK için neden önemlidir?", answer: "Veritabanından sızan loglarda kişisel verilerin (T.C. No, şifre) açık görünmesini engelleyerek veri ihlali risklerini ortadan kaldırır." }
    ]
  },
  "iso-27001-log-yonetimi": {
    title: "ISO 27001 Bilgi Güvenliği Standartları ve Log Yönetimi | ACKLOG",
    description: "ISO 27001:2022 bilgi güvenliği yönetim sistemi sertifikasyonu için zorunlu log izleme ve olay yönetimi kriterleri.",
    badge: "Global Standartlar",
    heroTitle: "ISO 27001 Log Yönetimi",
    heroSubtitle: "Bilgi Güvenliği Yönetim Sistemi (BGYS) denetimlerinde tam uyumlu loglama altyapısı.",
    content: `
      <h2>ISO 27001 Denetimlerine SIEM Desteği</h2>
      <p>ISO 27001 standardı, kurumların bilgi güvenliği risklerini yönetmesini gerektirir. Annex A (Ek A) kontrolleri içerisinde yer alan \"Olay Günlüğünün İzlenmesi\" ve \"Yönetici ve Kullanıcı Hareketlerinin Loglanması\" maddeleri ACKLOG ile kolayca raporlanabilir hale gelir.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "ISO 27001 denetimleri için özel rapor şablonları var mı?", answer: "Evet, ACKLOG içerisinde ISO 27001 denetçilerinin talep ettiği kullanıcı erişimleri, yetki değişiklikleri ve başarısız giriş denemeleri raporları hazırdır." }
    ]
  },
  "pci-dss-siem": {
    title: "PCI DSS Ödeme Kartları Güvenliği ve Log İzleme | ACKLOG",
    description: "Kredi kartı kabul eden kurumlar için PCI DSS standardına uyumlu 10. Bölüm log takibi ve tehdit algılama çözümleri.",
    badge: "Finansal Güvenlik",
    heroTitle: "PCI DSS SIEM Çözümleri",
    heroSubtitle: "Ödeme sistemleri ağlarında yasal izleme, veri sızıntısı tespiti ve PCI DSS 10. Bölüm uyumluluğu.",
    content: `
      <h2>PCI DSS Gereksinimi 10 ve ACKLOG Entegrasyonu</h2>
      <p>Kartlı ödeme sistemleri güvenliği standardı (PCI DSS), kart verilerinin işlendiği ortamlardaki tüm ağ erişimlerinin günlük olarak izlenmesini ve analiz edilmesini (Gereksinim 10) şart koşar. ACKLOG, ödeme terminalleri (POS) ve gateway loglarını anlık olarak izleyerek ihlalleri engeller.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "PCI DSS log saklama süresi ne kadardır?", answer: "PCI DSS uyarınca logların en az 3 ayı online (anlık sorgulanabilir) olmak üzere en az 1 yıl boyunca saklanması zorunludur." }
    ]
  },
  "bddk-siem-gereksinimleri": {
    title: "BDDK Bilgi Sistemleri Yönetmeliği ve SIEM Altyapısı | ACKLOG",
    description: "Finansal kiralama, faktoring ve bankacılık kuruluşları için BDDK bilgi sistemleri denetimine uyumlu log ve alarm yönetimi.",
    badge: "BDDK Mevzuatı",
    heroTitle: "BDDK SIEM Gereksinimleri",
    heroSubtitle: "Finans dışı ödeme kuruluşları ve bankacılık regülasyonlarına tam uyumlu yerli SIEM çözümü.",
    content: `
      <h2>BDDK Denetimleri İçin Yerli SIEM Çözümü</h2>
      <p>Bankacılık Düzenleme ve Denetleme Kurulu (BDDK), finansal kuruluşların tüm operasyonel loglarını, yetki yükseltmelerini ve admin hareketlerini izlemesini zorunlu kılar. ACKLOG, BDDK denetçilerinin talep ettiği detaylı siber olay kayıtlarını ve alarm korelasyonlarını eksiksiz sağlar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Admin yetki değişikliklerini anlık alarm olarak gönderebiliyor muyuz?", answer: "Evet, Active Directory veya Linux sunucularda yetki yükselten (privilege escalation) kullanıcılar algılandığında anlık SMS/E-posta veya SOAR alarmı tetiklenir." }
    ]
  }
};

export const programmaticComparisons: Record<string, SEOData> = {
  "qradar-alternatifi": {
    title: "En İyi QRadar Alternatifi: Neden ACKLOG SIEM? | ACKLOG",
    description: "IBM QRadar'ın yüksek lisans, donanım ve EPS kota maliyetlerinden kurtulmak isteyen kurumlar için yerli ve in-memory SIEM alternatifi.",
    badge: "Rakip Analizi & Alternatif",
    heroTitle: "QRadar Alternatifi Yerli SIEM",
    heroSubtitle: "QRadar'ın yüksek donanım ve EPS kısıtlamalarına karşı esnek lisanslı ve 5 kat daha hafif yerli alternatif.",
    content: `
      <h2>QRadar Toplam Sahip Olma Maliyetini (TCO) Düşürün</h2>
      <p>IBM QRadar güçlü bir araçtır, ancak yüksek lisans ücretleri, donanım kaynak tüketimi (CPU/RAM) ve karmaşık kural yazım süreçleri Türkiye'deki orta ve büyük ölçekli kurumlar için yönetilmesi zor bütçeler oluşturur. ACKLOG, QRadar'ın ihtiyaç duyduğu sunucu gücünün sadece %20'si ile aynı EPS değerlerini işleyebilir.</p>
      <h3>Karşılaştırma Noktaları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>EPS Sınırı Yok:</strong> QRadar'da EPS aşıldığında loglar düşer veya ek fatura gelir. ACKLOG, donanım kapasiteniz ölçüsünde limitsiz EPS ile çalışır.</li>
        <li><strong>Sıkıştırma Teknolojisi:</strong> QRadar devasa disk alanları talep ederken, ACKLOG patentli columnar veri tabanı yapısıyla logları %80 daha az disk alanında saklar.</li>
        <li><strong>SOAR & UEBA Entegre:</strong> QRadar'da ek modül olarak satılan SOAR ve UEBA yetenekleri ACKLOG'da yerleşik olarak tek lisansla sunulur.</li>
      </ul>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "QRadar'daki mevcut korelasyon kurallarımızı ACKLOG'a aktarabilir miyiz?", answer: "Evet, QRadar kurallarını (AQL/rules) analiz ederek ACKLOG korelasyon motoruna kayıpsız bir şekilde göç (migration) ediyoruz." },
      { question: "Yerli desteğin avantajı nedir?", answer: "Döviz bazlı yüksek bakım (maintenance) maliyetleri yerine Türk mühendislerinden doğrudan ve uygun maliyetli 7/24 destek alırsınız." }
    ]
  },
  "splunk-alternatifi": {
    title: "Splunk Alternatifi: Data Cap Limiti Olmayan SIEM | ACKLOG",
    description: "Splunk'ın günlük veri boyutu (GB/gün) lisanslama modeline karşı limitsiz veri işleyen, bütçe dostu yerli SIEM çözümü.",
    badge: "Rakip Analizi",
    heroTitle: "Splunk Alternatifi ACKLOG",
    heroSubtitle: "Splunk'ın astronomik veri işleme maliyetlerine son verin. Sınırsız log analizine geçin.",
    content: `
      <h2>Splunk Veri Kotası (Data Cap) Engellerini Aşın</h2>
      <p>Splunk, log analizi için dünya liderlerinden biridir fakat günlük gigabayt bazlı lisanslama modeli nedeniyle şirketler \"Hangi logları toplamasak da faturayı düşürsek?\" endişesi yaşar. Bu durum güvenlik zafiyeti yaratır. ACKLOG ile günlük veri sınırı olmadan tüm ağ ve sunucu loglarınızı güvenle toplayıp analiz edebilirsiniz.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Splunk'ın ücretsiz versiyon kısıtlamaları nelerdir?", answer: "Splunk Free günlük 500 MB limit ile çalışır ve korelasyon, alarm, rol yetkilendirmesi gibi güvenlik özelliklerini barındırmaz." }
    ]
  },
  "logsign-alternatifi": {
    title: "Logsign Alternatifi ve Karşılaştırması | ACKLOG",
    description: "Yerli SIEM arayışınızda Logsign alternatifi olarak ACKLOG'un Big Data mimarisi, in-memory performansı ve modern arayüz farkı.",
    badge: "Yerli Alternatif Analizi",
    heroTitle: "Logsign Alternatifi SIEM",
    heroSubtitle: "Eski nesil veri saklama yapıları yerine in-memory ve Columnar mimariyle çalışan yerli SIEM.",
    content: `
      <h2>Yerli SIEM Seçiminde ACKLOG ve Logsign Kıyaslaması</h2>
      <p>Logsign, Türkiye pazarında bilinen yerli loglama araçlarından biridir. Ancak kullanıcılar, yüksek log hacimlerinde arayüzün yavaşlaması ve korelasyon motorunun asenkron çalışmasından şikayetçi olabilmektedir. ACKLOG, in-memory stream korelasyon mimarisi sayesinde logları anında analiz eder ve arayüzde donma yaşatmaz.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "ACKLOG'un Logsign'dan temel mimari farkı nedir?", answer: "ACKLOG, in-memory CEP (Complex Event Processing) motoru ve Elasticsearch yerine ClickHouse tabanlı Columnar veri tabanı kullandığı için sorgu ve depolamada 5 kat daha performanslıdır." }
    ]
  },
  "wazuh-vs-acklog": {
    title: "Wazuh vs ACKLOG SIEM Karşılaştırması | ACKLOG",
    description: "Açık kaynaklı Wazuh XDR/SIEM yazılımı ile profesyonel destek, KamuSM zaman damgası ve SOAR yeteneklerine sahip yerli ACKLOG karşılaştırması.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Wazuh vs ACKLOG SIEM",
    heroSubtitle: "Açık kaynak dünyasının zorluklarına karşı hazır yasal uyumluluk ve Türkçe destek gücü.",
    content: `
      <h2>Açık Kaynak Kodlu SIEM'lerin Gizli Maliyetleri</h2>
      <p>Wazuh, popüler bir açık kaynak kodlu SIEM/XDR çözümüdür. Lisans ücreti olmaması cazip görünse de, 5651 Sayılı Kanun zaman damgası entegrasyonu, Türkçe raporlama şablonları, yerel firewall log parser'ları ve 7/24 profesyonel teknik destek ihtiyacı işletmelere gizli insan kaynağı maliyetleri çıkarır. ACKLOG, tüm bunları kutudan çıktığı anda hazır sunar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Wazuh ile 5651 zaman damgası yapmak mümkün mü?", answer: "Wazuh'ta KamuSM zaman damgası yerleşik gelmez; bunu yapmak için harici scriptler yazmanız ve bunları sürekli güncel tutmanız gerekir. ACKLOG'da ise bu özellik yerleşiktir." }
    ]
  },
  "qradar-vs-acklog": {
    title: "IBM QRadar vs ACKLOG Detaylı Karşılaştırma | ACKLOG",
    description: "QRadar ile ACKLOG arasındaki lisanslama, donanım kaynak tüketimi ve Türkiye mevzuat uyumluluğu farklarının teknik analizi.",
    badge: "Teknik Kıyaslama",
    heroTitle: "QRadar vs ACKLOG",
    heroSubtitle: "Global siber güvenlik devinin karşısında yerli, dinamik ve bütçe dostu siber güç.",
    content: `
      <h2>Global Ölçek vs Yerel Hukuki Uyumluluk</h2>
      <p>IBM QRadar global düzeyde güçlü bir SIEM ve SOC aracıdır. Ancak Türkiye pazarındaki KVKK ve 5651 gibi yerel regülasyonlar için ek entegrasyonlar gerektirir. ACKLOG, hem global tehdit algılama standartlarını (MITRE ATT&CK) destekler hem de Türkiye yasalarına %100 uyumludur.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "QRadar sunucu kaynağı ihtiyacı neden bu kadar yüksek?", answer: "QRadar, verileri indekslemek ve korelasyon yapmak için Java tabanlı ağır arka plan servisleri kullanır. ACKLOG ise C++ ve Go dilleriyle yazılmış optimize in-memory mimariye sahip olduğu için kaynak tüketimi çok düşüktür." }
    ]
  },
  "splunk-vs-acklog": {
    title: "Splunk vs ACKLOG Karşılaştırmalı Analizi | ACKLOG",
    description: "Splunk log analizi ile ACKLOG SIEM & USO platformunun veri saklama maliyetleri ve arama hızları açısından kıyaslama raporu.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Splunk vs ACKLOG",
    heroSubtitle: "Veri depolama ve sorgulama teknolojilerinde yeni nesil mimari kıyaslaması.",
    content: `
      <h2>Depolama ve Sorgu Hızında Teknoloji Kıyası</h2>
      <p>Splunk devasa log aramalarında yüksek performans sunar fakat yıllık veri saklama maliyetleri bütçeleri zorlar. ACKLOG, Columnar Database teknolojisi sayesinde Splunk'ın veri depolama verimliliğini egale ederken yerel lisanslama avantajı sunar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Splunk lisans modeli nasıldır?", answer: "Splunk genellikle günlük indekslenen veri miktarı (GB/Gün) üzerinden lisanslanır ve bu durum kontrolsüz log artışlarında ek maliyetler doğurur." }
    ]
  },
  "elastic-siem-vs-acklog": {
    title: "Elastic SIEM (ELK) vs ACKLOG Karşılaştırması | ACKLOG",
    description: "Elasticsearch tabanlı siber güvenlik çözümleri ile in-memory Complex Event Processing (CEP) motoruna sahip ACKLOG farkları.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Elastic SIEM vs ACKLOG",
    heroSubtitle: "ELK Stack'in yönetim zorluklarına karşı her şey dahil profesyonel SIEM platformu.",
    content: `
      <h2>ELK Kurulum ve Yönetim Zorluklarını Geride Bırakın</h2>
      <p>Açık kaynak ELK (Elasticsearch, Logstash, Kibana) ile SIEM kurmak cazip görünür. Ancak Logstash konfigürasyonlarının karmaşıklığı, veri boyutu arttıkça Elasticsearch disk indekslerinin şişmesi ve çökmeler BT ekiplerini yorar. ACKLOG, hazır parser motoru ve stabil veri tabanı yapısıyla bu sorunları tamamen ortadan kaldırır.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Elastic SIEM'in donanım tüketimi neden fazladır?", answer: "Elasticsearch, metin araması için her kelimeyi ters indeks (inverted index) olarak saklar. Bu da veri boyutunun diskte 3-4 kat şişmesine yol açar." }
    ]
  },
  "microsoft-sentinel-vs-acklog": {
    title: "Microsoft Sentinel vs ACKLOG SIEM Karşılaştırması | ACKLOG",
    description: "Bulut tabanlı Microsoft Sentinel'in veri çekme ve saklama maliyetlerine karşı yerli bulut ve on-premise ACKLOG kıyaslaması.",
    badge: "Bulut SIEM Kıyaslaması",
    heroTitle: "Microsoft Sentinel vs ACKLOG",
    heroSubtitle: "Azure dışındaki log kaynaklarının Sentinel'e aktarımındaki yüksek faturalara yerli ve hibrit çözüm.",
    content: `
      <h2>Sentinel Bulut Maliyetlerinizi Optimize Edin</h2>
      <p>Microsoft Azure Sentinel bulut üzerinde harika çalışır fakat Azure dışındaki firewall, switch, on-prem sunucu loglarını buluta taşırken ödeyeceğiniz bant genişliği (egress/ingress) ve veri işleme faturaları sürpriz maliyetler oluşturur. ACKLOG, yerel bulut veya şirket içi (on-premise) konumlandırma seçeneğiyle bütçenizi korur.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "ACKLOG hibrit çalışmayı destekliyor mu?", answer: "Evet, ACKLOG hem lokal ağınızdaki logları on-prem toplar hem de bulut sistemlerinizle (AWS, Azure) entegre olarak hibrit bir siber izleme sağlar." }
    ]
  }
};

export const programmaticIntegrations: Record<string, SEOData> = {
  "fortinet-log-yonetimi": {
    title: "Fortinet FortiGate Log Yönetimi ve Entegrasyonu | ACKLOG",
    description: "FortiGate firewall cihazlarından Syslog üzerinden log toplama, parse etme ve yasal 5651 zaman damgasıyla imzalama rehberi.",
    badge: "Cihaz Entegrasyonu",
    heroTitle: "Fortinet Log Yönetimi",
    heroSubtitle: "FortiGate firewall loglarının otomatik çözümlenmesi, alarm korelasyonu ve 5651 imzalaması.",
    content: `
      <h2>FortiGate Cihazları İçin Hazır Parser Altyapısı</h2>
      <p>Fortinet firewall'lar Türkiye siber güvenlik pazarında en yaygın kullanılan güvenlik duvarlarıdır. ACKLOG, FortiGate syslog formatlarını anlık olarak parse eden hazır kurallarla gelir. Loglar içindeki NAT, DHCP, Web Filtre ve VPN kayıtları otomatik olarak ayrıştırılır.</p>
      <h3>Entegrasyon Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>FortiGate arayüzünden Syslog IP'si olarak ACKLOG sunucu IP'si tanımlanır (Port 514).</li>
        <li>ACKLOG, gelen log akışını otomatik algılar ve Fortinet şablonuyla normalleştirir.</li>
        <li>Kullanıcı hareketleri anlık korelasyon kurallarından (örneğin IPS alarmları, engellenen siteler) geçirilir.</li>
        <li>Ağ erişim logları 5651 Sayılı Kanun gereği KamuSM zaman damgasıyla mühürlenir.</li>
      </ol>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "FortiGate web filtreleme loglarında kişisel veriler maskelenebilir mi?", answer: "Evet, loglar içindeki kullanıcı kimlik verileri ve URL parametreleri regex kuralları ile otomatik olarak maskelenerek saklanır." }
    ],
    features: ["Hazır FortiGate Parser", "NAT/DHCP Otomatik Eşleştirme", "5651 Zaman Damgası Mühürleme"]
  },
  "palo-alto-siem-entegrasyonu": {
    title: "Palo Alto Networks SIEM Entegrasyonu | ACKLOG",
    description: "Palo Alto Next-Generation Firewall loglarının ACKLOG SIEM platformuyla entegrasyonu ve tehdit analizi.",
    badge: "Cihaz Entegrasyonu",
    heroTitle: "Palo Alto Entegrasyonu",
    heroSubtitle: "Palo Alto NGFW loglarının yüksek performanslı analizi ve MITRE ATT&CK alarm korelasyonu.",
    content: `
      <h2>Palo Alto Loglarının Derinlemesine Çözümlenmesi</h2>
      <p>Palo Alto NGFW cihazlarının ürettiği detaylı trafik ve tehdit (threat) logları, siber saldırıların tespitinde kritik rol oynar. ACKLOG, Palo Alto'nun syslog formatındaki loglarını yüksek hızda parse eder ve MITRE ATT&CK tehdit matrisindeki tekniklerle eşleştirerek SOC ekiplerine anlık bildirim gönderir.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Palo Alto WildFire kum havuzu (sandbox) alarmları entegre edilebilir mi?", answer: "Evet, WildFire tarafından üretilen zararlı yazılım alarmları syslog üzerinden ACKLOG'a aktarılarak SOAR senaryolarını tetikleyebilir." }
    ]
  },
  "sophos-log-analizi": {
    title: "Sophos UTM / XG Firewall Log Analizi | ACKLOG",
    description: "Sophos XG Firewall cihazlarından log toplama, kullanıcı VPN hareketlerinin izlenmesi ve 5651 yasal arşivlemesi.",
    badge: "Cihaz Entegrasyonu",
    heroTitle: "Sophos Log Analizi",
    heroSubtitle: "Sophos firewall loglarının toplanması, VPN denetimi ve yasal imzalama altyapısı.",
    content: `
      <h2>Sophos Logları ile VPN ve Trafik Takibi</h2>
      <p>Sophos güvenlik duvarları üzerinden ağa bağlanan kullanıcıların (SSL-VPN) ve iç trafik hareketlerinin izlenmesi hem KVKK hem de güvenlik açısından zorunludur. ACKLOG, Sophos loglarını parse ederek başarısız VPN denemelerini ve yetkisiz erişimleri raporlar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Sophos XG serisiyle 5651 log imzalama yapılabiliyor mu?", answer: "Evet, Sophos'tan gelen LAN-WAN trafik logları KamuSM zaman damgasıyla imzalanarak yasal koruma sağlanır." }
    ]
  },
  "microsoft-365-admin-loglari": {
    title: "Microsoft 365 Admin ve Exchange Log Yönetimi | ACKLOG",
    description: "M365, Azure Active Directory ve Exchange Online admin hareketlerinin API entegrasyonuyla ACKLOG SIEM'e aktarılması.",
    badge: "Bulut Entegrasyonu",
    heroTitle: "Microsoft 365 Log Yönetimi",
    heroSubtitle: "Bulut e-posta ve kimlik yönetim sistemlerinizin güvenliğini anlık izleyin.",
    content: `
      <h2>Microsoft 365 (O365) Ortamınızda Güvenlik Görünürlüğü</h2>
      <p>Şirketlerin buluta taşınmasıyla siber saldırganlar artık bulut e-posta hesaplarını ve admin panellerini hedef almaktadır. ACKLOG, Microsoft Graph API entegrasyonuyla M365 admin hareketlerini, Exchange e-posta yönlendirme kurallarını ve Microsoft Entra ID (Azure AD) giriş loglarını anlık olarak izler.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Bulut e-posta yönlendirme kuralları izlenebilir mi?", answer: "Evet, bir kullanıcının gelen postalarını dışarıya yönlendirmesi (email forwarding rule) gibi şüpheli durumlar ACKLOG tarafından anında tespit edilir." }
    ]
  },
  "aws-cloudtrail-siem": {
    title: "AWS CloudTrail Log Entegrasyonu ve SIEM Analizi | ACKLOG",
    description: "Amazon Web Services (AWS) altyapınızdaki API çağrılarının ve CloudTrail loglarının ACKLOG ile analiz edilmesi rehberi.",
    badge: "Bulut Entegrasyonu",
    heroTitle: "AWS CloudTrail Entegrasyonu",
    heroSubtitle: "AWS bulut kaynaklarındaki kullanıcı hareketleri ve API değişikliklerinin siber takibi.",
    content: `
      <h2>Amazon Web Services Bulut Güvenliği</h2>
      <p>AWS üzerinde çalışan sunucular, veritabanları ve IAM (kimlik erişim) kuralları siber tehditlere karşı sürekli izlenmelidir. ACKLOG, AWS CloudTrail loglarını asenkron olarak toplayıp normalize eder. AWS üzerinde yetkisiz bir S3 bucket açılması veya güvenlik grubu (security group) kurallarının gevşetilmesi gibi durumlar anında alarm üretir.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "AWS S3 bucket erişim loglarını toplayabiliyor muyuz?", answer: "Evet, AWS CloudTrail ve S3 access logları AWS API'leri üzerinden ACKLOG'a güvenli şekilde aktarılır." }
    ]
  },
  "azure-log-yonetimi": {
    title: "Microsoft Azure Cloud Log Yönetimi ve SIEM | ACKLOG",
    description: "Azure sanal makineleri, SQL veritabanları ve Azure Monitor loglarının ACKLOG yerli SIEM platformuyla izlenmesi.",
    badge: "Bulut Entegrasyonu",
    heroTitle: "Azure Log Yönetimi",
    heroSubtitle: "Azure bulut altyapınızın güvenlik takibi ve log izleme çözümleri.",
    content: `
      <h2>Azure Bulut Altyapısı Güvenliği</h2>
      <p>Microsoft Azure portalında gerçekleşen şüpheli girişler, sanal makine değişiklikleri ve veri erişimleri ACKLOG ile izlenebilir. Azure Event Hubs entegrasyonu sayesinde tüm Azure loglarınız lokal veya hibrit konumlandırılmış ACKLOG SIEM platformuna güvenle akar.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Azure Sentinel yerine ACKLOG kullanılabilir mi?", answer: "Evet, Azure Sentinel'in yüksek bulut veri saklama maliyetlerinden kaçınmak için loglarınızı ACKLOG SIEM'e yönlendirerek tasarruf edebilirsiniz." }
    ]
  },
  "windows-server-event-log-siem": {
    title: "Windows Server Event Log Toplama ve SIEM Analizi | ACKLOG",
    description: "Windows Server Event Log (Active Directory, Security, System, Application) kayıtlarının Winlogbeat veya Agent ile SIEM entegrasyonu.",
    badge: "Sunucu Entegrasyonu",
    heroTitle: "Windows Server Log Yönetimi",
    heroSubtitle: "Windows sunucuları ve Active Directory üzerindeki tüm kullanıcı hareketlerinin siber takibi.",
    content: `
      <h2>Windows Sunucu Güvenliğinde Active Directory Takibi</h2>
      <p>Kurumsal ağların temelini oluşturan Windows Server ve Active Directory (AD), siber saldırganların kimlik bilgisi ele geçirmek için hedeflediği ana yapılardır. ACKLOG, hafif ajan (lightweight agent) veya WMI üzerinden Windows Event loglarını toplar. Başarısız oturum açmalar, yeni eklenen admin kullanıcıları ve grup politikası değişiklikleri anlık izlenir.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Windows Event Log toplamak için sunucuya ajan kurmak zorunlu mu?", answer: "Hayır. Ajan kurmak istemediğiniz kritik sunucularda WMI (Windows Management Instrumentation) protokolü ile ajansız (agentless) log toplayabiliriz." }
    ]
  },
  "linux-syslog-siem": {
    title: "Linux Syslog Toplama ve Siber Güvenlik Analizi | ACKLOG",
    description: "Linux (RHEL, Ubuntu, CentOS) sunucu loglarının, auth loglarının ve SSH bağlantı geçmişlerinin Syslog ile ACKLOG'a aktarılması.",
    badge: "Sunucu Entegrasyonu",
    heroTitle: "Linux Syslog Yönetimi",
    heroSubtitle: "Linux sunucularda SSH yetkilendirme, kullanıcı komutları ve sistem loglarının takibi.",
    content: `
      <h2>Linux Sunucuların Güvenliği ve Auditd Takibi</h2>
      <p>Linux sunucular genellikle kritik veritabanlarını ve web uygulamalarını barındırır. ACKLOG, rsyslog veya syslog-ng üzerinden Linux sunucularındaki kimlik doğrulama (/var/log/auth.log) ve sistem loglarını toplar. Ayrıca auditd entegrasyonuyla sunucuda çalıştırılan tehlikeli komutları (örn: rm -rf, yetkisiz chmod) izler.</p>
      <p>Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.</p>
    `,
    faqs: [
      { question: "Linux SSH başarısız giriş alarmları kurulabilir mi?", answer: "Evet, kısa süre içinde gerçekleşen çok sayıda başarısız SSH giriş denemesi kaba kuvvet (brute force) saldırısı olarak algılanıp alarm üretir." }
    ]
  }
};
