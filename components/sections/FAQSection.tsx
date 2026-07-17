"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "¿La primera consulta es realmente gratuita?",
    answer:
      "Sí. La primera consulta de valoración es completamente gratuita y sin compromiso. Evaluamos tu situación y te orientamos sobre el mejor camino espiritual. Solo avanzas con un trabajo si tú lo decides.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "Cada caso es único. Algunos trabajos muestran resultados en días, otros requieren semanas de manifestación. Durante el proceso recibirás seguimiento cercano y actualizaciones sobre la evolución de tu caso.",
  },
  {
    question: "¿Cómo sé si soy víctima de brujería o energías negativas?",
    answer:
      "Señales comunes incluyen mala suerte constante, problemas inexplicables, enfermedades sin causa médica, pesadez general y rupturas repentinas. En la consulta gratuita realizamos un diagnóstico energético para determinar la causa.",
  },
  {
    question: "¿Qué diferencia tiene este trabajo de otros?",
    answer:
      "El Maestro Supremo del Ocultismo cuenta con décadas de experiencia y un método probado. Cada caso recibe atención personalizada, seguimiento continuo y garantía de confidencialidad absoluta. No trabajamos con fórmulas genéricas.",
  },
  {
    question: "¿El trabajo espiritual garantiza resultados?",
    answer:
      "Ningún trabajo espiritual puede dar garantías absolutas, ya que depende de múltiples factores. Sin embargo, nuestro historial de casos exitosos habla por sí mismo. La consulta gratuita te permitirá evaluar tu situación sin riesgo.",
  },
  {
    question: "¿Mantienen la confidencialidad de mi caso?",
    answer:
      "Absolutamente. La confidencialidad es un principio fundamental. Tu caso, tu identidad y todos los detalles compartidos se mantienen en estricto secreto. Nunca revelamos información de nuestros consultantes.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-xl border border-border bg-carbon/40 transition-all duration-200 hover:border-white/10"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-ui text-sm font-medium text-ivory">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-ivory-dim" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-5 pt-4">
              <p className="font-voice text-sm leading-relaxed text-ivory-dim">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(201,162,75,0.03) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-ui text-xs uppercase tracking-[3px] text-gold">
            Preguntas frecuentes
          </p>
          <h2 className="mb-3 font-display text-3xl text-ivory md:text-4xl">
            Resuelve tus dudas
          </h2>
          <p className="mx-auto max-w-lg font-voice text-lg text-ivory-dim">
            Respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
