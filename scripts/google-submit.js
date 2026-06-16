const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

async function submitBatch() {
    const keyFilePath = path.join(__dirname, '..', 'google-indexer-key.json');
    
    if (!fs.existsSync(keyFilePath)) {
        console.error('google-indexer-key.json bulunamadı!');
        process.exit(1);
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({ version: 'v3', auth });

    // Tüm sitemap URL'lerini topla
    const allUrls = [];
    
    // 1. Ana sayfalar
    const mainPages = [
        '', '/ozellikler', '/wiki', '/cozumler', '/demo-talep', '/araclar',
        '/uyumluluk-testi', '/maliyet-hesaplayici', '/analiz', '/sizinti-kontrol', '/zafiyet-tarama',
        '/araclar/siem-roi-hesaplayici', '/araclar/eps-hesaplayici', '/araclar/soc-maliyeti-hesaplayici',
        '/araclar/mttd-mttr-hesaplayici', '/araclar/log-retention-hesaplayici',
        '/araclar/kvkk-checklist', '/araclar/5651-checklist',
        '/cozumler/denetim-ve-inceleme', '/cozumler/fidye-yazilimi-onleme',
        '/cozumler/ic-tehdit-izleme', '/cozumler/kaba-kuvvet-saldirilari',
        '/cozumler/log-maliyet-optimizasyonu', '/cozumler/tehdit-algilama',
    ];
    mainPages.forEach(p => allUrls.push(`https://logsiem.com${p}`));

    // 2. Programmatic SEO sayfaları (slug'lar hardcoded)
    const sektorSlugs = ['bankalar-icin-siem','hastaneler-icin-siem','universiteler-icin-siem','belediyeler-icin-siem','e-ticaret-icin-siem','enerji-firmalari-icin-siem','uretim-tesisleri-icin-siem','telekom-operatorleri-icin-siem'];
    const regSlugs = ['5651-uyumlu-log-yonetimi','5651-log-saklama-sureleri','kvkk-teknik-tedbirler-siem','iso-27001-log-yonetimi','iso-27001-siem-gereksinimleri','pci-dss-log-yonetimi','bddk-siber-guvenlik-gereksinimleri','swift-csp-ve-siem','nis2-uyum-rehberi','dora-uyum-rehberi'];
    const compSlugs = ['splunk-vs-acklog','qradar-vs-acklog','sentinel-vs-acklog','elastic-siem-vs-acklog','logsign-vs-acklog','wazuh-vs-acklog','graylog-vs-acklog','alienvault-vs-acklog'];
    const intSlugs = ['fortinet-log-yonetimi','palo-alto-siem-entegrasyonu','sophos-log-analizi','microsoft-365-admin-loglari','aws-cloudtrail-siem','azure-log-yonetimi','windows-server-event-log-siem','linux-syslog-siem'];
    const kanitSlugs = ['performans-testleri','benchmark-raporu','sikistirma-teknolojisi','log-toplama-performansi','korelasyon-motoru-testi','eps-stres-testi'];
    
    sektorSlugs.forEach(s => allUrls.push(`https://logsiem.com/sektor/${s}`));
    regSlugs.forEach(s => allUrls.push(`https://logsiem.com/regulasyon/${s}`));
    compSlugs.forEach(s => allUrls.push(`https://logsiem.com/karsilastirma/${s}`));
    intSlugs.forEach(s => allUrls.push(`https://logsiem.com/entegrasyon/${s}`));
    kanitSlugs.forEach(s => allUrls.push(`https://logsiem.com/kanit/${s}`));

    // 3. Yeni pSEO sayfaları
    const eventIds = ['4624-basarili-oturum-acma','4625-basarisiz-oturum-acma','4672-admin-yetkisi-atama','4720-kullanici-hesabi-olusturma','4740-hesap-kilitleme','1102-audit-log-temizleme','4688-yeni-islem-olusturma','7045-yeni-servis-kurulumu','4698-zamanlanmis-gorev-olusturma','4663-dosya-erisim-girisimi','4728-guvenlik-grubuna-uye-ekleme','4776-ntlm-dogrulama'];
    const useCases = ['brute-force-saldirisi-tespiti','ransomware-erken-uyari','veri-sizintisi-dlp-izleme','yetkisiz-erisim-tespiti','lateral-movement-tespiti','privilege-escalation-izleme','phishing-maili-tespiti','dns-tunelleme-tespiti','hesap-ele-gecirme-tespiti'];
    const logSources = ['fortinet-fortigate-log','palo-alto-firewall-log','cisco-asa-log','windows-event-log','linux-syslog','microsoft-365-audit-log','aws-cloudtrail','mssql-audit-log','checkpoint-firewall-log','crowdstrike-edr-log'];
    const attacks = ['brute-force-saldirisi','ransomware-saldirisi','phishing-saldirisi','pass-the-hash','sql-injection-saldirisi','ddos-saldirisi','insider-threat'];
    const roles = ['bilgi-guvenligi-yoneticisi-ciso','soc-analisti','it-muduru','uyum-sorumlusu-compliance','ag-yoneticisi','sistem-yoneticisi','ic-denetci'];
    const checklists = ['kvkk-teknik-tedbirler-checklist','5651-log-tutma-checklist','iso-27001-annex-a-checklist','bddk-bilgi-sistemleri-checklist','pci-dss-log-gereksinimleri-checklist'];

    eventIds.forEach(s => allUrls.push(`https://logsiem.com/event-id/${s}`));
    useCases.forEach(s => allUrls.push(`https://logsiem.com/kullanim/${s}`));
    logSources.forEach(s => allUrls.push(`https://logsiem.com/log-kaynagi/${s}`));
    attacks.forEach(s => allUrls.push(`https://logsiem.com/saldiri/${s}`));
    roles.forEach(s => allUrls.push(`https://logsiem.com/kimler-icin/${s}`));
    checklists.forEach(s => allUrls.push(`https://logsiem.com/checklist/${s}`));

    // İlk 200'ü al (günlük limit)
    const BATCH_SIZE = 200;
    const urlsToSubmit = allUrls.slice(0, BATCH_SIZE);

    console.log(`Toplam URL: ${allUrls.length}`);
    console.log(`Bu batch: ${urlsToSubmit.length} (ilk ${BATCH_SIZE})`);
    console.log(`Kalan: ${Math.max(0, allUrls.length - BATCH_SIZE)} (cron ile gönderilecek)\n`);
    console.log('Submit başlıyor...');
    
    const results = { success: 0, error: 0, errors: [] };
    const concurrency = 15;

    for (let i = 0; i < urlsToSubmit.length; i += concurrency) {
        const chunk = urlsToSubmit.slice(i, i + concurrency);
        await Promise.all(chunk.map(async (url) => {
            try {
                await indexing.urlNotifications.publish({
                    requestBody: { url, type: 'URL_UPDATED' },
                });
                results.success++;
                process.stdout.write('.');
            } catch (err) {
                results.error++;
                results.errors.push({ url, error: err.message || String(err) });
                process.stdout.write('x');
            }
        }));
    }

    console.log('\n');
    console.log(`✅ Başarılı: ${results.success}`);
    console.log(`❌ Hatalı: ${results.error}`);
    if (results.errors.length > 0) {
        console.log('\nİlk 5 hata:');
        results.errors.slice(0, 5).forEach(e => console.log(`  ${e.url}: ${e.error}`));
    }
}

submitBatch().catch(console.error);
