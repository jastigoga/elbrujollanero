/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Mapear aqui las URLs antiguas de WordPress -> nuevas rutas /servicios/[slug]
    // Ejemplo: { source: "/amarres-de-amor", destination: "/servicios/amarres-de-amor", permanent: true }
    return [];
  },
};

export default nextConfig;
