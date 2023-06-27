/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: "#3A3A3A",
      white: "#ffffff",
      primary: {
        light: 'rgba(0, 187, 109, 0.1)',
        DEFAULT: '#00BB6D',
        300: 'rgba(0, 187, 109, 0.3)'
      },
      violet: {
        light: "rgba(106, 83, 245, 0.1)",
        DEFAULT: "#6A53F5",
        300: "rgba(106, 83, 245, 0.3)"
      },
      yellow: "#FFA900",
      grey: {
        light: "#EAEAEA",
        DEFAULT: "#D7D7D7",
        dark: "#868686"
      }
    },
    fontFamily: {
      sans: ['PTSans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

