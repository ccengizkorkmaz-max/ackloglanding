import { SEOData } from '../programmatic-seo';

export const competitorComparisonPages: Record<string, SEOData> = {
  "logsign-siem-vs-acklog": {
    title: "Logsign SIEM vs ACKLOG – Yerli SIEM Karşılaştırması 2026 | ACKLOG",
    description: "Logsign SIEM ile ACKLOG karşılaştırması. EPS performansı, maliyet, uyum raporlama ve mimari farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Logsign SIEM vs ACKLOG",
    heroSubtitle: "Türkiye'nin en popüler iki yerli SIEM platformunun detaylı karşılaştırması.",
    shortAnswer: "Logsign, Türkiye'nin bilinen yerli SIEM çözümlerinden biridir. ACKLOG ise yeni nesil in-memory mimarisi, ClickHouse tabanlı columnar database ve yerleşik UEBA modülüyle öne çıkar. Bu karşılaştırma, her iki ürünün EPS kapasitesi, depolama maliyeti, uyum raporlama ve kullanıcı deneyimi açısından farkları ortaya koyar.",
    technicalSummary: [
      "Mimari: ACKLOG in-memory + ClickHouse columnar DB / Logsign Elasticsearch tabanlı.",
      "EPS Kapasitesi: ACKLOG 100K+ EPS tek node / Logsign küme mimarisinde yüksek EPS.",
      "Depolama: ACKLOG %90 sıkıştırma oranı, Logsign standart sıkıştırma.",
      "UEBA: ACKLOG yerleşik makine öğrenmesi / Logsign ayrı modül olarak sunuyor."
    ],
    resultParagraph: "ACKLOG, Logsign'a kıyasla in-memory mimarisi sayesinde daha düşük donanım maliyetiyle daha yüksek EPS performansı sunar. ClickHouse columnar database ile 5 kata kadar daha az depolama maliyeti sağlar.",
    content: `<h2>Mimari Farklar</h2><p>Logsign, Elasticsearch tabanlı bir arama ve indeksleme mimarisi kullanır. Bu mimari esneklik sunarken, yüksek EPS hacimlerinde donanım maliyetlerini artırır. ACKLOG ise ClickHouse columnar database üzerinde çalışarak log verilerini %90'a kadar sıkıştırır ve sorgu performansını 10 kata kadar artırır.</p><h3>Performans Karşılaştırması</h3><p>ACKLOG'un in-memory korelasyon motoru, olayları bellekte işleyerek disk I/O darboğazını ortadan kaldırır. Bu sayede tek bir ACKLOG node'u, Logsign'ın birden fazla node gerektirdiği EPS hacimlerini karşılayabilir.</p><h3>Uyum Raporlama</h3><p>Her iki ürün de KVKK ve 5651 uyum raporları sunar. ACKLOG, KamuSM zaman damgası entegrasyonuyla logların delil niteliğinde saklanmasını garantiler.</p><h3>Maliyet Karşılaştırması</h3><p>ACKLOG sabit fiyat lisans modeli sunarken, Logsign EPS bazlı fiyatlandırma uygular. Yüksek log hacimlerinde ACKLOG'un TCO (Total Cost of Ownership) avantajı belirginleşir.</p>`,
    faqs: [
      { question: "Logsign'dan ACKLOG'a geçiş zor mu?", answer: "Hayır, ACKLOG migrasyon aracı mevcut Logsign konfigürasyonlarını (korelasyon kuralları, dashboard'lar) otomatik olarak dönüştürür. Geçiş süresi genellikle 1-3 iş günüdür." },
      { question: "Logsign ile ACKLOG aynı log kaynaklarını destekliyor mu?", answer: "Evet, her iki ürün de Syslog, WMI, API ve agent tabanlı log toplama yöntemlerini destekler. Aynı log kaynaklarını kullanabilirsiniz." }
    ]
  },
  "cryptosim-vs-acklog": {
    title: "CryptoSIM vs ACKLOG – SIEM Karşılaştırması 2026 | ACKLOG",
    description: "Crypttech CryptoSIM ile ACKLOG SIEM karşılaştırması. Performans, maliyet ve özellik farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "CryptoSIM vs ACKLOG",
    heroSubtitle: "Crypttech CryptoSIM ve ACKLOG SIEM platformlarının detaylı özellik karşılaştırması.",
    shortAnswer: "CryptoSIM, Crypttech tarafından geliştirilen yerli SIEM çözümüdür. ACKLOG, CryptoSIM'e kıyasla yeni nesil columnar database mimarisi, yerleşik UEBA ve SOAR entegrasyonu ile daha modern bir yaklaşım sunar. Bu karşılaştırma her iki ürünün güçlü ve zayıf yönlerini ortaya koyar.",
    technicalSummary: [
      "Veritabanı: ACKLOG ClickHouse columnar DB / CryptoSIM geleneksel RDBMS.",
      "Korelasyon: ACKLOG in-memory real-time / CryptoSIM disk tabanlı.",
      "SOAR: ACKLOG yerleşik otomasyon / CryptoSIM ayrı ürün gerektirir.",
      "Uyum: Her ikisi de KVKK, 5651, ISO 27001 raporları destekler."
    ],
    resultParagraph: "ACKLOG, CryptoSIM'e göre daha modern bir mimari sunar. Columnar database ile depolama maliyetlerini düşürürken, in-memory korelasyon ile tespit hızını artırır.",
    content: `<h2>CryptoSIM ve ACKLOG Karşılaştırması</h2><p>CryptoSIM, Crypttech'in SIEM ürünüdür ve Türkiye'deki kamu ve özel sektörde kullanılmaktadır. ACKLOG ise yeni nesil mimarisiyle öne çıkan yerli SIEM platformudur.</p><h3>Mimari Farklar</h3><p>CryptoSIM geleneksel RDBMS tabanlı bir veri deposu kullanırken, ACKLOG ClickHouse columnar database ile çalışır. Bu fark, özellikle yüksek hacimli log ortamlarında sorgu performansı ve depolama maliyeti açısından ACKLOG lehine belirgin bir avantaj sağlar.</p><h3>Korelasyon Motoru</h3><p>ACKLOG'un in-memory korelasyon motoru, olayları bellekte gerçek zamanlı işler. CryptoSIM ise disk tabanlı korelasyon kullanır, bu da yüksek EPS'lerde gecikmeye neden olabilir.</p>`,
    faqs: [
      { question: "CryptoSIM'den ACKLOG'a geçiş yapılabilir mi?", answer: "Evet, ACKLOG migrasyon desteği ile mevcut korelasyon kurallarınız ve dashboard'larınız taşınabilir." }
    ]
  },
  "fortilogger-vs-acklog": {
    title: "Fortilogger vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "Fortilogger ile ACKLOG karşılaştırması. Log toplama, sıkıştırma, korelasyon ve uyum farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Fortilogger vs ACKLOG",
    heroSubtitle: "Dolusoft Fortilogger ve ACKLOG log yönetimi platformlarının karşılaştırması.",
    shortAnswer: "Fortilogger, Dolusoft tarafından geliştirilen yerli log yönetimi çözümüdür. Temel log toplama ve saklama odaklıdır. ACKLOG ise log yönetiminin ötesinde SIEM korelasyonu, UEBA ve SOAR entegrasyonu sunan kapsamlı bir güvenlik platformudur.",
    technicalSummary: [
      "Kapsam: Fortilogger log toplama ve saklama / ACKLOG SIEM + Log + SOAR.",
      "Korelasyon: Fortilogger temel alarm kuralları / ACKLOG gelişmiş korelasyon motoru.",
      "UEBA: Fortilogger yok / ACKLOG yerleşik kullanıcı davranış analizi.",
      "Uyum: Her ikisi de 5651, KVKK loglarını toplar ve saklar."
    ],
    resultParagraph: "Fortilogger temel log yönetimi için uygun bir çözümken, ACKLOG siber güvenlik operasyonlarının tamamını kapsayan bir platform sunar. Tehdit tespiti, korelasyon ve otomatik müdahale ihtiyacı olan kurumlar için ACKLOG daha kapsamlıdır.",
    content: `<h2>Fortilogger vs ACKLOG</h2><p>Fortilogger, özellikle 5651 uyumu için log toplama ve saklama odaklı bir çözümdür. ACKLOG ise log yönetimini SIEM, UEBA ve SOAR ile birleştiren kapsamlı bir güvenlik platformudur.</p><h3>Temel Farklar</h3><p><strong>Log Yönetimi vs SIEM:</strong> Fortilogger logları toplar ve saklar, temel alarm kuralları sunar. ACKLOG ise toplanan logları korelasyon motoruyla analiz eder, MITRE ATT&CK ile eşleştirir ve otomatik müdahale başlatır.</p><h3>Depolama</h3><p>ACKLOG'un ClickHouse columnar database'i, Fortilogger'a kıyasla %90'a kadar daha az depolama alanı kullanır.</p>`,
    faqs: [
      { question: "Fortilogger yeterli değilse neden ACKLOG'a geçmeliyim?", answer: "Eğer sadece log saklama ve 5651 uyumu yeterli değilse, SIEM korelasyonu, tehdit tespiti ve otomatik müdahale ihtiyacınız varsa ACKLOG daha kapsamlı bir çözüm sunar." }
    ]
  },
  "infraskope-vs-acklog": {
    title: "Infraskope SIEM vs ACKLOG – SIEM Karşılaştırması | ACKLOG",
    description: "Karmasis Infraskope SIEM Server ile ACKLOG karşılaştırması. Performans ve özellik farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Infraskope SIEM vs ACKLOG",
    heroSubtitle: "Karmasis Infraskope SIEM Server ve ACKLOG platformlarının karşılaştırması.",
    shortAnswer: "Infraskope SIEM Server, Karmasis tarafından geliştirilen yerli SIEM çözümüdür. ACKLOG, Infraskope'a kıyasla yeni nesil in-memory mimarisi ve columnar database ile daha yüksek performans ve daha düşük maliyet sunar.",
    technicalSummary: [
      "Mimari: ACKLOG in-memory + ClickHouse / Infraskope geleneksel mimari.",
      "Performans: ACKLOG 100K+ EPS tek node / Infraskope küme gerektirir.",
      "UEBA: ACKLOG yerleşik / Infraskope sınırlı davranış analizi.",
      "Uyum: Her ikisi de KVKK, 5651 raporlama desteği sunar."
    ],
    resultParagraph: "ACKLOG, Infraskope SIEM'e göre daha modern mimari ve daha yüksek performans sunar.",
    content: `<h2>Infraskope SIEM vs ACKLOG</h2><p>Infraskope SIEM Server, Karmasis'in kurumsal SIEM çözümüdür. ACKLOG ise yeni nesil mimarisiyle öne çıkan yerli SIEM platformudur.</p><h3>Performans</h3><p>ACKLOG'un in-memory korelasyon motoru ve ClickHouse columnar database'i, Infraskope'un geleneksel mimarisine göre belirgin performans avantajı sağlar.</p>`,
    faqs: [{ question: "Infraskope'dan ACKLOG'a geçiş yapılabilir mi?", answer: "Evet, ACKLOG profesyonel servis ekibi migrasyon desteği sunmaktadır." }]
  },
  "logalarm-vs-acklog": {
    title: "LogAlarm vs ACKLOG – SIEM+ Karşılaştırması | ACKLOG",
    description: "OrianaSOFT LogAlarm SIEM+ ile ACKLOG karşılaştırması. Log merkezileştirme ve SIEM farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "LogAlarm vs ACKLOG",
    heroSubtitle: "OrianaSOFT LogAlarm SIEM+ ve ACKLOG platformlarının karşılaştırması.",
    shortAnswer: "LogAlarm, OrianaSOFT tarafından geliştirilen log merkezileştirme ve SIEM+ çözümüdür. ACKLOG ise kapsamlı SIEM, UEBA ve SOAR entegrasyonu sunan yeni nesil güvenlik platformudur.",
    technicalSummary: [
      "LogAlarm: Log merkezileştirme + temel SIEM fonksiyonları.",
      "ACKLOG: Tam kapsamlı SIEM + UEBA + SOAR entegrasyonu.",
      "Depolama: ACKLOG columnar DB ile çok daha düşük depolama maliyeti.",
      "Korelasyon: ACKLOG in-memory gerçek zamanlı korelasyon."
    ],
    resultParagraph: "ACKLOG, LogAlarm'ın sunduğu log merkezileştirme özelliklerinin ötesinde kapsamlı SIEM, UEBA ve otomatik müdahale sunar.",
    content: `<h2>LogAlarm vs ACKLOG</h2><p>LogAlarm, log merkezileştirme ve temel SIEM+ fonksiyonları sunan bir çözümdür. ACKLOG ise tam kapsamlı SIEM platformu olarak korelasyon, UEBA ve SOAR entegrasyonu sunar.</p>`,
    faqs: [{ question: "LogAlarm ile ACKLOG arasındaki temel fark nedir?", answer: "LogAlarm log merkezileştirme odaklıdır, ACKLOG ise log yönetiminin ötesinde gelişmiş korelasyon, UEBA ve otomatik müdahale sunan kapsamlı bir SIEM platformudur." }]
  },
  "scopsoc-vs-acklog": {
    title: "ScopSOC vs ACKLOG – SOC Platformu Karşılaştırması | ACKLOG",
    description: "Netsecure ScopSOC ile ACKLOG karşılaştırması. SOC operasyonları, SIEM ve otomasyon farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "ScopSOC vs ACKLOG",
    heroSubtitle: "Netsecure ScopSOC ve ACKLOG güvenlik operasyon platformlarının karşılaştırması.",
    shortAnswer: "ScopSOC, Netsecure tarafından geliştirilen SOC odaklı güvenlik çözümüdür. ACKLOG ise SIEM merkezli bir platform olarak SOC operasyonlarını korelasyon, UEBA ve SOAR ile destekler.",
    technicalSummary: [
      "ScopSOC: SOC operasyon yönetimi odaklı platform.",
      "ACKLOG: SIEM + SOC + UEBA + SOAR tek platformda.",
      "Korelasyon: ACKLOG in-memory gerçek zamanlı korelasyon motoru.",
      "Dashboard: Her ikisi de SOC analist dashboard'ları sunar."
    ],
    resultParagraph: "ACKLOG, ScopSOC'un SOC odaklı yaklaşımının ötesinde SIEM korelasyonu ve UEBA ile daha kapsamlı tehdit tespiti sunar.",
    content: `<h2>ScopSOC vs ACKLOG</h2><p>ScopSOC, SOC operasyonlarını yönetmeye odaklanan bir platformdur. ACKLOG ise SIEM korelasyonu, log yönetimi, UEBA ve SOAR'ı tek platformda birleştirerek SOC operasyonlarının tüm ihtiyaçlarını karşılar.</p>`,
    faqs: [{ question: "ScopSOC ve ACKLOG birlikte kullanılabilir mi?", answer: "ACKLOG, SOC operasyonlarının tüm ihtiyaçlarını tek platformda karşılar. Ayrı bir SOC yönetim aracına gerek kalmaz." }]
  },
  "coslat-vs-acklog": {
    title: "COSLAT Log Server vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "BG-TEK COSLAT Log Server ile ACKLOG karşılaştırması. Log toplama ve güvenlik izleme farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "COSLAT vs ACKLOG",
    heroSubtitle: "BG-TEK COSLAT Log Server ve ACKLOG log yönetimi karşılaştırması.",
    shortAnswer: "COSLAT Log Server, BG-TEK tarafından geliştirilen log toplama ve saklama çözümüdür. ACKLOG ise log yönetimini SIEM korelasyonu, UEBA ve SOAR ile birleştiren kapsamlı bir güvenlik platformudur.",
    technicalSummary: [
      "COSLAT: Log toplama ve saklama odaklı çözüm.",
      "ACKLOG: Log yönetimi + SIEM + UEBA + SOAR tek platformda.",
      "Depolama: ACKLOG columnar DB ile %90 sıkıştırma oranı.",
      "Korelasyon: COSLAT temel alarm / ACKLOG gelişmiş in-memory korelasyon."
    ],
    resultParagraph: "COSLAT temel log yönetimi için uygunken, ACKLOG siber güvenlik operasyonlarının tamamını tek platformda sunar.",
    content: `<h2>COSLAT vs ACKLOG</h2><p>COSLAT, log toplama ve saklama odaklı bir çözümdür. ACKLOG ise kapsamlı SIEM platformu olarak log yönetiminin ötesinde korelasyon, UEBA ve otomatik müdahale sunar.</p>`,
    faqs: [{ question: "COSLAT'tan ACKLOG'a geçiş yapılabilir mi?", answer: "Evet, ACKLOG Syslog ve diğer log kaynaklarını doğrudan destekler. Geçiş sürecinde mevcut log kaynakları kolayca ACKLOG'a yönlendirilir." }]
  },
  "cryptolog-vs-acklog": {
    title: "CryptoLog vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "Crypttech CryptoLog ile ACKLOG karşılaştırması. Log toplama, sıkıştırma ve uyum farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "CryptoLog vs ACKLOG",
    heroSubtitle: "Crypttech CryptoLog ve ACKLOG log yönetimi platformlarının karşılaştırması.",
    shortAnswer: "CryptoLog, Crypttech'in log yönetimi ürünüdür. ACKLOG ise log yönetimini SIEM korelasyonu ile birleştiren kapsamlı bir güvenlik platformudur. CryptoLog sadece log toplarken, ACKLOG topladığı logları korelasyona sokarak tehdit tespiti yapar.",
    technicalSummary: [
      "CryptoLog: Log toplama ve saklama çözümü.",
      "ACKLOG: SIEM + Log yönetimi tek platformda.",
      "Korelasyon: CryptoLog yok / ACKLOG in-memory korelasyon.",
      "UEBA: CryptoLog yok / ACKLOG yerleşik kullanıcı davranış analizi."
    ],
    resultParagraph: "CryptoLog temel log yönetimi sunarken, ACKLOG aynı log verilerini SIEM korelasyonu ile analiz ederek proaktif tehdit tespiti sağlar.",
    content: `<h2>CryptoLog vs ACKLOG</h2><p>CryptoLog, Crypttech'in log toplama ve saklama odaklı ürünüdür. ACKLOG ise aynı log verilerini toplayıp SIEM korelasyonu, UEBA ve SOAR ile analiz eden kapsamlı bir güvenlik platformudur.</p>`,
    faqs: [{ question: "CryptoLog ve CryptoSIM birlikte mi kullanılır?", answer: "Crypttech ekosisteminde CryptoLog (log) + CryptoSIM (SIEM) ayrı ürünlerdir. ACKLOG ise her iki fonksiyonu tek platformda sunar." }]
  },
  "labris-log-vs-acklog": {
    title: "Labris LOG vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "Labris LOG ile ACKLOG karşılaştırması. Log toplama, uyum ve güvenlik izleme farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Labris LOG vs ACKLOG",
    heroSubtitle: "Labris Networks LOG ve ACKLOG log yönetimi karşılaştırması.",
    shortAnswer: "Labris LOG, Labris Networks'ün log yönetimi çözümüdür. Temel log toplama ve 5651 uyumu odaklıdır. ACKLOG ise log yönetimini SIEM, UEBA ve SOAR ile birleştiren kapsamlı bir güvenlik platformudur.",
    technicalSummary: [
      "Labris LOG: Temel log toplama ve 5651 uyum odaklı.",
      "ACKLOG: Kapsamlı SIEM + log yönetimi + UEBA.",
      "Depolama: ACKLOG columnar DB ile düşük maliyetli saklama.",
      "Korelasyon: Labris LOG temel / ACKLOG gelişmiş in-memory korelasyon."
    ],
    resultParagraph: "Labris LOG temel log yönetimi ve 5651 uyumu sunarken, ACKLOG kapsamlı güvenlik izleme ve tehdit tespiti sağlar.",
    content: `<h2>Labris LOG vs ACKLOG</h2><p>Labris LOG, temel log toplama ve 5651 uyumu odaklı bir çözümdür. ACKLOG ise log yönetiminin ötesinde SIEM korelasyonu ve proaktif tehdit tespiti sunar.</p>`,
    faqs: [{ question: "Labris firewall logları ACKLOG'a aktarılabilir mi?", answer: "Evet, Labris firewall logları Syslog üzerinden ACKLOG'a doğrudan aktarılabilir." }]
  },
  "sonlogger-vs-acklog": {
    title: "Sonlogger vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "Sonlogger ile ACKLOG karşılaştırması. Log toplama, raporlama ve SIEM farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Sonlogger vs ACKLOG",
    heroSubtitle: "Sonlogger ve ACKLOG log yönetimi platformlarının karşılaştırması.",
    shortAnswer: "Sonlogger, yerli bir log yönetimi çözümüdür. Temel log toplama ve 5651 uyumu sunar. ACKLOG ise log yönetimini SIEM korelasyonu ile birleştirerek proaktif tehdit tespiti sağlar.",
    technicalSummary: [
      "Sonlogger: Log toplama ve saklama çözümü.",
      "ACKLOG: SIEM + log yönetimi + UEBA + SOAR.",
      "Korelasyon: Sonlogger temel / ACKLOG in-memory gelişmiş korelasyon.",
      "Uyum: Her ikisi de 5651 ve KVKK uyum raporları sunar."
    ],
    resultParagraph: "Sonlogger temel log yönetimi sunarken, ACKLOG kapsamlı SIEM platformu olarak güvenlik operasyonlarının tamamını karşılar.",
    content: `<h2>Sonlogger vs ACKLOG</h2><p>Sonlogger, temel log toplama ve 5651 uyumu odaklı bir çözümdür. ACKLOG ise log yönetiminin ötesinde SIEM korelasyonu, UEBA ve otomatik müdahale sunan kapsamlı bir güvenlik platformudur.</p>`,
    faqs: [{ question: "Sonlogger'dan ACKLOG'a geçiş yapılabilir mi?", answer: "Evet, mevcut log kaynaklarınız Syslog üzerinden ACKLOG'a kolayca yönlendirilir." }]
  },
  "soplog-vs-acklog": {
    title: "Soplog vs ACKLOG – Log Yönetimi Karşılaştırması | ACKLOG",
    description: "Soplog ile ACKLOG karşılaştırması. Log toplama, saklama ve güvenlik izleme farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Soplog vs ACKLOG",
    heroSubtitle: "Soplog ve ACKLOG log yönetimi platformlarının karşılaştırması.",
    shortAnswer: "Soplog, yerli log yönetimi çözümüdür. ACKLOG ise log yönetimini SIEM korelasyonu, UEBA ve SOAR ile birleştiren kapsamlı bir güvenlik platformudur.",
    technicalSummary: [
      "Soplog: Log toplama ve saklama odaklı.",
      "ACKLOG: Kapsamlı SIEM + log yönetimi + UEBA + SOAR.",
      "Depolama: ACKLOG columnar DB ile %90 sıkıştırma.",
      "Korelasyon: Soplog temel / ACKLOG in-memory gelişmiş korelasyon."
    ],
    resultParagraph: "Soplog temel log yönetimi sunarken, ACKLOG kapsamlı SIEM platformu olarak güvenlik operasyonlarının tamamını karşılar.",
    content: `<h2>Soplog vs ACKLOG</h2><p>Soplog, log toplama ve saklama odaklı bir çözümdür. ACKLOG ise log yönetiminin ötesinde SIEM korelasyonu ve proaktif tehdit tespiti sunan kapsamlı bir güvenlik platformudur.</p>`,
    faqs: [{ question: "Soplog ve ACKLOG aynı log kaynaklarını destekler mi?", answer: "Evet, her iki ürün de Syslog, WMI ve API tabanlı log toplama yöntemlerini destekler." }]
  },
  "logsign-soar-vs-acklog": {
    title: "Logsign SOAR vs ACKLOG – Güvenlik Otomasyonu Karşılaştırması | ACKLOG",
    description: "Logsign SOAR ile ACKLOG SOAR entegrasyonu karşılaştırması. Otomasyon ve olay müdahale farkları.",
    badge: "Yerli Karşılaştırma",
    heroTitle: "Logsign SOAR vs ACKLOG",
    heroSubtitle: "Logsign SOAR ve ACKLOG güvenlik otomasyon platformlarının karşılaştırması.",
    shortAnswer: "Logsign SOAR, Logsign'ın ayrı bir ürün olarak sunduğu güvenlik otomasyon çözümüdür. ACKLOG ise SOAR fonksiyonlarını SIEM platformuna yerleşik olarak sunar, böylece ayrı bir ürün satın almaya ve entegre etmeye gerek kalmaz.",
    technicalSummary: [
      "Logsign SOAR: Ayrı ürün, ayrı lisans, ayrı yönetim.",
      "ACKLOG: SOAR fonksiyonları SIEM'e yerleşik, ek maliyet yok.",
      "Entegrasyon: Logsign SIEM + SOAR entegrasyonu gerekli / ACKLOG tek platform.",
      "Playbook: Her ikisi de görsel playbook oluşturmayı destekler."
    ],
    resultParagraph: "ACKLOG, SOAR fonksiyonlarını SIEM platformuna yerleşik olarak sunarak Logsign'ın ayrı SOAR ürün maliyetini ve entegrasyon karmaşıklığını ortadan kaldırır.",
    content: `<h2>Logsign SOAR vs ACKLOG</h2><p>Logsign ekosisteminde SIEM ve SOAR ayrı ürünler olarak satılır ve entegre edilmesi gerekir. ACKLOG ise SOAR fonksiyonlarını (otomatik playbook, olay müdahale, enrichment) SIEM platformuna yerleşik olarak sunar.</p><h3>Maliyet Avantajı</h3><p>ACKLOG'ta SOAR ek maliyet gerektirmez. Logsign ekosisteminde ise SIEM + SOAR ayrı lisanslar ve ayrı donanım gerektirir.</p>`,
    faqs: [{ question: "ACKLOG'un yerleşik SOAR'ı ne kadar kapsamlı?", answer: "ACKLOG'un SOAR modülü, otomatik playbook oluşturma, olay müdahale, IP/domain enrichment ve firewall entegrasyonu gibi temel SOAR fonksiyonlarını içerir." }]
  }
};
