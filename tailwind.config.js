/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'dot-typing': {
          '0%': {
            boxShadow: '9992px 0 0 0 gray, 9999px 0 0 0 gray, 10006px 0 0 0 gray'
          },
          '16.667%': {
            boxShadow: '9992px -6px 0 0 gray, 9999px 0 0 0 gray, 10006px 0 0 0 gray'
          },
          '33.333%': {
            boxShadow: '9992px 0 0 0 gray, 9999px 0 0 0 gray, 10006px 0 0 0 gray'
          },
          '50%': {
            boxShadow: '9992px 0 0 0 gray, 9999px -6px 0 0 gray, 10006px 0 0 0 gray'
          },
          '66.667%': {
            boxShadow: '9992px 0 0 0 gray, 9999px 0 0 0 gray, 10006px 0 0 0 gray'
          },
          '83.333%': {
            boxShadow: '9992px 0 0 0 gray, 9999px 0 0 0 gray, 10006px -6px 0 0 gray'
          },
          '100%': {
            boxShadow: '9992px 0 0 0 gray, 9999px 0 0 0 gray, 10006px 0 0 0 gray'
          }
        }
      },
      colors: {
        'main-color': '#0084ff'
      }
    }
  },
  plugins: []
}
