import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce al Brujo Llanero: maestro supremo del ocultismo con trayectoria en consultas y trabajos espirituales.",
};

export default function NosotrosPage() {
  return (
    <main id="contenido-principal" className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-center font-ui text-xs uppercase tracking-[3px] text-gold">
        Nuestra trayectoria
      </p>
      <h1 className="mb-6 text-center font-display text-3xl text-ivory">Nosotros</h1>
      <p className="mb-10 text-center text-sm leading-relaxed text-ivory-dim">
        Maestro Supremo del Ocultismo. Dedicado al servicio espiritual con seriedad, disciplina y confidencialidad.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 font-ui text-xs uppercase tracking-[2px] text-gold">Misión</h2>
          <p className="text-sm leading-relaxed text-ivory-dim">
            Brindar orientación y soluciones espirituales a quienes enfrentan situaciones difíciles en sus vidas, con honestidad, respeto y absoluta confidencialidad.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-ui text-xs uppercase tracking-[2px] text-gold">Valores</h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-ivory-dim">
            <li>Confidencialidad total en cada caso.</li>
            <li>Consulta inicial gratuita y sin compromiso.</li>
            <li>Trabajo serio y personalizado.</li>
            <li>Acompañamiento durante todo el proceso.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-ui text-xs uppercase tracking-[2px] text-gold">Experiencia</h2>
          <p className="text-sm leading-relaxed text-ivory-dim">
            {/* TODO: Agregar años de experiencia y datos relevantes delBrujo Llanero */}
            Contamos con amplia experiencia en amarres de amor, limpias espirituales, protección espiritual y consultas de todo tipo.
          </p>
        </section>
      </div>
    </main>
  );
}
