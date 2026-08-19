/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#FFFFFF',
          900: '#F8FAFC',
          800: '#F1F5F9',
          700: '#E7EBF3',
          600: '#D8DEEA',
        },
        slate: {
          150: '#19376D',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#19376D',
          dark: '#E6C200',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'chevron-fade': 'linear-gradient(120deg, #FFFFFF 0%, #F8FAFC 55%, #F1F5F9 100%)',
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
