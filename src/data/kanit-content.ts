export interface KanitData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  shortAnswer: string;
  technicalSummary: string[];
  resultParagraph: string;
  content: string;
  faqs: { question: string; answer: string }[];
  metrics: { label: string; value: string; desc: string }[];
}

export const kanitArticles: Record<string, KanitData> = {
  "performans-testleri": {
    title: "ACKLOG Performans Testleri: 0ms Algılama Gecikmesi",
    subtitle: "In-Memory mimarisiyle siber olayların milisaniyeler altında tespit edilmesi ve alarm üretilmesi süreci.",
    description: "ACKLOG'un 0ms algılama gecikmesi iddiasının arkasındaki teknik mimariyi, performans benchmark sonuçlarını ve real-time log korelasyon testlerini inceleyin.",
    heroBadge: "Teknik Rapor & Kanıt",
    shortAnswer: "ACKLOG, geleneksel SIEM'lerin logları diske yazıp sonradan sorgulama yapmasının aksine, patentli in-memory stream teknolojisiyle logları daha akar haldeyken Complex Event Processing (CEP) motorundan geçirir. Yapılan testlerde ortalama korelasyon ve tehdit algılama gecikmesi 0.4 milisaniye (0ms mertebesi) olarak tescillenmiştir.",
    technicalSummary: [
      "Bellek üzerinde çalışan gerçek zamanlı korelasyon motoru hızı (< 0.4ms).",
      "Tek bir optimize sunucuda 150.000+ EPS (saniye başı olay) log işleme gücü.",
      "1 milyar satır log üzerinde ClickHouse sütun mimarisiyle anlık sorgu hızı (0.02 sn).",
      "Ağ tıkanıklığı yaratmayan asenkron arka plan diske yazma mimarisi."
    ],
    resultParagraph: "Özetle, siber olaylara müdahale süresini (MTTR) sıfırlamak isteyen kurumlar için ACKLOG, in-memory stream motoru ile milisaniyeler seviyesinde proaktif koruma sunar.",
    metrics: [
      { label: "Ortalama Algılama Gecikmesi", value: "< 0.4ms", desc: "Gerçek zamanlı korelasyon motoru hızı" },
      { label: "Maksimum EPS Kapasitesi", value: "150.000+", desc: "Tek düğümde CPU/RAM darboğazı olmadan" },
      { label: "Sorgu Tepki Süresi", value: "0.02 sn", desc: "1 milyar satır log üzerinde anlık arama hızı" }
    ],
    content: `
      <h2>Real-Time In-Memory Korelasyon Teknolojisi</h2>
      <p>Geleneksel SIEM çözümleri, logları diske yazdıktan sonra arka planda çalışan zamanlanmış (scheduled) sql veya elastic query sorguları ile korelasyon yapar. Bu durum, siber tehdidin algılanmasında <strong>1 ila 15 dakika arasında gecikmeye (detection latency)</strong> neden olur. ACKLOG ise patentli Big Data mimarisi sayesinde logları diske yazmadan önce, hafızada (in-memory) akar haldeyken <strong>Complex Event Processing (CEP)</strong> motorundan geçirir.</p>

      <h3>Milisaniyenin Altında Tehdit Tespit Süreci</h3>
      <p>ACKLOG'un gerçek zamanlı tehdit tespiti adımları şu şekildedir:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Log Toplama (Ingestion):</strong> Syslog, Agent, WMI veya API'ler üzerinden toplanan ham veri saniyeler içinde parse edilir.</li>
        <li><strong>Stream Parsing & Normalization:</strong> Loglar bellek üzerinde JSON objelerine dönüştürülür ve normalleştirilir.</li>
        <li><strong>In-Memory CEP Match:</strong> Bellekteki kurallarla (korelasyon kuralları) log eşleşmesi 0.4 milisaniyeden kısa sürer.</li>
        <li><strong>Anlık Alarm (Alerting):</strong> Eşleşme olduğu an SOAR motoru tetiklenir, 0ms algılama gecikmesi ile tehdit durdurulur.</li>
      </ul>

      <h3>Performans Benchmark Tablosu</h3>
      <table class="w-full border-collapse border border-gray-800 my-6 text-sm text-left">
        <thead>
          <tr class="bg-gray-800/80">
            <th class="border border-gray-700 p-3 font-bold">Ölçüt (Metric)</th>
            <th class="border border-gray-700 p-3 font-bold text-red-400">Eski Nesil SIEM (Disk Tabanlı)</th>
            <th class="border border-gray-700 p-3 font-bold text-green-400">ACKLOG In-Memory SIEM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">Tehdit Algılama Gecikmesi</td>
            <td class="border border-gray-700 p-3">5 - 15 Dakika</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">&lt; 1 Milisaniye (Real-time)</td>
          </tr>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">100K EPS'de CPU Kullanımı</td>
            <td class="border border-gray-700 p-3">%95+ ve Disk IOPS Darboğazı</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">%22 (Optimize RAM Stream)</td>
          </tr>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">Arama (Search) Hızı</td>
            <td class="border border-gray-700 p-3">10-30 saniye (Uzun süreli loglarda)</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">&lt; 0.1 saniye (Instant index)</td>
          </tr>
        </tbody>
      </table>

      <h3>Teknik Kanıt ve Altyapı Notları</h3>
      <p>Logsiem.com üzerinde sunulan performans verileri, ACKLOG Lab laboratuvarlarında <strong>8x Intel Xeon CPU, 32GB RAM ve NVMe SSD</strong> konfigürasyonuna sahip standart bir sunucu üzerinde, <strong>Fortinet, Active Directory ve Windows Event</strong> loglarının 50.000 EPS yük altında simüle edilmesiyle elde edilmiştir. In-Memory arama hızımız Big Data kuyruklama mimarimiz (Kafka & ClickHouse hibrit yapısı) ile tescillenmiştir.</p>
    `,
    faqs: [
      {
        question: "0ms gecikme gerçekten mümkün mu?",
        answer: "Evet, loglar disk üzerinde depolanmadan önce RAM bellekte korelasyon motorundan geçirildiği için tespit süresi milisaniyeler (0ms mertebesinde) seviyesindedir. Diske yazma işlemi arka planda asenkron olarak yürütülür."
      }
    ]
  },
  "benchmark-raporu": {
    title: "SIEM Benchmark Raporu: %99.9 Tehdit Algılama Doğruluğu",
    subtitle: "ACKLOG UEBA ve Yapay Zeka motorunun hatalı alarm (false positive) oranını düşürme ve tehdit yakalama başarısı.",
    description: "MITRE ATT&CK matrisiyle uyumlu tehdit avcılığı yetenekleri ve makine öğrenmesi destekli UEBA analizimizin doğruluk skorlarını içeren benchmark belgesi.",
    heroBadge: "Bağımsız Test & Analiz",
    shortAnswer: "Siber olay yönetiminde (SOC) en büyük sorun, çalışanları yoran sahte alarmlardır (false positives). ACKLOG, makine öğrenmesi destekli Kullanıcı ve Varlık Davranış Analizi (UEBA) motoru ile normal kullanıcı profillerini çıkarır. Yapılan bağımsız saldırı simülasyon testlerinde (MITRE ATT&CK), %99.92 tehdit tespit doğruluğu elde edilirken hatalı alarm oranı %0.05'in altına düşürülmüştür.",
    technicalSummary: [
      "MITRE ATT&CK siber saldırı simülasyon testlerinde %99.92 tespit başarısı.",
      "Hatalı alarmları (sahte ihbarlar) en aza indiren akıllı UEBA filtresi (< %0.05).",
      "Yeni kullanıcı ve cihaz davranışlarını 3 gün gibi kısa sürede öğrenen profilleyici.",
      "Ek modül veya ek lisans ücreti gerektirmeyen entegre AI/UEBA motoru."
    ],
    resultParagraph: "Özetle, ACKLOG UEBA motoru sayesinde siber tehditler en yüksek doğrulukla tespit edilirken, SOC ekipleri sahte alarmlarla vakit kaybetmeyip yalnızca gerçek olaylara odaklanır.",
    metrics: [
      { label: "Tehdit Tespit Doğruluğu", value: "%99.92", desc: "MITRE ATT&CK test senaryolarında tam başarı" },
      { label: "False Positive Oranı", value: "< %0.05", desc: "Hatalı alarmların en aza indirilmesi" },
      { label: "UEBA Öğrenme Süresi", value: "3 Gün", desc: "Kullanıcı davranış analizi profilleme hızı" }
    ],
    content: `
      <h2>Yapay Zeka Destekli UEBA ile Sıfır Hatalı Alarm (Zero False Positive) Hedefi</h2>
      <p>Klasik SIEM sistemleri sadece statik kurallara (örneğin: 5 kez yanlış şifre girildiğinde alarm üret) dayanır. Bu durum, BT çalışanlarının binlerce sahte alarm (false positive) arasında kaybolmasına yol açar. ACKLOG, bünyesindeki <strong>Kullanıcı ve Varlık Davranış Analizi (UEBA)</strong> motoru sayesinde kurum çalışanlarının ve cihazlarının normal davranış profillerini çıkarır. Alışılagelmişin dışındaki aktiviteleri makine öğrenmesiyle analiz eder.</p>
    `,
    faqs: [
      {
        question: "UEBA entegrasyonu ek bir lisans gerektirir mi?",
        answer: "Hayır. Rakiplerin aksine ACKLOG, SIEM + UEBA + SOAR yeteneklerinin tamamını tek bir lisans çatısı altında sunar. Ekstra modül ücreti ödemezsiniz."
      }
    ]
  },
  "sikistirma-teknolojisi": {
    title: "Maliyetleri %80 Düşüren Sıkıştırma Teknolojisi",
    subtitle: "ACKLOG Superpower Data Lake mimarisi ve Columnar Database (ClickHouse) entegrasyonu ile depolama devrimi.",
    description: "Log verilerinizi performanstan ödün vermeden nasıl 5 kat daha az alanda sakladığımızı ve donanım bütçelerinde nasıl %80 tasarruf sağladığımızı öğrenin.",
    heroBadge: "Maliyet Optimizasyonu",
    shortAnswer: "Geleneksel SIEM'ler log dosyalarını satır bazlı raw text veya Elasticsearch gibi diski 3 kat şişiren veritabanlarında saklarken, ACKLOG columnar storage (sütun tabanlı) ClickHouse mimarisini ve ZSTD sıkıştırmasını kullanır. Log verilerindeki tekrarlı alanları saptayarak ortalama 5:1 (%80) sıkıştırma oranı sağlar, disk donanım faturanızı 5 kat hafifletir.",
    technicalSummary: [
      "ClickHouse tabanlı Columnar Storage ile yüksek log sıkıştırma verimliliği (5:1).",
      "Sunucu disk okuma/yazma (IOPS) gereksiniminde %70 oranında düşüş.",
      "Sıkıştırılmış veri üzerinden performanstan kayıp vermeden arama yeteneği (< 0.1 sn).",
      "Yıllık SAS/SSD depolama donanım bütçelerinde %80'e varan maliyet tasarrufu."
    ],
    resultParagraph: "Özetle, yasal 2 yıllık log saklama zorunluluğunda ACKLOG, patentli sıkıştırma teknolojisi sayesinde depolama maliyetlerinizi en aza indiren en akılcı çözümdür.",
    metrics: [
      { label: "Depolama Sıkıştırma Oranı", value: "5:1 (%80)", desc: "Standart loglarda elde edilen ortalama tasarruf" },
      { label: "Disk IOPS İhtiyacı Azalması", value: "%70", desc: "Okuma/Yazma işlemlerinde donanım hafifletmesi" },
      { label: "Donanım ROI Süresi", value: "3 Ay", desc: "Donanım tasarrufu ile yatırımın geri dönüş süresi" }
    ],
    content: `
      <h2>Superpower Data Lake Sıkıştırma Mimarisi</h2>
      <p>Geleneksel SIEM sistemleri logları satır tabanlı metin dosyası (raw text) veya Elasticsearch gibi indeks boyutunu 3-4 kat artıran NoSQL veritabanlarında saklar. ACKLOG, logları sıkıştırmak ve hızlı analiz etmek için <strong>Sütun Tabanlı Veri Depolama (Columnar Storage)</strong> ve gelişmiş sıkıştırma algoritmaları (LZ4, ZSTD) kullanır.</p>
    `,
    faqs: [
      {
        question: "Sıkıştırılmış log verileri üzerinde arama yapmak yavaş mı?",
        answer: "Hayır. Sütun bazlı veritabanı yapımız sayesinde arama motoru sadece aradığınız kelimenin geçtiği sütunları diskten okur (tüm satırları okumaz). Bu sayede arama hızı standart sistemlere kıyasla 10 kat daha hızlıdır."
      }
    ]
  },
  "qradar-karsilastirmasi": {
    title: "ACKLOG ve IBM QRadar Karşılaştırma Sonuçları",
    subtitle: "QRadar'ın yüksek donanım ve lisans maliyetleri karşısında ACKLOG'un performans ve bütçe test sonuçları.",
    description: "IBM QRadar ile ACKLOG SIEM platformunun işlemci, bellek tüketimi, EPS kararlılığı ve yıllık toplam maliyet (TCO) analiz raporu.",
    heroBadge: "Benchmark & Kıyaslama",
    shortAnswer: "Yapılan birebir lab testlerinde, IBM QRadar'ın 50.000 EPS yük altında ihtiyaç duyduğu CPU ve RAM kaynaklarının, ACKLOG in-memory ve ClickHouse mimarisiyle %70 daha az kullanıldığı kanıtlanmıştır. Ayrıca QRadar'ın EPS kotası aşıldığında log düşürme veya ek fatura çıkarma politikasına karşı ACKLOG limitsiz EPS desteği ve yerleşik SOAR modülüyle toplam sahip olma maliyetinde %75 tasarruf sağlar.",
    technicalSummary: [
      "QRadar sunucu donanım kaynak tüketimine karşı ACKLOG'un %70 daha az CPU/RAM ihtiyacı.",
      "Döviz bazlı yüksek yıllık lisans ve bakım (maintenance) faturalarında %75'e varan azalma.",
      "QRadar'da ek ücretli satılan SOAR ve UEBA özelliklerinin ACKLOG'da entegre ücretsiz gelmesi.",
      "Türkiye regülasyonları (5651, KVKK) için yerleşik KamuSM API zaman damgası desteği."
    ],
    resultParagraph: "Sonuç olarak, yüksek operasyon ve donanım bütçeleri gerektiren QRadar yerine ACKLOG, yerli mevzuat uyumlu, yüksek hızlı ve bütçe dostu en güçlü alternatiftir.",
    metrics: [
      { label: "Maliyet Tasarrufu", value: "%75", desc: "Yıllık toplam lisans ve operasyon bütçesinde" },
      { label: "Donanım Kaynak Hafiflemesi", value: "%70", desc: "Aynı EPS yükü altında CPU ve RAM tüketimi" },
      { label: "Mevzuat Uyumluluğu", value: "Yerleşik", desc: "5651 KamuSM zaman damgası entegrasyonu" }
    ],
    content: `
      <h2>Teknik Karşılaştırma Raporu: QRadar ve ACKLOG</h2>
      <p>IBM QRadar güçlü bir enterprise aracı olsa da Java tabanlı ağır arka plan servisleri nedeniyle sunucu işlemcisini ve belleğini aşırı tüketir. Lab testlerinde 50.000 EPS log akışı gönderildiğinde QRadar sunucusu %85 CPU seviyesine ulaşırken, ACKLOG C++ ve Go ile optimize edilmiş motoru sayesinde aynı yükü %22 CPU kullanımıyla sorunsuz taşımıştır.</p>
    `,
    faqs: [
      { question: "QRadar'dan geçiş (migration) süreci zor mu?", answer: "Hayır. ACKLOG uzman ekipleri mevcut kurallarınızı ve log kaynaklarınızı analiz ederek ACKLOG korelasyon motoruna kayıpsız ve hızlı bir şekilde göç (migration) ettirir." }
    ]
  },
  "splunk-karsilastirmasi": {
    title: "ACKLOG ve Splunk Karşılaştırma Sonuçları",
    subtitle: "Splunk'ın günlük veri limitleri (Data Cap) ve fahiş lisans faturaları karşısında ACKLOG bütçe analizi.",
    description: "Splunk Enterprise ile ACKLOG SIEM & USO platformunun günlük veri işleme maliyetleri ve depolama sıkıştırma yeteneklerinin teknik kıyası.",
    heroBadge: "Maliyet & Teknik Kıyaslama",
    shortAnswer: "Splunk günlük veri boyutu (GB/Gün) üzerinden lisanslanır ve veri hacmi arttıkça faturası katlanarak büyür. ACKLOG ise günlük veri kotası veya EPS sınırı koymaz; sunucu donanım limitleriniz ölçüsünde limitsiz veri işlemenizi sağlar. Ayrıca Splunk'ın veri depolama boyutunu 3 kat artıran ters indeks yapısına karşı ACKLOG %80 disk tasarrufu sağlayan columnar veritabanı kullanır.",
    technicalSummary: [
      "Splunk'ın günlük GB kotalı fatura riskine karşı ACKLOG'un limitsiz veri işleme modeli.",
      "Splunk veri depolama boyutuna kıyasla logları 5 kat daha küçük alanda saklama.",
      "Splunk Free sürümündeki korelasyon ve alarm kısıtlamalarının aksine ACKLOG'da tam yetki.",
      "Döviz bazlı yüksek bakım ücretlerinden yerel destek ile kurtulma."
    ],
    resultParagraph: "Özetle, log verilerinizi sınırlamadan siber güvenliğinizi güçlendirmek ve Splunk faturalarını optimize etmek istiyorsanız ACKLOG en yüksek yatırım getirisine (ROI) sahip seçenektir.",
    metrics: [
      { label: "Günlük Veri Limiti", value: "Sınırsız", desc: "Kota aşım faturası olmadan log toplama" },
      { label: "Depolama Tasarrufu", value: "5:1", desc: "Splunk indeks yapısına göre veri küçültme" },
      { label: "Yerleşik SOAR Entegrasyonu", value: "Tam", desc: "Ek lisans ücreti olmadan olay müdahalesi" }
    ],
    content: `
      <h2>Teknik Veri Depolama Kıyaslaması</h2>
      <p>Splunk ters indeks yapısı kullandığı için logları ararken hızlıdır ancak ham verinin 3 katı kadar disk alanı harcar. ACKLOG ise ClickHouse sütun mimarisini kullanarak logları sıkıştırarak saklar. Böylece hem Splunk kadar hızlı arama yapar hem de disk alanından 5 kat tasarruf sağlar.</p>
    `,
    faqs: [
      { question: "Splunk'tan ACKLOG'a geçerken log kaybı yaşanır mı?", answer: "Hayır. Geçiş sürecinde tüm eski log arşivleriniz şifreli ve bütünlüğü korunmuş olarak ACKLOG veri gölüne aktarılır." }
    ]
  },
  "siem-maliyet-analizi": {
    title: "SIEM ve Log Yönetimi Maliyet Analiz Raporu",
    subtitle: "Geleneksel lisanslama tuzakları, gizli donanım maliyetleri ve ACKLOG'un toplam sahip olma maliyeti (TCO) avantajı.",
    description: "EPS başı lisanslama, donanım kaynak tüketimi, veri sıkıştırma verimliliği ve yerli desteğin kurumsal siber güvenlik bütçelerine etkisi.",
    heroBadge: "Bütçe & ROI Analizi",
    shortAnswer: "Geleneksel SIEM projelerinde maliyetler sadece yazılım lisansından ibaret değildir. Sunucu donanımı, disk IOPS ihtiyaçları, yedekleme alanı, insan kaynağı (analist maaşları) ve yasal KamuSM zaman damgası kontörleri toplam sahip olma maliyetini (TCO) ciddi oranda artırır. ACKLOG, hafif mimarisi ve limitsiz EPS modeliyle toplam SIEM bütçenizi %75 oranında düşürür.",
    technicalSummary: [
      "Gizli donanım (server/disk) yatırımlarında %80'e varan bütçe tasarrufu.",
      "Vardiyalı kurum içi SOC kurma maliyetine karşı asgari bütçeli MSSP desteği.",
      "Döviz bazlı lisans yenileme risklerinin yerel lisanslama ile sıfırlanması.",
      "Ekstra modül ücreti ödemeden SIEM + UEBA + SOAR yeteneklerine tek fiyatla sahip olma."
    ],
    resultParagraph: "Sonuç olarak, kurumsal siber güvenlik bütçenizi en verimli şekilde kullanmak ve siber dayanıklılığınızı artırmak için ACKLOG, en hızlı ROI sağlayan SIEM yatırımıdır.",
    metrics: [
      { label: "Toplam Sahip Olma Maliyeti", value: "%75 Tasarruf", desc: "Geleneksel SIEM projelerine kıyasla" },
      { label: "Donanım Bütçesi Tasarrufu", value: "%80", desc: "Columnar sıkıştırma teknolojisi sayesinde" },
      { label: "Yatırım Geri Dönüşü (ROI)", value: "3 Ay", desc: "Donanım ve lisans tasarrufu ile amorti süresi" }
    ],
    content: `
      <h2>SIEM Satın Alırken Yapılan Maliyet Hataları</h2>
      <p>Birçok kurum SIEM seçerken sadece teklif fiyatına odaklanır ancak disk IOPS değerleri yetersiz olduğunda sistem tıkanır ve yeni SSD sunucu yatırımları gerekir. ACKLOG, optimize veri yazma mimarisiyle disk IOPS yükünü %70 azaltır, standart donanımlarda bile tıkanmadan yüksek performans sunar.</p>
    `,
    faqs: [
      { question: "Maliyet analizinde en büyük gizli kalem nedir?", answer: "Büyüyen log hacimlerinde ek disk satın almaları ve EPS kotaları aşıldığında ödenen ceza lisans ücretleridir. ACKLOG'da bu kısıtlamalar yoktur." }
    ]
  }
};
