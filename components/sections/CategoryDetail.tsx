"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { Heart, Shield, Eye } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";
import { getServiceBySlug } from "@/content/services";
import type { Service } from "@/types/service.types";

const CATEGORY_ICONS: Record<string, typeof Heart> = {
  amor: Heart,
  proteccion: Shield,
  consulta: Eye,
};

const CATEGORY_LABEL: Record<string, string> = {
  amor: "Amor y Relaciones",
  proteccion: "Protección y Limpieza",
  consulta: "Consulta y Orientación",
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function ServiceMiniCard({
  service,
  accent,
  onClick,
}: {
  service: Service;
  accent: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      className="group/card relative overflow-hidden rounded-xl border border-border bg-carbon/50 p-5 text-left transition-all duration-200 hover:border-white/15 hover:bg-carbon/70"
      style={{ backdropFilter: "blur(8px)" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Accent left stripe */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] rounded-l-xl"
        style={{ background: accent }}
      />

      <h4 className="mb-1 pl-2 font-ui text-sm font-semibold text-ivory">
        {service.title}
      </h4>
      <p className="mb-3 pl-2 text-xs leading-relaxed text-ivory-dim/80">
        {service.shortDescription.length > 100
          ? service.shortDescription.slice(0, 100) + "..."
          : service.shortDescription}
      </p>

      <div className="flex items-center justify-between pl-2">
        <span className="text-[10px] text-ivory-dim/50">{service.priceNote}</span>
        <span
          className="rounded-full px-2.5 py-0.5 text-[10px] font-medium opacity-0 transition-opacity group-hover/card:opacity-100"
          style={{ background: `${accent}20`, color: accent }}
        >
          Ver más →
        </span>
      </div>
    </motion.button>
  );
}

export function CategoryDetail({
  category,
  services,
  onClose,
  onServiceClick,
}: {
  category: string;
  services: Service[];
  onClose: () => void;
  onServiceClick: (slug: string) => void;
}) {
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";
  const Icon = CATEGORY_ICONS[category] ?? Eye;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-base/90 backdrop-blur-md" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-4xl rounded-3xl border-2 px-1 py-[1px] sm:my-16"
        style={{
          background: `linear-gradient(160deg, ${accent}50, ${accent}10, ${accent}50)`,
        }}
      >
        <div className="relative overflow-hidden rounded-[22px] bg-base">
          {/* Top accent line */}
          <div
            className="h-1 w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />

          {/* Header */}
          <div className="flex items-center gap-5 px-8 pb-4 pt-7">
            <button
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-base/80 text-ivory-dim backdrop-blur transition-all hover:border-white/20 hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: `${accent}15`,
                border: `1px solid ${accent}30`,
              }}
            >
              <Icon className="h-6 w-6" style={{ color: accent }} strokeWidth={1.5} />
            </div>

            <div>
              <p
                className="font-ui text-[10px] uppercase tracking-[3px]"
                style={{ color: accent }}
              >
                {CATEGORY_LABEL[category]}
              </p>
              <h2 className="font-display text-2xl text-ivory md:text-3xl">
                {services.length} servicios disponibles
              </h2>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="mx-8 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: `${accent}20` }} />
            <svg width="8" height="8" viewBox="0 0 8 8">
              <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" fill={accent} />
            </svg>
            <div className="h-px flex-1" style={{ background: `${accent}20` }} />
          </div>

          {/* Services grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-4 p-8 sm:grid-cols-2"
          >
            {services.map((service) => (
              <ServiceMiniCard
                key={service.slug}
                service={service}
                accent={accent}
                onClick={() => onServiceClick(service.slug)}
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <div className="px-8 pb-8 text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero información sobre ${CATEGORY_LABEL[category]}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-3.5 font-ui text-sm font-semibold text-whatsapp-on shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consulta gratuita por WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
