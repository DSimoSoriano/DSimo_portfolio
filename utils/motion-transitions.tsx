// Variantes para la animación de transición entre páginas
export const transitionVariantsPage = {
    initial: {
        x: "100%",  // Inicia fuera de la pantalla (derecha)
        width: "100%"
    },
    animate: {
        x: '0%',   // Se desplaza hacia la vista
        width: "0%"
    },
    exit: {
        x: ['0%', '100%'],  // Se desliza hacia la izquierda y sale
        width: ['0%', '100%']
    }
}

// Función para generar una animación de fade-in con posición dinámica
export const fadeIn = (position: string) => {
    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },
        hidden: {
            y: position === 'bottom' ? -80 : 0,  // Aparece desde arriba si 'bottom'
            x: position === 'right' ? 80 : 0,   // Aparece desde la derecha si 'right'
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
