"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { services } from "@/content/services";
import { CategoryCard } from "./CategoryCard";
import { CategoryDetail } from "./CategoryDetail";
import { ServiceDetail } from "./ServiceDetail";

const CATEGORIES = [
  {
    key: "amor",
    label: "Amor y Relaciones",
    description: "Recupera, fortalece y protege tus relaciones de pareja",
  },
  {
    key: "proteccion",
    label: "Protección y Limpieza",
    description: "Elimina energías negativas y protege tu vida entera",
  },
  {
    key: "consulta",
    label: "Consulta y Orientación",
    description: "Recibe claridad y guía espiritual para tus decisiones",
  },
] as const;

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="servicios" className="relative py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(201,162,75,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Nuestros servicios
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Elige tu camino
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Tres cartas del tarot revelan los caminos espirituales. Pasa el mouse
            para descubrir, haz clic para entrar.
          </p>
        </div>

        {/* 3 Tarot cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {CATEGORIES.map((cat, i) => {
            const catServices = services.filter((s) => s.category === cat.key);
            return (
              <CategoryCard
                key={cat.key}
                category={cat.key}
                label={cat.label}
                description={cat.description}
                serviceCount={catServices.length}
                serviceNames={catServices.map((s) => s.title)}
                index={i}
                onClick={() => setSelectedCategory(cat.key)}
              />
            );
          })}
        </div>
      </div>

      {/* Category detail overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <CategoryDetail
            category={selectedCategory}
            services={services.filter((s) => s.category === selectedCategory)}
            onClose={() => setSelectedCategory(null)}
            onServiceClick={(slug) => {
              setSelectedCategory(null);
              setTimeout(() => setSelectedService(slug), 300);
            }}
          />
        )}
      </AnimatePresence>

      {/* Individual service detail overlay */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetail
            serviceSlug={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
