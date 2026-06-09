import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("public/images");
const MAX_WIDTH = 1920;
const QUALITY = 80;

const files = (await readdir(dir)).filter((f) => /\.png$/i.test(f));
let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  const src = path.join(dir, file);
  const out = path.join(dir, file.replace(/\.png$/i, ".webp"));
  const before = (await stat(src)).size;

  const img = sharp(src);
  const meta = await img.metadata();
  if (meta.width && meta.width > MAX_WIDTH) img.resize({ width: MAX_WIDTH });

  await img.webp({ quality: QUALITY, effort: 6 }).toFile(out);
  const after = (await stat(out)).size;
  await unlink(src);

  beforeTotal += before;
  afterTotal += after;
  const pct = (100 - (after / before) * 100).toFixed(0);
  console.log(
    `${file.padEnd(20)} ${(before / 1024).toFixed(0).padStart(5)}KB -> ${(after / 1024).toFixed(0).padStart(4)}KB  (-${pct}%)`,
  );
}

console.log(
  `\nTOTAL  ${(beforeTotal / 1024 / 1024).toFixed(2)}MB -> ${(afterTotal / 1024 / 1024).toFixed(2)}MB  (-${(100 - (afterTotal / beforeTotal) * 100).toFixed(0)}%)`,
);
