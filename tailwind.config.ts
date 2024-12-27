import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#FAFAF5",
        background2: "#100E0E",
        Purple: "#7163BA",
      },
      lineHeight: {
        "extra-loose": "3rem",
        "12": "3.5rem",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
