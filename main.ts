import { writeFileSync } from 'node:fs';
import { mkdirSync } from 'node:fs';

const entry = "Out of office. I'm stuck in this pot. Water me or I'll file a wilt complaint.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry + '\n', 'utf8');