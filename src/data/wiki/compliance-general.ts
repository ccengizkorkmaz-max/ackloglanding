export const complianceGeneralArticles = {
  "verbis-kayit-zorunluluklari-nelerdir": {
    title: "VERBİS Kayıt Zorunlulukları Nelerdir? (2026 Güncel Rehber)",
    description: "Kişisel Veri İşleme Envanteri ve VERBİS kayıt süreci öncesi teknik hazırlıklar.",
    content: `
      <h2><a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> Uyum Süreci: VERBİS Nedir ve Kimler Kaydolmalıdır?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>VERBİS (Veri Sorumluları Sicil Bilgi Sistemi), kişisel veri işleyen kurumların beyan vermesi gereken devlet sistemidir. Ancak VERBİS'e sadece "Veri kategorilerini" girmek yetmez, bu verilerin güvenliğini nasıl sağladığınızı ispatlamanız istenir.</p>
      
      <h3>Teknik Gereklilikler</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Envanter Doğruluğu:</strong> Beyan ettiğiniz veri tipleriyle sisteminizdeki loglar uyuşuyor mu?</li>
        <li><strong>Teknik Tedbirler:</strong> Siber saldırılara karşı hangi izleme (Loglama) sistemini kullanıyorsunuz?</li>
        <li><strong>Erişim Yetkilendirme:</strong> Verilere kimlerin eriştiğini nasıl raporluyorsunuz?</li>
      </ul>

      <p><strong>ACKLOG VERBİS Desteği:</strong> ACKLOG SIEM, VERBİS beyanınızdaki 'Teknik Tedbirler' maddesini %100 karşılar. Denetçiler geldiğinde "Verilere kimlerin eriştiğini burada anlık görüyoruz ve 2 yıl saklıyoruz" diyebilmek için ACKLOG en güçlü delilinizdir. Manuel beyanlarla riske girmeyin, ACKLOG ile yasal zırhınızı kuşanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "kisisel-veri-ihlali-bildirim-formu-hazirlama": {
    title: "Kişisel Veri İhlali Bildirim Formu ve 72 Saat Kuralı",
    description: "Veri sızıntısında Kurul'a yapılacak bildirimde logların rolü ve form doldurma rehberi.",
    content: `
      <h2>Alarm Anı: İhlal Olduğunda Ne Yapmalısınız?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Bir veri ihlali tespit edildiğinde, KVKK Kuruluna <strong>72 saat içinde</strong> bildirim yapma zorunluluğu vardır. Bu formun en kritik sorularından biri: "İhlal ne zaman başladı, ne zaman bitti ve ne kadar veri sızdı?"</p>
      
      <h3>Logların Hayati Önemi</h3>
      <p>Eğer elinizde geriye dönük log analizi yapan bir sistem yoksa, bu sorulara cevap vermeniz imkansızdır. Logsuz yapılan her bildirim, "İhmali kusur" sayılarak ceza miktarını artırır.</p>

      <p><strong>ACKLOG IR Modülü:</strong> Bir sızıntı tespit edildiğinde ACKLOG size bir "Timeline" (Zaman Çizelgesi) sunar. Kim, nereden, hangi veriyi kopyaladı? Bu raporu doğrudan bildirim formuna ekleyerek kurumunuzun "Sorumluluğunu yerine getirdiğini" ispatlayın. Manuel aramalarla vakit kaybetmeyin, ACKLOG ile bildirim sürecini yönetin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "kvkk-teknik-tedbirler-listesi-tam-rehber": {
    title: "KVKK Teknik Tedbirler Listesi: SIEM Neden Zorunlu?",
    description: "KVKK Kurulunun yayınladığı teknik tedbirler rehberindeki maddelerin BT analizi.",
    content: `
      <h2>Zırhlanma: KVKK İçin Olmazsa Olmaz Maddeler</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>KVKK Teknik Tedbirler rehberi, sadece bir tavsiye değil, denetimlerde uygulanan bir checklisttir. Bu listenin tam ortasında "İz Kayıtlarının Loglanması" ve "Kullanıcı Hareketlerinin Takibi" yer alır.</p>
      
      <h3>Temel Maddeler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Bilişim sistemleri güvenliğinin takibi.</li>
        <li>Log kayıtlarının değiştirilmeye karşı mühürlenmesi.</li>
        <li>Erişim loglarının kullanıcı bazlı raporlanması.</li>
      </ul>

      <p><strong>ACKLOG KVKK Shield:</strong> ACKLOG, rehberdeki 17 teknik tedbir maddesinin 12 tanesini doğrudan çözer. Tek bir platformla firewall, sunucu ve kullanıcı loglarını yöneterek hem güvenliği sağlar hem de kanuna uyum sağlarsınız. Manuel çözümlerle parça parça uğraşmayın, ACKLOG ile tam uyuma ulaşın.</p>
    `
  },
  "sirket-ici-siber-guvenlik-politikasi-ornegi": {
    title: "Şirket İçi Siber Güvenlik Politikası Örneği ve Yazım Kuralları",
    description: "Kurumsal siber güvenlik yönergesi nasıl hazırlanır? Standartlar ve pratik şablonlar.",
    content: `
      <h2>Yönetişim: Güvenlik Sadece Yazılımla Olmaz</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Dünyanın en iyi firewall cihazını da alsanız, personeliniz şifresini masasına yazıyorsa güvende değilsinizdir. "Siber Güvenlik Politikası", şirketin dijital kurallar kitabıdır.</p>
      
      <h3>Politikada Olması Gerekenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Parola Politikası:</strong> Minimum uzunluk ve değişim sıklığı.</li>
        <li><strong>Uzaktan Çalışma:</strong> VPN kullanımı ve çok faktörlü doğrulama zorunluluğu.</li>
        <li><strong>Cihaz Kullanımı:</strong> USB kullanım yasağı ve yazılım indirme kuralları.</li>
      </ul>

      <p><strong>ACKLOG Politika Denetçisi:</strong> Yazdığınız kurallara uyulup uyulmadığını ACKLOG ile denetleyin. "Politika gereği USB yasak dedik ama kimler takmış?" sorusuna ACKLOG 1 saniyede cevap verir. Manuel denetim bitti, ACKLOG ile politikalarınız kağıt üzerinde değil, dashboard üzerinde yaşasın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "bilgi-guvenligi-farkindalik-egitimi-nasil-verilir": {
    title: "Bilgi Güvenliği Farkındalık Eğitimi Nasıl Verilir?",
    description: "Personelin siber güvenlik bilincini artırmak için eğitim stratejileri ve içerik önerileri.",
    content: `
      <h2>İnsan Faktörü: En Zayıf Halkayı Güçlendirin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Siber saldırıların %90'ı insan hatasıyla (Oltalama mailleri, zayıf şifre vb.) başlar. Personelinize siber güvenliği anlatmak, en az teknik yatırım kadar değerlidir.</p>
      
      <h3>Eğitim İçeriği Önerileri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Sahte mail (Phishing) nasıl ayırt edilir?</li>
        <li>Ortak alanlarda (Kafe Wi-Fi'ları) çalışma riskleri.</li>
        <li>Şüpheli bir durumda (Bilgisayar kasması vb.) kime haber verilmeli?</li>
      </ul>

      <p><strong>ACKLOG Awareness:</strong> Eğitimlerinizin ne kadar başarılı olduğunu ACKLOG raporlarıyla ölçün. "Eğitimden sonra şüpheli mail linkine tıklayanların sayısı azaldı mı?" sorusuna grafiklerle yanıt alın. Manuel anketler yerine ACKLOG'un gerçek veri analizini kullanarak farkındalığı bilimsel olarak artırın.</p>
    `
  },
  "veri-sizintisi-nasil-onlenir-dlp-ve-siem-rolu": {
    title: "Veri Sızıntısı Nasıl Önlenir? DLP ve SIEM'in Ortak Rolü",
    description: "Kritik verilerin dışarı kaçmasını engellemek için proaktif savunma stratejileri.",
    content: `
      <h2>Data Leakage: Hazinenizi Korumak</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Veri sızıntısı bir şirketin sadece parasını değil, itibarını da silip bitirebilir. Sızıntıyı "Durdurmak" (DLP) önemlidir ama sızma "Girişimini" fark etmek (SIEM) daha hayati bir önleme adımıdır.</p>
      
      <h3>Önleme Stratejileri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Endpoint Protection:</strong> USB ve kopyalama işlemlerinin loglanması.</li>
        <li><strong>Mail Analizi:</strong> Giden maillerin içindeki hassas desen (TC, Kredi Kartı) taraması.</li>
        <li><strong>UEBA (Behavioral):</strong> Bir çalışanın aniden GB'larca veri yüklemesinin tespiti.</li>
      </ul>

      <p><strong>ACKLOG DLP Entegrasyonu:</strong> ACKLOG, sızıntı girişimlerini gerçekleştiği anda birleştirir. "Bu kullanıcı önce veritabanından veri çekti, sonra mail attı!" zincirini ACKLOG ile görün. Manuel log takip edemezsiniz, ACKLOG ile sızıntılara karşı görünmez bir duvar örün.</p>
    `
  },
  "calisanlarin-bilgisayarini-izlemek-yasal-mi-kvkk": {
    title: "Çalışanların Bilgisayarını İzlemek Yasal mı? (KVKK ve İş Hukuku)",
    description: "Personel takibi yaparken uyulması gereken hukuki sınırlar ve mahremiyet kuralları.",
    content: `
      <h2>Hukuki Dengeler: İzleme Mi, Güvenlik Mi?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Bir işverenin şirket bilgisayarlarını izlemesi "Güvenlik ve Ticari Sırların Korunması" amacıyla yasaldır. Ancak, personelin özel mesajlarını okumak veya 7/24 ekran kaydı almak KVKK'ya göre suç sayılabilir.</p>
      
      <h3>Yasal İzleme Formülü</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Personeli "İzlendikleri" konusunda önceden bilgilendirin (Aydınlatma Metni).</li>
        <li>Sadece "İş Odaklı" ve "Güvenlik Odaklı" logları toplayın.</li>
        <li>Toplanan verilere erişimi sınırlayın (Sadece Auditor görebilsin).</li>
      </ul>

      <p><strong>ACKLOG Privacy-First:</strong> ACKLOG SIEM, özel hayatı ihlal etmeden sadece "Sistem Güvenlik Loglarını" takip eder. Bu sayede hem siber ataklardan korunur hem de KVKK önünde kendinizi hukuken savunabilirsiniz. Manuel ve riskli casus yazılımlar yerine, ACKLOG ile profesyonel bir denetim kurun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "kvkk-idari-para-cezalari-2026-analizi": {
    title: "KVKK İdari Para Cezaları 2026: Riske Girmeye Değer mi?",
    description: "2026 yılı güncel KVKK ceza miktarları ve en çok ceza yenen maddelerin teknik analizi.",
    content: `
      <h2>Ekonomik Risk: <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> Cezaları Katlanıyor</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>KVKK ihlalleri artık "Bir uyarı alıp geçeriz" aşamasını çoktan geçti. 2026 yılı itibarıyla idari para cezaları milyonlarca TL seviyesine ulaşmış durumda. Özellikle "Veri Güvenliğine İlişkin Teknik Tedbirleri Almamak" en yüksek ceza kategorisindedir.</p>
      
      <h3>Ceza Almamak İçin 3 Altın Kural</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Logları zaman damgasıyla imzalı saklamak.</li>
        <li>Veri sızıntısını 72 saatte raporlayabilecek altyapıyı kurmak.</li>
        <li>Yetki matrisini canlı izlemek.</li>
      </ol>

      <p><strong>ACKLOG ROI:</strong> Bir ACKLOG lisans bedeli, olası bir KVKK cezasının sadece %5'i kadardır. Şirketinizin geleceğini şansa bırakmayın. ACKLOG ile hem güvenliğinizi sağlayın hem de yasal risklerinizi sıfıra indirin. Manuel log tutmak ceza kurtarmaz, ACKLOG kurtarır.</p>
    `
  },
  "iso-27001-belgesi-nasil-alinir-bt-rehberi": {
    title: "ISO 27001 Belgesi Nasıl Alınır? BT ve Güvenlik Altyapısı",
    description: "Sertifikasyon sürecinde siber güvenlik altyapısının rolü ve denetim hazırlığı.",
    content: `
      <h2>Global Standart: ISO 27001 Sertifikasyon Yolculuğu</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>ISO 27001, kurumsal bilgi güvenliğini dünyaya ispat etmektir. Denetçiler sadece belgelerinize değil, o belgelerdeki kuralları "Teknik olarak nasıl denetlediğinize" bakarlar. İşte burada SIEM (Log yönetimi) devreye girer.</p>
      
      <h3>BT Denetçisi Ne Sorar?</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Log yönetim politikanız var mı?</li>
        <li>Loglara sadece adminlerin eriştiğini ispatlayabilir misiniz?</li>
        <li>Loglar siber saldırı tespiti için AKTİF kullanılıyor mu?</li>
      </ul>

      <p><strong>ACKLOG Compliance Reports:</strong> ISO 27001 denetçilerinin istediği 'Gelişmiş Raporlar' ACKLOG içinde hazır gelir. Denetim haftası uykularınız kaçmasın; ACKLOG'un tek tuşla dökümantasyon özelliğiyle sertifikanızı güvenle alın. Manuel rapor biriktirmeyin, ACKLOG ile otomatiğe bağlayın.</p>
    `
  },
  "kvkk-uyumlu-log-saklama-suresi-nedir": {
    title: "KVKK Uyumlu Log Saklama Süresi Nedir? (2 Yıl Kuralı)",
    description: "Hangi log ne kadar saklanmalı? KVKK ve 5651 arasındaki süre farkları ve saklama stratejileri.",
    content: `
      <h2>Zamanlama: Loglar Ne Zaman Silinmeli?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Logları sonsuza kadar saklamak disk maliyetidir, erken silmek ise hapis ve para cezası riskidir. <a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK</a> gereği loglar "Gerektiği kadar" (Genellikle 2 yıl) saklanmalıdır.</p>
      
      <h3>Süre Standartları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Fiziksel Güvenlik (Kamera):</strong> 30-60 Gün.</li>
        <li><strong>İnternet Trafik Kaydı (5651):</strong> Minimum 2 Yıl.</li>
        <li><strong>Finansal/Muhasebe Logları:</strong> 5-10 Yıl.</li>
      </ul>

      <p><strong>ACKLOG Retention Policy:</strong> ACKLOG, belirttiğiniz süreden eski logları otomatik siler (Veya arşivler). Disk doluluğunu dert etmeyin; ACKLOG'un yüksek sıkıştırma teknolojisi sayesinde 10 yıllık logu çok küçük disk alanlarında saklayın. Manuel takip bitti, ACKLOG ile yasal sürelere %100 uyum sağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "felaket-kurtarma-disaster-recovery-plani-bt": {
    title: "Felaket Kurtarma (Disaster Recovery) Planı ve BT Stratejisi",
    description: "Deprem, yangın veya siber saldırı sonrası sistemleri hızla ayağa kaldırma rehberi.",
    content: `
      <h2>Şirket Yaşam Hattı: Disaster Recovery (DR) Planı</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Büyük bir felaket anında (Sunucu odasının yanması veya Tüm ağın hacklenmesi) sistemlerinizi ne kadar sürede geri getirebilirsiniz? DR planı, bu soruya verilen yanıttır ve provası mutlaka yapılmalıdır.</p>
      
      <h3>Planın Temel Taşları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>RTO (Recovery Time Objective):</strong> Maksimum kesinti süresi ne kadar?</li>
        <li><strong>RPO (Recovery Point Objective):</strong> Ne kadarlık bir veri kaybını göze alıyoruz?</li>
        <li><strong>Off-site Backup:</strong> Yedeklerin ana binadan farklı bir coğrafyada dahi tutulması.</li>
      </ol>

      <p><strong>ACKLOG Arşivleme:</strong> Bir felaket anında yedekleriniz dahi silinebilir. ACKLOG log verilerini TÜBİTAK zaman damgasıyla Bulut (Cloud) veya Farklı Lokasyona otomatik saniyeler içinde yedekler. Felaket anında verileriniz ACKLOG ile güvende kalsın, operasyonel sürekliliğiniz bozulmasın.</p>
    `
  },
  "is-surekliligi-yonetimi-bcm-temelleri": {
    title: "İş Sürekliliği Yönetimi (BCM) Temelleri ve SIEM'in Rolü",
    description: "Operasyonel kesintilere karşı kurumsal direnç nasıl oluşturulur?",
    content: `
      <h2>Süreklilik: Business Continuity Management (BCM)</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>İş sürekliliği, kurumun kriz anlarında dahi temel fonksiyonlarını yerine getirebilme yeteneğidir. Sadece BT değil, tüm departmanları kapsar. Ancak dijital dünyada BT sürekliliği yoksa, BCM de yoktur.</p>
      
      <h3>BCM'de SIEM Neden Önemli?</h3>
      <p>Bir siber saldırı operasyonu durdurduğunda, BCM planının devreye girmesi için saldırının "Kök Nedeni" hızla bulunmalıdır. SIEM, kriz anında size yolu gösteren tek fenerdir.</p>

      <p><strong>ACKLOG BCM Support:</strong> Sistemlerdeki performans düşüşlerini veya siber tehditleri önceden haber alarak "Kriz oluşmadan" müdahale edin. ACKLOG ile iş sürekliliğinizi veri odaklı kararlarla yönetin. Manuel kararlar vakit kaybettirir, ACKLOG hız kazandırır.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "siber-sigorta-sartlari-ve-kapsami-neleri-icerir": {
    title: "Siber Sigorta Şartları ve Kapsamı: Şirketinizi Dijital Risklerden Koruyun",
    description: "Siber sigorta poliçesi alırken istenen siber güvenlik standartları ve SIEM zorunluluğu.",
    content: `
      <h2>Finansal Korunma: Siber Sigorta Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Siber sigorta, bir veri sızıntısı veya fidye yazılımı saldırısı sonrası oluşacak mali zararları (Fidye, Hukuki gider, Tazminat) karşılayan sigorta türüdür. Ancak sigorta şirketleri herkesi sigortalamazlar.</p>
      
      <h3>Sigortacının Checklist'i</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Düzenli sızma testi yapılıyor mu?</li>
        <li>Loglar merkezi bir SIEM'de (Zaman damgalı) tutuluyor mu?</li>
        <li>Çok faktörlü doğrulama (MFA) aktif mi?</li>
      </ul>

      <p><strong>ACKLOG Policy Builder:</strong> Siber sigorta başvurusu yaparken "SIEM kullanıyoruz ve loglarımız güvende" maddesini ACKLOG sertifikaları ve raporlarıyla kolayca karşılayın. Sigorta primlerinizi düşürmek ve tam kapsamlı koruma almak için ACKLOG'un siber kalkanını kullanın.</p>
    `
  },
  "penetrasyon-sizma-testi-firmalari-nasıl-seçilir": {
    title: "Penetrasyon (Sızma) Testi Firmaları ve Test Çeşitleri",
    description: "Whitebox, Blackbox ve Greybox sızma testleri arasındaki farklar ve seçim kriterleri.",
    content: `
      <h2>Zafiyet Avı: Sızma Testi Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Pentes (Penetrasyon Testi), etik hackerların sistemlerinize saldırarak açıklarınızı önceden bulmasıdır. Yılda en az 1 kez (KVKK gereği) yapılması şarttır.</p>
      
      <h3>Test Çeşitleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Blackbox:</strong> Saldırganın hiçbir bilgisi yok (En gerçekçi senaryo).</li>
        <li><strong>Whitebox:</strong> Tüm sistem mimarisi tester ile paylaşılır (En detaylı analiz).</li>
        <li><strong>Greybox:</strong> Kısmi bilgi (Düşük yetkili kullanıcı hesabı vb.) paylaşımı.</li>
      </ul>

      <p><strong>ACKLOG Log Integrity:</strong> Sızma testi sırasında ACKLOG'un bu atakları yakalayıp yakalamadığını test edin. Eğer ACKLOG alarm veriyorsa sisteminiz güvenli demektir. Test raporlarınızdaki açıkları kapatırken ACKLOG size yol haritası sunar. Manuel güvenlik bitti, ACKLOG ile her testten başarıyla çıkın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "zafiyet-tarama-vulnerability-scanning-araclari": {
    title: "Zafiyet Tarama (Vulnerability Scanning) Araçları ve Otomasyon",
    description: "Sistem açıkları saptanmadan siber saldırganlar tarafından kullanılmasın! Zafiyet yönetimi.",
    content: `
      <h2>Proaktif Defans: Kapılarınızın Kilidini Kontrol Edin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Hacking işlemleri genellikle "Bilinen bir açığın" (CVE) kapatılmamasıyla başlar. Zafiyet tarama araçları, sistemlerinizi 7/24 tarayarak güncel olmayan yazılımları ve konfigürasyon hatalarını bulur.</p>
      
      <h3>Otomatik Tarama Stratejisi</h3>
      <p>Haftalık otomatik taramalar planlamalı ve kritik zafiyetler (Critical) çıktığında sistem ekibine anlık iş emri göndermelisiniz.</p>

      <p><strong>ACKLOG Scanner:</strong> ACKLOG SIEM, yerleşik zafiyet tarayıcılarla entegre çalışır. Bir sunucuda yeni bir açık bulunduğunda ACKLOG size anında uyarı verir. "Açığımız var mı?" diye beklemeyin; ACKLOG ile sürekli zafiyet yönetimine geçin. Manuel kontrollerle siber hıza yetişemezsiniz.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "soc-as-a-service-hizmet-olarak-soc-avantajlari": {
    title: "SOC as a Service (Hizmet Olarak SOC) Avantajları: Neden Dış Kaynak?",
    description: "Kendi güvenlik merkezinizi kurmak mı, yoksa hizmet almak mı ekonomik?",
    content: `
      <h2>Güvenlik Merkezi: Neden SOC as a Service?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>SOC (Security Operations Center), 7/24 log izleyen uzmandır. Küçük ve orta ölçekli şirketler için 3 vardiya uzman çalıştırmak çok maliyetlidir. SOC as a Service, bu uzmanlığı aylık bir hizmet bedeliyle almanızı sağlar.</p>
      
      <h3>SOC Hizmetinde Olması Gerekenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>7/24 Gerçek zamanlı izleme.</li>
        <li>Olay müdahale (Incident Response) desteği.</li>
        <li>Düzenli güvenlik ve uyumluluk raporları.</li>
      </ul>

      <p><strong>ACKLOG Cloud SOC:</strong> ACKLOG, SOC hizmeti veren MSP/MSSP firmaları için en güçlü platformdur. Eğer bir SOC hizmeti alacaksanız, altyapıda ACKLOG kullanıldığından emin olun. Bu sayede yasal loglarınız her zaman Türkiye'deki sunucularınızda güvende kalır. Manuel takip bitti, ACKLOG ve SOC hizmetiyle tam uyku uyuyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "siber-olay-mudahele-ekibi-some-kurulumu-yasal": {
    title: "Siber Olay Müdahale Ekibi (SOME) Kurulumu: Yasal Zorunluluklar",
    description: "Kamu ve kritik altyapılar için SOME timi nasıl kurulur? USOM ile koordinasyon.",
    content: `
      <h2>Milli Savunma: Kurum İçi SOME Timi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Türkiye'de siber olaylara müdahale hiyerarşisinde en alt ve en kritik birim SOME'dir. Bir saldırı olduğunda USOM'a (Ulusal Siber Olaylara Müdahale Merkezi) raporlama yapan birim burasıdır.</p>
      
      <h3>SOME Görevleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Kurum içi siber tehdit istihbaratını yönetmek.</li>
        <li>Zafiyetleri kapatmak.</li>
        <li>Bir saldırı olduğunda "Yasal Delilleri" toplamak ve saklamak.</li>
      </ul>

      <p><strong>ACKLOG SOME Destek:</strong> SOME personelinin en büyük zorluğu loglar arasında kaybolmaktır. ACKLOG, SOME ekipleri için özel "Dashboardlar" ve "Playbooklar" sunar. Bir saldırı sırasında ACKLOG'un otomatik delil toplama özelliğiyle yasal süreçleri hata payı olmadan yönetin. ACKLOG ile profesyonel bir siber tim olun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "ransomware-sonrasi-veri-kurtarma-ve-strateji": {
    title: "Ransomware Sonrası Veri Kurtarma ve Soruşturma Stratejisi",
    description: "Dosyalarınız şifrelendiğinde ne yapmalısınız? Fidye ödemeden önce bu rehberi okuyun.",
    content: `
      <h2>Felaket Anı: Fidye Yazılımı Bulaştığında İlk 10 Adım</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Ransomware (Fidye yazılımı) bir sisteme girdikten sonra sadece dosyaları şifrelemez, yedekleri ve logları da siler. Veri kurtarmadan önce saldırganın hala içeride olup olmadığını bulmalısınız.</p>
      
      <h3>İlk Müdahale Checklist'i</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Enfekte olan sunucuyu ağdan izole edin (Fişini çekmeyin, RAM'deki veriler önemli!).</li>
        <li>Log kayıtlarını (Eğer SIEM'e akıyorsa) ayrı bir güvenli kasanın içine koyun.</li>
        <li>Fidye ödemeyin; ödeme sonrası verilerin gelme garnatisi %50'den azdır.</li>
      </ol>

      <p><strong>ACKLOG Ransomware Recovery:</strong> ACKLOG logları sunucudan bağımsız bir yerde sakladığı için saldırgan sunucudaki logları silsede siz ACKLOG üzerinden "Saldırgan nereden sızdı?" sorusuna yanıt bulabilirsiniz. ACKLOG ile kök neden analizini yapın ve aynı felaketi tekrar yaşamayın. Manuel kurtarma risklidir, veriye dayalı müdahale hayat kurtarır.</p>
    `
  },
  "siber-saldiri-sonrasi-yapilacaklar-listesi-bt": {
    title: "Siber Saldırı Sonrası Yapılacaklar Listesi: BT Ekipleri İçin Kritik Adımlar",
    description: "Sakin kalın! Bir saldırı sonrası adli analiz, temizlik ve yasal bildirim süreci.",
    content: `
      <h2>Kriz Yönetimi: Saldırı Tespit Edildiğinde Ne Yapmalı?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>BT odasında panik başladıysa güvenlik çökmüş demektir. Profesyonel bir BT ekibi, saldırı anında "Neyin, nasıl yapılacağına" dair bir kontrol listesine (Playbook) sahip olmalıdır.</p>
      
      <h3>Checklist</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Karantina:</strong> Saldırganın hareket alanını kısıtlayın.</li>
        <li><strong>Adli Bilişim (Forensics):</strong> Logları inceleyerek giriş noktasını (Entry Point) bulun.</li>
        <li><strong>Bildirim:</strong> Üst yönetimi ve eğer veri sızıntısı varsa KVKK kurumunu haberdar edin.</li>
      </ul>

      <p><strong>ACKLOG Crisis Dashboard:</strong> Bir saldırı anında ACKLOG size "Incident Management" ekranı üzerinden tüm detayları sunar. Hangi accountlar riskte, hangi IP'ler saldırıyor? Manuel olarak log taramayı bırakın, ACKLOG ile kriz anında net kararlar verin. Saldırı sonrası toparlanma sürenizi ACKLOG ile yarı yarıya kısaltın.</p>
    `
  },
  "sirket-ici-siber-tatbikat-senaryolari-ve-hazirlik": {
    title: "Şirket İçi Siber Tatbikat Senaryoları ve Ekiplerin Hazırlığı",
    description: "Savaşa barışta hazırlanın! Personel ve sistemlerin test edilmesi için tatbikat rehberi.",
    content: `
      <h2>Strateji: Siber Tatbikat Neden Gereklidir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Uçağa binmeden önce yapılan güvenlik brifingi ne kadar önemliyse, siber tatbikatlar da o kadar önemlidir. Amaç, ekiplerin gerçek bir saldırı anındaki reaksiyon hızını ve soğukkanlılığını ölçmektir.</p>
      
      <h3>Senaryo Örnekleri</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6 text-muted-foreground">
        <li><strong>Zararlı Mail Tatbikatı:</strong> Personelin %kaçı sahte linke tıklıyor?</li>
        <li><strong>Red Team vs Blue Team:</strong> IT ekibi (Mavi) dışarıdan gelen (Kırmızı) sızma girişimini ne kadar sürede fark edecek?</li>
        <li><strong>Backup Recovery:</strong> Kritik sunucu silindiğinde geri dönüş ne kadar sürüyor?</li>
      </ul>

      <p><strong>ACKLOG Tatbikat Raporu:</strong> Tatbikat sırasında ACKLOG dashboardlarını izleyin. Ekipleriniz alarmları gördü mü? Müdahale hızı (MTTR) ne oldu? ACKLOG ile eksiklerinizi veriyle görün ve gerçek bir saldırı gelmeden savunmanızı mükemmelleştirin. Manuel eğitimleri ACKLOG ile somutlaştırın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  }
};
