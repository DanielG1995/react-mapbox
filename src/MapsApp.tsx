import MapProvider from "./context/map/MapProvider"
import PlacesProvider from "./context/places/PlacesProvider"
import Home from "./screens/Home"

const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <Home />
            </MapProvider>
        </PlacesProvider>
    )
}

export default MapsApp