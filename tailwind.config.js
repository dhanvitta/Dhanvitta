/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 32s linear infinite',
        'reverse-infinite-scroll': 'reverse-infinite-scroll 32s linear infinite',
        'infinite-scroll-y': 'infinite-scroll-y 18s linear infinite',
        'reverse-infinite-scroll-y': 'reverse-infinite-scroll-y 18s linear infinite',


      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'reverse-infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'infinite-scroll-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        'reverse-infinite-scroll-y': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        }
      },

    }
  },
  plugins: [],
}