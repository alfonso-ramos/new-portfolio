/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#102542',
        'secondary': '#C0D6DF',
        'terciary': '#EC0B43',
      }),
      textColor: {
        'primary':'#102542',
        'secondary': '#C0D6DF',
        'terciary': '#EC0B43',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
    variants: {
      width: ['responsive', 'hover', 'focus'],
      extends: {

      }
    }
  },
  plugins: [],
}
