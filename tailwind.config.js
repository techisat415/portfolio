/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apt: {
          bg: '#f4f0e8',
          'bg-sub': '#e5e0d5',
          card: '#ffffff',
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
        }
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        heading: ['var(--font-courier)', 'monospace'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px #1a1a1a',
        'retro-hover': '6px 6px 0px 0px #1a1a1a',
      }
    },
  },
  plugins: [],
};