module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          lighter: '#00C9DD',
          default: '#1D2D8B',
          dark: '#141C4A',
        },
        white: '#fff',
        green: '#00C9DD',
        yellow: '#F1B83F',
        black: '#141C4A',
        brown: {
          lighter: '#664E4E',
          default: '#664E4E',
          dark: '#360732',
        },
        red: '#EC3524'
      },
      backgroundOpacity: {
        '8': '0.08',
      },
      fontFamily: {
        'african': 'african'
      }
    },
  },
  variants: {},
  plugins: [],
}
