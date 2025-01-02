import { transform } from "next/dist/build/swc";
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
        background: "#FAFAF5", //Change in navbar when bgcolour is chaged later
        background2: "#100E0E",
        Purple: "#7163BA",
      },
      backgroundImage: (theme) => ({
        "radial-gradient-custom":
          "radial-gradient(circle, rgb(113 99 186 / 0.05), rgb(113 99 186 / 0.25)",
      }),
      lineHeight: {
        "extra-loose": "3rem",
        "12": "3.5rem",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 30s  linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
