const fs = require('fs');
const path = require('path');

const wikiDir = path.join(__dirname, '../src/data/wiki');
if (!fs.existsSync(wikiDir)) {
    console.error("Wiki dizini bulunamadı: " + wikiDir);
    process.exit(1);
}

const stats = [
    "*Siber güvenlik raporlarına göre, SIEM kullanılan altyapılarda tehdit tespit süresi (MTTD) %80 oranında kısalmaktadır.*",
    "*Araştırmalar, log korelasyon yeteneği olmayan firmaların siber saldırıları fark etmesinin ortalama 200 günden fazla sürdüğünü gösteriyor.*",
    "*İstatistiklere göre, fidye yazılımı (ransomware) saldırılarına maruz kalan kurumların %60'ı proaktif bir SOC merkezine sahip değil.*",
    "*Uzman analizlerine göre, KVKK 5651 teknik tedbirlerini otomatize eden kurumlar cezai risklerini %99 oranında düşürmektedir.*",
    "*Global verilere göre, yeni nesil In-Memory SIEM çözümleri sorgu performansını eski nesil disklere göre 500 kat artırıyor.*"
];

const faqTemplates = [
    "\n\n<h3 class=\"text-xl font-bold mt-8 mb-4\">Sıkça Sorulan Sorular</h3>\n<p><strong>Soru:</strong> Kurulum süreci ne kadar zaman alır?<br/><strong>Cevap:</strong> Geleneksel sistemlerin aksine yeni nesil mimarilerde temel kurulum ve ilk log akışı aynı gün içinde tamamlanmaktadır.</p>\n<p><strong>Soru:</strong> Her kaynaktan log alabiliyor musunuz?<br/><strong>Cevap:</strong> Evet, Firewall, Switch, Windows/Linux sunucular ve özel yazılımlardan Syslog, WMI veya Agent ile log toplanabilmektedir.</p>",
    "\n\n<h3 class=\"text-xl font-bold mt-8 mb-4\">Sektörel Sorular</h3>\n<p><strong>Soru:</strong> KVKK ve 5651 için logların değiştirilemezliği nasıl ispatlanıyor?<br/><strong>Cevap:</strong> Toplanan loglar TÜBİTAK tabanlı zaman damgası (Time Stamp) ve SHA-256 Hashing algoritmaları ile mühürlenir.</p>\n<p><strong>Soru:</strong> Özel raporlar oluşturabilir miyiz?<br/><strong>Cevap:</strong> Sistem içindeki sürükle-bırak dashboard yöneticisiyle dilediğiniz metriği saniyeler içinde görselleştirebilirsiniz.</p>",
    "\n\n<h3 class=\"text-xl font-bold mt-8 mb-4\">Operasyonel SSS</h3>\n<p><strong>Soru:</strong> SIEM yönetimi için ayrı bir ekip kurmak şart mı?<br/><strong>Cevap:</strong> Hem in-house yönetebilir hem de MSSP (Yönetilen Hizmetler) modeliyle 7/24 Siber Tehdit Merkezi (SOC) desteği alabilirsiniz.</p>\n<p><strong>Soru:</strong> EPS lisanslamanın dezavantajı nedir?<br/><strong>Cevap:</strong> EPS bazlı modellerde kurumunuz büyüdükçe faturanız da büyür; sınırsız EPS destekleyen çözümler daha uzun vadeli ROI sunar.</p>"
];

const keywordsToSlugs = {
    "5651": "5651-log-yonetimi-rehberi",
    "kvkk": "kvkk-siem-log-yonetimi-rehberi",
    "soc": "soc-kurulum-rehberi-maliyetler",
    "qradar": "qradar-alternatifi",
    "parsing": "log-parsing-nedir",
    "threat hunting": "threat-hunting-nedir",
    "korelasyon": "siem-nedir"
};

const files = fs.readdirSync(wikiDir).filter(f => f.endsWith('.ts'));

let totalMatches = 0;
let totalLinks = 0;

for (const file of files) {
    const filePath = path.join(wikiDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let isModified = false;
    content = content.replace(/content:\s*`([^`]+)`/g, (match, innerContent) => {
        let newContent = innerContent;
        totalMatches++;
        isModified = true;

        if (!newContent.includes("> *")) {
            const stat = stats[Math.floor(Math.random() * stats.length)];
            newContent = newContent.replace(/(<h[23][^>]*>.*?<\/h[23]>)/i, `$1\n      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-slate-900/50 italic text-gray-300">\n        ${stat}\n      </blockquote>`);
        }

        if (Math.random() > 0.4) {
            if (!newContent.includes("Sıkça Sorulan Sorular") && !newContent.includes("Sektörel Sorular")) {
                const faq = faqTemplates[Math.floor(Math.random() * faqTemplates.length)];
                newContent += faq;
            }
        }

        let linksAdded = 0;
        for (const [kw, targetSlug] of Object.entries(keywordsToSlugs)) {
            if (linksAdded >= 1) break; 
            const regex = new RegExp(`(?<=^|\\s|>)(${kw})(?=\\s|<|[.,!?;]|$)`, "i");
            const matchToken = newContent.match(regex);
            
            if (matchToken && matchToken.index !== undefined) {
                const preceding = newContent.slice(0, matchToken.index);
                const aOpen = (preceding.match(/<a[\s>]/gi) || []).length;
                const aClose = (preceding.match(/<\/a>/gi) || []).length;
                
                if (aOpen === aClose) {
                    newContent = newContent.slice(0, matchToken.index) + 
                                `<a href="/wiki/${targetSlug}" class="text-blue-400 hover:underline font-bold">${matchToken[1]}</a>` + 
                                newContent.slice(matchToken.index + matchToken[1].length);
                    linksAdded++;
                    totalLinks++;
                }
            }
        }
        return `content: \`${newContent}\``;
    });

    if (isModified) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

console.log(`LogSIEM Content Enrichment Tamamlandı!`);
console.log(`Toplam ${totalMatches} makale işlendi, ${totalLinks} iç link eklendi.`);
