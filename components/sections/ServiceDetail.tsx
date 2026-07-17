"use client";

import { motion } from "framer-motion";
import { X, Star, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { CATEGORY_COLORS } from "@/flows/siteFlow.config";
import { getServiceBySlug } from "@/content/services";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function ServiceDetail({
  serviceSlug,
  onClose,
}: {
  serviceSlug: string;
  onClose: () => void;
}) {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;

  const accent = CATEGORY_COLORS[service.category] ?? "#C9A24B";

  const CATEGORY_LABEL: Record<string, string> = {
    amor: "Amor y Relaciones",
    proteccion: "Protección y Limpieza",
    consulta: "Consulta y Orientación",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-base/90 backdrop-blur-md" />

      {/* Card container */}
      <motion.div
        layoutId={`card-${service.slug}`}
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-2xl rounded-3xl border-2 px-1 py-[1px] sm:my-16"
        style={{
          background: `linear-gradient(160deg, ${accent}50, ${accent}15, ${accent}50)`,
        }}
      >
        <div className="relative overflow-hidden rounded-[22px] bg-base">
          {/* Top accent line */}
          <div
            className="h-1 w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-base/80 text-ivory-dim backdrop-blur transition-all hover:border-white/20 hover:text-ivory"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="px-5 pb-6 pt-8 text-center md:px-8">
            {/* Category */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-2 font-ui text-[10px] uppercase tracking-[3px]"
              style={{ color: accent }}
            >
              {CATEGORY_LABEL[service.category]}
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
              className="font-display text-3xl text-ivory md:text-4xl"
            >
              {service.title}
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 flex items-center gap-3"
            >
              <div className="h-px flex-1" style={{ background: `${accent}30` }} />
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path
                  d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8Z"
                  fill={accent}
                />
              </svg>
              <div className="h-px flex-1" style={{ background: `${accent}30` }} />
            </motion.div>
          </div>

          {/* Body */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-7 px-5 pb-8 md:px-8"
          >
            {/* Description */}
            <motion.div variants={fadeUp}>
              <p className="font-voice text-base leading-relaxed text-ivory-dim">
                {service.longDescription}
              </p>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid gap-7 md:grid-cols-2">
              {/* Left: Process */}
              <motion.div variants={fadeUp}>
                <h3
                  className="mb-4 font-display text-lg"
                  style={{ color: accent }}
                >
                  Cómo funciona
                </h3>
                <div className="space-y-3">
                  {service.process.map((step) => (
                    <div key={step.order} className="flex gap-3">
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                        style={{
                          background: `${accent}15`,
                          color: accent,
                          border: `1px solid ${accent}30`,
                        }}
                      >
                        {step.order}
                      </div>
                      <div>
                        <p className="font-ui text-sm font-medium text-ivory">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-xs text-ivory-dim">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Benefits + Testimonial */}
              <motion.div variants={fadeUp} className="space-y-6">
                {/* Benefits */}
                <div>
                  <h3
                    className="mb-3 font-display text-lg"
                    style={{ color: accent }}
                  >
                    Beneficios
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ivory-dim"
                      >
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <circle cx="7" cy="7" r="6" stroke={accent} strokeWidth="1" />
                          <path
                            d="M4 7L6 9L10 5"
                            stroke={accent}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {service.testimonials[0] && (
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: `${accent}08`,
                      border: `1px solid ${accent}15`,
                    }}
                  >
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="font-voice text-sm italic text-ivory/80">
                      &ldquo;{service.testimonials[0].quote}&rdquo;
                    </p>
                    <p className="mt-2 font-ui text-[11px] text-ivory-dim">
                      — {service.testimonials[0].authorInitials}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp} className="pt-2 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-ui text-sm font-semibold text-whatsapp-on shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "#25D366" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consulta gratuita por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-[11px] text-ivory-dim/50">
                {service.priceNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
