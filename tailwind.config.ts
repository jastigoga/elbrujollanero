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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        nodeAppear: {
          "0%": { opacity: "0", transform: "scale(0.6)" },
          "60%": { opacity: "1", transform: "scale(1.04)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
        float: "float 4s ease-in-out infinite",
        "node-appear": "nodeAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
