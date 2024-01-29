export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      zIndex: {
        100: 100,
      },

      keyframes: {
        show: {
          "0%, 49.99%": { opacity: 0, "z-index": 10 },
          "50%, 100%": { opacity: 1, "z-index": 50 },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },

      animation: {
        show: "show 0.7s",
        spinner: 'spinner 1.5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}