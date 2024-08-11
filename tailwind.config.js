/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{html,js}'],
    theme: {
      extend: {
        height: {
        '20vh':'20vh',
        '90vh': '90vh',
        '100vh': '100vh',
        '120vh': '120vh', // Add more as needed
      },},
    },
    plugins: [],
  }