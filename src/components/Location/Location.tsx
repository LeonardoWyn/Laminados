
"use client"
import { Transition } from "../Transition"
import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"

import 'leaflet/dist/leaflet.css'
import { MarkerHouse } from "./MarkerHouse"


export function Location() {

    const coordinatePoint={
        lat: 20.327381,
        lng: -99.703068
    }

     

    const centerMarker=(position: {lat:number, lng:number}, fnMap:Map) =>{
        fnMap.flyTo({
            lat:position.lat,
            lng:position.lng
        })
    }

    return (
        <Transition className="px-4 py-8 md:py-44 md:px:36">
            <h4 className="text-center text-secondary" id="location">Localizacion</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">Disponibles En Huichapan, Hidalgo, damos vida a lugares con esencia y carácter.</h2>
            <MapContainer center={coordinatePoint} zoom={14} scrollWheelZoom={false} className="h-[700px]">
                <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors"
  />
  <MarkerHouse selectMarker={centerMarker} />

            </MapContainer>
        </Transition>    
    )
}
