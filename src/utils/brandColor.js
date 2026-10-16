// Brand colours like Next.js (#000) vanish on dark backgrounds; swap those for a fallback.
export function readableOnDark(hex, fallback = "#EDEDF0") {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.28 ? fallback : hex;
}
