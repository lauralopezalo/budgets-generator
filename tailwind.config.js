/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {colors: {
      'tangerine': '#FE8E02',
      'bermuda': '#78dcca',
    },},
    
  },
  plugins: [],
}

