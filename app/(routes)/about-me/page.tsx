import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return (
        <div>
            <>
            <TransitionPage />
            <ContainerPage> 
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:text-5xl md:mt-10">Toda mi {' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>



                <CounterServices />

                <div className="text-center md:text-left">
                <h1 className="underline text-xl leading-tight md:text-3xl md:mt-6">Contacta <span className="font-bold text-secondary">conmigo!</span></h1>
                <p>Teléfono: 123 <span className="font-bold text-secondary">456</span> 789</p>
                <p className="pb-[10px] sm:pb-0">Email: info@<span className="font-bold text-secondary">example</span>.com</p>
                </div>


                <TimeLine />

            </ContainerPage>
            </>
        </div>
    );
}

export default PageAboutMe;