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
        'loader-rotate': 'loader-rotate 2s linear infinite',
        'loader-letter': 'loader-letter 2s infinite',
        'marquee': 'marquee 25s linear infinite',
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
        'loader-rotate': {
          '0%': { 
            transform: 'rotate(90deg)',
            boxShadow: '0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset'
          },
          '50%': { 
            transform: 'rotate(270deg)',
            boxShadow: '0 10px 20px 0 #fff inset, 0 20px 10px 0 #d60a47 inset, 0 40px 60px 0 #311e80 inset'
          },
          '100%': { 
            transform: 'rotate(450deg)',
            boxShadow: '0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset'
          },
        },
        'loader-letter': {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '20%': { opacity: '1', transform: 'scale(1.15)' },
          '40%': { opacity: '0.7', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};