import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";

export const metadata: Metadata = {
  title: "Servicios Espirituales | El Brujo Llanero",
  description:
    "Consulta gratuita con el Brujo Llanero. Amarres de amor, limpias espirituales, proteccion y consultas espirituales. Trabajo serio y confidencial.",
};

const CATEGORY_LABEL: Record<string, string> = {
  amor: "Amor y Relaciones",
  proteccion: "Proteccion y Limpieza",
  consulta: "Consulta y Orientacion",
};

const CATEGORY_ACCENT: Record<string, string> = {
  amor: "#FB7185",
  proteccion: "#38BDF8",
  consulta: "#FBBF24",
};

export default function ServiciosPage() {
  const grouped = services.reduce(
    (acc, s) => {
      (acc[s.category] ??= []).push(s);
      return acc;
    },
    {} as Record<string, typeof services>,
  );

  return (
    <div className="relative min-h-screen bg-base">
      <Navbar />
      <main className="relative z-10 pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-4 text-center font-display text-4xl text-ivory md:text-5xl">
            Todos los servicios
          </h1>
          <p className="mx-auto mb-16 max-w-lg text-center font-voice text-lg text-ivory-dim">
            Elige el camino espiritual que necesitas. Cada servicio incluye
            consulta gratuita y seguimiento personalizado.
          </p>

          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} className="mb-16">
              <h2
                className="mb-6 font-display text-2xl"
                style={{ color: CATEGORY_ACCENT[cat] }}
              >
                {CATEGORY_LABEL[cat] ?? cat}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    className="group rounded-xl border border-ivory/10 bg-ivory/5 p-5 transition-all hover:border-gold/30 hover:bg-ivory/10"
                  >
                    <h3 className="mb-2 font-display text-lg text-ivory group-hover:text-gold">
                      {s.title}
                    </h3>
                    <p className="font-voice text-sm text-ivory-dim">
                      {s.shortDescription}
                    </p>
                    <span className="mt-3 inline-block font-ui text-xs text-gold">
                      Ver mas →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFloating message="Hola, quiero informacion sobre sus servicios" />
    </div>
  );
}
