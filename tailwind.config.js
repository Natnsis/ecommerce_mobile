/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:'#1596e4',
        secondary:'#d9f1ff',
        money:'#58e73e',
        delete:'#ff4218',
        text:'#000005'
      }
    },
  },
  plugins: [],
}