/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto Condensed', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        londrina: ['Londrina Sketch', 'cursive'],
      }
    },
  },
  plugins: [],
}

