const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

async function submitCompetitorPages() {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(__dirname, '..', 'google-indexer-key.json'),
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const indexing = google.indexing({ version: 'v3', auth });

    const newUrls = [
        // Karşılaştırma (12)
        'https://logsiem.com/karsilastirma/logsign-siem-vs-acklog',
        'https://logsiem.com/karsilastirma/cryptosim-vs-acklog',
        'https://logsiem.com/karsilastirma/fortilogger-vs-acklog',
        'https://logsiem.com/karsilastirma/infraskope-vs-acklog',
        'https://logsiem.com/karsilastirma/logalarm-vs-acklog',
        'https://logsiem.com/karsilastirma/scopsoc-vs-acklog',
        'https://logsiem.com/karsilastirma/coslat-vs-acklog',
        'https://logsiem.com/karsilastirma/cryptolog-vs-acklog',
        'https://logsiem.com/karsilastirma/labris-log-vs-acklog',
        'https://logsiem.com/karsilastirma/sonlogger-vs-acklog',
        'https://logsiem.com/karsilastirma/soplog-vs-acklog',
        'https://logsiem.com/karsilastirma/logsign-soar-vs-acklog',
        // Alternatif (8)
        'https://logsiem.com/alternatif/logsign-alternatifi',
        'https://logsiem.com/alternatif/fortilogger-alternatifi',
        'https://logsiem.com/alternatif/cryptosim-alternatifi',
        'https://logsiem.com/alternatif/infraskope-alternatifi',
        'https://logsiem.com/alternatif/logalarm-alternatifi',
        'https://logsiem.com/alternatif/sonlogger-alternatifi',
        'https://logsiem.com/alternatif/soplog-alternatifi',
        'https://logsiem.com/alternatif/labris-log-alternatifi',
        // Geçiş Rehberi (5)
        'https://logsiem.com/gecis-rehberi/logsigndan-acklog-gecis',
        'https://logsiem.com/gecis-rehberi/fortiloggerdan-acklog-gecis',
        'https://logsiem.com/gecis-rehberi/cryptosimden-acklog-gecis',
        'https://logsiem.com/gecis-rehberi/infraskopeden-acklog-gecis',
        'https://logsiem.com/gecis-rehberi/yabanci-siemden-acklog-gecis',
    ];

    console.log(`Google Indexing API - ${newUrls.length} rakip pSEO URL submit ediliyor...`);
    const results = { success: 0, error: 0, errors: [] };

    for (const url of newUrls) {
        try {
            await indexing.urlNotifications.publish({ requestBody: { url, type: 'URL_UPDATED' } });
            results.success++;
            process.stdout.write('.');
        } catch (err) {
            results.error++;
            results.errors.push({ url, error: err.message });
            process.stdout.write('x');
        }
    }

    console.log(`\n\n✅ Başarılı: ${results.success}\n❌ Hatalı: ${results.error}`);
    if (results.errors.length) results.errors.forEach(e => console.log(`  ${e.url}: ${e.error}`));
}

submitCompetitorPages().catch(console.error);
