import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wu-blue":       "#1A73E8",
        "wu-blue-dark":  "#0d52c8",
        "wu-light-blue": "#E8F1FF",
        "wu-sky":        "#D6E8FF",
        "wu-dark":       "#0D1B3E",
        "wu-accent":     "#4F8EF7",
        "wu-teal":       "#00B4D8",
        "wu-bg":         "#EEF4FF",
      },
      backgroundImage: {
        "wu-gradient":  "linear-gradient(145deg, #b8d4ff 0%, #cce3ff 18%, #e0f0ff 38%, #c6deff 58%, #d4e9ff 78%, #a8c8ff 100%)",
        "wu-btn":       "linear-gradient(135deg, #1A73E8, #0d52c8)",
        "wu-dark-btn":  "linear-gradient(135deg, #0D1B3E, #1a3a72)",
        "wu-cta-grad":  "linear-gradient(120deg, #0D1B3E 0%, #1a3a72 50%, #1A73E8 100%)",
      },
      fontFamily: {
        sans:    ["'DM Sans'", "sans-serif"],
        display: ["'Bricolage Grotesque'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float:     "float 3.5s ease-in-out infinite",
        marquee:   "marquee 22s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%":  { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%":  { opacity: "0" }, "100%": { opacity: "1" } },
        float:   { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { "0%":  { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
