module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: "#64ffda",
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#e6f1ff",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".79rem",
      base: "1rem",
      md: "1.05rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1.5xl": "1.45rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.3rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
      "7xl": "4.5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
