"use client";

import Link from "next/link";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { nodeHover } from "@/animations/variants";
import type { SiteNodeData } from "@/types/node.types";

/**
 * Nodo de servicio (Z1 -> Z2). Al hacer click/tap navega a la ruta SSR real
 * del servicio (ver Fase 1, seccion 2.2 - arquitectura de doble capa),
 * lo que mantiene el contenido indexable incluso fuera del canvas.
 */
export function ServiceNode({ data }: NodeProps & { data: SiteNodeData }) {
  return (
    <motion.div variants={nodeHover} initial="rest" whileHover="hover">
      <Link
        href={data.routeHref ?? "#"}
        className="block w-[150px] rounded-card border border-border bg-carbon p-3 text-center transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
      >
        <Handle type="target" position={Position.Top} className="opacity-0 pointer-events-none" />
        <div className="font-ui text-[12px] font-semibold text-ivory">{data.label}</div>
        {data.subtitle && <div className="mt-1 text-[10px] text-gold-soft">{data.subtitle}</div>}
        <Handle type="source" position={Position.Bottom} className="opacity-0 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
