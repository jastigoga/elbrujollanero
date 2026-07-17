"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
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

export function ZuiCanvas() {
  const { nodes, edges } = siteFlow;

  return (
    <div
      role="application"
      aria-label="Mapa de navegacion del sitio"
      className="h-[400px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden rounded-card border border-border bg-base"
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnScroll
          zoomOnScroll
          fitView
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#2A2A2D" gap={28} size={1} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
