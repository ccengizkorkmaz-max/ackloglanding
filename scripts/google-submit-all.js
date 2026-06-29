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

    console.log('Canlı sitemap.xml dosyası çekiliyor...');
    let allUrls = [];
    try {
        const response = await fetch('https://logsiem.com/sitemap.xml');
        const xml = await response.text();
        const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
        for (const match of matches) {
            allUrls.push(match[1]);
        }
        console.log(`Canlı sitemap'ten ${allUrls.length} adet URL başarıyla okundu.`);
    } catch (e) {
        console.error('Sitemap çekilemedi!', e);
        process.exit(1);
    }

    if (allUrls.length === 0) {
        console.error('Sitemap içerisinde URL bulunamadı.');
        process.exit(1);
    }

    // Google Indexing API limit is 200 per day.
    // Rotate index offset daily based on epoch day so running it once a day pushes different pages
    const BATCH_SIZE = 200;
    const totalBatches = Math.ceil(allUrls.length / BATCH_SIZE);
    const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const batchIndex = dayIndex % totalBatches;
    const offset = batchIndex * BATCH_SIZE;

    const urlsToSubmit = allUrls.slice(offset, offset + BATCH_SIZE);

    console.log(`Toplam URL Sayısı: ${allUrls.length}`);
    console.log(`Gönderilecek Grup: ${batchIndex + 1}/${totalBatches}`);
    console.log(`Bu gruptaki URL sayısı: ${urlsToSubmit.length}`);
    console.log(`Aralık: ${offset} - ${offset + urlsToSubmit.length}`);
    console.log('Dizin gönderme işlemi başlıyor (her nokta 1 başarılı gönderimi temsil eder)...');
    
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
    console.log(`✅ Başarılı Gönderilen: ${results.success}`);
    console.log(`❌ Hatalı Gönderilen: ${results.error}`);
    if (results.errors.length > 0) {
        console.log('\nHatalar:');
        results.errors.forEach(e => console.log(`  ${e.url}: ${e.error}`));
    }
}

submitBatch().catch(console.error);
