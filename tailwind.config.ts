import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "blue": "#293251",
        "beige": "#dacece",
        "backbeige": "#eccfcf",
        "cardback": "#CAD1D6",
        "borderbeige": "#DAA06D"
      }
    },

    fontFamily: {
      'mont': 'Montserrat, sans-serif',
      'dancing': 'Dancing Script, cursive',
      'frank': 'Libre Franklin, sans-serif'
    },

    fontSize: {
      's': '12px',
      'sx': '16px',
      'sm': '20px',
      'ms': '22px',
      'm': '26px',
      'l': '40px',
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "cupcake"
    ]
  }
}
export default config
