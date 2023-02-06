/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '500': '2.5',
        '200': '1.7'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsSemiBold: ['PoppinsSemiBold','sans-serif'],
        latoBold: ["LatoBold", "cursive"],
      },
      backgroundImage: {
        'hero-left': "url('./assets/images/left-blue.svg')",
        'hero-right': "url('./assets/images/blue-right.svg')",
        'pink-left':"url('./assets/images/pink-left.svg')",
        'pink-right':"url('./assets/images/pink-right.svg')",
        'person1':"url('./assets/images/person.png')",
        'person2':"url('./assets/images/person2.png')"
      },
      hidden: ["group-hover"]
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1130px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '867px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
