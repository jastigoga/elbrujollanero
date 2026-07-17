import type { Variants } from "framer-motion";

/* ── Hover en nodos ──────────────────────────────────────────── */
export const nodeHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.15 } },
};

/* ── Aparición con fade + slide ──────────────────────────────── */
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" },
  }),
};

/* ── Stagger children ────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

/* ── Panel lateral (slide-in desde la derecha) ───────────────── */
export const panelSlideIn: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", damping: 28, stiffness: 220 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

/* ── Reveal on scroll ────────────────────────────────────────── */
export const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ── Pulse glow (para el CTA de WhatsApp) ────────────────────── */
export const pulseGlow: Variants = {
  rest: { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
  pulse: {
    boxShadow: [
      "0 0 0 0 rgba(37, 211, 102, 0.4)",
      "0 0 0 12px rgba(37, 211, 102, 0)",
    ],
    transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
  },
};
