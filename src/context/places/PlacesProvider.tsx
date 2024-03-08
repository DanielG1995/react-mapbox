import { useEffect, useReducer } from "react"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from "../../helpers/getUserLocation"
import searchApi from "../../apis/searchApi"
import { Feature, Places } from "../../interfaces"

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number]
    places: Array<Feature>
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    places: [] as Feature[]
}


const PlacesProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation().then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
    }, [])

    const searchByQuery = async (q: string) => {
        if (q.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] })
            return [] as Feature[];
        }
        const resp = await searchApi.get<Places>(``, {
            params: {
                q,
                proximity: state?.userLocation?.join(',')
            }
        })
        dispatch({ type: 'setPlaces', payload: resp.data.features })
        console.log(resp.data)
        return resp.data.features
    }

    return (
        <PlacesContext.Provider value={{ ...state, searchByQuery }}>
            {children}
        </PlacesContext.Provider>
    )
}

export default PlacesProvider