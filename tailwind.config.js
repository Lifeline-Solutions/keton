/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#2AA7DF',
        secondaryBlue: '#0A5171',
        primaryGreen: '#7CC248',
        primaryBg: '#E5F5FD',
      },
      screens: {
        xs: '290px',
      },
    },
  },
  plugins: [],
};
