/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white-t1': 'hsl(0, 0%, 100%)',
      'lightgray-t1': 'hsl(212, 45%, 89%)',
      'grayishblue-t1': 'hsl(220, 15%, 55%)',
      'darkblue-t1': 'hsl(218, 44%, 22%)',
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}

