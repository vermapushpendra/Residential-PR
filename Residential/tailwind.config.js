/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'default_xl': '1365px',
      },

      colors: {
        customYellow: '#f0e9e0',
        customWhite: '#f1f1f1',
        customGold: '#c2ab92',
      },


    },
  },
  plugins: [

  ],
}

