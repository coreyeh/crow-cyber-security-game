import { baseColors } from "./src/utils/colors.js"
import { baseFonts } from "./src/utils/fonts.js"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...baseColors
      },
      fontFamily: {
        ...baseFonts
      },
    },
  },
  plugins: [],
}