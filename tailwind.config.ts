import type { Config } from 'tailwindcss'

const themeColors = {
  black: '#1D1D1D',
  gray: '#666666',
  darkGray: '#262626',
  mediumDarkGray: '#545454',
  mediumGray: '#404040',
  lightGray: '#D1D1D1',
  lightBlue: '#00DAE8',
  red: '#F8594E',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        web: '1200px',
      },
      fontFamily: {
        sans: ['var(--font-articulat)'],
      },
      colors: {
        custom: {
          ...themeColors,
        },
      },
    },
  },
  plugins: [],
}
export default config
