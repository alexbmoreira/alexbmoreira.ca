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
      backgroundImage: () => ({
        space: "url('../images/header_bg.jpg')",
        "space-pixel": "url('../images/header_bg_pixel.jpg')"
      }),
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
