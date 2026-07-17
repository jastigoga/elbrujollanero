"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { services } from "@/content/services";
import { CategoryCard } from "./CategoryCard";
import { CategoryDetail } from "./CategoryDetail";
import { ServiceDetail } from "./ServiceDetail";
import { TunnelAnimation } from "./TunnelAnimation";

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
  {
    key: "ocultismo",
    label: "Ocultismo y Magia Ceremonial",
    description: "Dominio ancestral de los secretos ocultos y protección espiritual",
  },
] as const;

export function ServicesGrid() {
  const [tunnelCategory, setTunnelCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleCardClick = useCallback((category: string) => {
    setTunnelCategory(category);
  }, []);

  const handleTunnelDone = useCallback(() => {
    const cat = tunnelCategory;
    setTunnelCategory(null);
    if (cat) setSelectedCategory(cat);
  }, [tunnelCategory]);

  return (
    <section id="servicios" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(201,162,75,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Nuestros servicios
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Elige tu camino
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Cuatro cartas del tarot revelan los caminos espirituales. Pasa el mouse
            para descubrir, haz clic para entrar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
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
                isZooming={tunnelCategory === cat.key}
                onClick={() => handleCardClick(cat.key)}
              />
            );
          })}
        </div>
      </div>

      {/* Tunnel animation */}
      <AnimatePresence>
        {tunnelCategory && (
          <TunnelAnimation
            category={tunnelCategory}
            onDone={handleTunnelDone}
          />
        )}
      </AnimatePresence>

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
