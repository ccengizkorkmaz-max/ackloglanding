export const threatWebSecurityArticles = {
  "bilgisayarima-casus-yazilim-bulastigini-nasil-anlarim": {
    title: "Bilgisayarıma Casus Yazılım Bulaştığını Nasıl Anlarım? (Spyware Tespiti)",
    description: "Spyware, Trojan ve RAT saldırılarını saptama, donanım belirtileri ve ağ trafiği analizi.",
    content: `
      <h2>Casus Yazılım İzlerini Sürmek: Görünmez Düşmanı Yakalayın</h2>
      <p>Casus yazılımlar (Spyware), kendilerini gizlemek üzerine tasarlanmıştır. Ancak ne kadar gizlenirlerse gizlensinler, işletim sisteminde ve ağ trafiğinde mutlaka "fiziksel" izler bırakırlar. Bilgisayarınızın kamerasının aniden açılması veya şifrenizi girerken tarayıcının donması sadece bir "bug" olmayabilir.</p>
      
      <h3>10 Temel Belirti</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Sıra dışı Ağ Trafiği:</strong> Bilgisayarınız siz işlem yapmazken internete sürekli veri mi gönderiyor?</li>
        <li><strong>Fantom İşlemler:</strong> Task Manager'da (Görev Yöneticisi) hiç duymadığınız isimli süreçlerin CPU tüketmesi.</li>
        <li><strong>Antivirüsün Kapanması:</strong> Zararlı yazılımlar ilk olarak güvenlik kalkanlarını devre dışı bırakmaya çalışır.</li>
        <li><strong>Klavye ve Fare Gecikmesi:</strong> Tuş vuruşu kaydediciler (Keylogger) yazma hızınızı yavaşlatabilir.</li>
      </ul>

      <p><strong>Manuel Tespit Yerine SIEM:</strong> Bir casus yazılımı manuel bulmak için günlerce 'Process Explorer' incelemeniz gerekir. ACKLOG Endpoint Monitoring, her bir cihazın "normal" hareket profilini çıkarır. Hiç kullanılmamış bir porta veri gönderen bir bilgisayarı saniseler içinde yakalar. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, bu tür olayları gerçekleştiği anda cep telefonunuza bildirim alarak durdurabilirsiniz.</p>
    `
  },
  "sirket-maillerinin-hacklendigi-nasil-anlasilir": {
    title: "Şirket Maillerinin Hacklendiği Nasıl Anlaşılır? (BEC Saldırısı Rehberi)",
    description: "Mail hesaplarınıza yabancı bir IP mi girdi? İş e-postası ihlallerini (BEC) saptama ve önleme.",
    content: `
      <h2>E-posta Güvenliği: Siber Hırsızın Mail Kutunuzda Olduğunu Saptayın</h2>
      <p>Şirket maillerinin hacklenmesi (Business Email Compromise - BEC), en pahalı siber saldırı türüdür. Saldırgan mail kutunuza girdiğinde şifreyi değiştirmez; bunun yerine bekler, yazışmalarınızı okur ve tam para transferi (fatura) anında sahte bir IBAN gönderir.</p>
      
      <h3>Saldırı Belirtileri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Yönlendirme Kuralları:</strong> Siz farkında olmadan tüm gelen maillerin bir kopyası dışarıdaki bir adrese gidiyor mu?</li>
        <li><strong>Başarısız Login Denemeleri:</strong> Office 365 veya G-Suite panelinizde Nijerya, Rusya veya Çin gibi ülkelerden başarısız (belki de başarılı!) girişler var mı?</li>
        <li><strong>Gönderilmiş Ögeler:</strong> Sizin göndermediğiniz ama 'Sent' klasöründe veya 'Trash'te duran mailler.</li>
      </ul>

      <p><strong>ACKLOG Bulut Denetimi:</strong> ACKLOG SIEM, Office 365 ve Google Workspace loglarınızı doğrudan süzerek "İçerideki Casusu" yakalar. Bir yönlendirme kuralı oluşturulduğunda veya sıra dışı bir IP login olduğunda ACKLOG sizi anında uyarır ve yasal kanıtları depolar. Manuel kontrollerle kendinizi riske atmayın.</p>
    `
  },
  "brute-force-saldirisi-nasil-durdurulur": {
    title: "Brute Force (Kaba Kuvvet) Saldırısı Nasıl Durdurulur? Kesin Çözüm",
    description: "Hangi IP'lerden saldırı alıyorsunuz? Saldırgan IP'leri otomatik engelleme ve karantina stratejileri.",
    content: `
      <h2>Brute Force İle Mücadele: Kaleyi Savunun</h2>
      <p>Brute Force, bir saldırganın "şifreyi kırmak" için binlerce kelimeyi saniyeler içinde denemesi işlemidir. Bu saldırılar sisteminizi sadece güvenlik açısından değil, aynı zamanda aşırı yük (CPU/RAM tüketimi) nedeniyle de tehlikeye atar.</p>
      
      <h3>Savunma Adımları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Hesap Kilitleme Politikası:</strong> 5 hatalı girişte hesabı 30 dakika kilitleyin.</li>
        <li><strong>IP Engelleme:</strong> Aynı IP'den sürekli hata geliyorsa o IP'yi Firewall üzerinden bloklayın.</li>
        <li><strong>CAPTCHA Kullanımı:</strong> Login sayfalarına insan doğrulaması ekleyin.</li>
      </ul>

      <p><strong>ACKLOG Otomatik Defans:</strong> Manuel olarak IP adreslerini Firewall'a kopyalamakla uğraşmayın. ACKLOG SIEM, Brute Force denemesini 3. denemede anlar, saldıran IP'yi bulur ve Firewall'unuza "Bu IP'yi Hemen Yasakla" komutunu gönderir (SOAR yeteneği). ACKLOG ile siber saldırganları daha kapıda durdurun ve 5651 yasal imzalı saldırı raporlarını biriktirin.</p>
    `
  },
  "ransomware-fidye-yazilimi-dosya-uzantilari-listesi": {
    title: "Ransomware (Fidye Yazılımı) Dosya Uzantıları Listesi ve Korunma",
    description: ".encrypted, .locked, .wannacry ve diğer yaygın fidye uzantıları takibi. Veri kurtarma stratejileri.",
    content: `
      <h2>Fidye Yazılımı Sözlüğü: Uzantıları Tanıyın</h2>
      <p>Sunucunuzda aniden dosya isimlerinin sonuna <code>.wannacry</code>, <code>.ryuk</code> veya <code>.locked</code> gibi uzantılar eklendiğini görüyorsanız, çok kritik bir durum içindesiniz demektir. Ransomware (Fidye Yazılımı), verilerinizi şifreleyerek sizden para (Bitcoin) talep eden bir virüstür.</p>
      
      <h3>En Tehlikeli Uzantılar (2026 Listesi)</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>.encrypted / .crypt / .locked:</strong> Genel şifreleme uzantıları.</li>
        <li><strong>.clop / .revil:</strong> Modern fidye gruplarının kullandığı özel imzalar.</li>
        <li><strong>Rastgele Karakterler:</strong> (Örn: .asdfg12) Tespit edilmeyi zorlaştırmak için kullanılan dinamik uzantılar.</li>
      </ul>

      <p><strong>Neden Manuel Takip Yetersiz?</strong> Dosya uzantısı değiştiğinde zaten iş işten geçmiştir. ACKLOG SIEM, sadece isim değişimini değil, disk üzerindeki 'Okuma-Yazma Hızı' (I/O) anomalisini de takip eder. Bir şifreleme işlemi başladığında ACKLOG bunu saniyeler içinde keşfeder ve sunucuyu izole eder. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile verilerinizi sigortalayın.</p>
    `
  },
  "supheli-bir-e-posta-ekini-analiz-etme": {
    title: "Şüpheli Bir E-Posta Ekini Analiz Etme: Güvenli Adımlar Rehberi",
    description: "Fatura süsü verilmiş zararlı yazılımlardan personeli koruma, sandbox kullanımı ve siber analiz.",
    content: `
      <h2>E-posta Analizi: "Fatura.pdf.exe" Tuzağına Düşmeyin</h2>
      <p>Bir sabah gelen "Ödenmemiş Faturanız" konulu e-postadaki eke tıklamak, tüm şirketin hacklenmesine neden olabilir. Modern zararlı yazılımlar genellikle e-posta ekleri üzerinden bulaşır. Peki bir eki açmadan önce güvenli olup olmadığını nasıl anlarsınız?</p>
      
      <h3>Analiz Listesi</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Gönderen Adresi:</strong> domain-ismi.com yerine domain-ismi-destek.com gibi bir benzerlik var mı?</li>
        <li><strong>Dosya Uzantısı:</strong> .pdf gibi görünüp aslında .scr veya .exe mi?</li>
        <li><strong>Virustotal Sorgulama:</strong> Eki indirmeden önce hash değerini online sistemlerde tarayın.</li>
      </ol>

      <p><strong>ACKLOG Phishing Shield:</strong> Manuel olarak her e-postayı incelemek personeliniz için yorucudur. ACKLOG SIEM, e-posta geçitlerindeki (Gateway) logları toplayarak, binlerce personelin tıkladığı linkleri ve ekleri arka planda sessizce analiz eder. Riskli bir işlem saptandığında anında müdahale eder. Personelinizi en zayıf halka olmaktan ACKLOG ile çıkarın.</p>
    `
  },
  "web-siteme-saldiri-var-ne-yapmaliyim": {
    title: "Web Siteme Saldırı Var Ne Yapmalıyım? Acil Müdahale Rehberi",
    description: "Web sunucu loglarından saldırganın amacını belirleme, SQL Injection ve XSS saldırılarına karşı ilk yardım.",
    content: `
      <h2>Web Güvenliği: Kırmızı Alarm Anında Müdahale</h2>
      <p>Web sitenizin ana sayfası mı değişti? Yoksa arka planda "Database Error"lar mı havada uçuşuyor? Web siteleri, dünyaya açılan pencerelerdir ve her an otomatik botların saldırısı altındadır. Bir saldırıyı durdurmak için önce tipini bilmelisiniz.</p>
      
      <h3>Adım Adım Kurtarma</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Log İnceleme:</strong> Apache/Nginx/IIS loglarında <code>' UNION SELECT</code> gibi karakterler var mı? (SQL Injection işareti).</li>
        <li><strong>Kaynak IP Bloklama:</strong> Saldırı gelen ana IP bloklarını Firewall/WAF üzerinden kapatın.</li>
        <li><strong>Dosya Bütünlüğü:</strong> Sitenizin FTP/Kod dizininde yeni oluşmuş <code>.php</code> (Shell) dosyaları var mı kontrol edin.</li>
      </ul>

      <p><strong>ACKLOG SIEM Farkı:</strong> Web sitesini manuel kurtarmaya çalışmak zordur. ACKLOG, web loglarınızı 7/24 analiz eder. "Web sitesine SQL Injection denemesi yapılıyor" uyarısını saldırgan başarılı olmadan size gönderir. ACKLOG ile web sitenizi siber kalkanla koruyun ve yasal olarak imzalanmış saldırı delilleri biriktirin.</p>
    `
  },
  "botnet-trafigi-nasil-engellenir": {
    title: "Botnet Trafiği Nasıl Engellenir? Ağdan Temizleme ve C&C Takibi",
    description: "Zombi bilgisayarların kontrol merkezleriyle (C&C) iletişimini kesme ve ağ temizleme teknikleri.",
    content: `
      <h2>Ağdaki Zombiler: Botnet Tehlikesi</h2>
      <p>Botnet, bir saldırganın binlerce bilgisayarı (belki sizinkini de!) köleleştirerek başka bir yere saldırtmasıdır. Bilgisayarınız normalden daha yavaş çalışıyorsa ve ağ trafiğinde sürekli "beklenmedik" yerlere bağlanmaya çalışıyorsa, bir 'Botnet' parçası olmuş olabilirsiniz.</p>
      
      <h3>Nasıl Tespit Edilir?</h3>
      <p>Botlar, sahiplerinden komut almak için belirli periyotlarla dısarıdaki bir IP'ye (Command & Control - C&C) minik paketler gönderir. Bu periyodik sinyallere 'Beaconing' denir.</p>

      <p><strong>ACKLOG C&C Analytics:</strong> Manuel olarak milyarlarca paket içinden bu sinyalleri yakalayamazsınız. ACKLOG SIEM, güncel siber istihbarat (Threat Intel) ağlarını kullanarak, ağınızdaki bir bilgisayarın bilinen bir Botnet merkezine bağlanmaya çalıştığını anında görür ve bağlantıyı keser. ACKLOG ile ağınızı zombilerden temizleyin.</p>
    `
  },
  "phishing-oltalama-saldirisi-korunma-yontemleri": {
    title: "Phishing (Oltalama) Saldırısı Korunma Yöntemleri ve Personel Eğitimi",
    description: "Sahte giriş sayfalarını personelinize nasıl öğretirsiniz? Sosyal mühendislik savunma stratejileri.",
    content: `
      <h2>Oltalama: En Büyük Siber Tuzak</h2>
      <p>En gelişmiş siber güvenlik sistemleri bile tek bir hatayla (bir kullanıcının sahte bir sayfaya şifresini girmesiyle) bypass edilebilir. Phishing (Oltalama), teknik bir açık yerine "insan psikolojisini" hedef alır.</p>
      
      <h3>Korunma Yollar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>MFA (Çok Faktörlü Doğrulama):</strong> Şifre çalınsa bile ikinci onayı zorunlu kılın.</li>
        <li><strong>URL Analizi:</strong> Personelin domain adreslerini kontrol etmesini sağlayın (örn: g00gle.com değil google.com).</li>
        <li><strong>Siber Simülasyon:</strong> Kendi personelinize zararsız oltalama mailleri gönderip kimlerin tıkladığını ölçün.</li>
      </ul>

      <p><strong>ACKLOG Görünürlüğü:</strong> Kimlerin riskli sitelere girdiğini veya oltalama maillerine tıkladığını ACKLOG dashboardlarında görün. Eğitimi kime vereceğinizi verilerle belirleyin. Manuel kontrollerle vakit kaybetmeyin, personelinizi ACKLOG ile siber dirençli hale getirin.</p>
    `
  },
  "ddos-saldirisi-basladiginda-yapilacak-ilk-3-sey": {
    title: "DDoS Saldırısı Başladığında Yapılacak İlk 3 Şey (Acil Eylem Planı)",
    description: "Hizmet kesintisini en aza indirme, trafik analizi ve servis sağlayıcı (ISP) koordinasyonu.",
    content: `
      <h2>DDoS Reaksiyonu: Panik Yapmayın, Verilere Güvenin</h2>
      <p>İnternet hattınızın %100 dolması ve sistemlerin erişilemez olması BT dünyasının en stresli anlarından biridir. Panik yapıp kabloları çekmek yerine bu 3 adımı izleyin:</p>
      
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Trafiğin Tipini Belirleyin:</strong> Saldırı Katman 3 mü (Genel yük) yoksa Katman 7 mi (Uygulamaya özel sorgu)? ACKLOG ekranından bunu saniyeler içinde görebilirsiniz.</li>
        <li><strong>ISP İle İletişime Geçin:</strong> Servis sağlayıcınızdan "Clean Pipe" veya "Blackhole" hizmetini aktif etmesini isteyin.</li>
        <li><strong>Coğrafi IP Bloklama:</strong> Saldırı %90 yurt dışı kaynaklıdır. Yurt dışı trafiğini geçici olarak kesmek hayat kurtarır.</li>
      </ol>

      <p><strong>Neden SIEM?</strong> Saldırının ne zaman başladığını ve hangi IP'lerden geldiğini manuel raporlamak imkansızdır. ACKLOG SIEM, saldırı anında size "DDoS Başladı!" uyarısı gönderir ve tüm trafiği görselleştirerek yöneticilerinize sunacağınız siber raporu otomatik hazırlar. ACKLOG ile saldırıyı profesyonelce yönetin.</p>
    `
  },
  "zararli-ip-adresleri-sorgulama": {
    title: "Zararlı IP Adresleri Sorgulama ve Engelleme Rehberi",
    description: "Siber güvenlikte IP itibar sorgulama sistemi (IP Reputation) ve otomatik veritabanı kullanımı.",
    content: `
      <h2>IP İtibarı: Kimin Kapınıza Dayandığını Bilin</h2>
      <p>İnternetten gelen her bağlantı isteği aynı değildir. Bazı IP'ler yıllardır "spam" veya "saldırı" amacıyla kullanılmaktadır. Bu listenin tutulduğu sistemlere 'Abuse Database' denir.</p>
      
      <h3>Nerede Sorgulanır?</h3>
      <p>Online olarak **AbuseIPDB**, **Cisco Talos** veya **IBM X-Force** gibi dev veritabanlarını kullanabilirsiniz. Ancak binlerce IP'yi web sitelerinde tek tek aratmak akıl karı değildir.</p>

      <p><strong>ACKLOG Otomatik Sorgu:</strong> ACKLOG, ağınıza gelen her dış IP'yi bu dev veritabanlarıyla arka planda milisaniyeler içinde eşleştirir. "Kötü şöhretli" bir IP sunucunuza dokunmaya çalıştığı an ACKLOG onu bloklar. Manuel kontrollerle vakit kaybetmeyin, dünyanın siber zekasını ACKLOG ile sisteminize entegre edin.</p>
    `
  },
  "web-sitesi-admin-paneline-giris-yapanlari-gorme": {
    title: "Web Sitesi Admin Paneline Giriş Yapanları Görme ve Loglama",
    description: "Kimler siteyi yönetiyor? Adli kayıt tutma, WordPress/Joomla panel güvenliği ve izleme.",
    content: `
      <h2>Web Yönetim Denetimi: Admin Paneli Güvenliği</h2>
      <p>E-ticaret sitinizin veya kurumsal sayfanızın <code>/admin</code> paneline bir başkası girerse, tüm müşteri verileriniz çalınabilir. Sadece şifre yetmez, bu panele kimlerin girdiğini yasal olarak saklamanız şarttır.</p>
      
      <h3>Takip Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>HTTP Auth Logları:</strong> Web sunucunun (Apache/Nginx) kullanıcı doğrulama logları.</li>
        <li><strong>CMS Logları:</strong> WordPress gibi sistemlerin kendi içindeki login kayıtları.</li>
        <li><strong>IP Kısıtlama:</strong> Admin panelini sadece şirket IP'sine açmak.</li>
      </ul>

      <p><strong>ACKLOG İzleme:</strong> ACKLOG, web sitenizin admin paneline yapılan her girişi (başarılı/başarısız) kayıt altına alır. "Dün gece saat 03'te admin paneline giriş yapıldı" uyarısını ACKLOG ile alın. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, mülkünüzün anahtarını kimlerin kullandığını her an takip edin.</p>
    `
  },
  "api-guvenligi-test-araclari": {
    title: "API Güvenliği Test Araçları ve Proaktif Zafiyet Analizi",
    description: "API'leri siber korsanlara karşı nasıl zırhlarsınız? OWASP API Security Top 10 ve izleme.",
    content: `
      <h2>API Security: Görünmez Kapıları Koruyun</h2>
      <p>Modern yazılımlar API'ler üzerinden konuşur. Çoğu zaman mobil uygulamalar veya web frontendleri arka plandaki API'lere güvenir ancak bu API'ler doğrudan internete açıktır ve doğru korunmazsa "Veri Sızıntısı"nın ana kaynağı olurlar.</p>
      
      <h3>Analiz Araçları ve Yöntemler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Postman/Insomnia:</strong> API isteklerini simüle edip yetkisiz erişim testi yapma.</li>
        <li><strong>Burp Suite:</strong> API çağrılarını araya girip değiştirerek (Interception) test etme.</li>
        <li><strong>Rate Limiting:</strong> Saniyede kaç istek atılabileceğini kısıtlama.</li>
      </ul>

      <p><strong>ACKLOG API Analytics:</strong> Manuel testler anlıktır. ACKLOG SIEM, API'nize gelen 'Unauthorized' (401) ve 'Forbidden' (403) hatalarındaki artışları takip eder. Bir IP sürekli API'nizi zorluyorsa ACKLOG bunu bir saldırı olarak raporlar. ACKLOG ile API'lerinizi 7/24 denetim altında tutun.</p>
    `
  },
  "owasp-top-10-nedir": {
    title: "OWASP Top 10 Nedir? Yazılım Güvenliği Standartları Rehberi",
    description: "En yaygın 10 yazılım zafiyeti, SQL Injection, Broken Access Control ve SIEM koruması.",
    content: `
      <h2>OWASP Top 10: Yazılımcının Güvenlik Pusulası</h2>
      <p>OWASP (Open Web Application Security Project), dünyadaki web güvenliği standartlarını belirleyen bir topluluktur. Her birkaç yılda bir "Dünyayı en çok tehdit eden 10 açık" listesini yayınlar. Bir yazılımcı veya BT yöneticisi için bu liste bir zorunluluktur.</p>
      
      <h3>Kritik Maddeler</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Broken Access Control:</strong> Yetkisiz birinin başkasının verisine erişmesi.</li>
        <li><strong>Cryptographic Failures:</strong> Şifreleme hataları.</li>
        <li><strong>Injection:</strong> SQL Injection gibi dışarıdan koda müdahale edilmesi.</li>
      </ol>

      <p><strong>ACKLOG İle OWASP Uyumu:</strong> Yazılım ekibiniz hata yapabilir ancak ACKLOG bu hataları sömürmeye çalışan saldırganları log izlerinden yakalar. OWASP açıklarını hedefleyen saldırıların bıraktığı "parmak izlerini" ACKLOG ile takip edin. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile kurumsal güvenliğinizi standartlara bağlayın.</p>
    `
  },
  "sql-injection-acigi-nasil-kapatilir": {
    title: "SQL Injection Açığı Nasıl Kapatılır? Kesin Çözümler ve Güvenlik",
    description: "Veritabanına sızma girişimlerini durdurma yöntemleri, Parameterized Queries ve WAF/SIEM kullanım.",
    content: `
      <h2>Veritabanı Savunması: SQL Injection'u Durdurun</h2>
      <p>SQL Injection (SQLi), bir saldırganın web sitesindeki giriş kutularına özel komutlar yazarak veritabanınızdan tüm verileri (müşteriler, şifreler vb.) çekebilmesi saldırısıdır. Yıllardır bilinmesine rağmen hala en yaygın açıkların başındadır.</p>
      
      <h3>Teknik Çözüm Yolları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Prepared Statements:</strong> Kullanıcı girişleri asla doğrudan SQL cümlesine eklenmemelidir.</li>
        <li><strong>Input Validation:</strong> Sadece beklenen veri tipine (örn: sadece sayı) izin verme.</li>
        <li><strong>Least Privilege:</strong> Veritabanı kullanıcısının 'Drop Table' gibi yetkilerini kısıtlayın.</li>
      </ul>

      <p><strong>ACKLOG DB Shield:</strong> SQL sorgularını manuel kontrol etmek imkansızdır. ACKLOG SIEM, veritabanı loglarınızda (SQL Server, MySQL, PostgreSQL) geçen şüpheli sorguları (SELECT * FROM USERS --) gerçek zamanlı süzerek saldırıyı anında bildirir. ACKLOG ile veritabanınızı siber korsanlara kapatın.</p>
    `
  },
  "siteye-gelen-botlari-engelleme": {
    title: "Siteye Gelen Botları Engelleme ve Trafik Filtreleme Stratejileri",
    description: "Spam, veri kazıma (scraping) ve brute-force botlarını ayırt etme ve durdurma yöntemleri.",
    content: `
      <h2>Bot Yönetimi: İnsan mı Makine mi?</h2>
      <p>İnternet trafiğinin %40'ından fazlası botlar tarafından oluşturulur. Bazıları iyidir (Google Bot), ancak çoğu kötüdür (Veri kazıyıcılar, şifre deneme botları). Sitenizin yavaşlamasını ve verilerinizin çalınmasını önlemek için botları yönetmelisiniz.</p>
      
      <h3>Bot Engelleme Yöntemleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>User-Agent Kontrolü:</strong> Yaygın bot başlıklarını (Browser headers) filtreleme.</li>
        <li><strong>Rate Limiting:</strong> Bir IP'den gelen aşırı saniye başı isteği durdurma.</li>
        <li><strong>Challenge (Captcha):</strong> Şüpheli görünen trafiğe "Ben robot değilim" testi sunma.</li>
      </ul>

      <p><strong>ACKLOG Traffic Analytics:</strong> ACKLOG, web trafiğinizi analiz ederek "İnsan dışı" hareket eden IP'leri saniyeler içinde gruplandırır. Sitenizi yoran botları ACKLOG ile temizleyin ve sunucu maliyetlerinizi düşürün. Tüm bu manuel kontroller yerine bir SIEM çözümü kullanarak, sitenizi tertemiz tutun.</p>
    `
  },
  "log-kayitlarinin-degistirilemezligi-nasil-saglanir": {
    title: "Log Kayıtlarının Değiştirilemezliği Nasıl Sağlanır? (Zaman Damgası Rehberi)",
    description: "Saldırgan logları silebilir mi? Dijital delil güvenliği, hashleme ve 5651 yasal uyumu.",
    content: `
      <h2>Dijital Delil Güvenliği: Loglar Silinirse Ne Olur?</h2>
      <p>Bir saldırgan sunucuya girdiğinde ilk yapacağı şey, arkasında iz bırakmamak için <code>Windows Security Log</code> veya <code>/var/log/auth.log</code> dosyalarını silmektir. Eğer loglarınız sadece sunucuda duruyorsa, mahkemede sunabileceğiniz hiçbir deliliniz kalmaz.</p>
      
      <h3>Değişmezlik (Immutability) Nasıl Sağlanır?</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li><strong>Merkezi Loglama:</strong> Logun üretildiği an başka bir sisteme (SIEM) aktarılması.</li>
        <li><strong>Hashleme:</strong> Her log satırının kriptografik bir imzasının alınması.</li>
        <li><strong>Zaman Damgası (Timestamping):</strong> TÜBİTAK veya yetkili mercilerden alınan zaman damgasıyla logun "değiştirilmediğinin" mühürlenmesi.</li>
      </ol>

      <p><strong>ACKLOG Güvencesi:</strong> ACKLOG SIEM, gelen her bir log satırını anlık olarak hashler ve 5651 yasasına uygun şekilde mühürler. Sunucunuz yansa dahi loglarınız ACKLOG üzerinde yasal olarak geçerli ve dokunulmazdır. Manuel log yedekleme stressinden kurtulun, ACKLOG ile %100 yasal uyum sağlayın.</p>
    `
  },
  "yazilim-hatalarini-merkezi-bir-sunucuya-gonderme": {
    title: "Yazılım Hatalarını Merkezi Bir Sunucuya Gönderme ve Analiz",
    description: "Error logların merkezi takibi ile sistem sağlığını koruma, developer işbirliği ve hata tespiti.",
    content: `
      <h2>Merkezi Hata Yönetimi: Yazılımınızı Sağlıklı Tutun</h2>
      <p>Kendi yazdığınız veya kullandığınız kurumsal yazılımlar hata (Bug/Exception) verdiğinde, bu hataların sunucu içindeki dosyalarda kalması BT ekibinin haberdar olmasını geciktirir. "Sunucu çöktü" dendiğinde nedenini bulmak için 10 farklı sunucunun loglarını gezmek bir devirdir.</p>
      
      <h3>Merkezi Loglamanın 3 Faydası</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Hızlı Teşhis:</strong> Tüm hata loglarını (Java, .NET, PHP) tek ekranda görme.</li>
        <li><strong>Siber Güvenlik İlişkisi:</strong> Anormal hata artışları, gizli bir saldırının (Exploit denemesi) yan etkisi olabilir.</li>
        <li><strong>Versiyon Karşılaştırma:</strong> Yeni güncelleme sonrası hatalar arttı mı?</li>
      </ul>

      <p><strong>ACKLOG AppInsights:</strong> Yazılım hatalarını SIEM ile toplayıp developer ekibine otomatik raporlayın. ACKLOG ile yazılımınızın nabzını tutun. Manuel hataları gözden kaçırmayın, ACKLOG ile sisteminizi zırhlayın.</p>
    `
  },
  "ssl-sertifikasi-suresi-dolunca-uyari-alma": {
    title: "SSL Sertifikası Süresi Dolunca Uyari Alma Sistemi Kurma",
    description: "Kullanıcıların 'Bağlantınız Güvenli Değil' hatası almasını önleyin, SSL/TLS güvenliğini yönetin.",
    content: `
      <h2>SSL Sertifika Takibi: Prestijinizi Koruyun</h2>
      <p>Unutulan bir SSL sertifikası süresi, web sitenize giren müşterilerin karşısına "Bu bağlantı güvenli değil" uyarısının çıkmasına neden olur. Bu durum hem marka itibarınızı hem de SEO skorunuzu saniyeler içinde yerle bir eder.</p>
      
      <h3>Takip Yöntemleri</h3>
      <p>BT yöneticileri genellikle Outlook takvimine "Sertifika bitiyor" notu ekler. Ancak 50 farklı domain ve subdomaini bu şekilde yönetmek hataya açıktır.</p>

      <p><strong>ACKLOG SSL Monitoring:</strong> ACKLOG SIEM, ağınızdaki ve web sitelerinizdeki tüm SSL sertifikalarını otomatik tarar. Sürenin dolmasına 30 gün, 15 gün ve 1 gün kala size "Kritik Uyarı" gönderir. Manuel kontrollerle risk almayın, ACKLOG ile kesintisiz güvenli bağlantı sağlayın.</p>
    `
  },
  "kod-analizi-ve-siber-guvenlik": {
    title: "Kod Analizi ve Siber Güvenlik: Yazılımı Kim Denetliyor?",
    description: "Statik ve dinamik kod analizi (SAST/DAST) yöntemleri, güvenli yazılım geliştirme döngüsü.",
    content: `
      <h2>Güvenli Yazılım Geliştirme (SDLC)</h2>
      <p>Hacklenen sistemlerin çoğu, yazılım kodundaki basit bir mantık hatasından (Logic bug) dolayı sızdırılır. Yazılım yayına çıkmadan önce güvenlik testlerinden geçmelidir.</p>
      
      <h3>Analiz Türleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>SAST (Static Analysis):</strong> Kod çalışmadan önce kaynak kodun taranması.</li>
        <li><strong>DAST (Dynamic Analysis):</strong> Çalışan uygulamanın dışarıdan saldırılarla test edilmesi.</li>
        <li><strong>SCA:</strong> Kullanılan kütüphanelerde (Open Source) bilinen bir açık var mı kontrol edilmesi.</li>
      </ul>

      <p><strong>ACKLOG DevSecOps:</strong> Git loglarını ve derleme (Build) loglarını ACKLOG ile süzerek koda izinsiz erişimleri ve riskli değişiklikleri tespit edin. Manuel kod analizi yorucudur, ACKLOG ile siber standartlara uygun yazılım üretin.</p>
    `
  },
  "web-application-firewall-waf-fiyatlari": {
    title: "Web Application Firewall (WAF) Fiyatları ve SIEM Entegrasyonu",
    description: "Katman 7 saldırılarına karşı en iyi koruma araçları maliyeti, WAF vs SIEM karşılaştırması.",
    content: `
      <h2>WAF: Web Sitenizin Zırhı</h2>
      <p>Klasik firewalllar sadece port seviyesinde koruma sağlar (Örn: 80-443 açık). Ancak WAF (Web Application Firewall), bu porttan geçen HTTP paketinin içeriğine bakar. SQL Injection veya Cross-Site Scripting (XSS) saldırılarını ancak bir WAF ile durdurabilirsiniz.</p>
      
      <h3>WAF Seçerken Dikkat Edilmesi Gerekenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Maliyet:</strong> Bulut tabanlı (Cloudflare, Azure WAF) veya donanım bazlı çözümlerin fiyat/performans dengesi.</li>
        <li><strong>Log Entegrasyonu:</strong> WAF'ın engellediği her saldırıyı merkezi bir SIEM'e aktarabilmesi.</li>
      </ul>

      <p><strong>ACKLOG ve WAF Gücü:</strong> WAF saldırıyı durdurur, ACKLOG SIEM ise bu saldırıyı yapan "IP'nin tüm kimliğini" ortaya çıkarır. WAF loglarını ACKLOG ile "Saldırgan Profiline" dönüştürün. Manuel analizle vakit kaybetmeyin, ACKLOG ile web savunmanızı otomatiğe bağlayın.</p>
    `
  }
};
