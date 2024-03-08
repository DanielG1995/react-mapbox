import { useContext } from "react"
import { MapContext } from "../context/map/MapContext"
import { PlacesContext } from "../context/places/PlacesContext"

const ButtonMyLocation = () => {

    const { map } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {
        if (!map) { throw new Error('Error') }
        map?.flyTo(
            {
                zoom: 14,
                center: userLocation
            }
        )
    }

    return (
        <button onClick={onClick} style={{ zIndex: 1000, position: 'fixed', top: 10, right: 20 }}>
            Show me !
        </button>
    )
}

export default ButtonMyLocation