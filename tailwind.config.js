/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "custom1": "#78Dcca",
      customYellow: {
        "yellowlight": "#FFDD00",
      }
    },
    extend: {},
  },
  plugins: [],
}