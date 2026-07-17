"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-border/50 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-brujo.png"
            alt="El Brujo Llanero"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg tracking-wide text-gold-soft">
            EL BRUJO LLANERO
          </span>
        </Link>

        {/* Desktop nav */}
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
          <Link
            href="/contacto"
            className="rounded-full bg-gold/10 px-4 py-2 font-ui text-xs font-medium text-gold transition-all duration-200 hover:bg-gold/20 hover:text-gold-soft"
          >
            Consulta gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-ivory-dim hover:text-ivory md:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-base/95 backdrop-blur-md md:hidden">
          <div className="px-6 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-ui text-sm text-ivory-dim transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-full bg-gold/10 py-3 text-center font-ui text-sm font-medium text-gold"
            >
              Consulta gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
