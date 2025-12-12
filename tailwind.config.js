/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lightShadow': '0 0 15px 8px rgba(255, 255, 255, 0.3)', 
      },
        keyframes: {
        textColorChange: {
          "0%": { color: "#e84141ff" },
          
          
          "50%": { color: "#ffaa00ff" },
          "100%": { color: "#d6439eff" }
        },
        textColorChange1: {
          "0%": { color: "#ed4dedff" },
         
          "50%": { color: "rgba(198, 177, 57, 1)" },
        
          "100%":{ color: "#d74355ff" },
        },
        backGroundColorChange: {
       "0%": { backgroundColor: "#e45c5cff" },
          "25%": { backgroundColor: "#de8282ff" },
          "50%": { backgroundColor: "rgba(230, 212, 17, 1)" },
          "75%": { backgroundColor: "#cf992eff" },
          "100%": { backgroundColor: "#dd58aaff" }
        },
         borderColorChange: {
          "0%, 50%": { borderColor: "#f26464ff"},
  
            
          "100%": { borderColor: "#ff00ff"  },
        },
        rotateBorder: {
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
},
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
         buttonFlow: {
          "0%": { background: "linear-gradient(90deg, #8A2BE2 70%, #4A148C 30%)" },
          "25%": { background: "linear-gradient(90deg, #FF5722 70%, #BF360C 30%)" },
          "50%": { background: "linear-gradient(90deg, #2196F3 70%, #0D47A1 30%)" },
          "75%": { background: "linear-gradient(90deg, #4CAF50 70%, #1B5E20 30%)" },
          "100%": { background: "linear-gradient(90deg, #8A2BE2 70%, #4A148C 30%)" },
        },
         topScaleIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-40px) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        textColorChange: "textColorChange 50s infinite ease-in-out",
        textColorChange1:"textColorChange1 50s infinite ease-in-out",
        borderColorChange:"borderColorChange 50s infinite ease-in-out",
         combinedRotateAndBorder: "rotateBorder 6s linear infinite, borderColorChange 20s linear infinite",
         wave: 'wave 5s ease-in-out infinite',
          buttonFlow: ' buttonFlow 20s ease-in-out infinite',
           spinSlow: 'spin 3s linear infinite',
           rotateBorder: "rotateBorder 6s linear infinite",
           backGroundColorChange:"backGroundColorChange 50s infinite ease-in-out ",
           topScaleIn: "topScaleIn 0.6s ease-out forwards",
           combinedbackGroundAndspinSlow:"backGroundColorChange 50s infinite ease-in-out,spin 3s linear infinite",

      }
    },
  },
  plugins: [],
}

