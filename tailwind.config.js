/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4EDE0',
        parchment: '#EBE0CC',
        linen: '#E4D6BF',
        bark: '#2C2010',
        bark2: '#3D2E14',
        walnut: '#6B4423',
        driftwood: '#9B7B58',
        forest: '#3A5E38',
        sage: '#7A9E72',
        moss: '#5A7A52',
        tan: '#B8926A',
        stone: '#7A6B58',
        terracotta: '#B8694A',
        sand: '#CCBFA0',
        sienna: '#A0603A',
        leaf: '#9CB890',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
