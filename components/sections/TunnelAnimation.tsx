"use client";

import { motion } from "framer-motion";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

const LINES = 32;
const RINGS = 5;
const PARTICLES = 20;

export function TunnelAnimation({
  category,
  onDone,
}: {
  category: string;
  onDone: () => void;
}) {
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onAnimationComplete={onDone}
    >
      {/* ═══ Fase 1: Backdrop oscuro ═══ */}
      <motion.div
        className="absolute inset-0 bg-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.1, 0.3, 0.8, 1] }}
      />

      {/* ═══ Fase 2: Líneas radiales de velocidad ═══ */}
      <div className="absolute inset-0">
        {Array.from({ length: LINES }).map((_, i) => {
          const angle = (360 / LINES) * i;
          const delay = i * 0.012;
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                height: "2px",
                background: `linear-gradient(90deg, ${accent}cc, ${accent}40, transparent)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "150%"],
                opacity: [0, 0.8, 0.5, 0],
              }}
              transition={{
                duration: 1.2,
                delay,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* ═══ Fase 3: Anillos concéntricos expandiéndose ═══ */}
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
            width: [0, 150 * (i + 1)],
            height: [0, 150 * (i + 1)],
            opacity: [0, 0.5, 0.3, 0],
          }}
          transition={{
            duration: 1.4,
            delay: 0.1 + i * 0.12,
            ease: "easeOut",
          }}
        />
      ))}

      {/* ═══ Fase 4: Centro glow pulsante ═══ */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}50 0%, ${accent}20 40%, transparent 70%)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: [0, 200, 400, 800],
          height: [0, 200, 400, 800],
          opacity: [0, 0.8, 0.5, 0],
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* ═══ Fase 5: Partículas místicas ═══ */}
      {Array.from({ length: PARTICLES }).map((_, i) => {
        const angle = (360 / PARTICLES) * i;
        const rad = (angle * Math.PI) / 180;
        const distance = 250 + Math.random() * 200;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: accent,
              left: "50%",
              top: "50%",
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.cos(rad) * distance],
              y: [0, Math.sin(rad) * distance],
              opacity: [0, 1, 0.6, 0],
              scale: [0, 1.5, 1, 0],
            }}
            transition={{
              duration: 1.3,
              delay: 0.2 + i * 0.03,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* ═══ Fase 6: Símbolo místico central ═══ */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute"
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{
          opacity: [0, 0.6, 0.8, 0],
          scale: [0, 1, 1.2, 2],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <circle cx="60" cy="60" r="55" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="60" cy="60" r="40" stroke={accent} strokeWidth="0.5" fill="none" opacity="0.3" />
        <path
          d="M60 5L67 40L100 30L75 55L100 80L67 70L60 105L53 70L20 80L45 55L20 30L53 40Z"
          stroke={accent}
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <circle cx="60" cy="60" r="12" stroke={accent} strokeWidth="1" fill={`${accent}15`} />
      </motion.svg>

      {/* ═══ Fase 7: Flash blanco final ═══ */}
      <motion.div
        className="absolute inset-0 bg-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.3, 0] }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />

      {/* ═══ Fase 8: Vortex lines (segunda ráfaga) ═══ */}
      <div className="absolute inset-0">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (360 / 16) * i + 11.25;
          return (
            <motion.div
              key={`vortex-${i}`}
              className="absolute left-1/2 top-1/2 origin-left"
              style={{
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "200%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.8,
                delay: 0.8 + i * 0.02,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
