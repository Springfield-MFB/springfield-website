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
          "25": "#E4E4E4",
          "50": "#D9D9D9",
          "100": "#585858",
          "150": "#4F4F4F",
          "200": "#373737",
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
        navbar: "0 4px 12px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        fadeInDown: "fadeInDown 1s ease-in-out",
        "slide-down": "slideDown 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeInUp: {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeInDown: {
          from: { transform: "translateY(-40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-10px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
};
export default config;
