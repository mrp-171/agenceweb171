/** @type {import('tailwindcss').Config} */

const { transform } = require("lodash");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      customblue: "#14094f",
      white: "#fff",
      whitee: "#f3f4f5",
      black: "#000000",
      skyblue: "#5ADAE8",
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
    extend: {
      keyframes: {
        // move: {
        //   "25%": {
        //     opacity: 1,
        
        //   },
        //   "33%": {
        //     opacity: 1,
        //     transform: translateY("30px")
        //   },
        //   "67%": {
        //     opacity: 1,
        //     transform: translateY("40px")
        //   },
        //   "100%": {
        //     opacity: 0,
        //     transform: translateY("55px"), 
        //     scale3d:(0.5, 0.5, 0.5)
        //   }
        // },

        pulse: {
          "to": {
            opacity: 1,
          }
        }
      },

      animation: {
        move: '3s ease-out 1s infinite',
        pulse: '2s linear alternate infinite',
      },

      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
    backgroundImage: {
      "header-planet": "url('/assets/img/planete.webp')",
      wave: "url('/assets/img/wave-body.png')",
    },
    fontFamily: {
      "dm-mono": ["dm-mono"],
    },
  },
  plugins: [],
};
