"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";

/* ── Partículas flotantes de fondo ───────────────────────────── */
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 6,
  }));

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
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background atmospheric image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/60 to-base" />
      <div className="absolute inset-0 bg-gradient-to-r from-base/50 via-transparent to-base/50" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(201,162,75,0.08) 0%, transparent 60%)",
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
