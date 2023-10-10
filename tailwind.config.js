const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: {
          600: "#1A1A1A",
          700: "#0D0D0D"
        },
        white: "#ffffff",
      }
    },
    colors: {
    },
  },
  plugins: [],
};
