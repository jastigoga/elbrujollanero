"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";

/* ── Mapa místico SVG ────────────────────────────────────────── */

/** Build { cx: [...], cy: [...] } keyframes for an orbiting marker */
function orbitKeys(radius: number, startDeg: number, steps: number, cw: boolean) {
  const cx: number[] = [];
  const cy: number[] = [];
  const step = 360 / steps;
  for (let i = 0; i <= steps; i++) {
    const deg = cw ? startDeg + step * i : startDeg - step * i;
    const rad = (deg * Math.PI) / 180;
    cx.push(400 + Math.cos(rad) * radius);
    cy.push(400 + Math.sin(rad) * radius);
  }
  return { cx, cy };
}

function MysticalMap() {
  /* Símbolos astrales — pulsan opacidad, no se mueven de posición */
  const astralSymbols = useMemo(
    () => [
      { angle: 0, r: 340, symbol: "☉", size: 28 },
      { angle: 45, r: 335, symbol: "☽", size: 26 },
      { angle: 90, r: 340, symbol: "♄", size: 24 },
      { angle: 135, r: 330, symbol: "☿", size: 22 },
      { angle: 180, r: 340, symbol: "♀", size: 28 },
      { angle: 225, r: 335, symbol: "♂", size: 26 },
      { angle: 270, r: 340, symbol: "♃", size: 24 },
      { angle: 315, r: 330, symbol: "⊕", size: 22 },
      { angle: 20, r: 265, symbol: "✦", size: 20 },
      { angle: 60, r: 255, symbol: "◈", size: 18 },
      { angle: 100, r: 265, symbol: "☽", size: 22 },
      { angle: 140, r: 260, symbol: "★", size: 18 },
      { angle: 180, r: 265, symbol: "⬡", size: 20 },
      { angle: 220, r: 255, symbol: "✦", size: 18 },
      { angle: 260, r: 265, symbol: "☽", size: 22 },
      { angle: 300, r: 260, symbol: "◈", size: 18 },
      { angle: 340, r: 265, symbol: "★", size: 20 },
      { angle: 10, r: 175, symbol: "△", size: 16 },
      { angle: 50, r: 165, symbol: "✦", size: 14 },
      { angle: 90, r: 175, symbol: "⬡", size: 16 },
      { angle: 130, r: 170, symbol: "◈", size: 14 },
      { angle: 170, r: 175, symbol: "△", size: 16 },
      { angle: 210, r: 165, symbol: "✦", size: 14 },
      { angle: 250, r: 175, symbol: "⬡", size: 16 },
      { angle: 290, r: 170, symbol: "◈", size: 14 },
      { angle: 330, r: 175, symbol: "△", size: 16 },
      { angle: 30, r: 85, symbol: "✦", size: 12 },
      { angle: 150, r: 80, symbol: "★", size: 12 },
      { angle: 270, r: 85, symbol: "✦", size: 12 },
    ],
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.svg
        viewBox="0 0 800 800"
        className="h-[min(100dvh,800px)] w-[min(100dvh,800px)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#C9A24B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx="400" cy="400" r="380" fill="url(#mapGlow)" />

        {/* ══ CONCENTRIC RINGS (static) ══ */}
        <circle cx="400" cy="400" r="350" stroke="#C9A24B" strokeWidth="1.2" fill="none" opacity="0.3" strokeDasharray="12 8" />
        <circle cx="400" cy="400" r="300" stroke="#C9A24B" strokeWidth="1.4" fill="none" opacity="0.35" strokeDasharray="10 6" />
        <circle cx="400" cy="400" r="240" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="8 5" />
        <circle cx="400" cy="400" r="160" stroke="#C9A24B" strokeWidth="0.8" fill="none" opacity="0.25" strokeDasharray="6 4" />
        <circle cx="400" cy="400" r="60" stroke="#C9A24B" strokeWidth="1.5" fill="none" opacity="0.35" strokeDasharray="10 5" />
        <circle cx="400" cy="400" r="30" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5 3" />

        {/* ══ ORBITING MARKERS — individual cx/cy animation ══ */}

        {/* Ring r=350 — 2 markers, CW, 8s */}
        <motion.circle r="5.5" fill="#C9A24B" opacity="0.85" filter="url(#softGlow)"
          animate={orbitKeys(350, 0, 36, true)}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle r="3.5" fill="#C9A24B" opacity="0.55"
          animate={orbitKeys(350, 180, 36, true)}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring r=300 — 2 markers, CCW, 6s */}
        <motion.circle r="6" fill="#C9A24B" opacity="0.9" filter="url(#softGlow)"
          animate={orbitKeys(300, 90, 36, false)}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle r="3" fill="#C9A24B" opacity="0.5"
          animate={orbitKeys(300, 270, 36, false)}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring r=240 — 1 marker, CW, 5s */}
        <motion.circle r="4.5" fill="#C9A24B" opacity="0.8" filter="url(#softGlow)"
          animate={orbitKeys(240, 45, 36, true)}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring r=160 — 1 marker, CCW, 4s */}
        <motion.circle r="4" fill="#C9A24B" opacity="0.75" filter="url(#softGlow)"
          animate={orbitKeys(160, 200, 36, false)}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring r=60 — 1 marker, CW, 3s */}
        <motion.circle r="5" fill="#C9A24B" opacity="0.9" filter="url(#softGlow)"
          animate={orbitKeys(60, 120, 36, true)}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring r=30 — 1 marker, CCW, 2s */}
        <motion.circle r="3.5" fill="#C9A24B" opacity="0.8"
          animate={orbitKeys(30, 300, 36, false)}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Center dot pulse */}
        <motion.circle cx="400" cy="400" r="5" fill="#C9A24B"
          animate={{ opacity: [0.3, 0.7, 0.3], r: [4, 7, 4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ══ STATIC STRUCTURE ══ */}

        {/* Cardinal cross */}
        {[0, 90, 180, 270].map((angle) => (
          <line
            key={`cardinal-${angle}`}
            x1="400" y1="400"
            x2={400 + Math.cos((angle * Math.PI) / 180) * 350}
            y2={400 + Math.sin((angle * Math.PI) / 180) * 350}
            stroke="#C9A24B" strokeWidth="0.6" opacity="0.15"
          />
        ))}

        {/* Diagonal lines */}
        {[45, 135, 225, 315].map((angle) => (
          <line
            key={`diag-${angle}`}
            x1={400 + Math.cos((angle * Math.PI) / 180) * 80}
            y1={400 + Math.sin((angle * Math.PI) / 180) * 80}
            x2={400 + Math.cos((angle * Math.PI) / 180) * 350}
            y2={400 + Math.sin((angle * Math.PI) / 180) * 350}
            stroke="#C9A24B" strokeWidth="0.4" opacity="0.12"
            strokeDasharray="2 6"
          />
        ))}

        {/* Degree tick marks */}
        {Array.from({ length: 72 }, (_, i) => {
          const angle = (360 / 72) * i;
          const rad = (angle * Math.PI) / 180;
          const isMajor = i % 6 === 0;
          const inner = isMajor ? 338 : 343;
          return (
            <line
              key={`tick-${i}`}
              x1={400 + Math.cos(rad) * inner}
              y1={400 + Math.sin(rad) * inner}
              x2={400 + Math.cos(rad) * 350}
              y2={400 + Math.sin(rad) * 350}
              stroke="#C9A24B"
              strokeWidth={isMajor ? "1.2" : "0.6"}
              opacity={isMajor ? "0.35" : "0.18"}
            />
          );
        })}

        {/* Constellation path */}
        <motion.path
          d="M 400,240 L 520,320 L 480,440 L 320,440 L 280,320 Z"
          stroke="#C9A24B" strokeWidth="0.8" fill="none" strokeDasharray="3 5"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Astral symbols — static positions, pulsing opacity */}
        {astralSymbols.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          return (
            <motion.text
              key={`astro-${i}`}
              x={400 + Math.cos(rad) * s.r}
              y={400 + Math.sin(rad) * s.r}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#C9A24B"
              fontSize={s.size}
              filter="url(#softGlow)"
              animate={{ opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 3 + (i % 5) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
            >
              {s.symbol}
            </motion.text>
          );
        })}

        {/* Decorative pulsing dots */}
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (360 / 24) * i;
          const rad = (angle * Math.PI) / 180;
          const r = i % 3 === 0 ? 300 : i % 2 === 0 ? 240 : 160;
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={400 + Math.cos(rad) * r}
              cy={400 + Math.sin(rad) * r}
              r="2"
              fill="#C9A24B"
              animate={{ opacity: [0.15, 0.4, 0.15], r: [1.5, 2.5, 1.5] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
            />
          );
        })}

        {/* Compass rose */}
        {[0, 72, 144, 216, 288].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const tip = 400 + Math.cos(rad) * 100;
          const tipY = 400 + Math.sin(rad) * 100;
          const left = 400 + Math.cos(rad - 0.3) * 50;
          const leftY = 400 + Math.sin(rad - 0.3) * 50;
          const right = 400 + Math.cos(rad + 0.3) * 50;
          const rightY = 400 + Math.sin(rad + 0.3) * 50;
          return (
            <polygon
              key={`rose-${angle}`}
              points={`${tip},${tipY} ${left},${leftY} ${400},${400} ${right},${rightY}`}
              fill="#C9A24B" opacity="0.1" stroke="#C9A24B" strokeWidth="0.5"
            />
          );
        })}
      </motion.svg>
    </div>
  );
}

/* ── Partículas flotantes de fondo ───────────────────────────── */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 6,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden">
      {/* Mapa místico de fondo */}
      <MysticalMap />

      {/* Glow detrás del texto para legibilidad */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.3) 35%, transparent 60%)",
        }}
      />

      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 font-ui text-xs uppercase tracking-[4px] text-gold"
          >
            Maestro Supremo del Ocultismo
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 font-display text-5xl leading-[1.1] text-ivory md:text-7xl"
          >
            Recupera lo que el{" "}
            <span className="text-gold-soft">destino</span>{" "}
            te arrebató
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mx-auto mb-10 max-w-xl font-voice text-xl text-ivory-dim md:text-2xl"
          >
            Consulta gratuita · Trabajo serio · Casos reales
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col items-center gap-5"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero una consulta gratuita")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-10 py-4 font-ui text-sm font-semibold text-whatsapp-on shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-dark hover:shadow-2xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consulta gratuita ahora
            </a>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-ivory-dim">
              {["Consulta gratuita", "Confidencialidad total", "Respuesta en 24h"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="h-3 w-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-ui text-[10px] uppercase tracking-widest text-ivory-dim/60">
            Explorar
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [8, 14, 8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
