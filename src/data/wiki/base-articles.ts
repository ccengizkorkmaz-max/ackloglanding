export const articles: Record<string, { title: string; description?: string; content: string; author?: { name: string; title: string; initials: string } }> = {
  "siem-nedir": {
    title: "SIEM Nedir? Kapsamlı Rehber (2026)",
    description: "SIEM (Security Information and Event Management) nedir? Çalışma mantığı, bileşenleri, SOC ile ilişkisi ve KVKK uyumluluğu hakkında en kapsamlı Türkçe rehber.",
    author: {
      name: "Volkan Öztürk",
      title: "Baş Güvenlik Mimarı",
      initials: "VÖ"
    },
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">Bu Rehberde Neler Var?</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#siem-nedir" class="hover:text-blue-400 transition-colors">1. SIEM Nedir ve Neden Önemlidir?</a></li>
            <li><a href="#nasil-calisir" class="hover:text-blue-400 transition-colors">2. SIEM Nasıl Çalışır? (3 Temel Adım)</a></li>
            <li><a href="#siem-bilesenleri" class="hover:text-blue-400 transition-colors">3. SIEM Bileşenleri ve Mimarisi</a></li>
            <li><a href="#siem-vs-log" class="hover:text-blue-400 transition-colors">4. SIEM vs Log Yönetimi Farkları</a></li>
            <li><a href="#soc-iliskisi" class="hover:text-blue-400 transition-colors">5. SOC ve SIEM İlişkisi</a></li>
            <li><a href="#kurumsal-fayadalar" class="hover:text-blue-400 transition-colors">6. Kurumlar İçin 5 Kritik Fayda</a></li>
            <li><a href="#kvkk-uyumluluk" class="hover:text-blue-400 transition-colors">7. KVKK, 5651 ve Yasal Zorunluluklar</a></li>
            <li><a href="#acklog-farki" class="hover:text-blue-400 transition-colors">8. ACKLOG: Yeni Nesil SIEM Yaklaşımı</a></li>
        </ul>
      </div>

      <h2 id="siem-nedir">1. SIEM (Security Information and Event Management) Nedir?</h2>
      <p>
        <strong>SIEM (Güvenlik Bilgileri ve Olay Yönetimi)</strong>, kurumların BT altyapısındaki tüm varlıklardan (sunucular, güvenlik duvarları, ağ cihazları, uygulamalar vb.) gelen 
        log (kayıt) verilerini merkezi bir noktada toplayan, analiz eden ve güvenlik tehditlerini gerçek zamanlı olarak tespit eden bir siber güvenlik teknolojisidir.
      </p>
      <p>
        Günümüzde siber saldırıların karmaşıklığı artarken, geleneksel güvenlik önlemleri (Antivirüs, Firewall) tek başına yeterli olamamaktadır. 
        SIEM, bir orkestra şefi gibi tüm bu güvenlik araçlarından gelen sinyalleri birleştirir ve büyük resmi görmenizi sağlar.
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        "Gartner'a göre SIEM, tehdit algılama, uyumluluk ve güvenlik operasyonları yönetimi için kritik bir altyapı bileşenidir."
      </blockquote>

      <h2 id="nasil-calisir">2. SIEM Nasıl Çalışır? (3 Temel Adım)</h2>
      <p>SIEM teknolojisi karmaşık görünse de, temel çalışma prensibi üç ana aşamaya dayanır:</p>

      <div class="grid gap-6 md:grid-cols-3 my-8">
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div class="text-3xl mb-4">📥</div>
            <h4 class="font-bold text-white mt-0">1. Veri Toplama (Collection)</h4>
            <p class="text-sm text-gray-400 mb-0">Agent veya Agentless yöntemlerle tüm cihazlardan loglar ham formatta toplanır.</p>
        </div>
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div class="text-3xl mb-4">🧠</div>
            <h4 class="font-bold text-white mt-0">2. Normalizasyon & Korelasyon</h4>
            <p class="text-sm text-gray-400 mb-0">Farklı formatlardaki veriler standart hale getirilir ve yapay zeka ile ilişkilendirilir.</p>
        </div>
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <div class="text-3xl mb-4">🚨</div>
            <h4 class="font-bold text-white mt-0">3. Alarm & Müdahale</h4>
            <p class="text-sm text-gray-400 mb-0">Şüpheli bir aktivite (örn: Brute Force) tespit edildiğinde SOC ekibine alarm üretilir.</p>
        </div>
      </div>

      <h2 id="siem-bilesenleri">3. Temel SIEM Bileşenleri</h2>
      <ul class="list-disc pl-6 space-y-4 mb-8 text-muted-foreground">
        <li><strong>Log Collector:</strong> Kaynaklardan veriyi toplayan birim.</li>
        <li><strong>Parser:</strong> Ham log verisini (Raw Data) okunabilir alanlara (Username, IP, URL vb.) ayıran yazılım.</li>
        <li><strong>Correlation Engine (Korelasyon Motoru):</strong> "Eğer X ve Y olayları 5 dakika içinde olursa Z alarmını üret" mantığını işleyen SIEM'in beyni.</li>
        <li><strong>In-Memory Database:</strong> Modern SIEM'lerin (örneğin ACKLOG) hız için kullandığı, veriyi RAM üzerinde işleyen veritabanı yapısı.</li>
      </ul>

      <h2 id="siem-vs-log">4. SIEM ve Log Yönetimi Arasındaki Farklar</h2>
      <p>
        Sıkça karıştırılan bu iki kavram arasındaki farkı anlamak, doğru yatırımı yapmak için kritiktir. 
        Detaylı karşılaştırma için <a href="/wiki/siem-vs-log-yonetimi" class="text-blue-400 hover:underline font-bold">SIEM vs Log Yönetimi</a> makalemizi inceleyebilirsiniz.
      </p>
      <div class="overflow-x-auto my-6 border rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="bg-muted/50 text-muted-foreground uppercase">
            <tr>
              <th class="px-6 py-3">Özellik</th>
              <th class="px-6 py-3">Log Yönetimi</th>
              <th class="px-6 py-3">SIEM</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Temel Amaç</td>
              <td class="px-6 py-4">Depolama & Arama</td>
              <td class="px-6 py-4">Tehdit Yakalama & Analiz</td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 font-medium">Zamanlama</td>
              <td class="px-6 py-4">Geçmişe Dönük (Forensic)</td>
              <td class="px-6 py-4">Gerçek Zamanlı (Real-time)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Zeka</td>
              <td class="px-6 py-4">Yok</td>
              <td class="px-6 py-4">Korelasyon & UEBA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="soc-iliskisi">5. SOC (Security Operations Center) ve SIEM İlişkisi</h2>
      <p>
        SIEM bir araç, SOC (Güvenlik Operasyon Merkezi) ise bu aracı kullanan ekiptir. Bir F1 aracını (SIEM) sürecek pilotlar (SOC Analistleri) olmadan yarış kazanılamaz.
        SOC ekipleri, SIEM'den gelen alarmları analiz eder, yanlış alarmları (False Positive) eler ve gerçek tehditlere müdahale eder.
        <br/><br/>
        Daha fazlası için: <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC Nedir ve Nasıl Kurulur?</a>
      </p>

      <h2 id="kurumsal-fayadalar">6. Kurumlar İçin 5 Kritik Fayda</h2>
      <ol class="list-decimal pl-6 space-y-4 mb-8 text-muted-foreground">
        <li><strong>Görünürlük Artışı:</strong> Ağınızdaki kör noktaları ortadan kaldırır. Kim, nereye, ne zaman bağlandı? sorularına anında cevap verir.</li>
        <li><strong>Erken Tehdit Tespiti:</strong> Fidye yazılımları (Ransomware) verilerinizi şifrelemeye başlamadan önce, ilk sızma girişiminde tespit edilebilir.</li>
        <li><strong>Operasyonel Verimlilik:</strong> Güvenlik ekiplerinin manuel log inceleme yükünü ortadan kaldırır.</li>
        <li><strong>Adli Bilişim (Forensics):</strong> Bir olay yaşandığında, saldırının kök nedenini (Root Cause Analysis) bulmak için değiştirilemez delil sunar.</li>
        <li><strong>Yasal Uyumluluk:</strong> Düzenleyici kurumların istediği raporları otomatik üretir.</li>
      </ol>

      <h2 id="kvkk-uyumluluk">7. KVKK, 5651 ve Yasal Zorunluluklar</h2>
      <p>
        Türkiye'de faaliyet gösteren kurumlar için log toplama sadece güvenlik değil, hukuki bir zorunluluktur.
        <strong>KVKK (Kişisel Verilerin Korunması Kanunu)</strong>, veri sorumlularının "teknik tedbirler" almasını şart koşar. 
        Log kayıtlarının değiştirilemezliği (Hashing) ve zaman damgası (Time Stamping) ile saklanması kritik önem taşır.
        <br/><br/>
        Detaylı bilgi: <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK ve Log Uyumluluğu Rehberi</a>
      </p>

      <h2 id="acklog-farki">8. Neden ACKLOG? Yeni Nesil SIEM Yaklaşımı</h2>
      <p>
        Geleneksel SIEM'lerin hantallığı, yüksek lisans maliyetleri ve karmaşık yönetim süreçleri artık sürdürülebilir değil.
        <strong>ACKLOG</strong>, bu sorunları çözmek için geliştirilmiş yerli ve milli bir SIEM çözümüdür.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mt-8 mb-12">
        <div class="p-5 border border-green-500/20 bg-green-900/10 rounded-xl">
          <h4 class="text-green-400 font-bold mt-0">🚀 Hız</h4>
          <p class="text-sm mb-0">In-memory teknolojisi ile saniyede binlerce logu işler, sorgulara milisaniyeler içinde yanıt verir.</p>
        </div>
        <div class="p-5 border border-blue-500/20 bg-blue-900/10 rounded-xl">
          <h4 class="text-blue-400 font-bold mt-0">💰 Maliyet</h4>
          <p class="text-sm mb-0">EPS (Saniye Başına Olay) limiti olmayan şeffaf lisanslama. Log hacminiz artsa da faturanız sürpriz yapmaz.</p>
        </div>
        <div class="p-5 border border-purple-500/20 bg-purple-900/10 rounded-xl">
          <h4 class="text-purple-400 font-bold mt-0">🇹🇷 Yerli Mevzuat</h4>
          <p class="text-sm mb-0">TÜBİTAK Zaman Damgası entegrasyonu ve KVKK uyumluluk raporları kutudan çıktığı gibi hazırdır.</p>
        </div>
        <div class="p-5 border border-orange-500/20 bg-orange-900/10 rounded-xl">
          <h4 class="text-orange-400 font-bold mt-0">⚡ Kolay Kurulum</h4>
          <p class="text-sm mb-0">Aylar süren projeler yerine, dakikalar içinde kurulan ve hemen sonuç veren yapı.</p>
        </div>
      </div>

      <p>
        Eğer hala Excel tablolarında log inceliyor veya hantal SIEM ürünlerine servet ödüyorsanız, değişim zamanı gelmiştir.
        Global devlere (<a href="/wiki/qradar-alternatifi" class="text-blue-400 hover:underline">QRadar Alternatifi</a>) kafa tutan ACKLOG performansını kendi gözlerinizle görün.
      </p>
    `
  },
  "5651-log-yonetimi-rehberi": {
    title: "5651 Sayılı Kanun Log Tutma Rehberi (2026)",
    description: "5651 sayılı kanun nedir? Belediyeler, oteller ve fabrikalar için log tutma zorunluluğu. Cezai yaptırımlar ve ACKLOG ile otomatik çözüm rehberi.",
    author: {
      name: "Mustafa Yılmaz",
      title: "Yasal Uyum Danışmanı",
      initials: "MY"
    },
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#5651-nedir" class="hover:text-blue-400 transition-colors">1. 5651 Nedir?</a></li>
            <li><a href="#kimler-zorunlu" class="hover:text-blue-400 transition-colors">2. Kimler Log Tutmak Zorunda?</a></li>
            <li><a href="#cezalar" class="hover:text-blue-400 transition-colors">3. Cezai Yaptırımlar Neler?</a></li>
            <li><a href="#acklog-otomasyon" class="hover:text-blue-400 transition-colors">4. Acklog Süreci Nasıl Otomatiğe Bağlıyor?</a></li>
        </ul>
      </div>

      <p class="mb-6 bg-blue-50/5 p-4 rounded-lg border border-blue-500/10 text-sm">
        ℹ️ <strong>Bilgi:</strong> Bu makale, yasal uyumluluk odaklıdır. Teknik detaylar için <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline">Kapsamlı SIEM Rehberi</a>'ne göz atabilirsiniz.
      </p>

      <h2 id="5651-nedir">1. 5651 Sayılı Kanun Nedir?</h2>
      <p>
        Kamuoyunda "İnternet Yasası" olarak da bilinen <strong>5651 Sayılı Kanun</strong>, internet ortamında yapılan yayınların düzenlenmesi ve bu yayınlar yoluyla işlenen suçlarla mücadele edilmesi hakkındaki kanundur.
        2007 yılında yürürlüğe giren bu kanunun temel amacı, internet üzerinden işlenen siber suçların baş sorumlusunu tespit edebilmektir.
      </p>
      <p>
         Özetle devlet şunu söyler: <strong>"Senin internet hattın üzerinden bir suç işlenirse (dolandırıcılık, terör propagandası vb.), o an o IP adresini kimin kullandığını ispatlamak zorundasın."</strong>
         İspatlayamazsanız, suçu siz işlemiş gibi yargılanabilirsiniz.
      </p>

      <h2 id="kimler-zorunlu">2. Kimler Log Tutmak Zorunda?</h2>
      <p>Kanun, "Toplu Kullanım Sağlayıcılar" için log tutma zorunluluğu getirir. Bu kapsama giren başlıca kurumlar şunlardır:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Oteller ve Pansiyonlar:</strong> Müşterilerine internet hizmeti sunan tüm konaklama tesisleri.</li>
        <li><strong>Kafe ve Restoranlar:</strong> Müşterilerine Wi-Fi hizmeti veren işletmeler.</li>
        <li><strong>Şirketler ve Ofisler:</strong> Çalışanlarına veya misafirlerine internet erişimi sağlayan tüm ticari işletmeler.</li>
        <li><strong>Yurtlar ve Eğitim Kurumları:</strong> Öğrencilerine internet sağlayan kurumlar.</li>
        <li><strong>Belediyeler:</strong> Halka açık alanlarda (park, meydan vb.) ücretsiz internet hizmeti veren belediyeler.</li>
      </ul>

      <h2 id="cezalar">3. Cezai Yaptırımlar Neler?</h2>
      <p>
        5651 sayılı kanuna uygun log tutmamanın ciddi yaptırımları vardır. Bir siber suç işlendiğinde ve siz IP-Kullanıcı eşleşmesini (log kayıtlarını) ibraz edemediğinizde:
      </p>
      <div class="grid gap-6 md:grid-cols-2 my-8">
        <div class="p-6 bg-red-900/10 rounded-lg border border-red-500/20">
            <h4 class="font-bold text-red-400 mt-0">💰 İdari Para Cezası</h4>
            <p class="text-sm text-gray-400">Log tutmama veya eksik tutma durumunda 15.000 TL'den 100.000 TL'ye varan idari para cezaları uygulanabilir.</p>
        </div>
        <div class="p-6 bg-red-900/10 rounded-lg border border-red-500/20">
            <h4 class="font-bold text-red-400 mt-0">⚖️ Hukuki Sorumluluk</h4>
            <p class="text-sm text-gray-400">Suçu işleyen gerçek kişi bulunamazsa, hat sahibi olarak suça iştirak etmiş veya yardım/yataklık yapmış muamelesi görebilirsiniz.</p>
        </div>
      </div>

      <h2 id="acklog-otomasyon">4. Acklog Süreci Nasıl Otomatiğe Bağlıyor?</h2>
      <p>
        ACKLOG, 5651 uyumluluğunu sizin için tamamen otomatik hale getirir. Teknik bilgiye ihtiyaç duymadan yasal güvende kalmanızı sağlar:
      </p>
      
      <div class="space-y-4 my-8">
          <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">⏰</span>
            <div>
                <strong class="text-white block mb-1">Otomatik Zaman Damgası (Time Stamping)</strong>
                <p class="text-sm text-gray-400 m-0">Log dosyalarınızı TÜBİTAK Zaman Damgası ile otomatik olarak imzalar. Bu imza, logların mahkemede delil olarak kabul edilmesini sağlar.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">🔍</span>
            <div>
                <strong class="text-white block mb-1">Kolay Arama (User Interface)</strong>
                <p class="text-sm text-gray-400 m-0">Gelişmiş arayüzü ile "Bu tarihte bu IP'yi kim kullanıyordu?" sorusuna saniyeler içinde cevap verin.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">🛡️</span>
            <div>
                <strong class="text-white block mb-1">Dosya Bütünlük Kontrolü</strong>
                <p class="text-sm text-gray-400 m-0">Saklanan log dosyalarının bozulmadığını veya değiştirilmediğini sürekli denetler.</p>
            </div>
          </div>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "soc-kurulum-rehberi-maliyetler": {
    title: "SOC (Güvenlik Operasyon Merkezi) Kurulum Rehberi: Maliyetler ve Süreçler",
    description: "Kendi SOC merkezinizi nasıl kurarsınız? Takım yapısı, gerekli teknolojiler (SIEM, SOAR, EDR), maliyet analizi ve in-house vs outsourced karşılaştırması.",
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#soc-nedir" class="hover:text-blue-400 transition-colors">1. SOC Nedir? 3 Temel Bileşen</a></li>
            <li><a href="#soc-ekibi" class="hover:text-blue-400 transition-colors">2. SOC Ekibi ve Roller (L1, L2, L3)</a></li>
            <li><a href="#teknoloji" class="hover:text-blue-400 transition-colors">3. Gerekli Teknoloji Yığını (Tech Stack)</a></li>
            <li><a href="#maliyet" class="hover:text-blue-400 transition-colors">4. Kurulum Maliyeti ve Kiralama Modeli</a></li>
            <li><a href="#acklog-soc" class="hover:text-blue-400 transition-colors">5. ACKLOG ile SOC Operasyonu</a></li>
        </ul>
      </div>

      <h2 id="soc-nedir">1. SOC Nedir? 3 Temel Bileşen</h2>
      <p>
        <strong>SOC (Security Operations Center)</strong>, bir kurumun güvenlik olaylarını proaktif olarak izleyen, analiz eden ve müdahale eden merkezi birimdir. 
        Başarılı bir SOC sadece yazılım değildir; şu 3 bileşenin uyumlu çalışmasıdır:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>İnsan:</strong> Analistler, mühendisler ve yöneticiler.</li>
        <li><strong>Süreç (Process):</strong> Playbook'lar, olay müdahale prosedürleri.</li>
        <li><strong>Teknoloji:</strong> SIEM, EDR, SOAR gibi araçlar.</li>
      </ul>

      <h2 id="soc-ekibi">2. SOC Ekibi ve Roller</h2>
      <p>Bir SOC ekibinde tipik olarak şu roller bulunur:</p>
      
      <div class="space-y-4 my-6">
        <div class="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
            <h4 class="font-bold text-white mt-0">Tier 1 Analist (Triage)</h4>
            <p class="text-sm text-gray-400 m-0">Cephedeki ilk savunma hattıdır. SIEM'den gelen alarmları izler, %90'ını oluşturan yanlış alarmları (false positives) eler ve gerçek tehditleri üst seviyeye raporlar.</p>
        </div>
        <div class="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
            <h4 class="font-bold text-white mt-0">Tier 2 Analist (Incident Response)</h4>
            <p class="text-sm text-gray-400 m-0">Gerçek bir saldırı olduğunda müdahale eden uzmanlardır. Kök neden analizi yapar ve tehdidi izole eder.</p>
        </div>
        <div class="p-4 border border-slate-800 rounded-lg bg-slate-900/30">
            <h4 class="font-bold text-white mt-0">Tier 3 Analist (Threat Hunter)</h4>
            <p class="text-sm text-gray-400 m-0">Henüz alarm üretmemiş gizli tehditleri ağda proaktif olarak arayan (avlayan) en kıdemli uzmanlardır.</p>
        </div>
      </div>

      <h2 id="teknoloji">3. Gerekli Teknoloji Yığını (Tech Stack)</h2>
      <p>SOC'un kalbi ve beyni teknolojidir. Olmazsa olmaz 4 araç:</p>
      <ol class="list-decimal pl-6 space-y-4 mb-8 text-muted-foreground">
        <li><strong>SIEM (Merkezi Sinir Sistemi):</strong> Tüm logları toplar ve korelasyon yapar. (Örn: <a href="/" class="text-blue-400 hover:underline">ACKLOG SIEM</a>)</li>
        <li><strong>EDR (Uç Nokta Koruması):</strong> Bilgisayarlardaki tehditleri engeller.</li>
        <li><strong>SOAR (Otomasyon):</strong> Tekrarlayan işleri (örn: IP engelleme) otomatikleştirir.</li>
        <li><strong>TIP (Tehdit İstihbaratı):</strong> Dünyadaki güncel saldırı imzalarını sisteme besler.</li>
      </ol>

      <h2 id="maliyet">4. Kurulum Maliyetleri: In-house vs. MSSP</h2>
      <p>
        Kendi SOC merkezinizi kurmak (In-house) pahalı bir yatırımdır. 7/24 izleme için en az 5-6 analist (vardiyalı) istihdam etmeniz gerekir. 
        Donanım ve lisans maliyetleri de eklendiğinde KOBİ'ler için yönetilebilir olmaktan çıkabilir.
      </p>
      <p>
        Bu nedenle birçok firma <strong>Hizmet Olarak SOC (Manged SOC)</strong> modelini tercih eder veya <strong>ACKLOG</strong> gibi akıllı, otonom özelliklere sahip SIEM ürünleri ile daha az personelle yönetim sağlar.
      </p>

      <h2 id="acklog-soc">5. ACKLOG ile SOC Operasyonlarını Hızlandırın</h2>
      <p>
        ACKLOG, yerleşik yapay zeka özellikleri ve kullanıcı dostu arayüzü ile Tier 1 analist ihtiyacını azaltır. 
        Karmaşık sorgular yerine doğal dille arama yapmanızı sağlar ve SOC ekibinizin verimliliğini %70 artırır.
      </p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "threat-hunting-nedir": {
    title: "Threat Hunting Nedir? Siber Tehdit Avcılığına Giriş",
    description: "Threat Hunting (Tehdit Avcılığı) nedir? Proaktif siber savunma stratejileri, anomali tespiti ve ACKLOG ile siber saldırganları izini sürün.",
    content: `
      <h2>Threat Hunting (Tehdit Avcılığı) Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
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
  "kvkk-siem-log-yonetimi-rehberi": {
    title: "KVKK Uyumluluğu İçin SIEM ve Log Yönetimi Rehberi",
    description: "KVKK teknik tedbirler kapsamında log yönetimi nasıl yapılır? Veri sorumlusu yükümlülükleri ve SIEM sistemlerinin rolü hakkında detaylı rehber.",
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#kvkk-nedir" class="hover:text-blue-400 transition-colors">1. KVKK ve Log İlişkisi</a></li>
            <li><a href="#teknik-tedbirler" class="hover:text-blue-400 transition-colors">2. Teknik Tedbirler ve Madde 17</a></li>
            <li><a href="#log-guvenligi" class="hover:text-blue-400 transition-colors">3. Logların Güvenliği (Hashing)</a></li>
            <li><a href="#veri-sizintisi" class="hover:text-blue-400 transition-colors">4. Veri Sızıntısı Tespiti</a></li>
            <li><a href="#acklog-kvkk" class="hover:text-blue-400 transition-colors">5. ACKLOG ile Teknik Tedbirler</a></li>
        </ul>
      </div>

      <p class="mb-6 bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20 text-sm text-yellow-200">
        ⚠️ <strong>Yasal Uyarı:</strong> Bu rehber teknik tedbirler odaklıdır. Hukuki danışmanlık yerine geçmez.
      </p>

      <h2 id="kvkk-nedir">1. KVKK ve Log Yönetimi İlişkisi</h2>
      <p>
        6698 Sayılı <strong>Kişisel Verilerin Korunması Kanunu (KVKK)</strong>, kişisel verileri işleyen kurum ve kuruluşlara (Veri Sorumlusu) verilerin güvenliğini sağlama yükümlülüğü getirir.
        Peki, bir hukuk kuralı olan KVKK'nın SIEM veya Log Yönetimi ile ne ilgisi var?
      </p>
      <p>
        Cevap çok basit: <strong>"İspat Yükümlülüğü"</strong>. Kurumunuzdaki kişisel verilere kimin eriştiğini, ne zaman eriştiğini ve verilerle ne yaptığını kayıt altına almadan,
        verilerin güvende olduğunu kanıtlayamazsınız.
      </p>

      <h2 id="teknik-tedbirler">2. Teknik Tedbirler Rehberi (Madde 17)</h2>
      <p>
        KVKK Kurumu tarafından yayınlanan "Kişisel Veri Güvenliği Rehberi", alınması gereken <strong>Teknik Tedbirler</strong> arasında şunları açıkça sayar:
      </p>

      <div class="grid gap-6 md:grid-cols-2 my-8">
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h4 class="font-bold text-white mt-0 text-lg">📁 Erişim Logları</h4>
            <p class="text-sm text-gray-400">Sistemlere yapılan tüm erişimler (Login/Logout), kullanıcı hareketleri ve yetki değişiklikleri kayıt altına alınmalıdır.</p>
        </div>
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h4 class="font-bold text-white mt-0 text-lg">🛡️ Siber Güvenlik</h4>
            <p class="text-sm text-gray-400">Siber saldırılara karşı güvenlik duvarı, ağ geçidi ve SIEM gibi araçlarla gerçek zamanlı izleme yapılmalıdır.</p>
        </div>
      </div>

      <h2 id="log-guvenligi">3. Logların Güvenliği ve Değiştirilemezlik</h2>
      <p>
        Log tutmak kadar, o logların güvenliğini sağlamak da önemlidir. Kötü niyetli bir yönetici veya bir saldırgan, sisteme girdikten sonra izlerini silmek için logları değiştirebilir.
      </p>
      <p>
        Bunu önlemek için loglar ham haliyle ve kriptografik özetleri (Hash) alınarak saklanmalıdır. 
        <strong>Hashing</strong>, verinin parmak izini almak gibidir; log dosyasında tek bir virgül bile değişse Hash değeri bozulur ve müdahale anında anlaşılır.
      </p>

      <h2 id="veri-sizintisi">4. Veri Sızıntısı Tespiti ve Bildirimi</h2>
      <p>
        Kanun gereği, bir veri ihlali yaşandığında bunu <strong>72 saat içinde</strong> Kurul'a bildirmeniz gerekir. 
        Ancak bir SIEM ürününüz yoksa, ihlali fark etmeniz aylar sürebilir (veya hiç fark etmeyebilirsiniz).
      </p>
      <p>
        SIEM sistemleri şunları tespit ederek size zaman kazandırır:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Mesai saatleri dışında veritabanından toplu veri çekilmesi.</li>
        <li>Yetkisiz bir kullanıcının hassas klasörlere erişmeye çalışması.</li>
        <li>Kullanıcı hesaplarına yapılan Brute-Force (Kaba Kuvvet) saldırıları.</li>
      </ul>

      <h2 id="acklog-kvkk">5. ACKLOG ile Teknik Tedbirleri Karşılayın</h2>
      <p>
        <a href="/" class="text-blue-400 hover:underline font-bold">ACKLOG SIEM</a>, KVKK teknik tedbirler tablosundaki birçok maddede size yardımcı olur:
      </p>
      
      <div class="space-y-4">
        <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">🕵️</span>
            <div>
                <strong class="text-white block">İz Kayıtlarının Tutulması</strong>
                <p class="text-sm text-gray-400 m-0">Tüm sistemlerden (Sunucu, PC, FW) logları merkezi olarak toplar ve arşivler.</p>
            </div>
        </div>
        <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">🔒</span>
            <div>
                <strong class="text-white block">Veri Güvenliği Takibi</strong>
                <p class="text-sm text-gray-400 m-0">Hassas verilere erişim denemelerini tespit eder ve SOC ekibine alarm üretir.</p>
            </div>
        </div>
        <div class="flex items-start gap-4 p-4 border rounded-lg bg-slate-900/50 border-slate-800">
            <span class="text-2xl">📄</span>
            <div>
                <strong class="text-white block">Uyumluluk Raporları</strong>
                <p class="text-sm text-gray-400 m-0">Tek tıkla KVKK denetçilerine sunulabilecek özet ve detay raporlar üretir.</p>
            </div>
        </div>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "siem-vs-log-yonetimi": {
    title: "SIEM vs. Log Yönetimi: Farklar Neler?",
    description: "SIEM ve Log Yönetimi arasındaki kritik farklar nelerdir? Kurumunuz için hangi çözüm daha uygun? Detaylı karşılaştırma rehberimizi okuyun.",
    content: `
      <h2>SIEM ile Klasik Log Yönetimi Arasındaki Farklar</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
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
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "qradar-alternatifi": {
    title: "Neden ACKLOG En İyi QRadar Alternatifidir?",
    description: "QRadar'dan ACKLOG'a geçmek için 5 neden: Karmaşıklıktan kurtulun, performansı artırın ve maliyetlerinizi optimize edin. En iyi yerli SIEM alternatifi.",
    content: `
      <h2>QRadar Kullanıcıları Neden Alternatif SIEM Arıyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
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
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "log-parsing-nedir": {
    title: "Log Parsing Nedir? Veri Anlamlandırmada No-Code Dönemi",
    description: "Ham log verisi (Raw Data) nasıl işlenir? Log parsing teknikleri, Regex zorlukları ve ACKLOG'un kod yazmadan sürükle-bırak parsing teknolojisi.",
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#parsing-nedir" class="hover:text-blue-400 transition-colors">1. Log Parsing Nedir?</a></li>
            <li><a href="#raw-vs-structured" class="hover:text-blue-400 transition-colors">2. Ham Veri vs. İşlenmiş Veri</a></li>
            <li><a href="#regex-sorunu" class="hover:text-blue-400 transition-colors">3. Regex ile Parsing Çilesi</a></li>
            <li><a href="#acklog-no-code" class="hover:text-blue-400 transition-colors">4. ACKLOG ile No-Code Parsing</a></li>
        </ul>
      </div>

      <h2 id="parsing-nedir">1. Log Parsing Nedir?</h2>
      <p>
        <strong>Log Parsing (Ayrıştırma)</strong>, cihazlardan gelen anlamsız metin yığınlarını (Raw Log), bilgisayarların ve insanların anlayabileceği anlamlı alanlara (Field) bölme işlemidir.
      </p>
      <p>
        Bir Firewall logu ham halde şuna benzer: <br/>
        <code class="bg-black text-green-400 p-1 text-xs rounded block mt-2">Oct 12 14:02:11 FW-01 Deny src=192.168.1.5 dst=8.8.8.8 proto=TCP spt=44332 dpt=53</code>
      </p>
      <p>
        Parsing işlemi bu satırı alır ve şu hale getirir:
      </p>
      <ul class="list-none pl-4 space-y-1 mb-6 text-sm font-mono text-gray-300 bg-slate-900/50 p-4 rounded border border-slate-700">
        <li><strong>Source IP:</strong> 192.168.1.5</li>
        <li><strong>Destination IP:</strong> 8.8.8.8</li>
        <li><strong>Action:</strong> Deny</li>
        <li><strong>Port:</strong> 53 (DNS)</li>
      </ul>

      <h2 id="raw-vs-structured">2. Ham Veri vs. İşlenmiş Veri</h2>
      <p>
        Veriyi parse etmezseniz, üzerinde analiz yapamazsınız. Örneğin "Geçen hafta en çok engellenen IP hangisi?" sorusuna ham veri ile cevap vermek (full text search) saatler sürerken,
        parse edilmiş (structured) veri ile milisaniyeler sürer.
      </p>

      <h2 id="regex-sorunu">3. Regex ile Parsing Çilesi</h2>
      <p>
        Geleneksel SIEM ürünlerinde log parsing yapmak için <strong>Regular Expressions (Regex)</strong> adı verilen karmaşık bir kodlama dili bilmeniz gerekir.
        Regex yazmak zordur, hata yapmaya çok müsaittir ve işlemciyi (CPU) çok yorar. Basit bir log formatı değişikliğinde tüm Regex kodunuz bozulabilir.
      </p>
      <p>
        <em>Tipik bir Regex örneği:</em> <code class="text-xs text-red-300">^(\d{1,3}\.){3}\d{1,3}</code> (Sadece bir IP yakalamak için!)
      </p>

      <h2 id="acklog-no-code">4. ACKLOG ile No-Code Parsing</h2>
      <p>
        <a href="/" class="text-blue-400 hover:underline font-bold">ACKLOG</a>, parsing sürecinde devrim yaratmıştır. Regex bilmenize gerek yoktur.
      </p>
      
      <div class="grid gap-6 md:grid-cols-2 my-8">
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h4 class="font-bold text-white mt-0 text-lg">🖱️ Sürükle-Bırak Editör</h4>
            <p class="text-sm text-gray-400">Logun üzerindeki alanları mouse ile seçin ve etiketleyin (Source IP, User vb.). ACKLOG kuralı otomatik oluşturur.</p>
        </div>
        <div class="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
            <h4 class="font-bold text-white mt-0 text-lg">⚡ Yüksek Performans</h4>
            <p class="text-sm text-gray-400">ACKLOG'un parsing motoru, Regex'ten 10 kat daha hızlı çalışır ve CPU'yu yormaz.</p>
        </div>
      </div>
      <p>
        Teknik ekiplerin en büyük kabusu olan "Parser Yazma" işini ACKLOG ile çocuk oyuncağına dönüştürün.
      </p>
    `
  },
  "siem-performans-analizi": {
    title: "SIEM Performans Savaşı: Disk Tabanlı vs. In-Memory Analiz",
    description: "SIEM performansını ne etkiler? Eski nesil disk tabanlı mimariler ile yeni nesil In-Memory (RAM) tabanlı analiz arasındaki dev farkı keşfedin.",
    content: `
      <div class="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-blue-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#geleneksel-mimari" class="hover:text-blue-400 transition-colors">1. Geleneksel Disk Mimarisi</a></li>
            <li><a href="#in-memory-mimari" class="hover:text-blue-400 transition-colors">2. In-Memory (RAM) Devrimi</a></li>
            <li><a href="#hiz-testi" class="hover:text-blue-400 transition-colors">3. Hız Testi: Sorgu Süreleri</a></li>
            <li><a href="#maliyet-etkisi" class="hover:text-blue-400 transition-colors">4. Donanım Maliyetine Etkisi</a></li>
        </ul>
      </div>

      <h2 id="geleneksel-mimari">1. Geleneksel Disk Tabanlı Mimari</h2>
      <p>
        Eski nesil SIEM ürünleri (10+ yıllık teknolojiler), verileri İlişkisel Veritabanlarına (RDBMS) veya Flat File olarak diske yazar. 
        Bir arama yaptığınızda, sistem mekanik veya SSD disk üzerindeki dosyaları okumak zorundadır.
      </p>
      <p>
        Disk I/O (Okuma/Yazma) hızı her zaman bir darboğazdır (Bottleneck). Milyonlarca log içinde arama yapmak dakikalar, hatta saatler sürebilir. 
        Saldırı altındayken bu gecikme kabul edilemez.
      </p>

      <h2 id="in-memory-mimari">2. In-Memory (RAM) Analiz Devrimi</h2>
      <p>
        Yeni nesil teknolojiler (örneğin <a href="/" class="text-blue-400 hover:underline font-bold">ACKLOG</a>), veriyi diske yazmadan önce veya analiz sırasında doğrudan <strong>RAM (Bellek)</strong> üzerinde tutar.
        RAM'in okuma hızı, en hızlı SSD diskten bile binlerce kat daha fazladır.
      </p>

      <h2 id="hiz-testi">3. Hız Testi: Dakikalar vs. Milisaniyeler</h2>
      <div class="my-8">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-32 font-bold text-right text-white">Disk Tabanlı:</div>
            <div class="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                <div class="bg-red-500 w-[90%] h-full"></div>
            </div>
            <div class="w-16 text-sm text-gray-400">15 dk</div>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-32 font-bold text-right text-white text-blue-400">ACKLOG:</div>
            <div class="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                <div class="bg-blue-500 w-[5%] h-full"></div>
            </div>
            <div class="w-16 text-sm text-gray-400">200 ms</div>
        </div>
        <p class="text-center text-xs text-gray-500 mt-2">*10 Milyon log üzerinde yapılan "Son 24 saatteki başarısız denemeler" sorgusu.</p>
      </div>

      <h2 id="maliyet-etkisi">4. Donanım Maliyetine Etkisi</h2>
      <p>
        "RAM pahalı değil mi?" diye düşünebilirsiniz. Ancak verimsiz bir SIEM'i hızlandırmak için almanız gereken onlarca uçuk fiyatlı SSD disk sunucusu (Storage Array) çok daha pahalıdır.
      </p>
      <p>
        ACKLOG'un sıkıştırma teknolojisi sayesinde, loglar RAM'de çok az yer kaplar. Böylece standart bir sunucu ile, rakip ürünlerin 10 sunuculuk işini tek başına yapabilirsiniz.
        Bu da %80'e varan donanım tasarrufu demektir.
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
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
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
          <p>Gizli veri ve bilgilerin bir BT altyapısından çalındığı bir olaydır. Veri ihlalleri genellikle kuruluşların itibarının zedelenmesine veya yüksek para cezalarına (GDPR, <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> vb.) yol açar.</p>
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
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "siem-nedir-kilavuzu": {
    title: "SIEM Nedir? Kapsamlı Rehber",
    description: "Kurumsal güvenlik için SIEM satın alma rehberi. SIEM hangi problemleri çözer, nerelerde kullanılır ve seçim yaparken nelere dikkat edilmeli?",
    content: `
      <h2><strong>SIEM Nedir?</strong></h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
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
      <p>SIEM, siber güvenlik alanında oldukça geniş bir yelpazede kullanılabilir: </p>

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
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>
        Siber güvenlik dünyasında, 2026 yılı itibarıyla hiç olmadığı kadar hızlı ve karmaşık bir hal aldı. Artık sadece dış tehditlerle değil, devasa boyuta ulaşan veri yığınlarıyla da mücadele ediyoruz. Birçok kurum, hala 10-15 yıl öncesinin mimarisiyle inşa edilmiş SIEM (Güvenlik Bilgileri ve Etkinlik Yönetimi) çözümlerini kullanmaya çalışıyor. Ancak bu "eski nesil" sistemler, günümüzün dinamik tehdit ortamında artık çözüm değil, birer yük haline gelmiş durumda.
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
        Eski nesil SIEM çözümleriyle devam etmek, patlamaya hazır bir maliyet ve performans bombası üzerinde oturmaya benzer. ISO 27001, KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> gibi regülasyonların sıkılaştığı bu dönemde, kurumlar daha çevik, daha hızlı ve daha maliyet etkin çözümlere yönelmek zorunda.
      </p>
      <p>
        ACKLOG, sadece bir log tutucu değil; hız, sadelik ve maliyet avantajını birleştiren bir güvenlik operasyon merkezidir.
      </p>

      <div class="mt-8 p-6 bg-blue-950/30 border border-blue-500/20 rounded-xl">
        <h4 class="text-white font-bold mb-2">Bir Sonraki Bölüm</h4>
        <p class="text-blue-300">
            <a href="/wiki/qradar-ve-global-devlerden-ackloga-gecis" class="text-blue-300 hover:text-blue-200 underline transition-colors">
                QRadar ve Global Devlerden ACKLOG’a Geçiş: Karmaşıklıktan Kurtulun!
            </a>
        </p>
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
    author: {
      name: "Caner Yılmaz",
      title: "Kıdemli SOC Analisti",
      initials: "CY"
    },
    content: `
      <h2>Karmaşıklıktan Kurtulun: Global Çözümlerden Yerli Güce Geçmek İçin 5 Neden</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
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
        Global yazılımlar, <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> sayılı kanun veya KVKK gibi yerel ihtiyaçları genelde dışarıdan eklenen yamalar veya üçüncü parti araçlarla çözmeye çalışır.
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
        <p class="text-blue-300">
             <a href="/wiki/yerli-siem-karsilastirmasi-ve-acklog-farki" class="text-blue-300 hover:text-blue-200 underline transition-colors">
                Bölüm 3: Yerli SIEM Karşılaştırması - ACKLOG vs. Diğer Yerli Çözümler
            </a>
        </p>
      </div>

      <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-xl text-center">
        <h3 class="text-2xl font-bold text-white mb-4">Hemen Başlayın</h3>
        <p class="text-gray-300 mb-6">
          Karmaşık arayüzlerden ve yüksek maliyetlerden yoruldunuz mu? Gelin, ACKLOG'u mevcut sisteminizle yan yana (Side-by-Side) test edelim ve farkı kendi gözlerinizle görün.
        </p>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "yerli-siem-karsilastirmasi-ve-acklog-farki": {
    title: "Bölüm 3: Yerli SIEM Karşılaştırması ve ACKLOG Farkı",
    description: "Neden ACKLOG? Yerli Çözümler Arasında Neden 'Yeni Nesil' Olarak Anılıyoruz? Yerli rakiplerimizle aramızdaki keskin farklar ve karşılaştırma tablosu.",
    author: {
      name: "Burak Şahin",
      title: "DevSecOps Mühendisi",
      initials: "BŞ"
    },
    content: `
      <h2>Neden ACKLOG? Yerli Çözümler Arasında Neden "Yeni Nesil" Olarak Anılıyoruz?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
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
        Küçük ölçekte iyi çalışan birçok yerli SIEM, veri trafiği arttıkça veya cluster (kümeleme) ihtiyacı doğduğunda verimliliğini kaybeder.
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
        Rakiplerimizde sıkça karşılaşılan "KVKK için ayrı modül, <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için ayrı ücret, raporlama için ek lisans" modeli, toplam sahip olma maliyetini (TCO) yükseltir.
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
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "hibrit-altyapilarda-log-merkeziyeti": {
    title: "Hibrit Altyapılarda Log Merkeziyeti: Neden Uyumluluk Testi Yapmalısınız?",
    description: "Karmaşık BT altyapılarında güvenlik açığı yaratan 'kör noktalar' nasıl yok edilir? 5651, KVKK ve LogSIEM uyumluluk testinin işletmenize sağladığı ROI ve güvenlik avantajları.",
    author: {
      name: "Mehmet Demir",
      title: "Ağ Güvenlik Mühendisi",
      initials: "MD"
    },
    content: `
      <h2>Karmaşık Altyapıların Yarattığı Güvenlik Açığı</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>
        Modern BT altyapıları artık sadece yerel sunuculardan oluşmuyor. FortiGate firewall'lardan Microsoft 365 bulut günlüklerine, yerel sistemlerden uzak ofis cihazlarına kadar devasa bir veri akışı mevcut. 
        Bu cihazların SIEM sistemine ne kadar hızlı entegre edileceği, olası bir siber saldırıya müdahale sürenizi (MTTR) doğrudan etkiler.
      </p>

      <h3>LogSIEM Uyumluluk Testi Size Ne Sağlar?</h3>
      <p>Sitemizdeki uyumluluk sihirbazı, mevcut yatırımınızı korumanıza yardımcı olur:</p>

      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
          <h4 class="text-white mt-0 mb-2">1. Tak-Çalıştır Hazırlığı</h4>
          <p class="text-sm text-gray-400 mb-0">Envanterinizdeki cihazların (Logo Flow, J-HR gibi yazılımlar dahil) LogSIEM ile ne kadar sürede eşleşeceğini saniyeler içinde analiz eder.</p>
        </div>
        <div class="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
          <h4 class="text-white mt-0 mb-2">2. Görünürlük Analizi</h4>
          <p class="text-sm text-gray-400 mb-0">Hangi cihazların kritik logları (Security, System, Traffic) gönderip göndermediğini belirleyerek "kör noktaları" yok eder.</p>
        </div>
        <div class="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <h4 class="text-white mt-0 mb-2">3. Mevzuat Uyumu</h4>
          <p class="text-sm text-gray-400 mb-0">Seçtiğiniz cihazların KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> sayılı kanun gerekliliklerine uygun log üretip üretmediğini denetler.</p>
        </div>
      </div>

      <h3>3. Hızlı Entegrasyonun İşletme Maliyetine (ROI) Etkisi</h3>
      <p>Entegrasyon testi, sadece teknik bir kontrol değildir; aynı zamanda bir bütçe yönetimi aracıdır:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Zaman Tasarrufu:</strong> Haftalar süren konfigürasyon süreçlerini, hazır konnektör kütüphanemizle saatlere indiririz.</li>
        <li><strong>Lisans Optimizasyonu:</strong> Sadece anlamlı ve siber güvenlik değeri olan logları toplayarak veri depolama maliyetlerinizi düşürürüz.</li>
      </ul>

      <h3>4. Sonuç: Görünmeyeni İzleyemezsiniz</h3>
      <p>
        LogSIEM Uyumluluk Testi sonucunda aldığınız rapor, sadece bir liste değildir. Bu rapor, dijital kalenizin kapılarının ne kadar sıkı kapalı olduğunun bir kanıtıdır. 
        Eğer sisteminizde %100 uyumluluk görünmüyorsa, LogSIEM uzmanlarımızla ücretsiz bir teknik analiz seansı planlayabilirsiniz.
      </p>

      <div class="mt-8 p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl text-center">
        <h3 class="text-xl font-bold text-white mb-4">Risk Almayın, Test Edin</h3>
        <p class="text-gray-300 mb-6">
          Sisteminizin 5651 ve KVKK uyumluluğundan emin misiniz? Saniyeler içinde öğrenin.
        </p>
        <a href="/uyumluluk-testi" class="inline-flex h-10 items-center justify-center rounded-lg bg-orange-600 px-8 text-sm font-medium text-white shadow hover:bg-orange-700 transition-all">
          Uyumluluk Testini Şimdi Başlat
        </a>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "dijital-ayak-izi-ve-saldiri-yuzeyi-yonetimi": {
    title: "Dijital Ayak İzi ve Saldırı Yüzeyi Yönetimi: Hackerlar Sizi Nasıl Görüyor?",
    description: "Kurumunuzun dijital dünyada bıraktığı izler siber saldırganlar için birer davetiye olabilir. EASM (Saldırı Yüzeyi Yönetimi), açık port riskleri ve ACKLog ile proaktif savunma.",
    author: {
      name: "Elif Kaya",
      title: "Siber İstihbarat Uzmanı",
      initials: "EK"
    },
    content: `
      <h2>Hackerlar Sizi Nasıl Görüyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>
        Siber saldırıların %60'ından fazlası, kurumların farkında olmadığı "gölge IT" (Shadow IT) varlıkları veya unutulmuş açık portlar üzerinden gerçekleşmektedir. 
        <strong>Dijital Ayak İzi</strong>, internete bağlı tüm cihazlarınızın, servislerinizin ve çalışanlarınızın bıraktığı izlerin toplamıdır.
        Saldırganlar, tıpkı hırsızların açık pencere araması gibi, Shodan ve Censys gibi arama motorlarını kullanarak bu izleri tarar ve zayıf noktaları tespit eder.
      </p>

      <h3>EASM (External Attack Surface Management) Nedir?</h3>
      <p>
        Dış Saldırı Yüzeyi Yönetimi (EASM), kurumunuzun dışarıdan nasıl göründüğünü sürekli olarak izleme ve analiz etme sürecidir. 
        Güvenlik duvarının arkasında ne kadar güvende olduğunuzu bilseniz de, dışarıya bakan yüzünüzdeki bir çatlak (örneğin; RDP servisi açık unutulmuş bir test sunucusu) tüm kaleyi tehlikeye atabilir.
      </p>

      <div class="my-8 space-y-4">
        <div class="flex gap-4 p-4 border border-red-500/20 bg-red-900/10 rounded-xl">
          <div class="min-w-[40px] h-10 flex items-center justify-center bg-red-500/20 rounded-lg text-red-400 font-bold">RDP</div>
          <div>
            <h4 class="text-white mt-0 mb-1 font-bold">Uzak Masaüstü Protokolü</h4>
            <p class="text-sm text-gray-400 m-0 leading-snug">İnternete açık RDP portları (3389), Fidye Yazılımı (Ransomware) çetelerinin 1 numaralı giriş kapısıdır. Asla VPN'siz dışarıya açılmamalıdır.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 border border-orange-500/20 bg-orange-900/10 rounded-xl">
          <div class="min-w-[40px] h-10 flex items-center justify-center bg-orange-500/20 rounded-lg text-orange-400 font-bold">SMB</div>
          <div>
            <h4 class="text-white mt-0 mb-1 font-bold">Dosya Paylaşımı (Port 445)</h4>
            <p class="text-sm text-gray-400 m-0 leading-snug">WannaCry gibi global saldırılar bu portu kullanır. Dosya sunucularınızın internete doğrudan açık olması büyük bir risktir.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 border border-blue-500/20 bg-blue-900/10 rounded-xl">
          <div class="min-w-[40px] h-10 flex items-center justify-center bg-blue-500/20 rounded-lg text-blue-400 font-bold">SSL</div>
          <div>
            <h4 class="text-white mt-0 mb-1 font-bold">Süresi Dolmuş Sertifikalar</h4>
            <p class="text-sm text-gray-400 m-0 leading-snug">Kullanıcılarınızın güvenini sarsar ve Man-in-the-Middle (Ortadaki Adam) saldırılarına kapı aralar.</p>
          </div>
        </div>
      </div>

      <h3>ACKLog Security Analyzer ile Proaktif Savunma</h3>
      <p>
        "Görmediğinizi koruyamazsınız." ACKLog Security Analyzer, siber saldırganların kullandığı istihbarat kaynaklarını (Censys, Shodan, VirusTotal vb.) kullanarak size saldırgan gözüyle bir rapor sunar.
      </p>

      <h4>Analiz Sayfamızda Neleri Test Ediyoruz?</h4>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Risk Skoru:</strong> Dış dünyadaki görünürlüğünüze göre hesaplanan 0-100 arası güvenlik puanı.</li>
        <li><strong>Açık Port Taraması:</strong> Kritik servislerin (SSH, Telnet, Database) internete açık olup olmadığının kontrolü.</li>
        <li><strong>Blacklist Kontrolü:</strong> IP adresinizin spam veya zararlı yazılım listelerine girip girmediği.</li>
      </ul>

      <div class="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl text-center">
        <h3 class="text-xl font-bold text-white mb-4">Saldırı Yüzeyinizi Şimdi Küçültün</h3>
        <p class="text-gray-300 mb-6">
          Hackerlar taramaya başlamadan önce, açıklarınızı kendiniz bulun.
        </p>
        <a href="/analiz" class="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow hover:bg-blue-700 transition-all">
          Ücretsiz Güvenlik Analizini Başlat
        </a>
      </div>
    `
  },
  "siem-log-maliyetleri-nasil-dusurulur": {
    title: "SIEM ve Log Yönetiminde Gizli Maliyetler: Bütçenizi Nasıl Optimize Edersiniz?",
    description: "SIEM projelerinin 'buzdağının görünmeyen yüzü' olan donanım ve depolama maliyetlerini nasıl yönetirsiniz? EPS lisanslama tuzakları ve sıkıştırma teknolojisinin önemi.",
    author: {
      name: "Ayşe Çelik",
      title: "GRC Uzmanı",
      initials: "AÇ"
    },
    content: `
      <h2>SIEM Maliyetlerinin Görünmeyen Yüzü: Buzdağı Etkisi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>
        Birçok kurum SIEM yatırımı yaparken sadece lisans maliyetine odaklanır. Ancak, projenin toplam sahip olma maliyetinin (TCO) %60'ından fazlası genellikle donanım, depolama (storage) ve işletim maliyetlerinden oluşur.
        Bu duruma siber güvenlikte "Buzdağı Etkisi" denir; suyun üzerindeki lisans maliyeti küçük görünse de, suyun altındaki donanım gereksinimleri bütçenizi batırabilir.
      </p>

      <h3>EPS (Events Per Second) Lisanslama Tuzağı</h3>
      <p>
        Geleneksel SIEM ürünlerinin çoğu, saniyede işlenen olay sayısı (EPS - Events Per Second) veya günlük veri hacmi (GB/Day) üzerinden fiyatlandırma yapar. 
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Sürpriz Faturalar:</strong> Bir siber saldırı anında veya yeni bir uygulama devreye alındığında log hacminiz aniden 10 katına çıkabilir. Bu durumda "limit aşımı" cezalarıyla veya loglarınızın drop edilmesiyle (kaydedilmemesiyle) karşılaşırsınız.</li>
        <li><strong>Kısıtlı Görünürlük:</strong> Maliyeti düşürmek için bazı kritik logları kapatmak zorunda kalırsınız, bu da güvenlik açığı yaratır.</li>
      </ul>

      <h3>Depolama (Storage) Maliyetlerini Nasıl Düşürürsünüz?</h3>
      <p>
        Log verileri metin tabanlıdır ve doğru sıkıştırma algoritmalarıyla ciddi oranda küçültülebilir. Ancak eski nesil SIEM'ler ham veriyi (raw data) verimsiz şekilde saklar.
      </p>

      <div class="my-8 p-6 bg-slate-900 border border-slate-700 rounded-xl">
        <h4 class="text-white mt-0 mb-4">ACKLog Sıkıştırma Teknolojisi Örneği</h4>
        <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div class="text-center">
            <div class="text-4xl font-bold text-red-500 mb-2">1 TB</div>
            <div class="text-sm text-gray-400">Ham Veri (Raw)</div>
          </div>
          <div class="text-2xl text-gray-500">➜</div>
          <div class="text-center">
            <div class="text-4xl font-bold text-green-500 mb-2">70 GB</div>
            <div class="text-sm text-gray-400">ACKLog Sıkıştırılmış</div>
          </div>
        </div>
        <p class="text-center text-gray-400 mt-4 text-sm">ACKLog'un özel sıkıştırma algoritması sayesinde disk maliyetlerinizden %90'a varan oranda tasarruf sağlarsınız.</p>
      </div>

      <h3>Daha Az Donanım, Daha Çok Performans</h3>
      <p>
        Sadece depolama alanından değil, işlem gücünden de tasarruf edersiniz. Geleneksel SIEM'ler hantal Java tabanlı mimarileriyle sunucularınızı yorarken, ACKLog modern mimarisiyle minimum kaynak tüketir.
      </p>

      <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
        <h4 class="text-white font-bold mb-2">In-Memory Hızı</h4>
        <p class="text-sm text-gray-400 m-0">
          Veritabanı sorgularının çoğu disk yerine bellek (In-Memory) üzerinde gerçekleşir. Bu sayede karmaşık tehdit avcılığı (Threat Hunting) sorguları dakikalar yerine milisaniyeler içinde sonuçlanır.
        </p>
      </div>

      <h3>Yatırımın Geri Dönüşü (ROI) Hesaplaması</h3>
      <p>
        Doğru SIEM seçimi ile bütçenizi nasıl korursunuz?
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Donanım Tasarrufu:</strong> Daha az CPU ve RAM gerektiren optimize mimari.</li>
        <li><strong>Disk Tasarrufu:</strong> Yüksek sıkıştırma oranı ile daha az disk alanı.</li>
        <li><strong>Operasyonel Tasarrufu:</strong> Kolay yönetim ve yerli destek ile azalan iş gücü maliyeti.</li>
      </ul>

      <div class="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl text-center">
        <h3 class="text-xl font-bold text-white mb-4">Kendi Tasarrufunuzu Hesaplayın</h3>
        <p class="text-gray-300 mb-6">
          Mevcut log hacminizi girin, ne kadar disk alanına ihtiyacınız olduğunu ve ACKLog ile ne kadar tasarruf edeceğinizi anında görün.
        </p>
        <a href="/maliyet-hesaplayici" style="color: black !important; font-weight: bold;" class="inline-flex h-10 items-center justify-center rounded-lg bg-green-600 px-8 text-sm font-medium !text-black !font-bold text-black font-bold shadow hover:bg-green-700 transition-all">
          Maliyet Hesaplayıcıyı Aç
        </a>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "zafiyet-tarama-ve-sizma-testi-farki": {
    title: "Zafiyet Tarama vs. Sızma Testi (Pentest): Fark Nedir?",
    description: "Zafiyet taraması (Vulnerability Scan) ile Sızma Testi (Pentest) arasındaki farklar nelerdir? Hangisine ne zaman ihtiyacınız var? Otomatik taramaların siber savunmadaki rolü.",
    author: {
      name: "Selin Arslan",
      title: "Sızma Testi Uzmanı",
      initials: "SA"
    },
    content: `
      <h2>Otomasyon ve İnsan Zekası Arasındaki Fark</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>
        Siber güvenlik dünyasında kavramlar sıklıkla karıştırılır. Yöneticiler genellikle "Biz zaten pentest yaptırdık, güvendeyiz" düşüncesindedir. 
        Ancak Pentest (Sızma Testi) ve Zafiyet Taraması, birbirinin alternatifi değil, tamamlayıcısıdır.
      </p>

      <h3>1. Zafiyet Taraması (Vulnerability Scan)</h3>
      <p>
        Otomatik araçlar (Nessus, OpenVAS veya ACKLog Scanner gibi) kullanılarak yapılan, sistemdeki bilinen güvenlik açıklarını tespit etmeye yarayan işlemdir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Sıklık:</strong> Sürekli yapılmalıdır (Haftalık/Günlük).</li>
        <li><strong>Kapsam:</strong> Tüm varlıkları (IP, Domain, Uygulama) kapsar.</li>
        <li><strong>Maliyet:</strong> Düşüktür, otomatize edilmiştir.</li>
        <li><strong>Amaç:</strong> "Açık pencere var mı?" sorusunun cevabıdır.</li>
      </ul>

      <h3>2. Sızma Testi (Penetration Test)</h3>
      <p>
        Etik hackerların (White Hat), belirlenen kapsamda sisteme sızmaya çalıştığı, insan zekası ve yaratıcılığı gerektiren bir simülasyondur.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Sıklık:</strong> Genellikle yılda 1 veya 2 kez yapılır.</li>
        <li><strong>Kapsam:</strong> Kritik sistemlere odaklanır.</li>
        <li><strong>Maliyet:</strong> Yüksektir, uzmanlık gerektirir.</li>
        <li><strong>Amaç:</strong> "Pencere kapalı olsa da, kilidi açıp girebilirler mi?" sorusunun cevabıdır.</li>
      </ul>

      <h3>Maruz Kalma Penceresi (Window of Exposure)</h3>
      <p>
        Yılda bir kez pentest yaptırmak, yılın geri kalan 364 günü güvende olduğunuz anlamına gelmez. Yeni bir zafiyet (örneğin Log4j) çıktığında, bir sonraki pentest zamanını bekleyemezsiniz. 
        İşte bu yüzden <strong>Otomatik Zafiyet Taraması</strong> hayati önem taşır. Sizi yeni çıkan tehditlere karşı sürekli uyarır.
      </p>

      <div class="mt-8 p-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl text-center font-sans">
        <h3 class="text-xl font-bold text-white mb-4">Sisteminizi Şimdi Test Edin</h3>
        <p class="text-gray-300 mb-6">
          Otomatik Zafiyet Tarayıcımız ile sisteminizdeki bilinen açıkları saniyeler içinde tespit edin ve detaylı rapor alın.
        </p>
        <a href="/zafiyet-tarama" class="inline-flex h-10 items-center justify-center rounded-lg bg-red-600 px-8 text-sm font-medium text-white shadow hover:bg-red-700 transition-all">
          Ücretsiz Tarama Başlat
        </a>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "neden-modern-siem": {
    title: "Neden Modern SIEM? Güvenlik Operasyonlarında Çağ Atlayın",
    description: "Klasik SIEM'ler artık yetersiz. Veri hacmi, hız ve yapay zeka ihtiyacı için yeni nesil teknolojilere geçiş rehberi.",
    author: {
      name: "Zeynep Koç",
      title: "Adli Bilişim Uzmanı",
      initials: "ZK"
    },
    content: `
      <div class="bg-indigo-50/5 border border-indigo-500/20 p-6 rounded-xl mb-8">
        <h3 class="text-lg font-bold text-indigo-400 mt-0">İçindekiler</h3>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-sm text-muted-foreground">
            <li><a href="#veri-patlamasi" class="hover:text-indigo-400 transition-colors">1. Veri Patlaması ve Klasik SIEM</a></li>
            <li><a href="#real-time" class="hover:text-indigo-400 transition-colors">2. Gerçek Zamanlı Analiz</a></li>
            <li><a href="#yapay-zeka" class="hover:text-indigo-400 transition-colors">3. Yapay Zeka ve Otomasyon</a></li>
            <li><a href="#maliyet" class="hover:text-indigo-400 transition-colors">4. Sürdürülebilir Maliyetler</a></li>
        </ul>
      </div>

      <h2 id="veri-patlamasi">1. Veri Patlaması ve Klasik SIEM'in Çöküşü</h2>
      <p>
        Son 10 yılda kurumların ürettiği log verisi 50 kat arttı. Firewall'lar, sunucular, bulut uygulamaları ve IoT cihazları saniyede binlerce log üretiyor.
        Eski nesil (Legacy) SIEM ürünleri, bu devasa veri yükü altında eziliyor.
      </p>
      <div class="p-4 bg-red-900/10 border border-red-500/20 rounded-lg my-4">
        <strong class="text-red-400 block mb-2">Eski Nesil Sorunu:</strong>
        <p class="text-sm text-gray-400 m-0">
          Diske yazma hızları (IOPS) yetersiz kaldığı için loglar gecikmeli işleniyor. "Real-time" denen analiz aslında dakikalar, bazen saatler sonra yapılıyor.
        </p>
      </div>

      <h2 id="real-time">2. Gerçek Zamanlı Analiz: Hız İhtiyacı</h2>
      <p>
        Siber saldırganların bir sisteme sızıp veriyi dışarı çıkarması (Breakout Time) ortalama <strong>1 saat 38 dakikadır</strong>.
        Eğer SIEM ürününüz logları 15 dakika gecikmeli işliyorsa, saldırıyı durdurmak için çok geç kalmış olabilirsiniz.
      </p>
      <p>
        <strong>Modern SIEM (ACKLOG):</strong> In-Memory (Bellek İçi) mimarisi sayesinde loglar diske yazılmadan milisaniyeler içinde analiz edilir. Saldırı anında tespit edilir ve engellenir.
      </p>

      <h2 id="yapay-zeka">3. Yapay Zeka ve Otomasyon (SOAR)</h2>
      <p>
        Geleneksel SIEM'lerde her kuralı manuel yazmanız gerekir. "A kullanıcısı 5 kere hatalı şifre girerse uyar" gibi.
        Ancak modern tehditler bu kadar basit değildir.
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>UEBA (User Behavior Analytics):</strong> Kullanıcının normal davranışını öğrenir ve anormallikleri (örn: gece yarısı VPN yapması) tespit eder.</li>
        <li><strong>No-Code Kural Yazımı:</strong> Kod yazmadan, sürükle-bırak ile karmaşık senaryolar oluşturulabilir.</li>
      </ul>

      <h2 id="maliyet">4. Sürdürülebilir Maliyetler</h2>
      <p>
        Pek çok eski nesil SIEM, EPS (Event Per Second) veya GB başına lisanslama yapar. Log hacminiz arttıkça ödediğiniz fatura da katlanarak artar.
        Bu durum, bütçeyi aşmamak için kritik logların kapatılmasına (kör noktalar oluşmasına) neden olur.
      </p>
      <p>
        Modern SIEM çözümleri ise daha esnek, donanım bağımsız ve ölçeklenebilir lisanslama modelleri sunarak güvenlikten ödün vermeden büyümenize olanak tanır.
      </p>

      <div class="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-xl text-center">
        <h3 class="text-xl font-bold text-white mb-4">Modern SIEM'e Geçiş Yapın</h3>
        <p class="text-gray-300 mb-6">
          ACKLOG'un yeni nesil mimarisini ve yapay zeka yeteneklerini kendi verinizle test edin.
        </p>
        <a href="/demo-talep" class="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow hover:bg-blue-700 transition-all">
            Ücretsiz Demo Başlat
        </a>
      </div>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "ucretsiz-siem-vs-ticari-siem": {
    title: "Ücretsiz SIEM Tuzakları: Açık Kaynak vs. Ticari Çözümler",
    description: "Açık kaynak (Open Source) SIEM yazılımları gerçekten ücretsiz mi? Gizli maliyetler, bakım zorlukları ve neden ticari bir çözüm (ACKLOG) tercih etmelisiniz?",
    author: {
      name: "Volkan Öztürk",
      title: "Baş Güvenlik Mimarı",
      initials: "VÖ"
    },
    content: `
      <h2>Ücretsiz Sandığınız Şey Size Ne Kadara Mal Oluyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>
        "Bedava sirke baldan tatlıdır" sözü siber güvenlikte geçerli değildir. Birçok kurum, lisans maliyetinden kaçmak için açık kaynak (Open Source) SIEM çözümlerine (ELK Stack, Graylog, Wazuh vb.) yönelmektedir.
        Ancak "lisans ücreti olmaması", projenin "maliyetsiz" olduğu anlamına gelmez.
      </p>

      <h3>1. Gizli Personel Maliyeti</h3>
      <p>
        Açık kaynak ürünler, "kutusundan çıktığı gibi" çalışmaz. Onları kurmak, ayarlamak, parse kuralları yazmak ve sürekli ayakta tutmak için en az 1-2 deneyimli (ve maaşı yüksek) Linux/Security mühendisine ihtiyacınız vardır.
        Ticari bir ürünün (ACKLOG) yıllık lisans maliyeti, genellikle bu mühendislerin 3 aylık maaşından daha azdır.
      </p>

      <h3>2. Donanım Oburluğu</h3>
      <p>
        Açık kaynak projeler genellikle optimizasyon konusunda ticari ürünlerin gerisindedir. Özellikle Java tabanlı yapılar (Elasticsearch gibi), devasa RAM ve CPU kaynaklarına ihtiyaç duyar.
        ACKLOG 32GB RAM ile saniyede 5.000 log işlerken, benzer bir performansı açık kaynakla almak için 128GB+ RAM'e sahip sunucu kümelerine ihtiyacınız olabilir.
      </p>

      <h3>3. Destek ve Güvenilirlik Sorunu</h3>
      <p>
        Gece 03:00'te sisteminiz çöktüğünde veya bir saldırı altında kaldığınızda, açık kaynak dünyasında yalnızsınızdır. Google'da forumlarda çözüm aramak zorunda kalırsınız.
        Ticari bir çözümde ise telefonun ucunda 7/24 destek veren bir ekip ve SLA (Hizmet Seviyesi Anlaşması) güvencesi vardır.
      </p>

      <div class="my-8 overflow-x-auto border rounded-xl">
        <table class="w-full text-sm text-left">
          <thead class="bg-slate-900 text-slate-400 font-bold uppercase">
            <tr>
              <th class="px-6 py-4">Kriter</th>
              <th class="px-6 py-4">Açık Kaynak (Open Source)</th>
              <th class="px-6 py-4">Ticari (ACKLOG)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr>
              <td class="px-6 py-4 font-medium">Lisans Maliyeti</td>
              <td class="px-6 py-4 text-green-400">0 TL</td>
              <td class="px-6 py-4">Yıllık Lisans</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Kurulum & Bakım</td>
              <td class="px-6 py-4 text-red-400">Çok Zor (Uzman Gerekir)</td>
              <td class="px-6 py-4 text-green-400">Tak-Çalıştır (15 Dk)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Donanım İhtiyacı</td>
              <td class="px-6 py-4 text-red-400">Çok Yüksek</td>
              <td class="px-6 py-4 text-green-400">Optimize / Düşük</td>
            </tr>
            <tr>
              <td class="px-6 py-4 font-medium">Yasal Uyumluluk (KVKK)</td>
              <td class="px-6 py-4">Yok (Ek Geliştirme Şart)</td>
              <td class="px-6 py-4 text-green-400">Tam Uyumlu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Sonuç: Zamanınız mı Değerli, Paranız mı?</h3>
      <p>
        Eğer devasa bir AR-GE ekibiniz ve bolca zamanınız varsa açık kaynak harika bir okuldur. Ancak amacınız kurumunuzu korumak ve yasalara uymaksa,
        ACKLOG size "zamanı satın alma" fırsatı sunar.
      </p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  }
};
