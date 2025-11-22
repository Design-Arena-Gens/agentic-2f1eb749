import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        "midnight": "#0B1026",
        "sky-glow": "#52A7F9",
        "sunset": "#F475A4",
        "mint": "#45E0B6",
        "sand": "#F8D477"
      }
    }
  },
  plugins: []
};

export default config;
