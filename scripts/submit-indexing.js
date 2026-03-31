const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const keyFilePath = path.join(__dirname, '../google-indexer-key.json');
if (!fs.existsSync(keyFilePath)) {
    console.error("HATA: google-indexer-key.json dosyası bulunamadı.");
    process.exit(1);
}

const coreUrls = [
    'https://logsiem.com',
    'https://logsiem.com/ozellikler',
    'https://logsiem.com/wiki',
    'https://logsiem.com/uyumluluk-testi',
    'https://logsiem.com/maliyet-hesaplayici',
    'https://logsiem.com/analiz',
    'https://logsiem.com/demo-talep',
    'https://logsiem.com/sizinti-kontrol',
    'https://logsiem.com/zafiyet-tarama',
    'https://logsiem.com/cozumler/denetim-ve-inceleme',
    'https://logsiem.com/cozumler/fidye-yazilimi-onleme',
    'https://logsiem.com/cozumler/log-maliyet-optimizasyonu',
    'https://logsiem.com/cozumler/tehdit-algilama'
];

const topWikiSlugs = [
    'siem-nedir',
    '5651-log-yonetimi-rehberi',
    'soc-kurulum-rehberi-maliyetler',
    'kvkk-siem-log-yonetimi-rehberi',
    'siem-vs-log-yonetimi',
    'qradar-alternatifi',
    'log-parsing-nedir',
    'siem-performans-analizi',
    'siber-terimler-sozlugu',
    'threat-hunting-nedir'
];

let urlsToSubmit = [...coreUrls, ...topWikiSlugs.map(slug => `https://logsiem.com/wiki/${slug}`)];

const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function submitUrls() {
    let authClient = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    let successCount = 0;
    for (const url of urlsToSubmit) {
        try {
            await indexing.urlNotifications.publish({ requestBody: { url, type: 'URL_UPDATED' } });
            console.log(`[BAŞARILI] ${url}`);
            successCount++;
        } catch (error) {
            console.error(`[HATA] ${url} ->`, error.response?.data?.error?.message || error.message);
        }
        await new Promise(r => setTimeout(r, 500));
    }
    console.log(`\nİşlem Tamamlandı: ${successCount}/${urlsToSubmit.length} URL LOGSIEM için Google Sırasına Eklendi!`);
}
submitUrls();
