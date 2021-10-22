const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          // Configure your color palette here
          'cyan': colors.cyan,
          'teal' :colors.teal,
          amazon_blue:{
            light:"#232f3e",
            blue:"#131"
          }
        }

    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    
    require('@tailwindcss/line-clamp'),
  ],
}
