"use client";

import { motion } from "framer-motion";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

export function TunnelAnimation({
  category,
  onDone,
}: {
  category: string;
  onDone: () => void;
}) {
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";
  const lines = 24;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onAnimationComplete={onDone}
    >
      {/* Dark backdrop */}
      <motion.div
        className="absolute inset-0 bg-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.95, 0.95, 0] }}
        transition={{ duration: 0.7, times: [0, 0.2, 0.7, 1] }}
      />

      {/* Radial speed lines */}
      <div className="absolute inset-0">
        {Array.from({ length: lines }).map((_, i) => {
          const angle = (360 / lines) * i;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-[2px] origin-left"
              style={{
                background: `linear-gradient(90deg, ${accent}, transparent)`,
                rotate: `${angle}deg`,
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: ["0%", "120%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.008,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* Center glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}40 0%, transparent 70%)`,
        }}
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={{
          width: [0, 600],
          height: [0, 600],
          opacity: [0, 0.6, 0],
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Concentric rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border"
          style={{ borderColor: `${accent}30` }}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={{
            width: [0, 200 * ring],
            height: [0, 200 * ring],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 0.5,
            delay: ring * 0.06,
            ease: "easeOut",
          }}
        />
      ))}

      {/* White flash */}
      <motion.div
        className="absolute inset-0 bg-ivory"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 0.3, delay: 0.15 }}
      />
    </motion.div>
  );
}
