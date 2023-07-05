/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#be3142',
        'black': '#131414',
        'white': '#fff',
        'gray': '#d8d8d8',
        'orange': '#c35e2d',
      },
   },
  plugins: [],
  }
}