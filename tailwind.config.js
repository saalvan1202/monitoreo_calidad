/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        botones: {
          red: '#DF0713',
        },
        texto: {
          white: '#FFFFFF',
          gray: '#3C3F41',
          'gray-2': '#B6AFAF',
          oscuro: '#000000',
          optimo: '#0A7B00',
          advertencia: 'D7DF40',
          critico: '#FF0000',
        },
        fondo: {
          footer: '#3C3F41',
          cajas: '#525252',
          opciones: '#868889',
          secciones: '#D1D1D1',
        },
      },
    },
  },
  plugins: [],
};
