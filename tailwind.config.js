/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      tablet: "768px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      xxl: "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        tablet: "30px",
        md: "40px",
        lg: "60px",
        xl: "80px",
        xxl: "100px",
      },
    },
  },
  plugins: [],
};
