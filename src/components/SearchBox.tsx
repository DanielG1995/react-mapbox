import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context/places/PlacesContext"
import SearchResult from "./SearchResult"

const SearchBox = () => {

    const { searchByQuery } = useContext(PlacesContext)
    const debounceRef = useRef<NodeJS.Timeout>()

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(() => {
            searchByQuery(event.target.value)
        }, 350);
    }

    return (
        <div style={{
            zIndex: 1000,
            top: '10px',
            left: '10px',
            position: 'fixed',

        }}>
            <input
                style={{
                    borderRadius: '5px',
                    padding: '10px'
                }}
                onChange={onChange}
                placeholder="Buscar lugar ...."

            />
            <SearchResult />
        </div>
    )
}

export default SearchBox