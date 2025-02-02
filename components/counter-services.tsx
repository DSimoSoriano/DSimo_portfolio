"use client" // Indica que este componente se ejecuta en el cliente en Next.js

import CountUp from "react-countup"; // Importa la librería para contar animaciones numéricas
import { dataCounter } from "@/data"; // Importa los datos de los contadores

const CounterServices = () => {
    return (
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                        {/* Número animado con CountUp */}
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                            + <CountUp end={endCounter} start={0} duration={5} />
                        </p>
                        {/* Descripción del contador */}
                        <p className="text-xs uppercase max-w-[100px]">{text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;
