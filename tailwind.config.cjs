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
        'lightliver': "#856860",
        'redwood': '#8D5B4C',
        'caputmortuum': '#5A2A27',
        'neonteal': "#00FFD1",
        'neonyellow': "#FFFF00",
        'neonpink': "#FF6EC7",
        'neonblue': "#00D8FF"
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
        slidein:{
          "0%": {
            transform: 'translateX(-100%)'
           
          },
          "100%": {
            transform: 'translateX(0)'
          }
        }

      },
      animation: {
        typing: "typing 2s steps(20) alternate ",
        slideIn: "slidein 1s steps(20) alternate ",
      }
    },
  },
  plugins: [],
}