"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion, AnimatePresence } from "framer-motion";
import { useZoomLevel, getZoomTier, type ZoomTier } from "@/hooks/useZoomLevel";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";
import { getServiceBySlug } from "@/content/services";
import type { SiteNodeData } from "@/types/node.types";

function ServiceContent({ data, tier, accent }: { data: SiteNodeData; tier: ZoomTier; accent: string }) {
  const service = getServiceBySlug(data.routeHref?.split("/").pop() ?? "");

  return (
    <>
      <div className="px-3 py-3">
        <div className="font-ui text-[12px] font-semibold text-ivory leading-tight">
          {data.label}
        </div>

        <AnimatePresence>
          {tier !== "compact" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {data.subtitle && (
                <div className="mt-1 text-[10px] text-ivory-dim">{data.subtitle}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {tier === "expanded" && service?.shortDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mt-2 text-[9px] leading-relaxed text-ivory-dim/80">
                {service.shortDescription.length > 80
                  ? service.shortDescription.slice(0, 80) + "..."
                  : service.shortDescription}
              </p>
              <div
                className="mt-2 inline-block rounded-full px-2 py-0.5 text-[8px] font-medium"
                style={{ background: `${accent}20`, color: accent }}
              >
                Explorar →
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export function ServiceNode({ data }: NodeProps & { data: SiteNodeData }) {
  const zoom = useZoomLevel();
  const tier = getZoomTier(zoom);
  const accent = CATEGORY_COLORS[data.category ?? ""] ?? "#52525B";

  const widthMap: Record<ZoomTier, string> = {
    compact: "w-[120px]",
    medium: "w-[150px]",
    expanded: "w-[190px]",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className={`${widthMap[tier]} overflow-hidden rounded-xl text-center transition-all duration-300`}
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(var(--glass-blur))",
        WebkitBackdropFilter: "blur(var(--glass-blur))",
        border: "1px solid var(--glass-border)",
        borderLeftWidth: 3,
        borderLeftColor: accent,
        boxShadow: tier === "expanded" ? `0 0 16px ${accent}15` : "var(--shadow-sm)",
      }}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0 !pointer-events-none" />
      <ServiceContent data={data} tier={tier} accent={accent} />
      <Handle type="source" position={Position.Bottom} className="!opacity-0 !pointer-events-none" />
    </motion.div>
  );
}
