import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#08244A",
        ocean: "#0E6BA8",
        teal: "#2CA6A4",
        leaf: "#2E9E4D",
        mist: "#F6FBFF"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(8, 36, 74, 0.11)",
        card: "0 10px 28px rgba(8, 36, 74, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
