
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";



const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />

            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{' '} 
                        <span className="font-bold text-secondary">
                            servicios.
                        </span>
                    </h1>
                        <p className="mb-3 text-xl text-gray-300 pl-4 sm:pl-0">
                            Ofrezco soluciones en el desarrollo web Backend y alzamiento de sistemas tanto online cómo empresariales.
                        </p>
                        <a href="/about-me">    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 ml-4 sm:ml-0"> Contacta conmigo</button></a>
                </div>
                {/*Silder*/}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;