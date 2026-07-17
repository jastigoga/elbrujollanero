"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { serviceSlugs, getServiceBySlug } from "@/content/services";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const contactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  servicio: z.enum(serviceSlugs),
  mensaje: z.string().min(10, "Cuentanos un poco mas de tu situacion"),
  whatsapp: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceLabels = serviceSlugs.map((slug) => ({
  slug,
  label: getServiceBySlug(slug)?.title ?? slug.replace(/-/g, " "),
}));

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  function onSubmit(values: ContactFormValues) {
    const whatsappLine = values.whatsapp ? ` Mi WhatsApp: ${values.whatsapp}.` : "";
    const text = encodeURIComponent(
      `Hola, soy ${values.nombre}. Me interesa: ${values.servicio}.${whatsappLine} ${values.mensaje}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="contact-nombre" className="mb-2 block font-ui text-xs text-ivory-dim">
          Nombre <span aria-hidden="true" className="text-[var(--error)]">*</span>
        </label>
        <input
          id="contact-nombre"
          {...register("nombre")}
          placeholder="Como te llamas?"
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "error-nombre" : undefined}
          className="w-full rounded-control border border-border bg-carbon px-4 py-3 text-sm text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
        />
        {errors.nombre && (
          <p id="error-nombre" role="alert" className="mt-1 text-xs text-[var(--error)]">
            {errors.nombre.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-servicio" className="mb-2 block font-ui text-xs text-ivory-dim">
          Servicio de interes <span aria-hidden="true" className="text-[var(--error)]">*</span>
        </label>
        <select
          id="contact-servicio"
          {...register("servicio")}
          aria-invalid={!!errors.servicio}
          className="w-full rounded-control border border-border bg-carbon px-4 py-3 text-sm text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
        >
          {serviceLabels.map(({ slug, label }) => (
            <option key={slug} value={slug}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-mensaje" className="mb-2 block font-ui text-xs text-ivory-dim">
          Cuentanos tu situacion <span aria-hidden="true" className="text-[var(--error)]">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          {...register("mensaje")}
          placeholder="Describe brevemente lo que estas viviendo..."
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
          className="h-24 w-full resize-none rounded-control border border-border bg-carbon px-4 py-3 text-sm text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
        />
        {errors.mensaje && (
          <p id="error-mensaje" role="alert" className="mt-1 text-xs text-[var(--error)]">
            {errors.mensaje.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-whatsapp" className="mb-2 block font-ui text-xs text-ivory-dim">
          WhatsApp (opcional)
        </label>
        <input
          id="contact-whatsapp"
          {...register("whatsapp")}
          placeholder="Ej: +57 300 123 4567"
          className="w-full rounded-control border border-border bg-carbon px-4 py-3 text-sm text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-soft"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-control bg-whatsapp px-6 py-3 font-ui text-sm font-semibold text-whatsapp-on transition-colors hover:bg-whatsapp-dark disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Enviar y continuar por WhatsApp"}
      </button>
    </form>
  );
}
