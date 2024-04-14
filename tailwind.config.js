/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}", 
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/styles/**/*.css"
  ],
  theme: { 
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
      borderColor: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
      backgroundColor: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
      textColor: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
      textColor: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
      boxShadowColor: {
        'prim': '#f3efef',
        'sec': '#666562'
      },
    }
  },
  plugins: [],
}
