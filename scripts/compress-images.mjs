import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const ASSETS_DIR = './public/assets';
const QUALITY = 75;
const MAX_WIDTH = 1400;

function getAllImages(dir) {
  const files = [];
  for (const item of readdirSync(dir)) {
    const fullPath = join(dir, item);
    if (statSync(fullPath).isDirectory()) {
      files.push(...getAllImages(fullPath));
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

const images = getAllImages(ASSETS_DIR);
console.log(`Found ${images.length} images to compress...\n`);

let totalSaved = 0;

for (const imgPath of images) {
  const before = statSync(imgPath).size;
  const ext = extname(imgPath).toLowerCase();
  const tmpPath = imgPath + '.tmp';
  
  try {
    let pipeline = sharp(imgPath).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true, mozjpeg: true });
    }

    // Write to temp file first to avoid Windows file locking
    await pipeline.toFile(tmpPath);
    const after = statSync(tmpPath).size;

    if (after < before) {
      renameSync(tmpPath, imgPath);
      const saved = before - after;
      totalSaved += saved;
      console.log(`✓ ${imgPath.replace('public\\assets\\', '')} — ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (saved ${Math.round(saved/1024)}KB)`);
    } else {
      unlinkSync(tmpPath);
      console.log(`- ${imgPath.replace('public\\assets\\', '')} — already optimized, skipping`);
    }
  } catch (err) {
    try { unlinkSync(tmpPath); } catch {}
    console.error(`✗ Failed: ${imgPath} — ${err.message}`);
  }
}

console.log(`\n✅ Done! Total saved: ${Math.round(totalSaved/1024)}KB (${Math.round(totalSaved/1024/1024 * 10)/10}MB)`);
