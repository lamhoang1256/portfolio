module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple9c: "#9C7EFB",
        green1d: "#1dc071",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        linearGreen: "linear-gradient(to right bottom, rgb(29, 192, 113), rgb(164, 217, 108))",
        linearOrangee: "linear-gradient(to right top,#fc6c8f,#ffb86c)",
        linearPurple: "linear-gradient(to right top,#6a5af9,#d66efd)",
        linearPurple2: "linear-gradient(90deg,#1c093c,#280f4c)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography")],
};
