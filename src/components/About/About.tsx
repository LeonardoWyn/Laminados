import { Transition } from "../Transition";
import Image from "next/image";




export function About() {
    return (
        <Transition className="grid px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold text-center">Transformamos superficies en soluciones duraderas, estéticas y funcionales.</h2>
                <p className="mb-10 mt-7 text-justify"> En el mundo de los laminados, no basta con cubrir: hay que proteger, embellecer y optimizar. Lo que nos distingue es nuestra obsesión por la calidad, la precisión técnica y el diseño inteligente. Cada uno de nuestros productos está pensado para resistir el uso diario, adaptarse a distintos entornos y elevar el estándar visual y funcional de cualquier superficie.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargas más </button>            
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/Muro1.JPG" alt="about" width={350} height={450} className="w-auto h-auto" priority/>
            </div>
        </Transition>
    )
}
