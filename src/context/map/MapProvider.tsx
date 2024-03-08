import { useContext, useEffect, useReducer } from "react"
import { MapContext } from "./MapContext"
import { mapReducer } from "./mapReducer"
import { Map, Marker, Popup } from "mapbox-gl"
import { PlacesContext } from "../places/PlacesContext"

export interface MapState {
    isMapReady: boolean
    map?: Map
    markers?: Marker[]
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: [] as Marker[]
}


const MapProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext(PlacesContext)

    const setMap = (map: Map) => {
        const myLocationPopUp = new Popup().setHTML(`
        <h1>My ubicacion</h1>
       `).addTo(map)
        new Marker().setLngLat(map.getCenter())
            .setPopup(myLocationPopUp)
            .addTo(map)
        dispatch({ type: 'setMap', payload: map })
    }

    useEffect(() => {
        state.markers?.forEach(marker => marker.remove());
        const newMarkers = []
        for (const place of places) {
            const { latitude, longitude } = place.properties.coordinates
            const popup = new Popup().
                setHTML(`
                <h6>${place.properties.name}<h6>
                <p>${place.properties.place_formatted}</p>
            `)
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([longitude, latitude])
                .addTo(state.map!)

            newMarkers.push(newMarker)
            dispatch({ type: 'setMarkers', payload: newMarkers })
        }
    }, [places, state.map])





    return (
        <MapContext.Provider value={{ ...state, setMap }}>
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider