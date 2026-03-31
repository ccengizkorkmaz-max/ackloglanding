export const userDataSecurityArticles = {
  "sunucuda-silinen-dosyalari-kim-sildi": {
    title: "Sunucuda Silinen Dosyaları Kimin Sildiğini Nasıl Görürüm?",
    description: "Windows File Server üzerinde silinen dosyaların izini sürmek. Event ID 4660 ve 4663 ile faili bulma rehberi.",
    content: `
      <h2>Adli Analiz: Sunucuda Silinen Dosyayı Kim Sildi?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Sunucunuzdaki kritik bir Excel dosyası veya proje klasörü aniden yok mu oldu? "Kim sildi?" sorusu sistem yöneticilerinin en çok karşılaştığı kabustur. Eğer önceden 'Audit Policy' yapılandırmadıysanız, geçmişe dönük bunu bulmak imkansızdır. Dosyayı kimin sildiğini bulmak sadece bir merak konusu değil, aynı zamanda veri güvenliği uyumluluğu için de bir zorunluluktur.</p>
      
      <h3>Windows Üzerinde Manuel Takip Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Audit Object Access Etkinleştirme:</strong> Group Policy üzerinden (Computer Configuration > Settings > Security Settings > Advanced Audit Policy) "Audit File System" özelliğini başarı ve başarısızlık durumları için aktif etmelisiniz.</li>
        <li><strong>Klasör Bazlı Denetim:</strong> İlgili klasöre sağ tıklayıp Özellikler > Güvenlik > Gelişmiş > Denetim sekmesinden izlenecek kullanıcı gruplarını eklemelisiniz.</li>
        <li><strong>Event ID 4663:</strong> Bu olay kimliği, bir nesneye erişildiğini (okuma, yazma, silme girişimi) gösterir. "Accesses" kısmında "Delete" ibaresini aramanız gerekir.</li>
        <li><strong>Event ID 4660:</strong> Nesne gerçekten silindiğinde bu ID oluşur. 4663 ile eşleştirerek kimin sildiğini kesinleştirebilirsiniz.</li>
      </ul>

      <div class="bg-blue-500/10 p-4 rounded-lg my-6 border border-blue-500/20">
        <strong>Kritik Uyarı:</strong> Windows Event Viewer üzerinde saniyede yüzlerce log akmaktadır. Manuel olarak bu ID'leri aramak samanlıkta iğne aramaktır ve çoğu zaman loglar üzerine yazıldığı için kanıtlar kaybolur.
      </div>

      <p><strong>Neden SIEM Gereklidir?</strong> Bu tür manuel kontroller, olay gerçekleştikten saatler sonra yapıldığında veri sızıntısının önüne geçemezsiniz. Dijital pazarlamada "Dolaylı Niyet" dediğimiz bu arayışın tek kalıcı çözümü otomatize edilmiş bir izleme sistemidir.</p>

      <p><strong>ACKLOG Çözümü:</strong> ACKLOG SIEM ile "Önemli bir dosya silindiğinde bana anında SMS veya Mail at" kuralını tek tıkla aktif edebilirsiniz. Manuel log taramak yerine, olayı gerçekleştiği anda cep telefonunuzda görün ve yasal olarak imzalanmış (5651 uyumlu) kesin kanıtlar biriktirin.</p>
    `
  },
  "file-server-erisim-loglari-nerede": {
    title: "Dosya Sunucusu (File Server) Erişim Logları Nerede Tutulur?",
    description: "Windows ve Linux dosya sunucusu kayıtlarının depolandığı yerler ve güvenli saklama yöntemleri.",
    content: `
      <h2>Rehber: File Server Loglarının İzini Sürmek</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Kurumsal verilerinizin güvenliği için <strong>file server erişim logları</strong> hayati önem taşır. Ancak bu logların saklandığı yerler işletim sistemine göre farklılık gösterir. Sistem yöneticilerinin bu logların yerini bilmesi kadar, onları nasıl güvenle saklayacaklarını bilmeleri de kritiktir.</p>
      
      <h3>Önemli Log Konumları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Windows Server:</strong> Loglar <code>C:\\Windows\\System32\\winevt\\Logs\\Security.evtx</code> dosyasında saklanır. Event Viewer üzerinden "Security" sekmesinden erişilebilir.</li>
        <li><strong>Linux (Ubuntu/CentOS):</strong> Auditd servisi kurulu ise loglar <code>/var/log/audit/audit.log</code> altındadır.</li>
        <li><strong>Samba (CIFS):</strong> Samba kullanıyorsanız log seviyesine göre <code>/var/log/samba/</code> dizininde kullanıcı bazlı loglar tutulur.</li>
      </ul>

      <p><strong>Karşılaşılan Sorunlar:</strong> Yerel diskler dolmasın diye sistemler genellikle eski logları siler. Bir siber saldırı veya veri ihlali durumunda 1 ay öncesine bakmak istediğinizde logların yerinde yeller estiğini görebilirsiniz. Ayrıca, sunucuya sızan bir saldırganın ilk yapacağı iş bu dosyaları silmektir.</p>
      
      <p><strong>Kesin Çözüm:</strong> ACKLOG SIEM, file server loglarını üretildiği anda "merkezi ve güvenli bir kasaya" (Vault) aktarır. Sunucudaki log silinse dahi ACKLOG üzerinde bu kayıtlar 2 yıl boyunca (veya dilediğiniz süre kadar) TÜBİTAK zaman damgasıyla imzalı şekilde saklanır. Denetimlerden alnınızın akıyla çıkmak için ACKLOG'un merkezi yönetimini kullanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "paylasimdaki-klasore-kim-eristi": {
    title: "Paylaşımdaki Klasöre Kim Erişti? Adım Adım İzleme",
    description: "Network paylaşımlarında (Shared Folders) dosya erişimlerini takip etme teknikleri ve yetki denetimi.",
    content: `
      <h2>Network Paylaşımları ve Şeffaf İzleme</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Şirket içindeki ortak ağ sürücülerinde (Z: sürücüsü gibi) binlerce döküman bulunur. "X klasörüne kim baktı?" veya "Bu dosyayı kim kopyaladı?" soruları, veri mahremiyeti için temel sorulardır. Sadece yetki vermek yetmez, bu yetkinin nasıl kullanıldığını da izlemek gerekir.</p>
      
      <h3>İzleme Stratejisi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Success Audit:</strong> Başarılı erişim denetimi ile kimin hangi dosyayı okuduğunu görebilirsiniz.</li>
        <li><strong>Failure Audit:</strong> Yetkisi olmadığı halde bir klasörü zorlayan (Unauthorized access) kullanıcıları saptamak için kritiktir.</li>
        <li><strong>Ağ Trafiği (SMB):</strong> Dosya sunucusu üzerindeki ağ trafiğini (SMB protokolü) analiz ederek büyük veri transferlerini yakalayabilirsiniz.</li>
      </ul>

      <blockquote>
        Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, paylaşımdaki klasörlere yapılan erişimleri anlık dashboardlarınızda görebilir ve sıra dışı bir "Dosya Okuma" (Data Exfiltration işareti) gördüğünüzde otomatik uyarı alabilirsiniz.
      </blockquote>

      <p><strong>ACKLOG FIM:</strong> ACKLOG'un 'File Integrity Monitoring' modülü, sadece kimin eriştiğini değil, dosyanın içeriğinde veya izinlerinde yapılan en ufak değişikliği dahi saniyeler içinde raporlar. Manuel rapor oluşturmakla saatlerinizi harcamayın, ACKLOG ile şeffaflığı yakalayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "excel-dosyasini-en-son-kim-degistirdi": {
    title: "Excel Dosyasını En Son Kim Değiştirdi? (Sistem Seviyesinde Takip)",
    description: "Excel versiyon geçmişi dışında, sunucu loglarından dosya değişimlerini yakalama ve veri bütünlüğü.",
    content: `
      <h2>Veri Bütünlüğü Takibi: Excel ve Kritik Belgeler</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Maaş listesi, fiyat teklifleri veya müşteri listesi gibi kritik Excel dosyalarında yapılan değişiklikler, şirketin kaderini etkileyebilir. Excel'in kendi içindeki "Değişiklikleri İzle" özelliği sınırlıdır ve dosya bozulduğunda veya farklı kaydedildiğinde veri kaybına uğrayabilir.</p>
      
      <h3>Profesyonel Takip Yöntemi</h3>
      <p>Gerçek bir takip, dosya seviyesinde değil, **dosya sistemi (file system)** seviyesinde yapılmalıdır. Windows üzerinde 'Handle' seviyesindeki loglar (Event ID 4656 ve 4663), bir kullanıcının dosyayı 'Write' (Yazma) yetkisiyle açıp kapatışını milisaniye hassasiyetinde kaydeder.</p>

      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Dosyanın öznitelik değişimi (ismini değiştirme, gizleme).</li>
        <li>Dosya içeriğinin üzerine yazılması.</li>
        <li>Dosyanın farklı bir konuma "Move" edilmesi.</li>
      </ul>

      <p><strong>ACKLOG SIEM İle Veri Güvenliği:</strong> ACKLOG, bu tür kritik dökümanlar için özel bir "Watchlist" oluşturmanıza imkan tanır. "Maaş_Listesi.xlsx" dosyası her değiştiğinde yöneticinize anlık bildirim gider. Bu tür manuel kontroller yerine bir SIEM çözümü kullanarak, bu tür olaylar gerçekleştiği anda cep telefonunuza bildirim alabilir ve yasal olarak imzalanmış kanıtlar biriktirebilirsiniz.</p>
    `
  },
  "file-integrity-monitoring-yazilimi": {
    title: "Dosya Değişiklik İzleme Yazılımları (File Integrity Monitoring) Nedir?",
    description: "FIM nedir? Neden her şirket dosya bütünlüğünü izlemelidir? Güvenlik duvarından daha fazlası.",
    content: `
      <h2>FIM: Dosya Bütünlük İzleme Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>FIM (File Integrity Monitoring), bir bilişim altyapısındaki kritik sistem dosyalarının, uygulama dosyalarının ve veri dosyalarının üzerinde yapılan yetkisiz değişiklikleri tespit etme sürecidir. Bir hacker sunucunuza sızdığında yapacağı ilk iş, kendini gizlemek için sistem dosyalarını değiştirmektir.</p>
      
      <h3>FIM Neyi İzler?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Dosya İçeriği:</strong> Dosyanın hash değerindeki değişimler.</li>
        <li><strong>İzinler:</strong> Dosyaya kimlerin erişebileceğine dair ACL değişimleri.</li>
        <li><strong>Öznitelikler:</strong> Boyut, tarih, sahiplik bilgisi.</li>
        <li><strong>Yeni Dosya Oluşumu:</strong> Kritik dizinlere eklenen yabancı (.exe, .bat) dosyalar.</li>
      </ul>

      <p><strong>Neden Sadece Antivirüs Yetmez?</strong> Antivirüsler sadece "zararlı" olduğu bilinen imzalara odaklanır. FIM ise "normal" olanın dışına çıkan her şeyi raporlar. ACKLOG SIEM, yerleşik ve performans odaklı FIM motoru ile sunucularınızı 7/24 koruma altında tutar. Manuel olarak dosya tarihlerini kontrol etmek yerine ACKLOG ile proaktif olun.</p>
    `
  },
  "hassas-verilere-erisim-kontrolü": {
    title: "Hassas Verilere Erişim Kontrolü Nasıl Yapılır?",
    description: "Kişisel veriler ve gizli dökümanlar için erişim denetim stratejileri ve KVKK teknik tedbirler.",
    content: `
      <h2>Veri Mahremiyeti: Hassas Veri Denetim Rehberi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p><a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> ve GDPR süreçlerinde en çok sorulan soru şudur: "Hassas verilere erişimi nasıl kısıtlıyorsunuz ve bu erişimi nasıl raporluyorsunuz?" Sadece "Adminlerin yetkisi var" demek denetçiler için yeterli bir cevap değildir. Adminlerin bile bu verilere ne zaman ve neden eriştiğini kanıtlamanız gerekir.</p>

      <h3>Denetim Kriterleri</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>RBAC (Role Based Access Control):</strong> Sadece görev odaklı yetkilendirme.</li>
        <li><strong>Loglama:</strong> Her okuma (Read) işleminin kayıt altına alınması.</li>
        <li><strong>Anomali Tespiti:</strong> Bir kullanıcının normalde günde 10 dosyaya bakarken aniden 1000 dosyaya erişmesi.</li>
      </ol>

      <p><strong>ACKLOG SIEM Farkı:</strong> ACKLOG, hassas veri içeren klasörleri "Kırmızı Alan" olarak işaretler. Bu alanlara yetkili de olsa yapılan her erişim, ACKLOG'un 'User Behavior Analytics' (UEBA) modülü tarafından analiz edilir. Olağandışı bir hareket görüldüğünde (örneğin akşam saatlerinde toplu veri çekme), sistem otomatik olarak bu kullanıcıyı bloke edebilir veya güvenlik timine alarm gönderir.</p>
    `
  },
  "veri-sizintisi-dlp-engelleme-yontemleri": {
    title: "Veri Sızıntısı (DLP) Engelleme Yöntemleri ve SIEM İlişkisi",
    description: "Şirket verilerinin dışarı sızmasını önlemek için en etkili yöntemler ve SIEM entegrasyonu.",
    content: `
      <h2>Data Loss Prevention (DLP) Stratejileri</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Veri sızıntısı (DLP), sadece yazılımsal bir engel değil, bir süreçtir. "E-posta ile veri gönderimini yasakladım" demek yeterli değildir; kullanıcılar USB, bulut depolama veya ekran görüntüsü gibi onlarca farklı yolla verinizi kaçırabilir.</p>
      
      <h3>En Etkili 3 Yöntem</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Endpoint DLP:</strong> Kullanıcı bilgisayarında USB kullanımını ve dosya kopyalamayı denetleme.</li>
        <li><strong>Network DLP:</strong> Ağ trafiği içinde giden kredi kartı numarası, TC kimlik no gibi desenleri (pattern) tarama.</li>
        <li><strong>SIEM Korelasyonu:</strong> En önemli adım budur. DLP'nin ürettiği binlerce teknik alarmı, kullanıcının diğer hareketleriyle (VPN login, mesai dışı çalışma vb.) birleştirip "Gerçek bir sızıntı var" teshisi koymak.</li>
      </ul>

      <p><strong>Neden ACKLOG?</strong> ACKLOG, piyasadaki tüm popüler DLP çözümleriyle entegre çalışır. DLP sızıntıyı durdururken, ACKLOG bu teşebbüsün yasal delilini hazırlar ve saldırganın daha önce hangi sistemlerde "iz sürdüğünü" ortaya çıkarır. Manuel loglar arasında kaybolmayın, ACKLOG ile büyük resmi görün.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "usb-bellek-takilma-kayitlarini-gorme": {
    title: "USB Bellek Takılma Kayıtlarını Görme: Kim Ne Zaman Taktı?",
    description: "Sunucu ve kullanıcı bilgisayarlarına takılan USB aygıtların izini sürme ve engelleme.",
    content: `
      <h2>USB Güvenlik Denetimi: Gizli Tehditi Yakalayın</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Bir personelin "Sadece bu dosyayı evde çalışmak için aldım" dediği o USB bellek, şirketinize fidye yazılımı (Ransomware) bulaştırabilir veya tüm müşteri portföyünüzün çalınmasına neden olabilir. Windows üzerinde USB takılma kayıtları loglansa da, bu kayıtlar oldukça karmaşık bir yapıdadır.</p>
      
      <h3>Teknik Takip (Event Viewer)</h3>
      <p>Windows Event ID 4688 üzerinden 'Process' takibi yaparak veya disk mount loglarını (Event ID 20001) inceleyerek USB takılma zamanını görebilirsiniz. Ancak hangi kullanıcının o sırada login olduğunu bulmak ekstra bir efor gerektirir.</p>

      <blockquote>
        Tüm bu manuel ve yorucu kontroller yerine bir SIEM çözümü kullanarak, sisteme bir USB takıldığı anda markası, seri numarası ve takan kullanıcı bilgisiyle birlikte anlık bildirim alabilirsiniz.
      </blockquote>

      <p><strong>ACKLOG Çözümü:</strong> ACKLOG, "Ağdaki tüm bilgisayarlarda takılan USB'leri raporla" komutunu saniyeler içinde yerine getirir. Beyaz listeye alınmamış bir USB takıldığında otomatik aksiyon alır ve yasal uyumluluk için bu kaydı değiştirilemez şekilde saklar.</p>
    `
  },
  "klasor-yetkilendirme-ve-denetleme-raporu": {
    title: "Klasör Yetkilendirme ve Denetleme Raporu Nasıl Alınır?",
    description: "BT yöneticileri için otomatik yetki raporu oluşturma rehberi ve denetim hazırlığı.",
    content: `
      <h2>Otomatik Raporlama ve Güvenlik Denetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Denetçiler kapıya geldiğinde soracakları ilk döküman "Aylık Yetki Denetim Raporu"dur. BT ekipleri genellikle saatlerini manuel 'AccessEnum' araçlarıyla veya PowerShell scriptleriyle harcayarak bu raporları hazırlamaya çalışır.</p>
      
      <h3>Rapor İçeriğinde Olması Gerekenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Hangi kullanıcı hangi klasörde 'Write' yetkisine sahip?</li>
        <li>Gruplar aracılığıyla dolaylı gelen (Inherited) yetkiler neler?</li>
        <li>Son 30 günde yetki matrisinde yapılan değişiklikler.</li>
      </ul>

      <p><strong>ACKLOG Otomasyonu:</strong> ACKLOG SIEM, Active Directory ve File Server yapınızı sürekli tarar. Haftalık veya aylık olarak "Yetki Değişim Raporunu" yöneticinizin e-postasına PDF olarak otomatik gönderir. Manuel rapor oluşturmakla vakit kaybetmeyin, ACKLOG ile her zaman denetime hazır olun.</p>
    `
  },
  "cryptolocker-saldirisi-nasil-tespit-edilir": {
    title: "CryptoLocker Saldırısı Nasıl Tespit Edilir? Beliktiler ve Önlemler",
    description: "Dosyalarınız şifrelenmeden önce saldırıyı durdurmanın yolları ve erken uyarı sistemleri.",
    content: `
      <h2>Fidye Yazılımı Tespiti: Zamana Karşı Yarış</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>CryptoLocker bir sunucuya girdiğinde ilk yaptığı iş, dosyaları 'Sifreleme' işlemine başlamaktır. Eğer sunucunuzda saniyede 100 dosyanın isminin değiştiğini anında fark edemezseniz, backup'larınıza dahi erişemeden tüm şirketiniz kilitlenebilir.</p>
      
      <h3>Erken Uyarı Belirtileri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>CPU Artışı:</strong> Şifreleme (Encryption) işlemi yoğun işlemci gücü gerektirir.</li>
        <li><strong>Dosya Uzantı Değişimi:</strong> .crypted, .locky gibi sıra dışı uzantıların oluşması.</li>
        <li><strong>Shadow Copies Silinmesi:</strong> Saldırganın geri dönüşü kapatmak için VSS (Volume Shadow Copy) silme komutunu çalıştırması.</li>
      </ul>

      <p><strong>ACKLOG Ransomware Shield:</strong> ACKLOG, sunucu üzerindeki dosya yazma hızını ve uzantı değişimlerini milisaniye bazında takip eden özel korelasyon kurallarına sahiptir. Bir fidye yazılımı belirtisi gördüğü anda ağ bağlantısını keser ve "Saldırı Var!" alarmını tetikler. Manuel kontroller veri kurtarmaz, ACKLOG ile sisteminizi zırhlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "active-directory-oturum-acma-kayitlari": {
    title: "Active Directory Kullanıcı Oturum Açma Kayıtları Analiz Rehberi",
    description: "AD login loglarını anlamlandırma, sahte login tespiti ve kimlik hırsızlığına karşı önlemler.",
    content: `
      <h2>AD Login Takibi: Kimlik Güvenliğinin Temeli</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Şirket ağınıza giren bir saldırganın ana hedefi bir kullanıcı hesabını ele geçirmektir. Active Directory (AD) üzerindeki binlerce "Logon" kaydı içerisindeki tek bir "Anormal" giriş, felaketin habercisi olabilir.</p>
      
      <h3>Kritik Event ID'ler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Event ID 4624:</strong> Başarılı oturum açma (Logon Type 3 ise ağ üzerinden, Type 10 ise RDP).</li>
        <li><strong>Event ID 4625:</strong> Başarısız oturum açma (Şifre deneme saldırısı işareti).</li>
        <li><strong>Event ID 4768:</strong> Kerberos TGT isteği (Golden Ticket saldırılarını yakalamak için).</li>
      </ul>

      <p><strong>ACKLOG UEBA Modülü:</strong> Manuel olarak bu logları okumak imkansızdır. ACKLOG'un Davranışsal Analiz (UEBA) sistemi, kullanıcıların normal giriş saatlerini ve cihazlarını öğrenir. Örneğin; her gün Ankara'dan giren bir muhasebeci akşam 22:00'da Brezilya IP'sinden login olmaya çalışırsa, ACKLOG bunu saniyeler içinde yakalar ve yasal kanıt olarak saklar.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "domain-admin-yetkisi-alan-kullanicilari-listeleme": {
    title: "Domain Admin Yetkisi Alan Kullanıcıları Listeleme ve İzleme",
    description: "Kritik gruplara yapılan eklemeleri anında nasıl görürüz? Yetki yükseltme saldırılarını (Privilege Escalation) durdurun.",
    content: `
      <h2>Kritik Grup Denetimi: En Üst Yetki Takibi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Domain Administrator yetkisi, krallığın anahtarıdır. Sistem yöneticilerinin dahi bu gruba yeni birini eklemesi mutlaka onay ve kayıt altında olmalıdır. Bir saldırganın ilk işi kendine bir 'Backdoor' açmak için geçici bir admin hesabı oluşturmaktır.</p>
      
      <h3>Nasıl Takip Edilir?</h3>
      <p>Windows üzerinde "Sensitive Group Addition" logunu (Event ID 4728, 4732, 4756) takip etmelisiniz. Bu loglar size kimin, kimi, hangi gruba eklediğini söyler.</p>

      <p><strong>Neden SIEM Şart?</strong> Bu makaleyi şu an "Domain Admin yetkisi alanları nasıl göreceğim?" diye aratıyorsanız, muhtemelen bir şüpheniz var demektir. ACKLOG SIEM ile bu aramayı yapmanıza gerek kalmaz; her yetki değişiminde sistem size anlık "Kritik Yetki Arttırımı Tespit Edildi" uyarısı gönderir. Manuel kontrollerle risk almayın, ACKLOG ile kontrolü elinizde tutun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "rdp-uzak-masaustu-baglantilarini-izleme": {
    title: "RDP (Uzak Masaüstü) Bağlantılarını İzleme Yazılımı ve Güvenlik",
    description: "Sunuculara yapılan RDP erişimlerini görselleştirme, IP bazlı takip ve kaba kuvvet saldırısı engelleme.",
    content: `
      <h2>RDP Güvenliği: Açık Kapı Yı Kapatın</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>RDP (Remote Desktop) protokolü, siber saldırganların ağınıza sızmak için en çok kullandığı yöntemdir. Şifresi zayıf (veya çalınmış) bir kullanıcının RDP üzerinden sunucunuza girmesi, kaleyi içeriden fethetmesi demektir.</p>
      
      <h3>İzlenmesi Gereken Metrikler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Kaynak IP:</strong> Bağlantı hangi şehirden/ülkeden geliyor?</li>
        <li><strong>Deneme Sayısı:</strong> Peş peşe gelen onlarca hatalı giriş.</li>
        <li><strong>Oturum Süresi:</strong> Sabaha karşı açılan ve saatlerce süren şüpheli oturumlar.</li>
      </ul>

      <p><strong>ACKLOG Görünürlüğü:</strong> ACKLOG, tüm RDP akışını coğrafi harita üzerinde görselleştirir. Olağandışı bir ülkeden gelen RDP isteğini anında bloklar ve firewall üzerinden bu IP'yi kara listeye alır. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, sızma girişimlerini gerçekleştiği anda durdurabilirsiniz.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "mesai-saatleri-disinda-sisteme-giren-kullanicilar": {
    title: "Mesai Saatleri Dışında Sisteme Giren Kullanıcılar: Şüpheli Hareket Takibi",
    description: "Anomali tespiti: Neden gece saat 03:00'da dosya kopyalandı? İç tehditleri (Insider Threat) yakalama.",
    content: `
      <h2>İç Tehdit Analizi: Zaman Bazlı Anomali</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>Dışarıdan gelen saldırılar kadar, "İçerideki" tehlikeler de kritiktir. Bir çalışanın istifa etmeden önceki gece sistemlere girip veri kopyalaması, en yaygın veri sızıntısı senaryolarından biridir.</p>
      
      <h3>İzleme Teknikleri</h3>
      <p>Kullanıcıların çalışma saatlerini ACKLOG'a tanımlayarak (örn: 09:00 - 18:00), bu saatlerin dışındaki her login denemesini "Risk Puanı" yüksek bir olay olarak işaretleyebilirsiniz. Sadece login değil, o saatteki dosya hareketleri, yazıcı kullanımı ve web trafiği de izlenmelidir.</p>

      <p><strong>ACKLOG SIEM:</strong> Manuel olarak "Dün gece kimler girmiş?" diye sormak yerine, ACKLOG'un anomali tespit motoruyla sıra dışı her hareketi sabah e-postanızda özet olarak alın. Geleceği verilerle tahmin edin, sürprizlere yer bırakmayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "sifresini-3-kez-yanlis-giren-kullanicilar": {
    title: "Şifresini 3 Kez Yanlış Giren Kullanıcıları Görme ve Engelleme",
    description: "Kaba kuvvet (Brute Force) ve şifre püskürtme (Password Spraying) saldırılarının analizi.",
    content: `
      <h2>Güvenli Kimlik Doğrulama: Hatalı Şifre Takibi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Herkes şifresini unutabilir ve 1-2 kez yanlış girebilir. Ancak 10 farklı kullanıcı hesabı için aynı sunucuya 3'er kez yanlış şifre giriliyorsa, bu kesinlikle bir "Password Spraying" saldırısıdır.</p>
      
      <h3>Sistem Yöneticisi İçin Kritik Sorular</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Denemeler tek bir bilgisayardan mı geliyor?</li>
        <li>Hedeflenen kullanıcı adları rastgele mi yoksa belirli mi?</li>
        <li>Domain Policy gereği hesaplar kilitleniyor mu?</li>
      </ul>

      <p><strong>ACKLOG Otomatik Defans:</strong> ACKLOG, deneme-yanılma ataklarını saniyeler içinde teşhis eder. Saldıran IP'yi anında bulur ve "Brute Force Engellendi" uyarısıyla sizi bilgilendirir. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile kaba kuvveti akılla yenebilirsiniz.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "kullanici-hesap-kilitleme-nedenleri": {
    title: "Kullanıcı Hesap Kilitleme (Account Lockout) Nedenleri ve Kesin Çözüm",
    description: "Sürekli kilitlenen hesapların asıl kaynağını (source machine) bulma ve kullanıcı deneyimini iyileştirme.",
    content: `
      <h2>Lockout Analizi: Bitmeyen Şifre Sorunları</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Sistem yöneticilerinin mesailerinin %20'si "Hesabım kilitlendi, açar mısınız?" talepleriyle geçer. Kullanıcı şifresini değiştirdikten sonra telefonunda, tabletinde veya eski bir servisinde kalan kayıtlar hesabı sürekli kilitler.</p>
      
      <h3>Kaynağı Nasıl Bulursunuz?</h3>
      <p>AD Domain Controller üzerindeki Event ID 4740 kayıtlarını incelemelisiniz. Ancak bu log her zaman "Asıl Kaynağı" (Caller Computer Name) vermeyebilir.</p>

      <p><strong>ACKLOG SIEM Avantajı:</strong> ACKLOG, tüm ağı tarayarak o hesabı kilitleyen gizli 'Service Account'u veya unutulmuş mobil cihazı saniyeler içinde size söyler. Kullanıcıya "Şu bilgisayardaki kayıtlı şifreni sil" diyebilmek, profesyonel bir BT yönetiminin işaretidir. ACKLOG ile destek sürelerinizi kısaltın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "vpn-uzerinden-kimler-bagli": {
    title: "VPN Üzerinden Kimler Bağlı? Canlı İzleme ve Loglama Kültürü",
    description: "Uzaktan erişim yapan kullanıcıların trafik, oturum ve coğrafi takibi. VPN güvenliği rehberi.",
    content: `
      <h2>Remote Work Denetimi: VPN Görünürlüğü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Pandemi sonrası şirketlerin sınırları ofis duvarlarından taştı. Şu an ağınıza VPN ile bağlı olan 50 personelin gerçekten o kişiler olduğundan emin misiniz? VPN erişimi, en kritik "Giriş Kapısı"dır.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Coğrafi Konum:</strong> Personeliniz Türkiye'de ama VPN bağlantısı Rusya'dan mı geliyor?</li>
        <li><strong>Trafik Hacmi:</strong> Bir kullanıcı VPN üzerinden GB'larca veri mi kopyalıyor?</li>
        <li><strong>MFA Durumu:</strong> İki aşamalı doğrulama (2FA) her oturumda başarılı mı?</li>
      </ul>

      <p><strong>ACKLOG Dashboard:</strong> Tüm bu manuel ve karmaşık VPN loglarını ACKLOG ile anlamlı bir haritaya dönüştürün. "Impossible Travel" (İmkansız Yolculuk) korelasyonu ile bir hesabın aynı anda iki farklı şehirden bağlanmasını anında tespit edin. Yasal olarak imzalanmış kanıtlar biriktirerek denetimlerden güvenle geçin.</p>
    `
  },
  "ayricalikli-hesap-yonetimi-pam-nedir": {
    title: "Ayrıcalıklı Hesap Yönetimi (PAM) Nedir ve SIEM ile Farkı?",
    description: "Admin hesaplarını kontrol altına tutmanın yolları, PAM çözümleri ve SIEM denetimi.",
    content: `
      <h2>PAM ve SIEM: Birlikte Daha Güçlü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>PAM (Privileged Access Management), admin yetkilerini bir "Kasa" içinde tutar ve şifrelerin çalınmasını zorlaştırır. Ancak PAM, yetkiyi verdikten sonra adminin içeride ne yaptığını her zaman detaylı raporlamaz. İşte burada SIEM devreye girer.</p>
      
      <h3>Neden İkisi De Lazım?</h3>
      <p>PAM kapıyı kilitleyen kilittir, SIEM ise evin içindeki güvenlik kamerasıdır. Kullanıcı admin şifresini PAM'dan alsa bile, bu şifreyle yaptığı her 'Query' veya 'File Access' ACKLOG tarafından izlenmelidir.</p>

      <p><strong>ACKLOG Entegrasyonu:</strong> ACKLOG, PAM sistemleriyle (CyberArk, Thycotic vb.) tam entegre çalışarak, adminlerin yaptığı her hareketi milisaniye bazında kayıt altına alır. Manuel kontroller biter, kurumsal hafıza korunur.</p>
    `
  },
  "local-admin-yetkisi-kisitlama-yontemleri": {
    title: "Local Admin Yetkisi Kısıtlama Yöntemleri ve Log Takibi",
    description: "Kullanıcı bilgisayarlarında admin yetkisi olmamasının 10 faydası ve yanal hareket (Lateral Movement) önleme.",
    content: `
      <h2>Uç Nokta Güvenliği: Local Admin Riskleri</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Kullanıcılara "İşimi yapamıyorum" dedikleri için Local Admin yetkisi vermek, siber saldırganlara ağınızda yürümeleri için bir yol haritası sunmaktır. Bir bilgisayar hacklendiğinde, saldırganın ilk yapacağı iş o bilgisayardaki 'Admin Hash'lerini çalıp yandaki bilgisayara geçmektir.</p>
      
      <h3>Güvenli Geçiş Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>LAPS (Local Administrator Password Solution) kullanın.</li>
        <li>Kullanıcıları Standart User grubuna çekin.</li>
        <li>Privilege Escalation (Yetki yükseltme) loglarını SIEM ile izleyin.</li>
      </ol>

      <p><strong>ACKLOG Görünürlüğü:</strong> ACKLOG, ağınızda admin yetkisiyle çalışan "Olağandışı Uygulamaları" saptar. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile kısıtlamaların ne kadar etkili olduğunu anlık dashboardlarınızda izleyin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "personel-bilgisayar-takip-programlari-yasal-mi": {
    title: "Personel Bilgisayar Takip Programları Yasal mı? (KVKK Perspektifi)",
    description: "İş yerinde izleme yaparken hukuki sınırlar, çalışan mahremiyeti ve loglama gereksinimleri.",
    content: `
      <h2>Hukuk ve Güvenlik Dengesi: Çalışan İzleme</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Çalışanları 7/24 ekran görüntüsü alarak izlemek hem etik hem de KVKK açısından ciddi riskler barındırır. Ancak şirketin bilişim kaynaklarının ve ticari sırlarının korunması için "Güvenlik Odaklı Loglama" yapmak yasal bir zorunluluktur.</p>
      
      <h3>KVKK Uyumlu İzleme Nasıl Olmalı?</h3>
      <p>Amaca yönelik (Purpose limitation) ve orantılı olmalıdır. Sadece güvenlik ihlali oluşturabilecek hareketler (dosya kaçırma, zararlı siteye girme) loglanmalıdır.</p>

      <p><strong>ACKLOG ve Hukuki Uyum:</strong> ACKLOG SIEM, personelin özel hayatını ihlal etmeden sadece "Siber Güvenlik Parametrelerini" izler. Bu sayede hem şirketinizi korur hem de KVKK önünde kendinizi savunabilirsiniz. Manuel ve riskli takip yazılımları yerine, yasal otoritelerin kabul ettiği bir SIEM çözümü kullanarak her iki tarafı da güvenceye alın.</p>
    `
  },
  "siber-olay-mudahale-ekibi-some-kurulumu": {
    title: "Siber Olay Müdahale Ekibi (SOME) Kurulumu ve Görevleri",
    description: "Kurum içi siber tim nasıl kurulur? Yasal zorunluluklar ve siber olay yönetimi.",
    content: `
      <h2>Kurumsal Savunma: SOME Timi Rehberi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Türkiye'de Kritik Altyapılar ve Kamu Kurumları için SOME (Siber Olay Müdahale Ekibi) kurulumu yasal bir zorunluluktur. Peki bir SOME ekibi ne yapar? Sadece beklemek yetmez, olay anında 'Nasıl Reaksiyon' verileceği önceden planlanmalıdır.</p>
      
      <h3>SOME Ekibinin 3 Ana Görevi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Önleme:</strong> Sistemlerdeki zafiyetleri tarama ve kapatma.</li>
        <li><strong>Tespit:</strong> Devam eden bir saldırıyı anında fark etme.</li>
        <li><strong>Müdahale:</strong> Saldırganı sistemden atma ve hasarı onarma.</li>
      </ul>

      <p><strong>ACKLOG SIEM: SOME Ekibinin Gözüdür.</strong> Bir ekibiniz olsa dahi elinde veri (log) yoksa hiçbir şey yapamaz. ACKLOG, SOME ekipleri için özel "Olay Müdahale (IR)" modülü sunar. Bir saldırı başladığında yasal olarak imzalanmış kanıtları otomatik toplar ve ekibinize ne yapmaları gerektiğine dair 'Playbook'lar sunar. ACKLOG ile profesyonel bir siber tim olun.</p>
    `
  }
};
