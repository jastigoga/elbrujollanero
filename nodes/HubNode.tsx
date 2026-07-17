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
import type { SiteNodeData } from "@/types/node.types";

const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  moon: Moon,
  shield: Shield,
  star: Star,
  "help-circle": HelpCircle,
  "message-circle": MessageCircle,
};

export function HubNode({ data }: NodeProps & { data: SiteNodeData }) {
  const Icon = ICON_MAP[data.icon ?? "sparkles"] ?? Sparkles;

  return (
    <Link href={data.routeHref ?? "#"} className="block outline-none">
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.15 }}
        className="w-[180px] rounded-xl border border-border bg-gradient-to-b from-elevated to-carbon p-5 text-center shadow-lg transition-colors hover:border-gold/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
      >
        <Handle type="target" position={Position.Top} className="!opacity-0 !pointer-events-none" />

        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Icon className="h-5 w-5 text-gold-soft" strokeWidth={1.5} />
        </div>

        <div className="font-ui text-sm font-semibold text-ivory">{data.label}</div>
        {data.subtitle && (
          <div className="mt-1 text-[11px] text-ivory-dim">{data.subtitle}</div>
        )}

        <Handle type="source" position={Position.Bottom} className="!opacity-0 !pointer-events-none" />
      </motion.div>
    </Link>
  );
}
