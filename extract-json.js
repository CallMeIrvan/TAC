/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');
const outputPath = path.join(__dirname, 'src', 'lib', 'exam-data-networking.ts');

const content = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(content);

let tsContent = `// ============================================================
// TAC TRYOUT ENGINE — Exam Data
// Sertifikasi: ${data.metadata.title}
// ============================================================

import { ExamQuestion } from "./exam-data-types";

export const ITS_NETWORKING_QUESTIONS: ExamQuestion[] = [
`;

data.questions.forEach(q => {
    let type = "single";
    if (q.type === "multiple_choice_multiple") type = "multiple";
    else if (q.type === "true_false") type = "true_false";
    else if (q.type === "drag_and_drop") type = "multiple"; // Fallback, will handle UI gracefully or add notes
    else type = "single";

    let tsQ = `  {
    id: ${q.id},
    question: ${JSON.stringify(q.question)},
    type: "${type}",
    `;

    if (q.note) {
        tsQ += `note: ${JSON.stringify(q.note)},\n    `;
    }

    if (q.type === "true_false" && q.statements) {
        tsQ += `statements: [\n`;
        q.statements.forEach(stmt => {
            tsQ += `      { text: ${JSON.stringify(stmt)}, answer: "True" }, // Modify answer manually if needed\n`;
        });
        tsQ += `    ],\n`;
        tsQ += `    answers: [],\n    options: [],\n`;
    } else {
        tsQ += `options: [\n`;
        if (q.options) {
            q.options.forEach(opt => {
                tsQ += `      { label: "${opt.label}", text: ${JSON.stringify(opt.text)} },\n`;
            });
        }
        tsQ += `    ],\n`;
        tsQ += `    answers: [], // Note: Need answers from user manually\n`;
    }

    tsQ += `  },\n`;
    tsContent += tsQ;
});

tsContent += `];\n\n`;
tsContent += `export const NETWORKING_LATIHAN_1 = ITS_NETWORKING_QUESTIONS.filter(q => q.id <= Math.floor(ITS_NETWORKING_QUESTIONS.length / 2));\n`;
tsContent += `export const NETWORKING_LATIHAN_2 = ITS_NETWORKING_QUESTIONS.filter(q => q.id > Math.floor(ITS_NETWORKING_QUESTIONS.length / 2));\n`;

fs.writeFileSync(outputPath, tsContent);
console.log('Successfully wrote', outputPath);
