/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "bMC": "var(--bMC)",
        "sec-color": "var(--sec-color)",
        // primary: '#0D5C91',
        // secondary: '#FF6B35',
        primary: 'rgb(27 99 146 / 0.9)',
        secondary: '#1b6392',
      },
    },
  },
  plugins: [],
};
