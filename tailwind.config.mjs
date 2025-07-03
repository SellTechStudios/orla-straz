import typography from '@tailwindcss/typography'

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      regular: '#575756',
      white: '#ffffff',
      background: '#e9e8e8',
      backgroundDarker: '#d7d7d7',
      accent: '#d79f4a',
      accentDark: '#a81815',
      transparent: 'transparent',
    },
    fontFamily: {
      body: ['Oswald', 'sans-serif'],
    },
    letterSpacing: {
      normal: '0',
    },
    lineHeight: {
      tight: '1.2',
      normal: '24px',
      relaxed: '1.6',
    },
    fontWeight: {
      normal: '500',
      bold: '600',
    },
  },
  plugins: [typography],
}

export default config
