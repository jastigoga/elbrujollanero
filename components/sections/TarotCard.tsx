"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Eye,
  Sparkles,
  Moon,
  Stars,
  Lock,
  Flame,
  Zap,
  Crown,
  Swords,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";
import type { Service } from "@/types/service.types";

/* ── Iconos por categoría ────────────────────────────────────── */
const CATEGORY_ICONS: Record<string, LucideIcon[]> = {
  amor: [Heart, Moon, Sparkles, Stars, Flame, Crown],
  proteccion: [Shield, Lock, Swords, Zap, Circle, Shield],
  consulta: [Eye, Sparkles, Stars, Moon, Flame, Crown],
};

function getCategoryIcon(category: string, slug: string): LucideIcon {
  const icons = CATEGORY_ICONS[category] ?? CATEGORY_ICONS.consulta;
  const index =
    Math.abs(
      slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0),
    ) % icons.length;
  return icons[index];
}

/* ── TarotCard ───────────────────────────────────────────────── */
export function TarotCard({
  service,
  index,
  onClick,
}: {
  service: Service;
  index: number;
  onClick: () => void;
}) {
  const accent = CATEGORY_COLORS[service.category] ?? "#C9A24B";
  const Icon = getCategoryIcon(service.category, service.slug);

  const CATEGORY_LABEL: Record<string, string> = {
    amor: "Amor",
    proteccion: "Protección",
    consulta: "Consulta",
  };

  return (
    <motion.button
      layout
      layoutId={`card-${service.slug}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        layout: { type: "spring", damping: 28, stiffness: 200 },
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group relative mx-auto w-full max-w-[220px] cursor-pointer"
    >
      {/* Tarot card frame */}
      <div
        className="relative overflow-hidden rounded-2xl border-2 p-[1px]"
        style={{
          background: `linear-gradient(160deg, ${accent}50, ${accent}15, ${accent}50)`,
        }}
      >
        {/* Inner card */}
        <div className="relative overflow-hidden rounded-[14px] bg-base">
          {/* Corner ornaments */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* Top-left */}
            <svg className="absolute left-2 top-2 h-5 w-5 opacity-30" viewBox="0 0 20 20">
              <path d="M0 0L8 0L8 2L2 2L2 8L0 8Z" fill={accent} />
            </svg>
            {/* Top-right */}
            <svg className="absolute right-2 top-2 h-5 w-5 opacity-30" viewBox="0 0 20 20">
              <path d="M20 0L12 0L12 2L18 2L18 8L20 8Z" fill={accent} />
            </svg>
            {/* Bottom-left */}
            <svg className="absolute bottom-2 left-2 h-5 w-5 opacity-30" viewBox="0 0 20 20">
              <path d="M0 20L8 20L8 18L2 18L2 12L0 12Z" fill={accent} />
            </svg>
            {/* Bottom-right */}
            <svg className="absolute bottom-2 right-2 h-5 w-5 opacity-30" viewBox="0 0 20 20">
              <path d="M20 20L12 20L12 18L18 18L18 12L20 12Z" fill={accent} />
            </svg>
          </div>

          {/* Inner border frame */}
          <div
            className="absolute inset-3 rounded-lg border opacity-20"
            style={{ borderColor: accent }}
          />

          {/* Background glow on hover */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${accent}12 0%, transparent 70%)`,
            }}
          />

          {/* Top decorative line */}
          <div className="mx-auto mt-5 h-px w-12 opacity-30" style={{ background: accent }} />

          {/* Icon area */}
          <div className="relative flex flex-col items-center px-5 pt-5 pb-2">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
                border: `1px solid ${accent}30`,
                boxShadow: `0 0 20px ${accent}10`,
              }}
            >
              <Icon
                className="h-7 w-7 transition-all duration-300 group-hover:scale-110"
                style={{ color: accent }}
                strokeWidth={1.2}
              />
            </motion.div>

            {/* Decorative star */}
            <svg width="12" height="12" viewBox="0 0 12 12" className="mb-3 opacity-40">
              <path
                d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z"
                fill={accent}
              />
            </svg>

            {/* Service title */}
            <h3 className="mb-1 text-center font-display text-[13px] leading-tight text-ivory">
              {service.title}
            </h3>

            {/* Category badge */}
            <span
              className="mt-1 rounded-full px-2.5 py-0.5 font-ui text-[9px] font-medium uppercase tracking-wider"
              style={{ background: `${accent}15`, color: accent }}
            >
              {CATEGORY_LABEL[service.category]}
            </span>
          </div>

          {/* Price note */}
          <div className="px-5 pb-4 pt-2 text-center">
            <p className="text-[10px] text-ivory-dim/60">{service.priceNote}</p>
          </div>

          {/* Bottom decorative line */}
          <div className="mx-auto mb-5 h-px w-12 opacity-30" style={{ background: accent }} />

          {/* Shimmer overlay */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${accent}08 45%, ${accent}12 50%, ${accent}08 55%, transparent 60%)`,
              backgroundSize: "200% 100%",
              animation: "shimmer 2.5s infinite",
            }}
          />
        </div>
      </div>
    </motion.button>
  );
}
