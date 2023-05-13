/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //-----Dark mode colors-----
        'dark': '#000',
        'dark-h': '#e9e9e9',
        'dark-p': '#a0a0a0',
        'dark-p1': '#111',
        'dark-p3': '#333',
        'dark-p2': '#888',

        //-----Main colors-----
        'start-blue': '#007CF0',
        'start-red': '#7928CA',
        'end-blue': '#00DFD8',
        'end-red': '#FF0080',
      }
    },
  },
  plugins: [],
}

