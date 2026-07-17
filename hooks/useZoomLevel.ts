"use client";

import { useStore } from "@xyflow/react";

/**
 * Devuelve el nivel de zoom actual del canvas ZUI.
 * Se usa para que los nodos muestren más/menos contenido
 * según cuánto haya hecho zoom el usuario.
 *
 * Niveles:
 *  - < 0.4  → Compacto (solo título)
 *  - 0.4-0.8 → Medio (título + subtítulo)
 *  - > 0.8  → Expandido (título + subtítulo + descripción)
 */
export function useZoomLevel(): number {
  return useStore((s) => s.transform[2]);
}

export type ZoomTier = "compact" | "medium" | "expanded";

export function getZoomTier(zoom: number): ZoomTier {
  if (zoom < 0.4) return "compact";
  if (zoom < 0.8) return "medium";
  return "expanded";
}
