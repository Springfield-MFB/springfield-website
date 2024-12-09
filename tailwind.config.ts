import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        millik: ["var(--font-millik)"],
      },
      colors: {
        grey: {
          25: "#E4E4E4",
          50: "#D9D9D9",
          100: "#585858",
          150: "#4F4F4F",
          200: "#373737",
        },
        dark: {
          text: "#383838",
          primary: "#2B2B2B",
          secondary: "#4B4949",
        },
        brand: {
          primary: "#F0B929",
          secondary: "#F0B929",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        navbar: "0 4px 12px rgba(0, 0, 0, 0.04)", // Custom shadow
      },
      animation: {
        "slide-down": "slideDown 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-10px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
