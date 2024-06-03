import { fontFamily } from "./src/styles/font-family"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{ts,tsx}", "./src/**/*.{ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily
    },
  },
  plugins: [],
}