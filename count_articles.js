const fs = require('fs');
const path = 'c:/SIEMSOC/src/data/wiki/';
let total = 0;
fs.readdirSync(path).forEach(file => {
  if (!file.endsWith('.ts')) return;
  const content = fs.readFileSync(path + file, 'utf8');
  const lines = content.split('\n');
  let count = 0;
  lines.forEach(line => {
    // Match line staring with "something": { or 'something': {
    if (line.match(/^\s*["'][^"']+["']:\s*\{/)) {
      // Exclude lines that are part of the content (like h2 tags or p tags)
      // Actually the property keys are at start of line with some space
      if (line.includes('title:') || line.includes('description:') || line.includes('content:') || line.includes('author:')) return;
      count++;
    }
  });
  console.log(`${file}: ${count}`);
  total += count;
});
console.log(`TOTAL: ${total}`);
