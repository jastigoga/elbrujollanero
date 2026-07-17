import type { SiteFlowGraph, SiteNode, SiteEdge } from "@/types/node.types";
import { services } from "@/content/services";

const HUB_POSITIONS: Record<string, { x: number; y: number }> = {
  inicio: { x: 0, y: 0 },
  servicios: { x: -320, y: -220 },
  nosotros: { x: 320, y: -220 },
  testimonios: { x: -360, y: 240 },
  faq: { x: 0, y: 320 },
  contacto: { x: 360, y: 240 },
};

const hubNodes: SiteNode[] = [
  {
    id: "inicio",
    type: "hub",
    position: HUB_POSITIONS.inicio,
    data: { kind: "hub", label: "Inicio", subtitle: "El punto de partida", level: "Z0", routeHref: "/", icon: "sparkles" },
  },
  {
    id: "servicios",
    type: "hub",
    position: HUB_POSITIONS.servicios,
    data: { kind: "hub", label: "Servicios", subtitle: "11 caminos disponibles", level: "Z0", routeHref: "/servicios", icon: "moon" },
  },
  {
    id: "nosotros",
    type: "hub",
    position: HUB_POSITIONS.nosotros,
    data: { kind: "hub", label: "Quienes somos", subtitle: "Autoridad y trayectoria", level: "Z0", routeHref: "/nosotros", icon: "shield" },
  },
  {
    id: "testimonios",
    type: "hub",
    position: HUB_POSITIONS.testimonios,
    data: { kind: "hub", label: "Casos reales", subtitle: "Testimonios verificados", level: "Z0", routeHref: "/#testimonios", icon: "star" },
  },
  {
    id: "faq",
    type: "hub",
    position: HUB_POSITIONS.faq,
    data: { kind: "hub", label: "Preguntas frecuentes", subtitle: "Resuelve tus dudas", level: "Z0", routeHref: "/faq", icon: "help-circle" },
  },
  {
    id: "contacto",
    type: "hub",
    position: HUB_POSITIONS.contacto,
    data: { kind: "hub", label: "Contacto", subtitle: "Habla ahora", level: "Z0", routeHref: "/contacto", icon: "message-circle" },
  },
];

const serviceNodes: SiteNode[] = services.map((service, index) => {
  const angle = (index / services.length) * Math.PI * 2;
  const radius = 260;
  return {
    id: service.slug,
    type: "service",
    position: {
      x: HUB_POSITIONS.servicios.x + Math.cos(angle) * radius,
      y: HUB_POSITIONS.servicios.y + Math.sin(angle) * radius,
    },
    data: {
      kind: "service",
      label: service.title,
      subtitle: service.priceNote,
      level: "Z1",
      routeHref: `/servicios/${service.slug}`,
    },
  };
});

const hubEdges: SiteEdge[] = hubNodes
  .filter((n) => n.id !== "inicio")
  .map((n) => ({
    id: `inicio-${n.id}`,
    source: "inicio",
    target: n.id,
    type: "default",
    style: { stroke: "var(--border-strong)", strokeWidth: 1 },
  }));

const serviceEdges: SiteEdge[] = services.map((service) => ({
  id: `servicios-${service.slug}`,
  source: "servicios",
  target: service.slug,
  type: "default",
  style: { stroke: "var(--border-strong)", strokeWidth: 1 },
}));

const seenRelations = new Set<string>();

const relationEdges: SiteEdge[] = services.flatMap((service) =>
  service.relatedSlugs
    .filter((relatedSlug) => {
      const key = [service.slug, relatedSlug].sort().join("-");
      if (seenRelations.has(key)) return false;
      seenRelations.add(key);
      return true;
    })
    .map((relatedSlug) => ({
      id: `${service.slug}-${relatedSlug}`,
      source: service.slug,
      target: relatedSlug,
      type: "default",
      style: { stroke: "var(--gold)", strokeWidth: 0.75, opacity: 0.4 },
    }))
);

export const siteFlow: SiteFlowGraph = {
  nodes: [...hubNodes, ...serviceNodes],
  edges: [...hubEdges, ...serviceEdges, ...relationEdges],
};
