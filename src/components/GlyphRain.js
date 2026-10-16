import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const GLYPHS = "01ア01イ01ウ01エ01オ01カ01キ01ク01ケ01コ01サ01シ01ス01セ01ソ01タ01チ01ツ01テ01ト01<>/{}$#ABCDEF01";
const CELL = 16;
const FRAME_MS = 55;
const BOOST_FRAME_MS = 16;

const toRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

// Falling glyphs on a transparent canvas, so the page background shows through.
// Column colour fades from `from` (left) to `to` (right); `boost` speeds the rain up.
export default function GlyphRain({ from = "#22D3EE", to = "#E879F9", accent = "#FFFFFF", boost = false }) {
  const canvasRef = useRef(null);
  const frameMs = useRef(FRAME_MS);
  const reduced = useReducedMotion();

  useEffect(() => {
    frameMs.current = boost ? BOOST_FRAME_MS : FRAME_MS;
  }, [boost]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const [a, b] = [toRgb(from), toRgb(to)];
    let drops = [];
    let colors = [];
    let raf = 0;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.ceil(canvas.width / CELL);
      drops = Array.from({ length: cols }, () => Math.random() * -60);
      colors = Array.from({ length: cols }, (_, i) => {
        const t = i / Math.max(1, cols - 1);
        return `rgb(${a.map((c, k) => Math.round(c + (b[k] - c) * t)).join(",")})`;
      });
    };

    const step = () => {
      // Fade previous frames toward transparent instead of painting a background colour.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = `${CELL - 2}px monospace`;
      drops.forEach((y, i) => {
        ctx.fillStyle = Math.random() < 0.02 ? accent : colors[i];
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * CELL, y * CELL);
        drops[i] = y * CELL > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (t - last < frameMs.current) return;
      last = t;
      step();
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      for (let i = 0; i < 40; i++) step();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, from, to, accent]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 h-full w-full opacity-60" />;
}
