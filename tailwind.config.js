module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#28abb9',
        secondary: '#2d6187'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
