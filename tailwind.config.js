/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'base': ['Libre Caslon Text'],
      },
      colors: {
        'ciobes': '#67a68d',
        'oxford': '#8290a0',
        'letras': '#373435'
      },
      backgroundImage: {
        'base-back': "url('/img/fondo-gris.jpg')",
      }
    }
  },
  plugins: []
};