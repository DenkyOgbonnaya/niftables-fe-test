/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        grey: "#13171D",
        purple: "#AB23FF",
        primary: "#3D8BFF",
        secondary: "#AB23FF",
        blue: "#3D8BFF",
        blacK: "#000"
      },
      fontSize: {
        xs: [
          "0.79rem",
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.889rem",
          {
            lineHeight: "1.438rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.3rem",
          },
        ],
        l: [
          "1.125rem",
          {
            lineHeight: "1.4625rem",
          },
        ],
        xl: [
          "1.266rem",
          {
            lineHeight: "2rem",
          },
        ],
        "2xl": [
          "1.424rem",
          {
            lineHeight: "2rem",
          },
        ],
        "4xl": [
          "2.375rem",
          {
            lineHeight: "2.85rem",
          },
        ],
        "7xl": [
          "4.25rem",
          {
            lineHeight: "4.675rem",
          },
        ],
      },
      fontFamily: {
        heading: [
          "var(--font-monument-extend)",
          ...defaultTheme.fontFamily.sans,
        ],
        body: ["var(--font-satoshi)", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1920px",
      },
      borderRadius: {
        xs: "0.375rem",
      },
    },
  },
  plugins: [],
};
