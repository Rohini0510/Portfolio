/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'navy-dark': '#0D1B2A',
        'navy-medium': '#1B263B',
        'navy-light': '#415A77',
        'cyan-glow': '#00D9FF',
        'cyan-light': '#00B4D8',
        'blue-gradient': '#0077B6',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'progress': 'progress 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF' },
          '100%': { boxShadow: '0 0 20px #00D9FF, 0 0 30px #00D9FF' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
};