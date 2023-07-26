/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "18": "4.5rem",
      },

      fontSize: {
        "3.5xl": "2.125rem",
        "4.3xl": "2.625rem",
        "4.5xl": "2.875rem",
        "4.7xl": "2.5rem",
      },

      height: {
        "90": "23.063rem",
      },
    },
  },
  plugins: [],
}

