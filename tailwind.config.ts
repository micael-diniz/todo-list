import { nextui } from "@nextui-org/react";

import  colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        18: "4.5rem"
      },
      minHeight: {
        18: "4.5rem",
      },
      fontFamily: {
        "inter": ["Inter", "ui-sans-serif"]
      },
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
        default: {
          100: "#1E6F9F33"
        },
        danger: "#E25858",
      },
    },
    colors: {},
  },
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      checkbox: {
        colors: {
          primary: {
            DEFAULT: "#5E60CE"
          }
        }
      }
    }
  })]
};
