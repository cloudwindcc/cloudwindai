/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: { sans: ['Noto Sans HK', 'Microsoft YaHei', 'sans-serif'] } },
  },
  plugins: [],
};
