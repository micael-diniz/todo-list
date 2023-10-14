const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        purpleDark: "#5E60CE",
        blueDark: "#1E6F9F",
        blue: "#4EA8DE ",
        gray: {
          100: "#F2F2F2",
          300: "#808080",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        white: "#ffffff",
      },
    },
    colors: {},
  },
  plugins: [],
};
