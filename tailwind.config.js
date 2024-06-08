/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src//**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#E25E3E',
      },      
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      orange: {
        DEFAULT: '#E25E3E',
        light: '#E25E3E19'
      },
      blue: {
        light: '#10709C',
        dark: '#0C5475',
      },
      white: {
        DEFAULT: '#FFFF'
      }
    },    
    extend: {
      borderRadius: {
        'xl': '16px',
        'xm': '8px'
      },
    },
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },

    screens: {
      'ssl': '320px',
      // => @media (min-width: 425px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  plugins: [],
}

