/**
 * SIEMSOC (logsiem.com) - Google Indexing API Gönderici
 * ======================================================
 * Bu script sitemap'ten tüm URL'leri okuyarak Google Indexing API'ye gönderir.
 * "Discovered - currently not indexed" sorununu çözmek için kullanılır.
 * 
 * Kullanım: node scripts/submit-indexing.js
 * 
 * Gereksinimler:
 * - google-indexer-key.json (proje kök dizininde)
 * - googleapis npm paketi
 * - Google Search Console'da service account'a sahip olarak yetki verilmiş olmalı
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// ==================== 1. KEY DOSYASI KONTROLÜ ====================
const keyFilePath = path.join(__dirname, '../google-indexer-key.json');
if (!fs.existsSync(keyFilePath)) {
    console.error("❌ HATA: google-indexer-key.json dosyası bulunamadı.");
    console.error("Lütfen Google Cloud'dan aldığınız hizmet hesabı (Service Account) JSON dosyasını ana dizine 'google-indexer-key.json' adıyla ekleyin.");
    process.exit(1);
}

// ==================== 2. URL HAVUZUNU OLUŞTUR ====================
const BASE_URL = 'https://logsiem.com';

// --- A) Ana Sayfalar & İnteraktif Araçlar (En yüksek öncelik) ---
const coreUrls = [
    BASE_URL,
    `${BASE_URL}/ozellikler`,
    `${BASE_URL}/wiki`,
    `${BASE_URL}/cozumler`,
    `${BASE_URL}/uyumluluk-testi`,
    `${BASE_URL}/maliyet-hesaplayici`,
    `${BASE_URL}/analiz`,
    `${BASE_URL}/demo-talep`,
    `${BASE_URL}/sizinti-kontrol`,
    `${BASE_URL}/zafiyet-tarama`,
    `${BASE_URL}/araclar`,
    `${BASE_URL}/araclar/siem-roi-hesaplayici`,
    `${BASE_URL}/araclar/eps-hesaplayici`,
    `${BASE_URL}/araclar/soc-maliyeti-hesaplayici`,
    `${BASE_URL}/araclar/mttd-mttr-hesaplayici`,
    `${BASE_URL}/araclar/log-retention-hesaplayici`,
    `${BASE_URL}/araclar/kvkk-checklist`,
    `${BASE_URL}/araclar/5651-checklist`,
];

// --- B) Çözüm Sayfaları ---
const solutionUrls = [
    `${BASE_URL}/cozumler/denetim-ve-inceleme`,
    `${BASE_URL}/cozumler/fidye-yazilimi-onleme`,
    `${BASE_URL}/cozumler/ic-tehdit-izleme`,
    `${BASE_URL}/cozumler/kaba-kuvvet-saldirilari`,
    `${BASE_URL}/cozumler/log-maliyet-optimizasyonu`,
    `${BASE_URL}/cozumler/tehdit-algilama`,
];

// --- C) Wiki Makaleleri (Tüm data dosyalarından otomatik çek) ---
function getAllWikiSlugs() {
    const slugs = new Set();
    const wikiDataDir = path.join(__dirname, '../src/data/wiki');
    
    if (!fs.existsSync(wikiDataDir)) {
        console.warn("⚠️ Wiki data dizini bulunamadı:", wikiDataDir);
        return [];
    }

    const files = fs.readdirSync(wikiDataDir).filter(f => f.endsWith('.ts'));
    
    for (const file of files) {
        const content = fs.readFileSync(path.join(wikiDataDir, file), 'utf8');
        const slugRegex = /["']([a-z0-9][a-z0-9-]+[a-z0-9])["']\s*:\s*\{/g;
        let match;
        while ((match = slugRegex.exec(content)) !== null) {
            const slug = match[1];
            if (slug.length > 3 && !['type', 'name', 'title', 'content', 'description', 'author', 'initials'].includes(slug)) {
                slugs.add(slug);
            }
        }
    }
    
    return Array.from(slugs);
}

const wikiSlugs = getAllWikiSlugs();
const wikiUrls = wikiSlugs.map(slug => `${BASE_URL}/wiki/${slug}`);

// --- D) Kanıt / Belge Sayfaları ---
function getSlugsBySection(filePath, sectionName) {
    if (!fs.existsSync(filePath)) {
        console.warn("⚠️ Dosya bulunamadı:", filePath);
        return [];
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const sectionIndex = fileContent.indexOf(sectionName);
    if (sectionIndex === -1) return [];
    
    let nextExportIndex = fileContent.indexOf('export const', sectionIndex + 20);
    if (nextExportIndex === -1) nextExportIndex = fileContent.length;
    
    const sectionContent = fileContent.substring(sectionIndex, nextExportIndex);
    const slugs = [];
    const slugRegex = /["']([a-z0-9][a-z0-9-]+[a-z0-9])["']\s*:\s*\{/g;
    let match;
    while ((match = slugRegex.exec(sectionContent)) !== null) {
        const slug = match[1];
        if (slug.length > 3 && !['type', 'name', 'title', 'content', 'description', 'badge', 'heroTitle', 'heroSubtitle', 'features', 'specs', 'faqs'].includes(slug)) {
            slugs.push(slug);
        }
    }
    return slugs;
}

const kanitFilePath = path.join(__dirname, '../src/data/kanit-content.ts');
const kanitUrls = getSlugsBySection(kanitFilePath, 'kanitArticles').map(slug => `${BASE_URL}/kanit/${slug}`);

// --- E) Programmatic SEO Sayfaları ---
const pSeoFilePath = path.join(__dirname, '../src/data/programmatic-seo.ts');
const sectorUrls = getSlugsBySection(pSeoFilePath, 'programmaticSectors').map(slug => `${BASE_URL}/sektor/${slug}`);
const regulationUrls = getSlugsBySection(pSeoFilePath, 'programmaticRegulations').map(slug => `${BASE_URL}/regulasyon/${slug}`);
const comparisonUrls = getSlugsBySection(pSeoFilePath, 'programmaticComparisons').map(slug => `${BASE_URL}/karsilastirma/${slug}`);
const integrationUrls = getSlugsBySection(pSeoFilePath, 'programmaticIntegrations').map(slug => `${BASE_URL}/entegrasyon/${slug}`);

const programmaticUrls = [
    ...sectorUrls,
    ...regulationUrls,
    ...comparisonUrls,
    ...integrationUrls
];

// Tüm URL'leri birleştir
const allUrls = [...coreUrls, ...solutionUrls, ...wikiUrls, ...kanitUrls, ...programmaticUrls];

console.log(`\n📊 URL İstatistikleri:`);
console.log(`   Ana Sayfalar & Araçlar:  ${coreUrls.length}`);
console.log(`   Çözüm Sayfaları:         ${solutionUrls.length}`);
console.log(`   Wiki Makaleleri:         ${wikiUrls.length}`);
console.log(`   Kanıt / Claim Belgeleri: ${kanitUrls.length}`);
console.log(`   Programmatic SEO:        ${programmaticUrls.length}`);
console.log(`   ─────────────────────────`);
console.log(`   TOPLAM:                  ${allUrls.length}\n`);

// ==================== 3. GOOGLE INDEXING API ====================
// Google Indexing API günlük 200 URL sınırına sahiptir
// Eğer 200'den fazla URL varsa batch halinde gönder
const DAILY_LIMIT = 200;
const BATCH_DELAY_MS = 500; // İstekler arası bekleme (Rate Limit koruması)

const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function submitBatch(urls, batchNumber, totalBatches) {
    let authClient;
    try {
        authClient = await auth.getClient();
    } catch (e) {
        console.error("🔐 Yetkilendirme Hatası:", e.message);
        process.exit(1);
    }

    const indexing = google.indexing({
        version: 'v3',
        auth: authClient,
    });

    let successCount = 0;
    let errorCount = 0;
    const errors = [];

    console.log(`\n🚀 Batch ${batchNumber}/${totalBatches} - ${urls.length} URL gönderiliyor...\n`);

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        try {
            await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });
            console.log(`  ✅ [${i + 1}/${urls.length}] ${url}`);
            successCount++;
        } catch (error) {
            const errMsg = error.response?.data?.error?.message || error.message;
            console.error(`  ❌ [${i + 1}/${urls.length}] ${url} → ${errMsg}`);
            errorCount++;
            errors.push({ url, error: errMsg });
        }

        // Rate limit koruması
        if (i < urls.length - 1) {
            await new Promise(resolve => setTimeout(resolve, BATCH_DELAY_MS));
        }
    }

    return { successCount, errorCount, errors };
}

async function main() {
    console.log('═══════════════════════════════════════════════════');
    console.log('  SIEMSOC (logsiem.com) Google Indexing API');
    console.log('  "Discovered - currently not indexed" Çözümü');
    console.log('═══════════════════════════════════════════════════');

    // Günlük limit kontrolü
    const urlsToProcess = allUrls.slice(0, DAILY_LIMIT);
    if (allUrls.length > DAILY_LIMIT) {
        console.log(`⚠️  Toplam ${allUrls.length} URL var ama günlük limit ${DAILY_LIMIT}. İlk ${DAILY_LIMIT} URL gönderilecek.`);
        console.log(`   Kalan ${allUrls.length - DAILY_LIMIT} URL yarın gönderilmeli.\n`);
    }

    // Batch'lere böl (her batch max 50 URL)
    const BATCH_SIZE = 50;
    const batches = [];
    for (let i = 0; i < urlsToProcess.length; i += BATCH_SIZE) {
        batches.push(urlsToProcess.slice(i, i + BATCH_SIZE));
    }

    let totalSuccess = 0;
    let totalError = 0;
    const allErrors = [];

    for (let b = 0; b < batches.length; b++) {
        const result = await submitBatch(batches[b], b + 1, batches.length);
        totalSuccess += result.successCount;
        totalError += result.errorCount;
        allErrors.push(...result.errors);

        // Batch'ler arası biraz daha fazla bekle
        if (b < batches.length - 1) {
            console.log(`\n⏳ Sonraki batch için 2 saniye bekleniyor...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    // Sonuç raporu
    console.log(`\n═══════════════════════════════════════════════════`);
    console.log(`  📋 SONUÇ RAPORU`);
    console.log(`═══════════════════════════════════════════════════`);
    console.log(`  ✅ Başarılı: ${totalSuccess}/${urlsToProcess.length}`);
    console.log(`  ❌ Hatalı:   ${totalError}/${urlsToProcess.length}`);
    
    if (allErrors.length > 0) {
        console.log(`\n  🔴 Hatalı URL'ler:`);
        allErrors.forEach(e => console.log(`     - ${e.url}: ${e.error}`));
    }

    if (allUrls.length > DAILY_LIMIT) {
        console.log(`\n  📅 YARIN GÖNDERİLECEK URL'ler: ${allUrls.length - DAILY_LIMIT} adet`);
        console.log(`     İpucu: "node scripts/submit-indexing.js --offset=${DAILY_LIMIT}" ile devam edebilirsiniz.`);
    }

    console.log(`\n  💡 İPUCU: Bu scripti her gün çalıştırmak için bir cron/task scheduler kurun.`);
    console.log(`     Windows: schtasks /create /tn "SIEMSOC-Indexing" /tr "node C:\\SIEMSOC\\scripts\\submit-indexing.js" /sc daily /st 09:00`);
    console.log(`═══════════════════════════════════════════════════\n`);
}

// Offset parametresi desteği (büyük sitelerde devam etmek için)
const offsetArg = process.argv.find(a => a.startsWith('--offset='));
if (offsetArg) {
    const offset = parseInt(offsetArg.split('=')[1], 10);
    if (!isNaN(offset)) {
        const remaining = allUrls.splice(0, offset);
        console.log(`📌 Offset: ${offset} - İlk ${offset} URL atlanıyor, kalan ${allUrls.length} URL gönderilecek.`);
    }
}

main().catch(console.error);
