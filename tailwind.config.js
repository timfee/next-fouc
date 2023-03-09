const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        genoa: {
          50: "#eefbf6",
          100: "#d6f5e8",
          200: "#b0ead5",
          300: "#7dd8be",
          400: "#48bfa1",
          500: "#25a488",
          600: "#167e69",
          700: "#126a5b",
          800: "#115448",
          900: "#0f453d",
        },
      },
    },
  },
  plugins: [],
}
