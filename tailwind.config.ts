import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Escanea estos archivos para clases de Tailwind
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",  // Color personalizado para elementos secundarios
        darkBg: "#131424"  // Color de fondo oscuro
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90.21deg, rgba(170,54,24,0.5) -5.91%, rgba(74,47,189,0.5) 111.58%)"
          // Gradiente semitransparente para fondos
      }
    },
  },
  plugins: [],  // No hay plugins adicionales de Tailwind configurados
} satisfies Config;  // Garantiza que la configuración cumple con el tipo `Config`
