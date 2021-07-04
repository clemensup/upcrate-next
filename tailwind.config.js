module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Montreal", "sans"],
        display: ["Right Grotesk", "sans"],
      },
      colors: {
        purple: {
          dark: "#372152",
          DEFAULT: "#6642BB",
          light: "#8165C1",
          lightest: "#F3F0F9",
        },
        green: {
          DEFAULT: "#80D7B6",
        },
        orange: {
          DEFAULT: "#FF481D",
        },
        red: {
          DEFAULT: "#DD4059",
        },
        blue: {
          DEFAULT: "#1644EF",
        },
        grey: {
          DEFAULT: "#707070",
        },
        rose: {
          DEFAULT: "#F1A8BA",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
