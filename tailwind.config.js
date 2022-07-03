module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // prettier-ignore
      colors: {
        "regal-blue": "#243c5a",
      },
      fontFamily: {
        notoSans: ["Noto Sans", "sans-serif"],
        aeonik_medium: ["Aeonik-Medium"],
      },
      keyframes: {
        showTopText: {
          "0%": {
            opacity: "0",
            transform: "translate(0, 100%)",
          },
          "40%": { transform: "translate(0, 50%)" },
          "60%": { transform: "translate(0, 50%)" },
          "100%": {
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },
        showTopTextOneLine: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "40%": { transform: "translateY(50%)" },
          "60%": { transform: "translateY(50%)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        showBottomText: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
          "40%": { transform: "translateY(-50%)" },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        entryDivider: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      listStyleType: {
        triangle: "disclosure-closed",
      },
      // prettier-ignore
      backgroundImage: {
        "gradient-radial": "radial-gradient(50.35% 50% at 50% 50%, #145F68 18.23%, rgba(9, 37, 41, 0) 100%)",
        "linear-gradient": "linear-gradient(158.47deg, #14626C -53.96%, #092529 48.35%)",
        "footer-gradient": "linear-gradient(58.94deg, #0A252C 0.05%, #295962 100.05%)",
      },
      transitionProperty: {
        bezier: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      },
      animation: {
        showTopText:
          "showTopText 1s cubic-bezier(0.5, 1, 0.89, 1) 0.5s normal forwards",
        showTopText1_5:
          "showTopTextOneLine 1s cubic-bezier(0.5, 1, 0.89, 1) 0.5s normal forwards",
        showBottomText:
          "showBottomText 1s cubic-bezier(0.5, 1, 0.89, 1) 1.5s normal forwards",
        showBottomText1:
          "showBottomText 1s cubic-bezier(0.5, 1, 0.89, 1) 1.5s normal forwards",
        showBottomText1_5:
          "showBottomText 1s cubic-bezier(0.5, 1, 0.89, 1) 1.5s normal forwards",
        entryDivider:
          "entryDivider 1s cubic-bezier(0.5, 1, 0.89, 1) 0.5s normal forwards",
        fadeInLeft: "fadeInLeft 1s ease-in 0s 1 normal forwards;",
        fadeInRight: "fadeInRight 1s ease-in 0s 1 normal forwards;",
        fadeInBottom: "fadeInBottom 1s ease-in 0s 1 normal forwards",
      },
    },
  },
  plugins: [],
};
