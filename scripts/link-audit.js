const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

// 1. Collect all valid static routes from filesystem
const validRoutes = new Set();

const staticRoutes = [
  '/', '/ozellikler', '/wiki', '/cozumler', '/uyumluluk-testi',
  '/maliyet-hesaplayici', '/analiz', '/demo-talep', '/sizinti-kontrol',
  '/zafiyet-tarama', '/araclar', '/araclar/siem-roi-hesaplayici',
  '/araclar/eps-hesaplayici', '/araclar/soc-maliyeti-hesaplayici',
  '/araclar/mttd-mttr-hesaplayici', '/araclar/log-retention-hesaplayici',
  '/araclar/kvkk-checklist', '/araclar/5651-checklist',
  '/cozumler/denetim-ve-inceleme', '/cozumler/fidye-yazilimi-onleme',
  '/cozumler/ic-tehdit-izleme', '/cozumler/kaba-kuvvet-saldirilari',
  '/cozumler/log-maliyet-optimizasyonu', '/cozumler/tehdit-algilama'
];
staticRoutes.forEach(r => validRoutes.add(r));

// 2. Load dynamic data to find all valid slugs
// We need to extract slug keys from data files

function extractKeysFromFile(filePath, exportName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const keys = [];
  // Match quoted keys in objects
  const regex = /["']([a-z0-9\-]+)["']\s*:\s*\{/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

// Wiki articles - collect all keys from all wiki data files
const wikiDir = path.join(srcDir, 'data', 'wiki');
const wikiFiles = fs.readdirSync(wikiDir).filter(f => f.endsWith('.ts'));
const wikiSlugs = [];
wikiFiles.forEach(file => {
  const keys = extractKeysFromFile(path.join(wikiDir, file));
  wikiSlugs.push(...keys);
});
wikiSlugs.forEach(slug => validRoutes.add('/wiki/' + slug));

// Kanit articles
const kanitKeys = extractKeysFromFile(path.join(srcDir, 'data', 'kanit-content.ts'));
kanitKeys.forEach(slug => validRoutes.add('/kanit/' + slug));

// Programmatic SEO
const seoFile = path.join(srcDir, 'data', 'programmatic-seo.ts');
const seoContent = fs.readFileSync(seoFile, 'utf8');

// Extract sector keys
const sectorMatch = seoContent.match(/programmaticSectors.*?=\s*\{([\s\S]*?)^};/m);
if (sectorMatch) {
  const regex = /["']([a-z0-9\-]+)["']\s*:\s*\{/g;
  let m;
  while ((m = regex.exec(sectorMatch[1])) !== null) {
    validRoutes.add('/sektor/' + m[1]);
  }
}

// Extract regulation keys  
const regMatch = seoContent.match(/programmaticRegulations.*?=\s*\{([\s\S]*?)^};/m);
if (regMatch) {
  const regex = /["']([a-z0-9\-]+)["']\s*:\s*\{/g;
  let m;
  while ((m = regex.exec(regMatch[1])) !== null) {
    validRoutes.add('/regulasyon/' + m[1]);
  }
}

// Extract comparison keys
const compMatch = seoContent.match(/programmaticComparisons.*?=\s*\{([\s\S]*?)^};/m);
if (compMatch) {
  const regex = /["']([a-z0-9\-]+)["']\s*:\s*\{/g;
  let m;
  while ((m = regex.exec(compMatch[1])) !== null) {
    validRoutes.add('/karsilastirma/' + m[1]);
  }
}

// Extract integration keys
const intMatch = seoContent.match(/programmaticIntegrations.*?=\s*\{([\s\S]*?)^};/m);
if (intMatch) {
  const regex = /["']([a-z0-9\-]+)["']\s*:\s*\{/g;
  let m;
  while ((m = regex.exec(intMatch[1])) !== null) {
    validRoutes.add('/entegrasyon/' + m[1]);
  }
}

console.log('=== VALID ROUTES (' + validRoutes.size + ') ===');
const sortedRoutes = [...validRoutes].sort();
sortedRoutes.forEach(r => console.log('  ' + r));

// 3. Find all internal links in source code
const allLinks = [];

function findLinksInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(rootDir, '').replace(/\\/g, '/');
  
  // Match href="/path" or href='/path' in JSX
  const hrefRegex1 = /href=["'](\/([\w\-\/]*)?)["']/g;
  let match;
  while ((match = hrefRegex1.exec(content)) !== null) {
    const link = match[1];
    if (link && link !== '/' && !link.startsWith('/api/') && !link.startsWith('/private/')) {
      allLinks.push({ file: relPath, link, line: content.substring(0, match.index).split('\n').length });
    }
  }
  
  // Match href=\\" or href=\\' in template literals (HTML content in wiki articles)
  const hrefRegex2 = /href=\\"(\/([\w\-\/]*)?)\\"/g;
  while ((match = hrefRegex2.exec(content)) !== null) {
    const link = match[1];
    if (link && link !== '/' && !link.startsWith('/api/') && !link.startsWith('/private/')) {
      allLinks.push({ file: relPath, link, line: content.substring(0, match.index).split('\n').length });
    }
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      walkDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      findLinksInFile(fullPath);
    }
  }
}

walkDir(srcDir);

// 4. Check which links are broken
console.log('\n=== BROKEN LINKS ===');
const brokenLinks = [];
allLinks.forEach(({ file, link, line }) => {
  // Normalize link - remove trailing slash
  const normalizedLink = link.replace(/\/$/, '') || '/';
  if (!validRoutes.has(normalizedLink)) {
    brokenLinks.push({ file, link, line });
  }
});

if (brokenLinks.length === 0) {
  console.log('  No broken links found!');
} else {
  const grouped = {};
  brokenLinks.forEach(({ file, link, line }) => {
    if (!grouped[file]) grouped[file] = [];
    grouped[file].push({ link, line });
  });
  
  Object.keys(grouped).sort().forEach(file => {
    console.log('\n  FILE: ' + file);
    grouped[file].forEach(({ link, line }) => {
      console.log('    Line ' + line + ': ' + link);
    });
  });
}

console.log('\nTotal broken links: ' + brokenLinks.length);

// 5. Check for routes in sitemap that might not exist
console.log('\n=== SITEMAP ANALYSIS ===');
console.log('Routes in sitemap are generated from data files, so they match valid routes.');

// 6. Check orphan analysis - routes that exist but are never linked to
console.log('\n=== ORPHAN PAGES (no incoming links) ===');
const linkedRoutes = new Set(allLinks.map(l => l.link.replace(/\/$/, '') || '/'));
// Also add '#' routes as they're anchors, not pages
const orphanRoutes = [...validRoutes].filter(route => {
  if (route === '/') return false; // homepage is always linked
  return !linkedRoutes.has(route);
}).sort();

console.log('Orphan count: ' + orphanRoutes.length);
orphanRoutes.forEach(r => console.log('  ' + r));

// 7. Non-canonical issues
console.log('\n=== PAGES WITH href="#" (potential SEO issues) ===');
const hashLinks = [];
function findHashLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(rootDir, '').replace(/\\/g, '/');
  const regex = /href=["']#["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const line = content.substring(0, match.index).split('\n').length;
    hashLinks.push({ file: relPath, line });
  }
}
function walkDir2(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      walkDir2(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx'))) {
      findHashLinks(fullPath);
    }
  }
}
walkDir2(srcDir);
hashLinks.forEach(({ file, line }) => console.log('  ' + file + ':' + line));
console.log('Total href="#" links: ' + hashLinks.length);
