/* prettier-ignore */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-550': '#FF0000',
        'ice-200': '#F2F2F2'
      },
      boxShadow: {
        'sm': '8px 8px 16px rgba(0, 0, 0, 0.08)',
        'md': '10px 10px 30px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
