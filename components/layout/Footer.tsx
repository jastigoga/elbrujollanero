"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "PENDIENTE_DEFINIR";

export function Footer() {
  return (
    <footer className="border-t border-border bg-base px-6 py-10 sm:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <Link href="/" className="font-display text-lg tracking-wide text-gold-soft">
            EL BRUJO LLANERO
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-ivory-dim">
            Consultas espirituales serias y confidenciales. Maestro Supremo del Ocultismo.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-ui text-xs font-semibold uppercase tracking-widest text-gold">
            Navegacion
          </h3>
          <ul className="space-y-2">
            <li><Link href="/servicios" className="text-xs text-ivory-dim transition-colors hover:text-ivory">Servicios</Link></li>
            <li><Link href="/nosotros" className="text-xs text-ivory-dim transition-colors hover:text-ivory">Nosotros</Link></li>
            <li><Link href="/faq" className="text-xs text-ivory-dim transition-colors hover:text-ivory">Preguntas frecuentes</Link></li>
            <li><Link href="/contacto" className="text-xs text-ivory-dim transition-colors hover:text-ivory">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-ui text-xs font-semibold uppercase tracking-widest text-gold">
            Contacto
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory-dim transition-colors hover:text-ivory"
              >
                WhatsApp: PENDIENTE_DEFINIR
              </a>
            </li>
            <li className="text-xs text-ivory-dim">Consulta gratuita</li>
            <li className="text-xs text-ivory-dim">Confidencialidad garantizada</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-ivory-dim">
        &copy; {new Date().getFullYear()} El Brujo Llanero. Todos los derechos reservados.
      </div>
    </footer>
  );
}
