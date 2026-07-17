export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Brujo Llanero",
    description:
      "Maestro Supremo del Ocultismo. Amarres de amor, limpias espirituales, proteccion espiritual y consultas espirituales. Consulta gratuita, trabajo serio, casos reales.",
    url: "https://elbrujollanero.com",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.6,
      longitude: -74.1,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    sameAs: [],
  };
}

export function serviceSchema(service: {
  title: string;
  slug: string;
  description: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `https://elbrujollanero.com/servicios/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "El Brujo Llanero",
    },
    serviceType: service.category,
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "COP",
      description: "Consulta de valoracion gratuita",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
