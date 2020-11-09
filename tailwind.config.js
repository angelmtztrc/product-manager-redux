// Add your custom configurations
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#28abb9',
        secondary: '#2d6187'
      }
    }
  },
  variants: {},
  plugins: []
};
