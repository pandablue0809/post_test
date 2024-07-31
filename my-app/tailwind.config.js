/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "#8F00FF",
        secondaryColor: "#532BC5",
        bgColor: "#F9F9F9",
        backgroundImage : {
          'radial-gradient' : 'background: radial-gradient(50% 115.18% at 50% -15.18%, #8F00FF 0%, #532BC5 100%)',
        },
        textColor: "#606060",
        titleColor: "#1F1F2C",
      },
      fontFamily: {
        Poppins: 'Poppins',
      },
    },
  },
  plugins: [],
}