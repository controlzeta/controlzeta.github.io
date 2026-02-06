/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores inspirados en el ecosistema .NET y Angular
        brand: {
          dark: '#0f172a',    // Slate 900
          dotnet: '#512bd4',  // Violeta oficial de .NET
          angular: '#dd0031', // Rojo Angular
          accent: '#0ea5e9',  // Sky 500 para enlaces
        },
      },
      fontFamily: {
        // JetBrains Mono es la favorita de los devs Senior
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
