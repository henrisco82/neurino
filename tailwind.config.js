/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#C2262C',
        },
        accent: {
          yellow: '#F4C542',
          green: '#9AD26E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
