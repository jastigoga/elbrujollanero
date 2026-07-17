"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, revealOnScroll } from "@/animations/variants";

const TESTIMONIOS = [
  {
    initials: "M.R.",
    quote: "Despues de meses sin hablar, volvio a buscarme. No lo podia creer.",
    service: "Amarres de amor",
  },
  {
    initials: "L.V.",
    quote: "Tenia energias muy pesadas. Despues de la limpia, todo cambio en mi vida.",
    service: "Limpias espirituales",
  },
  {
    initials: "C.A.",
    quote: "Una tercera persona estaba arruinando mi relacion. La proteccion espiritual me dio paz.",
    service: "Proteccion espiritual",
  },
  {
    initials: "R.M.",
    quote: "Consulte por curiosidad y terminé recibiendo orientacion que me cambio la perspectiva.",
    service: "Consultas espirituales",
  },
];

export function Testimonios() {
  return (
    <motion.section
      id="testimonios"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-20 mb-16"
    >
      <motion.h2
        variants={staggerItem}
        className="mb-2 text-center font-display text-2xl text-ivory"
      >
        Casos reales
      </motion.h2>
      <motion.p
        variants={staggerItem}
        className="mb-10 text-center font-ui text-sm text-ivory-dim"
      >
        Testimonios verificados de consultantes reales
      </motion.p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIOS.map((t, i) => (
          <motion.blockquote
            key={t.initials}
            custom={i}
            variants={revealOnScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl border border-border p-5 transition-all duration-200 hover:border-gold/40"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(var(--glass-blur))",
            }}
          >
            <p className="mb-3 font-voice text-sm italic text-ivory leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="font-ui text-xs font-semibold text-gold-soft">
                {t.initials}
              </span>
              <span className="rounded-full bg-gold/10 px-2 py-0.5 font-ui text-[9px] text-gold">
                {t.service}
              </span>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </motion.section>
  );
}
