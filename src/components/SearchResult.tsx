import { useContext } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import { MapContext } from "../context/map/MapContext"

const SearchResult = () => {
    const { places } = useContext(PlacesContext)
    const { map } = useContext(MapContext)

    const pickLocation = (coordinates: [number, number]) => {
        if (!map) { throw new Error('Error') }
        map?.flyTo(
            {
                zoom: 14,
                center: coordinates
            }
        )
    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '10px',
                display: places.length===0?'none':'flex',
                flexDirection: 'column',
                gap: '5px'
            }}
        >
            {
                places.map(p => <div key={p.id} onClick={() => pickLocation([p.properties.coordinates.longitude, p.properties.coordinates.latitude])} className="result-map" style={{
                    cursor: 'pointer',
                }}>
                    {p.properties.name}, {p.properties.place_formatted}
                </div>)
            }
        </div>
    )
}

export default SearchResult