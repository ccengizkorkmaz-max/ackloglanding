export const articles: Record<string, { title: string; description?: string; content: string }> = {
  "siem-nedir": {
    title: "SIEM Nedir? Siber Güvenliğin Merkezi Sinir Sistemi",
    description: "SIEM nedir, nasıl çalışır? Siber güvenliğin temeli SIEM teknolojisinin 3 temel adımını, KVKK uyumluluğunu ve yeni nesil ACKLOG SIEM avantajlarını keşfedin.",
    content: `
      <h2>SIEM (Security Information and Event Management) Kavramı</h2>
      <p>
        Siber saldırıların karmaşıklaştığı günümüzde, geleneksel güvenlik duvarları ve antivirüs yazılımları yetersiz kalmaktadır. 
        <strong>SIEM (Security Information and Event Management)</strong>, yani Güvenlik Bilgi ve Olay Yönetimi, bu noktada devreye girerek
        kurum genelindeki tüm güvenlik verilerini tek bir merkezde toplar, analiz eder ve anlamlandırır.
      </p>

      <h3>SIEM Nasıl Çalışır? 3 Temel Adım</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Veri Toplama (Collection):</strong> Sunucular, ağ cihazları, uygulamalar ve uç nokta (endpoint) cihazlarından log kayıtlarını toplar.
        </li>
        <li>
          <strong>Korelasyon (Correlation):</strong> Farklı kaynaklardan gelen verileri ilişkilendirir. Örneğin; "5 dakika içinde 100 başarısız giriş denemesi" ile "Aynı IP'den veritabanına erişim" olaylarını birleştirir.
        </li>
        <li>
          <strong>Alarm ve Müdahale (Alerting):</strong> Kritik bir tehdit algılandığında güvenlik ekibine (SOC) anlık bildirim gönderir.
        </li>
      </ul>

      <h3>Neden SIEM Kullanmalısınız?</h3>
      <p>
        SIEM teknolojisi sadece bir log deposu değildir; bir <strong>Güvenlik Zekası</strong> çözümüdür.
        Özellikle <strong>KVKK</strong> ve <strong>5651</strong> sayılı kanunlara uyumluluk süreçlerinde, kimin, ne zaman, hangi veriye eriştiğini kanıtlamak için SIEM kullanımı kritiktir.
      </p>

      <blockquote>
        "Gartner'a göre, modern tehditlerin tespit edilme süresi ortalama 200 gündür. Etkili bir SIEM çözümü ile bu süre dakikalara inebilir."
      </blockquote>

      <h3>Modern SIEM Çözümlerinde Olması Gereken Özellikler</h3>
      <p>Eski nesil hantal SIEM'lerin aksine, <strong>ACKLOG</strong> gibi yeni nesil çözümler şu özellikleri sunmalıdır:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Gerçek Zamanlı Analiz:</strong> Logları diske yazmadan, RAM üzerinde analiz edebilme (In-memory computing).</li>
        <li><strong>Yapay Zeka Deseği:</strong> Anomali tespiti için makine öğrenmesi (UEBA).</li>
        <li><strong>Sınırsız Ölçeklenebilirlik:</strong> Veri hacmi arttığında performans kaybı yaşanmaması.</li>
      </ul>
    `
  },
  "log-yonetimi-nedir": {
    title: "Log Yönetimi ve Regülasyon Uyumluluğu (KVKK & 5651)",
    description: "5651 ve KVKK kapsamında log yönetimi neden zorunlu? Zaman damgası, log imzalama ve yasal uyumluluk için ACKLOG rehberini inceleyin.",
    content: `
      <h2>Log Yönetimi Nedir?</h2>
      <p>
        Bilişim sistemlerinde oluşan her türlü işlemin (olayın) kayıt altına alınmasına loglama denir. 
        <strong>Log Yönetimi</strong> ise bu kayıtların toplanması, güvenli bir şekilde saklanması, imzalanması ve gerektiğinde analiz edilmesini kapsayan süreçler bütünüdür.
      </p>

      <h3>Türkiye'de Yasal Zorunluluklar: 5651 ve KVKK</h3>
      <p>
        Türkiye'de faaliyet gösteren kurumlar için log yönetimi teknik bir ihtiyaçtan öte yasal bir zorunluluktur.
      </p>

      <h4>1. 5651 Sayılı Kanun</h4>
      <p>
        İnternet erişimi sağlayan kurumların (kafe, otel, şirket) iç ağlarındaki IP dağıtımlarını ve erişim loglarını 
        <strong>zaman damgası</strong> ile imzalayarak saklamasını zorunlu kılar. Amacı, siber suçların takibini sağlamaktır.
      </p>

      <h4>2. KVKK (Kişisel Verilerin Korunması Kanunu)</h4>
      <p>
        Veri sorumluları, kişisel verilere hukuka aykırı erişimi engellemekle yükümlüdür. Bu kapsamda:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Erişim loglarının tutulması,</li>
        <li>Logların değiştirilemezliğinin sağlanması (Hashing),</li>
        <li>Siber saldırıların tespiti için izleme yapılması gerekmektedir.</li>
      </ul>

      <h3>Başarılı Bir Log Yönetim Stratejisi</h3>
      <p>
        Sadece "log tutmak" yeterli değildir. Logların <strong>anlamlı</strong> ve <strong>aranabilir</strong> olması gerekir.
        Milyonlarca satır ham veri içinde bir saldırı izini bulmak samanlıkta iğne aramaya benzer.
        İşte bu noktada <strong>ACKLOG</strong> devreye girer: Logları otomatik olarak ayrıştırır (parsing), zenginleştirir ve saniyeler içinde sorgulanabilir hale getirir.
      </p>
    `
  },
  "soc-nedir": {
    title: "SOC (Security Operations Center) Nedir? Kurulum Rehberi",
    description: "SOC nedir ve nasıl kurulur? Güvenlik Operasyon Merkezi ekiplerinin görevleri, kritik teknolojiler ve ACKLOG ile SOC operasyonlarını hızlandırma yöntemleri.",
    content: `
      <h2>SOC: Güvenlik Operasyon Merkezi</h2>
      <p>
        <strong>SOC (Security Operations Center)</strong>, bir kurumun bilgi güvenliği olaylarını sürekli izleyen, analiz eden ve müdahale eden merkezi birimdir.
        SOC sadece bir "oda" veya "yazılım" değildir; <strong>İnsan, Süreç ve Teknoloji</strong> üçlüsünün birleşimidir.
      </p>

      <h3>SOC Ekiplerinin Görevleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>L1 Analist (Triage):</strong> Gelen alarmları ilk karşılayan, yanlış alarmları (false positive) eleyen ekiptir.</li>
        <li><strong>L2 Analist (Incident Response):</strong> Gerçek tehditleri derinlemesine inceleyen ve müdahale sürecini başlatan ekiptir.</li>
        <li><strong>L3 Analist (Threat Hunter):</strong> Henüz alarma dönüşmemiş gizli tehditleri ağda proaktif olarak arayan uzmanlardır.</li>
      </ul>

      <h3>SOC Kurulumunda Kritik Teknolojiler</h3>
      <p>Başarılı bir SOC operasyonu için şu araçlar olmazsa olmazdır:</p>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>SIEM (Merkezi):</strong> Tüm verilerin toplandığı ve analiz edildiği beyin. (Örn: ACKLOG)</li>
        <li><strong>EDR (Endpoint Detection):</strong> Son kullanıcı cihazlarındaki tehditleri yakalar.</li>
        <li><strong>SOAR (Orchestration):</strong> Tekrarlayan görevleri otomatize eder.</li>
        <li><strong>Threat Intelligence:</strong> Dünyadaki güncel saldırı verilerini sisteme besler.</li>
      </ol>

      <h3>ACKLOG ile SOC Operasyonlarını Hızlandırın</h3>
      <p>
        ACKLOG, SOC analistleri için tasarlanmıştır. Karmaşık sorgu dilleri yerine doğal ve hızlı filtreleme imkanı sunar.
        Böylece analistleriniz "log beklemekle" değil, "tehdit avlamakla" vakit harcar.
      </p>
    `
  },
  "threat-hunting-nedir": {
    title: "Threat Hunting Nedir? Siber Tehdit Avcılığına Giriş",
    description: "Threat Hunting (Tehdit Avcılığı) nedir? Proaktif siber savunma stratejileri, anomali tespiti ve ACKLOG ile siber saldırganları izini sürün.",
    content: `
      <h2>Threat Hunting (Tehdit Avcılığı) Nedir?</h2>
      <p>
        <strong>Threat Hunting</strong>, otomatik güvenlik sistemlerinin (Firewall, IDS/IPS, Antivirüs) gözünden kaçan gelişmiş siber tehditleri tespit etmek için yapılan
        <strong>proaktif</strong> ve <strong>insan odaklı</strong> bir siber güvenlik faaliyetidir.
      </p>
      <p>
        Geleneksel güvenlik anlayışı "alarm beklemek" üzerine kuruludur. Ancak günümüzde saldırganlar, güvenlik cihazlarını atlatarak aylarca sistemde gizlenebilir (Dwell Time).
        Tehdit avcıları, "Sistemimde şu an aktif bir saldırgan olabilir mi?" sorusuyla yola çıkar ve hipotezlere dayalı aramalar yapar.
      </p>

      <h3>Geleneksel Tespit vs. Threat Hunting</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Geleneksel Tespit:</strong> Reaktifdir. Bir alarm çaldığında müdahale edilir. (Örn: "Virüs bulundu" uyarısı)</li>
        <li><strong>Threat Hunting:</strong> Proaktiftir. Henüz bir alarm yokken saldırı izleri aranır. (Örn: "Neden bu kullanıcı mesai saatleri dışında veri tabanına bağlandı?")</li>
      </ul>

      <h3>ACKLOG ile Etkili Threat Hunting Nasıl Yapılır?</h3>
      <p>
        Tehdit avcılığı hız ve esneklik gerektirir. Milyarlarca log içinde samanlıkta iğne aramak için <strong>ACKLOG</strong> şu yetenekleri sunar:
      </p>

      <h4>1. Işık Hızında Sorgulama</h4>
      <p>
        Tehdit avcıları bir hipotezi test ederken sonucu saatlerce bekleyemez. ACKLOG'un in-memory teknolojisi, terabaytlarca veriyi saniyeler içinde sorgulamanızı sağlar.
      </p>

      <h4>2. Gelişmiş Arama ve Drill-Down</h4>
      <p>
        Şüpheli bir IP adresi mi buldunuz? ACKLOG üzerinde tek tıkla bu IP'nin geçtiği tüm logları, ilişkili kullanıcıları ve diğer aktiviteleri anında görebilirsiniz.
      </p>

      <h4>3. Görselleştirme ile Anomali Tespiti</h4>
      <p>
        Sayısal veriler arasında kaybolmak yerine, ACKLOG'un görsel panelleri sayesinde trafik sıçramalarını, olağandışı port kullanımlarını veya coğrafi anomalileri (örn: Çin'den gelen beklenmedik trafik) bir bakışta fark edebilirsiniz.
      </p>
    `
  },
  "kvkk-ve-log-uyumluluk": {
    title: "KVKK ve Log Uyumluluğu: Yasal Zorunluluklar",
    description: "KVKK ve 5651 sayılı kanun kapsamındaki log yönetimi yükümlülüklerinizi öğrenin. TÜBİTAK zaman damgası ve ACKLOG ile tam uyumluluk sağlayın.",
    content: `
      <h2>KVKK ve 5651 Sayılı Kanun Kapsamında Log Yönetimi</h2>
      <p>
        Türkiye'de faaliyet gösteren her kurum, dijital ayak izlerini yasalara uygun şekilde saklamakla yükümlüdür. 
        <strong>Kişisel Verilerin Korunması Kanunu (KVKK)</strong> ve <strong>5651 Sayılı Kanun</strong>, log yönetimini bir tercih değil, zorunluluk haline getirmiştir.
      </p>

      <h3>Neden Log Tutmalısınız?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Yasal Zorunluluk:</strong> İnternet erişimi sağlayan kurumlar, IP dağıtım loglarını zaman damgasıyla imzalamalıdır.</li>
        <li><strong>Veri İhlali İspatı:</strong> KVKK kapsamında bir veri sızıntısı yaşandığında, kurumun "gerekli tedbirleri aldığını" kanıtlaması gerekir.</li>
        <li><strong>Siber Suç Takibi:</strong> İç ağınızdan işlenen bir suçta (örn: dolandırıcılık), faili tespit edemezseniz sorumlu siz olursunuz.</li>
      </ul>

      <h3>ACKLOG ile Tam Uyumluluk</h3>
      <p>
        ACKLOG, yerli mevzuatlara uygun olarak geliştirilmiştir:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Zaman Damgası (Time Stamping):</strong> Logların değiştirilmediğini garanti altına alan TÜBİTAK zaman damgası entegrasyonu.</li>
        <li><strong>İmzalı Log Saklama:</strong> Log dosyalarının kriptografik özetlerini (hash) alarak bütünlüğünü korur.</li>
        <li><strong>Anında Raporlama:</strong> Denetimler için hazır KVKK uyumluluk raporları sunar.</li>
      </ul>
    `
  },
  "siem-vs-log-yonetimi": {
    title: "SIEM vs. Log Yönetimi: Farklar Neler?",
    description: "SIEM ve Log Yönetimi arasındaki kritik farklar nelerdir? Kurumunuz için hangi çözüm daha uygun? Detaylı karşılaştırma rehberimizi okuyun.",
    content: `
      <h2>SIEM ile Klasik Log Yönetimi Arasındaki Farklar</h2>
      <p>
        Pek çok kurum "Loglarımı topluyorum, güvendeyim" yanılgısına düşmektedir. Ancak Log Yönetimi ve SIEM birbirinden çok farklı iki disiplindir.
      </p>

      <h3>Karşılaştırma Tablosu</h3>
      <div class="overflow-x-auto my-6 border rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="bg-muted/50 text-muted-foreground uppercase">
            <tr>
              <th class="px-6 py-3">Özellik</th>
              <th class="px-6 py-3">Log Yönetimi</th>
              <th class="px-6 py-3">SIEM (ACKLOG)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Temel Amaç</td>
              <td class="px-6 py-4">Kayıt ve Saklama</td>
              <td class="px-6 py-4">Analiz ve Alarm</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Veri İşleme</td>
              <td class="px-6 py-4">Pasif (Depolama)</td>
              <td class="px-6 py-4">Aktif (Korelasyon)</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Tehdit Tespiti</td>
              <td class="px-6 py-4">Manuel Arama Gerekir</td>
              <td class="px-6 py-4">Otomatik Gerçek Zamanlı Alarm</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Zeka</td>
              <td class="px-6 py-4">Sadece Veri</td>
              <td class="px-6 py-4">Yapay Zeka & Tehdit İstihbaratı</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Hangisine İhtiyacınız Var?</h3>
      <p>
        Sadece "yasalara uymak" istiyorsanız Log Yönetimi yeterli olabilir. Ancak kurumunuzu <strong>aktif siber saldırılardan korumak</strong>, 
        fidye yazılımlarını (Ransomware) engellemek ve verilerinizi güvende tutmak istiyorsanız bir <strong>SIEM</strong> çözümüne ihtiyacınız vardır.
      </p>
    `
  },
  "qradar-alternatifi": {
    title: "Neden ACKLOG En İyi QRadar Alternatifidir?",
    description: "QRadar'dan ACKLOG'a geçmek için 5 neden: Karmaşıklıktan kurtulun, performansı artırın ve maliyetlerinizi optimize edin. En iyi yerli SIEM alternatifi.",
    content: `
      <h2>QRadar Kullanıcıları Neden Alternatif SIEM Arıyor?</h2>
      <p>
        Pazardaki en eski oyunculardan biri olan QRadar, günümüzün dinamik tehdit ortamında ve modern yazılım mimarisi beklentilerinde ciddi zorluklarla karşılaşmaktadır. 
        <strong>ACKLOG</strong>, QRadar'ın hantal yapısına karşı çevik, güçlü ve uygun maliyetli en iyi alternatif olarak öne çıkmaktadır.
      </p>

      <h3>1. Karmaşıklık ve Kullanım Zorluğu</h3>
      <p>
        QRadar, özellikle yeni başlayanlar için karmaşık ve kullanımı zor olarak nitelendiriliyor. Kullanıcı arayüzü (UI) sezgisel değil ve gezinmesi oldukça güç. 
        Yardım belgeleri ve eğitim kaynakları ise kullanıcıların sorunlarını çözmekte yetersiz kalabiliyor.
      </p>

      <h3>2. Performans Sorunları</h3>
      <p>
        Büyük veri kümelerini işlemekte QRadar yavaş performans gösterebiliyor. Sorun giderme, tespit ve çözüm süreçleri karmaşık; hataları anlamak ve müdahale etmek 
        bir sistem yöneticisi için oldukça zahmetli. Admin dostu olmayan bu yapı, operasyonel verimliliği düşürüyor.
      </p>

      <h3>3. Entegrasyon ve Mimari Kısıtlar</h3>
      <p>
        QRadar'ın kapalı entegrasyon modeli, diğer güvenlik araçlarıyla uyum sağlamayı zorlaştırıyor. Basit bir syslog kaynağından veri almak için bile özel entegrasyonlar gerekebilir. 
        Eski teknolojisi ve yazılım mimarisi sebebiyle veri toplama ve korelasyon süreçleri hantaldır. Korelasyon tanımlamak için modern ve anlaşılır bir metodu bulunmamaktadır.
      </p>

      <h3>4. Özelliklerin Verimliliği</h3>
      <p>
        Çok sayıda özelliğe sahip görünse de, eski mimarisi sebebiyle siber güvenlik yöneticilerinin ihtiyaç duyduğu çevikliği sağlayamıyor. 
        Uygulama kolaylığı ve verimli sonuç alma açısından ACKLOG'un sunduğu modern araçların gerisinde kalıyor.
      </p>

      <h3>5. Yüksek Maliyet</h3>
      <p>
        QRadar lisansları ve bakım sözleşmeleri oldukça pahalıdır. ACKLOG SIEM gibi güncel teknolojilerle desteklenmiş, daha yetenekli ama düşük maliyetli 
        çözümler karşısında, QRadar'ın maliyet/fayda dengesi zayıflamıştır. Özellikle KOBİ'ler için erişilebilir olmaktan uzaktır.
      </p>

      <div class="bg-blue-900/10 border border-blue-500/20 p-6 rounded-xl my-8">
        <h4 class="text-white font-bold mb-4 italic">Kullanıcılar Ne Diyor?</h4>
        <ul class="space-y-4">
          <li class="text-sm border-l-2 border-blue-500 pl-4 italic text-gray-400">"QRadar çok karmaşık ve kullanımı zor. Daha sezgisel bir arayüze ihtiyacı var."</li>
          <li class="text-sm border-l-2 border-blue-500 pl-4 italic text-gray-400">"Büyük veri kümelerini işlemekte çok yavaş. Performansı iyileştirmeleri gerekiyor."</li>
          <li class="text-sm border-l-2 border-blue-500 pl-4 italic text-gray-400">"Diğer güvenlik araçlarımızla entegre etmek tam bir kabus."</li>
          <li class="text-sm border-l-2 border-blue-500 pl-4 italic text-gray-400">"Çok pahalı. Daha uygun fiyatlı ve yetenekli bir çözüme geçmek şart oldu."</li>
        </ul>
      </div>

      <h3>Bizim Desteğimizle QRadar'dan Çıkmak Çok Kolay</h3>
      <p>
        ACKLOG SIEM, QRadar'ın karmaşıklığını ortadan kaldıran, performansı maksimize eden ve açık API mimarisiyle her sisteme saniyeler içinde entegre olan modern bir platformdur.
      </p>
      
      <p class="font-bold text-white">
        ACKLOG'un benzersiz yeteneklerini görmek, ücretsiz danışmanlık almak ve ücretsiz denemek için bize ulaşın.
      </p>
    `
  },
  "siber-terimler-sozlugu": {
    title: "Siber Terimler Sözlüğü",
    description: "SIEM, SOC, UEBA, SOAR, EDR ve daha fazlası. Siber güvenlik dünyasında en çok kullanılan terimlerin kapsamlı sözlüğü ve açıklamaları.",
    content: `
      <p>Siber güvenlik dünyasında kullanılan temel kavramların ve teknik terimlerin açıklamalarını aşağıda bulabilirsiniz. Aradığınız terimi bulamadıysanız lütfen <a href="/" class="text-blue-400 hover:underline">Bilgi İsteyin</a> sayfamızdan bize ulaşın.</p>

      <div class="space-y-8 mt-8">
        <div>
          <h3><strong>Alerts / Uyarılar</strong></h3>
          <p>Uyarı, belirli bir olay (veya bir dizi olay) meydana geldiğinde tetiklenen bir uyarıdır. Uyarı genellikle harekete geçmeleri için sorumlu kişilere veya sisteme iletilir. Tipik bir kurumsal SOC (güvenlik operasyon merkezi), günde binlerce veya milyonlarca uyarı görür ve bunların yalnızca çok küçük bir kısmı gerçek tehditlerden kaynaklanır. Gerçek tehditler tarafından tetiklenmeyen uyarılara hatalı pozitifler denir.</p>
        </div>

        <div>
          <h3><strong>Alert fatigue / Uyarı Yorgunluğu</strong></h3>
          <p>Uyarı yorgunluğu, SOC analistlerinin çok sayıda sık uyarıya karşı savunmasız kalması durumunda ortaya çıkar. Bu nedenle onlara karşı duyarsızlaşırlar. Alarm yorgunluğu, uyarıların gözden kaçırılmasına veya göz ardı edilmesine ya da kötü amaçlı etkinliklere gecikmiş yanıtlara neden olur. Bu uyarıların büyük bir kısmı aslında gerçek tehditler değil, yanlış pozitif uyarılardır. Ancak uyarı yorgunluğu bir kuruluş için çok tehlikeli olabilir çünkü gerçek tehditlerin yeterince araştırılmamasına yol açabilir.</p>
        </div>

        <div>
          <h3><strong>Anomalies / Anormallikler</strong></h3>
          <p>Anomaliler, beklenmeyen davranışı işaret eden bir veya daha fazla parametrede normal kalıptan sapmalardır. Anormallikler tanım gereği iyi ya da kötü niyetli değildir. Bunlar sadece beklenmedik davranış biçimleridir. Bir anormallik, anormal derecede yüksek sayıda kullanıcının bir sisteme giriş yapması gibi normalden sapan herhangi bir şey olabilir.</p>
        </div>

        <div>
          <h3><strong>Anomaly Detection / Anormal Durum Tespiti</strong></h3>
          <p>Veri madenciliğinde aykırı değer tespiti olarak da bilinen anormallik tespiti, veri kümelerinin normal davranışından sapan olağandışı öğelerin, olayların veya gözlemlerin tanımlanmasıdır. Bu nadir oluşumlar, verilerin çoğunluğundan farklı özellikleri nedeniyle endişe vericidir.</p>
        </div>

        <div>
          <h3><strong>Automated alert triage / Otomatik Uyarı Önceliklendirmesi</strong></h3>
          <p>Otomatik uyarı önceliklendirmesi (uyarı triyajı), çok sayıda uyarının üzerinden geçerek tehdidin ciddiyetini belirlemek için bunların araştırılmasını içeren otomatik işlemdir. En kritik uyarıların önceliklendirilmesi, daha hızlı yanıt verilmesini sağlar.</p>
        </div>

        <div>
          <h3><strong>Automated threat detection / Otomatik Tehdit Algılama</strong></h3>
          <p>BT altyapısını tehlikeye atabilecek kötü amaçlı etkinlikleri tespit etmek için tüm güvenlik ekosisteminin otomatik olarak analiz edilmesi uygulamasıdır. Algoritmaların insan yardımı olmadan 7/24 çalışabilmesi nedeniyle otomasyon, tehdit tespitinde kritik öneme sahiptir.</p>
        </div>

        <div>
          <h3><strong>Automated investigation / Otomatik İnceleme</strong></h3>
          <p>Meydana gelen olayları belirlemek ve kanıt toplamak için bir uyarıyla ilgili verileri toplamanın otomatik sürecidir. Potansiyel ihlallerin bekleme süresini ve eski araçların neden olduğu uyarı yorgunluğunu önemli ölçüde azaltır.</p>
        </div>

        <div>
          <h3><strong>Automated response / Otomatik Cevap</strong></h3>
          <p>Güvenlik tehditlerine sistematik yanıt vermek için önceden yapılandırılmış, otomatikleştirilmiş süreçleri ifade eder. İnsan müdahalesini ortadan kaldıran otomatik yanıt, yanıt süresini önemli ölçüde azaltır.</p>
        </div>

        <div>
          <h3><strong>Autonomous investigation / Özerk İnceleme</strong></h3>
          <p>Kapsamlı tehdit giderme sağlamak ve uzun süreli ihlalleri önlemek için gelişmiş tehdit algılama ve otomatik olay müdahalesi sağlayan bir teknolojidir. Farklı uyarıları ve günlükleri tek bir anlatımda birleştirerek her siber olayın kapsamlı bir görünümünü oluşturur.</p>
        </div>

        <div>
          <h3><strong>Bot Networks / Bot Ağları</strong></h3>
          <p>İnternet'e bağlı bir dizi programın görevleri işbirliği içinde gerçekleştirmek için benzer programlarla iletişim kurmasıdır. "Botnet", siber suçlular tarafından kötü amaçlı kullanımlar gerçekleştirmek üzere bir araya getirilen ağları ifade eder.</p>
        </div>

        <div>
          <h3><strong>C&C (Command and Control) / Komuta ve Kontrol</strong></h3>
          <p>Komuta ve kontrol [C&C] sunucusu, bir saldırgan veya siber suçlu tarafından kontrol edilen, kötü amaçlı yazılımların ele geçirdiği sistemlere komutlar göndermek ve çalınan verileri almak için kullanılan bilgisayardır.</p>
        </div>

        <div>
          <h3><strong>Cloud monitoring / Bulut İzleme</strong></h3>
          <p>Bulut tabanlı uygulamalarda gerçekleşen operasyonel iş akışlarının ürettiği verilerin toplanması ve analiz edilmesi sürecidir. Potansiyel güvenlik tehditlerini keşfetmeyi kolaylaştırır.</p>
        </div>

        <div>
          <h3><strong>Cyber forensics / Siber Adli Soruşturma</strong></h3>
          <p>Bir suiistimal veya suç eylemi soruşturmasında delil toplama amacıyla dijital materyallerin ve bilgisayar yazılımlarının incelenmesi sürecidir. Edinme, inceleme, analiz ve raporlama adımlarını içerir.</p>
        </div>

        <div>
          <h3><strong>Data breach / Veri İhlali</strong></h3>
          <p>Gizli veri ve bilgilerin bir BT altyapısından çalındığı bir olaydır. Veri ihlalleri genellikle kuruluşların itibarının zedelenmesine veya yüksek para cezalarına (GDPR, KVKK vb.) yol açar.</p>
        </div>

        <div>
          <h3><strong>Data encryption / Veri Şifreleme</strong></h3>
          <p>Verilerin şifrelendiği ve yalnızca doğru şifreleme anahtarına sahip bir kullanıcı tarafından çözülebildiği bir güvenlik yöntemidir. Hassas verileri korumak için sıklıkla kullanılır.</p>
        </div>

        <div>
          <h3><strong>Data exfiltration / Veri Hırsızlığı</strong></h3>
          <p>Kötü amaçlı yazılım veya kötü niyetli aktörlerin bir sunucudan veya bilgisayardan izinsiz olarak veri kopyalaması veya aktarması durumunda meydana gelen hırsızlık biçimidir.</p>
        </div>

        <div>
          <h3><strong>DGA / Etki alanı oluşturma algoritmaları</strong></h3>
          <p>Çok sayıda alan adı (domain) üreten algoritmalardır. Saldırganlar tarafından komut ve kontrol sunucuları ile buluşma noktalarını gizlemek ve kapatılmasını zorlaştırmak için kullanılır.</p>
        </div>

        <div>
          <h3><strong>Dridex / Excel Makro Zararlı Yazılımları</strong></h3>
          <p>Sistemlere bulaşmak için Microsoft Office'teki makrolardan yararlanan bir tür bankacılık kötü amaçlı yazılımıdır. Genellikle spam e-posta ekleri üzerinden Windows kullanıcılarını hedef alır.</p>
        </div>

        <div>
          <h3><strong>Endpoint Security / Uç Nokta Güvenliği</strong></h3>
          <p>Dizüstü bilgisayar, masaüstü bilgisayar ve mobil cihazlar gibi son kullanıcı cihazlarının giriş noktalarını kötü niyetli saldırılara karşı koruma yaklaşımıdır.</p>
        </div>

        <div>
          <h3><strong>EDR (Endpoint Detection & Response)</strong></h3>
          <p>Uç nokta verilerinin toplanmasını ve izlenmesini otomatik yanıt yetenekleriyle birleştiren bir güvenlik çözümüdür. Gelişmiş tehditlere karşı sürekli izleme ve müdahale sağlar.</p>
        </div>

        <div>
          <h3><strong>Email gateways / E-posta Geçitleri</strong></h3>
          <p>Bir kuruluştan gönderilen ve alınan e-postaları izlemek için kullanılan bir cihaz veya yazılımdır. Spam, kimlik avı ve kötü amaçlı yazılım içeren mesajları engellemek için tasarlanmıştır.</p>
        </div>

        <div>
          <h3><strong>False-positive alerts / Hatalı Pozitif Uyarılar</strong></h3>
          <p>Yanlış etiketlenmiş güvenlik uyarılarıdır; sistemin gerçekte olmadığı halde bir tehdit gösterdiği anlamına gelir. Çok sayıda hatalı pozitif, alarm yorgunluğuna yol açar.</p>
        </div>

        <div>
          <h3><strong>Firewall / Güvenlik Duvarı</strong></h3>
          <p>Gelen ve giden ağ trafiğini izleyen ve tanımlanmış güvenlik kurallarına göre trafiğe izin veren veya engelleyen bir ağ güvenlik cihazıdır.</p>
        </div>

        <div>
          <h3><strong>Incident Response / Olay Müdahalesi</strong></h3>
          <p>Siber saldırı, hırsızlık veya hizmet reddi gibi güvenlik sorunlarına karşı geliştirilen bir eylem planıdır. Amacı saldırı maliyetlerini ve kurtarma süresini en aza indirmektir.</p>
        </div>

        <div>
          <h3><strong>Infostealer / Bilgi Hırsızı</strong></h3>
          <p>Ele geçirilen bilgisayardan gizli bilgiler toplayan (mali veriler, kimlik bilgileri vb.) ve bunları önceden belirlenmiş bir konuma gönderen bir tür Truva atı programıdır.</p>
        </div>

        <div>
          <h3><strong>Insider threat / İçeriden Tehdit</strong></h3>
          <p>Yetkili erişimini kullanarak hassas bilgileri ifşa eden veya değiştiren mevcut çalışan veya güvenilir kişilerin oluşturduğu potansiyel tehditlerdir.</p>
        </div>

        <div>
          <h3><strong>Intrusion Detection / İzinsiz Giriş Tespiti</strong></h3>
          <p>Kötüye kullanım ve istilalar dahil potansiyel güvenlik ihlallerini belirlemek için bir bilgisayar veya ağdaki büyük miktarda verinin toplanıp analiz edilmesidir.</p>
        </div>

        <div>
          <h3><strong>Logic bomb / Mantık Bombası</strong></h3>
          <p>Belirli koşullar karşılandığında kötü amaçlı bir işlevi tetiklemek için bir yazılım sistemine kasıtlı olarak yerleştirilen bir kod parçasıdır.</p>
        </div>

        <div>
          <h3><strong>Machine learning / Makine Öğrenimi</strong></h3>
          <p>Yazılım uygulamalarının açıkça programlanmadan belirli sonuçları tahmin etmesini sağlayan Yapay Zeka alt kümesidir. Siber güvenlikte tehditlerin tespitinde ve önlenmesinde kullanılır.</p>
        </div>

        <div>
          <h3><strong>Malware / Kötü Amaçlı Yazılım</strong></h3>
          <p>Bilgisayar işlemlerini bozmak veya hassas bilgilere erişmek için kullanılan düşman amaçlı yazılımlardır. Virüsler, solucanlar, fidye yazılımları (Ransomware) ve Truva atları bu kategoriye girer.</p>
        </div>

        <div>
          <h3><strong>Malware remediation / Kötü Amaçlı Yazılım Düzeltme</strong></h3>
          <p>Meşru dosyalara zarar vermeden bir ağdaki tüm kötü amaçlı kod izlerini kaldırma işlemidir. Kodun tam olarak kaldırılmaması sistemin etkilenmeye devam etmesine neden olabilir.</p>
        </div>

        <div>
          <h3><strong>Network Traffic Analysis (NTA)</strong></h3>
          <p>Güvenlik tehditlerini tespit etmek için ağ trafiği iletişim kalıplarını yakalama, kaydetme ve analiz etme sürecidir.</p>
        </div>

        <div>
          <h3><strong>Noisy detection / Gürültü Algılama</strong></h3>
          <p>SIEM'in güvenlik operasyon ekibine çok sayıda yanlış pozitif uyarı göndererek gerçek tehditlere odaklanmayı engellemesi durumunu ifade eder.</p>
        </div>

        <div>
          <h3><strong>Orchestration / Orkestrasyon</strong></h3>
          <p>Bir SOAR platformunun, oyun kitaplarının (playbooks) yürütülmesini sağlamak için diğer teknolojileri yönetme veya kontrol etme yeteneğidir.</p>
        </div>

        <div>
          <h3><strong>Phishing / E-dolandırıcılık</strong></h3>
          <p>Güvenlik terimi güvenilir bir varlık gibi görünerek kullanıcı adları, şifreler ve kredi kartı bilgileri gibi hassas verileri elde etme girişimidir.</p>
        </div>

        <div>
          <h3><strong>Playbooks / Başucu Kitapları</strong></h3>
          <p>Belirli güvenlik uyarıları tetiklendiğinde gerçekleşen önceden tanımlanmış otomasyon prosedürleridir. Yanıt süresini hızlandırır.</p>
        </div>

        <div>
          <h3><strong>Ransomware / Fidye Yazılımı</strong></h3>
          <p>Kurbanın verilerini şifreleyen ve erişimi engellemekle tehdit ederek fidye talep eden bir kötü amaçlı yazılım türüdür.</p>
        </div>

        <div>
          <h3><strong>Security Information and Event Management (SIEM)</strong></h3>
          <p>Tüm BT altyapısından gelen günlük verilerini toplayarak tehdit tespiti, uyarılma ve merkezi izleme sağlayan çözümdür.</p>
        </div>

        <div>
          <h3><strong>Security operations center (SOC)</strong></h3>
          <p>Kuruluşu siber saldırılara karşı koruyan, izleyen ve analiz eden merkezi güvenlik birimidir.</p>
        </div>

        <div>
          <h3><strong>SOAR (Security orchestration automation and response)</strong></h3>
          <p>Olay müdahalesi, otomasyon ve tehdit istihbaratı yönetimini tek bir platformda birleştiren çözümdür.</p>
        </div>

        <div>
          <h3><strong>Threat Hunting / Tehdit Avcılığı</strong></h3>
          <p>Geleneksel çözümleri atlayan gelişmiş tehditleri bulmak için ağlarda yapılan proaktif ve sürekli arama sürecidir.</p>
        </div>

        <div>
          <h3><strong>Threat intelligence (TI) / Tehdit istihbaratı</strong></h3>
          <p>Olası tehditleri önlemek ve tanımlamak için kullanılan kanıta dayalı bilgi ve bağlamdır.</p>
        </div>

        <div>
          <h3><strong>User and entity behavior analytics (UEBA)</strong></h3>
          <p>Anormal ve riskli davranışları keşfetmek için kullanıcıların ve varlıkların davranışlarını makine öğrenimi ile analiz eden araçtır.</p>
        </div>

        <div>
          <h3><strong>XDR (Extended detection and response)</strong></h3>
          <p>Birden fazla güvenlik bileşeninden gelen verileri ilişkilendiren birleşik bir olay algılama ve yanıt platformudur.</p>
        </div>
      </div>
    `
  },
  "siem-nedir-kilavuzu": {
    title: "SIEM Nedir? Kapsamlı Rehber",
    description: "Kurumsal güvenlik için SIEM satın alma rehberi. SIEM hangi problemleri çözer, nerelerde kullanılır ve seçim yaparken nelere dikkat edilmeli?",
    content: `
      <h2><strong>SIEM Nedir?</strong></h2>
      <p>
        <strong>SIEM</strong>, Güvenlik Bilgi ve Olay Yönetimi (Security Information and Event Management) kelimelerinin kısaltmasıdır. 
        Siber güvenlik alanında kritik bir rol oynayan SIEM, bir ağdaki tüm cihazlardan ve uygulamalardan gelen güvenlik verilerini toplamak, 
        analiz etmek, korelasyona sokmak ve raporlamak için kullanılan bir yazılım çözümüdür.
      </p>

      <h2><strong>SIEM Çözümlerinin İşlevi Nedir?</strong></h2>
      <p>SIEM'in temel işlevleri şunlardır:</p>

      <div class="space-y-6 mt-6">
        <div>
          <h3><strong>1. Log Toplama:</strong></h3>
          <p>Başarılı bir SIEM çözümü ağdaki tüm cihazlardan ve uygulamalardan anlık logları toplar ve merkezi bir veri tabanına aktarır.</p>
        </div>
        <div>
          <h3><strong>2. Log Analizi:</strong></h3>
          <p>SIEM toplanan logları analiz ederek anormallikler, ihlaller ve potansiyel tehditler arar.</p>
        </div>
        <div>
          <h3><strong>3. Korelasyon:</strong></h3>
          <p>Güçlü bir SIEM çözümü farklı kaynaklardan gelen logları birbiriyle ilişkilendirerek daha geniş bir bakış açısı elde eder.</p>
        </div>
        <div>
          <h3><strong>4. Raporlama:</strong></h3>
          <p>Güvenlik durumu hakkında detaylı raporlar ve uyarılar sunar.</p>
        </div>
      </div>

      <div class="bg-blue-900/10 border border-blue-500/20 p-8 rounded-2xl my-12">
        <h2 class="mt-0 text-white"><strong>SIEM Hangi Problemleri Çözer?</strong></h2>
        <ul class="space-y-4 mb-0">
          <li class="flex gap-3">
            <span class="text-blue-500 font-bold">•</span>
            <span>Siber saldırıları daha hızlı tespit ve yanıtlama imkanı sağlar.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-500 font-bold">•</span>
            <span>Uyum gerekliliklerini (KVKK, GDPR vb.) karşılamada yardımcı olur.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-500 font-bold">•</span>
            <span>Güvenlik açıklarını ve zayıflıkları belirlemede yardımcı olur.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-500 font-bold">•</span>
            <span>Riskleri ve tehditleri daha iyi anlamayı sağlar.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-500 font-bold">•</span>
            <span>Güvenlik operasyonlarını (SOC) optimize eder.</span>
          </li>
        </ul>
      </div>

      <h2><strong>SIEM Nerelerde Kullanılır?</strong></h2>
      <p>SIEM, siber güvenlik alanında oldukça geniş bir yelpazede kullanılabilir:</p>

      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <div class="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
          <h4 class="text-white mt-0"><strong>Kurumsal Ağlar</strong></h4>
          <p class="text-sm mb-0">Oturum açma/kapama girişimlerini, dosya erişimlerini ve sistem değişikliklerini izleyerek anormal davranışları tespit eder.</p>
        </div>
        <div class="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
          <h4 class="text-white mt-0"><strong>Kamu Kurumları</strong></h4>
          <p class="text-sm mb-0">Hassas verilere erişimi izleyerek veri ihlallerini ve yetkisiz erişimi önlemeye yardımcı olur.</p>
        </div>
        <div class="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
          <h4 class="text-white mt-0"><strong>Sağlık Kuruluşları</strong></h4>
          <p class="text-sm mb-0">Hasta kayıtlarına erişimi izleyerek HIPAA gibi yasal düzenlemelere uyumu sağlar.</p>
        </div>
        <div class="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
          <h4 class="text-white mt-0"><strong>Finans Kurumları</strong></h4>
          <p class="text-sm mb-0">Dolandırıcılık ve kara para aklama girişimlerini tespit ederek mali kayıpları önler.</p>
        </div>
      </div>

      <div class="mt-12 p-8 border border-dashed border-blue-500/30 rounded-2xl text-center">
        <h3 class="text-white mt-0"><strong>ACKLOG SIEM ile Tanışın</strong></h3>
        <p>İhtiyaçlarınıza en uygun çözümü ararken ACKLOG SIEM'i mutlaka görün. Siber saldırılara hızlı yanıt verin, uyumluluğu kolayca sağlayın.</p>
        <p class="font-bold text-blue-400">Ücretsiz danışmanlık ve deneme için bize ulaşın.</p>
      </div>

      <h2 class="mt-16"><strong>SIEM Alırken Dikkat Edilmesi Gereken Kriterler</strong></h2>
      <div class="space-y-8">
        <div>
          <h3><strong>1. İhtiyaçlarınızı Belirleyin</strong></h3>
          <p>Hangi verileri korumak istediğinizi, hangi tehditlerin kritik olduğunu ve kaç kaynaktan veri toplanacağını belirleyin.</p>
        </div>
        <div>
          <h3><strong>2. Çözüm Özellikleri</strong></h3>
          <p>Desteklenen format çeşitliliği, hazır korelasyon şablonları, kullanım kolaylığı ve diğer güvenlik araçlarıyla entegrasyon yeteneklerini sorgulayın.</p>
        </div>
        <div>
          <h3><strong>3. Ölçeklenebilirlik</strong></h3>
          <p>Çözümün kurumunuzun büyümesiyle birlikte ölçeklenebilir olması ve gelecekteki ihtiyaçları karşılayabilmesi kritiktir.</p>
        </div>
        <div>
          <h3><strong>4. Destek ve Maliyet</strong></h3>
          <p>7/24 teknik destek imkanı, eğitim sertifikasyon seçenekleri ve toplam sahip olma maliyetini (lisans + bakım + kurulum) karşılaştırın.</p>
        </div>
      </div>
    `
  },
  "siem-dunyasinda-neden-degisim-sart": {
    title: "Bölüm 1: SIEM Dünyasında Neden Değişim Şart?",
    description: "Eski nesil SIEM'lerin gizli maliyetleri ve modern güvenlik ihtiyaçları. Modern IT yöneticisinin mevcut SIEM yapısını sorgulamasını gerektiren 3 temel neden.",
    content: `
      <h2>Eski Nesil SIEM’lerin Gizli Maliyetleri ve Modern Güvenlik İhtiyaçları</h2>
      <p>
        Siber güvenlik dünyası, 2026 yılı itibarıyla hiç olmadığı kadar hızlı ve karmaşık bir hal aldı. Artık sadece dış tehditlerle değil, devasa boyuta ulaşan veri yığınlarıyla da mücadele ediyoruz. Birçok kurum, hala 10-15 yıl öncesinin mimarisiyle inşa edilmiş SIEM (Güvenlik Bilgileri ve Etkinlik Yönetimi) çözümlerini kullanmaya çalışıyor. Ancak bu "eski nesil" sistemler, günümüzün dinamik tehdit ortamında artık çözüm değil, birer yük haline gelmiş durumda.
      </p>
      <p>
        İşte modern bir IT yöneticisinin mevcut SIEM yapısını sorgulamasını gerektiren 3 temel neden:
      </p>

      <h3>1. "Maliyet Şoku": EPS ve Veri Boyutu Çıkmazı</h3>
      <p>
        Geleneksel SIEM çözümlerinin çoğu, saniye başına olay sayısı (EPS) veya veri hacmi üzerinden lisanslama yapar. Şirketiniz büyüdükçe, log üreten cihazlarınız arttıkça veya bir saldırı anında log trafiği tavan yaptığında karşınıza çıkan faturalar yönetilemez hale gelir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Gizli Maliyet:</strong> Birçok global ürün, KVKK uyumluluğu veya gelişmiş raporlama gibi temel özellikleri "ek modül" adı altında ekstra ücretlerle sunar.
        </li>
        <li>
          <strong>ACKLOG Çözümü:</strong> Biz, bütçenizi log sayısına göre değil, gerçek ihtiyaca göre planlamanızı sağlıyoruz. Sürpriz maliyetleri ortadan kaldırarak şeffaf bir lisanslama modeli sunuyoruz.
        </li>
      </ul>

      <h3>2. Performans Darboğazı: "Loglar İçinde Kahve Molası"</h3>
      <p>
        Bir siber saldırı gerçekleştiğinde her saniye kritiktir. Ancak eski nesil SIEM’lerde karmaşık bir sorgu çalıştırdığınızda sonuçların dönmesi dakikalar, hatta saatler sürebilir. Disk tabanlı arama yapan hantal yapılar, modern tehdit avcılığı (Threat Hunting) için uygun değildir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Sorun:</strong> Saldırgan ağda hareket ederken, analistinizin sistemin cevap vermesini beklemesi kabul edilemez.
        </li>
        <li>
          <strong>ACKLOG Çözümü:</strong> In-memory (bellek içi) veritabanı teknolojimizle, petabytelarca veri içinde milisaniyeler seviyesinde arama yapmanıza olanak tanıyoruz. Biz buna "Kör Uçuşuna Son" diyoruz.
        </li>
      </ul>

      <h3>3. Yönetim Zorluğu ve Kalifiye Personel İhtiyacı</h3>
      <p>
        Eski SIEM’leri ayakta tutmak için "SIEM Gurusu" seviyesinde uzmanlara ihtiyaç duyulur. Yeni bir cihazın logunu anlamlandırmak (parsing) için günler süren manuel ayarlar ve karmaşık kodlamalar gerekir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Gerçek:</strong> IT ekipleri zaten yoğun. Bir SIEM, ekibin yükünü almalı, onlara yeni yükler yüklememeli.
        </li>
        <li>
          <strong>ACKLOG Çözümü:</strong> No-Code Log Parsing mimarimiz ile teknik ekibinizin dakikalar içinde yeni veri kaynaklarını entegre etmesini sağlıyoruz. Yazılımın karmaşıklığını biz üstleniyoruz, size sadece güvenliği yönetmek kalıyor.
        </li>
      </ul>

      <h3>Sonuç: Dönüşüm Kaçınılmaz</h3>
      <p>
        Eski nesil SIEM çözümleriyle devam etmek, patlamaya hazır bir maliyet ve performans bombası üzerinde oturmaya benzer. ISO 27001, KVKK ve 5651 gibi regülasyonların sıkılaştığı bu dönemde, kurumlar daha çevik, daha hızlı ve daha maliyet etkin çözümlere yönelmek zorunda.
      </p>
      <p>
        ACKLOG, sadece bir log tutucu değil; hız, sadelik ve maliyet avantajını birleştiren bir güvenlik operasyon merkezidir.
      </p>

      <div class="mt-8 p-6 bg-blue-950/30 border border-blue-500/20 rounded-xl">
          <h4 class="text-white font-bold mb-2">Bir Sonraki Bölüm</h4>
          <p class="text-blue-300">QRadar ve Global Devlerden ACKLOG’a Geçiş: Karmaşıklıktan Kurtulun!</p>
      </div>

      <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-xl text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Harekete Geçin</h3>
          <p class="text-gray-300 mb-6">
              Mevcut SIEM lisans maliyetlerinizden %50’ye varan oranlarda tasarruf etmek ve ACKLOG’un hızını kendi verilerinizle test etmek için bize ulaşın.
          </p>
      </div>
    `
  },
  "qradar-ve-global-devlerden-ackloga-gecis": {
    title: "Bölüm 2: QRadar ve Global Devlerden ACKLOG’a Geçiş",
    description: "Karmaşıklıktan Kurtulun: Global Çözümlerden Yerli Güce Geçmek İçin 5 Neden. Global devlerden ACKLOG’a geçişi bir 'risk' değil, bir 'modernizasyon' yapan 5 kritik neden.",
    content: `
      <h2>Karmaşıklıktan Kurtulun: Global Çözümlerden Yerli Güce Geçmek İçin 5 Neden</h2>
      <p>
        Birçok kurum, "dünya standartlarında" olduğu düşüncesiyle QRadar gibi global SIEM devlerine yatırım yapıyor. Ancak zamanla bu sistemlerin bakımı, lisans maliyetleri ve Türkiye yerel mevzuatına uyum süreçleri birer operasyonel kabusa dönüşebiliyor. Bir IT yöneticisi olarak, "Çalışıyorsa dokunma" prensibinin siber güvenlikte artık geçerli olmadığını biliyorsunuz; çünkü hantal sistemler güvenliği zayıflatır.
      </p>
      <p>
        İşte global devlerden ACKLOG’a geçişi bir "risk" değil, bir "modernizasyon" yapan 5 kritik neden:
      </p>

      <h3>1. "Parser" Yazma Kabusuna No-Code Çözüm</h3>
      <p>
        QRadar kullanıcılarının en büyük şikayeti, standart dışı bir cihazdan log çekmek istediklerinde karşılaştıkları LSX (Log Source Extension) ve karmaşık Regex yazma zorunluluğudur.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Global Sorun:</strong> Yeni bir uygulama veya cihaz eklemek için haftalarca uzman desteği beklemeniz gerekebilir.
        </li>
        <li>
          <strong>ACKLOG Farkı:</strong> No-Code Log Parsing teknolojimiz sayesinde, sürükle-bırak yöntemiyle dakikalar içinde yeni veri kaynaklarını sisteme dahil edebilirsiniz. Teknik ekibiniz kod yazmakla değil, güvenliği izlemekle vakit geçirir.
        </li>
      </ul>

      <h3>2. Donanım Oburluğuna Son: Optimize Mimari</h3>
      <p>
        Global yazılımlar, genellikle çok yüksek işlemci ve bellek kaynaklarına ihtiyaç duyar. QRadar’ı performanslı çalıştırmak için devasa sunucu yatırımları yapmanız gerekir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>ACKLOG Farkı:</strong> ACKLOG’un çekirdek mimarisi sıfırdan ve optimize bir şekilde inşa edildi. Rakiplerin istediği donanımın yarısıyla, 5 kat daha hızlı sorgu sonuçları elde edebilirsiniz. Mevcut donanımınızı emekli etmek yerine, ACKLOG ile canlandırın.
        </li>
      </ul>

      <h3>3. Gerçek Zamanlılık: Diskten Değil, Hafızadan Güç Alın</h3>
      <p>
        Geleneksel sistemlerin çoğu veri ararken diske gider. Bu da terabaytlarca veri biriktiğinde aramaların "saatler" sürmesine neden olur.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>ACKLOG Farkı:</strong> In-memory veritabanı teknolojimizle saniyeler içinde geriye dönük analizler yapabilir, siber tehditleri yayılmadan anında (real-time) yakalayabilirsiniz. Bizim için "0ms gecikme" bir pazarlama sloganı değil, teknik bir standarttır.
        </li>
      </ul>

      <h3>4. Türkiye Mevzuatına "Yamalı" Değil, "Tam" Uyum</h3>
      <p>
        Global yazılımlar, 5651 sayılı kanun veya KVKK gibi yerel ihtiyaçları genelde dışarıdan eklenen yamalar veya üçüncü parti araçlarla çözmeye çalışır.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>ACKLOG Farkı:</strong> ACKLOG, Türkiye'deki yasal mevzuatların merkezinde geliştirildi. Zaman damgası, yasal imzalama ve KVKK raporlama modülleri sistemin ayrılmaz bir parçasıdır; sonradan eklenmiş bir "yama" değildir.
        </li>
      </ul>

      <h3>5. Döviz Bazlı Maliyet Baskısından Kurtuluş</h3>
      <p>
        Artan döviz kurları ve global firmaların katı lisanslama politikaları (her yeni cihaz için ek lisans ücreti vb.), bütçe yönetimini imkansız kılıyor.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>ACKLOG Farkı:</strong> Yerli olmanın avantajıyla şeffaf, öngörülebilir ve TL bazlı maliyet modelleri sunuyoruz. Üstelik global rakiplerin "ekstra" dediği birçok özelliği paket içinde sağlıyoruz.
        </li>
      </ul>

      <h3>"Migration" (Geçiş) Süreci Zor mu?</h3>
      <p>
        En büyük korkunuzun veri kaybı veya geçiş süreci olduğunu biliyoruz. ACKLOG, eski SIEM verilerinizin arşivlenmesi ve korelasyon kurallarınızın yeni sisteme adaptasyonu için özel araçlar sunar. Geçiş sürecini "bir gecede" değil, "sorunsuz" bir şekilde yönetiyoruz.
      </p>

      <div class="mt-8 p-6 bg-blue-950/30 border border-blue-500/20 rounded-xl">
          <h4 class="text-white font-bold mb-2">Bir Sonraki Bölüm</h4>
          <p class="text-blue-300">Bölüm 3: Yerli SIEM Karşılaştırması - ACKLOG vs. Diğer Yerli Çözümler.</p>
      </div>

      <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-xl text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Hemen Başlayın</h3>
          <p class="text-gray-300 mb-6">
              Karmaşık arayüzlerden ve yüksek maliyetlerden yoruldunuz mu? Gelin, ACKLOG'u mevcut sisteminizle yan yana (Side-by-Side) test edelim ve farkı kendi gözlerinizle görün.
          </p>
      </div>
    `
  },
  "yerli-siem-karsilastirmasi-ve-acklog-farki": {
    title: "Bölüm 3: Yerli SIEM Karşılaştırması ve ACKLOG Farkı",
    description: "Neden ACKLOG? Yerli Çözümler Arasında Neden 'Yeni Nesil' Olarak Anılıyoruz? Yerli rakiplerimizle aramızdaki keskin farklar ve karşılaştırma tablosu.",
    content: `
      <h2>Neden ACKLOG? Yerli Çözümler Arasında Neden "Yeni Nesil" Olarak Anılıyoruz?</h2>
      <p>
        Türkiye siber güvenlik pazarı, yerli yazılımlar açısından oldukça zengin bir ekosisteme sahip. Ancak her "yerli" yazılım, aynı teknolojik derinliği sunmuyor. Birçok kurum, yerli bir SIEM seçerken sadece fiyat odaklı baksa da, operasyonun ikinci ayında teknik kısıtlamalarla karşılaşıyor.
      </p>
      <p>
        ACKLOG olarak biz, kendimizi "geleneksel yerli SIEM" kategorisinde değil, "Yeni Nesil Birleşik Güvenlik Operasyonları (USO)" kategorisinde konumlandırıyoruz. İşte rakiplerimizle aramızdaki keskin farklar:
      </p>

      <h3>1. No-Code Devrimi: Parser Yazmak Geçmişte Kaldı</h3>
      <p>
        Birçok yerli rakibimizde yeni bir log kaynağı eklemek hala teknik bir destek biletine (ticket) veya karmaşık kodlama süreçlerine tabidir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Farkımız:</strong> ACKLOG'un No-Code Log Parsing mimarisiyle, sürükle-bırak yöntemiyle kendi parser’ınızı saniyeler içinde oluşturabilirsiniz. Dışa bağımlılığı bitiriyor, kontrolü tamamen IT ekibinize veriyoruz.
        </li>
      </ul>

      <h3>2. Gerçek Zamanlılık ve In-Memory Gücü</h3>
      <p>
        Yerli çözümlerin büyük bir kısmı, veriyi önce diske yazar ve aramayı disk üzerinden yapar. Veri boyutu arttıkça bu sistemler hantallaşır.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Farkımız:</strong> ACKLOG, In-memory veritabanı kullanır. Bu sayede milyarlarca satır veri içinde yapılan aramalar "disk okuma" hızına takılmaz. 0ms gecikme ile tehdit tespiti yapmak, rakiplerimize göre en büyük teknik üstünlüğümüzdür.
        </li>
      </ul>

      <h3>3. Ölçeklenebilir Cluster Mimarisi</h3>
      <p>
        Küçük ölçekte iyi çalışan birçok yerli SIEM, veri trafiği arttığında veya cluster (kümeleme) ihtiyacı doğduğunda verimliliğini kaybeder.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Farkımız:</strong> ACKLOG, Petabyte ölçeğindeki verileri işleyebilecek Sınırsız Yatay Ölçeklenebilirlik mimarisine sahiptir. Şirketiniz büyüdükçe yazılımınız size ayak bağı olmaz, sizinle birlikte büyür.
        </li>
      </ul>

      <h3>4. Entegre SOAR ve Otomatik Yanıt</h3>
      <p>
        Sadece log toplamak yetmez, aksiyon almak gerekir. Birçok yerli çözümde "otomatik yanıt" (SOAR) özellikleri ya eksiktir ya da ek ücrete tabidir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Farkımız:</strong> ACKLOG, yapay zeka destekli analiz motoruyla tehditleri sadece tespit etmez; tanımladığınız senaryolara göre otomatik yanıtlar vererek (SOAR entegrasyonu) saldırıyı yayılmadan durdurur.
        </li>
      </ul>

      <h3>5. Şeffaf ve Modül Bağımsız Lisanslama</h3>
      <p>
        Rakiplerimizde sıkça karşılaşılan "KVKK için ayrı modül, 5651 için ayrı ücret, raporlama için ek lisans" modeli, toplam sahip olma maliyetini (TCO) yükseltir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>
          <strong>Farkımız:</strong> ACKLOG’da her şey dahil ve şeffaftır. KVKK uyumluluğu, yasal imzalama ve tüm dashboard özellikleri ürünün çekirdeğinde ücretsiz olarak sunulur.
        </li>
      </ul>

      <h3>Özet Karşılaştırma Tablosu</h3>
      <div class="overflow-x-auto my-6 border rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="bg-muted/50 text-muted-foreground uppercase">
            <tr>
              <th class="px-6 py-3">Özellik</th>
              <th class="px-6 py-3">Geleneksel Yerli SIEM</th>
              <th class="px-6 py-3">ACKLOG SIEM</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Log Ayrıştırma</td>
              <td class="px-6 py-4">Manuel / Kod Gerekli</td>
              <td class="px-6 py-4">No-Code / Sürükle-Bırak</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Sorgu Mimarisi</td>
              <td class="px-6 py-4">Disk Tabanlı (Yavaş)</td>
              <td class="px-6 py-4">In-Memory (Anlık)</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Yasal Uyumluluk</td>
              <td class="px-6 py-4">Ek Modül / Ücretli</td>
              <td class="px-6 py-4">Dahili / Ücretsiz</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Ölçekleme</td>
              <td class="px-6 py-4">Zorlu ve Sınırlı</td>
              <td class="px-6 py-4">Sınırsız Cluster Desteği</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Kurulum Süresi</td>
              <td class="px-6 py-4">Günler / Haftalar</td>
              <td class="px-6 py-4">15 Dakika</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Sonuç: Geleceğin Güvenliğini Bugün Kurun</h3>
      <p>
        SIEM seçimi, kurumunuzun siber güvenlik omurgasını belirler. Sadece yasal zorunlulukları yerine getiren bir "log deposu" mu istiyorsunuz, yoksa siber tehditleri avlayan bir "istihbarat merkezi" mi?
      </p>
      <p>
        ACKLOG ile tanışın, siber güvenlik operasyonlarınızda hızı ve sadeliği yeniden keşfedin.
      </p>
    `
  }
};
