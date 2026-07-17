"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Send, Clock, Lock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-24">
      {/* Background atmospheric */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&q=40')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-transparent to-base" />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Contacto
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Habla ahora con el Maestro
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Tu primera consulta es gratuita y confidencial. No esperes más para
            recibir orientación.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center rounded-2xl border border-whatsapp/20 bg-whatsapp/5 p-8"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-whatsapp/10">
              <Send className="h-7 w-7 text-whatsapp" />
            </div>
            <h3 className="mb-2 font-display text-xl text-ivory">
              Consulta por WhatsApp
            </h3>
            <p className="mb-6 font-voice text-sm text-ivory-dim">
              La forma más rápida de comunicarte. Respuesta inmediata y
              confidencial.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero una consulta gratuita")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-8 py-4 font-ui text-sm font-semibold text-whatsapp-on shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-whatsapp-dark hover:shadow-2xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar mensaje
            </a>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                Icon: Send,
                title: "Consulta gratuita",
                desc: "Sin compromiso. Evaluamos tu caso y te orientamos sobre el mejor camino espiritual.",
              },
              {
                Icon: Lock,
                title: "Confidencialidad total",
                desc: "Tu identidad y todos los detalles de tu caso se mantienen en estricto secreto.",
              },
              {
                Icon: Clock,
                title: "Respuesta en 24h",
                desc: "Te respondemos rápidamente. Cada minuto cuenta cuando hay una urgencia espiritual.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-carbon/40 p-5 transition-all duration-200 hover:border-white/10"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-ui text-sm font-semibold text-ivory">{title}</h4>
                  <p className="mt-1 text-xs text-ivory-dim">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
