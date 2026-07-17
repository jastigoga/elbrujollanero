"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { nodeHover } from "@/animations/variants";
import type { SiteNodeData } from "@/types/node.types";

/**
 * Nodo de nivel Z0/Z1. Sin handles visibles ni editables: los Handle de XYFlow
 * se usan solo para que los edges se anclen correctamente, quedan invisibles
 * (opacity 0, pointer-events none) para que nunca parezca un editor de diagramas.
 */
export function HubNode({ data }: NodeProps & { data: SiteNodeData }) {
  return (
    <motion.div
      variants={nodeHover}
      initial="rest"
      whileHover="hover"
      className="w-[170px] rounded-card border border-border bg-gradient-to-b from-carbon/90 to-elevated/90 p-4 text-center"
    >
      <Handle type="target" position={Position.Top} className="opacity-0 pointer-events-none" />
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-gold/10 font-display text-sm text-gold-soft">
        {data.icon?.charAt(0).toUpperCase() ?? "•"}
      </div>
      <div className="font-ui text-[13px] font-semibold text-ivory">{data.label}</div>
      {data.subtitle && <div className="mt-1 text-[11px] text-ivory-dim">{data.subtitle}</div>}
      <Handle type="source" position={Position.Bottom} className="opacity-0 pointer-events-none" />
    </motion.div>
  );
}
