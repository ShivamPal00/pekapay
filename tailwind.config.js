module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue1:"#00d4ff ",
        black1:"#3a3a3a",
      },
      zIndex: {
        n1: '-2',
      },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
