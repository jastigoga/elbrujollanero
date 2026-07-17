import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, services } from "@/content/services";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const baseUrl = "https://elbrujollanero.com";
  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    alternates: { canonical: `${baseUrl}${service.seo.canonical}` },
    openGraph: { images: [`${baseUrl}${service.seo.ogImage}`] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />

      <main id="contenido-principal" className="mx-auto max-w-4xl px-6 py-16">
        <nav className="mb-8 text-xs text-ivory-dim" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold-soft">
            &larr; volver al mapa
          </Link>{" "}
          / Servicios /{" "}
          <span aria-current="page" className="text-gold-soft">{service.title}</span>
        </nav>

        <p className="mb-3 font-ui text-xs uppercase tracking-[2px] text-gold">
          {service.category}
        </p>
        <h1 className="mb-4 font-display text-3xl text-ivory">{service.title}</h1>

        {service.longDescription && !service.longDescription.startsWith("TODO") && (
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-ivory-dim">
            {service.longDescription}
          </p>
        )}

        <p className="mb-8 font-ui text-sm text-gold-soft">{service.priceNote}</p>

        {service.process.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-5 font-ui text-xs uppercase tracking-[2px] text-gold">Proceso</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.process.map((step) => (
                <div key={step.order} className="rounded-card border border-border bg-carbon p-5">
                  <span className="mb-2 block font-display text-lg text-gold-soft">
                    {step.order}
                  </span>
                  <h3 className="mb-1 font-ui text-sm">{step.title}</h3>
                  <p className="text-xs text-ivory-dim">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {service.testimonials.length > 0 && (
          <blockquote className="mb-12 rounded-r-card border-l-2 border-gold bg-elevated p-8">
            <p className="font-voice text-xl">&ldquo;{service.testimonials[0].quote}&rdquo;</p>
            <span className="mt-2 block font-ui text-xs text-ivory-dim">
              {service.testimonials[0].authorInitials} &mdash; Caso verificado
            </span>
          </blockquote>
        )}

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessageTemplate)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-control bg-whatsapp px-6 py-3 font-ui text-sm font-semibold text-whatsapp-on transition-colors hover:bg-whatsapp-dark"
        >
          Iniciar conversacion en WhatsApp
        </a>
      </main>

      <Footer />
      <WhatsAppFloating message={service.whatsappMessageTemplate} />
    </>
  );
}
