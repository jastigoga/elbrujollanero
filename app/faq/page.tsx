import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Resuelve tus dudas sobre los servicios espirituales del Brujo Llanero.",
};

const faqs = [
  {
    q: "¿La consulta inicial es realmente gratuita?",
    a: "Sí. La primera evaluación de tu caso no tiene costo. Solo se cobra el trabajo espiritual específico si decides avanzar.",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Depende de la complejidad del caso. Algunos trabajos muestran cambios en pocos días, otros requieren semanas de acompañamiento. Te informamos durante la evaluación.",
  },
  {
    q: "¿Todo es confidencial?",
    a: "Absolutamente. Tu información y los detalles de tu caso se manejan con total reserva. Nunca compartimos datos con terceros.",
  },
  {
    q: "¿Puedo consultar si estoy lejos geográficamente?",
    a: "Sí. Realizamos consultas por WhatsApp y videollamada. La distancia no es un impedimento para el trabajo espiritual.",
  },
  {
    q: "¿Qué servicios ofrecen?",
    a: "Trabajamos amarres de amor, limpias espirituales, protección espiritual, cortes de brujería, endulzamientos, rituales y consultas espirituales generales.",
  },
  {
    q: "¿Cómo sé si necesito un trabajo espiritual?",
    a: "Si sientes que algo no fluye en tu vida — relaciones, salud, economía — una consulta puede darte claridad. No todas las situaciones requieren un ritual, a veces solo orientación.",
  },
  {
    q: "¿Puedo referir a un amigo o familiar?",
    a: "Claro. El trabajo es por vocación y muchas personas llegan por recomendación. Puede contactarnos directamente por este medio.",
  },
];

export default function FaqPage() {
  return (
    <main id="contenido-principal" className="mx-auto max-w-2xl px-6 py-16">
      <p className="mb-4 text-center font-ui text-xs uppercase tracking-[3px] text-gold">
        Resuelve tus dudas
      </p>
      <h1 className="mb-10 text-center font-display text-3xl text-ivory">Preguntas frecuentes</h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="rounded-card border border-border bg-carbon"
          >
            <summary className="cursor-pointer px-6 py-4 font-ui text-sm font-semibold text-ivory hover:text-gold-soft">
              {faq.q}
            </summary>
            <div className="px-6 pb-4 text-sm leading-relaxed text-ivory-dim">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
