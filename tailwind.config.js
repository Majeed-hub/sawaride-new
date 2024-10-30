module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to scan files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
