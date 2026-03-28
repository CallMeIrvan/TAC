// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const target = path.join(__dirname, 'src', 'lib', 'exam-data-networking.ts');
let content = fs.readFileSync(target, 'utf8');

// Replace multi-line empty options array with dummy options
const regex = /options:\s*\[\s*\n\s*\],/g;
const replacement = `options: [
      { label: "A", text: "[Pertanyaan Interaktif - Opsi A]" },
      { label: "B", text: "[Pertanyaan Interaktif - Opsi B]" },
      { label: "C", text: "[Pertanyaan Interaktif - Opsi C]" },
      { label: "D", text: "[Pertanyaan Interaktif - Opsi D]" }
    ],`;

let count = 0;
content = content.replace(regex, (match) => {
    count++;
    return replacement;
});

fs.writeFileSync(target, content);
console.log(`Replaced empty options in ${count} places.`);
