"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { ZuiCanvas } from "@/features/zui-canvas/ZuiCanvas";
import { services } from "@/content/services";
import Link from "next/link";

export default function HomePage() {
  const [simpleMode, setSimpleMode] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-base">
      <Navbar simpleMode={simpleMode} onToggleSimpleMode={() => setSimpleMode((v) => !v)} />

      {simpleMode ? (
        <main
          id="contenido-principal"
          className="h-full w-full overflow-auto px-4 pt-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl py-16">
            <h2 className="mb-6 text-center font-display text-2xl text-ivory">
              Nuestros servicios
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="block rounded-xl border border-border bg-carbon/80 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lg"
                  >
                    <div className="font-ui text-sm font-semibold text-ivory">{s.title}</div>
                    <div className="mt-1 text-xs text-ivory-dim">{s.shortDescription}</div>
                    <div className="mt-3 text-[10px] text-gold">Ver más →</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </main>
      ) : (
        <>
          <ZuiCanvas />
          <Footer />
        </>
      )}

      <WhatsAppFloating message="Hola, quiero una consulta gratuita" />
    </div>
  );
}
