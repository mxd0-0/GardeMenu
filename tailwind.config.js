/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: '#B5C732',
        },
        screens: {
        xs: '360px', // Example for very small phones
      },
    },
  },
  plugins: [],
}

