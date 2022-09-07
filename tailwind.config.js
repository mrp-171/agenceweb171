/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      customblue: '#14094f',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    fontFamily: {
      'dm-mono': ['dm-mono'],
    },
    extend: {
    },
    transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
    aspectRatio: {
        '960/300': '960 / 300',
    }
    // backgroundImage: {
    //   'footer-waves': "url('./src/assets/img/footer-waves.svg)"
    // }
  },
  plugins: [],
} 
