export const templatesChecklistsArticles = {
  "siem-sartnamesi-ornegi-indir": {
    title: "Ücretsiz SIEM Teknik Şartnamesi Örneği ve Hazırlama Rehberi",
    description: "Kurumunuz için SIEM alımı yaparken kullanabileceğiniz güncel ve kapsamlı teknik şartname taslağı.",
    content: `
      <h2>Satın Alma Rehberi: SIEM Şartnamesi Nasıl Yazılır?</h2>
      <p>Bir SIEM sistemi alırken doğru şartname yazmak, projenin başarısının %50'sidir. Yanlış maddeler sizi işlevsiz ve pahalı ürünlere mecbur bırakabilir.</p>
      
      <h3>Şartnamede Mutlaka Olması Gereken Maddeler</h3>
      <ul class="list-disc pl-6 space-y-4 mb-6">
        <li><strong>Mimari:</strong> "Hiyerarşik ve dağıtık log toplama yapısını desteklemelidir."</li>
        <li><strong>Performans:</strong> "Saniyede en az X bin (EPS) veriyi kayıpsız işleyebilmelidir."</li>
        <li><strong>Yasal Uyum:</strong> "5651 Sayılı kanun gereği logları TÜBİTAK zaman damgasıyla mühürlemelidir."</li>
        <li><strong>Yapay Zeka:</strong> "Kullanıcı davranış analizi (UEBA) yeteneğine sahip olmalıdır."</li>
      </ul>

      <p><strong>ACKLOG Şablon Desteği:</strong> ACKLOG olarak, yüzlerce kurumun ihtiyaçlarını baz alarak hazırladığımız 'Modern SIEM Şartnamesi Taslağı'nı ücretsiz indirebilirsiniz. Manuel şartname yazma zahmetinden kurtulun, ACKLOG uzmanlığından yararlanın.</p>
    `
  },
  "kvkk-teknik-tedbirler-kontrol-listesi": {
    title: "KVKK Teknik Tedbirler Kontrol Listesi (Checklist) 2026",
    description: "Kişisel Verileri Koruma Kurulu'nun yayınladığı teknik kriterlere tam uyum için denetim listesi.",
    content: `
      <h2>Denetime Hazır Olun: KVKK Teknik Checklist</h2>
      <p>KVKK sadece hukuksal bir süreç değil, ciddi teknik yükümlülükler barındıran bir koruma kalkanıdır. Denetçiler geldiğinde aşağıdaki maddelerin "Evet" olarak işaretlenmiş olması gerekir.</p>
      
      <h3>Kritik Denetim Maddeleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>[ ] Yetki Matrisi ve Erişim Logları (SIEM ile takibi yapılıyor mu?)</li>
        <li>[ ] Veri Sızıntısı Önleme (DLP yazılımı var mı?)</li>
        <li>[ ] Güncel Antivirüs ve Firewall sistemleri devrede mi?</li>
        <li>[ ] Log kayıtları değiştirilemez şekilde saklanıyor mu?</li>
      </ul>

      <p><strong>ACKLOG KVKK Companion:</strong> ACKLOG, bu checklist'in %70'ini (logging, monitoring, access control) tek başına karşılar. Manuel denetim korkusunu bırakın, ACKLOG ile maddeleri birer birer 'Tamamlandı' işaretleyin.</p>
    `
  },
  "bilgi-islem-log-tutma-proseduru-taslagi": {
    title: "Bilgi İşlem Log Tutma Prosedürü Taslağı ve Uygulama Rehberi",
    description: "Şirket içi bilgi güvenliği politikalarınız için profesyonel log yönetimi prosedür dökümanı.",
    content: `
      <h2>Kurumsal Hafıza: Log Tutma Prosedürü</h2>
      <p>Hangi cihazın logu, ne kadar süreyle, kimin sorumluluğunda tutulacak? Bu soruların cevabı yazılı bir 'Prosedür' dökümanında olmalıdır.</p>
      
      <h3>İçerik Başlıkları</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
        <li>Amacı ve Kapsamı: (Tüm BT varlıkları).</li>
        <li>Log Kategorileri: (Kritik, Bilgi, Hata).</li>
        <li>Saklama ve İmha Politikası.</li>
        <li>Olay Müdahale ve Raporlama Silsilesi.</li>
      </ul>

      <p><strong>ACKLOG Governance:</strong> Yazılı prosedürlerinizi uygulama ile desteklemek için ACKLOG'un hazır raporlama şablonlarını kullanın. Manuel takip bitti, kurumsal politikanızı ACKLOG ile dijitalleştirin.</p>
    `
  },
  "log-yonetimi-hizmet-alimi-teknik-sartnamesi": {
    title: "Log Yönetimi Hizmet Alımı Teknik Şartnamesi Hazırlama",
    description: "Dışarıdan (Outsource/MSSP) log yönetimi hizmeti alırken dikkat edilmesi gereken kriterler.",
    content: `
      <h2>Sorumluluğu Paylaşmak: MSSP Şartnamesi</h2>
      <p>Eğer loglarınızı kendiniz değil, bir hizmet sağlayıcıya emanet edecekseniz, 'Hizmet Seviyesi Taahhüdü' (SLA) maddeleri hayatidir.</p>
      
      <h3>Önemli Maddeler</h3>
      <p>Hizmet sağlayıcı loglara ne kadar sürede bakar? (MTTD). Müdahale süresi nedir? (MTTR). Veriler nerede depolanacak? (Yasal zorunluluk gereği Türkiye içi).</p>

      <p><strong>ACKLOG Powering MSSPs:</strong> Türkiye'nin önde gelen hizmet sağlayıcıları altyapılarında ACKLOG kullanıyor. Hizmet alırken altyapıda ACKLOG olup olmadığını sorun. Manuel kontrolleri uzmanına, aracı ACKLOG’a bırakın.</p>
    `
  },
  "adli-bilisim-imaj-alma-tutanagi-ornegi": {
    title: "Adli Bilişim İmaj Alma Tutanağı Örneği ve Teknik Detaylar",
    description: "Siber olay sonrası kanıt toplarken hukuki olarak geçerli olan imaj alma tutanağı taslağı.",
    content: `
      <h2>Delil Karartma Riskine Karşı: İmaj Alma</h2>
      <p>Siber saldırı sonrası bir bilgisayarın kopyası (İmajı) alınırken, bu işlemin her adımının tutanak altına alınması mahkeme için zorunludur.</p>
      
      <h3>Tutanak İçeriği</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Cihazın Seri Numarası ve Fiziksel Durumu.</li>
        <li>İşlemi Yapan Uzmanın Bilgileri.</li>
        <li>Verinin Hash Değeri (Md5/Sha256) - Bu en kritiğidir.</li>
      </ul>

      <p><strong>ACKLOG Evidence Guard:</strong> ACKLOG, olay anındaki tüm logları otomatik 'Mühürleyerek' adli bilişim sürecini kısaltır. Manuel imaj alma süreçleriyle siber kanıtları kaybetmeyin, ACKLOG ile dijital mühür kullanın.</p>
    `
  },
  "iso-27001-loglama-maddeleri-check-list-rehberi": {
    title: "ISO 27001 Loglama Maddeleri Check-list ve Uyum Rehberi",
    description: "ISO 27001:2022 standartlarına göre zorunlu log izleme ve kayıt tutma maddeleri.",
    content: `
      <h2>Global Standart: ISO 27001 ve Loglama</h2>
      <p>ISO 27001 sertifikası almak veya korumak istiyorsanız, güvenlik olaylarının (Security Events) izlendiğini ve loglandığını ispatlamanız gerekir.</p>
      
      <h3>A.8.15 Maddesi (Kayıt Tutma)</h3>
      <p>"Olay kayıtları oluşturulmalı, saklanmalı ve yetkisiz erişime karşı korunmalıdır." Bu madde direkt olarak SIEM kullanımını işaret eder.</p>

      <p><strong>ACKLOG Compliance Engine:</strong> ISO 27001 denetimleri için gerekli olan 'Aylık Güvenlik İnceleme Raporlarını' ACKLOG'dan tek tıkla alın. Manuel rapor hazırlama stresinden kurtulun, ACKLOG ile global standartları yakalayın.</p>
    `
  },
  "siber-olay-mudahale-plani-irp-taslagi": {
    title: "Siber Olay Müdahale Planı (IRP) Taslağı ve Uygulama Adımları",
    description: "Kurumunuzda bir siber saldırı olduğunda 'Kim, neyi, nasıl yapacak?' planının hazır dökümanı.",
    content: `
      <h2>Yangın Tatbikatı Gibi: IRP Planı</h2>
      <p>Saldırı anındaki kaos, yanlış kararlara yol açar. Hazır bir Incident Response Plan (IRP), saniyelerin önemli olduğu anlarda yol gösterir.</p>
      
      <h3>Planın Aşamaları</h3>
      <ul class="list-decimal pl-6 space-y-2 mb-6">
        <li>Hazırlık (Detection)</li>
        <li>Tanımlama (Identification)</li>
        <li>Karantina (Containment)</li>
        <li>Temizleme (Eradication)</li>
        <li>Kurtarma (Recovery)</li>
      </ul>

      <p><strong>ACKLOG Playbook Integration:</strong> ACKLOG, IRP planınızı 'Playbook'lar üzerinden otomatiğe bağlar. Manuel müdahale yavaş kalır, ACKLOG ile siber saldırıyı saniyeler içinde karantinaya alın.</p>
    `
  },
  "bt-envanter-listesi-tablosu-indir-excel": {
    title: "BT Envanter Listesi Tablosu ve Varlık Yönetimi Şablonu",
    description: "Siber güvenliğin temeli olan envanter yönetimi için Excel şablonu ve otomatik takip yöntemleri.",
    content: `
      <h2>Bilmediğinizi Koruyamazsınız: Envanter Listesi</h2>
      <p>Hangi IP'de hangi cihaz var? İşletim sistemi ne? Bu listenin güncel olmaması siber güvenlikte 'Kör Noktadır'.</p>
      
      <h3>Şablonda Olması Gereken Kolonlar</h3>
      <p>Cihaz Adı, IP Adresi, MAC Adresi, Kritiklik Seviyesi, Sorumlu Personel.</p>

      <p><strong>ACKLOG Auto-Discovery:</strong> Manuel Excel listeleriyle uğraşmayın. ACKLOG, ağınıza dahil olan her yeni cihazı otomatik keşfeder ve envanter listenizi her an güncel tutar. Manuel takip bitti, ACKLOG ile ağınızın tam röntgenini çekin.</p>
    `
  },
  "sifre-politikası-ve-guvenlik-proseduru-ornegi": {
    title: "Şifre Politikası ve Güvenlik Prosedürü Örneği: Kurumsal Standartlar",
    description: "Hangi şifreler güvenli? Kurumsal şifre politikası taslağı ve teknik zorunluluklar.",
    content: `
      <h2>En Zayıf Halka: Şifre Güvenliği</h2>
      <p>Şirket çalışanlarının '123456' gibi şifreler kullanmasını engellemek için yazılı bir politika ve teknik kontrol şarttır.</p>
      
      <h3>Politika Maddeleri</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>En az 12 karakter zorunluluğu.</li>
        <li>MFA (İki Faktörlü Doğrulama) şartı.</li>
        <li>90 günde bir şifre değişim periyodu.</li>
      </ul>

      <p><strong>ACKLOG Password Audit:</strong> ACKLOG, Active Directory üzerinden 'Zayıf Şifreli' veya 'Süresi Dolmuş' hesapları raporlar. Manuel şifre kontrolü yapmayın, ACKLOG ile personelin dijital hijyenini her an denetleyin.</p>
    `
  },
  "veri-siniflandirma-ve-etiketleme-proseduru": {
    title: "Veri Sınıflandırma ve Etiketleme Prosedürü: KVKK Uyumu",
    description: "Gizli, Kurumsal ve Halka Açık verilerin nasıl ayrılacağını belirleyen kurumsal rehber.",
    content: `
      <h2>Veriyi Anlamlandırmak: Sınıflandırma</h2>
      <p>Her veri aynı değerde değildir. Personel maaş listesi ile yemek menüsü farklı seviyelerde korunmalıdır. Sınıflandırma, güvenlik bütçesini doğru harcamanızı sağlar.</p>
      
      <h3>Sınıflandırma Seviyeleri</h3>
      <p>1. Çok Gizli (Sadece Yönetici), 2. Gizli (Sadece İlgili Birim), 3. Dahili (Tüm Personel), 4. Genel (Dış Dünya).</p>

      <p><strong>ACKLOG Data-Aware:</strong> ACKLOG, 'Çok Gizli' olarak etiketlenen klasörlere yapılan her türlü erişimi yüksek öncelikli alarm (Critical) olarak raporlar. Manuel veri takibi zordur, ACKLOG ile verinizin değerini koruyun.</p>
    `
  }
};
