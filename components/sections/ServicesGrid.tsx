"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Shield, Eye, ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import type { Service } from "@/types/service.types";

const CATEGORIES = [
  {
    key: "amor",
    label: "Amor y Relaciones",
    Icon: Heart,
    accent: "#FB7185",
    description: "Recupera, fortalece y protege tus relaciones de pareja",
    bgGradient: "from-rose-950/40 via-transparent to-transparent",
  },
  {
    key: "proteccion",
    label: "Protección y Limpieza",
    Icon: Shield,
    accent: "#38BDF8",
    description: "Elimina energías negativas y protege tu vida entera",
    bgGradient: "from-sky-950/40 via-transparent to-transparent",
  },
  {
    key: "consulta",
    label: "Consulta y Orientación",
    Icon: Eye,
    accent: "#FBBF24",
    description: "Recibe claridad y guía espiritual para tus decisiones",
    bgGradient: "from-amber-950/40 via-transparent to-transparent",
  },
] as const;

function CategoryCard({
  category,
  isOpen,
  onToggle,
  items,
}: {
  category: (typeof CATEGORIES)[number];
  isOpen: boolean;
  onToggle: () => void;
  items: Service[];
}) {
  const { label, Icon, accent, description, bgGradient } = category;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Category header */}
      <button
        onClick={onToggle}
        className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-white/15 bg-gradient-to-br " + bgGradient
            : "border-border bg-carbon/60 hover:border-white/10 hover:bg-carbon/80"
        }`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-5 px-7 py-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
              boxShadow: isOpen ? `0 0 24px ${accent}20` : "none",
            }}
          >
            <Icon className="h-6 w-6" style={{ color: accent }} strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-display text-lg text-ivory">{label}</h3>
            <p className="mt-0.5 font-ui text-sm text-ivory-dim">{description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 font-ui text-xs font-medium"
              style={{ background: `${accent}15`, color: accent }}
            >
              {items.length} {items.length === 1 ? "servicio" : "servicios"}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5 text-ivory-dim" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Services list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {items.map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="group/card block rounded-xl border border-border bg-base/60 p-5 transition-all duration-200 hover:border-white/15 hover:bg-elevated/80"
                    style={{ backdropFilter: "blur(8px)" }}
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="font-ui text-sm font-semibold text-ivory transition-colors group-hover/card:text-ivory">
                        {service.title}
                      </h4>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium opacity-0 transition-opacity group-hover/card:opacity-100"
                        style={{ background: `${accent}20`, color: accent }}
                      >
                        Ver →
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-ivory-dim/80">
                      {service.shortDescription.length > 90
                        ? service.shortDescription.slice(0, 90) + "..."
                        : service.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] text-ivory-dim/50">{service.priceNote}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesGrid() {
  const [openCategory, setOpenCategory] = useState<string | null>("amor");

  const itemsByKey = {
    amor: services.filter((s) => s.category === "amor"),
    proteccion: services.filter((s) => s.category === "proteccion"),
    consulta: services.filter((s) => s.category === "consulta"),
  };

  return (
    <section id="servicios" className="relative py-24">
      {/* Section background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,162,75,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Nuestros servicios
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Caminos espirituales
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            11 servicios sagrados organizados por tu necesidad. Cada uno con
            diagnóstico gratuito y seguimiento personalizado.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.key}
              category={cat}
              isOpen={openCategory === cat.key}
              onToggle={() =>
                setOpenCategory((prev) => (prev === cat.key ? null : cat.key))
              }
              items={itemsByKey[cat.key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
