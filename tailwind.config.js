module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        400: "450px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
