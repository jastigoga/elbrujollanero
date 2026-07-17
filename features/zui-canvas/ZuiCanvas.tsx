"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  MiniMap,
  useReactFlow,
  type NodeTypes,
  type NodeMouseHandler,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { hubNodes, serviceNodes, siteFlow, CATEGORY_COLORS } from "@/flows/siteFlow.config";
import { HubNode } from "@/nodes/HubNode";
import { ServiceNode } from "@/nodes/ServiceNode";
import { ServiceDetailPanel } from "@/components/sections/ServiceDetailPanel";

const nodeTypes: NodeTypes = {
  hub: HubNode,
  service: ServiceNode,
};

/* ── Colores glow por categoría ────────────────────────────────── */
const GLOW_BY_CATEGORY: Record<string, string> = {
  amor: "rgba(251, 113, 133, 0.45)",
  proteccion: "rgba(56, 189, 248, 0.45)",
  consulta: "rgba(251, 191, 36, 0.45)",
};
const GLOW_HUB = "rgba(201, 162, 75, 0.40)";

/* ── Zoom controls ────────────────────────────────────────────── */
function ZoomControls() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  return (
    <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-1 rounded-xl border border-border bg-base/90 p-1.5 backdrop-blur">
      <button
        onClick={() => zoomIn({ duration: 200 })}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
        aria-label="Acercar"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="7" y1="2" x2="7" y2="12" />
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      </button>
      <button
        onClick={() => zoomOut({ duration: 200 })}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
        aria-label="Alejar"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      </button>
      <div className="mx-auto my-0.5 h-px w-5 bg-border" />
      <button
        onClick={() => fitView({ padding: 0.15, duration: 400 })}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-ivory-dim transition-colors hover:bg-elevated hover:text-ivory"
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
      className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 cursor-pointer rounded-full border border-border bg-base/80 px-5 py-2 text-[11px] text-ivory-dim backdrop-blur transition-opacity duration-500 hover:text-ivory"
      onClick={() => setVisible(false)}
    >
      Scroll para zoom · Arrastra para mover · Click en un nodo para explorar
    </div>
  );
}

/* ── Botón de volver ──────────────────────────────────────────── */
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-20 z-20 flex items-center gap-2 rounded-full border border-border bg-base/80 px-5 py-2 text-sm text-ivory-dim backdrop-blur transition-all duration-200 hover:border-gold/50 hover:text-ivory"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="7" x2="2" y2="7" />
        <polyline points="7,2 2,7 7,12" />
      </svg>
      Volver al Inicio
    </button>
  );
}

/* ── Canvas interior ──────────────────────────────────────────── */
function CanvasInner() {
  const router = useRouter();
  const { fitView, setNodes, setEdges } = useReactFlow();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  /* ── Nodos dinámicos según layer activo ─────────────────────── */
  const dynamicNodes: Node[] = useMemo(() => {
    return siteFlow.nodes.map((node) => {
      const isHub = node.type === "hub";
      const isService = node.type === "service";

      /* Los hubs siempre visibles */
      if (isHub) {
        return { ...node, hidden: false };
      }

      /* Los services solo visibles cuando el layer "servicios" está activo */
      if (isService) {
        return { ...node, hidden: activeLayer !== "servicios" };
      }

      return { ...node, hidden: false };
    });
  }, [activeLayer]);

  /* ── Aristas dinámicas con glow en hover ────────────────────── */
  const dynamicEdges: Edge[] = useMemo(() => {
    return siteFlow.edges.map((edge) => {
      const isConnected =
        hoveredNodeId &&
        (edge.source === hoveredNodeId || edge.target === hoveredNodeId);

      if (isConnected) {
        const sourceNode = siteFlow.nodes.find((n) => n.id === edge.source);
        const targetNode = siteFlow.nodes.find((n) => n.id === edge.target);
        const category =
          (sourceNode?.data as Record<string, unknown>)?.category as string | undefined ??
          (targetNode?.data as Record<string, unknown>)?.category as string | undefined;
        const glowColor =
          (category && GLOW_BY_CATEGORY[category]) ?? GLOW_HUB;

        return {
          ...edge,
          style: {
            ...edge.style,
            stroke: glowColor,
            strokeWidth: 2.5,
            opacity: 0.9,
            filter: `drop-shadow(0 0 8px ${glowColor})`,
          },
        };
      }

      /* Ocultar service edges cuando el layer no está activo */
      const isServiceEdge =
        edge.source === "servicios" || edge.target.startsWith("rel-");
      if (isServiceEdge && activeLayer !== "servicios") {
        return { ...edge, hidden: true };
      }

      return { ...edge, hidden: false };
    });
  }, [hoveredNodeId, activeLayer]);

  /* ── Click en nodo ──────────────────────────────────────────── */
  const handleNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      const nodeData = node.data as Record<string, unknown>;

      /* Hub "servicios" → layer navigation */
      if (node.id === "servicios" && activeLayer !== "servicios") {
        setActiveLayer("servicios");
        setTimeout(() => {
          fitView({
            nodes: [{ id: "servicios" }, ...serviceNodes.map((s) => ({ id: s.id }))],
            padding: 0.2,
            duration: 800,
          });
        }, 60);
        return;
      }

      /* Hub "inicio" → volver al overview */
      if (node.id === "inicio") {
        setActiveLayer(null);
        setHoveredNodeId(null);
        setTimeout(() => {
          fitView({ padding: 0.15, duration: 600 });
        }, 60);
        return;
      }

      /* Cualquier otro hub → navegar a la página */
      if (node.type === "hub") {
        const href = nodeData.routeHref as string;
        if (href) router.push(href);
        return;
      }

      /* Service node → abrir panel detalle */
      if (node.type === "service") {
        const slug = nodeData.routeHref?.toString().split("/").pop();
        if (slug) setSelectedService(slug);
      }
    },
    [activeLayer, fitView, router],
  );

  /* ── Hover en nodo → glow en aristas ────────────────────────── */
  const handleNodeEnter: NodeMouseHandler = useCallback((_, node) => {
    setHoveredNodeId(node.id);
  }, []);

  const handleNodeLeave: NodeMouseHandler = useCallback(() => {
    setHoveredNodeId(null);
  }, []);

  const handleClose = useCallback(() => setSelectedService(null), []);

  const handleBack = useCallback(() => {
    setActiveLayer(null);
    setHoveredNodeId(null);
    setTimeout(() => {
      fitView({ padding: 0.15, duration: 600 });
    }, 60);
  }, [fitView]);

  return (
    <>
      <ReactFlow
        nodes={dynamicNodes}
        edges={dynamicEdges}
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
        onNodeClick={handleNodeClick}
        onNodeMouseEnter={handleNodeEnter}
        onNodeMouseLeave={handleNodeLeave}
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
          className="!rounded-xl !border-border !bg-carbon"
          style={{ width: 170, height: 120 }}
        />
      </ReactFlow>
      <ZoomControls />
      <InteractionHint />
      {activeLayer && <BackButton onClick={handleBack} />}
      <ServiceDetailPanel serviceSlug={selectedService} onClose={handleClose} />
    </>
  );
}

/* ── Export ───────────────────────────────────────────────────── */
export function ZuiCanvas() {
  return (
    <div
      role="application"
      aria-label="Mapa de navegación del sitio. Use los controles de zoom o scroll para explorar. Haga click en un nodo de servicio para ver detalles."
      className="zui-canvas-bg relative h-screen w-screen overflow-hidden"
    >
      <ReactFlowProvider>
        <CanvasInner />
      </ReactFlowProvider>
    </div>
  );
}
