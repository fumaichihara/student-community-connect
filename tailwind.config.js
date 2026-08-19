/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#FFFFFF',
          900: '#FAFAFA',
          800: '#F5F5F5',
          700: '#EFEFEF',
          600: '#E5E5E5',
        },
        slate: {
          150: '#19376D',
        },
        accent: {
          DEFAULT: '#19376D',
          light: '#2C5AA0',
          dark: '#102A57',
        },
        highlight: {
          DEFAULT: '#FFD700',
          dark: '#E6C200',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      backgroundImage: {
        'chevron-fade': 'linear-gradient(120deg, #FFFFFF 0%, #FAFAFA 55%, #F5F5F5 100%)',
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
