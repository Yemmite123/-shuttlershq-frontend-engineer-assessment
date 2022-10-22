const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#6941C6",
      dark: "#53389E",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      body: ["Inter", "Open Sans", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "476px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  // plugins: [ require('@tailwindcss/forms')],
};
