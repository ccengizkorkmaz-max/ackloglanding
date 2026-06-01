export interface SEOData {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  badge: string;
  content: string;
  shortAnswer: string;
  technicalSummary: string[];
  resultParagraph: string;
  faqs: { question: string; answer: string }[];
  features?: string[];
  specs?: { label: string; value: string }[];
}

export const programmaticSectors: Record<string, SEOData> = {
  "bankalar-icin-siem": {
    title: "Bankacılık Sektörü İçin SIEM ve Siber Güvenlik | ACKLOG",
    description: "Finans kuruluşları ve bankalar için BDDK, PCI DSS ve KVKK uyumlu, yüksek performanslı in-memory siber tehdit algılama platformu.",
    badge: "Finans & Bankacılık",
    heroTitle: "Bankalar İçin SIEM çözümü",
    heroSubtitle: "Finansal regülasyonlara uyumlu, sıfır gecikmeli siber tehdit algılama çözümü.",
    shortAnswer: "Bankacılık sektöründe SIEM, BDDK bilgi sistemleri yönetmeliği ve PCI DSS uyumluluğu için kritik öneme sahiptir. ACKLOG, saniyede yüz binlerce log üreten (high EPS) banka altyapılarında, in-memory mimarisiyle sıfır gecikmeli tehdit algılama ve KamuSM zaman damgasıyla imzalı saklama çözümü sunarak finansal veri güvenliğini en üst düzeyde korur.",
    technicalSummary: [
      "BDDK Bilgi Sistemleri Yönetmeliği ile %100 teknik uyumluluk.",
      "Kredi kartı verileri güvenliği için yerleşik PCI DSS Raporlama Setleri.",
      "ClickHouse tabanlı Columnar Database mimarisiyle 5 kat daha az donanım maliyeti.",
      "Kullanıcı davranış anomalilerini algılayan makine öğrenmesi destekli UEBA."
    ],
    resultParagraph: "Özetle, bankacılık ve finans kuruluşlarında ACKLOG, yüksek EPS hacimlerini bütçeyi zorlamadan karşılayan, yasal gereksinimleri yerleşik olarak çözen en modern yerli SIEM & USO platformudur.",
    content: `
      <h2>Bankacılıkta Sıfır Risk, Maksimum Performans</h2>
      <p>Finansal sistemler, siber saldırganların birincil hedefidir. Bankaların saniye başına log hacmi (EPS) yüz binleri bulur. ACKLOG, in-memory korelasyon motoru ve Columnar Database mimarisiyle bankacılık sektöründeki yüksek veri hacmini düşük maliyetlerle yönetir.</p>
      <h3>Finansal Uyum Yeteneklerimiz</h3>
      <p>BDDK düzenlemelerine uyum kapsamında logların değiştirilemez olarak saklanması ve şüpheli hesap hareketlerinin anlık tespiti sağlanır. Ayrıca, ödeme sistemleri loglarının izlenmesi ve yetkisiz veri sızıntılarının durdurulması için PCI DSS kart güvenliği standartları desteklenir. Gelişmiş UEBA modülü ile banka personelinin veya dış kaynak kullanıcılarının olağan dışı veri erişim profilleri otomatik olarak çıkarılır.</p>
    `,
    faqs: [
      { question: "BDDK loglama gereksinimlerini karşılıyor mu?", answer: "Evet, BDDK'nın finansal altyapılar için zorunlu kıldığı detaylı kullanıcı audit logları ve zaman damgası standartlarını tam olarak karşılar." }
    ],
    features: ["BDDK Mevzuat Uyumluluğu", "PCI DSS Raporlama Setleri", "Columnar Database Performansı"]
  },
  "hastaneler-icin-siem": {
    title: "Hastaneler İçin KVKK Sağlık Verisi SIEM Log Yönetimi | ACKLOG",
    description: "Sağlık kuruluşları ve hastaneler için özel nitelikli kişisel sağlık verilerinin (KVKK) korunması ve erişim denetimi loglama platformu.",
    badge: "Sağlık Sektörü",
    heroTitle: "Hastaneler İçin SIEM",
    heroSubtitle: "Özel nitelikli sağlık verilerine erişimin denetlenmesi ve KVKK teknik tedbirleri uyumluluğu.",
    shortAnswer: "Hastaneler ve sağlık kuruluşlarında işlenen veriler KVKK kapsamında \"Özel Nitelikli Kişisel Veri\" olarak sınıflandırılır. ACKLOG, HBYS (Hastane Bilgi Yönetim Sistemi) ve tıbbi cihaz verilerine yönelik yetkisiz veya şüpheli erişimleri anında algılayarak veri maskeleme (data masking) ve zaman damgalı loglama ile sızıntıları engeller.",
    technicalSummary: [
      "HBYS veritabanı erişim loglarının anlık toplanması ve korelasyonu.",
      "Loglardaki T.C. Kimlik, Telefon ve Hasta verilerinin otomatik maskelenmesi.",
      "Kişisel verilere yetkisiz erişim denemelerinde anlık alarm üretilmesi.",
      "Yasal denetimlerde delil niteliği taşıyan KamuSM zaman damgası entegrasyonu."
    ],
    resultParagraph: "Sonuç olarak, hastaneler için ACKLOG, özel nitelikli sağlık verilerini yasal mevzuata tam uyumlu ve güvenli bir şekilde yönetirken olası veri sızıntısı cezalarından kurumu korur.",
    content: `
      <h2>Sağlık Kuruluşlarında Hasta Verisi Güvenliği</h2>
      <p>Sağlık verileri, KVKK kapsamında \"Özel Nitelikli Kişisel Veri\" olarak sınıflandırılır ve sızıntı durumunda çok ağır idari para cezaları uygulanır. Hastaneler, HBYS (Hastane Bilgi Yönetim Sistemi) ve tıbbi cihaz veri erişim loglarını sıkı kontrol altında tutmalıdır. ACKLOG, bu verilere yönelik anormal erişimleri anında yakalar.</p>
    `,
    faqs: [
      { question: "HBYS veritabanı erişimlerini denetleyebiliyor muyuz?", answer: "Evet, ACKLOG SQL server audit, Oracle audit veya PostgreSQL loglarını toplayarak hastane veritabanı sorgularını izler." }
    ]
  },
  "universiteler-icin-siem": {
    title: "Üniversiteler ve Eğitim Kurumları İçin SIEM Çözümleri | ACKLOG",
    description: "Kampüs içi binlerce öğrencinin internet loglarının 5651 uyumlu saklanması ve akademik ağların siber saldırılardan korunması.",
    badge: "Eğitim & Kampüs Güvenliği",
    heroTitle: "Üniversiteler İçin SIEM",
    heroSubtitle: "Geniş öğrenci ağları için yüksek EPS kapasiteli ve uygun maliyetli yerli SIEM.",
    shortAnswer: "Üniversitelerde binlerce öğrenci ve akademisyenin ortak kullandığı eduroam ve Wi-Fi ağları devasa log üretir. ACKLOG, yüksek EPS (saniye başı olay) kapasitesine sahip Big Data mimarisiyle bu logları donanım darboğazı olmadan toplar, 5651 Sayılı Kanuna uygun olarak zaman damgalar ve saklar.",
    technicalSummary: [
      "Eduroam, Radius ve misafir Wi-Fi ağ loglarının tek merkezde toplanması.",
      "5651 Sayılı Kanun gereği logların 2 yıl boyunca otomatik KamuSM ile imzalanması.",
      "Yüksek veri hacminde donanım bütçesini %80 düşüren sıkıştırma teknolojisi.",
      "Kampüs ağındaki siber saldırıların (DDoS, port tarama vb.) anlık tespiti."
    ],
    resultParagraph: "Özetle, üniversite kampüslerinde ACKLOG, yüksek veri hacmini düşük maliyetle depolayarak yasal mevzuata tam uyumlu siber güvenlik sağlar.",
    content: `
      <h2>Akademik Ağlarda Siber Görünürlük ve Yasal Loglama</h2>
      <p>Üniversite kampüsleri, binlerce öğrenci ve akademisyenin ortak kullandığı yüksek bant genişliğine sahip ağlardır. Bu ağlarda oluşan log hacmi devasadır. ACKLOG, Big Data mimarisi ile milyonlarca logu donanım darboğazı oluşturmadan işler ve 5651 mevzuatına uygun şekilde zaman damgalar.</p>
    `,
    faqs: [
      { question: "Öğrenci eduroam veya yerel Wi-Fi loglarını toplayabiliyor musunuz?", answer: "Evet, eduroam ve benzeri radius logları ACKLOG parser motoruyla çözümlenerek yasal saklama sürecine dahil edilir." }
    ]
  },
  "belediyeler-icin-siem": {
    title: "Belediyeler ve Yerel Yönetimler İçin Yerli SIEM | ACKLOG",
    description: "Yerel yönetimler ve belediyeler için 5651 Sayılı Kanun log yükümlülüğü ve KVKK uyumlu uygun maliyetli SIEM sistemi.",
    badge: "Kamu & Yerel Yönetimler",
    heroTitle: "Belediyeler İçin SIEM",
    heroSubtitle: "Vatandaş verisi güvenliği ve 5651 loglama yükümlülüklerinde belediyelere özel bütçe dostu SIEM.",
    shortAnswer: "Belediyeler hem vatandaşların kişisel verilerini işler hem de halka açık Wi-Fi ağları sunar. ACKLOG, belediye Wi-Fi ağlarının loglarını 5651 Sayılı Kanuna uygun olarak mühürlerken, iç ağdaki vatandaş verilerine erişimleri KVKK teknik tedbirleri doğrultusunda denetler.",
    technicalSummary: [
      "Halka açık Wi-Fi ağları için hotspot ve KamuSM zaman damgası entegrasyonu.",
      "KVKK teknik tedbirler kapsamında vatandaş verilerinin maskelenmesi.",
      "Belediye bilgi işlem bütçelerine uygun esnek ve yerel lisanslama.",
      "Dahili SOAR playbook otomasyonu ile siber olaylara anında yanıt."
    ],
    resultParagraph: "Kısacası, belediyeler ve yerel yönetimlerde ACKLOG, bütçe dostu lisanslamayla hem 5651 Wi-Fi loglama zorunluluğunu hem de KVKK uyumluluğunu tek elden çözer.",
    content: `
      <h2>Yerel Yönetimlerde Siber Güvenlik ve Vatandaş Verisi Koruması</h2>
      <p>Belediyeler, hem geniş bir ağ altyapısına sahiptir hem de binlerce vatandaşın kişisel verilerini işler. Bu durum KVKK yükümlülüğünü kritik hale getirir. Ayrıca ücretsiz sunulan belediye Wi-Fi ağlarının logları 5651 Sayılı Kanun uyarınca zaman damgasıyla saklanmalıdır. ACKLOG, belediye bütçelerine uygun lisanslama modelleriyle tüm bunları tek panelde çözer.</p>
    `,
    faqs: [
      { question: "Ücretsiz belediye Wi-Fi logları KamuSM ile nasıl imzalanıyor?", answer: "ACKLOG, Wi-Fi gateway sistemlerinden gelen logları otomatik olarak derler ve KamuSM (TÜBİTAK) zaman damgasıyla mühürleyerek yasal süre boyunca saklar." }
    ]
  },
  "e-ticaret-icin-siem": {
    title: "E-Ticaret Firmaları İçin SIEM ve Kart Güvenliği (PCI DSS) | ACKLOG",
    description: "E-ticaret platformları, ödeme geçitleri ve perakende siteleri için PCI DSS, KVKK ve anlık siber saldırı tespit çözümleri.",
    badge: "E-Ticaret & Perakende",
    heroTitle: "E-Ticaret İçin SIEM",
    heroSubtitle: "Ödeme altyapısı güvenliği, üye verisi koruması ve anlık saldırı algılama.",
    shortAnswer: "E-ticaret siteleri, müşteri kart verileri (PCI DSS) ve kişisel alışveriş verileri (KVKK) nedeniyle siber saldırganların odağındadır. ACKLOG, e-ticaret altyapılarında ödeme işlemlerini, web sunucu trafiklerini (IIS, Nginx, Apache) ve veritabanı erişimlerini izleyerek kart hırsızlığı, SQL Injection ve XSS saldırılarını sıfır gecikmeyle engeller.",
    technicalSummary: [
      "PCI DSS 10. Madde gereği tüm ödeme ağı erişimlerinin izlenmesi.",
      "Web uygulaması güvenlik duvarı (WAF) ve sunucu loglarının korelasyonu.",
      "Müşteri profili verilerinin KVKK kapsamında maskelenmiş loglanması.",
      "ClickHouse columnar mimarisiyle indirim dönemlerindeki aşırı log yükünün stabil taşınması."
    ],
    resultParagraph: "Özetle, e-ticaret platformlarında ACKLOG, hem PCI DSS kart güvenliğini hem de müşteri verilerini koruyarak prestij kaybını ve cezai riskleri önler.",
    content: `
      <h2>E-Ticaret ve Online Ödeme Altyapılarında Güvenlik</h2>
      <p>E-ticaret firmaları, her saniye binlerce finansal işlem gerçekleştirir. Kredi kartı verilerinin güvenliği için PCI-DSS standartları uygulanmalıdır. ACKLOG SIEM, web sunucu loglarını ve ödeme entegrasyonu loglarını anlık olarak parse edip korele ederek, fraud (sahtekarlık) ve siber saldırı girişimlerini anında engeller.</p>
    `,
    faqs: [
      { question: "WAF ve IIS loglarımızı entegre edebilir miyiz?", answer: "Evet, ACKLOG tüm popüler Web Application Firewall (WAF), Nginx, Apache ve IIS log formatlarını yerleşik parser'ları ile destekler." }
    ]
  },
  "enerji-firmalari-icin-siem": {
    title: "Enerji ve Altyapı Şirketleri İçin OT/SCADA SIEM Çözümü | ACKLOG",
    description: "Elektrik, gaz, su dağıtım ve enerji üretim tesisleri için EPDK siber güvenlik yönetmeliği uyumlu kritik altyapı log izleme.",
    badge: "Enerji & Kritik Altyapılar",
    heroTitle: "Enerji Şirketleri İçin SIEM",
    heroSubtitle: "EPDK Siber Güvenlik Yönetmeliği uyumlu, endüstriyel OT ve SCADA ağ izleme.",
    shortAnswer: "Enerji sektörü ve kritik altyapılar, EPDK Siber Güvenlik Yönetmeliği gereğince siber saldırılara karşı 7/24 izlenmelidir. ACKLOG, enerji üretim ve dağıtım tesislerindeki IT (Bilgi İşlem) sistemleri ile SCADA, PLC ve DCS gibi OT (Operasyonel Teknoloji) sistemlerini tek platformda birleştirerek endüstriyel sabotaj girişimlerini algılar.",
    technicalSummary: [
      "EPDK Bilgi Sistemleri Siber Güvenlik Yönetmeliğine tam teknik uyum.",
      "Modbus, DNP3, OPC UA gibi endüstriyel protokol loglarının parse edilmesi.",
      "Kritik enerji kontrol panellerine yetkisiz erişimlerin anlık tespiti.",
      "Zaman damgalı log saklama ile yasal denetimlerde kanıt sunumu."
    ],
    resultParagraph: "Sonuç olarak, enerji sektöründe ACKLOG, EPDK mevzuat uyumluluğunu sağlarken kritik altyapıların kesintisiz ve güvenli çalışmasını garantiler.",
    content: `
      <h2>Enerji Sektöründe Kritik Altyapı Güvenliği</h2>
      <p>Elektrik üretim tesisleri, doğalgaz dağıtım ağları ve su altyapıları kritik milli tesislerdir. Bu tesislerin siber güvenliği EPDK tarafından sıkı denetlenir. ACKLOG, enerji dağıtım sistemlerindeki IT ve OT ağlarını izleyerek olası siber sabotaj girişimlerini tespit eder ve alarm üretir.</p>
    `,
    faqs: [
      { question: "EPDK denetim gereksinimlerini karşılıyor mu?", answer: "Evet, ACKLOG enerji firmalarının tabi olduğu EPDK siber güvenlik yönetmeliğindeki loglama ve olay izleme gereksinimlerini eksiksiz yerine getirmektedir." }
    ]
  },
  "uretim-tesisleri-icin-siem": {
    title: "Üretim Tesisleri ve Fabrikalar İçin OT/IT SIEM | ACKLOG",
    description: "Endüstriyel üretim tesisleri için IT (Bilgi Teknolojileri) ve OT (Operasyonel Teknolojiler/SCADA) loglarının birleşik izlenmesi.",
    badge: "Sanayi & Endüstri 4.0",
    heroTitle: "Fabrikalar İçin OT/IT SIEM",
    heroSubtitle: "Üretim hatlarının güvenliği, siber sabotaj tespiti ve endüstriyel loglama.",
    shortAnswer: "Üretim tesislerinde siber saldırı kaynaklı duruşların maliyeti çok yüksektir. ACKLOG, fabrikalardaki ofis ağları (IT) ile fabrika sahasındaki makine ve otomasyon ağlarının (OT) loglarını birleştirerek, üretim hatlarına yönelik sızma ve sabotaj girişimlerini milisaniyeler içinde engeller.",
    technicalSummary: [
      "Üretim hattı (OT) ve ofis ağı (IT) loglarının merkezi birleştirilmesi.",
      "Fabrika otomasyon sistemlerine yönelik anomali tespiti.",
      "KamuSM Kamu damgalı 5651 log imzalama entegrasyonu.",
      "Vardiyalı fabrika IT personeli için kolay anlaşılır, alarm odaklı arayüz."
    ],
    resultParagraph: "Özetle, sanayi tesislerinde ACKLOG, üretim duraklamalarını engelleyen proaktif tehdit tespiti ve yasal loglama altyapısını bir arada sunar.",
    content: `
      <h2>Endüstriyel Üretim Tesislerinde Siber Güvenlik</h2>
      <p>Fabrikalarda sadece ofis bilgisayarlarının (IT) değil, üretim bantlarını yöneten PLC, RTU ve SCADA (OT) sistemlerinin de siber saldırılardan korunması gerekir. Üretim durmasının maliyeti milyonlarca dolardır. ACKLOG, IT ve OT dünyasını tek bir Birleşik Güvenlik Operasyonları (USO) platformunda birleştirerek siber sabotaj tehditlerini durdurur.</p>
    `,
    faqs: [
      { question: "Modbus veya OPC UA gibi endüstriyel logları parse edebiliyor musunuz?", answer: "Evet, ACKLOG gelişmiş parser kütüphanesi sayesinde endüstriyel otomasyon loglarını da sisteme dahil edebilir." }
    ]
  },
  "telekom-operatorleri-icin-siem": {
    title: "Telekom Operatörleri ve ISP'ler İçin SIEM Çözümü | ACKLOG",
    description: "Telekomünikasyon sektörü, internet servis sağlayıcılar (ISP) için BTK regülasyonları uyumlu yüksek kapasiteli log analizi.",
    badge: "Telekomünikasyon & ISP",
    heroTitle: "Telekom Operatörleri İçin SIEM",
    heroSubtitle: "BTK regülasyonlarına uyumlu, milyonlarca EPS kapasiteli veri gölü (Data Lake) yönetimi.",
    shortAnswer: "Telekom operatörleri ve ISP'ler, BTK (Bilgi Teknolojileri ve İletişim Kurumu) mevzuatları gereği çok yüksek hacimli kullanıcı loglarını tutmak ve analiz etmek zorundadır. ACKLOG, ClickHouse tabanlı veri depolama mimarisi ile saniyede milyonlarca EPS üreten telekom altyapılarını 5 kat daha az donanım bütçesiyle loglar.",
    technicalSummary: [
      "BTK regülasyonları ve 5651 Sayılı Kanuna %100 teknik uyumluluk.",
      "Saniyede 500.000+ EPS (saniye başı olay) işleme ve indeksleme gücü.",
      "Donanım ve disk maliyetlerini %80 düşüren gelişmiş sıkıştırma algoritmaları.",
      "Çok kiracılı (multi-tenant) yapısıyla farklı müşteri ağlarının izole takibi."
    ],
    resultParagraph: "Sonuç olarak, telekom sektöründe ACKLOG, BTK yasal gerekliliklerini yerine getirirken devasa veri boyutlarını optimize donanımla yöneten tek yerli SIEM çözümüdür.",
    content: `
      <h2>Telekomünikasyon Altyapılarında Yüksek Hacimli Log Yönetimi</h2>
      <p>Telekom operatörleri ve internet servis sağlayıcıları (ISP) için siber güvenlik ve yasal loglama hayati önem taşır. Üretilen log boyutu günlük terabaytlar seviyesindedir. ACKLOG'un sütun tabanlı depolama mimarisi, bu devasa logların arama performansını milisaniyelere düşürürken disk maliyetini minimumda tutar.</p>
    `,
    faqs: [
      { question: "BTK log saklama standartlarını destekliyor mu?", answer: "Evet, Telekom sektörüne özel BTK kılavuzlarında belirtilen tüm erişim logları ve zaman damgası standartlarını karşılamaktadır." }
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
    shortAnswer: "5651 Sayılı Kanun gereğince, internet erişimi sunan tüm kurumlar kullanıcı bağlantı kayıtlarını (IP, MAC, port ve zaman damgası) en az 2 yıl saklamak zorundadır. ACKLOG, bu logları otomatik olarak KamuSM (TÜBİTAK) API'leri ile imzalayarak değiştirilemezliğini yasal delil niteliğinde garanti altına alır.",
    technicalSummary: [
      "İç IP DHCP dağıtım logları ile dış IP NAT port loglarının otomatik eşleştirilmesi.",
      "TÜBİTAK KamuSM zaman damgası entegrasyonu ile otomatik günlük imzalama.",
      "Log bütünlüğünün (hash geçerliliği) günlük asenkron denetimi.",
      "Yasal saklama süresi olan 2 yıl boyunca logları %80 sıkıştırarak depolama."
    ],
    resultParagraph: "Kısacası, 5651 log yönetimi kapsamında ACKLOG, yasal denetimlerde ceza almamanızı sağlayan tam otomasyonlu ve adli olarak geçerli tek yerli çözümdür.",
    content: `
      <h2>5651 Sayılı Kanun Nedir ve Ne Gerektirir?</h2>
      <p>5651 Sayılı Kanun, internet ortamında yapılan yayınların düzenlenmesi ve bu yayınlar yoluyla işlenen suçlarla mücadele edilmesini amaçlar. İşletmeler, misafirlerine veya çalışanlarına sundukları internet erişim kayıtlarını (IP, port, MAC, zaman damgası) en az 2 yıl saklamak zorundadır.</p>
    `,
    faqs: [
      { question: "5651 imzalı logları nerede depoluyoruz?", answer: "Kendi sunucunuzda (On-premise) veya ACKLOG'un şifreli yerel bulut disklerinde tamamen güvenli bir şekilde saklayabilirsiniz." }
    ]
  },
  "5651-log-saklama-sureleri": {
    title: "5651 Log Saklama Süreleri ve Yasal Gereksinimler | ACKLOG",
    description: "5651 Sayılı Kanun uyarınca internet loglarının saklanma süresi, zaman damgası standartları ve cezai sorumluluklar rehberi.",
    badge: "Hukuki Mevzuat",
    heroTitle: "5651 Log Saklama Süreleri",
    heroSubtitle: "5651 Yasası kapsamında logların saklanma süreleri, adli geçerlilik ve ceza limitleri.",
    shortAnswer: "5651 Sayılı Kanun uyarınca internet trafik ve erişim loglarının **en az 2 yıl (24 ay)** boyunca saklanması zorunludur. ACKLOG, 2 yıllık saklama süresince oluşacak disk maliyetini %80 sıkıştırma teknolojisiyle en aza indirir ve logların KamuSM zaman damgasıyla yasal adli delil olarak saklanmasını sağlar.",
    technicalSummary: [
      "Log saklama süresinin yasal olarak en az 24 ay (2 yıl) olarak uygulanması.",
      "TÜBİTAK/KamuSM zaman damgasının milisaniyelik hassasiyetle vurulması.",
      "İç/dış ağ NAT eşleştirmelerinin yasal süre boyunca kayıpsız tutulması.",
      "Sıkıştırma sayesinde 2 yıllık log depolamasında büyük bütçe tasarrufu."
    ],
    resultParagraph: "Özetle, 5651 saklama sürelerine tam uyum sağlayan ACKLOG, yasal denetimlerde ve adli soruşturmalarda kurumlara tam hukuki güvence sağlar.",
    content: `
      <h2>Yasal Saklama Süresi Kriterleri</h2>
      <p>5651 Sayılı Kanun'un en kritik maddelerinden biri log saklama süreleridir. Trafik verisi ve kullanıcı doğrulama (SMS, T.C. No) bilgileri 2 yıl boyunca değiştirilemeyecek şekilde mühürlü saklanmalıdır. Zaman damgasız veya 2 yıldan az saklanan loglar denetimlerde geçersiz sayılır ve idari para cezalarına yol açar.</p>
    `,
    faqs: [
      { question: "Logların 2 yıl sonra otomatik silinmesi sağlanabilir mi?", answer: "Evet, ACKLOG otomatik 'retention policy' kuralları ile 24 ayı dolduran logları sistemden güvenle temizleyerek disk alanını boşaltır." }
    ]
  },
  "kvkk-teknik-tedbirler-siem": {
    title: "KVKK Teknik Tedbirler SIEM ve Log Analizi Uyumluluğu | ACKLOG",
    description: "Kişisel Verilerin Korunması Kanunu (KVKK) teknik tedbirler kılavuzuna uyum için yerli SIEM ve kullanıcı erişim denetimi çözümü.",
    badge: "Veri Koruma Kanunu",
    heroTitle: "KVKK Teknik Tedbirler SIEM",
    heroSubtitle: "Kişisel verilere erişimin denetlenmesi, siber sızıntı tespiti ve KVKK log takibi.",
    shortAnswer: "KVKK Teknik Tedbirler Kılavuzu'na göre, kişisel veri barındıran sistemlerin erişim loglarının tutulması, kullanıcı yetkilerinin denetlenmesi ve veri ihlallerinin anlık tespiti zorunludur. ACKLOG, veritabanı denetimi, anormal kullanıcı davranışı tespiti (UEBA) ve log maskeleme ile KVKK idari para cezalarından korur.",
    technicalSummary: [
      "Kişisel verilere (TCKN, telefon, e-posta) yapılan erişimlerin anlık loglanması.",
      "Log veritabanında kişisel verilerin gerçek zamanlı maskelenmesi (data masking).",
      "Kullanıcı yetki değişiklikleri ve admin aktivitelerinin denetlenmesi (Audit Logging).",
      "Yetkisiz veri transferi ve siber sızıntı girişimlerinin SOAR ile otomatik engellenmesi."
    ],
    resultParagraph: "Sonuç olarak ACKLOG, KVKK teknik tedbirlerini tek lisansla ve modül ücreti ödetmeden karşılayan en kapsamlı yerli güvenlik platformudur.",
    content: `
      <h2>KVKK Kılavuzu Kapsamında SIEM Rolü</h2>
      <p>KVKK Kurumu tarafından yayınlanan Teknik Tedbirler Kılavuzu'nda; siber tehditlerin tespiti, log kayıtlarının saklanması, yetkisiz erişimlerin izlenmesi gibi teknik gereksinimler bulunmaktadır. ACKLOG, KVKK uyumluluğu için tüm bu süreçleri tek bir platformda çözmektedir.</p>
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
    shortAnswer: "ISO 27001 bilgi güvenliği denetimlerinde (Özellikle A.8.12 Olay Günlüğü İzleme standardı), sistem erişimleri, yönetici hareketleri ve ağ olaylarının düzenli takibi istenir. ACKLOG, denetçilerin talep ettiği tüm audit raporlarını, başarısız giriş denemelerini ve yetki değişikliklerini otomatik üreterek ISO 27001 uyumluluğunu kolaylaştırır.",
    technicalSummary: [
      "ISO 27001:2022 A.8.12 ve A.8.15 maddeleriyle tam teknik uyum.",
      "Başarısız login denemeleri ve şüpheli kullanıcı hareketlerinin anlık raporlanması.",
      "Log yönetim sisteminin kendi güvenliğinin (Self-Audit) loglanması.",
      "Denetim günlerinde hazır denetçi rapor şablonlarının kullanılması."
    ],
    resultParagraph: "Kısacası, ISO 27001 sertifikasyon sürecinizde ACKLOG, denetim hazırlıklarınızı minimize eden ve BGYS uyumluluğunu kanıtlayan en verimli araçtır.",
    content: `
      <h2>ISO 27001 Denetimlerine SIEM Desteği</h2>
      <p>ISO 27001 standardı, kurumların bilgi güvenliği risklerini yönetmesini gerektirir. Annex A (Ek A) kontrolleri içerisinde yer alan \"Olay Günlüğünün İzlenmesi\" ve \"Yönetici ve Kullanıcı Hareketlerinin Loglanması\" maddeleri ACKLOG ile kolayca raporlanabilir hale gelir.</p>
    `,
    faqs: [
      { question: "ISO 27001 denetimleri için hazır raporlar var mı?", answer: "Evet, ACKLOG içerisinde ISO 27001 denetçilerinin talep ettiği kullanıcı erişimleri, yetki değişiklikleri ve başarısız giriş denemeleri raporları hazırdır." }
    ]
  },
  "iso-27001-siem-gereksinimleri": {
    title: "ISO 27001:2022 SIEM Gereksinimleri ve Log İzleme | ACKLOG",
    description: "ISO 27001 Ek-A kontrolleri doğrultusunda SIEM sistemlerinin rolü, korelasyon kuralları ve olay yönetimi altyapısı.",
    badge: "BGYS Standartları",
    heroTitle: "ISO 27001 SIEM Gereksinimleri",
    heroSubtitle: "Yeni ISO 27001 standardına uyumlu SIEM altyapısı, korelasyon kuralları ve tehdit izleme süreçleri.",
    shortAnswer: "ISO 27001:2022 güncellemesiyle siber güvenlik tehditlerinin izlenmesi ve olay yönetimi daha aktif bir zorunluluk haline gelmiştir. ACKLOG SIEM, MITRE ATT&CK siber saldırı teknikleriyle eşleşen gerçek zamanlı korelasyon motoruyla ISO 27001 BGYS denetim gereksinimlerini eksiksiz şekilde yerine getirir.",
    technicalSummary: [
      "Yeni ISO 27001 standardında olay izleme ve müdahale süreçlerinin otomasyonu.",
      "Ağ, sunucu ve kullanıcı hareketlerinin in-memory korelasyonla izlenmesi.",
      "Kritik sunucu dizinlerindeki dosya bütünlüğü izleme (FIM) raporları.",
      "Olası siber olaylarda yasal log kanıtlarının hazır tutulması."
    ],
    resultParagraph: "Özetle, yeni ISO 27001 standardına geçiş sürecinizde ACKLOG SIEM, proaktif tehdit izleme yetenekleriyle en güçlü altyapı desteğini sağlar.",
    content: `
      <h2>ISO 27001:2022 Kapsamında SIEM ve Olay Yönetimi</h2>
      <p>ISO 27001 Bilgi Güvenliği Yönetim Sistemi (BGYS) denetçileri artık sadece log tutulmasını değil, siber tehditlerin nasıl izlendiğini ve bunlara nasıl müdahale edildiğini görmek istemektedir. ACKLOG, entegre SOAR ve UEBA yetenekleri sayesinde olay müdahale (incident response) süreçlerini tam olarak kanıtlar.</p>
    `,
    faqs: [
      { question: "Dosya bütünlüğü izleme (FIM) yapıyor mu?", answer: "Evet, ACKLOG Windows/Linux sunucu ajanları üzerinden kritik sistem dosyalarındaki izinsiz değişiklikleri izleyerek uyarı üretir." }
    ]
  },
  "pci-dss-log-yonetimi": {
    title: "PCI DSS Ödeme Kartları Güvenliği ve Log İzleme | ACKLOG",
    description: "Kredi kartı kabul eden kurumlar için PCI DSS standardına uyumlu 10. Bölüm log takibi ve tehdit algılama çözümleri.",
    badge: "Finansal Güvenlik",
    heroTitle: "PCI DSS SIEM Çözümleri",
    heroSubtitle: "Ödeme sistemleri ağlarında yasal izleme, veri sızıntısı tespiti ve PCI DSS 10. Bölüm uyumluluğu.",
    shortAnswer: "PCI DSS (Ödeme Kartı Endüstrisi Veri Güvenliği Standardı) Gereksinim 10, kart sahiplerinin verilerine erişen tüm ağ bileşenlerinin günlük loglanmasını ve analizini şart koşar. ACKLOG, POS, ödeme geçitleri ve Active Directory loglarını izleyerek PCI DSS denetimlerinden başarıyla geçmenizi sağlar.",
    technicalSummary: [
      "PCI DSS 10. Bölüm log toplama ve günlük analiz gerekliliklerini karşılama.",
      "Kredi kartı (PAN/CVV) verilerinin loglarda açık görünmesini engelleyen maskeleme.",
      "Sistem saati bütünlüğünün Network Time Protocol (NTP) ile senkronize loglanması.",
      "Ödeme ağına yapılan yetkisiz veya şüpheli erişimlerin anında durdurulması."
    ],
    resultParagraph: "Sonuç olarak, PCI DSS uyumluluk sürecinde ACKLOG, kart verisi güvenliğini sağlayan maskeli loglama ve hazır uyumluluk rapor şablonlarıyla en güvenli tercihtir.",
    content: `
      <h2>PCI DSS Gereksinimi 10 ve ACKLOG Entegrasyonu</h2>
      <p>Kartlı ödeme sistemleri güvenliği standardı (PCI DSS), kart verilerinin işlendiği ortamlardaki tüm ağ erişimlerinin günlük olarak izlenmesini ve analiz edilmesini (Gereksinim 10) şart koşar. ACKLOG, ödeme terminalleri (POS) ve gateway loglarını anlık olarak izleyerek ihlalleri engeller.</p>
    `,
    faqs: [
      { question: "PCI DSS log saklama süresi ne kadardır?", answer: "PCI DSS uyarınca logların en az 3 ayı online (anlık sorgulanabilir) olmak üzere en az 1 yıl boyunca saklanması zorunludur." }
    ]
  },
  "bddk-siber-guvenlik-gereksinimleri": {
    title: "BDDK Bilgi Sistemleri Yönetmeliği ve SIEM Altyapısı | ACKLOG",
    description: "Finansal kiralama, faktoring ve bankacılık kuruluşları için BDDK bilgi sistemleri denetimine uyumlu log ve alarm yönetimi.",
    badge: "BDDK Mevzuatı",
    heroTitle: "BDDK SIEM Gereksinimleri",
    heroSubtitle: "Finans dışı ödeme kuruluşları ve bankacılık regülasyonlarına tam uyumlu yerli SIEM çözümü.",
    shortAnswer: "BDDK (Bankacılık Düzenleme ve Denetleme Kurulu) yönetmeliği, finans dışı ödeme kuruluşları, faktoring ve bankaların bilgi sistemlerinde tüm kullanıcı hareketlerini, yetkilendirmeleri ve veritabanı erişimlerini izlemesini şart koşar. ACKLOG, BDDK standartlarındaki gerçek zamanlı olay izleme ve KamuSM zaman damgalı log mühürleme gereksinimlerini eksiksiz karşılar.",
    technicalSummary: [
      "BDDK Bilgi Sistemleri ve Finansal Hizmetler Yönetmeliğine %100 teknik uyumluluk.",
      "Active Directory admin hareketlerinin ve yetki yükseltmelerinin anlık takibi.",
      "KamuSM API entegrasyonu ile log bütünlüğünün yasal zaman damgasıyla imzalanması.",
      "Yerli desteğiyle BDDK denetçilerinin talep ettiği raporların Türkçe üretilmesi."
    ],
    resultParagraph: "Özetle, BDDK bilgi sistemleri denetimlerinde ACKLOG, BDDK yasal log saklama standartlarını eksiksiz karşılayan en uyumlu yerli yazılımdır.",
    content: `
      <h2>BDDK Denetimleri İçin Yerli SIEM Çözümü</h2>
      <p>Bankacılık Düzenleme ve Denetleme Kurulu (BDDK), finansal kuruluşların tüm operasyonel loglarını, yetki yükseltmelerini ve admin hareketlerini izlemesini zorunlu kılar. ACKLOG, BDDK denetçilerinin talep ettiği detaylı siber olay kayıtlarını ve alarm korelasyonlarını eksiksiz sağlar.</p>
    `,
    faqs: [
      { question: "Admin yetki değişikliklerini anlık alarm olarak gönderebiliyor muyuz?", answer: "Evet, Active Directory veya Linux sunucularda yetki yükselten (privilege escalation) kullanıcılar algılandığında anlık SMS/E-posta veya SOAR alarmı tetiklenir." }
    ]
  },
  "swift-csp-ve-siem": {
    title: "SWIFT CSP (Müşteri Güvenlik Programı) ve SIEM Entegrasyonu | ACKLOG",
    description: "SWIFT ödeme sistemi kullanan bankalar ve finansal kuruluşlar için SWIFT CSP standartları uyumlu SIEM log takibi.",
    badge: "Finansal Regülasyon",
    heroTitle: "SWIFT CSP ve SIEM",
    heroSubtitle: "SWIFT ağ güvenliği, işlem loglarının izlenmesi ve SWIFT CSP uyumluluk denetimleri.",
    shortAnswer: "SWIFT CSP (Customer Security Programme), uluslararası finans transfer sisteminin güvenliğini korumak için tasarlanmıştır. ACKLOG, SWIFT terminalleri, ödeme ağ geçitleri ve ilgili sunuculardaki tüm hareketleri anlık izleyerek, SWIFT CSP çerçevesindeki \"Sistem Erişim Denetimi ve Olay İzleme\" gereksinimlerini (Özellikle 6.4 maddesi) yerine getirir.",
    technicalSummary: [
      "SWIFT CSP 6.4 (Güvenlik Günlüğü İzleme) kontrol maddesiyle tam uyumluluk.",
      "SWIFT Alliance Access ve Gateway loglarının anlık çözümlenmesi.",
      "SWIFT kullanıcı yetki değişiklikleri ve dosya transfer aktivitelerinin takibi.",
      "Anormal finansal transfer işlemlerinin UEBA ile anlık tespiti."
    ],
    resultParagraph: "Sonuç olarak, SWIFT altyapısına sahip kurumlar için ACKLOG SIEM, SWIFT CSP denetimlerinde tam uyumluluk sağlayan en güvenli ve ekonomik siber güvenlik aracıdır.",
    content: `
      <h2>SWIFT Ödeme Sistemleri Ağ Güvenliği</h2>
      <p>Küresel para transferi ağı SWIFT, bankaları siber hırsızlıklardan korumak amacıyla CSP programını zorunlu kılmıştır. Bu program kapsamında kurumlar, SWIFT altyapılarında oluşan her türlü olayı ve sistem erişimini SIEM üzerinden izlemek zorundadır. ACKLOG, SWIFT log parser'ları sayesinde bu hassas altyapıyı 7/24 izler.</p>
    `,
    faqs: [
      { question: "SWIFT Alliance log formatını destekliyor musunuz?", answer: "Evet, ACKLOG SWIFT Alliance Access ve Gateway sistemlerinden gelen syslog formatındaki logları parse edebilir." }
    ]
  },
  "nis2-uyum-rehberi": {
    title: "NIS2 Uyum Rehberi ve SIEM Gereksinimleri | ACKLOG",
    description: "Avrupa Birliği siber güvenlik direktifi NIS2 kapsamında kritik altyapıların siber olay izleme ve yasal raporlama yükümlülükleri.",
    badge: "AB Direktifleri",
    heroTitle: "NIS2 Uyum Rehberi",
    heroSubtitle: "Kritik tedarik zinciri ve altyapı şirketleri için NIS2 siber dayanıklılık ve SIEM entegrasyonu.",
    shortAnswer: "NIS2, Avrupa Birliği siber güvenlik direktifidir ve kritik altyapı, enerji, lojistik ve sağlık şirketlerini kapsar. Türkiye'de Avrupa ile çalışan veya global faaliyet yürüten şirketlerin NIS2 siber olay tespit ve bildirim gereksinimlerine (Özellikle 24 saat içindeki olay raporlama) uyması şarttır. ACKLOG SIEM, real-time in-memory korelasyonu ile bu süreleri milisaniyeler seviyesine indirir.",
    technicalSummary: [
      "NIS2 direktifindeki siber olay bildirim ve izleme standartlarıyla uyumluluk.",
      "Tedarik zinciri siber tehditlerinin (supply chain attack) anlık tespiti.",
      "Yapay zeka destekli UEBA ve SOAR ile olaylara 24 saatin altında (dakikalar içinde) müdahale.",
      "Detaylı siber olay kayıtlarının (audit logs) yasal delil olarak saklanması."
    ],
    resultParagraph: "Özetle, global standartlarda siber dayanıklılık ve NIS2 uyumluluğu hedefleyen şirketler için ACKLOG, yasal olay müdahale ve raporlama gereksinimlerini eksiksiz yerine getiren yerli siber güçtür.",
    content: `
      <h2>Kritik Altyapılarda NIS2 Standartları</h2>
      <p>NIS2 direktifi, siber güvenliği ulusal ve kurumsal düzeyde bir üst seviyeye taşımayı hedefler. Şirketlerin siber olayları sadece izlemesini değil, aynı zamanda çok hızlı bir şekilde müdahale etmesini ve regülatörlere raporlamasını ister. ACKLOG, entegre SOAR otomasyonu ile siber olay bildirim süreçlerini hızlandırır.</p>
    `,
    faqs: [
      { question: "NIS2 direktifi hangi sektörleri kapsar?", answer: "Enerji, ulaşım, bankacılık, sağlık, dijital altyapı ve kamu yönetimi gibi kritik öneme sahip tüm sektörleri kapsamaktadır." }
    ]
  },
  "dora-uyum-rehberi": {
    title: "DORA (Dijital Operasyonel Dayanıklılık Yasası) ve SIEM | ACKLOG",
    description: "Finans sektörü için AB DORA regülasyonuna uyumlu siber risk yönetimi, olay tespiti ve dayanıklılık testi altyapısı.",
    badge: "Finansal Uyum",
    heroTitle: "DORA Uyum Rehberi",
    heroSubtitle: "Finans kuruluşları için Dijital Operasyonel Dayanıklılık Yasası (DORA) uyumlu SIEM log izleme.",
    shortAnswer: "DORA (Digital Operational Resilience Act), finans sektörünün siber saldırılara karşı operasyonel dayanıklılığını artırmayı hedefler. DORA uyarınca, finans kuruluşları siber olayları tespit etmek, yönetmek ve hızlı bildirmekle yükümlüdür. ACKLOG SIEM & SOAR, finansal ağlarda anormal durumları anında saptayıp otomatik izole ederek operasyonel sürekliliği güvenceye alır.",
    technicalSummary: [
      "DORA Dijital Risk Yönetimi ve Olay Raporlama standartlarına teknik uyum.",
      "Finansal yazılımlar ve altyapı sunucularındaki siber olayların anlık korelasyonu.",
      "Üçüncü taraf (BT tedarikçisi) erişimlerinin ve API çağrılarının izlenmesi.",
      "Siber tatbikatlar ve testler için siber olay simülasyon desteği."
    ],
    resultParagraph: "Özetle, DORA regülasyonlarına uyum sağlamak isteyen finansal kuruluşlar için ACKLOG, dijital operasyonel dayanıklılığı ispatlayan ve siber riskleri minimize eden en güçlü yardımcıdır.",
    content: `
      <h2>Finans Sektöründe DORA Standartları</h2>
      <p>DORA, finansal sistemlerin sadece bilgi güvenliğini değil, iş sürekliliğini de denetler. Büyük bir siber saldırı durumunda finansal işlemlerin durmaması istenir. ACKLOG SIEM, ağdaki anormallikleri hızla yakalayarak sistemlerin çökmesini ve hizmet kesintilerini engeller.</p>
    `,
    faqs: [
      { question: "DORA uyumu için SIEM zorunlu mu?", answer: "Evet, operasyonel ağların 7/24 izlenmesi ve olay tespit süreçlerinin işletilmesi DORA'nın en temel teknik maddelerinden biridir." }
    ]
  }
};

export const programmaticComparisons: Record<string, SEOData> = {
  "splunk-vs-acklog": {
    title: "Splunk vs ACKLOG Karşılaştırmalı Analizi | ACKLOG",
    description: "Splunk log analizi ile ACKLOG SIEM & USO platformunun veri saklama maliyetleri ve arama hızları açısından kıyaslama raporu.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Splunk vs ACKLOG",
    heroSubtitle: "Veri depolama ve sorgulama teknolojilerinde yeni nesil mimari kıyaslaması.",
    shortAnswer: "Splunk devasa log aramalarında yüksek performans sunar fakat yıllık veri saklama maliyetleri (GB/Gün bazlı lisanslama) bütçeleri zorlar. ACKLOG, ClickHouse tabanlı Columnar Database mimarisi ve %80 sıkıştırma teknolojisi sayesinde Splunk'ın veri depolama verimliliğini egale ederken yerel lisanslama avantajı sunar.",
    technicalSummary: [
      "Splunk'ın günlük GB kotalı lisans faturasına karşı ACKLOG'un limitsiz EPS lisansı.",
      "Splunk'ın ağır disk indekslerine karşı ACKLOG'un log boyutunu 5 kat küçülten sıkıştırma teknolojisi.",
      "Splunk'ta ek lisans olan SOAR ve UEBA yeteneklerinin ACKLOG'da yerleşik sunulması.",
      "Yerli mevzuata (5651, KVKK) ve KamuSM API imzalamasına yerleşik tam uyumluluk."
    ],
    resultParagraph: "Kısacası, veri kotası endişesi olmadan tüm loglarınızı güvenle saklamak ve döviz bazlı yüksek faturalardan kurtulmak istiyorsanız ACKLOG en ideal alternatiftir.",
    content: `
      <h2>Depolama ve Sorgu Hızında Teknoloji Kıyası</h2>
      <p>Splunk log analizinde dünya devidir fakat veri boyutu arttıkça lisans faturası astronomik seviyelere ulaşır. ACKLOG, modern ve hafif mimarisi ile veri saklama maliyetlerini %80 oranında düşürür.</p>
    `,
    faqs: [
      { question: "Splunk lisans modeli nasıldır?", answer: "Splunk genellikle günlük indekslenen veri miktarı (GB/Gün) üzerinden lisanslanır ve bu durum kontrolsüz log artışlarında ek maliyetler doğurur." }
    ]
  },
  "qradar-vs-acklog": {
    title: "IBM QRadar vs ACKLOG Detaylı Karşılaştırma | ACKLOG",
    description: "QRadar ile ACKLOG arasındaki lisanslama, donanım kaynak tüketimi ve Türkiye mevzuat uyumluluğu farklarının teknik analizi.",
    badge: "Teknik Kıyaslama",
    heroTitle: "QRadar vs ACKLOG",
    heroSubtitle: "Global siber güvenlik devinin karşısında yerli, dinamik ve bütçe dostu siber güç.",
    shortAnswer: "IBM QRadar güçlü bir enterprise SIEM aracıdır, ancak yüksek lisans ücretleri, donanım kaynak tüketimi (CPU/RAM) ve karmaşık kural yazım süreçleri Türkiye'deki kurumlar için yönetilmesi zor bütçeler oluşturur. ACKLOG, QRadar'ın ihtiyaç duyduğu sunucu gücünün sadece %20'si ile aynı EPS değerlerini asgari donanımla işleyebilir.",
    technicalSummary: [
      "QRadar'ın yüksek CPU/RAM ve donanım gereksinimlerine karşı ACKLOG'un hafif in-memory mimarisi.",
      "QRadar'da EPS sınırı aşıldığında log kaybına karşı ACKLOG'un donanım limitlerince sınırsız EPS yeteneği.",
      "QRadar'da ek modül olan SOAR ve UEBA yeteneklerinin ACKLOG'da yerleşik sunulması.",
      "Türkiye'deki 5651 Sayılı Kanun KamuSM zaman damgası entegrasyonunun yerleşik olması."
    ],
    resultParagraph: "Özetle, döviz bazlı yüksek bakım maliyetleri yerine Türk mühendislerinden doğrudan ve uygun maliyetli 7/24 destek almak ve donanım maliyetlerini düşürmek için ACKLOG tercih edilmelidir.",
    content: `
      <h2>Global Ölçek vs Yerel Hukuki Uyumluluk</h2>
      <p>IBM QRadar global düzeyde güçlü bir SIEM ve SOC aracıdır. Ancak Türkiye pazarındaki KVKK ve 5651 gibi yerel regülasyonlar için ek entegrasyonlar gerektirir. ACKLOG, hem global tehdit algılama standartlarını (MITRE ATT&CK) destekler hem de Türkiye yasalarına %100 uyumludur.</p>
    `,
    faqs: [
      { question: "QRadar sunucu kaynağı ihtiyacı neden bu kadar yüksek?", answer: "QRadar, verileri indekslemek ve korelasyon yapmak için Java tabanlı ağır arka plan servisleri kullanır. ACKLOG ise C++ ve Go dilleriyle yazılmış optimize in-memory mimariye sahip olduğu için kaynak tüketimi çok düşüktür." }
    ]
  },
  "sentinel-vs-acklog": {
    title: "Microsoft Sentinel vs ACKLOG Bulut SIEM Kıyaslaması | ACKLOG",
    description: "Bulut tabanlı Microsoft Sentinel'in veri çekme ve saklama maliyetlerine karşı yerli bulut ve on-premise ACKLOG kıyaslaması.",
    badge: "Bulut SIEM Kıyaslaması",
    heroTitle: "Microsoft Sentinel vs ACKLOG",
    heroSubtitle: "Azure dışındaki log kaynaklarının Sentinel'e aktarımındaki yüksek faturalara yerli ve hibrit çözüm.",
    shortAnswer: "Microsoft Azure Sentinel bulut üzerinde harika çalışır fakat Azure dışındaki firewall, switch, on-prem sunucu loglarını buluta taşırken ödeyeceğiniz bant genişliği (egress/ingress) ve veri işleme faturaları sürpriz maliyetler oluşturur. ACKLOG, yerel bulut veya şirket içi (on-premise) konumlandırma seçeneğiyle bütçenizi korur.",
    technicalSummary: [
      "Sentinel'in aylık değişken veri işleme faturasına karşı ACKLOG'un sabit ve öngörülebilir lisans modeli.",
      "Azure dışındaki log kaynaklarının buluta taşınmasındaki yüksek bant genişliği (bandwidth) maliyetlerinin sıfırlanması.",
      "ACKLOG'un hem on-premise (lokal) hem de bulut hibrit mimaride çalışabilme esnekliği.",
      "5651 KamuSM zaman damgası entegrasyonunun ACKLOG ile yerleşik gelmesi."
    ],
    resultParagraph: "Özetle, hibrit bulut yapısında çalışan ve bulut log aktarım maliyetlerini kontrol altında tutmak isteyen kurumlar için ACKLOG en güvenli ve ekonomik alternatiftir.",
    content: `
      <h2>Sentinel Bulut Maliyetlerinizi Optimize Edin</h2>
      <p>Microsoft Azure Sentinel bulut üzerinde harika çalışır fakat Azure dışındaki firewall, switch, on-prem sunucu loglarını buluta taşırken ödeyeceğiniz bant genişliği (egress/ingress) ve veri işleme faturaları sürpriz maliyetler oluşturur. ACKLOG, yerel bulut veya şirket içi (on-premise) konumlandırma seçeneğiyle bütçenizi korur.</p>
    `,
    faqs: [
      { question: "ACKLOG hibrit çalışmayı destekliyor mu?", answer: "Evet, ACKLOG hem lokal ağınızdaki logları on-prem toplar hem de bulut sistemlerinizle (AWS, Azure) entegre olarak hibrit bir siber izleme sağlar." }
    ]
  },
  "elastic-siem-vs-acklog": {
    title: "Elastic SIEM (ELK) vs ACKLOG Karşılaştırması | ACKLOG",
    description: "Elasticsearch tabanlı siber güvenlik çözümleri ile in-memory Complex Event Processing (CEP) motoruna sahip ACKLOG farkları.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Elastic SIEM vs ACKLOG",
    heroSubtitle: "ELK Stack'in yönetim zorluklarına karşı her şey dahil profesyonel SIEM platformu.",
    shortAnswer: "Açık kaynak ELK (Elasticsearch, Logstash, Kibana) ile SIEM kurmak cazip görünür. Ancak Logstash konfigürasyonlarının karmaşıklığı, veri boyutu arttıkça Elasticsearch disk indekslerinin şişmesi ve çökme sorunları BT ekiplerini yorar. ACKLOG, hazır parser motoru ve stabil veri tabanı yapısıyla bu sorunları tamamen ortadan kaldırır.",
    technicalSummary: [
      "Elasticsearch'ün ters indeks (inverted index) şişmesine karşı ACKLOG'un %80 depolama tasarruflu sütun yapısı.",
      "ELK'daki manuel kural yazım zorluklarına karşı ACKLOG'un no-code korelasyon arayüzü.",
      "Yasal 5651 imzalama ve KamuSM zaman damgasının ACKLOG'da yerleşik olarak gelmesi.",
      "Elastic Enterprise lisans maliyetlerine kıyasla ACKLOG'un yerel fiyat avantajı."
    ],
    resultParagraph: "Sonuç olarak, açık kaynak kodlu sistemlerin getirdiği bakım, donanım şişmesi ve insan kaynağı zorluklarından kurtulmak için ACKLOG hazır ve kararlı bir kurumsal çözümdür.",
    content: `
      <h2>ELK Kurulum ve Yönetim Zorluklarını Geride Bırakın</h2>
      <p>Açık kaynak ELK (Elasticsearch, Logstash, Kibana) ile SIEM kurmak cazip görünür. Ancak Logstash konfigürasyonlarının karmaşıklığı, veri boyutu arttıkça Elasticsearch disk indekslerinin şişmesi ve çökmeler BT ekiplerini yorar. ACKLOG, hazır parser motoru ve stabil veri tabanı yapısıyla bu sorunları tamamen ortadan kaldırır.</p>
    `,
    faqs: [
      { question: "Elastic SIEM'in donanım tüketimi neden fazladır?", answer: "Elasticsearch, metin araması için her kelimeyi ters indeks (inverted index) olarak saklar. Bu da veri boyutunun diskte 3-4 kat şişmesine yol açar." }
    ]
  },
  "logsign-vs-acklog": {
    title: "Logsign vs ACKLOG SIEM Karşılaştırması | ACKLOG",
    description: "Yerli SIEM arayışınızda Logsign ile ACKLOG'un Big Data mimarisi, in-memory performansı ve modern arayüz farkı.",
    badge: "Yerli SIEM Karşılaştırması",
    heroTitle: "Logsign vs ACKLOG",
    heroSubtitle: "Eski nesil veri saklama yapıları yerine in-memory ve Columnar mimariyle çalışan yerli SIEM.",
    shortAnswer: "Logsign, Türkiye pazarında bilinen yerli loglama araçlarından biridir. Ancak kullanıcılar, yüksek log hacimlerinde arayüzün yavaşlaması ve korelasyon motorunun asenkron çalışmasından şikayetçi olabilmektedir. ACKLOG, in-memory stream korelasyon mimarisi sayesinde logları anında analiz eder ve arayüzde donma yaşatmaz.",
    technicalSummary: [
      "Logsign'ın Elasticsearch tabanlı yapısına karşı ACKLOG'un ClickHouse tabanlı Columnar veri yapısı.",
      "Büyük veri sorgularında ACKLOG'un 10 kat daha hızlı arama (instant search) sunması.",
      "ACKLOG'un in-memory korelasyon motoru ile tehditleri algılama gecikmesinin sıfırlanması.",
      "ACKLOG'un daha kullanıcı dostu, no-code parse arayüzüne sahip olması."
    ],
    resultParagraph: "Özetle, yerli SIEM arayışınızda daha modern, hızlı arama yapabilen ve donanımı yormayan bir çözüm için ACKLOG en güncel alternatiftir.",
    content: `
      <h2>Yerli SIEM Seçiminde ACKLOG ve Logsign Kıyaslaması</h2>
      <p>Logsign, Türkiye pazarında bilinen yerli loglama araçlarından biridir. Ancak kullanıcılar, yüksek log hacimlerinde arayüzün yavaşlaması ve korelasyon motorunun asenkron çalışmasından şikayetçi olabilmektedir. ACKLOG, in-memory stream korelasyon mimarisi sayesinde logları anında analiz eder ve arayüzde donma yaşatmaz.</p>
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
    shortAnswer: "Wazuh, popüler bir açık kaynak kodlu SIEM/XDR çözümüdür. Lisans ücreti olmaması cazip görünse de, 5651 Sayılı Kanun zaman damgası entegrasyonu, Türkçe raporlama şablonları, yerel firewall log parser'ları ve 7/24 profesyonel teknik destek ihtiyacı işletmelere gizli insan kaynağı maliyetleri çıkarır. ACKLOG, tüm bunları kutudan çıktığı anda hazır sunar.",
    technicalSummary: [
      "Wazuh'ta KamuSM zaman damgası yerleşik gelmez; bunu yapmak için harici scriptler yazmanız ve bunları sürekli güncel tutmanız gerekir.",
      "ACKLOG'un yerli mühendisler tarafından sağlanan 7/24 doğrudan Türkçe destek avantajı.",
      "ACKLOG'da dahili olarak bulunan ve sürükle-bırak ile yönetilen Türkçe raporlar.",
      "Wazuh'un ELK tabanlı depolamasına karşı ACKLOG'un %80 sıkıştırmalı columnar depolama avantajı."
    ],
    resultParagraph: "Özetle, siber güvenlik yönetimi ve yasal uyumluluğu ek mühendislik maliyetleriyle açık kaynak kodlu kurmaya çalışmak yerine, ACKLOG her şey dahil yapısıyla daha güvenlidir.",
    content: `
      <h2>Açık Kaynak Kodlu SIEM'lerin Gizli Maliyetleri</h2>
      <p>Wazuh, popüler bir açık kaynak kodlu SIEM/XDR çözümüdür. Lisans ücreti olmaması cazip görünse de, 5651 Sayılı Kanun zaman damgası entegrasyonu, Türkçe raporlama şablonları, yerel firewall log parser'ları ve 7/24 profesyonel teknik destek ihtiyacı işletmelere gizli insan kaynağı maliyetleri çıkarır. ACKLOG, tüm bunları kutudan çıktığı anda hazır sunar.</p>
    `,
    faqs: [
      { question: "Wazuh ile 5651 zaman damgası yapmak mümkün mü?", answer: "Wazuh'ta KamuSM zaman damgası yerleşik gelmez; bunu yapmak için harici scriptler yazmanız ve bunları sürekli güncel tutmanız gerekir. ACKLOG'da ise bu özellik yerleşiktir." }
    ]
  },
  "graylog-vs-acklog": {
    title: "Graylog vs ACKLOG SIEM & Log Karşılaştırması | ACKLOG",
    description: "Graylog log yönetim yazılımı ile siber olay korelasyonu, SOAR ve yasal 5651 KamuSM imzalama yeteneklerine sahip ACKLOG kıyaslaması.",
    badge: "Teknik Kıyaslama",
    heroTitle: "Graylog vs ACKLOG",
    heroSubtitle: "Açık kaynak log toplama aracına karşı tam kapsamlı siber olay korelasyon ve SOAR gücü.",
    shortAnswer: "Graylog, log toplama ve arama (log management) konusunda başarılı bir açık kaynak/kurumsal araçtır. Ancak siber tehditleri tespit edecek gerçek zamanlı Complex Event Processing (CEP) korelasyon motoru, entegre SOAR playbook'ları ve Türkiye yasal mevzuatlarına (5651, KVKK) uyumluluğu yerleşik olarak barındırmaz. ACKLOG, log toplamanın ötesinde tam bir SIEM & SOAR çözümüdür.",
    technicalSummary: [
      "Graylog'un temel log toplama odağına karşı ACKLOG'un entegre SIEM, UEBA ve SOAR mimarisi.",
      "Graylog Elasticsearch/MongoDB donanım tüketimine karşı ACKLOG'un %80 tasarruflu ClickHouse depolaması.",
      "5651 KamuSM zaman damgası entegrasyonunun ACKLOG ile kutudan çıktığı gibi çalışması.",
      "Graylog Enterprise sürümündeki döviz bazlı yüksek ücretlere karşı ACKLOG'un yerli fiyat avantajı."
    ],
    resultParagraph: "Özetle, sadece log toplamak değil, siber saldırıları milisaniyeler seviyesinde durdurmak ve yasal yükümlülükleri zahmetsizce yerine getirmek istiyorsanız ACKLOG en uygun çözümdür.",
    content: `
      <h2>Log Toplama mı, Siber Olay Yönetimi mi?</h2>
      <p>Graylog, IT departmanları için hata ayıklama (troubleshooting) amacıyla log toplamada etkilidir. Ancak siber güvenlik operasyonları (SOC) için logların anlık korelasyonu ve alarmların otomatik müdahaleyle (SOAR) kesilmesi gerekir. ACKLOG, Graylog'un log arama yeteneğini gelişmiş siber güvenlik zırhıyla birleştirir.</p>
    `,
    faqs: [
      { question: "Graylog ile korelasyon yapılabilir mi?", answer: "Graylog'un ücretsiz sürümünde korelasyon yetenekleri oldukça kısıtlıdır; gelişmiş kurallar ve alarmlar için Enterprise sürümü veya ACKLOG gibi bir SIEM tercih edilmelidir." }
    ]
  },
  "alienvault-vs-acklog": {
    title: "AlienVault USM vs ACKLOG SIEM Karşılaştırması | ACKLOG",
    description: "AT&T AlienVault USM (Unified Security Management) ile yerli ve in-memory mimariye sahip ACKLOG SIEM & USO platformu karşılaştırması.",
    badge: "Teknik Kıyaslama",
    heroTitle: "AlienVault vs ACKLOG",
    heroSubtitle: "Global USM çözümünün yüksek maliyetlerine karşı esnek, hızlı ve yerli siber güvenlik platformu.",
    shortAnswer: "AlienVault USM, siber güvenlik araçlarını bir arada sunan köklü bir çözümdür. Ancak Türkiye'deki kurumlar için döviz bazlı yüksek maliyetler, karmaşık ağ sensörü kurulumları ve bulut entegrasyon limitleri zorluklar oluşturur. ACKLOG, AlienVault'un sunduğu siber görünürlüğü çok daha hafif bir ajan yapısıyla ve Türkiye mevzuat uyumluluğuyla yerel olarak sunar.",
    technicalSummary: [
      "AlienVault'un ağır sensör altyapısına karşı ACKLOG'un hafif ve kolay kurulan ajan/ajansız mimarisi.",
      "AlienVault USM'in döviz bazlı yüksek yıllık kiralama bedellerine karşı ACKLOG'un bütçe dostu yerel fiyatları.",
      "Türkiye 5651 Kanunu KamuSM zaman damgası entegrasyonunun ACKLOG ile yerleşik gelmesi.",
      "Yerli ve 7/24 kesintisiz uzman teknik destek avantajı."
    ],
    resultParagraph: "Sonuç olarak, AlienVault'un sunduğu tehdit algılama derinliğini yerel regülasyon uyumu ve uygun bütçelerle elde etmek isteyen kurumlar için ACKLOG en güçlü alternatif konumundadır.",
    content: `
      <h2>Geniş Siber Görünürlük Kıyaslaması</h2>
      <p>AlienVault USM (yeni adıyla AT&T Cybersecurity), zafiyet tarama, IDS ve SIEM yeteneklerini tek çatıda sunar. ACKLOG ise bu yetenekleri daha modern, in-memory çalışan bir Complex Event Processing (CEP) motoru ve yerleşik SOAR modülü ile birleştirerek saldırıları sadece algılamakla kalmaz, otomatik olarak durdurur.</p>
    `,
    faqs: [
      { question: "AlienVault yerine ACKLOG göçü (migration) zor mu?", answer: "Hayır, log kaynaklarınızı syslog veya ajanlar üzerinden ACKLOG'a yönlendirmek ve hazır parser'ları aktif etmek sadece birkaç saat sürer." }
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
    shortAnswer: "Fortinet FortiGate güvenlik duvarları, ağ trafiğini kontrol ederken yoğun log üretir. ACKLOG, FortiGate cihazlarından gelen Syslog verilerini (port 514) gerçek zamanlı olarak parse eden hazır kurallara sahiptir. NAT, DHCP ve Web Filtre loglarını otomatik eşleştirir ve 5651 sayılı kanun gereği KamuSM zaman damgasıyla imzalar.",
    technicalSummary: [
      "FortiGate syslog formatları için hazır ve optimize edilmiş parser motoru.",
      "Kullanıcı iç IP (DHCP) ve dış IP port (NAT) loglarının otomatik korelasyonu.",
      "Tehdit (IPS) ve zararlı site engelleme loglarından anlık alarm üretimi.",
      "Erişim kayıtlarının 5651 Sayılı Kanuna uygun olarak yasal imzalanması."
    ],
    resultParagraph: "Özetle, FortiGate firewall kullanan kurumlar için ACKLOG, yasal 5651 log imzalama zorunluluğunu ve ağ güvenliği izlemeyi ek donanım yükü getirmeden çözer.",
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
    shortAnswer: "Palo Alto Next-Generation Firewall cihazları, detaylı siber tehdit ve uygulama logları üretir. ACKLOG, Palo Alto syslog loglarını anlık olarak parse ederek MITRE ATT&CK siber saldırı teknikleriyle eşleştirir ve siber sızma girişimlerini algılayarak alarm üretir.",
    technicalSummary: [
      "Palo Alto trafik, tehdit (threat) ve URL logları için hazır parser desteği.",
      "Algılanan tehditlerin MITRE ATT&CK matrisiyle anlık eşleştirilmesi.",
      "Ağ erişim loglarının 5651 Sayılı Kanuna uygun olarak zaman damgalanması.",
      "Yetkisiz veri transferi (exfiltration) girişimlerinde otomatik engelleme (SOAR)."
    ],
    resultParagraph: "Sonuç olarak, Palo Alto firewall altyapısına sahip kurumlar için ACKLOG, üst seviye siber tehdit algılama ve yasal uyumluluk raporlamasını tek panelden sunar.",
    content: `
      <h2>Palo Alto Loglarının Derinlemesine Çözümlenmesi</h2>
      <p>Palo Alto NGFW cihazlarının ürettiği detaylı trafik ve tehdit (threat) logları, siber saldırıların tespitinde kritik rol oynar. ACKLOG, Palo Alto'nun syslog formatındaki loglarını yüksek hızda parse eder ve MITRE ATT&CK tehdit matrisindeki tekniklerle eşleştirerek SOC ekiplerine anlık bildirim gönderir.</p>
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
    shortAnswer: "Sophos UTM ve XG serisi firewall logları, iç ağ güvenliği ve uzaktan çalışanların takibi için değerlidir. ACKLOG, Sophos log akışını toplayarak SSL-VPN bağlantılarını, web filtreleme kayıtlarını ve iç-dış NAT port loglarını parse eder, 5651 Sayılı Kanun gereğince zaman damgasıyla imzalar.",
    technicalSummary: [
      "Sophos XG/UTM syslog verileri için optimize hazır parser.",
      "VPN bağlantı geçmişleri ve başarısız giriş denemelerinin anlık takibi.",
      "DHCP ve NAT loglarının otomatik korelasyonuyla yasal 5651 arşivlemesi.",
      "Gereksiz syslog satırlarını filtreleyerek disk alanından tasarruf sağlama."
    ],
    resultParagraph: "Özetle, Sophos güvenlik duvarı kullanan işletmelerde ACKLOG, VPN ve ağ erişim loglarını yasal gereksinimlere tam uyumlu ve güvenli saklamanın en kolay yoludur.",
    content: `
      <h2>Sophos Logları ile VPN ve Trafik Takibi</h2>
      <p>Sophos güvenlik duvarları üzerinden ağa bağlanan kullanıcıların (SSL-VPN) ve iç trafik hareketlerinin izlenmesi hem KVKK hem de siber güvenlik açısından zorunludur. ACKLOG, Sophos loglarını parse ederek başarısız VPN denemelerini ve yetkisiz erişimleri raporlar.</p>
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
    shortAnswer: "Microsoft 365 bulut e-posta ve kimlik yönetim altyapıları (Azure AD/Entra ID), siber saldırganların kimlik avı (phishing) için hedefidir. ACKLOG, Microsoft Graph API entegrasyonuyla e-posta yönlendirme kurallarını, admin yetki değişikliklerini ve buluta yapılan başarısız giriş denemelerini anlık izler.",
    technicalSummary: [
      "Microsoft Graph API üzerinden asenkron ve şifreli log çekme altyapısı.",
      "Microsoft Entra ID (Azure AD) oturum açma ve kimlik doğrulama loglarının analizi.",
      "Exchange Online admin yetki değişimleri ve e-posta yönlendirme alarmları.",
      "Bulut üzerinde algılanan siber tehditlerin lokal ağ loglarıyla korelasyonu."
    ],
    resultParagraph: "Sonuç olarak, Microsoft 365 ortamınızı ACKLOG ile entegre ederek bulut siber risklerinizi minimize edebilir ve yetkisiz veri sızıntılarını anında yakalayabilirsiniz.",
    content: `
      <h2>Microsoft 365 (O365) Ortamınızda Güvenlik Görünürlüğü</h2>
      <p>Şirketlerin buluta taşınmasıyla siber saldırganlar artık bulut e-posta hesaplarını ve admin panellerini hedef almaktadır. ACKLOG, Microsoft Graph API entegrasyonuyla M365 admin hareketlerini, Exchange e-posta yönlendirme kurallarını ve Microsoft Entra ID (Azure AD) giriş loglarını anlık olarak izler.</p>
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
    shortAnswer: "AWS CloudTrail, Amazon Web Services bulut ortamınızdaki API çağrılarını ve kaynak değişikliklerini kayıt altına alır. ACKLOG, AWS API entegrasyonuyla CloudTrail loglarını çekerek, AWS IAM yetki değişikliklerini, şüpheli S3 bucket erişimlerini ve yeni açılan sanal makineleri anlık izler.",
    technicalSummary: [
      "AWS CloudTrail S3 bucket ve API loglarının güvenli otomatik çekilmesi.",
      "AWS IAM (kimlik yönetimi) üzerindeki kritik yetki değişikliklerinin tespiti.",
      "Bulut güvenlik gruplarındaki (Security Groups) gevşetmelerin anlık alarm üretmesi.",
      "AWS loglarının KVKK teknik tedbirleri kapsamında şifreli arşivlenmesi."
    ],
    resultParagraph: "Özetle, AWS bulut altyapınızın siber güvenliğini ACKLOG SIEM entegrasyonuyla sağlayarak bulut risklerini ve veri sızıntılarını proaktif kontrol altında tutabilirsiniz.",
    content: `
      <h2>Amazon Web Services Bulut Güvenliği</h2>
      <p>AWS üzerinde çalışan sunucular, veritabanları ve IAM (kimlik erişim) kuralları siber tehditlere karşı sürekli izlenmelidir. ACKLOG, AWS CloudTrail loglarını asenkron olarak toplayıp normalize eder. AWS üzerinde yetkisiz bir S3 bucket açılması veya güvenlik grubu (security group) kurallarının gevşetilmesi gibi durumlar anında alarm üretir.</p>
    `,
    faqs: [
      { question: "AWS S3 bucket erişim loglarını toplayabiliyor mumuz?", answer: "Evet, AWS CloudTrail ve S3 access logları AWS API'leri üzerinden ACKLOG'a güvenli şekilde aktarılır." }
    ]
  },
  "azure-log-yonetimi": {
    title: "Microsoft Azure Cloud Log Yönetimi ve SIEM | ACKLOG",
    description: "Azure sanal makineleri, SQL veritabanları ve Azure Monitor loglarının ACKLOG yerli SIEM platformuyla izlenmesi.",
    badge: "Bulut Entegrasyonu",
    heroTitle: "Azure Log Yönetimi",
    heroSubtitle: "Azure bulut altyapınızın güvenlik takibi ve log izleme çözümleri.",
    shortAnswer: "Azure bulut altyapısında gerçekleşen sanal makine kurulumları, veritabanı sorguları ve kullanıcı erişimleri izlenmelidir. ACKLOG, Azure Event Hubs veya Azure Monitor API'leri üzerinden Azure loglarını toplar ve on-premise (lokal) SIEM platformunuzla korele ederek hibrit koruma sağlar.",
    technicalSummary: [
      "Azure Event Hubs entegrasyonu ile gerçek zamanlı ve kayıpsız log toplama.",
      "Azure SQL ve sanal sunucu (VM) erişim loglarının merkezi izlenmesi.",
      "Microsoft Azure portal yetkilendirme ve kaynak değişikliklerinin anlık takibi.",
      "Azure Sentinel'in yüksek bulut depolama maliyetlerine karşı yerel saklama alternatifi."
    ],
    resultParagraph: "Kısacası, Azure bulut ortamınızın güvenliğini ACKLOG ile izleyerek yüksek bulut depolama faturalarından kurtulabilir ve tüm siber olayları tek merkezden yönetebilirsiniz.",
    content: `
      <h2>Azure Bulut Altyapısı Güvenliği</h2>
      <p>Microsoft Azure portalında gerçekleşen şüpheli girişler, sanal makine değişiklikleri ve veri erişimleri ACKLOG ile izlenebilir. Azure Event Hubs entegrasyonu sayesinde tüm Azure loglarınız lokal veya hibrit konumlandırılmış ACKLOG SIEM platformuna güvenle akar.</p>
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
    shortAnswer: "Windows Server ve Active Directory (AD), kurumsal ağların temel kimlik yönetim mekanizmalarıdır. ACKLOG, Windows sunucularından Winlogbeat ajanı veya ajansız WMI protokolü ile Security, System ve Application loglarını toplar, AD yetki değişimlerini ve başarısız oturum açmaları anlık analiz eder.",
    technicalSummary: [
      "Winlogbeat veya ajansız WMI (Windows Management Instrumentation) ile log toplama.",
      "Active Directory üzerindeki yeni açılan kullanıcılar ve admin grubu yetki değişimleri.",
      "Sunuculardaki sistem kapatma, servis durdurma gibi şüpheli aktivitelerin takibi.",
      "Brute force (kaba kuvvet) oturum açma denemelerinin anlık tespit edilerek engellenmesi."
    ],
    resultParagraph: "Özetle, Active Directory ve Windows sunucularınızın güvenliğini ACKLOG ile izleyerek kimlik hırsızlığı (credential access) girişimlerini yayılmadan durdurabilirsiniz.",
    content: `
      <h2>Windows Sunucu Güvenliğinde Active Directory Takibi</h2>
      <p>Kurumsal ağların temelini oluşturan Windows Server ve Active Directory (AD), siber saldırganların kimlik bilgisi ele geçirmek için hedeflediği ana yapılardır. ACKLOG, hafif ajan (lightweight agent) veya WMI üzerinden Windows Event loglarını toplar. Başarısız oturum açmalar, yeni eklenen admin kullanıcıları ve grup politikası değişiklikleri anlık izlenir.</p>
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
    shortAnswer: "Linux sunucular, kurumsal veritabanlarını ve kritik uygulamaları barındırır. ACKLOG, Linux sunucularından rsyslog veya syslog-ng üzerinden kimlik doğrulama (auth.log) ve sistem loglarını toplar. Ayrıca auditd entegrasyonuyla sunucularda çalıştırılan tehlikeli komutları (rm, chmod vb.) denetler.",
    technicalSummary: [
      "Linux rsyslog ve syslog-ng protokolleri ile hızlı ve kararlı entegrasyon.",
      "SSH bağlantı geçmişleri, başarılı/başarısız login denemelerinin takibi.",
      "Linux auditd ile sistem dosyalarına yetkisiz müdahalelerin anlık izlenmesi.",
      "Linux sunuculardaki cron job (zamanlanmış görev) değişikliklerinin denetlenmesi."
    ],
    resultParagraph: "Sonuç olarak, Linux sunucularınızın güvenliğini ACKLOG ile izleyerek SSH sızma girişimlerini ve yetkisiz sistem komutlarını anında saptayıp engelleyebilirsiniz.",
    content: `
      <h2>Linux Sunucuların Güvenliği ve Auditd Takibi</h2>
      <p>Linux sunucular genellikle kritik veritabanlarını ve web uygulamalarını barındırır. ACKLOG, rsyslog veya syslog-ng üzerinden Linux sunucularındaki kimlik doğrulama (/var/log/auth.log) ve sistem loglarını toplar. Ayrıca auditd entegrasyonuyla sunucuda çalıştırılan tehlikeli komutları (örn: rm -rf, yetkisiz chmod) izler.</p>
    `,
    faqs: [
      { question: "Linux SSH başarısız giriş alarmları kurulabilir mi?", answer: "Evet, kısa süre içinde gerçekleşen çok sayıda başarısız SSH giriş denemesi kaba kuvvet (brute force) saldırısı olarak algılanıp alarm üretir." }
    ]
  }
};
