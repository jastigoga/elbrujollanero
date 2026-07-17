"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 120;
const MOUSE_RADIUS = 160;
const MOUSE_LINE_OPACITY = 0.25;
const STAR_BASE_OPACITY = 0.35;

interface Star {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

function createStars(w: number, h: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
    baseOpacity: Math.random() * 0.3 + STAR_BASE_OPACITY,
    twinkleSpeed: Math.random() * 0.02 + 0.005,
    twinkleOffset: Math.random() * Math.PI * 2,
  }));
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = window.innerWidth;
    let h = document.documentElement.scrollHeight;
    let mouse = { x: -9999, y: -9999 };
    let raf: number;
    let stars = createStars(w, h);

    const resize = () => {
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };

    const onScroll = () => {
      mouse.y = mouse.y; // keep relative to document
    };

    // Recalc canvas height when content changes
    const resizeObs = new ResizeObserver(() => {
      const newH = document.documentElement.scrollHeight;
      if (Math.abs(newH - h) > 50) {
        h = newH;
        canvas.height = h;
        // Add new stars if canvas grew significantly
        if (stars.length < STAR_COUNT) {
          stars = createStars(w, h);
        }
      }
    });

    resize();
    resizeObs.observe(document.body);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);

      // Update and draw stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;

        // Twinkle
        const twinkle =
          Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.15 + 0.85;
        const opacity = s.baseOpacity * twinkle;

        // Distance to mouse
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < MOUSE_RADIUS;

        // Draw star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 75, ${inRange ? Math.min(opacity + 0.35, 0.9) : opacity})`;
        ctx.fill();

        // Glow around nearby stars
        if (inRange) {
          const glowIntensity = 1 - dist / MOUSE_RADIUS;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 162, 75, ${glowIntensity * 0.15})`;
          ctx.fill();
        }
      }

      // Draw constellation lines from mouse to nearby stars
      for (const s of stars) {
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const fade = 1 - dist / MOUSE_RADIUS;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = `rgba(201, 162, 75, ${fade * MOUSE_LINE_OPACITY})`;
          ctx.lineWidth = fade * 1.2;
          ctx.stroke();
        }
      }

      // Draw lines between nearby stars that are also near mouse
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        const dxa = a.x - mouse.x;
        const dya = a.y - mouse.y;
        const distA = Math.sqrt(dxa * dxa + dya * dya);
        if (distA > MOUSE_RADIUS) continue;

        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const fadeA = 1 - distA / MOUSE_RADIUS;
            const fadeB =
              1 -
              Math.sqrt(
                (b.x - mouse.x) ** 2 + (b.y - mouse.y) ** 2,
              ) /
                MOUSE_RADIUS;
            const opacity = Math.min(fadeA, fadeB) * 0.12;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(201, 162, 75, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObs.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
