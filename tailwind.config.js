module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
    colors: {
      primary: '#0f172a',
      secondary: '#38bdf8',
      light: '#e2e8f0',
      medium: '#64748b',
      error: '#ff0000',
      dark: '#1e293b',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
