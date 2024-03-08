import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { Map } from "mapbox-gl"
import { MapContext } from "../context/map/MapContext"
const MapView = () => {
    const { userLocation, isLoading } = useContext(PlacesContext)
    const { setMap } = useContext(MapContext)
    const mapDiv = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!isLoading) {
            setMap(new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 15, // starting zoom
            }))
        }
    }, [isLoading, userLocation])

    return (
        <div ref={mapDiv} style={{ width: '100vw', height: '100vh' }}/>
           
    )
}

export default MapView