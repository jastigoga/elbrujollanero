"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Eye,
  Moon,
  Stars,
  Flame,
  Crown,
  Swords,
  Zap,
  Lock,
  Circle,
  Sparkles,
  Skull,
  Hexagon,
  type LucideIcon,
} from "lucide-react";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

const DECO_ICONS: Record<string, LucideIcon[]> = {
  amor: [Heart, Moon, Sparkles, Stars, Flame, Crown],
  proteccion: [Shield, Lock, Swords, Zap, Circle, Shield],
  consulta: [Eye, Sparkles, Stars, Moon, Flame, Crown],
  ocultismo: [Skull, Moon, Hexagon, Flame, Stars, Crown],
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
  isZooming,
  onClick,
}: {
  category: string;
  label: string;
  description: string;
  serviceCount: number;
  serviceNames: string[];
  index: number;
  isZooming: boolean;
  onClick: () => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const touchUsed = useRef(false);
  const accent = CATEGORY_COLORS[category] ?? "#C9A24B";
  const MainIcon =
    category === "amor"
      ? Heart
      : category === "proteccion"
        ? Shield
        : category === "ocultismo"
          ? Skull
          : Eye;

  const handleTouchStart = useCallback(() => {
    touchUsed.current = true;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchUsed.current) return;
      e.preventDefault();
      setFlipped((prev) => !prev);
      touchUsed.current = false;
    },
    [],
  );

  const handleClick = useCallback(() => {
    if (touchUsed.current) return;
    onClick();
  }, [onClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full"
        style={{
          height: 420,
          transformStyle: "preserve-3d",
          transition: isZooming
            ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isZooming ? "scale(1.3)" : undefined,
        }}
        onMouseEnter={() => {
          if (!touchUsed.current) setFlipped(true);
        }}
        onMouseLeave={() => {
          if (!touchUsed.current) setFlipped(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* ══════ FRENTE ══════ */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="relative h-full rounded-2xl border-2 p-[1px]"
            style={{
              background: `linear-gradient(160deg, ${accent}60, ${accent}15, ${accent}60)`,
            }}
          >
            <div
              className="relative overflow-hidden rounded-[14px] bg-base"
              style={{ height: "calc(100% - 2px)" }}
            >
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

              <div
                className="absolute inset-4 rounded-xl border opacity-20"
                style={{ borderColor: accent }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 50% 40%, ${accent}15 0%, transparent 70%)`,
                  opacity: 0.3,
                }}
              />

              <div className="mx-auto mt-8 h-px w-16 opacity-30" style={{ background: accent }} />

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
                    className="h-9 w-9"
                    style={{ color: accent }}
                    strokeWidth={1.2}
                  />
                </div>

                <svg width="14" height="14" viewBox="0 0 14 14" className="mb-4 opacity-40">
                  <path d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2Z" fill={accent} />
                </svg>

                <h3 className="mb-2 font-display text-xl text-ivory">{label}</h3>
                <p className="text-center font-voice text-sm text-ivory-dim">{description}</p>
              </div>

              <div className="absolute bottom-0 inset-x-0 flex items-center justify-center pb-8">
                <span
                  className="rounded-full px-4 py-1.5 font-ui text-xs font-medium"
                  style={{ background: `${accent}15`, color: accent }}
                >
                  {serviceCount} servicios
                </span>
              </div>

              <div className="absolute bottom-12 inset-x-0 flex justify-center">
                <div className="h-px w-16 opacity-30" style={{ background: accent }} />
              </div>
            </div>
          </div>
        </div>

        {/* ══════ REVERSO ══════ */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="relative h-full rounded-2xl border-2 p-[1px]"
            style={{
              background: `linear-gradient(160deg, ${accent}60, ${accent}15, ${accent}60)`,
            }}
          >
            <div
              className="relative overflow-hidden rounded-[14px] bg-base"
              style={{ height: "calc(100% - 2px)" }}
            >
              <div
                className="absolute inset-4 rounded-xl border opacity-20"
                style={{ borderColor: accent }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 50% 30%, ${accent}10 0%, transparent 60%)`,
                }}
              />

              <div className="relative flex h-full flex-col px-5 pt-6 pb-5">
                <div className="mb-4 text-center">
                  <div
                    className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                  >
                    <MainIcon className="h-4 w-4" style={{ color: accent }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base text-ivory">{label}</h3>
                  <div className="mx-auto mt-1.5 h-px w-10 opacity-30" style={{ background: accent }} />
                </div>

                <div className="flex-1 space-y-1.5 overflow-hidden">
                  {serviceNames.map((name, i) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-md px-2.5 py-1.5"
                      style={{ background: `${accent}06` }}
                    >
                      <span
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                        style={{ background: `${accent}20`, color: accent }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-ui text-[11px] text-ivory/80">{name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 text-center">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 font-ui text-[10px] font-semibold"
                    style={{
                      background: `${accent}20`,
                      color: accent,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    Entrar
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="2" y1="6" x2="10" y2="6" />
                      <polyline points="7,3 10,6 7,9" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
