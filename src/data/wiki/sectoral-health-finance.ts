export const sectoralHealthFinanceArticles = {
  "hastane-bilgi-yonetim-sistemi-hbys-loglama": {
    title: "Hastane Bilgi Yönetim Sistemi (HBYS) Loglama ve Siber Güvenlik Rehberi",
    description: "HBYS kayıtlarının güvenliği, kullanıcı erişim takibi ve Sağlık Bakanlığı siber güvenlik kriterleri için tam teknik rehber.",
    content: `
      <h2>Sağlık Bilişimi: HBYS Güvenliği Neden Stratejiktir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>HBYS (Hastane Bilgi Yönetim Sistemi), bir hastanenin beynidir. Hasta kayıtlarından reçetelere, tahlil sonuçlarından finansal verilere kadar her şey burada işlenir. Bu verilerin yetkisiz kişilerce görülmesi veya manipüle edilmesi sadece yasal bir suç değil, doğrudan hasta hayatını tehdit eden bir risk faktörüdür.</p>
      
      <h3>HBYS Loglama Standartları ve Kriterleri</h3>
      <p>Bir HBYS sisteminin siber güvenlik denetimlerinden geçmesi için şu 3 temel loglama katmanına sahip olması şarttır:</p>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Veritabanı Seviyesinde İzleme (DB Audit):</strong> "X hastasının reçetesini kim değiştirdi?" sorusunun yanıtı, veritabanı loglarında SQL bazlı tutulmalıdır.</li>
        <li><strong>Uygulama Erişim Logları:</strong> Hangi personelin hangi modüle (Örn: Ameliyathane, Eczane) ne zaman girdiğinin kaydı.</li>
        <li><strong>Hassas Veri Maskeleme Denetimi:</strong> Loglarda hasta TC kimlik numaraları veya kredi kartı bilgileri açık halde tutulmamalı, maskelenmelidir.</li>
      </ul>

      <h3>Teknik Gereksinimler: Sağlık Bakanlığı Uyumu</h3>
      <p>Sağlık Bakanlığı Bilgi Güvenliği Rehberi, logların merkezi bir SIEM sisteminde toplanmasını ve TÜBİTAK zaman damgasıyla imzalanmasını zorunlu kılar. Bu, olası bir veri sızıntısında hukuki delil niteliği taşır.</p>

      <div class="bg-blue-500/10 p-6 rounded-xl my-8 border border-blue-500/20">
        <h4 class="text-blue-400 font-bold mb-2">ACKLOG SIEM Entegrasyonu:</h4>
        <p>ACKLOG, piyasadaki popüler HBYS yazılımlarıyla (Oracle, MSSQL, PostgreSQL tabanlı) tam entegre çalışır. "Aynı personelin normalden çok fazla hasta kaydına erişmesi" gibi anomalileri yakalar ve <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> uyumlu raporlar sunar. Manuel kontrollerle hasta verisini koruyamazsınız, ACKLOG ile sisteminizi zırhlayın.</p>
      </div>

      <h3>Sıkça Sorulan Sorular (FAQ)</h3>
      <div class="space-y-4">
        <details class="group border-b border-white/10 pb-4">
          <summary class="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-blue-400">
            HBYS logları ne kadar süre saklanmalıdır?
            <span class="text-xl">+</span>
          </summary>
          <div class="mt-4 text-gray-400">Genel kural olarak KVKK ve Sağlık Bakanlığı yönetmelikleri uyarınca kritik sistem logları en az 2 yıl boyunca, zaman damgalı olarak saklanmalıdır. Ancak finansal işlemler içeren loglarda bu süre 10 yıla kadar çıkabilir.</div>
        </details>
        <details class="group border-b border-white/10 pb-4">
          <summary class="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-blue-400">
            SIEM kullanmadan HBYS güvenliği sağlanabilir mi?
            <span class="text-xl">+</span>
          </summary>
          <div class="mt-4 text-gray-400">Cihaz bazlı loglama (local log) siber saldırganlar tarafından silinebilir. SIEM, logu üretildiği anda güvenli bir merkeze taşıdığı için gerçek güvenliğin tek yolu SIEM (ACKLOG) kullanımıdır.</div>
        </details>
      </div>
    `
  },
  "saglik-bakanligi-siber-guvenlik-rehberi-uyumlulugu": {
    title: "Sağlık Bakanlığı Siber Güvenlik Rehberi Uyumluluğu ve SIEM Çözümleri",
    description: "Sağlık kuruluşları için zorunlu olan DDO ve Sağlık Bakanlığı siber güvenlik rehberi uyum süreçleri.",
    content: `
      <h2>Mevzuat Analizi: Sağlıkta Yeni Dönem Güvenlik Standartları</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>T.C. Sağlık Bakanlığı, tüm sağlık kuruluşları (Kamu/Özel Hastaneler, Tıp Merkezleri) için kapsamlı bir siber güvenlik rehberi yayınlayarak teknik standartları belirlemiştir. Bu rehber, özellikle "Veri Mahremiyeti" ve "İş Sürekliliği" üzerine kuruludur.</p>
      
      <h3>Rehberdeki En Kritik 5 Teknik Madde</h3>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li><strong>Merkezi İz İzleme:</strong> Tüm ağ ve sistem loglarının tek bir SIEM sisteminde toplanması.</li>
        <li><strong>Kullanıcı Yetkilendirme Denetimi:</strong> İki faktörlü kimlik doğrulama (2FA) ve log takibi.</li>
        <li><strong>Zararlı Yazılım Tespiti:</strong> Antivirüs loglarının SIEM ile korele edilmesi.</li>
        <li><strong>Olay Müdahale Planı:</strong> Bir saldırı anında yapılacak adımların log bazlı simülasyonu.</li>
        <li><strong>Kritik Altyapı İzolasyonu:</strong> Tıbbi cihaz ağlarının (IoT) normal internetten ayrılması.</li>
      </ol>

      <div class="bg-green-500/10 p-6 rounded-xl my-8 border border-green-500/20">
        <h4 class="text-green-400 font-bold mb-2">ACKLOG Bakanlık Uyumu:</h4>
        <p>ACKLOG, Bakanlık rehberinde belirtilen tüm teknik şartları (Zaman damgası, merkezi loglama, anomali tespiti) hazır şablonlarla karşılar. Denetimlerden başarıyla geçmek ve milli veriyi korumak için ACKLOG yerli SIEM çözümünü tercih edin. Yerli yazılım kullanımı rehberde de teşvik edilmektedir.</p>
      </div>

      <h3>Teknik Checklist</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-400">
        <li>Tüm loglar <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> sayılı yasaya uygun mu mühürleniyor?</li>
        <li>HBYS ve PACS veritabanı hareketleri izleniyor mu?</li>
        <li>Personelin mesai dışı erişimleri alarm üretiyor mu?</li>
      </ul>
    `
  },
  "hasta-verilerinin-guvenligi-icin-siem-kullanimi": {
    title: "Hasta Verilerinin Güvenliği İçin SIEM Kullanımı: Rehber 2026",
    description: "Kişisel sağlık verilerinin (Özel nitelikli veri) KVKK kapsamında SIEM ile korunması.",
    content: `
      <h2>Özel Nitelikli Veri Koruması: Sağlıkta SIEM Gerekliliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>KVKK'ya göre sağlık verileri "Özel Nitelikli Kişisel Veri" kategorisindedir. Bu verilerin sızdırılması durumunda hapis cezası dahil ağır yaptırımlar mevcuttur. Hastanelerin kalesi SIEM sistemleridir.</p>
      
      <h3>SIEM Hastanelere Ne Katar?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Tam Görünürlük:</strong> "Şu an hastanemde kim, hangi veriye dokunuyor?" sorusunun anlık cevabı.</li>
        <li><strong>Sızıntı Önleme (DLP Entegrasyonu):</strong> Büyük veri setlerinin dışarı çıkarılmasını saniyeler içinde durdurma.</li>
        <li><strong>Hukuki Güvence:</strong> Bir inceleme durumunda elinizde mahkemeye sunulacak "Zaman Damgalı" kanıtlar olması.</li>
      </ul>

      <p><strong>ACKLOG UEBA Modülü:</strong> ACKLOG, kullanıcı davranışlarını analiz ederek (UEBA) "Her zaman 10 hasta kaydına bakan personelin bugün 1000 kayda erişmesi" gibi sinsi hareketleri yakalar. Manuel kontroller veri sızıntısını durduramaz, ACKLOG ile proaktif olun.</p>
    `
  },
  "klinik-verilerin-kvkk-kapsamindaki-log-kayitlari": {
    title: "Klinik Verilerin KVKK Kapsamındaki Log Kayıtları ve Denetimi",
    description: "Klinik araştırmalar ve laboratuvar verilerinin yasal loglama zorunlulukları.",
    content: `
      <h2>Veri Bütünlüğü: Klinik Araştırmaların Siber Güvenliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Klinik çalışmalarda elde edilen verilerin doğruluğu ve gizliliği, çalışmanın bilimsel ve yasal geçerliliği için kritiktir. Bir araştırmacının veriler üzerinde yaptığı her bir dokunuş (Edit/Modify) mutlaka kayıt altına alınmalıdır.</p>
      
      <h3>Denetim Metrikleri</h3>
      <p>Klinik sistemlerde tutulan 'Audit Trail' kayıtları, verinin kim tarafından, ne zaman ve hangi terminalden değiştirildiğini ispatlamalıdır.</p>

      <p><strong>ACKLOG Data Integrity:</strong> Klinik veritabanlarınızdaki her bir hücre değişimini ACKLOG ile izleyin. Verinin bütünlüğünü korumak ve <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> denetçilerine şeffaf raporlar sunmak için ACKLOG'un gelişmiş arşivleme ve imzalama teknolojisini kullanın.</p>
    `
  },
  "laboratuvar-sistemleri-lis-ag-guvenligi": {
    title: "Laboratuvar Sistemleri (LIS) Ağ Güvenliği ve Analizör Loglama",
    description: "LIS ve tıbbi analizörler arasındaki veri trafiğinin siber güvenliği ve anomali tespiti.",
    content: `
      <h2>Modern Laboratuvarlar: Dijital Tehditler ve LIS Güvenliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Analizörler ve LIS (Laboratuvar Bilgi Sistemi) arasındaki veri akışı, yanlış teşhise yol açabilecek siber sabotajlara açıktır. Bir saldırganın tahlil sonuçlarını ağ üzerinden değiştirmesi, doğrudan bir sağlık felaketidir.</p>
      
      <h3>İzleme Stratejisi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Cihazların sadece yetkili sunucularla konuştuğundan emin olun (VLAN İzolasyonu).</li>
        <li>HL7 ve DICOM gibi protokollerdeki anormallikleri saptayın.</li>
        <li>Analizörlere takılan yetkisiz USB belleklerin loglarını izleyin.</li>
      </ul>

      <p><strong>ACKLOG OT-Health Pack:</strong> LIS cihazlarınızın ağdaki ayak izlerini ACKLOG ile takip edin. Beklenmedik bir dış bağlantı denemesini anında raporlayın. ACKLOG ile laboratuvar güvenliğinizi otomatiğe bağlayın.</p>
    `
  },
  "e-nabiz-entegrasyonu-guvenlik-kriterleri-ve-loglama": {
    title: "E-Nabız Entegrasyonu Güvenlik Kriterleri ve Log yönetimi",
    description: "Merkezi sağlık sistemleri (E-Nabız) ile veri paylaşırken uyulması gereken siber güvenlik rehberi.",
    content: `
      <h2>Ulusal Servis Entegrasyonu: E-Nabız Güvenliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>E-Nabız sistemine veri aktarımı yapan Web Servislerin güvenliği, ulusal sağlık veri havuzunun korunması için stratejik öneme sahiptir. Bu bağlantılar sıklıkla 'Brute-Force' ve 'Injection' saldırılarının hedefidir.</p>
      
      <h3>İzleme Kontrol Listesi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>API anahtarlarının (Keys) kullanımı ve erişim logları.</li>
        <li>Hatalı veri gönderimlerinin sıklığı ve hata kodları analizi.</li>
        <li>SSL/TLS sertifika güncelliği ve şifreleme kalitesi.</li>
      </ul>

      <p><strong>ACKLOG API Guard:</strong> E-Nabız entegrasyon servislerinizin loglarını ACKLOG ile süzün. "Yetkisiz bir IP'den E-Nabız servisine sızma girişimi yapılıyor" uyarısını ACKLOG ile anında alın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "tibbi-cihazlarin-iot-ag-trafigi-izleme": {
    title: "Tıbbi Cihazların (IoT) Ağ Trafiği İzleme ve IoMT Güvenliği",
    description: "MR, Tomografi ve Termometre gibi tıbbi IoT cihazlarının siber saldırılara karşı korunması.",
    content: `
      <h2>IoMT (Tıbbi Nesnelerin İnterneti): Yeni Tehdit Yüzeyi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Tıbbi cihazlar genellikle eski işletim sistemleriyle çalışır ve güvenlik güncellemesi alamazlar. Bir saldırganın MR cihazını şifrelemesi (Ransomware), hastaneyi kilitler.</p>
      
      <h3>Korunma Yöntemleri</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Traffic Baseline:</strong> Bir MR cihazı normalde günde kaç GB veri gönderiyor? SIEM ile bunu öğrenin.</li>
        <li><strong>Anomaly Detection:</strong> Cihazın normal dışı bir dış IP ile konuşmasını engelleyin.</li>
        <li><strong>Inventory Watch:</strong> Ağa yeni takılan 'bilinmeyen' tıbbi cihazları anında tespit edin.</li>
      </ol>

      <p><strong>ACKLOG IoT Tracker:</strong> ACKLOG, tıbbi IoT cihazlarınızın "Normal" davranışlarını öğrenir ve sapan her hareketi raporlar. Manuel takip bitti, ACKLOG ile IoMT güvenliğini sağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "ozel-hastaneler-icin-en-iyi-siem-cozumu-hangisi": {
    title: "Özel Hastaneler İçin En İyi SIEM Çözümü Hangisi? Kapsamlı Karşılaştırma",
    description: "Sağlık sektörü regülasyonlarına tam uyumlu, maliyet etkin SIEM seçim rehberi.",
    content: `
      <h2>SIEM Seçimi: Sağlık Sektöründe Karar Verme Kriterleri</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>Özel hastaneler kısıtlı bütçe ile maksimum regülasyon uyumu yakalamak zorundadır. Seçeceğiniz çözümün sağlık protokollerini (HL7, PACS) desteklemesi ve Bakanlık raporlarını hazır sunması gerekir.</p>
      
      <h3>Seçim Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Düşük Log Hacmi Maliyeti:</strong> Hastanelerde log sayısı fazladır, maliyet-etkin bir lisanslama olmalı.</li>
        <li><strong>Yerli Mevzuat Desteği:</strong> <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> ve KVKK şablonları hazır bulunmalı.</li>
        <li><strong>Yerli Teknik Destek:</strong> Kritik bir sızıntıda 7/24 Türkçe destek alınabilmeli.</li>
      </ul>

      <p><strong>Neden ACKLOG?</strong> ACKLOG, Türkiye'deki birçok özel hastanede kullanılan, yerli mevzuatı en iyi bilen SIEM'dir. Diğer karmaşık yabancı çözümlere göre %60 daha uygun maliyetle en üst düzey korumayı sunar. ACKLOG ile hem paranızı hem de verinizi koruyun.</p>
    `
  },
  "saglikta-veri-sizintisi-onleme-dlp-siem-entegrasyonu": {
    title: "Sağlıkta Veri Sızıntısı Önleme (DLP) ve SIEM Korelasyonu",
    description: "Hasta verilerini çalmaya yönelik sinsi girişimleri DLP ve SIEM ile nasıl durdurursunuz?",
    content: `
      <h2>Veri Hırsızlığı: Sağlık Datası Neden Hedefte?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Sağlık verileri karaborsada finansal verilerden daha değerlidir. DLP sistemleri veriyi yakalar ama SIEM (ACKLOG) bu yakalamayı "Kim, neden yapı?" sorularıyla anlamlandırır.</p>
      
      <h3>Korelasyon Örneği</h3>
      <p>DLP der ki: "Personel USB'ye dosya kopyaladı." SIEM (ACKLOG) ekler: "Aynı personel 10 dakika önce yetkisiz bir klasöre erişmişti." Bu, kesin bir sızıntı kanıtıdır.</p>

      <p><strong>ACKLOG DLP Engine:</strong> ACKLOG, DLP çözümlerinizle tam entegre çalışarak sağlık verilerini siber zırh altına alır. Manuel kontroller sizi korumaz, ACKLOG ile kaza ve hırsızlığa karşı hazır olun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "pacs-sistemleri-erisim-loglari-ve-goruntu-guvenligi": {
    title: "PACS Sistemleri Erişim Logları ve Tıbbi Görüntü (DICOM) Güvenliği",
    description: "Radyolojik görüntülerin gizliliği ve PACS sunucularının güvenli log yönetimi.",
    content: `
      <h2>Radyoloji Güvenliği: PACS Loglarının İzlenmesi Neden Önemli?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>PACS (Picture Archiving and Communication System), MR ve Röntgen gibi gigabaytlarca boyutundaki görüntüleri saklar. Bu görüntülere yetkisiz erişim, <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> m.6 kapsamında 'özel nitelikli veri' ihlalidir.</p>
      
      <h3>Loglanması Gereken Hareketler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Görüntünün hangi kullanıcı tarafından 'açıldığı' (View).</li>
        <li>Görüntünün dışarıya export edilme logları.</li>
        <li>Görüntü üzerinde yapılan not/etiket değişiklikleri.</li>
      </ul>

      <p><strong>ACKLOG PACS Monitor:</strong> Tüm PACS sunucularınızın erişim loglarını ACKLOG ile mühürlü kasanın içine alın. Olağandışı bir "Toplu Görüntü İndirme" olayını ACKLOG anomali tespiti ile yakalayın. ACKLOG ile tıbbi görsellerinizi profesyonelce koruyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "bddk-log-yonetimi-tebligi-2026-analizi": {
    title: "BDDK Log Yönetimi Tebliği 2026: Finans Sektörü İçin Teknik Rehber",
    description: "Bankacılık ve ödeme kuruluşları için 2026 yılı loglama ve siber güvenlik kriterleri analizi.",
    content: `
      <h2>Finansal Otorite Standartları: 2026 BDDK Tebliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>BDDK, finans kuruluşları için log yönetim standartlarını güncelleyerek "Gerçek Zamanlı İzleme" ve "Log Bütünlüğü" şartlarını sıkılaştırmıştır. Bu tebliğ, finansal sistemlerin siber dayanıklılığını artırmayı hedefler.</p>
      
      <h3>Tebliğdeki 3 Devrimsel Madde</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Yüksek Frekanslı İzleme:</strong> Loglar arası gecikmenin saniyelik bazda minimize edilmesi.</li>
        <li><strong>Zaman Damgası Zorunluluğu:</strong> Tüm yasal logların değiştirilemezlik mühürüyle saklanması.</li>
        <li><strong>Admin Aktivite Raporları:</strong> Sistem yöneticilerinin (Root/Admin) attığı her komutun izlenmesi.</li>
      </ul>

      <div class="bg-blue-500/10 p-6 rounded-xl my-8 border border-blue-500/20">
        <h4 class="text-blue-400 font-bold mb-2">ACKLOG Finans Paketi:</h4>
        <p>ACKLOG, BDDK tebliğlerinde belirtilen tüm teknik ve idari şartları karşılayan yerli bir SIEM'dir. Bankacılık düzeyindeki güvenlik standartlarını kurumunuza getirir ve her denetimden başarıyla çıkmanızı sağlar. Manuel uyum süreçleriyle vakit kaybetmeyin, ACKLOG ile finansal güvenliğinizi tescilleyin.</p>
      </div>

      <h3>Sıkça Sorulan Sorular (FAQ)</h3>
      <div class="space-y-4">
        <details class="group border-b border-white/10 pb-4">
          <summary class="font-bold cursor-pointer list-none flex justify-between items-center group-open:text-blue-400">
            Hangi kuruluşlar BDDK tebliğine tabidir?
            <span class="text-xl">+</span>
          </summary>
          <div class="mt-4 text-gray-400">Bankalar, Elektronik Para Kuruluşları (Fintech), Faktoring ve Finansman Şirketleri bu tebliğ kapsamındaki standartlara uymakla yükümlüdür.</div>
        </details>
      </div>
    `
  },
  "bankacilikta-siber-olay-mudahale-surecleri-ve-log": {
    title: "Bankacılıkta Siber Olay Müdahale Süreçleri ve Adli Log Analizi",
    description: "Finansal bir saldırı anında (Fraud/Hacking) loglar üzerinden nasıl aksiyon alınır?",
    content: `
      <h2>Kriz Anı: Bankalarda Siber Müdahale Disiplini</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Finansal sistemler siber saldırganların ana hedefidir. Bir saldırı başladığında banka BT ekiplerinin dakikalar içinde saldırganı durdurması gerekir. Bu hızın tek kaynağı **doğru yapılandırılmış loglardır**.</p>
      
      <h3>Olay Müdahale Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Hızlı Tespit:</strong> SIEM üzerindeki alarmlarla sızıntı noktasını (Entry point) bulma.</li>
        <li><strong>Hesap Dondurma:</strong> Şüpheli hareket yapan kullanıcıyı anında askıya alma.</li>
        <li><strong>İzleme ve Analiz:</strong> Saldırganın iç ağdaki yanal hareketlerini (Lateral movement) loglardan takip etme.</li>
      </ol>

      <p><strong>ACKLOG Incident Response:</strong> ACKLOG, finans sektörü için özelleşmiş müdahale araçları sunar. Bir ihlal tespit edildiğinde yasal delilleri otomatik hazırlar ve mahkemeye sunulacak hale getirir. Hack-hızında müdahale için ACKLOG yanınızda.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "pci-dss-uyumlu-log-saklama-yontemleri": {
    title: "PCI-DSS Uyumlu Log Saklama Yöntemleri ve Ödeme Güvenliği",
    description: "Kredi kartı verisi işleyen kurumlar için global güvenlik standardı loglama teknikleri.",
    content: `
      <h2>PCI-DSS Standartları: Kredi Kartı Loglama Kuralları</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Kredi kartı verisi saklayan her kurum PCI-DSS standardının 10. maddesine uymak zorundadır. Bu madde, tüm ağ bileşenlerine yapılan erişimlerin izlenmesini ve loglanmasını emreder.</p>
      
      <h3>PCI-DSS Log Gereksinimleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Her türlü yönetimsel işlemin (Sistem değişikliği) kaydı.</li>
        <li>Kritik sistemlerdeki her bir login/logout işleminin takibi.</li>
        <li>Loglara erişimin kısıtlanması (Logları log yöneticisi dahi silememeli).</li>
      </ul>

      <p><strong>ACKLOG PCI Shield:</strong> ACKLOG, yerleşik PCI-DSS raporlama modülüyle sizi denetimlere hazırlar. Kart verisine dokunan her eli ACKLOG ile kayıt altına alın. Manuel takipler risklidir, ACKLOG ile global güvenliğe geçin.</p>
    `
  },
  "kredi-karti-verisi-islem-loglama-zorunlulugu": {
    title: "Kredi Kartı Verisi İşlem Loglama Zorunluluğu: Ne Tutulmalı?",
    description: "Ödeme altyapılarında kredi kartı verisinin maskelenmesi ve yasal loglama esasları.",
    content: `
      <h2>Dijital Ödeme: Loglarda Veri Güvenliği ve Maskeleme</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Log tutarken yapılan en büyük hata, müşterinin tam kart numarasını log dosyasına yazmaktır. Bu bir veri sızıntısı davetiyesidir. Gerçek loglama, veriyi maskelemeli fakat eylemi gerçekleştireni kaydetmelidir.</p>
      
      <h3>Güvenli Loglama Formülü</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-400">
        <li>Log dosyasında kartın sadece ilk 6 ve son 4 hanesini görün.</li>
        <li>Kart numarası içeren logları güçlü şifreleme ile diskte saklayın.</li>
        <li>CVV gibi hassas kodları asla hiçbir yere loglamayın.</li>
      </ul>

      <p><strong>ACKLOG Data Masking:</strong> ACKLOG, gelen log akışı içindeki kart numarası gibi verileri otomatik tanır ve maskeler. Bu sayede log ekibiniz dahi müşteri verisini göremez. "Hukuki uyum ve teknik koruma" için ACKLOG’u seçin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "swift-sistemleri-guvenlik-izleme-ve-cscf": {
    title: "Swift Sistemleri Güvenlik İzleme ve SWIFT CSCF Uyum Standartları",
    description: "Uluslararası para transferi altyapısının (SWIFT) siber saldırılara karşı 7/24 izlenmesi.",
    content: `
      <h2>Finansal Egemenlik: SWIFT Güvenliği Stratejiktir</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>SWIFT ağına yapılan saldırılar ülke ekonomilerini sarsabilir. SWIFT, tüm finans kurumlarına CSCF (Customer Security Controls Framework) adı altında zorunlu kontroller getirmiştir.</p>
      
      <h3>İzleme Kritikleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>SWIFT sunucularına yapılan her RDP/SSH erişimi.</li>
        <li>Veritabanındaki işlem tablolarındaki anormal silme/güncelleme işlemleri.</li>
        <li>Uzak lokasyonlardan yapılan giriş denemeleri.</li>
      </ul>

      <p><strong>ACKLOG Swift Sentinel:</strong> SWIFT terminallerinizi ACKLOG ile 7/24 ablukaya alın. Olağandışı bir para transferi trafiğinde ACKLOG size öncelikli (High-Priority) alarmsın. Ulusal finans verilerinizi ACKLOG ile koruyun.</p>
    `
  },
  "finans-sektoru-icin-gerçek-zamanli-dolandiricilik-tespiti": {
    title: "Finans Sektörü İçin Gerçek Zamanlı Dolandırıcılık (Fraud) Tespiti",
    description: "SIEM ve UEBA analitiği ile finansal sahteciliği saniyeler içinde yakalama rehberi.",
    content: `
      <h2>Sahtecilikle Mücadele: Dolandırıcılığı Loglardan Yakalamak</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Modern dolandırıcılık tespiti bir 'İz Sürme' işidir. Kullanıcı hareketlerinin (Login, İşlem, Çıkış) birbiriyle olan zamansal tutarlılığı siber güvenlik analitiği ile ölçülür.</p>
      
      <h3>Anomali Örnekleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-400">
        <li><strong>Impossible Travel:</strong> 5 dakikada hem İstanbul hm New York'tan login olan hesap.</li>
        <li><strong>Brute-Force Success:</strong> 100 hatalı denemeden sonra gelen 'başarılı' giriş.</li>
        <li><strong>Big Amount Outflow:</strong> Her zamanki tutarların 100 katı büyüklükte transfer.</li>
      </ul>

      <p><strong>ACKLOG Fraud Detector:</strong> ACKLOG, tüm finansal logları korele ederek saniyeler içinde "Bu bir dolandırıcılık girişimi olabilir!" uyarısı verir. Hırsızı kapıdan girmeden elindeki loglarla yakalayın. Manuel denetimlerle parayı geri getiremezsiniz, ACKLOG ile koruyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "mobil-bankacilik-uygulamasi-log-analizi-ve-guvenlik": {
    title: "Mobil Bankacılık Uygulaması Log Analizi ve API Güvenliği",
    description: "Mobil şube üzerinden yapılan işlemlerin ve API çağrılarının siber izleme teknikleri.",
    content: `
      <h2>Yeni Nesil Finans: Mobil Uygulama Güvenliği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Kullanıcıların en çok kullandığı kanal olan mobil bankacılık, 'API' (Arayüz) üzerinden haberleşir. Bu API'lerin siber güvenliği, uygulamanın kendisinden daha kritiktir.</p>
      
      <h3>İzlencek Mobil Hareketler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>IP adresi değişikliği (Uygulama açıkken IP değişmesi).</li>
        <li>Cihazın kimlik bilgileri (DeviceId) ile kullanıcı hesabı tutarlılığı.</li>
        <li>Root edilmiş veya Jailbreak yapılmış cihazlardan gelen talepler.</li>
      </ul>

      <p><strong>ACKLOG Mobile Monitor:</strong> Mobil uygulamanızın arka plan loglarını ACKLOG üzerinde analiz ederek 'Botnet' veya 'Emulator' üzerinden gelen saldırıları durdurun. Geleceğin bankacılığını bugünden ACKLOG ile koruyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "aracı-kurumlar-icin-spk-log-yonetimi-esaslari": {
    title: "Aracı Kurumlar İçin SPK Log Yönetimi Esasları ve Uyumluluk Raporu",
    description: "Sermaye Piyasası Kurulu (SPK) denetimleri için gerekli loglama ve siber güvenlik teknikleri.",
    content: `
      <h2>Sermaye Piyasaları: SPK Denetimlerine Tam Hazırlık</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Borsa aracı kurumları hem finansal hem de dijital operasyonları için SPK tarafından sıkı denetlenir. Veri güvenliği ve loglamada hata yapma lüksünüzün olmadığı bir sektördür.</p>
      
      <h3>SPK Teknik Kriterleri</h3>
      <p>İşlem emirlerinin mühürlü kaydı, kullanıcıların sisteme erişim zamanlarının milisaniye hassasiyetinde tutulması ve bu verilerin en az 10 yıl yasal arşivde tutulması esastır.</p>

      <p><strong>ACKLOG SPK-Ready:</strong> ACKLOG, SPK denetçilerinin istediği "Log Değiştirilemezlik İspatı"nı tek tuşla sunar. Yerli aracı kurumlar için yerli, milli ve güçlü ACKLOG SIEM çözümünü tercih edin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "fintech-girisimleri-icin-bulut-tabanli-siem-kullanımı": {
    title: "Fintech Girişimleri İçin Bulut Tabanlı SIEM Kullanımı: Avantajlar",
    description: "Hızlı büyüyen fintech şirketleri için yatırım maliyeti (CAPEX) gerektirmeyen Cloud SIEM çözümleri.",
    content: `
      <h2>Girişimci Gücü: Fintechlerde Cloud SIEM Devrimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Yeni kurulan fintech'ler için sunucu bakımı ve donanım yatırımı yerine işe odaklanmak kritiktir. Cloud SIEM, saniyeler içinde güvenliğinizi dünya standartlarına taşır.</p>
      
      <h3>Fintechler Neden ACKLOG Cloud Seçmeli?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-400">
        <li>Hızlı kurulum (+1 günde yayına geçiş).</li>
        <li>Lisanslama tarafında "Kadar öde" (Pay-as-you-grow) esnekliği.</li>
        <li>PCI ve <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> uyumluluğunun hazır sunulması.</li>
      </ul>

      <p><strong>ACKLOG Cloud SIEM:</strong> Fintech girişimlerinizi siber risklere karşı ACKLOG bulut gücüyle koruyun. Yerel veri merkezimiz sayesinde KVKK kısıtlamalarına takılmadan global güvenliğe ulaşın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "atm-aglari-siber-guvenlik-izleme-ve-skimming-tespiti": {
    title: "ATM Ağları Siber Güvenlik İzleme ve Fiziksel-Dijital Koruma",
    description: "Saha operasyonları için ATM güvenlik loglarının merkezi yönetimi ve saldırı tespiti.",
    content: `
      <h2>ATM Güvenliği: Skimming ve Jackpotting Saldırılarını Durdurun</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Sokaktaki ATM'ler siber saldırganlar için nakit para demektir. ATM cihazının işletim sistemine yapılacak bir müdahale (Jackpotting) bankanızı büyük zarara uğratabilir.</p>
      
      <h3>İzleme Metrikleri</h3>
      <p>ATM üzerindeki kart okuyucudaki donanımsal hatalar, kasa kapak açılma logları ve ağ trafiğindeki anormal değişimler SIEM üzerinde 7/24 izlenmelidir.</p>

      <p><strong>ACKLOG Field Guard:</strong> Sahadaki binlerce ATM'nizin siber sağlığını ACKLOG ile tek merkezden izleyin. Bir anomali sezildiğinde ATM'yi anında ağdan kopararak (Isolation) nakit hırsızlığını durdurun. Manuel takipler parayı kurtaramaz, ACKLOG ile güvenliğinizi otomatiğe bağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  }
};
