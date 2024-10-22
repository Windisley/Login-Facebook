/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       "primary": "#0866ff",
       "button": "#42b72a",
       "background": "#f2f4f7",
       
      },
      translate:{
       "centralize": "-50% -50%"
      },
      borderWidth:{
        "onepix": "1px"
      },
      margin:{
        "m-0auto": "0 auto"
      }
    },
  },
  plugins: [],

}

