"use client";

import Link from "next/link";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  Shield,
  Star,
  HelpCircle,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useZoomLevel, getZoomTier, type ZoomTier } from "@/hooks/useZoomLevel";
import type { SiteNodeData } from "@/types/node.types";

const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  moon: Moon,
  shield: Shield,
  star: Star,
  "help-circle": HelpCircle,
  "message-circle": MessageCircle,
};

function HubContent({ data, tier }: { data: SiteNodeData; tier: ZoomTier }) {
  const Icon = ICON_MAP[data.icon ?? "sparkles"] ?? Sparkles;

  return (
    <>
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
        <Icon className="h-5 w-5 text-gold-soft" strokeWidth={1.5} />
      </div>
      <div className="font-ui text-sm font-semibold text-ivory">{data.label}</div>
      {tier !== "compact" && data.subtitle && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1 text-[11px] text-ivory-dim"
        >
          {data.subtitle}
        </motion.div>
      )}
    </>
  );
}

export function HubNode({ data }: NodeProps & { data: SiteNodeData }) {
  const zoom = useZoomLevel();
  const tier = getZoomTier(zoom);

  const widthClass = tier === "compact" ? "w-[150px]" : "w-[180px]";

  return (
    <Link href={data.routeHref ?? "#"} className="block outline-none">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.15 }}
        className={`${widthClass} rounded-xl p-4 text-center transition-all duration-200`}
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(var(--glass-blur))",
          WebkitBackdropFilter: "blur(var(--glass-blur))",
          border: "1px solid var(--glass-border)",
          boxShadow: "var(--shadow-md), var(--shadow-glow-gold)",
        }}
      >
        <Handle type="target" position={Position.Top} className="!opacity-0 !pointer-events-none" />
        <HubContent data={data} tier={tier} />
        <Handle type="source" position={Position.Bottom} className="!opacity-0 !pointer-events-none" />
      </motion.div>
    </Link>
  );
}
