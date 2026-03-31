export const opsCloudArticles = {
  "sunucu-cpu-kullanimi-alarmi-kurma-yontemleri": {
    title: "Sunucu CPU Kullanımı Alarmı Kurma ve Performans İzleme",
    description: "İşlemci yükündeki anormal artışları saniyeler içinde fark edin. Alarm kurma ve aksiyon planı.",
    content: `
      <h2>Sistem Sağlığı: CPU Yükü Neden İzlenmeli?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Bir sunucunun CPU kullanımı %90'ın üzerine çıktığında sistem kilitlenir ve tüm iş süreçleri durur. Bu artış hatalı bir yazılımdan, disk darboğazından veya aktif bir siber saldırıdan (DDoS) kaynaklanıyor olabilir.</p>
      
      <h3>Alarm Kurma Adımları</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Eşik Değeri (Threshold):</strong> %85 gibi bir sınır belirleyin.</li>
        <li><strong>Süre (Duration):</strong> Bu yük 5 dakikadan fazla sürüyorsa alarm üretin (Geçici dalgalanmaları eleyin).</li>
        <li><strong>Bildirim:</strong> BT ekibine anlık SMS veya Mobil Bildirim gönderin.</li>
      </ul>

      <p><strong>ACKLOG Performance:</strong> Sadece CPU değil, RAM ve Disk kullanımını da ACKLOG ile tek dashboardda izleyin. Bir alarm tetiklendiğinde ACKLOG size o saniyedeki en çok kaynak tüketen "Process" listesini de sunar. Manuel kontrollerle vakit kaybetmeyin, ACKLOG ile sistem sağlığınızı otomatiğe bağlayın.</p>
    `
  },
  "disk-doluluk-orani-takibi-ve-otomatik-uyari": {
    title: "Disk Doluluk Oranı Takibi ve Otomatik Uyarı Sistemleri",
    description: "Disklerin dolması nedeniyle servis kesintisi yaşamayın! Akıllı kota yönetimi.",
    content: `
      <h2>Kesintisiz Hizmet: Disk Alanı Analizi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>BT dünyasının en yaygın ama en kolay önlenebilir sorunu "Disk dolması"dır. Bir veritabanı sunucusunun diski dolduğunda log yazamaz ve veri kaybına neden olabilir.</p>
      
      <h3>İzleme Stratejisi</h3>
      <p>Disk doluluğunu sadece rakamsal değil, "Zaman tahmini" ile izlemelisiniz. "Diskin dolmasına şu anki hızla 3 gün kaldı" verisi paha biçilemezdir.</p>

      <p><strong>ACKLOG Disk Watcher:</strong> ACKLOG, sunucularınızdaki disk kullanım trendlerini analiz eder. %90 dolulukta kritik alarm, %80'de uyarı gönderir. Manuel disk kontrolü yapmayın; ACKLOG sizin için disklerinizi 7/24 izlesin, servis kesintilerini tarihe gömün.</p>
    `
  },
  "ag-cihazlari-snmp-yapilandirmasi-ve-loglama": {
    title: "Ağ Cihazları SNMP Yapılandırması ve Merkezi Loglama",
    description: "Switch, Router ve Firewall cihazlarından SNMP ile nasıl veri toplanır? Adım adım rehber.",
    content: `
      <h2>Ağ Görünürlüğü: SNMP Protokolünün Gücü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>SNMP (Simple Network Management Protocol), ağ cihazlarının sağlık verilerini (Trafik, sıcaklık, uptime) toplamak için evrensel bir dildir. Switch'in bir portunun aniden kapanması SNMP trap ile anında raporlanabilir.</p>
      
      <h3>Yapılandırma Adımları</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6">
        <li>Cihaz üzerinde SNMP servisini aktif edin.</li>
        <li>Community String (Şifre) olarak karmaşık bir yapı seçin (V3 önerilir).</li>
        <li>ACKLOG sunucusunu 'Trap Receiver' (Alıcı) olarak tanımlayın.</li>
      </ol>

      <p><strong>ACKLOG Network Monitoring:</strong> Tüm ağ cihazlarınızın performansını ACKLOG ile görselleştirin. Bir switch portunda aşırı hata (Errors) oluştuğunda ACKLOG sizi uyarsın. Manuel cihaz kontrolleriyle uğraşmayın, ACKLOG ile ağınızın röntgenini çekin.</p>
    `
  },
  "it-envanter-yonetimi-yazilimlari-ve-guvenlik": {
    title: "IT Envanter Yönetimi Yazılımları ve Siber Güvenlik İlişkisi",
    description: "Görmediğiniz şeyi koruyamazsınız! BT varlıklarını keşfetme ve loglama.",
    content: `
      <h2>Varlık Yönetimi: Envanter Bilginiz Güncel Mi?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Siber saldırıların çoğu, "BT ekibinin varlığından haberdar olmadığı" unutulmuş eski bir sunucudan veya test makinesinden başlar. Envanter yönetimi, güvenliğin temelidir.</p>
      
      <h3>Envanterde Olması Gerekenler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Donanım Seri Numaraları ve Garanti Durumları.</li>
        <li>Yüklü Yazılım Sürümleri ve Lisanslar.</li>
        <li>Cihaza en son kimin login olduğu bilgisi.</li>
      </ul>

      <p><strong>ACKLOG Asset Discovery:</strong> ACKLOG ağınızı tarar ve yeni katılan her cihazı otomatik envantere ekler. "Bu cihaz kimin?" diye sormanıza gerek kalmaz. ACKLOG ile hem envanterinizi güncel tutun hem de yetkisiz cihazları anında ağdan uzaklaştırın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "uzaktan-yonetim-araclari-guvenligi-anydesk-teamviewer": {
    title: "Uzaktan Yönetim Araçları Güvenliği (AnyDesk, TeamViewer)",
    description: "Help Desk ekiplerinin kullandığı uzak bağlantı araçlarındaki siber riskler ve denetim.",
    content: `
      <h2>Uzak Bağlantı: Açık Kapı Yı İzleyin</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>AnyDesk, TeamViewer gibi araçlar BT desteği için hayatidir. Ancak bir saldırganın bu araçları kullanarak sistemlerinize sızması (ve antivirüsü kapatması) en yaygın saldırı yöntemlerinden biridir.</p>
      
      <h3>Denetim Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Bu uygulamaların sadece belirli bir IP'den erişimine izin verilmesi.</li>
        <li>Bağlantı sırasında 'User Consent' (Kullanıcı Onayı) zorunluluğu.</li>
        <li>Uzak bağlantı sürelerinin ve ID'lerinin loglanması.</li>
      </ul>

      <p><strong>ACKLOG App Monitor:</strong> Ağınızdaki "Uzak Masaüstü" trafiğini ACKLOG ile tespit edin. Şüpheli bir saatte veya alışılmadık bir bilgisayardan gelen Anydesk bağlantısını ACKLOG anında yakalar. Manuel kontroller yetmez, ACKLOG ile uzak erişimlerin her saniyesini kayıt altına alın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "bt-departmani-aylik-rapor-ornekleri-ve-metrikler": {
    title: "BT Departmanı Aylık Rapor Örnekleri ve Performans Metrikleri",
    description: "Yönetime sunulacak profesyonel BT raporu nasıl hazırlanır? Örnek şablonlar.",
    content: `
      <h2>Kurumsal Hafıza: BT Raporlama Kültürü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Sistemler tıkır tıkır çalışıyorsa yönetici "BT ne yapıyor?" diye sorabilir. Profesyonel bir BT raporu, ekibin harcadığı emeği ve sistemlerin güvenliğini sayılarla ispatlamalıdır.</p>
      
      <h3>Rapordaki Temel Başlıklar</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Sistem Uptime Oranı (%99.9 vb.).</li>
        <li>Engellenen Siber Saldırı Sayısı.</li>
        <li>Disk ve Kaynak Tüketim Trendleri.</li>
        <li>Tamamlanan Destek Talepleri (SLA).</li>
      </ul>

      <p><strong>ACKLOG Executive Reporting:</strong> ACKLOG, bu raporları sizin yerinize otomatik hazırlar. Her ayın 1'inde yöneticinizin e-postasına PDF olarak "Sistem Özet Raporunu" gönderir. Manuel rapor hazırlamakla saatlerinizi harcamayın, ACKLOG ile kurumsal prestijinizi artırın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "sistem-odası-izleme-cozumleri-sicaklik-ve-nem": {
    title: "Sistem Odası İzleme Çözümleri: Sıcaklık, Nem ve Erişim",
    description: "Dijital güvenliğin fiziksel bacağı: Veri merkezi (Data Center) izleme sistemleri.",
    content: `
      <h2>Fiziksel Güvenlik: Sunucularınız Yanmasın</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Siber bir saldırı kadar, bozulan bir klima da şirketinizi durdurabilir. Sistem odasının sıcaklığı 30 derecenin üzerine çıktığında donanımlar kalıcı hasar görebilir.</p>
      
      <h3>İzlencek Parametreler</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Sıcaklık ve Nem:</strong> İdeal aralık dışına çıktığında alarm üretilmelidir.</li>
        <li><strong>Su Baskını Sensorü:</strong> Klima sızıntılarına karşı erken uyarı.</li>
        <li><strong>Fiziksel Kapı Giriş:</strong> Odasına kimin, ne zaman girdiği kayıt altına alınmalıdır.</li>
      </ul>

      <p><strong>ACKLOG Sensor Integration:</strong> ACKLOG, ortam izleme cihazlarıyla (Sensorler) konuşabilir. Sistem odasının kapısı açıldığında veya sıcaklık arttığında ACKLOG sizi uyarır. Fiziksel ve dijital güvenliği ACKLOG ile tek merkezden yönetin.</p>
    `
  },
  "kesintisiz-guc-kaynagi-ups-log-izleme-ve-analiz": {
    title: "Kesintisiz Güç Kaynağı (UPS) Log İzleme ve Analiz Rehberi",
    description: "Elektrik kesintileri ve UPS akü sağlığını SIEM üzerinden takip etme.",
    content: `
      <h2>Enerji Güvenliği: UPS'lerinizi Konuşturun</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*
      </blockquote>
      <p>Jeneratör ve UPS devrede mi? Akülerin ömrü ne kadar kaldı? Birçok BT yöneticisi UPS üzerindeki arıza ışığını ancak cihaz ötmeye başladığında fark eder. Oysa ağ kartı (SNMP) olan her UPS size bilgi gönderebilir.</p>
      
      <h3>Takip Edilecek Veriler</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Giriş/Çıkış Voltaj Dalgalanmaları.</li>
        <li>Akü Yük Oranı (%) ve Tahmini Çalışma Süresi.</li>
        <li>Cihaz İç Sıcaklığı.</li>
      </ul>

      <p><strong>ACKLOG Energy Watch:</strong> Tüm UPS sistemlerinizin "Sağlık Karnesini" ACKLOG ile görün. Akü biterken değil, değiştirme vakti geldiğinde ACKLOG sizi uyarsın. Manuel kontrolle riske girmeyin, ACKLOG ile sistem odanızın enerjisini koruyun.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "yedekleme-backup-basarili-basarisiz-takibi-rehberi": {
    title: "Yedekleme (Backup) Başarılı/Başarısız Takibi ve Loglama",
    description: "Yedek aldığınızı sanmayın, emin olun! Yedekleme loglarının merkezi analizi.",
    content: `
      <h2>Geri Dönüş Bileti: Yedekleme Denetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>BT dünyasının en büyük trajedisi, bir saldırı sonrası yedeğe dönmek isteyip "Yedekleme 3 aydır hata veriyormuş" gerçeğiyle karşılaşmaktır. Yedekleme yazılımları (Veeam, Acronis vb.) her gün rapor üretir ancak bu mailler çoğu zaman okunmadan silinir.</p>
      
      <h3>Kritik Analiz</h3>
      <p>Yedekleme başarılıysa (Success) sorun yok, ancak başarısızsa (Failed) sebebini (Network timeout, disk full vb.) anında öğrenmelisiniz.</p>

      <p><strong>ACKLOG Backup Monitor:</strong> ACKLOG, yedekleme yazılımlarının ürettiği logları her sabah tarar. Eğer bir yedeğiniz başarısız olduysa dashboardda "Kırmızı" bir uyarı yakar. Manuel mail kontrolüyle vakit kaybetmeyin, yedeğinizin sağlam olduğundan ACKLOG ile emin olun.</p>
    `
  },
  "sunucu-uptime-suresi-hesaplama-ve-raporlama": {
    title: "Sunucu Uptime Süresi Hesaplama ve Raporlama Formülleri",
    description: "%99.9 Uptime nedir? Sunucu ayakta kalma süresini yasal raporlama.",
    content: `
      <h2>Performans Ölçütü: Uptime Oranı Nedir?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>Uptime, bir sistemin yıl boyunca ne kadar süre kesintisiz hizmet verdiğini gösteren % bir değerdir. Üst yönetim için en önemli BT metriği budur. "Kaç saat kapalı kaldık?" sorusuna kesin cevap vermelisiniz.</p>
      
      <h3>Uptime Formülü</h3>
      <p><code>[Uptime Süresi / (Uptime + Downtime Süresi)] * 100</code> formülüyle hesaplanır.</p>

      <p><strong>ACKLOG SLA Dashboard:</strong> ACKLOG, her sunucunun kalp atışını (Heartbeat) izler. Ay sonunda size "Bu sunucu bu ay %99.98 oranında çalıştı" raporunu otomatik sunar. Manuel hesaplama bitti, ACKLOG ile sistemlerinizin başarısını veriyle ispatlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "aws-cloudwatch-log-yonetimi-ve-siem-entegrasyonu": {
    title: "AWS CloudWatch Log Yönetimi ve SIEM Entegrasyonu",
    description: "Amazon Web Services üzerindeki bulut kaynaklarınızın (EC2, RDS) loglarını merkezileştirme.",
    content: `
      <h2>Bulut Güvenliği: AWS Loglarını Toplamak</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>AWS kullanıyorsanız, tüm logların (CloudTrail, VPC Flow Logs, Application Logs) tek bir merkezde toplandığı yer CloudWatch'tur. Ancak bu logları sadece AWS içinde bırakmak, büyük resmi görmenizi engeller.</p>
      
      <h3>CloudWatch'tan SIEM'e Aktarım</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>AWS Lambda:</strong> Logları anlık yakalayıp ACKLOG'a gönderen küçük kodlar.</li>
        <li><strong>Kinesis Firehose:</strong> Yüksek hacimli log verisini akışkan bir şekilde aktarma.</li>
        <li><strong>CloudTrail:</strong> "Kim, hangi AWS kaynağını sildi?" sorusunun yanıtı.</li>
      </ul>

      <p><strong>ACKLOG Cloud Connector:</strong> AWS kaynaklarınızdaki hareketleri, yerel sunucu loglarınızla ACKLOG üzerinde birleştirin. Hibrit bulut güvenliğini manuel yönetemezsiniz, ACKLOG ile her iki dünyayı tek bir ekrandan izleyin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "azure-activity-logs-izleme-ve-guvenlik-analizi": {
    title: "Azure Activity Logs İzleme ve Güvenlik Analizi Rehberi",
    description: "Microsoft Azure üzerindeki her tıklamayı ve yetki değişimini nasıl loglarsınız?",
    content: `
      <h2>Microsoft Cloud: Azure Log Yönetimi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Azure portalı üzerinden yapılan her bir işlem (Bir VM'in silinmesi, bir Network Security Group kuralının değişmesi) 'Activity Log' içine kaydedilir. Güvenlik için bu logların silinmemesi ve analiz edilmesi şarttır.</p>
      
      <h3>Azure Monitor ve SIEM</h3>
      <p>Azure Monitor üzerinden 'Diagnostic Settings' ayarıyla logları dışarıdaki bir SIEM'e (ACKLOG) yönlendirebilirsiniz. Özellikle 'Privileged Identity Management' (PIM) hareketleri en çok izlenmesi gereken veridir.</p>

      <p><strong>ACKLOG Azure Integration:</strong> Azure üzerindeki güvenlik olaylarını ACKLOG dashboardlarına yansırtın. Microsoft bulutundaki bir siber saldırıyı, kurum içindeki SIEM ekranınızdan anlık takip edin. Manuel portallar arasında kaybolmayın, ACKLOG ile bulutta şeffaflık kazanın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "google-cloud-logging-kurulumu-ve-siem-entegrasyonu": {
    title: "Google Cloud Logging Kurulumu ve SIEM Entegrasyonu",
    description: "GCP üzerindeki konteyner ve sunucu loglarını merkezi analize dahil etme.",
    content: `
      <h2>Google Cloud: Log Explorer ve Ötesi</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*
      </blockquote>
      <p>GCP (Google Cloud Platform) üzerindeki her bir işlem saniyelik kaydedilir. Ancak Google'ın kendi araçları sadece Google bulutunu görür. Gerçek bir güvenlik mimarisi için tüm bulutların logları tek bir SIEM'de birleşmelidir.</p>
      
      <h3>GCP Log Export Yöntemi</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Pub/Sub:</strong> Logları bir "Yayıncı" sistemine gönderin.</li>
        <li><strong>ACKLOG Subscriber:</strong> ACKLOG, bu yayıncıdan logları abone olarak (Pull) veya (Push) yöntemiyle çeker.</li>
        <li><strong>Audit Logs:</strong> Kimlik ve Erişim yönetimi verilerine odaklanın.</li>
      </ul>

      <p><strong>ACKLOG Multi-Cloud:</strong> İster AWS, ister Azure, ister Google Cloud kullanın; ACKLOG hepsini tek bir "Bulut İzleme" ekranında birleştirir. Manuel aramalardan kurtulun, ACKLOG ile tüm bulutlarınızı tek merkezden kontrol edin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sektörel Sorular</h3>
<p><strong>Soru:</strong> KVKK ve <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>
<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>`
  },
  "bulut-guvenligi-riskleri-nelerdir-ve-nasil-onlenir": {
    title: "Bulut Güvenliği Riskleri Nelerdir? (Top 10 Risk Analizi)",
    description: "Cloud computing dünyasındaki en büyük siber tehlikeler ve önleme stratejileri.",
    content: `
      <h2>Siber Risk Analizi: Bulutun Karanlık Yüzü</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>Bulut sistemleri esnektir ama "Sorumluluk Paylaşımı" modeliyle çalışır. Yani Google/Amazon altyapıyı korur, veriyi ve erişimi korumak SİZİN görevinizdir.</p>
      
      <h3>En Büyük 3 Bulut Riski</h3>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
        <li><strong>Yanlış Yapılandırma (Misconfiguration):</strong> S3 bucket'ların internete açık bırakılması.</li>
        <li><strong>Yetkisiz Erişim:</strong> Çalınan Cloud Key'ler ile tüm verinin çekilmesi.</li>
        <li><strong>Görünürlük Kaybı:</strong> Bulutta kimin ne yaptığını bilememek.</li>
      </ol>

      <p><strong>ACKLOG Cloud Audit:</strong> Bulut hesaplarınızdaki hatalı yapılandırmaları ve yetkisiz erişimleri ACKLOG ile anında teşhis edin. "Bulut güvenli mi?" diye sormayın, ACKLOG ile her saniye güvenli olduğunuzdan emin olun. Manuel kontroller sızıntıları durdurmaz, ACKLOG durdurur.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "microsoft-365-guvenlik-skorunu-artirma-yollari": {
    title: "Microsoft 365 Güvenlik Skorunu (Secure Score) Artırma Yolları",
    description: "Office 365 ortamınızı siber saldırılara karşı zırhlayın! Güvenlik skorunu iyileştirme.",
    content: `
      <h2>E-posta ve İşbirliği Güvenliği: M365 Secure Score</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Microsoft 365, kurumunuzun ne kadar güvende olduğunu gösteren bir "Secure Score" sunar. Bu skoru artırmak demek, bir hacker'ın içeri girmesini 10 kat zorlaştırmak demektir.</p>
      
      <h3>Skoru Artıracak 3 Kritik Hamle</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>MFA Zorunluluğu:</strong> Tüm kullanıcılar (özellikle adminler) için iki faktörlü doğrulama.</li>
        <li><strong>Legacy Authentication Kapatma:</strong> Eski ve zayıf giriş yöntemlerini devre dışı bırakın.</li>
        <li><strong>Erişim Loglarını SIEM'e Bağlama:</strong> M365 üzerinde olan biten her şeyi ACKLOG'a aktarın.</li>
      </ul>

      <p><strong>ACKLOG M365 Monitor:</strong> M365 üzerindeki şüpheli dosya paylaşımlarını veya anormal loginleri ACKLOG ile takip edin. Microsoft sizi sadece kendi dünyasında korur, ACKLOG ise M365 verilerinizi tüm kurumsal güvenliğinizle korele eder. Manuel skor takibi yetmez, ACKLOG ile aktif savunmaya geçin.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Operasyonel SSS</h3>
<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>
<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>`
  },
  "onedrive-paylasilan-dosya-takibi-ve-guvenlik": {
    title: "OneDrive Paylaşılan Dosya Takibi ve Veri Güvenliği Denetimi",
    description: "Şirket verilerinizin OneDrive linkleri üzerinden dışarı sızmasını nasıl engellersiniz?",
    content: `
      <h2>Gizli Sızıntı: OneDrive Paylaşımları</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir <a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC</a> merkezine sahip değil.*
      </blockquote>
      <p>Bir personelin "İşini bitirmek için" bir klasörü "Herkesle Paylaş" (Public) modunda link olarak açması, o veriyi tüm internete açmak demektir. Bu link arama motorlarına düşerse verileriniz çalınmış sayılır.</p>
      
      <h3>Denetleme Yöntemi</h3>
      <p>M365 Admin Center veya API üzerinden 'Shared Externally' (Dışarıyla Paylaşılan) dosyaları düzenli raporlamalısınız.</p>

      <p><strong>ACKLOG Data Link Monitor:</strong> OneDrive üzerinden dışarıya açılan her yeni linki ACKLOG saniyeler içinde yakalar ve BT ekibine uyarı gönderir. "Yanlışlıkla" sızan verileri henüz kimse indirmeden geri çekin. Manuel link kontrolü imkansızdır, ACKLOG ile bulut paylaşımlarınızı denetleyin.</p>
    `
  },
  "saas-platformlarinda-veri-guvenligi-ve-ueba": {
    title: "SaaS Platformlarında Veri Güvenliği (Salesforce, Slack, Zoom)",
    description: "Bulut yazılımlarındaki kullanıcı davranışlarını analiz ederek veri kaçırmayı durdurun.",
    content: `
      <h2>Buluttaki Hareketler: SaaS İzleme</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>SaaS platformlarında (CRM, Chat vb.) veri sızıntısı en çok "Kullanıcı Davranışı" üzerinden olur. Ayrılacak bir personelin Salesforce'tan tüm müşteri listesini indirmesini nasıl fark edersiniz?</p>
      
      <h3>UEBA'nın Rolü</h3>
      <p>Kullanıcı Davranış Analizi (UEBA), personelin normal kullanım ritmini öğrenir. Bir kullanıcı her gün 10 kayıt bakarken aniden 1000 kayıt indiriyorsa bunu anında bloklar.</p>

      <p><strong>ACKLOG UEBA:</strong> ACKLOG, SaaS uygulamalarınızın loglarını analiz ederek "Anormal" davranışları teşhis eder. Veri sızmadan önce sızıntı "Niyetini" yakalayın. Manuel raporlarda bu sızıntıları göremezsiniz, ACKLOG ile SaaS verilerinizi zırhlayın.</p>
    `
  },
  "cok-faktorlu-kimlik-dogrulama-mfa-loglari-analizi": {
    title: "Çok Faktörlü Kimlik Doğrulama (MFA) Logları Analizi ve Önemi",
    description: "MFA bypass saldırılarını ve onay yorgunluğu (MFAPush Fatigue) ataklarını durdurun.",
    content: `
      <h2>Güvenli Giriş: MFA Loglarını Okumak</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Araştırmalar, log <a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">korelasyon</a> yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*
      </blockquote>
      <p>MFA tek başına %100 güvenlik sağlamaz. Saldırganlar personelin telefonuna yüzlerce "Onayla" bildirimi göndererek onu bıktırabilir (Push Fatigue). Personel yanlışlıkla birini onayladığında sızıntı başlar.</p>
      
      <h3>İzleme Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Peş peşe gelen 10+ MFA isteği tespiti.</li>
        <li>Farklı bir lokasyondan gelen başarılı MFA onayı.</li>
        <li>MFA devre dışı bırakma (Disable) logları.</li>
      </ul>

      <p><strong>ACKLOG Access Guard:</strong> Kimlik doğrulama sürecindeki tüm anomalileri ACKLOG ile yakalayın. "Bir kullanıcı 20 kez MFA'yı reddetmiş ama 21.de kabul etmiş (Soruşturulmalı!)" uyarısını tek merkezden görün. Manuel kontrollerle MFA hatalarını göremezsiniz, ACKLOG ile girişlerinizi mühürleyin.</p>
    `
  },
  "hibrit-bulut-mimarisi-guvenligi-nasil-saglanir": {
    title: "Hibrit Bulut Mimarisi Güvenliği: On-Prem ve Cloud Arasındaki Köprü",
    description: "Hem kendi sunucusu olan hem de bulut kullanan şirketler için merkezi siber güvenlik.",
    content: `
      <h2>İki Dünya Arasında: Hibrit Bulut Riski</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*
      </blockquote>
      <p>Hibrit bulut kullanan kurumlarda güvenlik "Kör Noktalara" gebedir. Kendi sunucunuzdaki bir log ile AWS'deki bir logu eşleştiremiyorsanız, saldırganın ağınızda nasıl gezdiğini bulamazsınız.</p>
      
      <h3>Çözüm: Merkezi Göz (SIEM)</h3>
      <p>On-prem firewall'unuzdan gelen log ile buluttaki bir API logu aynı "Zaman Çizelgesinde" (Timeline) birleşmelidir. Bu ancak yerel bir SIEM'in buluta uzanmasıyla mümkündür.</p>

      <p><strong>ACKLOG Unified Console:</strong> ACKLOG, hibrit mimarinizin her saniyesini tek bir ekranda birleştirir. Buluttan içeri sızan bir saldırganı yerel sunucunuzda yakalayın. Manuel takip imkansızdır, ACKLOG ile hibrit dünyanızda tam görünürlük sağlayın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  },
  "bulut-depolama-loglama-cozumleri-ve-yasal-uyum": {
    title: "Bulut Depolama Loglama Çözümleri ve Yasal Uyum (KVKK)",
    description: "Bulut verilerinin yasal olarak nasıl tutulması gerektiği ve zaman damgası gerekliliği.",
    content: `
      <h2>Yasal Uyumluluk: Buluttaki Veri Loglanmalı Mı?</h2>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">
        *Uzman analizlerine göre, KVKK <a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651</a> teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*
      </blockquote>
      <p>KVKK gereği kişisel veriler nerede durursa dursun erişim kayıtları (Loglar) tutulmalıdır. Verinizin bulutta olması sizi yasal sorumluluktan kurtarmaz, aksine "Yurt dışı aktarımı" riski nedeniyle sorumluluğunuzu artırır.</p>
      
      <h3>Saklama Kriterleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Loglar en az 2 yıl saklanmalı.</li>
        <li>Erişim kayıtları "Zaman Damgası" ile mühürlenmeli.</li>
        <li>Loglar siber müdahaleye (Silinme/Değiştirme) karşı korunmalı.</li>
      </ul>

      <p><strong>ACKLOG Legal Cloud:</strong> ACKLOG, buluttaki verilerinizin erişim kayıtlarını yerel sunucularınıza çeker ve onları TÜBİTAK zaman damgasıyla imzalar. Böylece yabancı bulut sağlayıcısı logu silse dahi sizin elinizde Türkiye mahkemelerinde geçerli kanıt kalır. Manuel arşivlemeyle uğraşmayın, ACKLOG ile yasal güvencede kalın.</p>
    

<h3 class="text-xl font-bold mt-8 mb-4">Sıkça Sorulan Sorular</h3>
<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>
<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>`
  }
};
