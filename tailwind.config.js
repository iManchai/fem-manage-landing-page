/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: {
        100: 'hsl(12, 88%, 59%)',
        200: 'hsl(228, 39%, 23%)'
      },
      neutrals: {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(13, 100%, 96%)',
        300: 'hsl(227, 12%, 61%)',
        400: 'hsl(233, 12%, 13%)'
      },
    },
    fontFamily: {
      main: ['Be Vietnam Pro', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
