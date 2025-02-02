"use client"  // Indica que este componente es un cliente en Next.js

import { fadeIn } from '@/utils/motion-transitions';
import { motion } from 'framer-motion';

// Propiedades del componente con animación
interface MotionTransitionProps {
    children: React.ReactNode  // Contenido del componente
    position: 'right' | 'bottom'  // Dirección de la animación
    className?: string  // Clase CSS opcional
}

const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props;

    return (
        <motion.div
            variants={fadeIn(position)}  // Aplica la animación según la posición
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}  // Clase CSS opcional
        >
            {children}
        </motion.div>
    );
}

export default MotionTransition;
