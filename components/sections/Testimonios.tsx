"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIOS = [
  {
    initials: "M.R.",
    name: "María R.",
    quote:
      "Después de meses sin hablar, volvió a buscarme. No lo podía creer. El trabajo fue rápido y efectivo.",
    service: "Amarres de amor",
    category: "amor",
    accent: "#FB7185",
    rating: 5,
  },
  {
    initials: "L.V.",
    name: "Luis V.",
    quote:
      "Tenía energías muy pesadas. Después de la limpia, todo cambió en mi vida. Me siento renovado.",
    service: "Limpias espirituales",
    category: "proteccion",
    accent: "#38BDF8",
    rating: 5,
  },
  {
    initials: "C.A.",
    name: "Carmen A.",
    quote:
      "Una tercera persona estaba arruinando mi relación. La protección espiritual me dio paz y seguridad.",
    service: "Protección espiritual",
    category: "proteccion",
    accent: "#A855F7",
    rating: 5,
  },
  {
    initials: "R.M.",
    name: "Roberto M.",
    quote:
      "Consulté por curiosidad y terminé recibiendo orientación que me cambió la perspectiva de mi vida.",
    service: "Consultas espirituales",
    category: "consulta",
    accent: "#FBBF24",
    rating: 5,
  },
  {
    initials: "A.P.",
    name: "Ana P.",
    quote:
      "Pensé que nunca volvería. Hoy estamos juntos de nuevo. Agradecida eternamente con el Maestro.",
    service: "Retorno del ser amado",
    category: "amor",
    accent: "#FB7185",
    rating: 5,
  },
  {
    initials: "E.B.",
    name: "Eduardo B.",
    quote:
      "Después de la protección, las cosas negativas dejaron de ocurrir. Mi familia está tranquila.",
    service: "Protección espiritual",
    category: "proteccion",
    accent: "#38BDF8",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIOS)[number];
  index: number;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-carbon/50 p-6 transition-all duration-300 hover:border-white/10 hover:bg-carbon/70"
      style={{ backdropFilter: "blur(12px)" }}
    >
      {/* Accent glow top-right */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: testimonial.accent }}
      />

      {/* Stars */}
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-gold text-gold"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-5 font-voice text-[15px] italic leading-relaxed text-ivory/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold"
          style={{
            background: `${testimonial.accent}20`,
            color: testimonial.accent,
            border: `1px solid ${testimonial.accent}30`,
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-ui text-sm font-medium text-ivory">
            {testimonial.name}
          </div>
          <div
            className="font-ui text-[11px]"
            style={{ color: testimonial.accent }}
          >
            {testimonial.service}
          </div>
        </div>
      </div>
    </motion.blockquote>
  );
}

export function Testimonios() {
  return (
    <section id="testimonios" className="relative py-24">
      {/* Atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&q=40')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base via-transparent to-base" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Testimonios
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Casos reales, resultados reales
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Lo que dicen quienes ya confiaron en nuestro trabajo espiritual
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <TestimonialCard key={t.initials} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
