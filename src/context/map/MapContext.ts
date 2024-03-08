import { Map } from "mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
    setMap: (map: Map) => void,
    isMapReady: boolean,
    map?: Map
}






export const MapContext = createContext({} as MapContextProps)