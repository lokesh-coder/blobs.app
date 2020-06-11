module.exports = {
  theme: {
    extend: {
      colors: {
        theme: {
          100: "#c1c4cb",
          200: "#989ca9",
          300: "#6e7486",
          400: "#4f576c",
          500: "#303952",
          600: "#2b334b",
          700: "#242c41",
          800: "#1e2438",
          900: "#131728",
        },
      },
    },
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active"],
    translate: ["responsive", "hover", "focus", "active"],
    transitionProperty: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
