"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

const MOBILE_LINES = 20;
const MOBILE_RINGS = 4;
const MOBILE_PARTICLES = 12;
const DESKTOP_LINES = 40;
const DESKTOP_RINGS = 7;
const DESKTOP_PARTICLES = 30;

export function TunnelAnimation({
  category,
  onDone,
}: {
  category: string;
  onDone: () => void;
}) {
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const LINES = mobile ? MOBILE_LINES : DESKTOP_LINES;
  const RINGS = mobile ? MOBILE_RINGS : DESKTOP_RINGS;
  const PARTICLES = mobile ? MOBILE_PARTICLES : DESKTOP_PARTICLES;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={onDone}
    >
      {/* ═══ Fase 1: Backdrop oscuro ═══ */}
      <motion.div
        className="absolute inset-0 bg-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 1, 1, 0] }}
        transition={{ duration: 4.0, times: [0, 0.04, 0.12, 0.82, 0.93, 1] }}
      />

      {/* ═══ Fase 2: Líneas radiales ═══ */}
      <div className="absolute inset-0">
        {Array.from({ length: LINES }).map((_, i) => {
          const angle = (360 / LINES) * i;
          return (
            <motion.div
              key={`line1-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                height: "1.5px",
                background: `linear-gradient(90deg, ${accent}cc, ${accent}50, transparent)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "80%", "120%"],
                opacity: [0, 0.7, 0.4, 0],
              }}
              transition={{
                duration: 3.0,
                delay: i * 0.018,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}
      </div>

      {/* ═══ Fase 3: Líneas secundarias ═══ */}
      <div className="absolute inset-0">
        {Array.from({ length: Math.floor(LINES * 0.6) }).map((_, i) => {
          const angle = (360 / Math.floor(LINES * 0.6)) * i + 7.5;
          return (
            <motion.div
              key={`line2-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${accent}80, ${accent}40, transparent)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "150%"],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.6,
                delay: 1.2 + i * 0.025,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* ═══ Fase 4: Anillos concéntricos ═══ */}
      {Array.from({ length: RINGS }).map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full"
          style={{
            border: `1px solid ${accent}`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: [0, 100 * (i + 1), 150 * (i + 1)],
            height: [0, 100 * (i + 1), 150 * (i + 1)],
            opacity: [0, 0.6, 0.3, 0],
          }}
          transition={{
            duration: 2.6,
            delay: 0.25 + i * 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}

      {/* ═══ Fase 5: Centro glow ═══ */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}60 0%, ${accent}30 30%, ${accent}10 60%, transparent 80%)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: [0, 100, 300, 600, 1200],
          height: [0, 100, 300, 600, 1200],
          opacity: [0, 0.9, 0.7, 0.4, 0],
        }}
        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ═══ Fase 6: Glow secundario ═══ */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}40 0%, transparent 60%)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: [0, 200, 500, 900],
          height: [0, 200, 500, 900],
          opacity: [0, 0.5, 0.3, 0],
        }}
        transition={{ duration: 3.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ═══ Fase 7: Partículas ═══ */}
      {Array.from({ length: PARTICLES }).map((_, i) => {
        const angle = (360 / PARTICLES) * i;
        const rad = (angle * Math.PI) / 180;
        const distance = 300 + Math.random() * 300;
        const size = Math.random() * 5 + 2;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              background: i % 3 === 0 ? accent : `${accent}cc`,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 ${size * 2}px ${accent}60`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.cos(rad) * distance],
              y: [0, Math.sin(rad) * distance],
              opacity: [0, 1, 0.8, 0],
              scale: [0, 2, 1.5, 0],
            }}
            transition={{
              duration: 2.4,
              delay: 0.4 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        );
      })}

      {/* ═══ Fase 8: Símbolo místico ═══ */}
      <motion.svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="absolute"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: [0, 0.4, 0.7, 0.5, 0],
          scale: [0, 0.5, 1, 1.5, 3],
          rotate: [0, 90, 270, 450],
        }}
        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <circle cx="80" cy="80" r="75" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="80" cy="80" r="60" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.25" />
        <circle cx="80" cy="80" r="45" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.2" />
        <path
          d="M80 5L90 55L135 35L100 70L135 105L90 85L80 155L70 85L25 105L60 70L25 35L70 55Z"
          stroke={accent}
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <circle cx="80" cy="80" r="18" stroke={accent} strokeWidth="1" fill={`${accent}10`} />
        <circle cx="80" cy="80" r="8" fill={`${accent}30`} />
      </motion.svg>

      {/* ═══ Fase 9: Flash blanco ═══ */}
      <motion.div
        className="absolute inset-0 bg-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0.35, 0.2, 0] }}
        transition={{ duration: 1.0, delay: 3.0 }}
      />

      {/* ═══ Fase 10: Vortex ═══ */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (360 / 20) * i + 9;
          return (
            <motion.div
              key={`vortex-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                height: "1px",
                background: `linear-gradient(90deg, transparent 10%, ${accent}70 50%, transparent 90%)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "250%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 2.8 + i * 0.03,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* ═══ Fase 11: Warp zoom ═══ */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent}08, transparent 70%)`,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${accent}06 2deg, transparent 4deg)
            `,
          }}
          initial={{ scale: 1, rotate: 0, opacity: 0 }}
          animate={{
            scale: [1, 2, 4],
            rotate: [0, 180],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}
