/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B18',
          900: '#0B1226',
          800: '#111A33',
          700: '#182448',
          600: '#22315E',
        },
        slate: {
          150: '#E7E9F0',
        },
        accent: {
          DEFAULT: '#FFFFFF',
          light: '#FFD700',
          dark: '#19376D',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'chevron-fade': 'linear-gradient(120deg, #0B1226 0%, #111A33 55%, #182448 100%)',
      },
      keyframes: {
        chevronMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
        driftSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40px)' },
        },
      },
      animation: {
        chevron: 'chevronMove 1.6s ease-in-out infinite',
        drift: 'driftSlow 6s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
