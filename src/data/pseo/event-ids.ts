import { SEOData } from '../programmatic-seo';

export const eventIdPages: Record<string, SEOData> = {
  "4624-basarili-oturum-acma": {
    title: "Windows Event ID 4624 – Başarılı Oturum Açma Analizi | ACKLOG",
    description: "Windows Event ID 4624 başarılı oturum açma olayının detaylı analizi, güvenlik etkileri ve SIEM ile izleme yöntemleri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4624: Başarılı Oturum Açma",
    heroSubtitle: "Windows güvenlik loglarında en sık karşılaşılan olay. Her başarılı giriş bu Event ID ile kaydedilir.",
    shortAnswer: "Windows Event ID 4624, bir kullanıcının sisteme başarılı şekilde oturum açtığında oluşturulur. Logon Type alanı, girişin yerel (Type 2), ağ üzerinden (Type 3), uzak masaüstü (Type 10) veya servis hesabı (Type 5) olup olmadığını belirtir. ACKLOG, bu olayları anlık izleyerek normal dışı oturum açma kalıplarını (mesai dışı saatler, farklı coğrafya, anormal Logon Type) otomatik tespit eder.",
    technicalSummary: [
      "Logon Type 2: Yerel interaktif giriş (fiziksel konsol erişimi).",
      "Logon Type 3: Ağ üzerinden giriş (dosya paylaşımı, SMB erişimi).",
      "Logon Type 10: Remote Desktop (RDP) oturumu açma.",
      "Logon Type 5: Servis hesabı girişi (Windows servis başlatma)."
    ],
    resultParagraph: "Sonuç olarak, Event ID 4624 tek başına zararsız görünse de Logon Type, kaynak IP ve zaman bilgisi kombinasyonuyla anormal erişimleri tespit etmek için kritik öneme sahiptir. ACKLOG, bu verileri korelasyon motorunda işleyerek şüpheli giriş kalıplarını saniyeler içinde yakalar.",
    content: `
      <h2>Event ID 4624 Nedir?</h2>
      <p>Windows işletim sisteminde bir kullanıcı oturumu başarıyla açıldığında, Security loguna Event ID 4624 kaydedilir. Bu olay, hem yerel hem de uzak erişimleri kapsar. Her 4624 kaydı, oturum açma türünü belirten bir <strong>Logon Type</strong> değeri içerir.</p>
      <h3>Logon Type Değerleri ve Anlamları</h3>
      <p><strong>Type 2 (Interactive):</strong> Kullanıcı fiziksel olarak bilgisayar başında oturum açtığında oluşur. Sunucularda bu tip erişim beklenmez ve alarm sebebi olabilir.</p>
      <p><strong>Type 3 (Network):</strong> Ağ üzerinden kaynak erişimlerinde (dosya paylaşımı, yazıcı vb.) oluşur. En yaygın Logon Type'tır.</p>
      <p><strong>Type 10 (RemoteInteractive):</strong> RDP bağlantılarında oluşur. Dış IP'lerden gelen Type 10 olayları mutlaka izlenmelidir.</p>
      <h3>Güvenlik Açısından Önem</h3>
      <p>4624 olayları tek başına tehdit oluşturmaz, ancak şu senaryolarda kritik hale gelir: Mesai dışı saatlerde Type 10 (RDP) girişi, aynı hesapla farklı IP'lerden eşzamanlı oturum, servis hesabının interaktif (Type 2) kullanılması. ACKLOG bu korelasyon kurallarını yerleşik olarak içerir.</p>
      <h3>Örnek Log Çıktısı</h3>
      <pre><code>An account was successfully logged on.
Subject:
  Security ID: SYSTEM
  Account Name: WIN-SERVER01$
Logon Information:
  Logon Type: 10
  Account Name: admin.user
  Source Network Address: 192.168.1.105
  Workstation Name: CLIENT-PC</code></pre>
      <h3>ACKLOG ile İzleme</h3>
      <p>ACKLOG, Event ID 4624 loglarını topladığında otomatik olarak Logon Type, kaynak IP, hedef sunucu ve zaman bilgisini ayrıştırır (parse eder). Yerleşik korelasyon kurallarıyla anormal erişim kalıpları saniyeler içinde tespit edilir ve SOC ekibine alarm gönderilir.</p>
    `,
    faqs: [
      { question: "Event ID 4624 ile 4625 arasındaki fark nedir?", answer: "4624 başarılı oturum açmayı, 4625 ise başarısız oturum açma girişimini kaydeder. Güvenlik açısından ikisi birlikte analiz edilmelidir." },
      { question: "Logon Type 3 neden bu kadar sık oluşuyor?", answer: "Type 3, ağ üzerindeki her kaynak erişiminde (dosya paylaşımı, yazıcı, grup politikası vb.) üretilir. Normal ortamlarda en yüksek hacimli Logon Type'tır." }
    ]
  },
  "4625-basarisiz-oturum-acma": {
    title: "Windows Event ID 4625 – Başarısız Oturum Açma ve Brute Force Tespiti | ACKLOG",
    description: "Event ID 4625 başarısız oturum açma denemelerinin analizi, brute force saldırı tespiti ve SIEM alarm kuralları.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4625: Başarısız Oturum Açma",
    heroSubtitle: "Brute force saldırılarının en önemli göstergesi. Kısa sürede çok sayıda 4625 olayı alarm sebebidir.",
    shortAnswer: "Event ID 4625, Windows'ta bir oturum açma girişiminin başarısız olduğunda üretilir. Sub Status kodu, hatanın nedenini belirtir: yanlış şifre (0xC000006A), var olmayan kullanıcı (0xC0000064) veya kilitli hesap (0xC0000234). ACKLOG, 5 dakika içinde aynı kaynaktan 10+ başarısız deneme geldiğinde otomatik brute force alarmı üretir.",
    technicalSummary: [
      "Sub Status 0xC000006A: Yanlış şifre ile giriş denemesi.",
      "Sub Status 0xC0000064: Var olmayan kullanıcı adıyla deneme (user enumeration).",
      "Sub Status 0xC0000234: Kilitlenmiş hesaba giriş denemesi.",
      "5 dakikada 10+ başarısız deneme → Brute Force alarm kuralı."
    ],
    resultParagraph: "Event ID 4625, siber güvenlikte en kritik olay kimliklerinden biridir. ACKLOG'un yerleşik brute force korelasyon kuralı, bu olayları kaynak IP ve hedef kullanıcı bazında gruplayarak saldırıları yayılmadan tespit eder.",
    content: `
      <h2>Event ID 4625 ve Brute Force İlişkisi</h2>
      <p>Başarısız oturum açma denemeleri, siber saldırıların en erken göstergesidir. Bir saldırgan, çalınmış kullanıcı listesiyle (credential stuffing) veya şifre tahmin sözlüğüyle (brute force) sisteme giriş yapmaya çalıştığında, her başarısız deneme Event ID 4625 olarak kaydedilir.</p>
      <h3>Sub Status Kodlarının Analizi</h3>
      <p><strong>0xC000006A (STATUS_WRONG_PASSWORD):</strong> Kullanıcı adı doğru ancak şifre yanlış. Saldırganın geçerli bir kullanıcı adı bildiğini gösterir – bu ciddi bir risk işaretidir.</p>
      <p><strong>0xC0000064 (STATUS_NO_SUCH_USER):</strong> Var olmayan kullanıcı adıyla deneme. Saldırganın kullanıcı adlarını taradığını (user enumeration) gösterir.</p>
      <p><strong>0xC0000072 (STATUS_ACCOUNT_DISABLED):</strong> Devre dışı bırakılmış hesaba giriş denemesi. Eski çalışan hesaplarının hedef alınması söz konusu olabilir.</p>
      <h3>ACKLOG Brute Force Korelasyon Kuralı</h3>
      <p>ACKLOG, aşağıdaki korelasyon mantığını yerleşik olarak uygular: Aynı kaynak IP'den, 5 dakika içinde, 10 veya daha fazla Event ID 4625 olayı gelirse → Brute Force Alarm üret. Alarm, kaynak IP'yi otomatik olarak izleme listesine ekler ve ardından bu IP'den gelen bir 4624 (başarılı giriş) olayı tespit edilirse → Hesap Ele Geçirme (Account Compromise) kritik alarmı yükseltilir.</p>
      <h3>Örnek Log Çıktısı</h3>
      <pre><code>An account failed to log on.
Subject:
  Security ID: NULL SID
Logon Type: 3
Account For Which Logon Failed:
  Account Name: administrator
  Sub Status: 0xC000006A
Network Information:
  Source Network Address: 203.0.113.50
  Source Port: 49521</code></pre>
    `,
    faqs: [
      { question: "Kaç başarısız deneme brute force sayılır?", answer: "ACKLOG varsayılan kuralı, 5 dakika içinde aynı kaynaktan 10+ başarısız deneme geldiğinde alarm üretir. Bu eşik değerler, kurumunuzun ihtiyacına göre özelleştirilebilir." },
      { question: "4625 olayları çok fazla gürültü üretir, nasıl filtrelenir?", answer: "ACKLOG, servis hesapları ve bilinen iç ağ kaynaklarını beyaz listeye almanıza olanak tanır. Böylece yalnızca gerçek tehdit göstergeleri alarm üretir." }
    ]
  },
  "4672-admin-yetkisi-atama": {
    title: "Windows Event ID 4672 – Özel Ayrıcalık Atanması (Admin Yetki) | ACKLOG",
    description: "Event ID 4672 admin yetki atama olayının analizi, privilege escalation tespiti ve SIEM izleme stratejileri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4672: Admin Yetkisi Atanması",
    heroSubtitle: "Bir kullanıcıya yönetici düzeyinde ayrıcalık verildiğinde oluşur. Privilege escalation tespiti için kritiktir.",
    shortAnswer: "Event ID 4672, bir oturum açma işlemi sırasında kullanıcıya SeDebugPrivilege, SeBackupPrivilege gibi yönetici düzeyinde ayrıcalıklar atandığında oluşturulur. Normal kullanıcılarda bu olay görülmemelidir. ACKLOG, admin dışı hesaplarda 4672 olayı tespit ettiğinde otomatik privilege escalation alarmı üretir.",
    technicalSummary: [
      "SeDebugPrivilege: İşlem belleğine erişim yetkisi (mimikatz gibi araçlar kullanır).",
      "SeBackupPrivilege: Tüm dosyalara okuma yetkisi (veri sızdırma riski).",
      "SeTakeOwnershipPrivilege: Herhangi bir nesnenin sahipliğini alma yetkisi.",
      "Admin dışı kullanıcıda 4672 → Privilege Escalation alarmı."
    ],
    resultParagraph: "Event ID 4672, yetki yükseltme saldırılarının (privilege escalation) en güvenilir göstergesidir. ACKLOG, bu olayları kullanıcı profilleriyle karşılaştırarak yalnızca anormal yetki atamalarında alarm üretir.",
    content: `
      <h2>Event ID 4672 ve Yetki Yükseltme</h2>
      <p>Windows işletim sisteminde bir kullanıcı oturum açtığında, hesabına atanmış özel ayrıcalıklar (privileges) kontrol edilir. Eğer kullanıcıya yönetici düzeyinde ayrıcalıklar atanmışsa, Event ID 4672 kaydedilir.</p>
      <h3>Kritik Ayrıcalıklar</h3>
      <p><strong>SeDebugPrivilege:</strong> Bu ayrıcalık, çalışan işlemlerin bellek alanına erişim sağlar. Saldırganlar, mimikatz gibi araçlarla bu yetkiyi kullanarak bellekteki şifreleri çalar (credential dumping).</p>
      <p><strong>SeImpersonatePrivilege:</strong> Başka bir kullanıcının kimliğine bürünme yetkisi. Token impersonation saldırılarında kullanılır.</p>
      <h3>ACKLOG ile İzleme Stratejisi</h3>
      <p>ACKLOG, organizasyondaki kullanıcıları profiller ve hangi hesapların admin yetkisine sahip olması gerektiğini öğrenir (baseline). Normal profili dışında bir hesapta 4672 olayı görüldüğünde, bu durumu yetki yükseltme girişimi olarak değerlendirir ve alarm üretir.</p>
    `,
    faqs: [
      { question: "4672 olayı her admin girişinde mi oluşur?", answer: "Evet, Domain Admin veya yerel admin hesaplarıyla her oturum açmada 4672 kaydedilir. ACKLOG, bilinen admin hesaplarını beyaz listeye alarak yalnızca beklenmeyen yetki atamalarında alarm üretir." }
    ]
  },
  "4720-kullanici-hesabi-olusturma": {
    title: "Windows Event ID 4720 – Yeni Kullanıcı Hesabı Oluşturma | ACKLOG",
    description: "Event ID 4720 kullanıcı hesabı oluşturma olayının güvenlik analizi ve yetkisiz hesap tespiti yöntemleri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4720: Kullanıcı Oluşturma",
    heroSubtitle: "Active Directory veya yerel makinede yeni kullanıcı hesabı oluşturulduğunda kaydedilir.",
    shortAnswer: "Event ID 4720, bir kullanıcı hesabı oluşturulduğunda Windows Security loguna yazılır. Saldırganlar, sisteme kalıcı erişim (persistence) sağlamak için gizli arka kapı hesapları oluştururlar. ACKLOG, onaylanmamış hesap oluşturma işlemlerini anlık tespit eder.",
    technicalSummary: [
      "Yeni oluşturulan hesabın kullanıcı adı, SID ve oluşturan admin bilgisi loglanır.",
      "Mesai dışı saatlerde oluşturulan hesaplar otomatik alarm üretir.",
      "AD dışında yerel makinede oluşturulan hesaplar ayrıca işaretlenir.",
      "Oluşturma sonrası hemen admin grubuna ekleme (4728/4732) korelasyonu."
    ],
    resultParagraph: "Yetkisiz kullanıcı hesabı oluşturma, saldırganların sisteme kalıcı erişim sağlama tekniğidir. ACKLOG, bu olayları oluşturan kişi ve zaman bazında analiz ederek şüpheli hesap oluşturmalarını anında yakalar.",
    content: `
      <h2>Event ID 4720 ve Persistence Saldırıları</h2>
      <p>Bir siber saldırgan sisteme ilk erişimi elde ettikten sonraki en kritik adım, kalıcı erişim (persistence) sağlamaktır. Bunun en yaygın yolu, yeni bir kullanıcı hesabı oluşturmak ve bu hesaba yönetici yetkileri vermektir.</p>
      <h3>Tehdit Senaryosu</h3>
      <p>Saldırgan, ele geçirdiği admin yetkisiyle gece 03:00'da "svc_backup" gibi meşru görünen bir servis hesabı oluşturur. Ardından bu hesabı Domain Admins grubuna ekler. Ertesi gün kendi erişimi kesilse bile, oluşturduğu arka kapı hesabı üzerinden sisteme dönebilir.</p>
      <h3>ACKLOG Korelasyon Zinciri</h3>
      <p>ACKLOG, şu olayları zincirleme olarak izler: Event ID 4720 (hesap oluşturma) → Event ID 4728 veya 4732 (gruba ekleme) → Event ID 4624 (yeni hesapla giriş). Bu üç olay kısa süre içinde gerçekleşirse, "Persistence Saldırısı" alarmı üretilir.</p>
    `,
    faqs: [
      { question: "IT departmanının oluşturduğu hesaplar nasıl ayrıştırılır?", answer: "ACKLOG, onaylı IT yöneticilerini ve iş saatlerini beyaz listeye alır. Yalnızca tanımsız kaynaklardan veya anormal saatlerde oluşturulan hesaplar alarm üretir." }
    ]
  },
  "4740-hesap-kilitleme": {
    title: "Windows Event ID 4740 – Hesap Kilitlenme Olayı ve Analizi | ACKLOG",
    description: "Event ID 4740 hesap kilitlenme analizi, kök neden tespiti ve SIEM ile brute force korelasyonu.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4740: Hesap Kilitlenme",
    heroSubtitle: "Bir kullanıcı hesabı kilitlendiğinde Domain Controller'da oluşur. Brute force'un sonuç göstergesidir.",
    shortAnswer: "Event ID 4740, Active Directory'de bir kullanıcı hesabı kilitlendiğinde Domain Controller üzerinde kaydedilir. Hesap kilitlenmeleri, brute force saldırısının başarılı sonucu veya kullanıcının eski şifresini kullanan bir uygulamanın varlığına işaret eder. ACKLOG, kilitleme kaynağını (Caller Computer Name) analiz ederek kök nedeni hızla belirlemenizi sağlar.",
    technicalSummary: [
      "Kilitlenme kaynağını gösteren 'Caller Computer Name' alanı analiz edilir.",
      "Aynı anda birden fazla hesap kilitlenirse toplu brute force alarmı üretilir.",
      "Kilitlenme öncesi 4625 olaylarıyla korelasyon kurularak kaynak IP tespit edilir.",
      "VIP kullanıcı hesaplarının kilitlenmesinde öncelikli alarm üretilir."
    ],
    resultParagraph: "Hesap kilitlenmeleri genellikle iş kesintisine neden olur. ACKLOG, Event ID 4740'ı 4625 olaylarıyla ilişkilendirerek kilitlenmenin bir saldırıdan mı yoksa yapılandırma hatasından mı kaynaklandığını hızla ayırt eder.",
    content: `
      <h2>Hesap Kilitlenme: Saldırı mı, Yapılandırma Hatası mı?</h2>
      <p>Active Directory ortamlarında hesap kilitlenmeleri en sık karşılaşılan destek taleplerinden biridir. Kilitlenmenin kaynağı; bir brute force saldırısı, eski şifreyi kullanan bir mobil cihaz veya yanlış yapılandırılmış bir servis hesabı olabilir.</p>
      <h3>Kök Neden Analizi</h3>
      <p>ACKLOG, Event ID 4740 logundaki <strong>Caller Computer Name</strong> alanını kullanarak kilitlenmenin hangi makineden kaynaklandığını anında belirler. Bu bilgi, kilitlenmenin kaynağını dakikalar yerine saniyeler içinde bulmanızı sağlar.</p>
      <h3>Toplu Kilitlenme Senaryosu</h3>
      <p>Eğer 10 dakika içinde 5+ farklı kullanıcı hesabı kilitlenirse, bu durum organizasyona yönelik koordineli bir brute force saldırısına işaret eder. ACKLOG, bu senaryoyu "Toplu Hesap Kilitlenme" olarak sınıflandırır ve kritik alarm seviyesine yükseltir.</p>
    `,
    faqs: [
      { question: "Hesap kilitlenme kaynağını nasıl bulurum?", answer: "ACKLOG, Event ID 4740 logundaki Caller Computer Name alanını otomatik olarak ayrıştırır ve dashboard'da gösterir. Tek tıklamayla kilitlenmeye neden olan makineyi görebilirsiniz." }
    ]
  },
  "1102-audit-log-temizleme": {
    title: "Windows Event ID 1102 – Güvenlik Logu Temizleme (Anti-Forensics) | ACKLOG",
    description: "Event ID 1102 audit log temizleme tespiti, anti-forensics saldırıları ve SIEM ile delil koruma yöntemleri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 1102: Log Temizleme",
    heroSubtitle: "Güvenlik logunun temizlendiğini gösteren kritik olay. Saldırganların izlerini silme girişiminin kanıtıdır.",
    shortAnswer: "Event ID 1102, Windows Security loglarının temizlendiğinde (clear) oluşturulur. Meşru senaryolarda log temizleme nadiren yapılır. Saldırganlar, sisteme sızdıktan sonra izlerini silmek için logları temizler. ACKLOG, bu olayı anlık kritik alarm olarak değerlendirir ve temizleme öncesi logların kendi veritabanında güvenli kopyasını saklar.",
    technicalSummary: [
      "Log temizleyen kullanıcının kimliği (Subject) kaydedilir.",
      "Bu olay her zaman kritik alarm seviyesinde değerlendirilir.",
      "ACKLOG, logları gerçek zamanlı topladığı için temizleme öncesi veriler korunur.",
      "KamuSM zaman damgasıyla imzalanan loglar, temizlemeye karşı değiştirilemez."
    ],
    resultParagraph: "Log temizleme, siber saldırıların son aşamasıdır (MITRE ATT&CK: Defense Evasion). ACKLOG, logları anlık olarak merkezi veritabanına aktardığı için saldırgan uç noktadaki logları temizlese bile deliller korunur.",
    content: `
      <h2>Log Temizleme ve Anti-Forensics</h2>
      <p>MITRE ATT&CK çerçevesinde "Indicator Removal: Clear Windows Event Logs" (T1070.001) olarak sınıflandırılan bu teknik, saldırganların sisteme yaptıkları müdahalenin kanıtlarını silmek için kullandıkları yöntemdir.</p>
      <h3>Neden Kritik?</h3>
      <p>Normal IT operasyonlarında güvenlik loglarının temizlenmesi neredeyse hiç gerekmez. Bu olayın gerçekleşmesi, ya bir saldırganın izlerini sildiğine ya da yetkisiz bir kişinin kasıtlı olarak delil karartma yaptığına işaret eder.</p>
      <h3>ACKLOG'un Koruma Mekanizması</h3>
      <p>ACKLOG, Windows Event loglarını gerçek zamanlı olarak merkezi veritabanına aktarır. Saldırgan uç noktadaki logları temizlese bile, ACKLOG'un Columnar Database'inde tüm geçmiş loglar korunur ve KamuSM zaman damgasıyla imzalanır. Bu sayede adli bilişim süreçlerinde delil bütünlüğü garanti altındadır.</p>
    `,
    faqs: [
      { question: "Log temizleme her zaman saldırı mı demektir?", answer: "Meşru nedenlerle (disk alanı vb.) log temizleme yapılabilir, ancak bu işlem çok nadirdir ve her durumda soruşturulmalıdır. ACKLOG, bu olayı koşulsuz olarak kritik alarm olarak işaretler." }
    ]
  },
  "4688-yeni-islem-olusturma": {
    title: "Windows Event ID 4688 – Yeni Süreç Oluşturma ve Komut İzleme | ACKLOG",
    description: "Event ID 4688 süreç oluşturma izleme, zararlı komut tespiti ve process command line auditing yöntemleri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4688: Süreç Oluşturma",
    heroSubtitle: "Sistemde çalıştırılan her yeni süreç (process) bu Event ID ile kaydedilir. Zararlı yazılım tespiti için vazgeçilmezdir.",
    shortAnswer: "Event ID 4688, Windows'ta yeni bir süreç (process) oluşturulduğunda kaydedilir. Command Line Auditing etkinleştirildiğinde, çalıştırılan komutun tam metni de loglanır. ACKLOG, powershell.exe -enc, certutil.exe -decode, mshta.exe gibi şüpheli komut kalıplarını otomatik tespit eder.",
    technicalSummary: [
      "Process Command Line: Çalıştırılan komutun tam metni (audit policy gerekir).",
      "Parent Process ID: Süreci başlatan ana sürecin kimliği (process tree).",
      "Şüpheli süreç adları: powershell.exe, cmd.exe, wscript.exe, mshta.exe izleme.",
      "Living-off-the-Land (LOLBins) saldırı tekniklerinin tespiti."
    ],
    resultParagraph: "Event ID 4688 ve Command Line Auditing, modern siber güvenliğin temel taşıdır. ACKLOG, bu verileri MITRE ATT&CK teknikleriyle eşleştirerek zararlı yazılım ve LOLBins saldırılarını anında tespit eder.",
    content: `
      <h2>Süreç İzleme ve Zararlı Komut Tespiti</h2>
      <p>Modern siber saldırılar, çoğunlukla sistemde zaten var olan meşru araçları (Living-off-the-Land Binaries / LOLBins) kötüye kullanarak gerçekleştirilir. PowerShell, certutil, mshta, regsvr32 gibi Windows araçları saldırganlar tarafından zararlı payload indirmek ve çalıştırmak için kullanılır.</p>
      <h3>Command Line Auditing</h3>
      <p>Windows Audit Policy'de "Include command line in process creation events" ayarı etkinleştirildiğinde, Event ID 4688 logları çalıştırılan komutun tam metnini içerir. Bu, tehdit avcılığı (threat hunting) için en değerli veri kaynağıdır.</p>
      <h3>ACKLOG Tespit Kuralları</h3>
      <p>ACKLOG, şu komut kalıplarını otomatik olarak şüpheli işaretler: Base64 encoded PowerShell komutları (-enc, -encodedcommand), certutil ile dosya indirme, mshta ile uzak script çalıştırma, regsvr32 ile DLL yükleme (Squiblydoo tekniği).</p>
    `,
    faqs: [
      { question: "Command Line Auditing performansı etkiler mi?", answer: "Ek log hacmi oluşturur ancak modern donanımlarda performans etkisi ihmal edilebilir düzeydedir. Güvenlik kazanımı, performans maliyetinden çok daha değerlidir." }
    ]
  },
  "7045-yeni-servis-kurulumu": {
    title: "Windows Event ID 7045 – Yeni Servis Kurulumu ve Zararlı Yazılım Tespiti | ACKLOG",
    description: "Event ID 7045 servis kurulumu izleme, arka kapı (backdoor) tespiti ve SIEM alarm stratejileri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 7045: Yeni Servis Kurulumu",
    heroSubtitle: "Sisteme yeni bir Windows servisi kurulduğunda oluşur. Zararlı yazılımların kalıcılık (persistence) yöntemidir.",
    shortAnswer: "Event ID 7045, Windows sisteme yeni bir servis kurulduğunda System loguna kaydedilir. Saldırganlar, zararlı yazılımlarını sistem servisi olarak kurarak her başlangıçta otomatik çalışmasını sağlar. ACKLOG, onaylanmamış servis kurulumlarını anlık olarak tespit eder.",
    technicalSummary: [
      "Servis adı, çalıştırılabilir dosya yolu ve başlangıç tipi loglanır.",
      "Temp veya kullanıcı klasöründen çalışan servisler otomatik alarm üretir.",
      "cmd.exe veya powershell.exe çalıştıran servisler kritik olarak işaretlenir.",
      "Bilinen yazılım beyaz listesi ile false positive oranı minimize edilir."
    ],
    resultParagraph: "Yetkisiz servis kurulumu, zararlı yazılımların en yaygın kalıcılık (persistence) tekniğidir. ACKLOG, Event ID 7045'i beyaz liste ve dosya yolu analizi ile değerlendirerek gerçek tehditleri saniyeler içinde yakalar.",
    content: `
      <h2>Servis Kurulumu ve Persistence</h2>
      <p>Windows servisleri, sistem başlangıcında otomatik olarak çalışır. Saldırganlar bu mekanizmayı kullanarak zararlı yazılımlarını kalıcı hale getirir. MITRE ATT&CK'ta "Create or Modify System Process: Windows Service" (T1543.003) olarak sınıflandırılır.</p>
      <h3>Şüpheli Servis Göstergeleri</h3>
      <p>Şüpheli servis kurulumlarının tipik özellikleri: rastgele veya anlamsız servis adları, C:\\Users\\ veya C:\\Temp\\ gibi geçici klasörlerden çalışan servisler, cmd.exe /c veya powershell.exe ile başlayan ImagePath değerleri, LocalSystem hesabıyla çalışan bilinmeyen servisler.</p>
      <h3>ACKLOG ile İzleme</h3>
      <p>ACKLOG, organizasyondaki meşru yazılım servislerini beyaz listeye alır ve yeni kurulan her servisi bu listeyle karşılaştırır. Listede olmayan bir servis kurulduğunda, dosya yolu ve çalıştırma parametreleri analiz edilerek risk seviyesi belirlenir.</p>
    `,
    faqs: [
      { question: "Yazılım güncellemeleri de 7045 üretir mi?", answer: "Evet, meşru yazılım kurulumları da yeni servis oluşturabilir. ACKLOG, bilinen yazılım yayıncılarını ve imzalı servisleri beyaz listeye alarak yalnızca bilinmeyen kaynaklardan gelen servislerde alarm üretir." }
    ]
  },
  "4698-zamanlanmis-gorev-olusturma": {
    title: "Windows Event ID 4698 – Zamanlanmış Görev Oluşturma ve Persistence | ACKLOG",
    description: "Event ID 4698 scheduled task oluşturma izleme, persistence ve lateral movement tespiti.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4698: Zamanlanmış Görev",
    heroSubtitle: "Yeni bir Scheduled Task oluşturulduğunda kaydedilir. Saldırganların zamanlayıcı ile kalıcılık sağlama yöntemi.",
    shortAnswer: "Event ID 4698, Windows Task Scheduler üzerinden yeni bir zamanlanmış görev oluşturulduğunda kaydedilir. Saldırganlar, zararlı komutları belirli aralıklarla çalıştırmak veya uzak makinelerde kod yürütmek (lateral movement) için scheduled task kullanır. ACKLOG, onaylanmamış görev oluşturma işlemlerini anlık tespit eder.",
    technicalSummary: [
      "Görev adı, çalıştırılacak komut ve zamanlama bilgisi loglanır.",
      "Uzak makinede oluşturulan görevler lateral movement göstergesidir.",
      "PowerShell veya cmd ile script çalıştıran görevler otomatik işaretlenir.",
      "SYSTEM yetkisiyle oluşturulan görevler özel dikkatle izlenir."
    ],
    resultParagraph: "Zamanlanmış görevler, hem persistence hem de lateral movement için kullanılan güçlü bir saldırı tekniğidir. ACKLOG, Event ID 4698'i görev içeriği ve oluşturma bağlamı ile analiz ederek meşru IT operasyonlarını saldırılardan ayırt eder.",
    content: `
      <h2>Zamanlanmış Görevler ve Saldırı Senaryoları</h2>
      <p>Windows Task Scheduler, belirli zamanlarda veya tetikleyicilere göre komut çalıştırmak için kullanılır. Saldırganlar bu mekanizmayı iki ana amaçla kullanır: kalıcılık (persistence) sağlamak ve ağdaki diğer makinelere yayılmak (lateral movement).</p>
      <h3>Lateral Movement ile Scheduled Task</h3>
      <p>Saldırganlar, ele geçirdikleri admin yetkisiyle ağdaki diğer makinelerde uzaktan zamanlanmış görev oluşturabilir (schtasks /create /s REMOTE-PC). Bu teknik, MITRE ATT&CK'ta T1053.005 olarak sınıflandırılır.</p>
      <h3>ACKLOG Tespit Yaklaşımı</h3>
      <p>ACKLOG, yeni oluşturulan her zamanlanmış görevi şu kriterlere göre değerlendirir: görev oluşturan kullanıcı yetkili mi, görev uzak bir makinede mi oluşturuldu, çalıştırılacak komut şüpheli pattern içeriyor mu, görev SYSTEM yetkisiyle mi çalışacak.</p>
    `,
    faqs: [
      { question: "IT ekibinin oluşturduğu görevler nasıl ayırt edilir?", answer: "ACKLOG, onaylı IT kullanıcılarını ve bilinen görev adlarını beyaz listeye alır. Yalnızca tanımsız kaynaklardan gelen veya şüpheli komut içeren görevlerde alarm üretir." }
    ]
  },
  "4663-dosya-erisim-girisimi": {
    title: "Windows Event ID 4663 – Dosya Erişim Girişimi ve Veri Sızıntısı Tespiti | ACKLOG",
    description: "Event ID 4663 dosya erişim izleme, hassas veri sızıntısı tespiti ve DLP entegrasyonu.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4663: Dosya Erişim İzleme",
    heroSubtitle: "Denetlenen bir dosya veya klasöre erişildiğinde oluşur. Veri sızıntısı önleme (DLP) için temel olaydır.",
    shortAnswer: "Event ID 4663, Windows SACL (System Access Control List) ile denetlenen bir nesneye (dosya, klasör, registry anahtarı) erişildiğinde oluşturulur. ACKLOG, hassas dosya paylaşımlarına (finans verileri, HR kayıtları, müşteri veritabanları) yapılan erişimleri izleyerek toplu dosya kopyalama gibi veri sızıntısı girişimlerini tespit eder.",
    technicalSummary: [
      "Erişilen nesne yolu, erişim türü (okuma/yazma/silme) ve kullanıcı bilgisi loglanır.",
      "Kısa sürede çok sayıda dosya erişimi → Toplu veri kopyalama alarmı.",
      "Mesai dışı saatlerde hassas klasörlere erişim otomatik işaretlenir.",
      "USB'ye yazma veya bulut senkronizasyonu ile korelasyon kurulur."
    ],
    resultParagraph: "Dosya erişim izleme, iç tehdit (insider threat) ve veri sızıntısı önlemenin temel bileşenidir. ACKLOG, Event ID 4663'ü kullanıcı davranış profilleriyle karşılaştırarak anormal erişim kalıplarını otomatik tespit eder.",
    content: `
      <h2>Dosya Erişim İzleme ve İç Tehdit</h2>
      <p>Kurumsal verilerin en büyük tehditlerinden biri, yetkili kullanıcıların kasıtlı veya kazara veri sızdırmasıdır (insider threat). Event ID 4663, Windows dosya sistemi denetimi (File System Auditing) etkinleştirildiğinde, izlenen dosyalara her erişimde oluşturulur.</p>
      <h3>Veri Sızıntısı Senaryosu</h3>
      <p>Bir çalışan, işten ayrılmadan önce müşteri veritabanını USB belleğe kopyalamak için dosya paylaşımındaki yüzlerce dosyaya peş peşe erişir. Normal günlük erişim kalıbı 10-20 dosya iken, sızıntı girişiminde bu sayı yüzlerce veya binlerce olabilir.</p>
      <h3>ACKLOG Tespit Kuralları</h3>
      <p>ACKLOG, kullanıcıların dosya erişim profillerini (baseline) oluşturur. Bir kullanıcı normal profilinin 5 katından fazla dosyaya eriştiğinde, "Anormal Dosya Erişimi" alarmı üretilir.</p>
    `,
    faqs: [
      { question: "Tüm dosya erişimleri loglanır mı?", answer: "Hayır, yalnızca Windows SACL ile denetlemeye alınan dosya ve klasörlerdeki erişimler Event ID 4663 olarak loglanır. Hassas veriler içeren paylaşımları seçerek denetlemeye almanız önerilir." }
    ]
  },
  "4728-guvenlik-grubuna-uye-ekleme": {
    title: "Windows Event ID 4728 – Güvenlik Grubuna Üye Ekleme | ACKLOG",
    description: "Event ID 4728 AD güvenlik grubuna üye ekleme izleme, yetki yükseltme tespiti ve SIEM alarm kuralları.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4728: Gruba Üye Ekleme",
    heroSubtitle: "Active Directory güvenlik grubuna (Domain Admins, Enterprise Admins vb.) yeni üye eklendiğinde oluşur.",
    shortAnswer: "Event ID 4728, Active Directory'deki bir güvenlik grubuna (security-enabled global group) yeni bir üye eklendiğinde kaydedilir. Özellikle Domain Admins, Enterprise Admins gibi kritik gruplara ekleme yapılması, yetki yükseltme saldırısının güçlü bir göstergesidir. ACKLOG, kritik gruplardaki değişiklikleri anlık alarm olarak raporlar.",
    technicalSummary: [
      "Eklenen üye, hedef grup ve işlemi yapan admin bilgisi loglanır.",
      "Domain Admins, Enterprise Admins değişikliklerinde kritik alarm üretilir.",
      "Mesai dışı veya onay sürecisiz ekleme işlemleri otomatik işaretlenir.",
      "Event ID 4729 (üye çıkarma) ile korelasyon kurularak geçici yetki istismarı tespiti."
    ],
    resultParagraph: "Kritik güvenlik gruplarına yapılan yetkisiz ekleme, saldırganların Domain Admin seviyesine yükselmesinin en doğrudan yoludur. ACKLOG, bu olayları değişiklik yönetimi (change management) süreçleriyle karşılaştırarak onaysız değişiklikleri anında yakalar.",
    content: `
      <h2>AD Güvenlik Grupları ve Yetki Yükseltme</h2>
      <p>Active Directory güvenlik grupları, organizasyondaki erişim yetkilerini belirler. Domain Admins grubuna eklenen bir kullanıcı, tüm alan üzerinde tam yetki kazanır. Bu nedenle, güvenlik gruplarındaki değişiklikler en sıkı şekilde izlenmelidir.</p>
      <h3>Golden Ticket Senaryosu</h3>
      <p>Gelişmiş saldırılarda, saldırgan krbtgt hesabının hash'ini ele geçirerek Domain Admin yetkisi kazanabilir ve kendisini gizlice gruplara ekleyebilir. ACKLOG, beklenmeyen grup değişikliklerini tespit ederek bu tür saldırıları ortaya çıkarır.</p>
    `,
    faqs: [
      { question: "4728 ile 4732 arasındaki fark nedir?", answer: "Event ID 4728 global güvenlik grubuna (Domain Admins gibi), 4732 ise yerel güvenlik grubuna (Administrators gibi) üye eklenmesini kaydeder." }
    ]
  },
  "4776-ntlm-dogrulama": {
    title: "Windows Event ID 4776 – NTLM Kimlik Doğrulama ve Pass-the-Hash Tespiti | ACKLOG",
    description: "Event ID 4776 NTLM doğrulama izleme, Pass-the-Hash saldırı tespiti ve Kerberos'a geçiş stratejileri.",
    badge: "Event ID Referans",
    heroTitle: "Event ID 4776: NTLM Doğrulama",
    heroSubtitle: "NTLM protokolü ile kimlik doğrulama yapıldığında oluşur. Pass-the-Hash saldırılarının göstergesi olabilir.",
    shortAnswer: "Event ID 4776, Domain Controller'ın NTLM protokolü ile kimlik doğrulaması yaptığında kaydedilir. Modern Active Directory ortamlarında Kerberos tercih edilir, NTLM kullanımı eski sistemlerin varlığına veya saldırganların Pass-the-Hash tekniğiyle hash değerini kullanarak kimlik doğrulamasına işaret edebilir.",
    technicalSummary: [
      "NTLM doğrulamanın başarı/başarısızlık durumu ve kaynak bilgisi loglanır.",
      "Kerberos yerine NTLM kullanımı güvenlik riski olarak değerlendirilir.",
      "Pass-the-Hash saldırılarında NTLM hash ile oturum açma tespit edilir.",
      "NTLM kullanımını azaltmak için Kerberos'a geçiş yol haritası sunulur."
    ],
    resultParagraph: "NTLM protokolünün izlenmesi, Pass-the-Hash gibi gelişmiş kimlik hırsızlığı saldırılarının tespiti için kritiktir. ACKLOG, Event ID 4776'yı analiz ederek NTLM kullanım kalıplarını ve potansiyel hash saldırılarını tespit eder.",
    content: `
      <h2>NTLM ve Pass-the-Hash Saldırıları</h2>
      <p>NTLM (NT LAN Manager), Windows ağlarında kullanılan eski bir kimlik doğrulama protokolüdür. Kerberos'a göre daha zayıf güvenlik sunar. Saldırganlar, sistemlerden elde ettikleri NTLM hash değerlerini kullanarak şifre bilmeden oturum açabilir (Pass-the-Hash).</p>
      <h3>Pass-the-Hash Nasıl Çalışır?</h3>
      <p>Saldırgan, bir sistemin belleğinden (lsass.exe) NTLM hash değerlerini çalar (mimikatz vb.). Bu hash değerini kullanarak ağdaki diğer sistemlere NTLM ile kimlik doğrulaması yapar. Şifreyi bilmesine gerek yoktur.</p>
      <h3>ACKLOG Tespit Stratejisi</h3>
      <p>ACKLOG, NTLM kullanım haritasını çıkarır ve Kerberos beklenirken NTLM ile yapılan oturumları şüpheli olarak işaretler. Özellikle admin hesaplarının NTLM ile oturum açması kritik alarm üretir.</p>
    `,
    faqs: [
      { question: "NTLM'i tamamen kapatabilir miyiz?", answer: "Eski uygulamalar ve cihazlar NTLM gerektirebilir. ACKLOG, NTLM kullanan sistemleri raporlayarak Kerberos'a geçiş planı oluşturmanıza yardımcı olur." }
    ]
  }
};
