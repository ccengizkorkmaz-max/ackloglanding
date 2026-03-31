export const troubleshootingLogsArticles = {
  "windows-event-id-4624-analizi-nasil-yapilir": {
    title: "Windows Event ID 4624 Analizi: Başarılı Oturum Açma İzleri",
    description: "Windows siber güvenlik loglarının en kritiği olan Event ID 4624 (Logon) detaylı analizi ve Logon Type anlamları.",
    content: `
      <h2>Adli Analiz: Event ID 4624 Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Windows Event ID 4624, bir kullanıcının sisteme başarıyla giriş yaptığını (Success Logon) belirtir. Ancak sadece "girdi" bilgisi yeterli değildir. Bir saldırganın sistemde olup olmadığını anlamak için bu logun içindeki 'Logon Type' bilgisini okumanız gerekir.</p>
      
      <h3>Logon Type (Oturum Tipi) Sözlüğü</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Logon Type 2 (Interactive):</strong> Kullanıcı bilgisayarın başındadır, fiziksel olarak klavyeden giriş yapmıştır.</li>
        <li><strong>Logon Type 3 (Network):</strong> Bir paylaşıma (Shared Folder) erişim veya ağ üzerinden bir servis bağlantısı.</li>
        <li><strong>Logon Type 10 (RemoteInteractive):</strong> En sevilen hacker girişidir. Uzak Masaüstü (RDP) ile yapılan bağlantıyı simgeler.</li>
        <li><strong>Logon Type 4 (Batch):</strong> Planlanmış görevler (Scheduled Tasks) tarafından kullanılır.</li>
      </ul>

      <div class="bg-red-500/10 p-6 rounded-xl my-8 border border-red-500/20">
        <h4 class="text-red-400 font-bold mb-2">Tehlike Sinyali:</h4>
        <p>Normalde sadece ofis saatlerinde çalışan bir personelin gece yarısı "Logon Type 10" (RDP) kaydı oluşturması, hesabın ele geçirildiğinin %99 kanıtıdır. ACKLOG UEBA modülü bu mesai dışı sapmaları anında yakalar.</p>
      </div>

      <h3>Problem Çözme: Neden Çok Fazla 4624 Logu Var?</h3>
      <p>Sunucularda saniyede yüzlerce 4624 görebilirsiniz. Çoğu sistem servislerinin (SYSTEM, NETWORK SERVICE) kendi iç haberleşmesidir. SIEM üzerinde 'Noise Reduction' yaparak sadece gerçek kullanıcı loginlerini filtrelemek performansınız için kritiktir.</p>

      <p><strong>ACKLOG Insight:</strong> ACKLOG, bu devasa log yığınını otomotik süzerek size sadece 'Gerçek Kişi' oturumlarını ve şüpheli kaynak IP'leri dashboardda gösterir. Manuel 4624 takibi imkansızdır, ACKLOG ile odaklanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "loglar-diskte-cok-yer-kapliyor-ne-yapmaliyim": {
    title: "Loglar Diskte Çok Yer Kaplıyor! Disk Doluluk Sorunu ve Çözümü",
    description: "SIEM sistemlerinde disk doluluk sorunlarını giderme, log rotasyonu ve arşivleme stratejileri.",
    content: `
      <h2>Kapasite Sorunu: Log Yönetiminde Disk Yönetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>SIEM sistemlerinde en sık karşılaşılan sorun disk alanının hızla dolmasıdır. Disk dolar ise log akışı durur ve yasal (5651) olarak suçlu duruma düşebilirsiniz.</p>
      
      <h3>Acil Müdahale ve Kalıcı Çözümler</h3>
      <ul class="list-decimal pl-6 space-y-4 mb-6">
        <li><strong>Log Retention (Saklama Süresi):</strong> Yasal olarak 2 yıl saklamanız gereken logları 'Hot storage'da (Hızlı disk) değil, 'Cold storage'da (Arşiv/Yavaş disk) tutun.</li>
        <li><strong>Filtering (Filtreleme):</strong> Gereksiz logları (örn: Firewall'daki 'Allow' trafiği) daha SIEM'e girmeden kaynağından kapatın.</li>
        <li><strong>Compression (Sıkıştırma):</strong> Logları ham metin değil, sıkıştırılmış formatta saklayan bir SIEM (ACKLOG gibi) kullanın.</li>
      </ul>

      <p><strong>ACKLOG Akıllı Arşiv:</strong> ACKLOG, logları %90 oranında sıkıştırarak saklar. Disk dolmaya yaklaştığında sizi uyarır ve eski logları otomatik olarak düşük maliyetli yedekleme ünitelerine (NAS/S3) taşır. Manuel disk boşaltma devri kapandı, ACKLOG ile kesintisiz loglamaya geçin.</p>
    `
  },
  "fortigate-syslog-gonderilemedi-hatasi-cozumu": {
    title: "Fortigate Syslog Gönderilemedi Hatası ve Çözüm Yolları",
    description: "Fortigate firewall loglarının SIEM dashboard'una düşmeme nedenleri ve adım adım debug rehberi.",
    content: `
      <h2>Bağlantı Sorunu: Fortigate Loglarım Neden Gelmiyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Fortigate yapılandırmanızı yaptınız ama SIEM tarafında log göremiyorsunuz. Bu durum genellikle ağdaki bir engelden veya cihaz ayarlarından kaynaklanır.</p>
      
      <h3>Debug Checklist</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>UDP 514 Portu:</strong> Aradaki switch veya başka bir firewall bu portu engelliyor mu?</li>
        <li><strong>Reliable Logging:</strong> 'Reliable' seçeneği seçiliyse ve SIEM cevap vermiyorsa log akışı durur.</li>
        <li><strong>Source IP:</strong> Fortigate'in hangi portundan (Management vs LAN) log gönderdiğini kontrol edin.</li>
      </ul>

      <p><strong>Teknik Komut (CLI):</strong> <code>diagnose log syslogd status</code> komutuyla log durumuna bakın. Fortigate log yönetiminde tek tuşla entegrasyon için ACKLOG'un hazır 'FGT Connector' modülünü kullanın. Manuel debug ile uğraşmayın, ACKLOG ile 1 dakikada yayına geçin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "linux-auth-log-bos-gorunuyor-neden": {
    title: "Linux /var/log/auth.log Boş Görünüyor! Çözüm Rehberi",
    description: "Linux sunucularda kimlik doğrulama loglarının yazılmama sorunları ve rsyslog yapılandırması.",
    content: `
      <h2>Log Kaybı: Linux Auth.log Neden Yazmıyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Linux sistemlerde (Ubuntu, Debian vb.) tüm login denemeleri <code>/var/log/auth.log</code> dosyasına yazılır. Eğer bu dosya boşsa, sisteminiz kör uçuşu yapıyor demektir.</p>
      
      <h3>Olası Nedenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Rsyslog Servisi:</strong> <code>systemctl status rsyslog</code> komutuyla servisin çalıştığından emin olun.</li>
        <li><strong>Disk Kotası:</strong> /var dizini dolmuş olabilir.</li>
        <li><strong>Permissions:</strong> Dosya izinleri (chmod/chown) bozulmuş olabilir.</li>
      </ul>

      <p><strong>ACKLOG Linux Agent:</strong> ACKLOG, Linux sunucularınıza kurulan hafif bir ajan (agent) ile dosya bazlı değil, doğrudan sistem çağrıları (syscall) seviyesinde log toplar. Dosya silinse dahi loglar ACKLOG güvenliğine ulaşır. Manuel log dosyası tamiriyle vakit kaybetmeyin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "zaman-damgasi-dogrulamasi-basarisiz-hatasi-cozumu": {
    title: "Zaman Damgası Doğrulaması Başarısız Hatası ve Çözümü",
    description: "5651 Sayılı kanun uyumu için kullanılan zaman damgası mühürleme hatalarının teknik analizi.",
    content: `
      <h2>Yasal Risk: Geçersiz Zaman Damgası</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>Zaman damgası, logun o tarihte var olduğunun ispatıdır. Eğer doğrulama (validation) başarısız oluyorsa, o log mahkemede delil olarak kabul edilmez.</p>
      
      <h3>Hatanın Kaynakları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Sistem Saati (NTP):</strong> SIEM cihazınızın saati ile Türkiye saati (TRT) arasında fark varsa damgalama hatalı olur.</li>
        <li><strong>Kontör Bitmesi:</strong> KamuSM veya diğer sağlayıcılardaki zaman damgası kontörünüz bitmiş olabilir.</li>
        <li><strong>Sertifika Güncelliği:</strong> Kullanılan mühürleme sertifikasının süresi dolmuş olabilir.</li>
      </ol>

      <p><strong>ACKLOG Auto-Sync:</strong> ACKLOG, NTP sunucularıyla her dakika senkronize olur ve kontörünüz bitmeden 1 ay önce size haber verir. Manuel damgalama takibiyle yasal riske girmeyin, ACKLOG ile %100 güvende kalın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "sql-injection-saldirisi-loglarda-nasil-gorunur": {
    title: "SQL Injection Saldırısı Loglarda Nasıl Görünür? Analiz Rehberi",
    description: "Web sunucusu (IIS/Apache/Nginx) loglarında SQLi atak belirtilerini yakalama teknikleri.",
    content: `
      <h2>Saldırı Tespiti: Loglardaki SQLi Ayak İzleri</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Hackerlar veritabanınızı çalmak için SQL Injection (SQLi) yapar. Bu saldırılar web loglarınızda (Access Log) çok net ama gizli karakterlerle görünür.</p>
      
      <h3>Loglardaki Karakterler</h3>
      <p>URL içinde şunları görüyorsanız saldırı altındasınız:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-red-400">
        <li><code>' --</code> (Yorum satırı)</li>
        <li><code>UNION SELECT</code> (Veri çekme girişimi)</li>
        <li><code>%27, %20</code> (Encoded karakterler)</li>
      </ul>

      <p><strong>ACKLOG Web Guard:</strong> ACKLOG, gelen her HTTP isteğini 'Pattern Matching' (Desen Eşleştirme) ile tarar. Bir SQLi girişimi saptadığında saldırgan IP'yi anında bloklar ve adli raporunu hazırlar. Manuel log okuyarak hacklenmeyi beklemeyin, ACKLOG ile önleyin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "siem-dashboard-yavas-yukleniyor-cozumu": {
    title: "SIEM Dashboard Yavaş Yükleniyor! Performans Optimizasyonu",
    description: "SIEM ekranlarındaki gecikmeleri giderme, indexleme ve arama hızlandırma stratejileri.",
    content: `
      <h2>Performans Kaybı: SIEM Neden Yavaşlar?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>SIEM sistemi terabaytlarca veri ile uğraşır. Eğer bir sorgu (query) 10 saniyeden uzun sürüyorsa, altyapınızda bir 'darboğaz' vardır.</p>
      
      <h3>Hızlandırma İpuçları</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Indexing:</strong> En çok aranan alanları (IP, User, Port) öncelikli indexleyin.</li>
        <li><strong>Hardware:</strong> RAM yetersizliği 'Swap' kullanımına neden olur, bu da sistemi kilitler.</li>
        <li><strong>Sorgu Sadeleştirme:</strong> Wildcard (* karakteri) aramalarından kaçının.</li>
      </ul>

      <p><strong>ACKLOG Big Data Engine:</strong> ACKLOG, 'Elastic' tabanlı olmayan, kendi geliştirdiği özel veri motoruyla milyarlarca log içinde milisaniye hızında arama yapar. Dashboardlarınız log yükü ne olursa olsun saniyeler içinde açılır. Yavaş SIEM sistemleriyle vakit kaybetmeyin.</p>
    `
  },
  "cisco-router-logging-buffered-komutu-calismiyor": {
    title: "Cisco Router 'logging buffered' Komutu Çalışmıyor Mu?",
    description: "Cisco cihazlarda logları bellekten okuma sorunları ve doğru yapılandırma adımları.",
    content: `
      <h2>Network Troubleshoot: Cisco Log Belleği Sorunları</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Cisco ağ cihazlarında <code>show logging</code> dediğinizde log gelmiyorsa, belleğe yazma özelliği (buffering) kapalı olabilir veya boyutu yetersizdir.</p>
      
      <h3>Çözüm Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><code>logging buffered 16383</code> komutuyla bellek boyutunu artırın.</li>
        <li><code>no logging console</code> komutuyla kaynak tüketimini azaltın.</li>
      </ul>

      <p><strong>ACKLOG Network-Centric:</strong> Cisco loglarınızı Router üzerinde bırakmak güvenli değildir. ACKLOG'un SNMP ve Syslog modülleriyle Router loglarınızı merkezi dashboardda izleyin. Cihaz kapansa da loglarınız ACKLOG'da kalsın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "eps-siniri-asildiginda-loglar-kaybolur-mu": {
    title: "EPS Sınırı Aşıldığında Loglar Kaybolur Mu? Lisans Limitleri",
    description: "SIEM sistemlerinde EPS (Events Per Second) kısıtlamaları ve veri kaybını önleme yolları.",
    content: `
      <h2>Kritik Soru: EPS Limiti Veri Siltir Mi?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>Çoğu yabancı SIEM (QRadar, Splunk vb.) EPS bazlı lisanslanır. Eğer saniyede 1000 log alma limitiniz varsa ve bir saldırı anında 5000 log gelirse, aradaki 4000 log 'çöpe' gider. Bu, bir saldırı anında kör kalmak demektir.</p>
      
      <h3>ACKLOG'un Farkı</h3>
      <div class="bg-green-500/10 p-6 rounded-xl my-8 border border-green-500/20">
        <h4 class="text-green-400 font-bold mb-2">ACKLOG Unlimited EPS:</h4>
        <p>ACKLOG'da EPS kısıtlaması yoktur. Donanımınız yettiği sürece tüm logları alırız. Veri kaybı (Log dropping) riskini ACKLOG ile sıfırlayın. Bir saldırı anında en çok loga ihtiyaç duyduğunuzda ACKLOG sizi yarı yolda bırakmaz.</p>
      </div>

      <p>Manuel log süzme ve EPS hesabı yapmayı bırakın, ACKLOG ile %100 kapsama alanına girin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "ssl-sertifikasi-guven-iliskisi-hatasi-cozumu": {
    title: "SSL Sertifikası Güven İlişkisi Hatası ve Web Log Analizi",
    description: "Https tabanlı sistemlerde sertifika hatalarının siber güvenlik ve loglama boyutu.",
    content: `
      <h2>Güvenli Bağlantı Sorunu: SSL Errors</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Sisteminizde 'SSL Handshake Failed' hatası görüyorsanız, bu hem bir kullanıcı hatası hem de bir 'Man-in-the-Middle' saldırısı işareti olabilir.</p>
      
      <h3>Nedenleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-400">
        <li>Sertifika süresinin dolması.</li>
        <li>Ara sunucuların (Proxy) mıncıkladığı trafik.</li>
        <li>Eski TLS sürümlerinin (TLS 1.0/1.1) kullanımı.</li>
      </ul>

      <p><strong>ACKLOG SSL Checker:</strong> ACKLOG, ağınızdaki sertifika sürelerini otomatik takip eder ve bitişe 30 gün kala sizi uyarır. SSL loglarındaki anomalileri yakalayarak verilerinizin şifreli ve güvenli gittiğinden emin olmanızı sağlar. ACKLOG ile SSL karmaşasına son verin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  }
};
