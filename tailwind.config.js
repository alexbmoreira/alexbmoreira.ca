module.exports = {
  purge: ["./public/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" }
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"]
    },
    colors: {
      snow: {
        DEFAULT: "#F2F2F2"
      },
      midnight: {
        DEFAULT: "#161616"
      },
      steel: {
        DEFAULT: "#AFAFAF"
      },
      slate: {
        DEFAULT: "#606367"
      },
      platinum: {
        DEFAULT: "#DADDE4"
      },
      cornflower: {
        DEFAULT: "#7698FF"
      },
      indigo: {
        DEFAULT: "#2E5265"
      },
      brand: {
        ruby: "#CC342D",
        rails: "#D30001",
        react: "#61DAFB",
        postgresql: "#4169E1",
        tailwind: "#06B6D4",
        heroku: "#430098",
        firebase: "#F7C62F",
        "google-cloud": "#4285F4",
        python: "#3776AB",
        elixir: "#4B275F",
        phoenix: "#FD4F00",
        swift: "#F05138"
      }
    },
    fontSize: {
      "4xs": "0.25rem",
      "3xs": "0.375rem",
      "2xs": "0.5rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    extend: {
      transformOrigin: {
        menu: "1rem 1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
