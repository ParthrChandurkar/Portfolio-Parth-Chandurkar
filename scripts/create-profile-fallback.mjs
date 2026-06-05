import { mkdirSync, writeFileSync } from "node:fs";

const width = 720;
const height = 920;
const rowStride = Math.ceil((width * 3) / 4) * 4;
const pixelDataSize = rowStride * height;
const fileSize = 54 + pixelDataSize;
const buffer = Buffer.alloc(fileSize);

buffer.write("BM", 0);
buffer.writeUInt32LE(fileSize, 2);
buffer.writeUInt32LE(54, 10);
buffer.writeUInt32LE(40, 14);
buffer.writeInt32LE(width, 18);
buffer.writeInt32LE(height, 22);
buffer.writeUInt16LE(1, 26);
buffer.writeUInt16LE(24, 28);
buffer.writeUInt32LE(pixelDataSize, 34);

const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));

for (let y = 0; y < height; y += 1) {
  for (let x = 0; x < width; x += 1) {
    const nx = x / width;
    const ny = y / height;
    const cx = nx - 0.54;
    const cy = ny - 0.53;
    const radial = Math.max(0, 1 - Math.sqrt(cx * cx + cy * cy) * 1.8);
    const grid = x % 56 < 2 || y % 56 < 2 ? 20 : 0;
    const scan = y % 14 === 0 ? 14 : 0;
    const halo = radial * 120;

    let r = 13 + halo * 0.45 + grid * 0.35;
    let g = 17 + halo * 0.9 + scan + grid;
    let b = 23 + halo * 1.15 + grid * 1.4;

    const head = Math.pow((nx - 0.53) / 0.16, 2) + Math.pow((ny - 0.36) / 0.12, 2) < 1;
    const body =
      Math.pow((nx - 0.53) / 0.28, 2) + Math.pow((ny - 0.68) / 0.24, 2) < 1 &&
      ny > 0.48;

    if (head || body) {
      r = 44 + halo * 0.25;
      g = 189 + halo * 0.18;
      b = 248 + halo * 0.12;
    }

    if (nx > 0.12 && nx < 0.9 && ny > 0.13 && ny < 0.9) {
      const border = nx < 0.13 || nx > 0.89 || ny < 0.14 || ny > 0.89;
      if (border) {
        r = 168;
        g = 85;
        b = 247;
      }
    }

    const row = height - 1 - y;
    const index = 54 + row * rowStride + x * 3;
    buffer[index] = clamp(b);
    buffer[index + 1] = clamp(g);
    buffer[index + 2] = clamp(r);
  }
}

mkdirSync("public", { recursive: true });
writeFileSync("public/profile-fallback.bmp", buffer);
