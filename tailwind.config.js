/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "urbanist": ["Urbanist", "sans-serif"],
        "playfair": ["Playfair Display", "serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
};
