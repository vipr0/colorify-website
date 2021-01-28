const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    // './components/**/*.{vue,js}',
    // './layouts/**/*.vue',
    // './pages/**/*.vue',
    // './plugins/**/*.js',
    // './nuxt.config.js',
  ],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent'
    },
    extend: {
      zIndex: {
        "-1": "-1", 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}