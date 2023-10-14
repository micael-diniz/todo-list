const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blueDark: "#1E6F9F",
        blue: "#4EA8DE ",
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333",
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
