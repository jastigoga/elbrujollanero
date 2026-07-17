"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  MiniMap,
  useReactFlow,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { siteFlow } from "@/flows/siteFlow.config";
import { HubNode } from "@/nodes/HubNode";
import { ServiceNode } from "@/nodes/ServiceNode";

const nodeTypes: NodeTypes = {
  hub: HubNode,
  service: ServiceNode,
};

/* ── Zoom controls ────────────────────────────────────────────── */
function ZoomControls() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  return (
    <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-1 rounded-lg border border-border bg-base/90 p-1 backdrop-blur">
      <button
        onClick={() => zoomIn({ duration: 200 })}
        className="flex h-8 w-8 items-center justify-center rounded-md text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
        aria-label="Acercar"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="7" y1="2" x2="7" y2="12" />
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      </button>
      <button
        onClick={() => zoomOut({ duration: 200 })}
        className="flex h-8 w-8 items-center justify-center rounded-md text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
        aria-label="Alejar"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      </button>
      <div className="mx-auto my-0.5 h-px w-5 bg-border" />
      <button
        onClick={() => fitView({ padding: 0.15, duration: 300 })}
        className="flex h-8 w-8 items-center justify-center rounded-md text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
        aria-label="Ajustar vista"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="1,5 1,1 5,1" />
          <polyline points="9,1 13,1 13,5" />
          <polyline points="13,9 13,13 9,13" />
          <polyline points="5,13 1,13 1,9" />
        </svg>
      </button>
    </div>
  );
}

/* ── Hint de interacción ──────────────────────────────────────── */
function InteractionHint() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full border border-border bg-base/80 px-4 py-1.5 text-[11px] text-ivory-dim backdrop-blur transition-opacity duration-500 hover:text-ivory"
      onClick={() => setVisible(false)}
    >
      Scroll para zoom · Arrastra para mover · Click para explorar
    </div>
  );
}

/* ── Canvas interior ──────────────────────────────────────────── */
function CanvasInner() {
  return (
    <>
      <ReactFlow
        nodes={siteFlow.nodes}
        edges={siteFlow.edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll
        zoomOnScroll
        minZoom={0.15}
        maxZoom={2}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#27272A" gap={32} size={1} />
        <MiniMap
          nodeColor={(node) => {
            if (node.type === "hub") return "#3F3F46";
            const cat = (node.data as Record<string, unknown>)?.category;
            if (cat === "amor") return "#FB7185";
            if (cat === "proteccion") return "#38BDF8";
            if (cat === "consulta") return "#FBBF24";
            return "#52525B";
          }}
          maskColor="rgba(0,0,0,0.65)"
          pannable
          zoomable
          className="!rounded-lg !border-border !bg-carbon"
          style={{ width: 160, height: 110 }}
        />
      </ReactFlow>
      <ZoomControls />
      <InteractionHint />
    </>
  );
}

/* ── Export ───────────────────────────────────────────────────── */
export function ZuiCanvas() {
  return (
    <div
      role="application"
      aria-label="Mapa de navegación del sitio. Use los controles de zoom o scroll para explorar."
      className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full overflow-hidden rounded-card border border-border bg-base"
    >
      <ReactFlowProvider>
        <CanvasInner />
      </ReactFlowProvider>
    </div>
  );
}
