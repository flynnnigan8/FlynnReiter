module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        wildflowers: {
          celadon: '#cfe8d8',
          sage: '#7fb77e',
          lilac: '#c9a4d6',
          rose: '#e9c8d9',
          plum: '#5a2d5c',
          bg: '#fffafc',
          foreground: '#2a1b2e'
        }
      }
    }
  },
  plugins: []
};
