"use client"  // Indica que este componente se ejecuta en el cliente en Next.js

import { itemsNavbar } from "@/data";  // Importa los elementos del navbar
import { usePathname } from "next/navigation";  // Hook para obtener la ruta actual
import Link from "next/link";
import MotionTransition from "./transition-component";  // Componente con animación

const Navbar = () => {
    const router = usePathname();  // Obtiene la ruta actual

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary 
                                ${router === item.link && 'bg-secondary'}`}  // Resalta el icono si es la ruta actual
                            data-tooltip-target="tooltip-default"
                        >
                            {/* Enlace a los iconos */}
                            <Link href={item.link}>{item.icon}</Link> 
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;
