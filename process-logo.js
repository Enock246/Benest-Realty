const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  console.log("Reading logo.png...");
  const inputPath = path.join(__dirname, 'public', 'assets', 'logo.png');
  const outputPath = path.join(__dirname, 'public', 'assets', 'logo-transparent.png');
  
  // We don't know the exact color, but if it's off-white, we can use 
  // sharp's trim or just map a color range if possible.
  // Actually, sharp has a built in background removal in some versions? No.
  // But we can get raw pixel data and do it ourselves.
  
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  
  // Assume top left is background
  const br = data[0];
  const bg = data[1];
  const bb = data[2];
  console.log(`Detected background color: rgb(${br}, ${bg}, ${bb})`);
  
  const tolerance = 25;
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    
    if (Math.abs(r - br) <= tolerance && Math.abs(g - bg) <= tolerance && Math.abs(b - bb) <= tolerance) {
      data[i+3] = 0; // Alpha
    }
  }
  
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
  .png()
  .toFile(outputPath);
  
  console.log("Done!");
}

processLogo().catch(console.error);
