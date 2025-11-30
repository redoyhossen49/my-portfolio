/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
        textColorChange: {
          "0%": { color: "#ff0000" },
          "25%": { color: "#00ff00" },
          "50%": { color: "#00ffff" },
          "75%": { color: "#ffaa00" },
          "100%": { color: "#ff00ff" }
        },
         borderColorChange: {
          "0%, 50%": { borderColor: "transparent" },
          "25%": { borderColor: "#fbbf24ff" },    // yellow-400
          "75%": { borderColor: "#f70b0bff" },    // pink-500
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        textColorChange: "textColorChange 10s infinite linear",
        borderColorChange:"borderColorChange 10s infinite linear",
         combinedColorAndBorder: "textColorChange 20s linear infinite, borderColorChange 20s linear infinite",
      }
    },
  },
  plugins: [],
}

