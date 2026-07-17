import { ContactForm } from "@/features/contact-form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al Brujo Llanero para una consulta espiritual gratuita y confidencial.",
};

export default function ContactoPage() {
  return (
    <main id="contenido-principal" className="mx-auto max-w-xl px-6 py-16">
      <p className="mb-4 text-center font-ui text-xs uppercase tracking-[3px] text-gold">
        Habla con nosotros
      </p>
      <h1 className="mb-4 text-center font-display text-3xl text-ivory">Contacto</h1>
      <p className="mb-10 text-center text-sm text-ivory-dim">
        Cuéntanos tu situación. Toda consulta es confidencial y la primera evaluación es sin costo.
      </p>
      <ContactForm />
    </main>
  );
}
