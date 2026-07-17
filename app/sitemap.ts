import type { MetadataRoute } from "next";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://elbrujollanero.com"; // TODO: confirmar dominio final
  const staticRoutes = ["", "/nosotros", "/contacto", "/faq"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
  const serviceRoutes = services.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: new Date(),
  }));
  return [...staticRoutes, ...serviceRoutes];
}
