import type { Node, Edge } from "@xyflow/react";

/**
 * Niveles de zoom del ZUI (ver Fase 1, seccion 4 - Mapa ZUI)
 * Z0 Universo -> Z1 Constelacion -> Z2 Nodo de servicio -> Z3 Detalle -> Z4 Conversion
 */
export type ZuiLevel = "Z0" | "Z1" | "Z2" | "Z3" | "Z4";

export type SiteNodeKind = "hub" | "service" | "testimonial" | "cta";

export interface SiteNodeData extends Record<string, unknown> {
  kind: SiteNodeKind;
  label: string;
  subtitle?: string;
  level: ZuiLevel;
  routeHref?: string;
  icon?: string;
  category?: "amor" | "proteccion" | "consulta" | "ocultismo";
}

export type SiteNode = Node<SiteNodeData>;
export type SiteEdge = Edge;

export interface SiteFlowGraph {
  nodes: SiteNode[];
  edges: SiteEdge[];
}
