/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace'],
      },
      colors: {
        background: '#090a0c',
        surface: '#111317',
        'surface-light': '#181b21',
        accent: {
          DEFAULT: '#10b981',
          hover: '#34d399',
          dim: '#064e3b',
          glow: 'rgba(16, 185, 129, 0.15)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.2s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    }
  },
  plugins: [],
}
