export const windowsIOTArticles = {
  "active-directory-kullanici-silinme-logu": {
    title: "Active Directory Kullanıcı Silinme Logu: Faili Nasıl Buluruz?",
    description: "AD üzerinden silinen kullanıcı hesaplarını takip etme. Event ID 4726 ile adli analiz rehberi.",
    content: `
      <h2>Hesap Silinmesi: AD Üzerindeki İzleri Takip Edin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Bir kullanıcı hesabının silinmesi, özellikle de yetkili bir hesapsa, ciddi bir güvenlik ihlali veya operasyonel hatadır. Windows Event Loglarında bu olayı yakalamak için 'Account Management' denetiminin açık olması gerekir.</p>
      
      <h3>Takip Edilecek Olay: Event ID 4726</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Event ID 4726:</strong> 'A user account was deleted.' mesajını verir.</li>
        <li><strong>Subject (Silinme eylemini yapan):</strong> Hesabı silen kişinin kullanıcı adı ve bilgisayar bilgisini içerir.</li>
        <li><strong>Target (Silinen hesap):</strong> Hangi hesabın silindiğini gösterir.</li>
      </ul>

      <p><strong>Neden SIEM Şart?</strong> Silinen bir hesapla ilgili veriler Domain Controller üzerinde hızla ezilebilir. ACKLOG SIEM, bir hesap silindiği anda "Kritik hesap silindi!" uyarısını size saniyeler içinde gönderir. Manuel log taramakla zaman kaybetmeyin, ACKLOG ile kimlik güvenliğinizi kontrol altında tutun.</p>
    `
  },
  "basarisiz-login-denemeleri-takibi": {
    title: "Başarısız Login Denemeleri Takibi ve Kaba Kuvvet Tespiti",
    description: "Windows siber güvenlik loglarından Event ID 4625 takibi ile şüpheli giriş denemelerini engelleme.",
    content: `
      <h2>Siber Savunma Hattı: Hatalı Girişlerin Analizi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Başarısız oturum açma denemeleri (Failed Logins), genellikle bir kaba kuvvet (Brute Force) saldırısının ilk adımıdır. Saniyeler içinde peş peşe gelen onlarca hata, bir botun şifre denediğinin kesin kanıtıdır.</p>
      
      <h3>Kritik Veri: Event ID 4625</h3>
      <p>Bu logun içindeki <strong>'Sub Status'</strong> kodu önemlidir:</p>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>0xc000006a:</strong> Kullanıcı adı doğru ama şifre yanlış.</li>
        <li><strong>0xc0000064:</strong> Kullanıcı adı sistemde yok (Kullanıcı adı tahmin saldırısı).</li>
      </ul>

      <p><strong>ACKLOG Brute-Force Shield:</strong> ACKLOG, bu hataları anlık olarak sayar. "Aynı IP'den 1 dakikada 500 hatalı giriş gelirse saldırganı blokla" kuralıyla sisteminizi otomatik korur. Manuel olarak logları izlemek samanlıkta iğne aramaktır, ACKLOG ile kalkanınızı otomatiğe bağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "domain-admin-yetkisi-verilen-kullanicilari-bulma": {
    title: "Domain Admin Yetkisi Verilen Kullanıcıları Bulma ve İzleme",
    description: "Kritik grup üyeliklerindeki (Domain Admins) her değişikliği anlık takip etme rehberi.",
    content: `
      <h2>Kritik Yetki Artışı: Domain Admin Gruplarının Denetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Bir kullanıcının 'Domain Admins' grubuna eklenmesi, o kullanıcıya tüm ağdaki en üst yetkileri vermek demektir. Bu işlem her zaman büyük bir dikkatle izlenmelidir. Bir saldırganın ilk hedefi kendine yetkili bir hesap yaratmaktır.</p>
      
      <h3>İzlencek Loglar: 4728, 4732, 4756</h3>
      <p>Bu olay kimlikleri, bir kullanıcının güvenlik grubuna eklendiğini (Success Change) gösterir. 'Member' kısmında eklenen hesabı, 'Subject' kısmında ise eklemeyi yapan yetkiliyi bulabilirsiniz.</p>

      <p><strong>ACKLOG Privilege Alert:</strong> Domain Admin grubuna yeni biri eklendiğinde ACKLOG size anında bildirim gönderir. "Bu kişi gerçekten yetkili mi?" sorusunu olay anında sormak felaketleri önler. Manuel rapor beklentisine girmeyin, ACKLOG ile her saniye denetime hazır olun.</p>
    `
  },
  "gpo-group-policy-degisiklik-izleme-ve-guvenlik": {
    title: "GPO (Group Policy) Değişiklik İzleme ve Sistem Güvenliği",
    description: "Şirket politikalarındaki (GPO) her oynamayı nasıl yakalarsınız? GPO denetim teknikleri.",
    content: `
      <h2>Politika Sabotajı: GPO Değişikliklerinin Önemi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Hackerlar içeri sızdıktan sonra antivirüsleri kapatmak veya RDP'yi herkese açmak için Group Policy Object (GPO) yapılandırmalarını değiştirebilirler. GPO üzerindeki yetkisiz bir değişiklik, tüm şirket bilgisayarlarının güvenliğini saniyeler içinde yok edebilir.</p>
      
      <h3>GPO Denetim Adımları</h3>
      <p>Event Viewer üzerinde <strong>Event ID 5136</strong> ve <strong>5137</strong> kayıtlarını aramanız gerekir. Bu loglar hangi GPO'nun hangi parametresinin değiştirildiğini teknik dille anlatır.</p>

      <p><strong>ACKLOG GPO Watch:</strong> GPO üzerindeki kritik bir değişim yapıldığında ACKLOG karmaşık kodları okur ve size "X yöneticisi, şu GPO'daki Firewall kuralını kapattı!" diye net bir Türkçe uyarı verir. Manuel kontrollerle riske girmeyin, ACKLOG ile kurumsal politikalarınızı koruyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "windows-event-viewer-hatalari-ve-cozum-yollari": {
    title: "Windows Event Viewer (Olay Görüntüleyicisi) Hataları ve Analizi",
    description: "Sistem ve uygulama loglarındaki kritik hataların (Critical/Error) anlamlandırılması.",
    content: `
      <h2>Sistem Sağlığı Raporu: Event Viewer Analitiği</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>Windows Event Viewer, sisteminizde olup biten her şeyi kaydeden dev bir kara kutudur. Ancak günde binlerce "Bilgi" logu arasında asıl önemli olan "Kritik" (Critical) hataları bulmak zordur.</p>
      
      <h3>Önemli Hata Kategorileri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Application Errors (ID 1000):</strong> Uygulamaların çökmesi.</li>
        <li><strong>System Errors (ID 7031):</strong> Servislerin beklenmedik şekilde durması.</li>
        <li><strong>Disk Errors (ID 7):</strong> Fiziksel disk arızası işaretleri.</li>
      </ul>

      <p><strong>ACKLOG Dashboard:</strong> Tüm sunucularınızdaki kritik Event Viewer hatalarını tek bir ekranda ACKLOG ile izleyin. Bir sunucu kapanmadan 5 dakika önce ACKLOG sizi uyarsın. Manuel kontroller veri kurtarmaz, ACKLOG proaktif çözümler sunar.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "dosya-sunucusu-file-server-erisim-kayitlari": {
    title: "Dosya Sunucusu (File Server) Erişim Kayıtları Nasıl Tutulur?",
    description: "Windows File Server üzerinde dosya okuma, yazma ve silme işlemlerini izleme yöntemleri.",
    content: `
      <h2>Veri Mahremiyeti: Dosya Erişim Takibi (FIM)</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Şirket verilerinin %80'i dosya sunucularında durur. "Müşteri listesine kim baktı?" sorusu KVKK uyumu için temel bir sorudur. Sadece yetki vermek yetmez, bu yetkinin nasıl kullanıldığını da izlemek gerekir.</p>
      
      <h3>Denetim Ayarları</h3>
      <p>Windows üzerinde 'Audit File System' denetimini aktif etmeli ve ilgili klasörlerin 'Gelişmiş Denetim Ayarları'ndan izlenecek kullanıcı gruplarını seçmelisiniz.</p>

      <p><strong>ACKLOG FIM Modülü:</strong> ACKLOG, dosya sunucusu loglarını anlık analiz eder ve size "Daha önce bu dosyaya hiç erişmemiş bir kullanıcı toplu veri indiriyor!" gibi anomalileri raporlar. Manuel loglar arasında kaybolmayın, ACKLOG ile veri sızıntılarını büyümeden durdurun.</p>
    `
  },
  "klasorden-dosya-silen-kullaniciyi-bulma": {
    title: "Klasörden Dosya Silen Kullanıcıyı Bulma: Kesin Yöntem",
    description: "Silinen dosyaların failini Event ID 4663 ve 4660 ile nasıl teşhis edersiniz?",
    content: `
      <h2>Olay Yeri İnceleme: Silinen Dosyanın İzini Sürmek</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Kritik bir dosya silindiğinde herkes "Ben silmedim" der. Faili bulmanın tek yolu yerleşik Windows loglarını analiz etmektir. Ancak bu loglar saniyeler içinde binlerce yeni logun altında kalarak silinip gidebilir.</p>
      
      <h3>Analiz Formülü: 4663 + 4660</h3>
      <p>Event ID 4663'te silme girişimi (Access: Delete) görülür, hemen ardından 4660 gelirse nesne gerçekten silinmiş demektir. Bu logun içindeki kullanıcı adı gerçek faildir.</p>

      <p><strong>ACKLOG Adli Bilişim:</strong> ACKLOG silinen bir dosyanın logunu "Zaman Damgalı" olarak ayrı bir güvenli kasada saklar. Saldırgan logları silsede ACKLOG'daki kanıtlar silinmez. Faili bulmak için saatlerce log taramayın, ACKLOG ile 3 saniyede raporunuzu alın.</p>
    `
  },
  "rdp-uzak-masaustu-baglanti-loglari-analizi": {
    title: "RDP (Uzak Masaüstü) Bağlantı Logları: Kim, Nereden Bağlandı?",
    description: "Uzak masaüstü erişimleri (Event ID 4624 Type 10) üzerinden siber güvenlik analizi.",
    content: `
      <h2>Giriş Kapısı: RDP Erişimlerini Denetleyin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Uzak masaüstü (RDP), siber saldırganların sisteminize sızmak için en çok kullandığı yöntemdir. Şifresi ele geçirilen bir hesap üzerinden RDP ile giren bir saldırganın iç ağdaki hareketlerini mutlaka izlemelisiniz.</p>
      
      <h3>Kritik Veri: Logon Type 10</h3>
      <p>RDP ile yapılan her başarılı girişte Domain Controller üzerinde <strong>Event ID 4624</strong> oluşur ve tipi <strong>10</strong> dur. Bu logdaki kaynak IP adresi saldırganın yerini belli eder.</p>

      <p><strong>ACKLOG RDP Dashboard:</strong> Tüm RDP bağlantılarını canlı bir Türkiye/Dünya haritası üzerinde ACKLOG ile izleyin. Olağandışı bir IP'den (örn: başka bir ülkeden) gelen RDP isteğinde ACKLOG sizi uyarır ve VPN zorunluluğunu hatırlatır. Manuel kontrollerle siber hıza yetişemezsiniz, ACKLOG ile görünürlük kazanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "oturum-acma-ve-kapatma-saatleri-raporu": {
    title: "Oturum Açma ve Kapatma Saatleri Raporu (Mesai Takibi ve Güvenlik)",
    description: "Personelin login/logout saatlerini Event ID 4624 ve 4634 ile otomatik raporlama.",
    content: `
      <h2>Personel Hareket Analizi: Login/Logout Denetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Personelin login ve logout saatlerini raporlamak sadece mesai takibi değil, aynı zamanda anomali tespiti için de kullanılır. "Dün gece 03:00'da sisteme giren kimdi?" sorusu bir siber güvenlik sorusudur.</p>
      
      <h3>İzleme Formülü</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>4624:</strong> Oturum açma (Logon).</li>
        <li><strong>4634:</strong> Oturum sonlandırma (Logoff).</li>
      </ul>

      <p><strong>ACKLOG Zaman Analizi:</strong> Personelin normal çalışma saatlerini ACKLOG'a tanımlayarak, bu saatler dışındaki her oturumu "Şüpheli" olarak raporlayın. Manuel rapor oluşturmakla günlerinizi harcamayın, ACKLOG ile haftalık personel karnesini mail olarak alın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "powershell-betigi-ile-log-toplama-yontemleri": {
    title: "PowerShell Betiği İle Log Toplama Yöntemleri ve Otomasyon",
    description: "Kendi Windows makinelerinizden PowerShell ile nasıl veri toplarsınız? Log toplama scriptleri.",
    content: `
      <h2>BT Otomasyonu: PowerShell Gücünü SIEM İle Birleştirin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>PowerShell, sistem yöneticilerine her şeyi otomatiğe bağlama imkanı verir. Ancak toplanan bu logları TXT dosyalarında bırakmak güvenlik açısından risklidir. Bu verilerin merkezi bir SIEM'e (ACKLOG) akması gerekir.</p>
      
      <h3>Örnek Script Mantığı</h3>
      <p><code>Get-EventLog -LogName Security | Where-Object {$_.EventID -eq 4624}</code> komutuyla başarılı girişleri çekebilir ve ACKLOG API üzerinden gönderebilirsiniz.</p>

      <p><strong>ACKLOG Agentless Power:</strong> ACKLOG, PowerShell scriptlerinizin çıktılarını gerçek zamanlı parse edebilir. Kendi özel uygulamalarınızın raporlarını da ACKLOG dashboardda görmek artık çok kolay. Manuel raporlamaya son verin, ACKLOG ile tam otomasyon kurun.</p>
    `
  },
  "sunucu-performans-izleme-araclari-ve-yontemleri": {
    title: "Sunucu Performans İzleme Araçları ve Analiz Yöntemleri",
    description: "CPU, RAM ve Disk değerlerini SIEM üzerinden 7/24 takip etme ve alarm kurma.",
    content: `
      <h2>Sistem Verimliliği: Sunucu Performans Denetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Siz fark etmeden dolan bir disk veya aşırı ısınan bir CPU, saatlerce sürecek servis kesintilerine neden olabilir. Performans izleme, sadece donanım değil, aynı zamanda siber bir "Anomali" (örn: kripto madencilik virüsü) tespitidir.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>CPU Load:</strong> Ani artışlar saldırı veya hatalı güncelleme işareti olabilir.</li>
        <li><strong>Memory Leak:</strong> Uygulamaların zamanla belleği tüketmesi.</li>
        <li><strong>I/O Wait:</strong> Disklerin veri yazma hızındaki darboğazlar.</li>
      </ul>

      <p><strong>ACKLOG Performance Monitoring:</strong> Tüm sunucularınızın anlık "Sağlık Durumunu" ACKLOG ile tek ekranda izleyin. Bir eşik değeri (Threshold) aşıldığında ACKLOG sizi uyarsın. Manuel kontroller veri kurtarmaz, ACKLOG ile proaktif olun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "windows-servis-durmasi-uyarisi-alma-ve-loglama": {
    title: "Windows Servis Durması Uyarısı Alma ve Loglama Stratejisi",
    description: "Kritik servisler (IIS, SQL, Print Spooler) durduğunda BT ekibini anında haberdar etme.",
    content: `
      <h2>Süreklilik: Kritik Servislerin Takibi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Bir web sunucusunun (IIS) veya veritabanının (SQL) durması, şirket operasyonunun durması demektir. BT ekipleri bu durumlardan ancak "İnternet/Program çalışmıyor" şikayeti gelince haberdar olur. Oysa sistem, servis durmadan saniyeler önce 'System Log' içine bir hata bırakır.</p>
      
      <h3>İzlencek Olay: Event ID 7036</h3>
      <p>Bu log, bir servisin durumunun değiştiğini (Started/Stopped) bildirir. 'Service Name' kısmından SQL veya IIS gibi isimleri filtreleyerek kritik olanları seçebilirsiniz.</p>

      <p><strong>ACKLOG Real-Time Alert:</strong> Kritik bir servis durduğu anda ACKLOG yöneticilere anlık bildirim (SMS/Mail) gönderir. Problemi kullanıcı şikayetinden önce fark etmek profesyonelliktir. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile sistem uptime sürenizi %100'e yaklaştırın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "exchange-server-mail-loglari-analizi-ve-guvenlik": {
    title: "Exchange Server Mail Logları Analizi ve Kurumsal E-posta Güvenliği",
    description: "Şirket maillerinden dışarıya dosya sızıntısı ve izinsiz mailbox erişimlerini yakalama.",
    content: `
      <h2>E-posta Denetimi: Exchange Loglarının Önemi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Şirket sırlarının büyük çoğunluğu e-postalar üzerinden akar. Bir personelin tüm şirket dökümanlarını kendi özel mailine "BCC" yaparak gönderdiğini biliyor muydunuz? Exchange logları bu tür sızıntıların tek kanıtıdır.</p>
      
      <h3>Analiz Edilecek Loglar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Message Tracking Logs:</strong> Kim, kime, ne zaman mail attı?</li>
        <li><strong>Audit Logs:</strong> Adminler kimlerin mailbox'ına (Full Access) girip okudu?</li>
        <li><strong>Transport Logs:</strong> Ekli dosyaların boyutları ve tipleri.</li>
      </ul>

      <p><strong>ACKLOG Exchange Insight:</strong> Tüm mail trafiğini ACKLOG ile görselleştirin. Şüpheli bir "Toplu Mail Gönderimi" veya "Izinsiz Mail Okuma" olayını ACKLOG ile anında raporlayın. Manuel kontrollerle bulamazsınız, ACKLOG ile kurumsal e-posta güvenliğinizi sağlayın.</p>
    `
  },
  "kritik-sunucu-erisim-takibi-ve-whitelist": {
    title: "Kritik Sunucu Erişim Takibi ve Beyaz Liste (Whitelist) Yönetimi",
    description: "Hassas sunuculara (DC, ERP, SQL) yapılan erişimleri sıkılaştırma ve denetleme.",
    content: `
      <h2>Erişim Kontrolü: Kritik Sunuculara Kim Giriyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Herkesin her sunucuya RDP veya SMB ile girmesine izin vermek siber bir felakettir. "Sıfır Güven" (Zero Trust) felsefesi gereği, sadece yetkilendirilmiş personelin sadece belirli sunuculara, belirli saatlerde erişmesi izlenmelidir.</p>
      
      <h3>Takip Stratejisi</h3>
      <p>Sunucularınıza 'İzin Verilen IP'leri' içeren bir beyaz liste (Whitelist) tanımlayın. Bu liste dışından gelen her bir erişim isteği büyük bir siber saldırı uyarısıdır.</p>

      <p><strong>ACKLOG Zero-Trust Shield:</strong> Sunucularınıza yapılan her başarılı ve başarısız girişi süzün. Whitelist dışı bir IP sunucuya dokunduğu an ACKLOG alarm üretsin. Manuel raporlarla vakit kaybetmeyin, kritik sistemlerinizi ACKLOG ile zırhlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "sql-server-veritabanı-silme-logu-ve-audit": {
    title: "SQL Server Veritabanı Silme Logu ve Audit Kurulumu",
    description: "Veritabanında Drop/Delete işlemlerini yapan kullanıcıyı 'SQL Server Audit' ile bulma.",
    content: `
      <h2>Veritabanı Güvenliği: Kritik Tabloları Kim Siliyor?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>SQL Server üzerinde bir tablonun veya tüm veritabanının silinmesi (Drop Database) genellikle bir saldırı veya ciddi bir operasyonel hatadır. Standart hata logları bu faili size söylemez, bunun için özel bir Audit (Denetim) yapısı kurmalısınız.</p>
      
      <h3>Audit Kurulum Kriterleri</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>SQL Server Audit nesnesi oluşturun.</li>
        <li>Database Audit Specification tanımlayın (DATABASE_OBJECT_CHANGE_GROUP).</li>
        <li>Logları Application Event Log'a yönlendirin.</li>
      </ol>

      <p><strong>ACKLOG SQL Watch:</strong> ACKLOG, SQL Audit loglarını anlık yakalar ve size "X kullanıcısı Müşteriler tablosunu sildi!" diye bildirim gönderir. Manuel log takibiyle vakit kaybetmeyin, veritabanınızı ACKLOG ile siber kalkanla savunun.</p>
    `
  },
  "scada-sistemleri-guvenligi-ve-izleme": {
    title: "SCADA Sistemleri Güvenliği: Fabrikalar Siber Saldırılardan Nasıl Korunur?",
    description: "Endüstriyel kontrol sistemlerindeki (ICS/SCADA) anormallikleri loglar üzerinden yakalama rehberi.",
    content: `
      <h2>Endüstriyel Güvenlik: Kritik Altyapıyı Koruma</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Fabrikalar, santraller ve enerji hatlarını yöneten SCADA sistemleri, siber savaşın en kritik hedefidir. Fiziksel bir cihazın siber yolla kapatılması, milyonlarca dolarlık hasara neden olabilir.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Protokol Analizi:</strong> Modbus veya S7Comm gibi endüstriyel protokollerin takibi.</li>
        <li><strong>PLC Dashboard:</strong> Programlanabilir denetleyicilere (PLC) yapılan kod gönderimleri.</li>
        <li><strong>Air-Gap Güvenliği:</strong> İzole ağlara yapılan dış IP bağlantı teşebbüsleri.</li>
      </ul>

      <p><strong>ACKLOG Industrial SIEM:</strong> ACKLOG, endüstriyel donanımların ürettiği logları anlayarak fabrikalarınızın dijital güvenliğini sağlar. Bir motorun normal dışı ısındığını veya durduğunu siber bir anomali olarak yakalayın. Manuel kontroller üretimi riske atar, ACKLOG ile otonom koruma sağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "ip-kamera-kayitlari-loglama-ve-guvenlik": {
    title: "IP Kamera Kayıtları Loglama: Kameralarınız Casusluk Mu Yapıyor?",
    description: "NVR ve IP kameraların güvenliği, ağ trafiği analizi ve izinsiz görüntü erişim tespiti.",
    content: `
      <h2>Fiziksel Güvenlik Sızıntısı: Kamera Cihazları (NVR/DVR)</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>IP kameralar siber saldırılara en açık IT varlıklarıdır. Güncellenmeyen ve zayıf şifreli bir NVR cihazı, tüm ağınıza sızmak için bir "Köprü" olarak kullanılabilir.</p>
      
      <h3>Güvenlik Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Kameraların internete doğrudan açık olduğundan emin olun (Port yönlendirme yapmayın).</li>
        <li>Cihazların CPU kullanımını izleyin (Saldırganlar cihazı DDoS için kullanıyor olabilir).</li>
        <li>Logon kayıtlarını takip edin (Kim kameraya bağlandı?).</li>
      </ul>

      <p><strong>ACKLOG IoT Shield:</strong> Kameraların izinsiz veri göndermesini ACKLOG ağ trafiği izleme modülü ile yakalar. Olağandışı bir dış IP'ye trafik gönderen bir kamerayı ACKLOG anında raporlar. Fiziksel güvenliğinizin siber güvenliğinizi tehdit etmesine izin vermeyin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "akilli-bina-sistemleri-guvenligi-rehberi": {
    title: "Akıllı Bina Sistemleri Güvenliği: BMS Loglarını SIEM İle Yönetmek",
    description: "Asansörlerden klimalara kadar akıllı bina (BMS) sistemlerindeki siber riskler ve izleme.",
    content: `
      <h2>Akıllı Altyapı: Bina Yönetim Sistemleri (BMS)</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Artık tüm modern binalar "Akıllı". Aydınlatma, havalandırma, yangın alarmı ve asansör sistemleri ortak bir ağda buluşuyor. Peki bu sistemlerin siber güvenliği kimin kontrolünde?</p>
      
      <h3>BMS Risk Faktörleri</h3>
      <p>Zayıf şifreli BACnet veya LonWorks protokolleri şifrelenmediği için siber saldırganlar tarafından "Replay Attack" ile taklit edilebilir. Binanın havalandırmasının veya yangın alarmının bir hacker tarafından yönetilmesi felaket demektir.</p>

      <p><strong>ACKLOG Facility Monitoring:</strong> Akıllı binadaki tüm kontrolcülerin hareketlerini ACKLOG ile merkezi bir kasanın içine alın. Olağandışı bir asansör komutu veya yangın alarmı disable edilmesi olayını ACKLOG ile anında görün. Manuel takip imkansızdır, ACKLOG ile binanızı akıllı ve güvenli kılın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "iot-cihazlarini-agdan-izleme-ve-envanter": {
    title: "IoT Cihazlarını Ağdan İzleme: Ofisteki 'Görünmez' Düşmanlar",
    description: "Akıllı ampullerden kahve makinelerine, ağdaki tüm IoT varlıklarını keşfetme ve koruma.",
    content: `
      <h2>Shadow IT: IoT Sorunsalı</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Personelin getirdiği akıllı saatler veya ofisteki kahve makinesi ağ şifrenizi çalmak için bir aracı olabilir mi? IoT cihazları BT envanterinde genellikle "Görünmez" oldukları için siber güvenlik için en zayıf halkadır.</p>
      
      <h3>Ağ Seviyesinde İzleme</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>MAC Adres Taraması:</strong> Bilinmeyen üreticilere ait cihazları tespiti.</li>
        <li><strong>DNS Analizi:</strong> IoT cihazlarının hangi "Cloud" sunucularına bağlandığının analizi.</li>
        <li><strong>Port Monitoring:</strong> Bu cihazlar üzerindeki açık ve şüpheli portlar.</li>
      </ul>

      <p><strong>ACKLOG IoT Visibility:</strong> Ağa yeni bir cihaz takıldığı an ACKLOG sizi uyarır. Cihazın davranışını (Profile) öğrenerek, normalden sapan bir trafik (Data leaking) gördüğünde sizi haberdar eder. Manuel izleme bitti, ACKLOG ile 360 derece görünürlük sağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "fabrika-otomasyonu-siber-guvenligi-stratejileri": {
    title: "Fabrika Otomasyonu Siber Güvenlik Stratejileri ve Loglama Zorunluluğu",
    description: "Endüstri 4.0 dünyasında fabrikaları kilitlenmekten (Ransomware) nasıl koruruz?",
    content: `
      <h2>Endüstri 4.0'da Güvenlik: Otomasyon Hatlarını Koruma</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Yeni nesil fabrikalarda tüm üretim hattı internete ve BT ağına bağlıdır. Bu da fabrikaları siber saldırıların (özellikle Ransomware) açık hedefi haline getirir. 1 hafta duran bir fabrikanın ekonomik zararı geri döndürülemez olabilir.</p>
      
      <h3>Otomasyon Savunma Katmanları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Üretim ağını (OT) kurumsal ağdan (IT) tamamen izole edin.</li>
        <li>Sunuculardaki kritik parametre değişimlerini loglayın.</li>
        <li>Operatörlerin sistemdeki her hareketini (Audit trail) kaydedin.</li>
      </ol>

      <p><strong>ACKLOG Manufacturing Protection:</strong> Üretim hattınızdaki anomalileri ACKLOG ile anlık takip edin. Bir PLC'nin durması veya bir sensor verisinin yanlış gelmesi siber bir müdahale olabilir. ACKLOG ile üretim sürekliliğinizi yasal güvenceli loglarla koruyun.</p>
    `
  }
};
