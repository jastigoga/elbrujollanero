import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Poppins } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], style: ["italic"], weight: ["500", "600"], variable: "--font-cormorant" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://elbrujollanero.com"),
  title: {
    default: "El Brujo Llanero | Consultas y trabajos espirituales",
    template: "%s | El Brujo Llanero",
  },
  description:
    "Maestro Supremo del Ocultismo. Amarres de amor, limpias espirituales y proteccion. Consulta gratuita, trabajo serio, casos reales.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "El Brujo Llanero",
    title: "El Brujo Llanero | Consultas y trabajos espirituales",
    description:
      "Maestro Supremo del Ocultismo. Amarres de amor, limpias espirituales y proteccion. Consulta gratuita, trabajo serio, casos reales.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${poppins.variable}`}>
      <body>
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0A0A0B]"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
