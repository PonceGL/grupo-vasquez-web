module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // prettier-ignore
      colors: {
        "regal-blue": "#243c5a",
      },
      // prettier-ignore
      backgroundImage: {
        "gradient-radial": "radial-gradient(50.35% 50% at 50% 50%, #145F68 18.23%, rgba(9, 37, 41, 0) 100%)",
        "linear-gradient": "linear-gradient(158.47deg, #14626C -53.96%, #092529 48.35%)",
        "footer-gradient": "linear-gradient(58.94deg, #0A252C 0.05%, #295962 100.05%)"
      },
    },
  },
  plugins: [],
};
