/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        lightRed: '#530000',
        darkRed: '#380000',
        lightGray: '#fAfAfA',
        darkGray: '#0F0F10',
        midGray: '#1D1D1F'
      },
      fontFamily: {
        sans: ['Linberg', 'open-sans', 'Roboto', 'sans-serif']
      },
      screens: {
        xsm: '480px'
      }
    }
  },
  plugins: []
};

