module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'suva-grey': '#8d8d8d',
        'dark-gray': '#b3b3b3',
        'grey': '#808080',
        'charcoal': '#424242',
      },
    },
    fontFamily: {
      'russo-one': ['Russo One', 'sans-serif'],
    },
    boxShadow: {
      '2xl-lrb': '0px 10px 11px 4px rgba(0, 0, 0, 0.25)',
      'xl-rb': '3px 5px 5px 0px rgba(0,0,0,0.75)',
      'sm-lr': '-1px 1px 2px 1px rgba(0,0,0,0.75), 1px 1px 2px 1px rgba(0,0,0,0.75)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
