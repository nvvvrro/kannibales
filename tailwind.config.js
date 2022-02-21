const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
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
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      mobile: "640px",
      md: "768px",
      desktop: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: {
        main: colors.indigo[200],
        dark: colors.indigo[900],
        light: colors.indigo[100],
        contrast: colors.indigo[500],
      },
      secondary: {
        main: colors.indigo[200],
        dark: colors.indigo[800],
        light: colors.indigo[50],
        contrast: colors.indigo[500],
      },
      btn: {
        main: colors.pink[400],
        dark: colors.pink[900],
        light: colors.pink[200],
        contrast: colors.rose[600],
        current: colors.pink[500],
        secondary: colors.blue[500],
      },
      tx: {
        title: colors.pink[400],
        subtitle: colors.indigo[600],
        ph: colors.indigo[300],

        main: colors.gray[500],
        dark: colors.gray[900],
        light: colors.gray[100],
        current: colors.gray[600],

        warning: colors.orange[500],
        success: colors.green[500],
        error: colors.red[500],
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      pink: colors.pink,
    },
  },
  fontFamily: {
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  future: {
    purgeLayersByDefault: true,
  },
};
