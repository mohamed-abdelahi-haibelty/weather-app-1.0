/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          10:'#004BFF',
          0:`#00B2FF`,
        },
        green:{
          10: ' #4CD964'
        },
        yellow:{
          20:' #FFCC00'
        },
        orange:{
          30:' #FF9500'
        },
        red:{
          40:'#FF2D55 '
        }
      },
      fontFamily:{
        heading:['Raleway', 'sans-serif'],
        body:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

