"use client";

import { motion, AnimatePresence } from "framer-motion";
import { panelSlideIn } from "@/animations/variants";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";
import { getServiceBySlug } from "@/content/services";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import Link from "next/link";

interface Props {
  serviceSlug: string | null;
  onClose: () => void;
}

export function ServiceDetailPanel({ serviceSlug, onClose }: Props) {
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : null;
  const accent = service ? (CATEGORY_COLORS[service.category] ?? "#C9A24B") : "#C9A24B";

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-30 bg-base/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            variants={panelSlideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 z-40 h-full w-full max-w-md overflow-y-auto border-l border-border"
            style={{
              background: "rgba(10, 10, 11, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border text-ivory-dim transition-colors hover:border-gold hover:text-ivory"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="p-6 pt-14">
              {/* Badge */}
              <span
                className="mb-3 inline-block rounded-full px-2.5 py-0.5 font-ui text-[10px] font-medium uppercase tracking-wider"
                style={{ background: `${accent}20`, color: accent }}
              >
                {service.category}
              </span>

              {/* Title */}
              <h2 className="mb-2 font-display text-2xl text-ivory">{service.title}</h2>
              <p className="mb-6 font-ui text-sm text-gold-soft">{service.priceNote}</p>

              {/* Description */}
              {service.longDescription && !service.longDescription.startsWith("TODO") && (
                <p className="mb-8 text-sm leading-relaxed text-ivory-dim">
                  {service.longDescription}
                </p>
              )}

              {/* Process */}
              {service.process.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-4 font-ui text-xs uppercase tracking-[2px] text-gold">
                    Proceso
                  </h3>
                  <div className="space-y-3">
                    {service.process.map((step) => (
                      <div
                        key={step.order}
                        className="flex gap-3 rounded-lg border border-border p-3"
                        style={{ background: "var(--glass-bg)" }}
                      >
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold"
                          style={{ background: `${accent}20`, color: accent }}
                        >
                          {step.order}
                        </span>
                        <div>
                          <div className="font-ui text-xs font-semibold text-ivory">{step.title}</div>
                          <div className="mt-0.5 text-[11px] text-ivory-dim">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 font-ui text-xs uppercase tracking-[2px] text-gold">
                    Beneficios
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ivory-dim">
                        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Testimonial */}
              {service.testimonials.length > 0 && (
                <blockquote
                  className="mb-8 rounded-xl border-l-2 p-4"
                  style={{ borderColor: accent, background: `${accent}08` }}
                >
                  <p className="font-voice text-sm italic text-ivory">
                    &ldquo;{service.testimonials[0].quote}&rdquo;
                  </p>
                  <span className="mt-2 block text-[11px] text-ivory-dim">
                    — {service.testimonials[0].authorInitials}
                  </span>
                </blockquote>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessageTemplate)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-control bg-whatsapp px-6 py-3 font-ui text-sm font-semibold text-whatsapp-on shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-whatsapp-dark hover:shadow-xl"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Hablar por WhatsApp
                </a>

                <Link
                  href={`/servicios/${service.slug}`}
                  className="flex items-center justify-center gap-2 rounded-control border border-border px-6 py-3 font-ui text-sm text-ivory-dim transition-all duration-200 hover:border-gold/50 hover:text-ivory"
                >
                  Ver página completa →
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
