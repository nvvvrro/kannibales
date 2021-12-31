const colors = require("tailwindcss/colors");
/* const plugin = require("tailwindcss/plugin"); */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      pacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        full: "9999px",
      },
    },
    screens: {
      "2xl": "1920px",
      xl: "1440px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
      "2xs": "360px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Menlo", "monospace"],
    },
    colors: {
      primary: {
        main: colors.indigo[300],
        dark: colors.indigo[900],
        light: colors.indigo[100],
        contrast: colors.rose[500],
      },
      secondary: {
        main: colors.indigo[200],
        dark: colors.indigo[800],
        light: colors.indigo[50],
        contrast: colors.rose[400],
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
  plugins: [],
};
