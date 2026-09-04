/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A47',
          deep: '#081A2E',
        },
        brand: {
          orange: '#FF6B35',
          orangedeep: '#E8532A',
          yellow: '#FFC53D',
          teal: '#1BA098',
        },
        paper: '#FDFBF7',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        orange: '0 10px 24px rgba(255,107,53,0.35)',
        card: '0 16px 32px rgba(14,42,71,0.12)',
      },
    },
  },
  plugins: [],
}
