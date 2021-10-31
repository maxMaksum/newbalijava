const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      extend: {
        backgroundImage: (theme) => ({
          home: "url('/images/background.png')",
        }),
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
}
