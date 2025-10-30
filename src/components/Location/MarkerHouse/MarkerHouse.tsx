import { useMap, Marker, Popup } from 'react-leaflet';
import { MarkerHouseProps } from './MarkerHouse.types'
import { icon } from 'leaflet';
import { housesData } from './MarkerHouse.data';
import { FaMapMarkerAlt} from 'react-icons/fa'

export function MarkerHouse(props: MarkerHouseProps) {

    const {selectMarker}=props;
    const fnMap =useMap();
    const customIcon = icon({
        iconUrl:'/assets/marker.svg',
        iconSize:[40,40]
    })

    return (
        housesData.map(({id,name,position,image})=>(
            <Marker key={id} position={position} icon={customIcon} eventHandlers={{click:()=> {selectMarker(position,fnMap)}}}>
                <Popup>
                    <div className="flex items-center mb-2">
                        <span className="mr-4 text-secondary">
                            <FaMapMarkerAlt/>
                        </span>
                        <h5 className="text-md text-secondary">{name}</h5>
                    </div>
                </Popup>
            </Marker>
        ))
    )
}
