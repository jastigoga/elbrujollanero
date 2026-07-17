"use client";

import Link from "next/link";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import type { SiteNodeData } from "@/types/node.types";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";

export function ServiceNode({ data }: NodeProps & { data: SiteNodeData }) {
  const accent = CATEGORY_COLORS[data.category ?? ""] ?? "#52525B";

  return (
    <Link href={data.routeHref ?? "#"} className="block outline-none">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
        className="w-[150px] overflow-hidden rounded-xl border border-border bg-carbon text-center shadow-md transition-all duration-200 hover:border-gold/60 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
        style={{ borderLeftWidth: 3, borderLeftColor: accent }}
      >
        <Handle type="target" position={Position.Top} className="!opacity-0 !pointer-events-none" />

        <div className="px-3 py-3">
          <div className="font-ui text-[12px] font-semibold text-ivory leading-tight">{data.label}</div>
          {data.subtitle && (
            <div className="mt-1 text-[10px] text-ivory-dim">{data.subtitle}</div>
          )}
        </div>

        <Handle type="source" position={Position.Bottom} className="!opacity-0 !pointer-events-none" />
      </motion.div>
    </Link>
  );
}
