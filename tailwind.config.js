/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      lineHeight: {
        '100px': '100px',
      },
      fontFamily: {
         fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
        sans: ['Inter', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
}