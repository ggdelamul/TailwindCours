const defaut = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
console.log(colors);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      myFont: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        "monVert": {
          "50": "#e6fbe6",
          "100": "#ccf6ce",
          "200": "#99ee9c",
          "300": "#66e56b",
          "400": "#33dd39",
          "500": "#00d408",
          "600": "#00aa06",
          "700": "#007f05",
          "800": "#005503",
          "900": "#002a02"
        },
        "monBleu": colors.blue,
      },
      screens: {
        'xs': '350px'
      },
      spacing: {
        '128': '34rem'
      },
      fontSize: {
        'h2': '22px'
      },
      backgroundSize: ({ theme }) => ({ ...theme('spacing') })
    },
  },
  plugins: [require("./monsuperplugin")],
}

