// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}',
//     './public/index.html',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-white': '#ffffff2b',
        'dark-grey': '#202123',
        'light-grey': '#353740',
      },
    },
  },
  plugins: [],
};
