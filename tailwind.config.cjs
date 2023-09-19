/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#C4BBAF',
        'cinereous': "#A5978B",
        'liver': "#5C4742",
        'redwood': '#8D5B4C',
        'caputmortuum': '#5A2A27'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },

      },
      animation: {
        typing: "typing 2s steps(20) alternate ",
        appear: 'fadeIn 2s linear',
      }
    },
  },
  plugins: [],
}