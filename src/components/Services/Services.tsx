"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 md:py46 md:px-36 md:grid-cols-2 md:gap-28">
               <div className="max-w-xl mb-7">
                    <h4 className="text-secondary">
                        Servicios
                    </h4>
                    <h2 className="my-4 text-3xl font-semibold">
                        Los mejores productos solo en Laminados Saucillo Huichapan HGO.
                    </h2>
                </div> 
                <div className="flex items-center justify-center">
                    <Slider/>
                </div>
        </Transition>
    )
}
