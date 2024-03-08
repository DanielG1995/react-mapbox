import { createContext } from "react";
import { Feature } from "../../interfaces";

export interface PlacesContextProps {
    isLoading: boolean,
    userLocation?: [number, number]
    searchByQuery: (q: string) => Promise<Feature[]>;
    places: Feature[]
}






export const PlacesContext = createContext({} as PlacesContextProps)