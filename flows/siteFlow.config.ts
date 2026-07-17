import type { SiteFlowGraph, SiteNode, SiteEdge } from "@/types/node.types";
import { services } from "@/content/services";

/* ── Colores por categoría ─────────────────────────────────────── */
export const CATEGORY_COLORS: Record<string, string> = {
  amor: "#FB7185",
  proteccion: "#38BDF8",
  consulta: "#FBBF24",
};

/* ── Hub positions — pentágono amplio alrededor del centro ─────── */
const HUB: Record<string, { x: number; y: number }> = {
  inicio:      { x:    0, y:    0 },
  servicios:   { x:    0, y: -420 },
  nosotros:    { x:  400, y: -130 },
  testimonios: { x:  250, y:  340 },
  faq:         { x: -250, y:  340 },
  contacto:    { x: -400, y: -130 },
};

/* ── Hub nodes — exportados para uso independiente ─────────────── */
export const hubNodes: SiteNode[] = [
  {
    id: "inicio",
    type: "hub",
    position: HUB.inicio,
    data: { kind: "hub", label: "Inicio", subtitle: "El punto de partida", level: "Z0", routeHref: "/", icon: "sparkles" },
  },
  {
    id: "servicios",
    type: "hub",
    position: HUB.servicios,
    data: { kind: "hub", label: "Servicios", subtitle: "11 caminos espirituales", level: "Z0", routeHref: "/servicios", icon: "moon" },
  },
  {
    id: "nosotros",
    type: "hub",
    position: HUB.nosotros,
    data: { kind: "hub", label: "Quienes somos", subtitle: "Autoridad y trayectoria", level: "Z0", routeHref: "/nosotros", icon: "shield" },
  },
  {
    id: "testimonios",
    type: "hub",
    position: HUB.testimonios,
    data: { kind: "hub", label: "Casos reales", subtitle: "Testimonios verificados", level: "Z0", routeHref: "/#testimonios", icon: "star" },
  },
  {
    id: "faq",
    type: "hub",
    position: HUB.faq,
    data: { kind: "hub", label: "Preguntas frecuentes", subtitle: "Resuelve tus dudas", level: "Z0", routeHref: "/faq", icon: "help-circle" },
  },
  {
    id: "contacto",
    type: "hub",
    position: HUB.contacto,
    data: { kind: "hub", label: "Contacto", subtitle: "Habla ahora", level: "Z0", routeHref: "/contacto", icon: "message-circle" },
  },
];

/* ── Service nodes — 3 grupos por categoría, cada uno en un abanico ── */
const AMOR_SERVICES = services.filter((s) => s.category === "amor");
const PROT_SERVICES = services.filter((s) => s.category === "proteccion");
const CONS_SERVICES = services.filter((s) => s.category === "consulta");

function fanLayout(
  items: typeof services,
  centerAngleDeg: number,
  spreadDeg: number,
  radius: number,
  center: { x: number; y: number },
): SiteNode[] {
  const start = centerAngleDeg - spreadDeg / 2;
  return items.map((service, i) => {
    const angle = items.length === 1
      ? (start * Math.PI) / 180
      : ((start + (spreadDeg / (items.length - 1)) * i) * Math.PI) / 180;
    return {
      id: service.slug,
      type: "service",
      position: {
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
      },
      data: {
        kind: "service",
        label: service.title,
        subtitle: service.priceNote,
        level: "Z1",
        routeHref: `/servicios/${service.slug}`,
        category: service.category,
        staggerIndex: i,
      },
    };
  });
}

const amorNodes = fanLayout(AMOR_SERVICES, 210, 120, 360, HUB.servicios);
const protNodes = fanLayout(PROT_SERVICES, 330, 60, 360, HUB.servicios);
const consNodes = fanLayout(CONS_SERVICES, 30, 30, 360, HUB.servicios);

/* ── Service nodes — exportados para uso independiente ─────────── */
export const serviceNodes: SiteNode[] = [...amorNodes, ...protNodes, ...consNodes];

/* ── Edges ────────────────────────────────────────────────────── */

// Hub → hub (desde Inicio)
const hubEdges: SiteEdge[] = hubNodes
  .filter((n) => n.id !== "inicio")
  .map((n) => ({
    id: `inicio-${n.id}`,
    source: "inicio",
    target: n.id,
    type: "default",
    style: { stroke: "#3F3F46", strokeWidth: 1.5 },
  }));

// Servicios → cada service node
const serviceEdges: SiteEdge[] = services.map((service) => ({
  id: `servicios-${service.slug}`,
  source: "servicios",
  target: service.slug,
  type: "default",
  style: {
    stroke: CATEGORY_COLORS[service.category] ?? "#3F3F46",
    strokeWidth: 1,
    opacity: 0.5,
  },
}));

// Relaciones entre servicios (solo las más importantes, deduplicadas)
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
      id: `rel-${service.slug}-${relatedSlug}`,
      source: service.slug,
      target: relatedSlug,
      type: "default",
      style: {
        stroke: CATEGORY_COLORS[service.category] ?? "#3F3F46",
        strokeWidth: 0.75,
        opacity: 0.2,
        strokeDasharray: "4 4",
      },
    })),
);

export const siteFlow: SiteFlowGraph = {
  nodes: [...hubNodes, ...serviceNodes],
  edges: [...hubEdges, ...serviceEdges, ...relationEdges],
};
