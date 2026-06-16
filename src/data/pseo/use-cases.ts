import { SEOData } from '../programmatic-seo';

export const useCasePages: Record<string, SEOData> = {
  "brute-force-saldirisi-tespiti": {
    title: "Brute Force Saldırısı Tespiti – SIEM ile Kaba Kuvvet Engelleme | ACKLOG",
    description: "SIEM ile brute force (kaba kuvvet) saldırı tespiti, korelasyon kuralları ve otomatik engelleme yöntemleri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Brute Force Saldırısı Tespiti",
    heroSubtitle: "Kısa sürede çok sayıda başarısız oturum açma denemesini tespit edin ve saldırganı otomatik engelleyin.",
    shortAnswer: "Brute force saldırısı, bir saldırganın şifre tahmin sözlüğü veya çalınmış kimlik bilgileriyle sisteme giriş yapmaya çalışmasıdır. ACKLOG, 5 dakika içinde aynı kaynaktan gelen 10+ başarısız denemeyi (Event ID 4625) otomatik olarak tespit eder, ardından başarılı giriş olursa (4624) hesap ele geçirme alarmı yükseltir.",
    technicalSummary: [
      "Windows Event ID 4625 (başarısız giriş) ve 4624 (başarılı giriş) korelasyonu.",
      "SSH auth.log başarısız denemeleri (Linux) için aynı mantık.",
      "Kaynak IP bazında otomatik engelleme (SOAR entegrasyonu).",
      "Credential stuffing ve password spraying farklılıklarının ayrımı."
    ],
    resultParagraph: "ACKLOG'un yerleşik brute force korelasyon kuralı, saldırıları saniyeler içinde tespit eder ve SOAR entegrasyonu ile kaynak IP'yi otomatik olarak firewall'da engelleyebilir.",
    content: `
      <h2>Brute Force Nedir ve Neden Tehlikelidir?</h2>
      <p>Brute force saldırısı, siber saldırganların en temel ve en yaygın kullandığı tekniklerden biridir. Saldırgan, hedef sistemdeki kullanıcı hesaplarına binlerce farklı şifre kombinasyonu deneyerek erişim sağlamaya çalışır. MITRE ATT&CK çerçevesinde T1110 olarak sınıflandırılır.</p>
      <h3>Saldırı Türleri</h3>
      <p><strong>Brute Force (Klasik):</strong> Tek bir hesaba çok sayıda şifre denenir. Hesap kilitleme politikası ile kısmen engellenebilir.</p>
      <p><strong>Password Spraying:</strong> Çok sayıda hesaba az sayıda yaygın şifre denenir. Kilitleme eşiğinin altında kaldığı için tespit edilmesi zordur.</p>
      <p><strong>Credential Stuffing:</strong> Başka sitelerden sızdırılmış kullanıcı-şifre çiftleri denenir. Kullanıcıların şifre tekrarı alışkanlığını hedefler.</p>
      <h3>ACKLOG Korelasyon Kuralı</h3>
      <p>ACKLOG şu korelasyon zincirini uygular: Aynı kaynak IP → 5 dakikada 10+ Event ID 4625 → Brute Force Alarmı. Ardından: Aynı kaynak IP → Event ID 4624 (başarılı giriş) → Hesap Ele Geçirme Kritik Alarmı.</p>
      <h3>Gerekli Log Kaynakları</h3>
      <p>Windows Domain Controller Event logları (4625, 4624, 4740), Linux SSH auth.log, VPN gateway logları, Web uygulaması login logları.</p>
    `,
    faqs: [
      { question: "Password spraying nasıl tespit edilir?", answer: "ACKLOG, farklı hesaplara yapılan düşük frekanslı başarısız denemeleri IP bazında gruplar. Aynı IP'den 10 farklı hesaba 1'er deneme yapılması da alarm üretir." },
      { question: "Otomatik IP engelleme yapılabiliyor mu?", answer: "Evet, ACKLOG'un SOAR entegrasyonu ile brute force alarm üretildiğinde kaynak IP otomatik olarak firewall'da engellenir." }
    ]
  },
  "ransomware-erken-uyari": {
    title: "Ransomware (Fidye Yazılımı) Erken Uyarı Sistemi – SIEM Tespiti | ACKLOG",
    description: "SIEM ile fidye yazılımı (ransomware) saldırılarını şifreleme başlamadan önce tespit etme ve durdurma yöntemleri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Ransomware Erken Uyarı",
    heroSubtitle: "Fidye yazılımı saldırısını şifreleme başlamadan tespit edin ve kritik verilerinizi koruyun.",
    shortAnswer: "Fidye yazılımları dosyaları şifrelemeden önce keşif (reconnaissance), yanal hareket (lateral movement) ve yetki yükseltme (privilege escalation) aşamalarından geçer. ACKLOG, bu ön aşamalardaki anormal davranışları tespit ederek fidye yazılımını şifreleme başlamadan durdurmanıza olanak tanır.",
    technicalSummary: [
      "Toplu dosya uzantısı değişikliği tespiti (dosya şifreleme göstergesi).",
      "Shadow copy silme komutlarının (vssadmin delete shadows) izlenmesi.",
      "Anormal ağ taraması (SMB port scan) ve yanal hareket tespiti.",
      "Bilinen ransomware IOC'leri (hash, domain, IP) ile tehdit istihbaratı eşleştirmesi."
    ],
    resultParagraph: "ACKLOG, fidye yazılımı saldırı zincirinin her aşamasını izleyerek şifreleme başlamadan müdahale etmenizi sağlar. Yerleşik ransomware korelasyon kuralları, MITRE ATT&CK ile eşleştirilmiş şekilde çalışır.",
    content: `
      <h2>Fidye Yazılımı Saldırı Zinciri</h2>
      <p>Modern fidye yazılımı saldırıları, dosyaları şifrelemeye başlamadan önce uzun bir hazırlık süreci geçirir. Bu süreçte saldırgan: sisteme ilk erişimi sağlar (phishing, RDP brute force), ağda keşif yapar, yetki yükseltir, yanal hareketle yayılır ve son olarak şifreleme başlatır. ACKLOG, bu zincirin her halkasını tespit eder.</p>
      <h3>Erken Uyarı Göstergeleri</h3>
      <p><strong>Shadow Copy Silme:</strong> Saldırganlar, yedeklerden geri dönüşü engellemek için ilk olarak VSS (Volume Shadow Copy) yedeklerini siler. "vssadmin delete shadows /all /quiet" komutu çalıştırıldığında ACKLOG kritik alarm üretir.</p>
      <p><strong>Toplu Dosya Değişikliği:</strong> Kısa sürede yüzlerce dosyanın uzantısının değişmesi (.locked, .encrypted vb.) şifreleme başladığına işaret eder.</p>
      <h3>ACKLOG Ransomware Korelasyonu</h3>
      <p>ACKLOG şu olayların kombinasyonunu izler: Şüpheli RDP girişi (dış IP) → Recon komutu (nltest, net group) → Shadow copy silme → Toplu dosya erişimi. Bu zincirdeki herhangi iki olay birlikte gerçekleştiğinde ransomware ön uyarısı üretilir.</p>
    `,
    faqs: [
      { question: "Şifreleme başladıktan sonra durdurulabilir mi?", answer: "ACKLOG'un SOAR entegrasyonu, alarm üretildiğinde etkilenen makineyi ağdan otomatik izole edebilir. Ancak asıl hedef, şifreleme başlamadan önce ön aşamalardaki göstergeleri yakalamaktır." }
    ]
  },
  "veri-sizintisi-dlp-izleme": {
    title: "Veri Sızıntısı (DLP) İzleme ve Engelleme – SIEM Tespiti | ACKLOG",
    description: "SIEM ile veri sızıntısı önleme (DLP), iç tehdit tespiti ve hassas veri erişim izleme yöntemleri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Veri Sızıntısı Tespiti (DLP)",
    heroSubtitle: "Hassas kurumsal verilerinizin yetkisiz kopyalanmasını, e-posta ile gönderilmesini veya USB'ye aktarılmasını tespit edin.",
    shortAnswer: "Veri sızıntısı (data exfiltration), kurumsal verilerin yetkisiz şekilde dışarı çıkarılmasıdır. ACKLOG, dosya erişim logları (Event ID 4663), e-posta gateway logları, USB cihaz bağlantı logları ve bulut depolama erişim loglarını korelasyonla analiz ederek anormal veri hareketlerini tespit eder.",
    technicalSummary: [
      "Toplu dosya erişimi ve kopyalama kalıplarının tespiti (Event ID 4663).",
      "USB bellek bağlantısı ve büyük veri transferi izleme.",
      "E-posta ile büyük ek gönderimi veya kişisel e-postaya yönlendirme tespiti.",
      "Bulut depolama (OneDrive, Google Drive, Dropbox) anormal upload izleme."
    ],
    resultParagraph: "Veri sızıntısı, kurumlar için maddi zarar ve itibar kaybının yanı sıra KVKK kapsamında ağır para cezalarına neden olabilir. ACKLOG, çoklu veri kaynağını korelasyonla analiz ederek sızıntı girişimlerini erken aşamada yakalar.",
    content: `
      <h2>Veri Sızıntısı Türleri ve Tespit Yöntemleri</h2>
      <p>Kurumsal veri sızıntısı, dış saldırganlar veya iç tehditler (insider threat) tarafından gerçekleştirilebilir. ACKLOG, her iki senaryoyu da kapsayan çok katmanlı bir izleme stratejisi uygular.</p>
      <h3>İç Tehdit Senaryosu</h3>
      <p>İşten ayrılmak üzere olan bir çalışan, müşteri veritabanını USB belleğe kopyalar. ACKLOG, bu senaryoyu şu korelasyonla tespit eder: USB bağlantı olayı → Kısa sürede yüzlerce dosya erişimi (4663) → Büyük veri transferi.</p>
      <h3>Dış Saldırgan Senaryosu</h3>
      <p>Sisteme sızan saldırgan, verileri küçük parçalar halinde (low-and-slow) DNS tünelleme ile dışarı çıkarır. ACKLOG, anormal DNS sorgu hacmini ve uzun subdomain'leri tespit ederek bu tekniği ortaya çıkarır.</p>
    `,
    faqs: [
      { question: "KVKK kapsamında veri sızıntısı bildirim süresi nedir?", answer: "KVKK'ya göre veri ihlali tespit edildikten sonra 72 saat içinde Kişisel Verileri Koruma Kurulu'na bildirilmelidir. ACKLOG, ihlal tespitinde otomatik rapor oluşturarak bu süreç için hazırlıklı olmanızı sağlar." }
    ]
  },
  "yetkisiz-erisim-tespiti": {
    title: "Yetkisiz Erişim Tespiti – SIEM ile Kimlik ve Erişim İzleme | ACKLOG",
    description: "Yetkisiz erişim girişimlerinin SIEM ile tespiti, kullanıcı davranış analizi ve erişim anomalisi izleme.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Yetkisiz Erişim Tespiti",
    heroSubtitle: "Kullanıcıların yetkisi olmayan kaynaklara erişim girişimlerini anlık tespit edin.",
    shortAnswer: "Yetkisiz erişim, bir kullanıcının izni olmayan dosyalara, sistemlere veya veritabanlarına erişmeye çalışmasıdır. ACKLOG, erişim reddi logları, UEBA (kullanıcı davranış analizi) ve rol tabanlı erişim karşılaştırması ile anormal erişim kalıplarını otomatik tespit eder.",
    technicalSummary: [
      "Erişim reddi olaylarının (Access Denied) merkezi izlenmesi.",
      "UEBA ile normal erişim profili dışı davranış tespiti.",
      "Ayrıcalıklı hesapların (admin, DBA) erişim haritası izleme.",
      "Veritabanı sorgu loglarından hassas tablo erişimi izleme."
    ],
    resultParagraph: "Yetkisiz erişim tespiti, hem iç tehdit hem de hesap ele geçirme saldırılarının erken göstergesidir. ACKLOG'un UEBA modülü, kullanıcı davranışlarını öğrenerek normal dışı erişimleri otomatik olarak işaretler.",
    content: `
      <h2>Yetkisiz Erişim ve UEBA</h2>
      <p>Bir kullanıcının normalde erişmediği kaynaklara aniden erişmeye başlaması, ya hesabının ele geçirildiğine ya da kullanıcının kötü niyetli olduğuna işaret eder. ACKLOG'un UEBA modülü, her kullanıcının normal erişim profilini oluşturur ve sapmaları tespit eder.</p>
      <h3>Tespit Senaryoları</h3>
      <p><strong>Hesap Ele Geçirme:</strong> Çalınan kimlik bilgileriyle giriş yapan saldırgan, normal kullanıcının erişmediği kaynaklara erişir. ACKLOG, bu sapma kalıbını tespit eder.</p>
      <p><strong>İç Tehdit:</strong> Bir çalışanın kendi departmanı dışındaki finansal verilere erişmeye çalışması. Erişim reddi logları ve başarısız erişim denemeleri birlikte analiz edilir.</p>
    `,
    faqs: [
      { question: "UEBA ne kadar sürede öğreniyor?", answer: "ACKLOG'un UEBA modülü, 2-4 haftalık öğrenme süresinden sonra kullanıcı davranış profillerini oluşturur ve anomali tespitine başlar." }
    ]
  },
  "lateral-movement-tespiti": {
    title: "Lateral Movement (Yanal Hareket) Tespiti – SIEM İzleme | ACKLOG",
    description: "Ağ içinde yanal hareket (lateral movement) saldırılarının SIEM ile tespiti ve engelleme stratejileri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Lateral Movement Tespiti",
    heroSubtitle: "Saldırganın ağ içinde bir sistemden diğerine yayılmasını tespit edin ve durdurun.",
    shortAnswer: "Lateral movement, saldırganın ilk erişimi elde ettikten sonra ağdaki diğer sistemlere yayılmasıdır. RDP, SMB, WMI, PsExec ve PowerShell Remoting en yaygın tekniklerdir. ACKLOG, sistemler arası oturum açma kalıplarını izleyerek anormal yanal hareketleri otomatik tespit eder.",
    technicalSummary: [
      "Sunucudan sunucuya Logon Type 3 (Network) bağlantı haritası çıkarma.",
      "PsExec, WMI ve PowerShell Remoting kullanımı izleme.",
      "Workstation'dan sunucuya RDP atlama (pivot) tespiti.",
      "Kerberos Ticket Granting Service (TGS) isteklerinden servis erişim haritası."
    ],
    resultParagraph: "Yanal hareket, saldırı zincirinin en kritik aşamasıdır. ACKLOG, sistemler arası bağlantı haritasını çıkararak normal olmayan erişim kalıplarını saniyeler içinde tespit eder.",
    content: `
      <h2>Yanal Hareket Nedir?</h2>
      <p>Saldırgan bir sisteme sızdıktan sonra, hedefine ulaşmak için ağdaki diğer sistemlere yayılır. Bu sürece yanal hareket (lateral movement) denir ve MITRE ATT&CK'ta TA0008 taktiği altında sınıflandırılır.</p>
      <h3>Yaygın Teknikler</h3>
      <p><strong>PsExec:</strong> Uzak sistemlerde komut çalıştırmak için kullanılan meşru araç. Saldırganlar tarafından sıkça kötüye kullanılır.</p>
      <p><strong>RDP Pivot:</strong> Saldırgan, ele geçirdiği bir iç ağ makinesinden diğer makinelere RDP ile bağlanır.</p>
      <p><strong>WMI (Windows Management Instrumentation):</strong> Uzak sistemlerde süreç başlatmak için kullanılan Windows yönetim aracı.</p>
      <h3>ACKLOG Tespit Stratejisi</h3>
      <p>ACKLOG, sistemler arası tüm oturum açma olaylarını (Event ID 4624, Logon Type 3 ve 10) izler ve bir bağlantı haritası oluşturur. Normal bağlantı haritasında olmayan yeni bağlantılar, yanal hareket göstergesi olarak işaretlenir.</p>
    `,
    faqs: [
      { question: "Lateral movement ile normal IT erişimi nasıl ayrılır?", answer: "ACKLOG, IT ekibinin erişim kalıplarını öğrenir (baseline). Onaylı IT kullanıcılarının bilinen sunuculara erişimi beyaz listeye alınır, bilinmeyen kalıplar alarm üretir." }
    ]
  },
  "privilege-escalation-izleme": {
    title: "Privilege Escalation (Yetki Yükseltme) İzleme – SIEM Tespiti | ACKLOG",
    description: "SIEM ile yetki yükseltme (privilege escalation) saldırılarının tespiti ve önleme stratejileri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Yetki Yükseltme İzleme",
    heroSubtitle: "Normal kullanıcı yetkilerinden yönetici yetkilerine yükseltme girişimlerini tespit edin.",
    shortAnswer: "Privilege escalation, saldırganın düşük yetkili bir hesaptan yönetici yetkisine ulaşmasıdır. ACKLOG, Event ID 4672 (özel ayrıcalık atanması), 4728/4732 (güvenlik grubuna ekleme) ve UAC bypass girişimlerini izleyerek yetkisiz yetki yükseltme denemelerini otomatik tespit eder.",
    technicalSummary: [
      "Event ID 4672: Normal dışı admin ayrıcalık atanması tespiti.",
      "Event ID 4728/4732: Kritik güvenlik gruplarına onaysız ekleme.",
      "UAC (User Account Control) bypass girişimleri izleme.",
      "Linux sudo kullanımı ve /etc/sudoers değişikliği izleme."
    ],
    resultParagraph: "Yetki yükseltme, saldırı zincirinin kritik bir aşamasıdır. ACKLOG, yetki değişikliklerini değişiklik yönetimi süreçleriyle karşılaştırarak onaylanmamış yetki yükseltmelerini anında tespit eder.",
    content: `
      <h2>Yetki Yükseltme Saldırıları</h2>
      <p>Saldırgan, sisteme düşük yetkili bir kullanıcı hesabıyla erişim sağladıktan sonra, hedefine ulaşmak için yönetici (admin) yetkisine ihtiyaç duyar. Bu sürece yetki yükseltme (privilege escalation) denir ve MITRE ATT&CK'ta TA0004 taktiği altında sınıflandırılır.</p>
      <h3>Tespit Mekanizmaları</h3>
      <p>ACKLOG, şu olayları yetki yükseltme göstergesi olarak değerlendirir: Normal kullanıcılara admin ayrıcalık atanması (Event ID 4672), Domain Admins grubuna onaysız kullanıcı ekleme (4728), yerel admin grubuna ekleme (4732), Linux sistemlerde beklenmeyen sudo kullanımı.</p>
    `,
    faqs: [
      { question: "IT ekibinin normal yetki yükseltmeleri nasıl ayrılır?", answer: "ACKLOG, değişiklik yönetimi (change management) entegrasyonuyla onaylı yetki değişikliklerini filtreler. Yalnızca onay sürecisiz değişiklikler alarm üretir." }
    ]
  },
  "phishing-maili-tespiti": {
    title: "Phishing E-posta Tespiti ve SIEM ile İzleme | ACKLOG",
    description: "Oltalama (phishing) e-posta saldırılarının SIEM korelasyonu ile tespiti ve otomatik müdahale.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Phishing E-posta Tespiti",
    heroSubtitle: "Çalışanlara gönderilen oltalama e-postalarını tespit edin ve zararlı bağlantılara tıklanmasını engelleyin.",
    shortAnswer: "Phishing (oltalama), siber saldırıların %90'ından fazlasının başlangıç noktasıdır. ACKLOG, e-posta gateway logları, DNS sorguları, proxy logları ve endpoint olaylarını korelasyonla analiz ederek phishing saldırısının her aşamasını tespit eder: zararlı e-posta teslimi → URL'ye tıklama → zararlı dosya indirme → kod çalıştırma.",
    technicalSummary: [
      "E-posta gateway loglarından şüpheli ek ve URL tespiti.",
      "DNS sorgularında yeni kayıtlı veya bilinen phishing domain'leri eşleştirme.",
      "Proxy loglarında şüpheli URL'lere erişim izleme.",
      "Endpoint'te phishing sonrası zararlı süreç (process) başlatma tespiti."
    ],
    resultParagraph: "Phishing saldırıları, tek bir çalışanın tıklamasıyla tüm organizasyonu tehlikeye atabilir. ACKLOG, e-posta teslimatından endpoint'e kadar saldırı zincirinin tamamını izleyerek her aşamada müdahale imkânı sunar.",
    content: `
      <h2>Phishing Saldırı Zinciri ve SIEM Tespiti</h2>
      <p>Phishing saldırıları, siber güvenlik olaylarının büyük çoğunluğunun başlangıç noktasıdır. Saldırgan, kurbanı zararlı bir bağlantıya tıklamaya veya zararlı bir eki açmaya ikna eder.</p>
      <h3>Saldırı Zinciri</h3>
      <p>1. Zararlı e-posta teslim edilir → 2. Kullanıcı URL'ye tıklar → 3. Zararlı dosya indirilir → 4. Zararlı kod çalıştırılır → 5. C2 (Command & Control) bağlantısı kurulur. ACKLOG, bu zincirin her aşamasını farklı log kaynaklarıyla tespit eder.</p>
    `,
    faqs: [
      { question: "Phishing simülasyonları ACKLOG'u tetikler mi?", answer: "Phishing simülasyon araçlarının domain ve IP'leri beyaz listeye alınarak false positive önlenir. Böylece gerçek saldırılara odaklanılır." }
    ]
  },
  "dns-tunelleme-tespiti": {
    title: "DNS Tünelleme Tespiti – SIEM ile Gizli Veri Çıkışı İzleme | ACKLOG",
    description: "DNS tünelleme ile gizli veri sızıntısı tespiti, anormal DNS sorgu analizi ve SIEM izleme stratejileri.",
    badge: "Kullanım Senaryosu",
    heroTitle: "DNS Tünelleme Tespiti",
    heroSubtitle: "DNS protokolü üzerinden gizlice veri sızdırma girişimlerini tespit edin.",
    shortAnswer: "DNS tünelleme, saldırganların verileri DNS sorgularının subdomain kısmına kodlayarak (base64/hex) dışarı çıkarmasıdır. Çoğu firewall DNS trafiğini engellemediği için bu teknik çok etkilidir. ACKLOG, anormal uzunlukta DNS sorgularını, yüksek DNS sorgu hacmini ve entropy analizi ile DNS tünellemeyi otomatik tespit eder.",
    technicalSummary: [
      "DNS sorgu uzunluğu analizi: 50+ karakter subdomain → şüpheli.",
      "DNS sorgu hacmi: Tek bir client'tan yüksek frekanslı DNS sorgusu → tünelleme.",
      "Entropy analizi: Rastgele karakter dizileri içeren subdomain'ler → kodlanmış veri.",
      "Bilinen DNS tünelleme araçları (iodine, dns2tcp, dnscat2) imza tespiti."
    ],
    resultParagraph: "DNS tünelleme, geleneksel güvenlik araçlarının atladığı sofistike bir veri sızıntısı tekniğidir. ACKLOG, DNS loglarını derinlemesine analiz ederek bu gizli kanalı tespit eder.",
    content: `
      <h2>DNS Tünelleme Nedir?</h2>
      <p>DNS (Domain Name System) protokolü, neredeyse tüm ağlarda açık bırakılır çünkü internet erişimi için zorunludur. Saldırganlar bu durumu istismar ederek, çalınan verileri DNS sorgularının subdomain kısmına kodlar ve kontrol ettikleri DNS sunucusuna gönderir.</p>
      <h3>Tespit Yöntemi</h3>
      <p>Normal DNS sorguları kısa ve okunabilir subdomain'ler içerir (www.example.com). DNS tünelleme sorgularında ise uzun, rastgele karakter dizileri bulunur (aGVsbG8gd29ybGQ.evil-dns.com). ACKLOG, her DNS sorgusunun uzunluğunu, entropisini ve frekansını analiz eder.</p>
    `,
    faqs: [
      { question: "DNS tünelleme hangi log kaynağından tespit edilir?", answer: "DNS sunucu logları (Windows DNS, BIND) veya DNS güvenlik çözümleri (Infoblox, BlueCat) logları ACKLOG'a aktarılarak analiz edilir." }
    ]
  },
  "hesap-ele-gecirme-tespiti": {
    title: "Hesap Ele Geçirme (Account Takeover) Tespiti – SIEM İzleme | ACKLOG",
    description: "Hesap ele geçirme saldırılarının SIEM ile tespiti, impossible travel analizi ve MFA bypass izleme.",
    badge: "Kullanım Senaryosu",
    heroTitle: "Hesap Ele Geçirme Tespiti",
    heroSubtitle: "Çalışan hesaplarının ele geçirilip geçirilmediğini anormal giriş kalıplarıyla tespit edin.",
    shortAnswer: "Account takeover (ATO), saldırganın meşru bir kullanıcı hesabını ele geçirmesidir. ACKLOG, impossible travel (fiziksel olarak mümkün olmayan lokasyonlardan eşzamanlı giriş), anormal saat girişleri ve MFA bypass girişimlerini izleyerek hesap ele geçirme saldırılarını tespit eder.",
    technicalSummary: [
      "Impossible Travel: Kısa sürede farklı coğrafyalardan giriş tespiti.",
      "Anormal Saat: Kullanıcının normal çalışma saatleri dışında giriş.",
      "MFA Bypass: Çok faktörlü doğrulama atlatma girişimleri izleme.",
      "Yeni cihaz/tarayıcı ile giriş tespiti."
    ],
    resultParagraph: "Hesap ele geçirme, en tehlikeli saldırı türlerinden biridir çünkü saldırgan meşru bir kullanıcı gibi görünür. ACKLOG'un UEBA modülü, davranış analizi ile ele geçirilen hesapları meşru kullanıcılardan ayırt eder.",
    content: `
      <h2>Hesap Ele Geçirme Nasıl Tespit Edilir?</h2>
      <p>Saldırgan, phishing, brute force veya dark web'den satın aldığı kimlik bilgileriyle bir kullanıcı hesabını ele geçirdiğinde, meşru bir kullanıcı gibi sisteme giriş yapar. Bu durumda geleneksel güvenlik araçları saldırıyı tespit edemez.</p>
      <h3>ACKLOG Tespit Yöntemleri</h3>
      <p><strong>Impossible Travel:</strong> Bir kullanıcı İstanbul'dan giriş yaptıktan 30 dakika sonra Londra'dan giriş yaparsa, bu fiziksel olarak mümkün değildir → hesap ele geçirilmiş olabilir.</p>
      <p><strong>Davranış Değişikliği:</strong> Kullanıcı normalde sadece e-posta ve ERP erişiyorken, aniden domain controller'a SSH ile bağlanmaya başlarsa → anormal davranış alarmı.</p>
    `,
    faqs: [
      { question: "VPN kullanan saldırganlar nasıl tespit edilir?", answer: "Saldırgan VPN ile ülke IP'sini gizlese bile, ACKLOG kullanıcının eriştiği kaynaklar, çalışma saatleri ve komut kalıplarındaki sapmaları tespit eder." }
    ]
  }
};
