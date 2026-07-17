import type { Variants } from "framer-motion";

// Variants reutilizables (ver Fase 1, seccion 17 "Estrategia de animaciones")
export const revealOnZoom: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const nodeHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.15 } },
};
