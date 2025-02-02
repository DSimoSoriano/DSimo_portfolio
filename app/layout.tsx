import type { Metadata } from "next";
import { Urbanist } from "next/font/google"; //Importa la fuente Urbanist de google fonts
import "./globals.css"; //Estilos

//Importaciones de swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar"; //Importa el navbar
import Header from "@/components/header"; //Importa el header

//Subconjunto latino de la fuente Urbnist
const urbanist = Urbanist({
  subsets: ["latin"]
});

//Metadatos de la web
export const metadata: Metadata = {
  title: "PortFolio Daniel Simó",
  description: "Portfolio Daniel Simó",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar /> {/*Agrega el navbar a todas las páginas*/}
        <Header />
        {children} {/*Renderiza el contenido de la página*/}
      </body>
    </html>
  );
}
