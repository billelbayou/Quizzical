/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(./src/images/background.png)",
      },
      colors: {
        startButton: "rgb(167 168 250)"
      }
    },
  },
  plugins: [],
};
