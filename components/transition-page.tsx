"use client"  // Indica que este componente se ejecuta en el cliente en Next.js

import { transitionVariantsPage } from "@/utils/motion-transitions";  // Importa las variantes de animación
import { AnimatePresence, motion } from "framer-motion";  // Importa herramientas de animación

const TransitionPage = () => {
    return (
        <AnimatePresence mode="wait">  {/* Gestiona animaciones al montar/desmontar, de framer-motion */}
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"  
                    variants={transitionVariantsPage}  // Aplica las variantes de animación
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}  // Configura la transición
                />
            </div>
        </AnimatePresence>   
    );
}

export default TransitionPage;
