export const networkOpsSecurityArticles = {
  "ag-trafigi-izleme-araclari-network-sniffer": {
    title: "Ağ Trafiği İzleme Araçları (Network Sniffer) ve Paket Analizi Rehberi",
    description: "Wireshark ötesinde profesyonel şüpheli trafik analizi yöntemleri, L7 görünürlük ve ağ güvenliği.",
    content: `
      <h2>Ağ Görünürlüğü: Veri Paketlerinin Gizemini Çözün</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Ağ trafiği izleme, bir BT yöneticisinin "gözü" gibidir. Ağınızdan geçen veriyi görmüyorsanız, onu yönetemez ve koruyamazsınız. Çoğu yönetici sadece Wireshark bilir ancak Wireshark anlık bir araçtır; oysa kurumsal ağlarda **geçmişe dönük (historical)** trafik analizi hayat kurtarır.</p>
      
      <h3>Analiz Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>NetFlow/IPFIX:</strong> Trafiğin hacmi, kaynağı ve hedefi hakkında istatistiksel bilgi toplar.</li>
        <li><strong>Deep Packet Inspection (DPI):</strong> Paketin sadece başlığına değil, içeriğine bakarak hangi uygulamanın (Facebook, SQL, Torrent) kullanıldığını saptar.</li>
        <li><strong>Port Mirroring (SPAN):</strong> Switch üzerindeki trafiğin bir kopyasını analiz için başka bir cihaza yönlendirir.</li>
      </ul>

      <p><strong>Manuel Analizin Zorlukları:</strong> Trilyonlarca paket içinden "Şüphe uyandıran" tek bir paketi manuel bulmak imkansızdır. Ayrıca ağ cihazlarının (Switch/Firewall) kendi bellekleri sınırlıdır ve geçmiş trafiği tutamazlar.</p>
      
      <p><strong>ACKLOG Çözümü:</strong> ACKLOG, ağınızdaki akış verilerini (Flow) ve logları birleştirerek size devasa bir trafik haritası sunar. "Kim nereye bağlandı?" sorusuna tek tıkla cevap verir. Olağandışı bir trafik fırtınası gördüğünde size otomatik alarm gönderir. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, trafiğinizi saniyeler içinde analiz edin ve kanıtlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "hangi-uygulama-interneti-yavaslatiyor": {
    title: "Hangi Uygulama İnterneti Yavaşlatıyor? Bant Genişliği Analizi ve Çözüm",
    description: "Cloud backup mı yoksa gizli bir download mı? İnternet trafiği tespiti ve kullanıcı bazlı raporlama.",
    content: `
      <h2>İnternet Yavaşlığı: Sorunun Kaynağını Bulun</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>BT departmanlarına gelen en yaygın şikayet: "İnternet çok yavaş!". Genellikle sorun servis sağlayıcıda değil, içerideki bir kullanıcının veya bir sunucunun kontrolsüz bant genişliği tüketimidir. 100 Mbps hattın tamamını tek bir kişi bitiriyor olabilir.</p>
      
      <h3>Nasıl Tespit Edilir?</h3>
      <p>Firewall logları üzerinden 'Top Usage' (En çok kullanım) raporu almanız gerekir. Ancak sadece "IP 192.168.1.50 çok veri çekiyor" demek yetmez. Bu IP o an ne yapıyor? Bir Windows güncellemesi mi çekiyor, yoksa şirket verilerini yasa dışı bir bulut deposuna mı yüklüyor?</p>

      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>L7 (Layer 7) Denetimi:</strong> Uygulama bazlı (HTTPS, Netflix, SSH) takip.</li>
        <li><strong>QoS Politikaları:</strong> Önemli trafiğe (Zoom, SAP) öncelik verme.</li>
        <li><strong>Zaman Bazlı İzleme:</strong> Mesai saatlerinde hattı kimin doyurduğunu raporlama.</li>
      </ul>

      <p><strong>ACKLOG Farkı:</strong> Manuel log taramakla vakit kaybetmeyin. ACKLOG SIEM, internet hattınızı yoran uygulamaları ve kullanıcıları canlı olarak dashboardda listeler. Yasal uyumluluk için bu trafik kayıtlarını 5651 kapsamında imzalar ve saklar. ACKLOG ile internetinizi kimin yediğini saniseler içinde bulun.</p>
    `
  },
  "anormal-trafik-artisi-tespiti": {
    title: "Anormal Trafik Artışı Tespiti: Ağınızda DDoS saldırısı mı var?",
    description: "Saniyedeki paket sayısındaki (PPS) ani artışları anlama, botnet tespiti ve önleme stratejileri.",
    content: `
      <h2>Trafik Anomali Analizi: Görünmez Tehditler</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Bir sabah ofise geldiğinizde internetin tamamen kesik olduğunu görebilirsiniz. Bu bir altyapı sorunu değil, ağınıza yönelik bir DDoS saldırısı veya içeriden yayılan bir solucan (Worm) olabilir. Anormal trafik artışlarını (Anomalies) tespit etmek, siber savunmanın en kritik safhasıdır.</p>
      
      <h3>Belirtiler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Firewall CPU kullanımının %90 üzerine çıkması.</li>
        <li>İç ağda (LAN) saniyede binlerce ARP isteğinin dolaşması.</li>
        <li>TCP 'Half-Open' bağlantı sayısındaki patlama.</li>
      </ul>

      <p><strong>Manuel Takip İle Geç Kalırsınız:</strong> Saldırı başladıktan sonra loglara bakmak, ev yandıktan sonra sigortaya başvurmak gibidir. ACKLOG'un 'Trafik Eşik Değeri' (Threshold) alarmları, normal trafiğinizin %30 üzerine çıkıldığı anda telefonunuza bildirim gönderir. ACKLOG ile saldırıyı başlamadan durdurun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "ic-agda-lan-port-taramasi-yapan-ip-bulma": {
    title: "İç Ağda (LAN) Port Taraması Yapan IP'yi Bulma ve İzole Etme",
    description: "Bir cihazınız hacklendi ve diğerlerini mi tarıyor? Yanal hareket (Lateral Movement) tespiti ve güvenliği.",
    content: `
      <h2>İç Ağdaki Casusu Yakalayın: Port Scanning</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Bir siber saldırgan ağınıza tek bir kullanıcı bilgisayarı üzerinden girer. Oradan diğer bilgisayarlara ve sunuculara yayılmak için (Lateral Movement) önce ağda ne olduğunu keşfetmek zorundadır. Bu işi yapan araçlara (nmap vb.) port tarayıcı denir.</p>
      
      <h3>Nasıl Yakalanır?</h3>
      <p>Bir bilgisayarın saniyeler içinde onlarca farklı IP'ye ve porta (80, 443, 3389 vb.) bağlanmaya çalışması doğal bir hareket değildir. Switch veya Firewall loglarında peş peşe gelen 'Dropped' veya 'Denied' kayıtları bunun kanıtıdır.</p>

      <p><strong>ACKLOG Korelasyonu:</strong> ACKLOG, "Aynı IP'den 1 dakika içinde 100 farklı porta bağlantı girişimi" kuralını otomatik olarak çalıştırır. Saldırganın adımlarını daha ilk keşif aşamasında yakalayarak sistemlerinizi karantinaya alır. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, bu tür olaylar gerçekleştiği anda cep telefonunuza bildirim alabilir ve yasal olarak imzalanmış kanıtlar biriktirebilirsiniz.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "switch-loglarini-merkezi-bir-yerde-toplama": {
    title: "Switch Loglarını Merkezi Bir Yerde Toplama ve Analiz Rehberi",
    description: "Cisco, HP, Aruba switch loglarını Syslog ile SIEM'e çekme ve Omurga Güvenliği stratejileri.",
    content: `
      <h2>Omurga Güvenliği: Switch Loglarının Önemi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Genellikle BT yöneticileri Firewall loglarına odaklanır ancak asıl hareket omurga switchlerde döner. Bir kullanıcının kabloyu başka bir porta takması, ağda loop (döngü) oluşması veya bir portun 'Security Violation' nedeniyle kapanması, switch loglarında gizlidir.</p>
      
      <h3>Neden Merkezi Bir Yer?</h3>
      <p>Switchlerin kendi hafızaları (buffer) çok küçüktür. Bir elektrik kesintisinde veya cihaz yeniden başladığında tüm loglar silinir. Ayrıca kritik bir olay anında 20 farklı switch'e tek tek 'logon' olup SSH ile bakmak tam bir zaman kaybıdır.</p>

      <h3>İzlenmesi Gereken Kritik Olaylar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Port Status Changes:</strong> Up/Down olan portlar (Fiziksel müdahale tespiti).</li>
        <li><strong>Port Security Violations:</strong> MAC adresi eşleşmemesi nedeniyle kapanan portlar.</li>
        <li><strong>STP (Spanning Tree) Değişimleri:</strong> Ağda loop veya yapılandırma hatası belirtileri.</li>
        <li><strong>Admin Logon:</strong> Cihaz yönetimine yetkisiz erişim denemeleri.</li>
      </ul>

      <p><strong>ACKLOG Çözümü:</strong> ACKLOG SIEM, tüm switch loglarını Syslog üzerinden merkezi bir dashboarda taşır. "Oda 3'teki switch portu kapandı" uyarısını tek bir ekran üzerinden görün. Manuel log takibi yerine ACKLOG ile omurga güvenliğinizi zırhlayın ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> yasasına uygun şekilde tüm işlem kayıtlarını mühürleyip saklayın.</p>
    `
  },
  "firewall-uzerinden-gecen-trafik-analizi": {
    title: "Firewall Üzerinden Geçen Trafik Analizi: Dropped vs Permitted",
    description: "Hangi kurallar en çok trafiğe neden oluyor? Kural optimizasyonu ve engellenen saldırıları görme.",
    content: `
      <h2>Firewall Analizi: Kural Karmaşasından Kurtulun</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Firewall kuralları zamanla birikir ve hangisinin ne işe yaradığı unutulur. Gereksiz açık bırakılmış bir "Any-Any" kuralı, tüm güvenliğinizi sıfıra indirebilir. Log analizi yaparken sadece izin verilen değil, engellenen (Drop) trafikleri incelemek size saldırı rotasını gösterir.</p>
      
      <h3>Optimizasyon İpuçları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Unused Rules:</strong> Hiç trafik geçmeyen kuralları silerek saldırı yüzeyini daraltın.</li>
        <li><strong>Shadow Rules:</strong> Üstteki geniş bir kuralın altında ezilen özel kuralları bulun.</li>
        <li><strong>Deny Logları:</strong> Hangi dış IP'ler sizi sürekli "tokatlıyor"? Bu IP'leri ACKLOG ile kalıcı bloklayın.</li>
      </ul>

      <p><strong>ACKLOG Insight:</strong> ACKLOG, firewall loglarını temiz ve anlamlı bir "Trafik Akışı"na dönüştürür. "Bugün en çok hangi kural tetiklendi?" sorusuna anında cevap verir. Manuel kontrollerle risk almayın, ACKLOG ile firewall'unuzun gerçek performansını ve güvenliğini ölçün.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "wi-fi-sifresini-kimler-biliyor": {
    title: "Wi-Fi Şifresini Kimler Biliyor? (Misafir Ağ Takibi ve Güvenlik Rehberi)",
    description: "Kurumsal kablosuz ağlarda izinsiz cihaz tespiti, Radius loglama ve güvenli Wi-Fi stratejileri.",
    content: `
      <h2>Wi-Fi Güvenliği: Kablosuz Sınırlarda Koruma</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Şirket Wi-Fi şifresi elden ele dolaşabilir veya ayrılan bir personel şifreyi hala biliyor olabilir. Misafir ağınız (Guest Wi-Fi) ile ana ağınız arasında bir sızıntı varsa, verileriniz tehlikededir.</p>
      
      <h3>Güvenli Wi-Fi İçin 3 Altın Kural</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>WPA3 ve 802.1X (Radius):</strong> Ortak şifre yerine herkesin kendi kullanıcı adı ve şifresiyle bağlandığı bir sistem kurun.</li>
        <li><strong>İzleme:</strong> Radius sunucu loglarını mutlaka merkezi bir SIEM'e (ACKLOG) aktarın.</li>
        <li><strong>Cihaz Filtreleme:</strong> Sadece şirket envanterindeki cihazların ağa girmesine izin verin.</li>
      </ol>

      <p><strong>ACKLOG Wireless Monitoring:</strong> ACKLOG, Radius loglarını analiz ederek "Şu personelin hesabı ile dün gece 3 farklı cihaz bağlandı" anomalisini anında yakalar. Manuel olarak Wi-Fi panelinden mac adreslerine bakmak yerine, ACKLOG ile kurumsal görünürlük kazanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "bant-genisligi-bandwidth-raporlama-araclari": {
    title: "Bant Genişliği (Bandwidth) Raporlama Araçları ve Kapasite Planlama",
    description: "İnternet hattınızı büyütmeli misiniz? Verilere dayalı karar verin ve maliyetleri düşürün.",
    content: `
      <h2>Kapasite Planlama: Doğru Yatırım İçin Raporlama</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>İnternet faturanız her ay artıyor ama hızı hala yetmiyor mu? Sorun hattın küçüklüğü değil, trafiğin kötü yönetimi olabilir. Kapasite planlaması yapmadan alınan her 100 Mbps, boşa harcanmış paradır.</p>
      
      <h3>Doğru Bir Rapor Neleri İçermeli?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Peak Hours:</strong> Hattın en çok doygunluğa ulaştığı saatler.</li>
        <li><strong>Uygulama Dağılımı:</strong> %40 Video, %30 Sosyal Medya mı, yoksa %80 Veritabanı mı?</li>
        <li><strong>Kullanıcı Bazlı Analiz:</strong> En çok bant genişliği tüketen ilk 10 kullanıcı.</li>
      </ul>

      <p><strong>ACKLOG Bandwidth Manager:</strong> Manuel rapor araçları tek boyutludur. ACKLOG, kapasite raporlarını hem tarihsel hem de uygulama bazlı sunarak yönetime sunacağınız gerçek tabloyu hazırlar. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, yatırım maliyetlerinizi veriyle optimize edin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "dns-sorgularini-izleme-ve-engelleme": {
    title: "DNS Sorgularını İzleme ve Engelleme: Veri Kaçırma (Exfiltration) Tespiti",
    description: "Zararlı sitelere giden istekleri yakalayın, DNS tünelleme saldırılarını durdurun.",
    content: `
      <h2>DNS Güvenliği: Siber Yol Haritası</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Saldırganlar veriyi firewall'dan kaçıramadıklarında, "DNS Tünelleme" yöntemini kullanırlar. DNS trafiği genellikle "güvenli" kabul edildiği için çoğu BT yöneticisi tarafından izlenmez. Oysa her zararlı yazılım (Malware) komuta kontrol merkezine gitmek için önce bir DNS sorgusu yapar.</p>
      
      <h3>İzlenmesi Gereken Çizgi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Şüpheli Domainler:</strong> Yeni tescil edilmiş veya anlamsız isimlere (örn: xz12-as99.com) giden istekler.</li>
        <li><strong>Sıra Dışı Paket Boyutu:</strong> DNS paketi içinde veri (text) saklama girişimleri.</li>
        <li><strong>Yüksek Sorgu Sayısı:</strong> Tek bir bilgisayardan saniyede binlerce farklı DNS isteği.</li>
      </ul>

      <p><strong>ACKLOG Çözümü:</strong> ACKLOG, DNS sunucu loglarınızı (Windows DNS, BIND veya Firewall DNS) anlık tarar ve dünya genelindeki "Zararlı Domain" listeleriyle karşılaştırır. Manuel olarak DNS loglarına bakmak imkansızdır. ACKLOG ile DNS trafiğinizi siber kalkan haline getirin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "supheli-ip-adresleri-listesi-threat-intelligence": {
    title: "Şüpheli IP Adresleri Listesi (Threat Intelligence) Nedir ve Nasıl Kullanılır?",
    description: "Siber istihbarat verileriyle sistemlerinizi nasıl korursunuz? Güncel zararlı IP takibi rehberi.",
    content: `
      <h2>Siber İstihbarat: Tehlikeyi Önceden Bilin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Siber saldırılar tek bir merkeze değil, dünyaya yayılır. Bugün Amerika'da bir sisteme saldıran IP adresi, yarın sizin ağınıza yönelebilir. Bu IP'lerin bilgisini önceden alıp engellemeye **Threat Intelligence (Siber İstihbarat)** denir.</p>
      
      <h3>İstihbarat Kaynakları</h3>
      <p>Binlerce açık kaynak (OSINT) ve ücretli servis zararlı IP listeleri yayınlar. Bir BT yöneticisinin bu listeleri her gün takip edip firewall'a manuel eklemesi fiziksel olarak mümkün değildir.</p>

      <p><strong>ACKLOG Otomatik Güncelleme:</strong> ACKLOG, global 'Threat Intel' ağlarına (Alienvault, OTX, Talos vb.) doğrudan bağlıdır. Yeni bir zararlı IP tespit edildiği anda ACKLOG bunu öğrenir ve sizin sisteminize bu IP'den bir istek geldiğinde anında "Kırmızı Alarm" verir. Manuel kontrollerle vakit kaybetmeyin, siber istihbaratın gücünü ACKLOG ile arkanıza alın.</p>
    `
  },
  "bt-departmani-haftalik-faaliyet-raporu-ornegi": {
    title: "BT Departmanı Haftalık Faaliyet Raporu Örneği ve Otomasyon Rehberi",
    description: "Yönetime sunabileceğiniz profesyonel bir örnek IT raporu dökümü ve otomasyon yöntemleri.",
    content: `
      <h2>Görünürlük Kazanın: Profesyonel BT Raporlama</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Eğer yönetime ne yaptığınızı raporlamıyorsanız, BT departmanı sadece "sorun çıktığında hatırlanan" bir yer olarak kalır. İyi bir rapor, hem başarılarınızı (engellenen saldırılar) hem de ihtiyaçlarınızı (ek bütçe gereksinimi) verilerle anlatmalıdır.</p>
      
      <h3>Raporun İçeriği (Altın Liste)</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Güvenlik Özeti:</strong> Engellenen virüsler, durdurulan RDP saldırıları.</li>
        <li><strong>Performans:</strong> İnternet ve sunucu uptime (çalışma süresi) oranları.</li>
        <li><strong>Operasyon:</strong> Çözülen bilet (ticket) sayısı ve ortalama çözüm süresi.</li>
      </ul>

      <p><strong>ACKLOG İle Otomatik Raporlama:</strong> Manuel rapor yazmak BT ekibinin haftada bir tam gününü alabilir. ACKLOG SIEM, tüm verileri (User, Network, Server) harmanlar ve her Pazartesi sabah 09:00'da yönetici masasına PDF formatında 'Haftalık Güvenlik ve Operasyon Karnesi'ni bırakır. Siz işinize odaklanın, raporu ACKLOG yazsın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "sistem-odasi-sicaklik-ve-nem-takibi-loglama": {
    title: "Sistem Odası Sıcaklık ve Nem Takibi: Neden Loglanmalıdır? (Fiziksel Güvenlik)",
    description: "Fiziksel çevre birimlerini merkezi izleme sistemiyle takip etme ve sensör loglama önemi.",
    content: `
      <h2>Fiziksel Güvenlik: Loglama Sadece Yazılımla Olmaz</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>En pahalı firewall'u alsanız dahi, sistem odasındaki bir klima arızası sunucularınızın yanmasına neden olabilir. Sistem odası sıcaklığı ve nem seviyesi, iş sürekliliğinin fiziksel temelidir.</p>
      
      <h3>Loglamanın Avantajları</h3>
      <p>Sadece "Şu an kaç derece?" diye bakmak yetmez. Sıcaklık artış trendini loglardan izleyerek klimanın gazının bittiğini veya fanın tozlandığını önceden anlayabilirsiniz (Predictive Maintenance).</p>

      <p><strong>ACKLOG IoT Entegrasyonu:</strong> ACKLOG, endüstriyel sensörlerden (Temperature logger, Humidity sensor) gelen verileri Syslog veya SNMP üzerinden toplar. Kritik eşik aşıldığında (Örn: 25 Derece) BT ekibine anlık uyarı gönderir. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, fiziksel güvenliğinizi de dijital olarak takip edin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "envanter-yonetimi-ve-yazilim-lisans-takibi": {
    title: "Envanter Yönetimi ve Yazılım Lisans Takibi Otomasyonu Rehberi",
    description: "Cihazlarda hangi yazılımlar yüklü? Manuel Excel takibine son verin, siber riski azaltın.",
    content: `
      <h2>BT Varlık Yönetimi: Bilmediğiniz Cihazı Koruyamazsınız</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Ağınızda kaç adet laptop var? Kaç tanesinde lisanssız Office yüklü? Bu soruların cevabı Excel dosyalarında kalıyorsa, envanteriniz güncel değildir. Lisanssız yazılımlar sadece hukuki risk değil, içine gizlenmiş 'Backdoor'lar nedeniyle ciddi siber riskler de taşır.</p>
      
      <h3>Nasıl Yapılır?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Software Inventory:</strong> Tüm uç noktalarda yüklü programları listeleme.</li>
        <li><strong>Hardware Inventory:</strong> RAM artışları, disk değişimleri veya yeni takılan cihazlar.</li>
        <li><strong>Compliance:</strong> Şirket politikasına aykırı yazılım (Torrent, Oyun) tespiti.</li>
      </ul>

      <p><strong>ACKLOG Asset Discovery:</strong> ACKLOG, ağınıza dahil olan her yeni cihazı otomatik keşfeder ve içindeki yazılımları raporlar. Manuel envanter tutma çilesinden kurtulun, ACKLOG ile ağınızın tam röntgenini çekin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "itil-sureclerinde-olay-yonetimi": {
    title: "ITIL Süreçlerinde Olay Yönetimi (Incident Management) ve SIEM Rolü",
    description: "Problemleri nasıl çözersiniz ve siber olaylara nasıl müdahale edersiniz? İş sürekliliği stratejileri.",
    content: `
      <h2>ITIL Uyumlu BT Yönetimi: Kesintisiz Hizmet</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>ITIL (Information Technology Infrastructure Library), BT hizmetlerinin dünya standardıdır. Bu süreçte "Olay Yönetimi", hizmetin bir an önce normale döndürülmesi sürecidir. Peki bir olay (Incident) gerçekleştiğini nasıl anlarsınız?</p>
      
      <h3>SIEM ve ITIL Sinerjisi</h3>
      <p>Çoğu zaman olay BT ekibine kullanıcı telefonuyla ulaşır ("Email çalışmıyor!"). Oysa SIEM kullanıyorsanız, Email sunucusundaki disk dolmak üzereyken olay **daha gerçekleşmeden** teşhis edilir (Proactive Monitoring).</p>

      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Detection:</strong> Olayın ACKLOG tarafından anlık saptanması.</li>
        <li><strong>Categorization:</strong> Olayın ciddiyet derecesinin (High/Low) atanması.</li>
        <li><strong>Root Cause Analysis:</strong> Loglar üzerinden problemin asıl kaynağının bulunması.</li>
      </ul>

      <p><strong>ACKLOG Farkı:</strong> Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile kurumsal SLAsürelerinizi (Servis Seviyesi Hedefleri) garanti altına alın. Olayları kullanıcıdan önce görün.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "servis-seviyesi-sozlesmesi-sla-takibi": {
    title: "Servis Seviyesi Sözleşmesi (SLA) Takibi Nasıl Yapılır? (BT Yönetim Rehberi)",
    description: "Hizmet sağlayıcılarınızın (ISP, Veri Merkezi vb.) performansını denetleme ve raporlama rehberi.",
    content: `
      <h2>SLA Denetimi: Hizmet Kalitenizi Ölçün</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Şirketiniz internet veya bulut hizmeti alırken "Ayda en fazla 5 dakika kesinti" (99.9% uptime) sözü almış olabilir. Peki bu sözün tutulduğunu nasıl biliyorsunuz? Çoğu BT yöneticisi hizmet sağlayıcının kendi portalındaki raporlara güvenir; oysa bağımsız bir denetim şarttır.</p>
      
      <h3>Kritik Metrikler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Availability (Erişilebilirlik):</strong> Hattın gerçekten açık kaldığı süre.</li>
        <li><strong>Latency (Gecikme):</strong> Bağlantı kalitesindeki düşüşler.</li>
        <li><strong>MTTR (Mean Time to Repair):</strong> Arızaya müdahale ve çözüm süresi.</li>
      </ul>

      <p><strong>ACKLOG SLA Dashboard:</strong> ACKLOG, tüm dış servis bağlantılarınızı 7/24 pingler ve trace-route yapar. Ay sonunda "Servis sağlayıcımız bu ay %2 oranında sözleşme dışı kesinti yaşattı" diyebilecek veriyi size sunar. ACKLOG ile hakkınızı verilere dayalı savunun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "help-desk-performans-olcumu": {
    title: "Help Desk Performans Ölçümü ve Analitik Verilerle Yönetim",
    description: "BT destek ekibinizin başarısını rakamlarla ölçün, iş yükünü dengeleyin ve verimliliği artırın.",
    content: `
      <h2>BT Destek Ekibi Yönetimi: Rakamların Gücü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Help Desk ekibiniz çok mu çalışıyor yoksa sadece "yoğun" mu görünüyor? Bunu ölçmenin yolu atılan biletlerin (ticket) sayısından değil, bu biletlerin tipinden ve çözüm hızından geçer.</p>
      
      <h3>Takip Edilmesi Gereken KPI'lar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>First Response Time:</strong> Kullanıcının ilk cevabı alma süresi.</li>
        <li><strong>Re-open Rate:</strong> "Çözüldü" denip tekrar açılan sorunlar (Kalite göstergesi).</li>
        <li><strong>Problem Clustering:</strong> Aynı hatayı alan 50 kişi varsa, bu bir 'Software Bug' veya 'Cyber Attack' işaretidir.</li>
      </ul>

      <p><strong>ACKLOG Entegrasyonu:</strong> ACKLOG, Help Desk yazılımlarınızdaki logları analiz ederek, sistem genelindeki arızalarla bilet yoğunluğu arasındaki bağı kurar. Manuel analizle saatlerinizi harcamayın, ACKLOG ile ekibinizin verimliliğini otomatik dashboardlarda izleyin.</p>
    `
  },
  "sirket-ici-siber-guvenlik-butcesi-hazirlama": {
    title: "Şirket İçi Siber Güvenlik Bütçesi Hazırlama Rehberi ve Yönetimi Etkileme",
    description: "Bütçe onaylatmak için yönetime sunulacak veriler, risk analizleri ve ROI (Yatırım Getirisi) hesabı.",
    content: `
      <h2>Siber Güvenlik Bütçesi: Korkuyla Değil Veriyle Onaylatın</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Yönetime "DDoS saldırısı alabiliriz, hacklenebiliriz" demek artık bütçe almak için yeterli değil. Yöneticiler sayı ve risk analizi görmek ister. "Geçen ay 5000 saldırıyı durdurduk" demekle "Güvenliğe 10 bin dolar lazım" demek arasındaki fark, verinin gücüdür.</p>
      
      <h3>Bütçe Dosyasında Neler Olmalı?</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Mevcut Saldırı İstatistikleri:</strong> ACKLOG'un sunduğu aylık 'Engellenen Saldırı Raporu'.</li>
        <li><strong>Yasal Riskler:</strong> KVKK/5651 uyumsuzluğu durumunda kesilecek ceza tutarları.</li>
        <li><strong>Operasyonel Kayıp:</strong> Sistemin 1 saat kapalı kalmasının şirkete maliyeti.</li>
      </ol>

      <p><strong>ACKLOG İle Bütçe Savunusu:</strong> ACKLOG, size ihtiyacınız olan tüm siber güvenlik metriklerini "Yönetici Özeti" olarak sunar. Bütçenizi onaylatmak için somut risk verileri ACKLOG ile elinizin altında. Manuel verilerle değil, ACKLOG raporlarıyla masaya oturun.</p>
    `
  },
  "siber-sigorta-yaptirmak-icin-gereken-sartlar": {
    title: "Siber Sigorta Yaptırmak İçin Gereken Şartlar ve Loglama Zorunluluğu",
    description: "Siber güvenliğinizi sigortalatırken aranan teknik kriterler ve SIEM/Loglama gereksinimleri.",
    content: `
      <h2>Siber Sigorta: Şartları Karşılıyor musunuz?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Şirketinizi bir siber saldırıya karşı sigortalatmak istediğinizde, sigorta şirketleri sizden bir "Güvenlik Olgunluk Testi" ister. Eğer loglarınız merkezi bir yerde tutulmuyor ve değiştirilemez değilse, sigorta poliçeniz reddedilebilir veya çok yüksek prim çıkar.</p>
      
      <h3>Sigortacıların Beklediği Loglama Standartları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Zaman Damgalı Kayıt:</strong> Logların mühürlü olması (TÜBİTAK/5651 uyumu).</li>
        <li><strong>Uç Nokta Görünürlüğü:</strong> Her bilgisayardaki hareketlerin merkezi takibi.</li>
        <li><strong>Teşhis Hızı:</strong> Bir saldırı olduğunda "ilk giriş noktasını" ne kadar sürede bulabiliyorsunuz?</li>
      </ul>

      <p><strong>ACKLOG İle Hazır Olun:</strong> ACKLOG SIEM, siber sigorta firmalarının aradığı tüm teknik şartları (Logging, Monitoring, Incident Response) eksiksiz karşılar. Sigorta bütçenizi düşürmek ve tam koruma almak için ACKLOG'un yasal loglama altyapısını kullanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "bilgi-islem-denetim-listesi-checklist": {
    title: "Bilgi İşlem Denetim Listesi (Checklist) ve BT Özdenetim Rehberi",
    description: "Denetime girmeden önce yapmanız gereken teknik kontroller, şifre politikaları ve log denetimi.",
    content: `
      <h2>Kalıcı Hazırlık: BT Denetim Listesi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Denetim yılı geldiğinde yaşanan paniği durdurmanın yolu, "Sürekli Özdenetim"dir. Bir denetimde en çok "Evet/Hayır" şeklinde sorulan 20 kritik soru vardır. Bu soruların çoğunun cevabı 'Log Yönetiminiz'dedir.</p>
      
      <h3>Checklist'in En Önemli Maddeleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Yönetici hesapları (Admin) şifreleri düzenli değişiyor mu?</li>
        <li>Kullanıcılar dosya sunucusunda döküman silebiliyor mu (ve loglanıyor mu)?</li>
        <li>Merkezi bir SIEM yazılımı var mı?</li>
        <li>Yedekleme logları her gün kontrol ediliyor mu?</li>
      </ul>

      <p><strong>ACKLOG Compliance Modülü:</strong> ACKLOG, bu checklist'i sizin yerinize 7/24 yapar. Eksik olan bir ayarı (örn: bir bilgisayarda loglamanın kapanması) anında fark eder ve uyarır. Manuel denetim stresinden kurtulun, ACKLOG ile her an denetime hazır olun.</p>
    `
  },
  "is-surekliligi-ve-felaket-kurtarma-senaryolari": {
    title: "İş Sürekliliği ve Felaket Kurtarma (Disaster Recovery) Senaryoları Rehberi",
    description: "Sistemlerinizi en kötü duruma (Yangın, Deprem, Hacker) nasıl hazırlarsınız? Loglamanın rolü.",
    content: `
      <h2>İş Sürekliliği: Felaketten Sonraki İlk Saatler</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Bir yangın veya büyük bir siber saldırı (Ransomware) sonucu tüm verileriniz gittiğinde, elinizde kalan en değerli şey "Loglarınız"dır. Loglar olmadan neyin, ne zaman ve nasıl olduğunu asla bilemezsiniz. Felaket Kurtarma (DR) sadece 'Backup' değil, aynı zamanda 'Görünürlük'tür.</p>
      
      <h3>Başarılı Bir DR Planının Loglama Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Off-site Logging:</strong> Logların ana binadan farklı bir coğrafi konumda (Cloud) saklanması.</li>
        <li><strong>Re-build Logs:</strong> Sistemleri yeniden kurarken hangi yamaların (patch) eksik olduğunu loglardan anlama.</li>
        <li><strong>Adli Kanıt:</strong> Felaketin sebebinin hacklenme mi yoksa donanım arızası mı olduğunu ispatlama.</li>
      </ol>

      <p><strong>ACKLOG Cloud Vault:</strong> ACKLOG, felaket anında dahi erişebileceğiniz dış konumlu log depolama imkanı sunar. Ana sistemleriniz çökse bile ACKLOG buluttaki loglarınızla yolunuzu aydınlatır. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, felaketi sessizce değil, verilerle yönetin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  }
};
