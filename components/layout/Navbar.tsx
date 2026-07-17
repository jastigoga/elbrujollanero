"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar({
  simpleMode,
  onToggleSimpleMode,
}: {
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-border bg-base/90 px-6 backdrop-blur sm:px-10">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="font-display text-lg tracking-wide text-gold-soft">
          EL BRUJO LLANERO
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-xs text-ivory-dim transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={onToggleSimpleMode}
            aria-pressed={simpleMode}
            className="rounded-full border px-3 py-1.5 font-ui text-xs transition-all duration-200 ease-out"
            style={{
              borderColor: simpleMode ? "var(--gold)" : "var(--border)",
              color: simpleMode ? "var(--gold)" : "var(--ivory-dim)",
              backgroundColor: simpleMode ? "rgba(201, 162, 75, 0.1)" : "transparent",
            }}
          >
            {simpleMode ? "Explorar mapa" : "Vista simple"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleSimpleMode}
            aria-pressed={simpleMode}
            className="rounded-full border px-2.5 py-1 font-ui text-[10px] transition-all duration-200 ease-out"
            style={{
              borderColor: simpleMode ? "var(--gold)" : "var(--border)",
              color: simpleMode ? "var(--gold)" : "var(--ivory-dim)",
              backgroundColor: simpleMode ? "rgba(201, 162, 75, 0.1)" : "transparent",
            }}
          >
            {simpleMode ? "Mapa" : "Simple"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-ivory-dim hover:text-ivory"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 font-ui text-sm text-ivory-dim transition-colors hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
