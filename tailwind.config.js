/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Comico-Regular', 'comic sans ms', 'sans-serif'],
      'header': ['Chubbo-Variable', 'Cooper Black', 'sans-serif'],
      'body': ['Chillax-Variable', 'sans-serif'],
    },
    colors: {
      'primary': '#F52974',
      'secondary': '#FBD87F',
      'tertiary': '#5DFDCB',
      'accent': '#FFD700',
      'dark': '#292829',
      'light': '#FEF2EC',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}