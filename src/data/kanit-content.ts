export interface KanitData {
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
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
        question: "0ms gecikme gerçekten mümkün mü?",
        answer: "Evet, loglar disk üzerinde depolanmadan önce RAM bellekte korelasyon motorundan geçirildiği için tespit süresi milisaniyeler (0ms mertebesinde) seviyesindedir. Diske yazma işlemi arka planda asenkron olarak yürütülür."
      },
      {
        question: "Hangi log kaynakları bu performansı destekler?",
        answer: "Syslog, Winlogbeat, WMI, AWS CloudTrail, Azure EventHubs ve API tabanlı tüm entegrasyonlar In-Memory korelasyon motorumuz ile uyumludur."
      }
    ]
  },
  "benchmark-raporu": {
    title: "SIEM Benchmark Raporu: %99.9 Tehdit Algılama Doğruluğu",
    subtitle: "ACKLOG UEBA ve Yapay Zeka motorunun hatalı alarm (false positive) oranını düşürme ve tehdit yakalama başarısı.",
    description: "MITRE ATT&CK matrisiyle uyumlu tehdit avcılığı yetenekleri ve makine öğrenmesi destekli UEBA analizimizin doğruluk skorlarını içeren benchmark belgesi.",
    heroBadge: "Bağımsız Test & Analiz",
    metrics: [
      { label: "Tehdit Tespit Doğruluğu", value: "%99.92", desc: "MITRE ATT&CK test senaryolarında tam başarı" },
      { label: "False Positive Oranı", value: "< %0.05", desc: "Hatalı alarmların en aza indirilmesi" },
      { label: "UEBA Öğrenme Süresi", value: "3 Gün", desc: "Kullanıcı davranış analizi profilleme hızı" }
    ],
    content: `
      <h2>Yapay Zeka Destekli UEBA ile Sıfır Hatalı Alarm (Zero False Positive) Hedefi</h2>
      <p>Klasik SIEM sistemleri sadece statik kurallara (örneğin: 5 kez yanlış şifre girildiğinde alarm üret) dayanır. Bu durum, BT çalışanlarının binlerce sahte alarm (false positive) arasında kaybolmasına yol açar. ACKLOG, bünyesindeki <strong>Kullanıcı ve Varlık Davranış Analizi (UEBA)</strong> motoru sayesinde kurum çalışanlarının ve cihazlarının normal davranış profillerini çıkarır. Alışılagelmişin dışındaki aktiviteleri makine öğrenmesiyle analiz eder.</p>

      <h3>MITRE ATT&CK Kapsama Analizi</h3>
      <p>ACKLOG, siber saldırganların kullandığı taktik ve tekniklerin yer aldığı küresel <strong>MITRE ATT&CK</strong> matrisini tamamen destekler. Yapılan testlerde:</p>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Kimlik Bilgisi Hırsızlığı (Credential Access):</strong> %99.8 başarı oranıyla tespit edilmiştir.</li>
        <li><strong>Yanal Hareket (Lateral Movement):</strong> Ağ içindeki izinsiz sıçramalar 0.8 saniye içinde saptanmıştır.</li>
        <li><strong>Veri Sızdırma (Exfiltration):</strong> Olağandışı boyutta veri çıkışları anında bloke edilmiştir.</li>
      </ol>

      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        "ACKLOG UEBA motoru, normal çalışma saatleri dışında ilk kez SQL Server'a bağlanan ve yüklü veri çeken bir kullanıcı hesabını anında tespit ederek SOAR entegrasyonuyla hesabı dondurmuş ve sızıntıyı engellemiştir."
      </blockquote>

      <h3>Benchmark Test Metodolojisi</h3>
      <p>Testlerimiz, siber güvenlik laboratuvarlarında popüler saldırı simülasyon araçları (Atomic Red Team, Caldera) kullanılarak 450 farklı saldırı tekniği uygulanarak gerçekleştirilmiştir. Rakiplerin <strong>%12 seviyesinde hatalı alarm (sahte alarm)</strong> ürettiği senaryolarda, ACKLOG UEBA motoru sahte alarm oranını <strong>%0.05'in altına</strong> indirmiştir. Bu sayede SOC ekipleri yalnızca gerçek tehditlere odaklanır.</p>
    `,
    faqs: [
      {
        question: "UEBA entegrasyonu ek bir lisans gerektirir mi?",
        answer: "Hayır. Rakiplerin aksine ACKLOG, SIEM + UEBA + SOAR yeteneklerinin tamamını tek bir lisans çatısı altında sunar. Ekstra modül ücreti ödemezsiniz."
      },
      {
        question: "Makine öğrenmesi modeliniz KVKK ile uyumlu mu?",
        answer: "Evet, makine öğrenmesi algoritmalarımız kişisel verileri maskeleyerek davranışsal özellikleri (örneğin giriş saatleri, veri transfer boyutları) analiz eder, KVKK ihlali oluşturmaz."
      }
    ]
  },
  "uyum-mimarisi": {
    title: "5651 ve KVKK Uyum Mimari Dokümanı",
    subtitle: "Türkiye siber güvenlik mevzuatlarına tam uyum sağlayan zaman damgalı log saklama ve veri maskeleme altyapısı.",
    description: "5651 Sayılı Kanun ve KVKK teknik tedbirleri kapsamında logların değiştirilemezliği, zaman damgasıyla imzalanması ve güvenli depolanması süreçleri.",
    heroBadge: "Mevzuat & Hukuki Uyumluluk",
    metrics: [
      { label: "Mevzuata Uyum", value: "%100", desc: "5651 Sayılı Kanun ve KVKK teknik tedbirler kılavuzu" },
      { label: "Zaman Damgası", value: "TÜBİTAK", desc: "KamuSM Uyumlu Zaman Damgası entegrasyonu" },
      { label: "Veri Maskeleme", value: "Real-time", desc: "Kişisel verilerin (TCKN, Telefon vb.) otomatik maskelenmesi" }
    ],
    content: `
      <h2>5651 Log Tutma Kanununa Teknik Uyum</h2>
      <p>Türkiye'de 5651 Sayılı Kanun uyarınca, kurumların internete erişim loglarını <strong>en az 2 yıl boyunca saklaması</strong> ve bu logları zaman damgası (hash) ile imzalayarak değiştirilemezliğini garanti etmesi zorunludur. ACKLOG, bu süreci tamamen otomatize eder.</p>

      <h3>Zaman Damgalama ve Hash Mekanizması</h3>
      <p>ACKLOG'un 5651 mimarisi şu adımlarla çalışır:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>SHA-256 Hashing:</strong> Oluşan her log dosyası SHA-256 algoritmasıyla özetlenir.</li>
        <li><strong>TÜBİTAK Zaman Damgası:</strong> Log dosyaları KamuSM sunucularıyla entegre şekilde milisaniyelik zaman damgasıyla mühürlenir.</li>
        <li><strong>Otomatik Arşivleme:</strong> İmzalı loglar otomatik olarak şifreli archive klasörlerine aktarılır ve yasal süre boyunca saklanır.</li>
      </ul>

      <h3>KVKK Teknik Tedbirleri SIEM Katkısı</h3>
      <p>Kişisel Verilerin Korunması Kanunu (KVKK) teknik tedbirler kılavuzunda yer alan <strong>"Log Kayıtlarının Takibi", "Kullanıcı Erişimlerinin Denetlenmesi" ve "Siber Güvenlik Tehditlerinin Tespiti"</strong> maddeleri ACKLOG ile tam olarak karşılanır:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Maskeleme (Data Masking):</strong> Loglardaki T.C. Kimlik Numarası, kredi kartı veya telefon numarası gibi kişisel veriler daha log yazılırken regex kurallarıyla maskelenir (*).</li>
        <li><strong>Yetkilendirme (RBAC):</strong> Loglara kimlerin erişebileceği rol tabanlı erişim kontrolüyle sınırlandırılır. Logları inceleyen yöneticilerin hareketleri de ayrıca denetlenir (audit logging).</li>
      </ul>

      <h3>Yasal Geçerlilik ve Adli Analiz</h3>
      <p>ACKLOG tarafından imzalanan log dosyaları, Türkiye mahkemelerinde <strong>adli delil (forensics data)</strong> olarak kabul edilmektedir. Sistem, logların oluşturulma anından itibaren hiçbir şekilde değiştirilmediğini matematiksel ve yasal olarak ispatlayan bir log yapısı sunar.</p>
    `,
    faqs: [
      {
        question: "KamuSM zaman damgası kontörleri ACKLOG ile entegre edilebilir mi?",
        answer: "Evet, ACKLOG KamuSM (TÜBİTAK) API'lerini yerleşik olarak destekler. Kendi zaman damgası kullanıcı adı ve şifrenizi girerek anında imzalamaya başlayabilirsiniz."
      },
      {
        question: "Logların 2 yıl saklanması donanım maliyetini çok artırır mı?",
        answer: "Hayır. ACKLOG'un patentli sıkıştırma teknolojisi logları %80 oranında sıkıştırdığı için 2 yıllık log depolama alanını minimum bütçeyle yönetebilirsiniz."
      }
    ]
  },
  "sikistirma-teknolojisi": {
    title: "Maliyetleri %80 Düşüren Sıkıştırma Teknolojisi",
    subtitle: "ACKLOG Superpower Data Lake mimarisi ve Columnar Database (ClickHouse) entegrasyonu ile depolama devrimi.",
    description: "Log verilerinizi performanstan ödün vermeden nasıl 5 kat daha az alanda sakladığımızı ve donanım bütçelerinde nasıl %80 tasarruf sağladığımızı öğrenin.",
    heroBadge: "Maliyet Optimizasyonu",
    metrics: [
      { label: "Depolama Sıkıştırma Oranı", value: "5:1 (%80)", desc: "Standart loglarda elde edilen ortalama tasarruf" },
      { label: "Disk IOPS İhtiyacı Azalması", value: "%70", desc: "Okuma/Yazma işlemlerinde donanım hafifletmesi" },
      { label: "Donanım ROI Süresi", value: "3 Ay", desc: "Donanım tasarrufu ile yatırımın geri dönüş süresi" }
    ],
    content: `
      <h2>Superpower Data Lake Sıkıştırma Mimarisi</h2>
      <p>Geleneksel SIEM sistemleri logları satır tabanlı metin dosyası (raw text) veya Elasticsearch gibi indeks boyutunu 3-4 kat artıran NoSQL veritabanlarında saklar. Bu durum, günlük 100 GB log üreten bir kurumun yıllık terabaytlarca disk alanı satın almasına neden olur. ACKLOG, logları sıkıştırmak ve hızlı analiz etmek için <strong>Sütun Tabanlı Veri Depolama (Columnar Storage)</strong> ve gelişmiş sıkıştırma algoritmaları (LZ4, ZSTD) kullanır.</p>

      <h3>%80 Tasarruf Nasıl Gerçekleşiyor?</h3>
      <p>Log kayıtları tekrarlayan kelimelerden (örneğin syslog header'ları, firewall IP adresleri, durum kodları) oluşur. ACKLOG Columnar mimarisi:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Her log alanını (source_ip, event_id, status) ayrı birer sütun olarak depolar.</li>
        <li>Tekrarlayan verileri tek bir indeks altında birleştirerek ZSTD sıkıştırması uygular.</li>
        <li>Ham haliyle <strong>10 GB yer kaplayan log dosyalarını performanstan kayıp vermeden 2 GB boyutuna indirir.</strong></li>
      </ul>

      <h3>100 GB/Gün Log Üreten Bir Kurumun Maliyet Analizi</h3>
      <p>Gelin, 2 yıllık (5651 uyumlu) log saklama ihtiyacı olan orta ölçekli bir kurumun disk maliyeti kıyaslamasını inceleyelim:</p>
      <table class="w-full border-collapse border border-gray-800 my-6 text-sm text-left">
        <thead>
          <tr class="bg-gray-800/80">
            <th class="border border-gray-700 p-3 font-bold">Parametre</th>
            <th class="border border-gray-700 p-3 font-bold text-red-400">Standart SIEM (ELK / Raw)</th>
            <th class="border border-gray-700 p-3 font-bold text-green-400">ACKLOG SIEM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">Günlük Log Boyutu</td>
            <td class="border border-gray-700 p-3">100 GB</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">100 GB</td>
          </tr>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">2 Yıllık Toplam Ham Veri</td>
            <td class="border border-gray-700 p-3">72 Terabayt (TB)</td>
            <td class="border border-gray-700 p-3">72 Terabayt (TB)</td>
          </tr>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">Disk İndeks Şişmesi (Elasticsearch vb.)</td>
            <td class="border border-gray-700 p-3">+ %40 (Yaklaşık 100 TB disk ihtiyacı)</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">%0 (Sütun yapısıyla indeks boyutu küçülür)</td>
          </tr>
          <tr>
            <td class="border border-gray-700 p-3 font-semibold">Sıkıştırılmış Disk İhtiyacı</td>
            <td class="border border-gray-700 p-3">Yaklaşık 85 TB</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">14.4 TB (5:1 Sıkıştırma)</td>
          </tr>
          <tr class="bg-green-950/20">
            <td class="border border-gray-700 p-3 font-bold text-green-400">Tahmini Donanım Bütçesi</td>
            <td class="border border-gray-700 p-3 text-red-400 font-semibold">$18,500 (Enterprise SAS Disk Kümesi)</td>
            <td class="border border-gray-700 p-3 text-green-400 font-bold">$3,800 (Standart Depolama Donanımı)</td>
          </tr>
        </tbody>
      </table>

      <h3>Teknik Kazanımlar</h3>
      <p>Bu sıkıştırma oranı sadece disk alanından tasarruf ettirmekle kalmaz, aynı zamanda sunucu donanımının okuma/yazma kafaları (disk IOPS) üzerindeki yükü %70 oranında hafifletir. Böylece disk arızaları azalır, veri arama hızı ve raporlama performansı artar. ACKLOG ile yeşil IT (green computing) ilkelerini uygulayarak elektrik tüketimini ve karbon ayak izinizi de düşürürsünüz.</p>
    `,
    faqs: [
      {
        question: "Sıkıştırılmış log verileri üzerinde arama yapmak yavaş mı?",
        answer: "Hayır. Sütun bazlı veritabanı yapımız sayesinde arama motoru sadece aradığınız kelimenin geçtiği sütunları diskten okur (tüm satırları okumaz). Bu sayede arama hızı standart sistemlere kıyasla 10 kat daha hızlıdır."
      },
      {
        question: "Sıkıştırılmış loglar yasal olarak zaman damgasıyla korunuyor mu?",
        answer: "Evet. Loglar ham haldeyken zaman damgalanır ve ardından sıkıştırılarak arşivlenir. Yasal bir denetimde arşivden çıkarılan logların doğruluğu zaman damgasıyla tam olarak uyuşur."
      }
    ]
  }
};
