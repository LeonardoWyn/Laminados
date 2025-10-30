"use client"

import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia"
import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"
import { formatPrice1 } from "@/utils/formatPrice1"
import { useState } from "react"

export function Properties() {

    const [counterProductos, setCounterProductos]=useState(8)
    const dataFilterProductos = dataProperties.slice(0,counterProductos)
    const loadMoreProductos=()=>{
        setCounterProductos(counterProductos + 4)
    }

    return (
        <Transition className="px-4 mt-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataFilterProductos.map(({id,location,price,price1,image,star,meters,meters1}) =>(
                    
                    <Link key={id} href={`/properties/${id}`} className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 curso-pointer">
                         <div className="relative -z-[1]">
                            <div className="relative">
                                <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                                    <LiaStarSolid/>
                                    <span className="ml-l font-semibold"> 
                                        {star}
                                    </span>
                                </div>
                                <Image src={`/assets/properties/${image}`} alt="Location" width={150} height={150} className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"/>

                                <div className="px-3 py-5">
                                    <p className="text-secondary"> {location} </p>
                                    <p className="fot-sembold">{formatPrice(price)} - {formatPrice1(price1)} .MXN</p> 

                                    <div className="gap-4 mt-2 xl:flex">
                                            <div className=" flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                                                <LiaRulerCombinedSolid/>
                                                <span className="ml-2">{meters}</span>
                                            </div>
                                            <div className=" flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                                                <LiaRulerCombinedSolid/>
                                                <span className="ml-2">{meters1}</span>
                                            </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center my-7">

                    {counterProductos < dataProperties.length && (
                         <button className="px-6 py-6 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
                   onClick={loadMoreProductos}> Ver mas...</button> 
                    )}

                  
            </div>
        </Transition>
    )
        
        
}
