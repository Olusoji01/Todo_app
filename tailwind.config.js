/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto':['"Roboto", sans-serif'],
        'Vollkorn':['"Vollkorn", serif'],
      },
    },
  },
  plugins: [],
  "scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./public/style.css"
  }
}

