/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 
            './src/**/*.{vue,js}',
            './src/App.vue'],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#fff8ea',
          200: '#fff3d8',
          300: '#edead0',
        },
      }
    },
  },
  plugins: [],
}

