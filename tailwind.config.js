/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //add custom colors
      colors: {
        'primary': '#007bff',
        'secondary': '#fe4e00',
      }
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require('daisyui'),
  ],
}

