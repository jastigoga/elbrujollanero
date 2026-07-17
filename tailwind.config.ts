import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./nodes/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        elevated: "var(--bg-elevated)",
        carbon: "var(--bg-carbon)",
        border: "var(--border)",
        gold: {
          DEFAULT: "var(--gold)",
          soft: "var(--gold-soft)",
        },
        ivory: {
          DEFAULT: "var(--ivory)",
          dim: "var(--ivory-dim)",
        },
        whatsapp: {
          DEFAULT: "var(--whatsapp)",
          dark: "var(--whatsapp-dark)",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        voice: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        ui: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        control: "10px",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
