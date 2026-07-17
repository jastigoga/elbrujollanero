import type { Service } from "@/types/service.types";

export const services: Service[] = [
  {
    slug: "amarres-de-amor",
    title: "Amarres de amor",
    category: "amor",
    shortDescription:
      "Un trabajo espiritual dirigido a reconstruir el vinculo afectivo y atraer de vuelta el compromiso de esa persona.",
    longDescription:
      "El amarre de amor es un ritual ancestral que trabaja sobre las energias del vinculo afectivo. A traves de un diagnostico energetico personalizado, se identifican las bloqueos que impiden la reconciliacion y se ejecuta un trabajo espiritual orientado a restaurar la conexion emocional. Cada caso es unico y recibe un seguimiento cercano durante todo el proceso de manifestacion.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["retorno-del-ser-amado", "endulzamientos"],
    process: [
      { order: 1, title: "Diagnostico energetico", description: "Se evalua la situacion actual del vinculo y las energias presentes." },
      { order: 2, title: "Ritual dirigido", description: "Se ejecuta el trabajo especifico para el caso, con seguimiento cercano." },
      { order: 3, title: "Acompanamiento", description: "Se guia al consultante durante el proceso de manifestacion del resultado." },
    ],
    benefits: ["Consulta inicial sin costo", "Seguimiento personalizado", "Confidencialidad total"],
    testimonials: [
      { id: "t1", quote: "Despues de meses sin hablar, volvio a buscarme.", authorInitials: "M.R.", relatedServiceSlug: "amarres-de-amor" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Amarres de amor",
    seo: {
      metaTitle: "Amarres de amor | El Brujo Llanero",
      metaDescription: "Trabajo espiritual serio para recuperar y fortalecer tu relacion. Consulta gratuita.",
      ogImage: "/images/servicios/amarres-de-amor.jpg",
      canonical: "/servicios/amarres-de-amor",
    },
  },
  {
    slug: "retorno-del-ser-amado",
    title: "Retorno del ser amado",
    category: "amor",
    shortDescription:
      "Trabajo espiritual para atraer de vuelta a esa persona que se fue y reconstruir el amor perdido.",
    longDescription:
      "Cuando el ser amado se aleja, queda un vacio que afecta toda la vida. El retorno del ser amado es un trabajo espiritual que trabaja directamente sobre la energetica del vinculo para reactivar los sentimientos y guiar a esa persona de regreso. No es manipulacion: es la restauracion de un camino que fue interrumpido. Cada paso se realiza con respeto y confidencialidad.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["amarres-de-amor"],
    process: [
      { order: 1, title: "Lectura energetica", description: "Se identifica la causa profunda de la separacion y el estado del vinculo." },
      { order: 2, title: "Trabajo de retorno", description: "Se ejecuta el ritual especifico para reconectar las energias del ser amado." },
      { order: 3, title: "Seguimiento", description: "Se monitorea la evolucion del proceso hasta la manifestacion del resultado." },
    ],
    benefits: ["Diagnostico sin costo", "Trabajo personalizado", "Resultados comprobables"],
    testimonials: [
      { id: "t2", quote: "Pense que nunca volveria. Hoy estamos juntos de nuevo.", authorInitials: "A.P.", relatedServiceSlug: "retorno-del-ser-amado" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Retorno del ser amado",
    seo: { metaTitle: "Retorno del ser amado | El Brujo Llanero", metaDescription: "Trae de vuelta al ser que amas. Trabajo espiritual serio con consulta gratuita.", ogImage: "/images/servicios/retorno-del-ser-amado.jpg", canonical: "/servicios/retorno-del-ser-amado" },
  },
  {
    slug: "endulzamientos",
    title: "Endulzamientos",
    category: "amor",
    shortDescription:
      "Trabajo espiritual para suavizar el corazon y las energias de una persona, eliminando rencores y frialdad.",
    longDescription:
      "El endulzamiento es un trabajo sutil pero poderoso que trabaja sobre las energias de una persona para suavizar su corazon. Cuando hay frialdad, rechazo o resentimiento, este ritual abre el camino para que los sentimientos fluyan nuevamente. Es ideal para relaciones donde la comunicacion se ha cortado y se necesita un acercamiento natural.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["amarres-de-amor"],
    process: [
      { order: 1, title: "Evaluacion", description: "Se analiza el estado energetico de la persona y la relacion." },
      { order: 2, title: "Ritual de endulzamiento", description: "Se ejecuta el trabajo para suavizar las energias y abrir el corazon." },
      { order: 3, title: "Observacion", description: "Se seguira el proceso de cambios en la actitud y comportamiento." },
    ],
    benefits: ["Consulta gratuita", "Trabajo delicado y respetuoso", "Seguimiento cercano"],
    testimonials: [
      { id: "t3", quote: "Mi esposo cambio completamente. Se hizo carinoso otra vez.", authorInitials: "D.L.", relatedServiceSlug: "endulzamientos" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Endulzamientos",
    seo: { metaTitle: "Endulzamientos | El Brujo Llanero", metaDescription: "Suaviza el corazon de esa persona. Endulzamiento espiritual con consulta gratuita.", ogImage: "/images/servicios/endulzamientos.jpg", canonical: "/servicios/endulzamientos" },
  },
  {
    slug: "amarre-de-dominio",
    title: "Amarre de dominio",
    category: "amor",
    shortDescription:
      "Trabajo espiritual de alta intensidad para establecer un vinculo profundo de connection y fidelidad.",
    longDescription:
      "El amarre de dominio es un trabajo espiritual de mayor intensidad que busca establecer un vinculo profundo y duradero. Se utiliza cuando otros trabajos no han tenido el efecto deseado o cuando la situacion requiere una intervenccion mas directa. Este ritual trabaja sobre la voluntad energetica para alinear los caminos de dos personas.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: [],
    process: [
      { order: 1, title: "Estudio profundo", description: "Se realiza un analisis detallado de la situacion y las energias en juego." },
      { order: 2, title: "Ritual de dominio", description: "Se ejecuta un trabajo intenso y dirigido para establecer el vinculo." },
      { order: 3, title: "Consolidacion", description: "Se refuerza el trabajo durante las semanas siguientes para estabilizar el resultado." },
    ],
    benefits: ["Analisis exhaustivo", "Trabajo de alta intensidad", "Acompanamiento continuo"],
    testimonials: [
      { id: "t4", quote: "Era un caso dificil, pero el resultado fue contundente.", authorInitials: "J.M.", relatedServiceSlug: "amarre-de-dominio" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Amarre de dominio",
    seo: { metaTitle: "Amarre de dominio | El Brujo Llanero", metaDescription: "Trabajo espiritual de alta intensidad para vinculo profundo. Consulta gratuita.", ogImage: "/images/servicios/amarre-de-dominio.jpg", canonical: "/servicios/amarre-de-dominio" },
  },
  {
    slug: "embrujo-sexual",
    title: "Embrujo sexual",
    category: "amor",
    shortDescription:
      "Trabajo espiritual para despertar el deseo y la pasion en una persona, fortaleciendo la atraccion mutua.",
    longDescription:
      "El embrujo sexual es un ritual que trabaja sobre las energias de la atraccion y el deseo. Su objetivo es despertar la pasion y el interes romantico en una persona, fortaleciendo la conexion fisica y emocional. Este trabajo se realiza con discrecion y respeto, siempre orientado al bienestar de ambas partes.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: [],
    process: [
      { order: 1, title: "Conexion energetica", description: "Se establece la conexion energetica entre las dos personas." },
      { order: 2, title: "Ritual de atraccion", description: "Se ejecuta el trabajo para despertar el deseo y la pasion." },
      { order: 3, title: "Refuerzo", description: "Se mantiene la energetica del trabajo durante el periodo de manifestacion." },
    ],
    benefits: ["Discrecion total", "Trabajo personalizado", "Consulta sin compromiso"],
    testimonials: [
      { id: "t5", quote: "La atraccion que teniamos se multiplico despues del trabajo.", authorInitials: "F.G.", relatedServiceSlug: "embrujo-sexual" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Embrujo sexual",
    seo: { metaTitle: "Embrujo sexual | El Brujo Llanero", metaDescription: "Despierta la pasion y el deseo. Trabajo espiritual de atraccion con consulta gratuita.", ogImage: "/images/servicios/embrujo-sexual.jpg", canonical: "/servicios/embrujo-sexual" },
  },
  {
    slug: "retiro-de-amantes",
    title: "Retiro de amantes",
    category: "amor",
    shortDescription:
      "Trabajo espiritual para eliminar la influencia de terceras personas que afectan una relacion de pareja.",
    longDescription:
      "Cuando una tercera persona se interpone en una relacion, las energias se desbalancean y el sufrimiento es inevitable. El retiro de amantes es un trabajo espiritual que busca eliminar esa influencia externa y restaurar la armonia en la pareja. Se trabaja con precision para separar las energias ajenas sin afectar el vinculo principal.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["corte-de-brujeria"],
    process: [
      { order: 1, title: "Identificacion", description: "Se identifica la presencia y naturaleza de la influencia externa." },
      { order: 2, title: "Retiro espiritual", description: "Se ejecuta el trabajo para separar y alejar las energias ajenas." },
      { order: 3, title: "Proteccion", description: "Se refuerza la pareja con energias de proteccion y armonia." },
    ],
    benefits: ["Diagnostico confidencial", "Trabajo preciso", "Proteccion incluida"],
    testimonials: [
      { id: "t6", quote: "La tercera persona desaparecio de nuestra vida. Nuestra relacion se salvo.", authorInitials: "S.T.", relatedServiceSlug: "retiro-de-amantes" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Retiro de amantes",
    seo: { metaTitle: "Retiro de amantes | El Brujo Llanero", metaDescription: "Elimina terceras personas de tu relacion. Trabajo espiritual con consulta gratuita.", ogImage: "/images/servicios/retiro-de-amantes.jpg", canonical: "/servicios/retiro-de-amantes" },
  },
  {
    slug: "limpias-espirituales",
    title: "Limpias espirituales",
    category: "proteccion",
    shortDescription:
      "Limpieza energetica profunda para eliminar energias negativas, bloqueos y influencias adversas.",
    longDescription:
      "Las limpias espirituales son trabajos de desparasitizacion energetica que eliminan las cargas negativas acumuladas en la persona, el hogar o el negocio. Las energias negativas pueden manifestarse como mala suerte, problemas constantes, enfermedades inexplicables o una sensacion general de pesadez. Una limpia profunda restaura el equilibrio energetico y abre el camino para mejores oportunidades.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["proteccion-espiritual", "corte-de-brujeria"],
    process: [
      { order: 1, title: "Lectura energetica", description: "Se identifican las cargas negativas y su origen." },
      { order: 2, title: "Limpieza profunda", description: "Se ejecuta la limpia espiritual con hierbas, humo y oraciones." },
      { order: 3, title: "Sellado", description: "Se protege la persona o espacio contra futuras influencias negativas." },
    ],
    benefits: ["Limpieza integral", "Proteccion posterior", "Seguimiento incluido"],
    testimonials: [
      { id: "t7", quote: "Despues de la limpia, todo comenzo a mejorar en mi vida.", authorInitials: "L.V.", relatedServiceSlug: "limpias-espirituales" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Limpias espirituales",
    seo: { metaTitle: "Limpias espirituales | El Brujo Llanero", metaDescription: "Elimina energias negativas con una limpia espiritual profunda. Consulta gratuita.", ogImage: "/images/servicios/limpias-espirituales.jpg", canonical: "/servicios/limpias-espirituales" },
  },
  {
    slug: "corte-de-brujeria",
    title: "Corte de brujeria",
    category: "proteccion",
    shortDescription:
      "Trabajo espiritual para romper hechizos, maldiciones y cualquier forma de brujeria dirigida.",
    longDescription:
      "Si sientes que la mala suerte te persigue, que tienes problemas inexplicables o que algo externo te afecta, podrias estar victima de una brujeria o maldicion. El corte de brujeria es un trabajo de alta potencia que identifica y rompe cualquier hechizo o influence negativa dirigida. Con anos de experiencia, se ha demostrado la efectividad de este trabajo en casos complejos.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["proteccion-espiritual", "limpias-espirituales"],
    process: [
      { order: 1, title: "Diagnostico", description: "Se identifica el tipo de brujeria y su origen." },
      { order: 2, title: "Corte espiritual", description: "Se ejecuta el corte con ceremonias de alta potencia." },
      { order: 3, title: "Refuerzo", description: "Se protege a la persona contra futuros ataques espirituales." },
    ],
    benefits: ["Experiencia comprobada", "Trabajo de alta potencia", "Proteccion duradera"],
    testimonials: [
      { id: "t8", quote: "Tenia anos sufriendo. El corte de brujeria me libero.", authorInitials: "R.M.", relatedServiceSlug: "corte-de-brujeria" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Corte de brujeria",
    seo: { metaTitle: "Corte de brujeria | El Brujo Llanero", metaDescription: "Rompe hechizos y maldiciones con un corte espiritual efectivo. Consulta gratuita.", ogImage: "/images/servicios/corte-de-brujeria.jpg", canonical: "/servicios/corte-de-brujeria" },
  },
  {
    slug: "rituales",
    title: "Rituales",
    category: "consulta",
    shortDescription:
      "Ceremonias espirituales personalizadas para diferentes necesidades: amor, prosperidad, proteccion y mas.",
    longDescription:
      "Los rituales son ceremonias espirituales que se adaptan a la necesidad especifica de cada consultante. Ya sea para atraer el amor, la prosperidad, la salud o la proteccion, cada ritual se diseña de forma personalizada. Se utilizan elementos naturales, oraciones ancestrales y tecnicas espirituales transmitidas por generaciones para alcanzar el resultado deseado.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: [],
    process: [
      { order: 1, title: "Consulta", description: "Se entiende la necesidad y se disenya el ritual adecuado." },
      { order: 2, title: "Ejecucion", description: "Se realiza la ceremonia espiritual en el momento indicado." },
      { order: 3, title: "Seguimiento", description: "Se monitorea la manifestacion de los resultados." },
    ],
    benefits: ["Ritual personalizado", "Elementos naturales", "Orientacion espiritual completa"],
    testimonials: [
      { id: "t9", quote: "El ritual de prosperidad cambio mi situacion economia en semanas.", authorInitials: "C.A.", relatedServiceSlug: "rituales" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Rituales",
    seo: { metaTitle: "Rituales espirituales | El Brujo Llanero", metaDescription: "Rituales personalizados para amor, prosperidad y proteccion. Consulta gratuita.", ogImage: "/images/servicios/rituales.jpg", canonical: "/servicios/rituales" },
  },
  {
    slug: "proteccion-espiritual",
    title: "Proteccion espiritual",
    category: "proteccion",
    shortDescription:
      "Escudo espiritual para proteger tu vida, tu familia y tu negocio de energias negativas y ataques espirituales.",
    longDescription:
      "La proteccion espiritual es un trabajo fundamental para mantener alejadas las energias negativas y los ataques espirituales. Consiste en crear un escudo energetico alrededor de la persona, su familia y sus bienes. Este trabajo es preventivo y correctivo, ideal para personas que sienten que son objetivo de envidias, mal de ojo o influencias oscuras.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: ["corte-de-brujeria", "limpias-espirituales"],
    process: [
      { order: 1, title: "Analisis", description: "Se evaluan las vulnerabilidades energeticas de la persona o espacio." },
      { order: 2, title: "Proteccion", description: "Se crea el escudo espiritual con rituales y elementos protectores." },
      { order: 3, title: "Mantenimiento", description: "Se refuerza periodicamente la proteccion para mantenerla activa." },
    ],
    benefits: ["Proteccion continua", "Para ti y tu familia", "Trabajo preventivo y correctivo"],
    testimonials: [
      { id: "t10", quote: "Despues de la proteccion, las cosas negativas dejaron de ocurrir.", authorInitials: "E.B.", relatedServiceSlug: "proteccion-espiritual" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Proteccion espiritual",
    seo: { metaTitle: "Proteccion espiritual | El Brujo Llanero", metaDescription: "Protege tu vida y tu familia de energias negativas. Consulta gratuita.", ogImage: "/images/servicios/proteccion-espiritual.jpg", canonical: "/servicios/proteccion-espiritual" },
  },
  {
    slug: "consultas-espirituales",
    title: "Consultas espirituales",
    category: "consulta",
    shortDescription:
      "Sesion de orientacion espiritual para resolver dudas, tomar decisiones y recibir guia sobre tu camino.",
    longDescription:
      "La consulta espiritual es una sesion de orientacion donde se analiza tu situacion actual desde una perspectiva espiritual. A traves de tecnicas de vision y lectura energetica, se obtienen respuestas a tus dudas mas importantes. Es ideal para personas que enfrentan decisiones difficultas, sienten que estan perdidas o necesitan claridad sobre su futuro.",
    priceNote: "Consulta de valoracion: gratuita",
    relatedSlugs: [],
    process: [
      { order: 1, title: "Apertura", description: "Se crea un espacio de confianza y se canaliza la energia." },
      { order: 2, title: "Lectura", description: "Se analiza la situacion y se reciben las respuestas espirituales." },
      { order: 3, title: "Orientacion", description: "Se brindan las recomendaciones y el plan de accion espiritual." },
    ],
    benefits: ["Primera consulta sin costo", "Confidencialidad total", "Orientacion clara y directa"],
    testimonials: [
      { id: "t11", quote: "La consulta me dio la claridad que necesitaba para tomar una decision importante.", authorInitials: "P.S.", relatedServiceSlug: "consultas-espirituales" },
    ],
    whatsappMessageTemplate: "Hola, quiero informacion sobre Consultas espirituales",
    seo: { metaTitle: "Consultas espirituales | El Brujo Llanero", metaDescription: "Orientacion espiritual para resolver tus dudas. Primera consulta gratuita.", ogImage: "/images/servicios/consultas-espirituales.jpg", canonical: "/servicios/consultas-espirituales" },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];
