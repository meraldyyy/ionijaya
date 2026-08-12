/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d9e2f0',
          200: '#b3c5e0',
          300: '#7d9cc8',
          400: '#4a6fa8',
          500: '#2b4f8a',
          600: '#1e3a8a',
          700: '#172e6e',
          800: '#0f1f4a',
          900: '#0f172a',
          950: '#080d1f',
        },
        accent: {
          50: '#ecfbff',
          100: '#cff4ff',
          200: '#a3e9ff',
          300: '#6bd8ff',
          400: '#38c4f5',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4d6e',
          900: '#0b4260',
        },
        mist: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e6edf4',
          300: '#d3dee9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
