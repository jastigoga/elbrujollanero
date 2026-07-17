"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Eye,
  Sparkles,
  Moon,
  Stars,
  Flame,
  Crown,
  Swords,
  Zap,
  Lock,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

/* ── Iconos decorativos por categoría ───────────────────────── */
const DECO_ICONS: Record<string, LucideIcon[]> = {
  amor: [Heart, Moon, Sparkles, Stars, Flame, Crown],
  proteccion: [Shield, Lock, Swords, Zap, Circle, Shield],
  consulta: [Eye, Sparkles, Stars, Moon, Flame, Crown],
};

function getDecoIcon(category: string, index: number): LucideIcon {
  const icons = DECO_ICONS[category] ?? DECO_ICONS.consulta;
  return icons[index % icons.length];
}

export function CategoryCard({
  category,
  label,
  description,
  serviceCount,
  serviceNames,
  index,
  onClick,
}: {
  category: string;
  label: string;
  description: string;
  serviceCount: number;
  serviceNames: string[];
  index: number;
  onClick: () => void;
}) {
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";
  const MainIcon =
    category === "amor"
      ? Heart
      : category === "proteccion"
        ? Shield
        : Eye;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onClick}
    >
      <div
        className="relative h-[420px] w-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ══════ FRENTE ══════ */}
        <div
          className="absolute inset-0 rounded-2xl border-2 p-[1px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
          style={{
            backfaceVisibility: "hidden",
            background: `linear-gradient(160deg, ${accent}60, ${accent}15, ${accent}60)`,
          }}
        >
          <div className="relative h-full overflow-hidden rounded-[14px] bg-base">
            {/* Corner ornaments */}
            <div className="pointer-events-none absolute inset-0 z-10">
              <svg className="absolute left-3 top-3 h-5 w-5 opacity-30" viewBox="0 0 20 20">
                <path d="M0 0L8 0L8 2L2 2L2 8L0 8Z" fill={accent} />
              </svg>
              <svg className="absolute right-3 top-3 h-5 w-5 opacity-30" viewBox="0 0 20 20">
                <path d="M20 0L12 0L12 2L18 2L18 8L20 8Z" fill={accent} />
              </svg>
              <svg className="absolute bottom-3 left-3 h-5 w-5 opacity-30" viewBox="0 0 20 20">
                <path d="M0 20L8 20L8 18L2 18L2 12L0 12Z" fill={accent} />
              </svg>
              <svg className="absolute bottom-3 right-3 h-5 w-5 opacity-30" viewBox="0 0 20 20">
                <path d="M20 20L12 20L12 18L18 18L18 12L20 12Z" fill={accent} />
              </svg>
            </div>

            {/* Inner border frame */}
            <div
              className="absolute inset-4 rounded-xl border opacity-20"
              style={{ borderColor: accent }}
            />

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(ellipse at 50% 40%, ${accent}15 0%, transparent 70%)`,
              }}
            />

            {/* Top line */}
            <div className="mx-auto mt-8 h-px w-16 opacity-30" style={{ background: accent }} />

            {/* Icon */}
            <div className="flex flex-col items-center px-6 pt-6 pb-2">
              <div
                className="mb-5 flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
                  border: `1px solid ${accent}35`,
                  boxShadow: `0 0 30px ${accent}12`,
                }}
              >
                <MainIcon
                  className="h-9 w-9 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: accent }}
                  strokeWidth={1.2}
                />
              </div>

              {/* Star divider */}
              <svg width="14" height="14" viewBox="0 0 14 14" className="mb-4 opacity-40">
                <path
                  d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2Z"
                  fill={accent}
                />
              </svg>

              <h3 className="mb-2 text-center font-display text-xl text-ivory">
                {label}
              </h3>
              <p className="text-center font-voice text-sm text-ivory-dim">
                {description}
              </p>
            </div>

            {/* Bottom stats */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center pb-8">
              <span
                className="rounded-full px-4 py-1.5 font-ui text-xs font-medium"
                style={{ background: `${accent}15`, color: accent }}
              >
                {serviceCount} servicios
              </span>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-12 inset-x-0 flex justify-center">
              <div className="h-px w-16 opacity-30" style={{ background: accent }} />
            </div>

            {/* Shimmer on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background: `linear-gradient(105deg, transparent 35%, ${accent}10 45%, ${accent}18 50%, ${accent}10 55%, transparent 65%)`,
                backgroundSize: "250% 100%",
                animation: "shimmer 3s infinite",
              }}
            />
          </div>
        </div>

        {/* ══════ REVERSO ══════ */}
        <div
          className="absolute inset-0 rounded-2xl border-2 p-[1px] transition-transform duration-700 group-hover:[transform:rotateY(0deg)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(160deg, ${accent}60, ${accent}15, ${accent}60)`,
          }}
        >
          <div className="relative h-full overflow-hidden rounded-[14px] bg-base">
            {/* Inner border */}
            <div
              className="absolute inset-4 rounded-xl border opacity-20"
              style={{ borderColor: accent }}
            />

            {/* Background glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% 30%, ${accent}10 0%, transparent 60%)`,
              }}
            />

            {/* Content */}
            <div className="relative flex h-full flex-col px-6 pt-7 pb-6">
              {/* Header */}
              <div className="mb-4 text-center">
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                >
                  <MainIcon className="h-5 w-5" style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-ivory">{label}</h3>
                <div className="mx-auto mt-2 h-px w-12 opacity-30" style={{ background: accent }} />
              </div>

              {/* Service list */}
              <div className="flex-1 space-y-2 overflow-hidden">
                {serviceNames.map((name, i) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 transition-colors"
                    style={{ background: `${accent}06` }}
                  >
                    <div
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold"
                      style={{ background: `${accent}20`, color: accent }}
                    >
                      {i + 1}
                    </div>
                    <span className="font-ui text-xs text-ivory/80">{name}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-4 text-center">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-ui text-xs font-semibold transition-all duration-200"
                  style={{
                    background: `${accent}20`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  Explorar servicios
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="2" y1="6" x2="10" y2="6" />
                    <polyline points="7,3 10,6 7,9" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
