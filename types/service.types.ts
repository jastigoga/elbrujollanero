export type ServiceCategory = "amor" | "proteccion" | "consulta" | "ocultismo";

export interface ProcessStep {
  order: number;
  title: string;
  description: string;
}

export interface TestimonialRef {
  id: string;
  quote: string;
  authorInitials: string;
  relatedServiceSlug: string;
}

export interface SeoMeta {
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  canonical: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  longDescription: string;
  priceNote: string; // ej: "Consulta de valoracion: gratuita"
  relatedSlugs: string[]; // usados para generar los edges del grafo ZUI
  process: ProcessStep[];
  benefits: string[];
  testimonials: TestimonialRef[];
  whatsappMessageTemplate: string; // ej: "Hola, quiero informacion sobre {title}"
  seo: SeoMeta;
}
