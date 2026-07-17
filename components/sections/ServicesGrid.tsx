"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { services } from "@/content/services";
import { TarotCard } from "./TarotCard";
import { ServiceDetail } from "./ServiceDetail";
import { SectionDivider } from "./SectionDivider";

const CATEGORIES = [
  { key: "amor", label: "Amor y Relaciones", accent: "#FB7185" },
  { key: "proteccion", label: "Protección y Limpieza", accent: "#38BDF8" },
  { key: "consulta", label: "Consulta y Orientación", accent: "#FBBF24" },
] as const;

export function ServicesGrid() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <section id="servicios" className="relative py-20">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(201,162,75,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Nuestros servicios
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Elige tu camino
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Cada carta revela un servicio sagrado. Haz clic para descubrir su poder.
          </p>
        </div>

        {/* Category sections */}
        {CATEGORIES.map((cat, catIndex) => {
          const categoryServices = services.filter(
            (s) => s.category === cat.key,
          );

          return (
            <div key={cat.key}>
              {catIndex > 0 && (
                <div className="my-12">
                  <SectionDivider />
                </div>
              )}

              {/* Category label */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: `${cat.accent}20` }} />
                <h3
                  className="font-display text-sm uppercase tracking-[2px]"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </h3>
                <div className="h-px flex-1" style={{ background: `${cat.accent}20` }} />
              </div>

              {/* Tarot cards grid */}
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {categoryServices.map((service, i) => (
                  <TarotCard
                    key={service.slug}
                    service={service}
                    index={i}
                    onClick={() => setSelectedSlug(service.slug)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Service detail overlay */}
      <AnimatePresence>
        {selectedSlug && (
          <ServiceDetail
            serviceSlug={selectedSlug}
            onClose={() => setSelectedSlug(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
