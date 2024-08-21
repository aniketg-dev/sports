module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './dist/**/*.{html,js}', // Ensure Tailwind processes files in dist
    './**/*.{html,js}' // You can add more directories as needed
  ],
  theme: {
    extend: {
      height: {
        '20vh': '20vh',
        '90vh': '90vh',
        '100vh': '100vh',
        '120vh': '120vh',
      },
    },
  },
  plugins: [],
};
