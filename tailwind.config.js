/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF', // Example blue, will adjust based on Figma
        secondary: '#F2F2F7', // Example light gray
        background: '#FFFFFF',
        text: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Assuming Inter or system font
      }
    },
  },
  plugins: [],
}
