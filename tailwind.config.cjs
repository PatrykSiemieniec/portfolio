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
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }, fadeIn: {
          "0%": {
            opacity: 0,
            scale: 0.8,
          },
          "100%": {
            opacity: 1,
            scale: 1
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
        appear: 'fadeIn 2s linear',
      }
    },
  },
  plugins: [],
}