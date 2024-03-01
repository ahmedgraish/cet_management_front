/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      screens: {
        xs: '325px'
      },
      colors: {
        primary: '#00A8B1',

        secondary: '#ecc94b'
        // ...
      },
    }
  },
  plugins: [],
}
