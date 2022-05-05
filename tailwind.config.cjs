module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        react: {
          blue: '#61dafb',
          dark: '#282c34',
        }
      },
    },
  },
  plugins: [],
};
