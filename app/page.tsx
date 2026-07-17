"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { ZuiCanvas } from "@/features/zui-canvas/ZuiCanvas";
import { services } from "@/content/services";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function HomePage() {
  const [simpleMode, setSimpleMode] = useState(false);

  return (
    <>
      <Navbar simpleMode={simpleMode} onToggleSimpleMode={() => setSimpleMode((v) => !v)} />

      <main id="contenido-principal" className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 text-center font-ui text-xs uppercase tracking-[3px] text-gold">
          Maestro Supremo del Ocultismo
        </p>
        <h1 className="mb-4 text-center font-display text-4xl leading-tight text-ivory">
          Recupera lo que el <span className="text-gold-soft">destino</span> te arrebato
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-center font-voice text-xl text-ivory-dim">
          Consulta gratuita. Trabajo serio. Casos reales.
        </p>

        <div className="mb-6 flex flex-col items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero una consulta gratuita")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-control bg-whatsapp px-8 py-3 font-ui text-sm font-semibold text-whatsapp-on transition-all duration-200 ease-out hover:bg-whatsapp-dark hover:-translate-y-0.5 hover:shadow-md"
          >
            Consulta gratuita ahora &rarr;
          </a>
          <p className="text-center text-xs text-ivory-dim">
            Consulta gratuita &middot; Confidencialidad garantizada &middot; Respuesta en 24h
          </p>
        </div>

        {simpleMode ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="block rounded-card border border-border bg-carbon p-5 transition-all duration-200 ease-out hover:border-gold hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="font-ui text-sm font-semibold text-ivory">{s.title}</div>
                  <div className="mt-1 text-xs text-ivory-dim">{s.shortDescription}</div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ZuiCanvas />
        )}
      </main>

      <Footer />
      <WhatsAppFloating message="Hola, quiero mas informacion" />
    </>
  );
}
