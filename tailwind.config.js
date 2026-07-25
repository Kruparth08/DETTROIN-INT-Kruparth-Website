/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { xl: '1180px' },
    },
    extend: {
      colors: {
        ink: '#16283D',
        ink2: '#20395A',
        inksoft: '#4A5D78',
        paper: '#F6F3EA',
        paper2: '#FFFFFF',
        line: '#DAD4C2',
        marigold: '#E29B3B',
        marigolddark: '#B87A22',
        leaf: '#3C7A5C',
        leafdark: '#2A5A42',
        denim: '#4C6FA5',
        rose: '#B65C6B',
        text: '#1F2937',
        textsoft: '#5B6472',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(22,40,61,0.18)',
      },
      backgroundImage: {
        ledger: 'repeating-linear-gradient(180deg, transparent, transparent 37px, rgba(22,40,61,0.055) 38px)',
        'ledger-dark': 'repeating-linear-gradient(180deg, transparent, transparent 27px, rgba(255,255,255,0.08) 28px)',
      },
    },
  },
  plugins: [],
}
