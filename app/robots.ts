import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://elbrujollanero.com/sitemap.xml", // TODO: confirmar dominio final
  };
}
