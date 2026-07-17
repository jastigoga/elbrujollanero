"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 160;
const MOUSE_RADIUS = 200;

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
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    baseOpacity: Math.random() * 0.35 + 0.25,
    twinkleSpeed: Math.random() * 0.015 + 0.004,
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
    let h = window.innerHeight;
    let mouse = { x: -9999, y: -9999 };
    let raf: number;
    let stars = createStars(w, h);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars = createStars(w, h);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onLeave);
    document.addEventListener("mouseleave", onLeave);

    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);

      // Draw star-to-star connections (ambient, always visible)
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(201, 162, 75, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Update and draw stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;

        const twinkle =
          Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.2 + 0.8;
        const opacity = s.baseOpacity * twinkle;

        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < MOUSE_RADIUS;

        // Draw star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 75, ${inRange ? Math.min(opacity + 0.4, 1) : opacity})`;
        ctx.fill();

        // Glow halo when near mouse
        if (inRange) {
          const glow = 1 - dist / MOUSE_RADIUS;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r + 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 162, 75, ${glow * 0.2})`;
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
          ctx.strokeStyle = `rgba(201, 162, 75, ${fade * 0.3})`;
          ctx.lineWidth = fade * 1.5;
          ctx.stroke();
        }
      }

      // Draw star-to-star connections near mouse (stronger)
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

          if (dist < 130) {
            const fadeA = 1 - distA / MOUSE_RADIUS;
            const distB = Math.sqrt(
              (b.x - mouse.x) ** 2 + (b.y - mouse.y) ** 2,
            );
            const fadeB = 1 - distB / MOUSE_RADIUS;
            const opacity = Math.min(fadeA, fadeB) * 0.18;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(201, 162, 75, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onLeave);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
