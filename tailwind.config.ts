import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f8e8cf",
        ink: "#17100d",
        oxblood: "#4d0806",
        candle: "#d71919",
        ember: "#ffcc4d",
        smoke: "#6f6258",
      },
      boxShadow: {
        comic: "6px 6px 0 #17100d",
        red: "0 0 28px rgba(215, 25, 25, 0.38)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
