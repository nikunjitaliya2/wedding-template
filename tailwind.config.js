/** @type {import('tailwindcss').Config} */
const {Theme} = require("daisyui");
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      Theme : "cupcake"
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
