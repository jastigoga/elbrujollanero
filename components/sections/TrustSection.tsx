"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Alchemical eye */}
        <ellipse cx="32" cy="32" rx="26" ry="18" opacity="0.7" />
        <circle cx="32" cy="32" r="10" />
        <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
        {/* Rays */}
        <line x1="32" y1="8" x2="32" y2="3" opacity="0.5" />
        <line x1="32" y1="61" x2="32" y2="56" opacity="0.5" />
        <line x1="8" y1="32" x2="3" y2="32" opacity="0.5" />
        <line x1="61" y1="32" x2="56" y2="32" opacity="0.5" />
        <line x1="15" y1="15" x2="11" y2="11" opacity="0.4" />
        <line x1="49" y1="15" x2="53" y2="11" opacity="0.4" />
        <line x1="15" y1="49" x2="11" y2="53" opacity="0.4" />
        <line x1="49" y1="49" x2="53" y2="53" opacity="0.4" />
      </svg>
    ),
    title: "¿Por qué confiar en nosotros?",
    text: "Con años de experiencia ayudando a parejas a reencontrarse, sabemos lo que estás viviendo y entendemos tu dolor. Nuestro trabajo está basado en el respeto, la seriedad y la absoluta confidencialidad. Cada caso es tratado con compromiso real y una profunda conexión espiritual. Hemos guiado a muchas personas en el retorno del ser amado, en procesos de reconciliación y apertura de caminos afectivos.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Pyramid with cross */}
        <polygon points="32,8 52,52 12,52" opacity="0.7" />
        <line x1="32" y1="18" x2="32" y2="48" strokeWidth="2" />
        <line x1="24" y1="32" x2="40" y2="32" strokeWidth="2" />
        {/* Small circle at apex */}
        <circle cx="32" cy="8" r="3" fill="currentColor" stroke="none" opacity="0.6" />
      </svg>
    ),
    title: "Resultados garantizados, trabajo serio",
    text: "Cada caso que acepto lo trabajo con compromiso, experiencia y respeto. Mis rituales y amarres han dado resultado en cientos de personas que hoy viven reconciliadas con quienes aman. Si realmente deseas recuperar a tu ser amado, estoy aquí para ayudarte con trabajos efectivos y seguros.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Geometric star / mandala */}
        <polygon points="32,4 36,24 56,24 40,36 46,56 32,44 18,56 24,36 8,24 28,24" opacity="0.6" />
        <circle cx="32" cy="32" r="8" />
        <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
        {/* Outer ring */}
        <circle cx="32" cy="32" r="28" strokeDasharray="3 5" opacity="0.3" />
      </svg>
    ),
    title: "Amarres de amor efectivos y garantizados",
    text: "Trabajo con energías reales, prácticas tradicionales y resultados que hablan por sí solos. Cientos de personas ya recuperaron a su pareja. Tú puedes ser la próxima.",
  },
];

export function TrustSection() {
  return (
    <section className="relative py-28">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,162,75,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Confianza
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Un compromiso real con tu caso
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Seriedad, experiencia y resultados que hablan por sí mismos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative flex flex-col items-center rounded-xl border border-gold/10 bg-[#0a0a0a]/70 p-8 text-center transition-all duration-300 hover:border-gold/25 hover:bg-[#0e0e0e]/80"
              style={{ backdropFilter: "blur(8px)" }}
            >
              {/* Top glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 text-gold">{card.icon}</div>

              {/* Title */}
              <h3 className="mb-4 font-display text-lg text-gold-soft">
                {card.title}
              </h3>

              {/* Body */}
              <p className="font-voice text-sm leading-relaxed text-ivory-dim/80">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
