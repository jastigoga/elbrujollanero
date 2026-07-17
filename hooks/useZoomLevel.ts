"use client";

import { useState, useCallback } from "react";
import type { ZuiLevel } from "@/types/node.types";

/**
 * Sincroniza el nivel de zoom logico (Z0..Z4) con el viewport real de XYFlow.
 * La UI externa al canvas (navbar, breadcrumbs) lee este estado para reaccionar
 * sin necesidad de acoplarse directamente a la libreria de canvas.
 */
export function useZoomLevel(initial: ZuiLevel = "Z0") {
  const [level, setLevel] = useState<ZuiLevel>(initial);

  const goTo = useCallback((next: ZuiLevel) => {
    setLevel(next);
  }, []);

  return { level, goTo };
}
