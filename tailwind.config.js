/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0C10',
          raised: '#12151B',
          line: 'rgba(255,255,255,0.08)',
        },
        ink: {
          DEFAULT: '#EDEFF2',
          dim: '#9AA1AC',
          faint: '#5B6270',
        },
        signal: {
          DEFAULT: '#E8A054',
          soft: '#F2C591',
        },
        steel: {
          DEFAULT: '#5FA8D9',
          soft: '#8FC4E8',
        },
        live: '#6FCF97',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
