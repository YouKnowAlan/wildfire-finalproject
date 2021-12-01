const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FD7014',
      base: '#222831',
      baseSecondary: '#393E46',
      secondary: '#EEEEEE',
      gray: colors.coolGray,
      black: colors.black,
      orange: colors.orange,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
