// Convert any images dropped in /Users/eli/regain-stock/ → optimized .webp in public/images/stock/
// Run:  node scripts/stock-to-webp.mjs
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = '/Users/eli/regain-stock';
const OUT = new URL('../public/images/stock/', import.meta.url).pathname;
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff']);

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => EXT.has(parse(f).ext.toLowerCase()));
if (!files.length) { console.log('No images found in', SRC); process.exit(0); }

for (const f of files) {
  const { name } = parse(f);
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const out = join(OUT, `${slug}.webp`);
  await sharp(join(SRC, f))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  console.log(`✓ ${f}  →  public/images/stock/${slug}.webp`);
}
console.log(`\nDone — ${files.length} image(s) converted to WebP.`);
