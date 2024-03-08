import axios from "axios"


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGFubnk5NWdoIiwiYSI6ImNsdGhldmt1YTA0YXQyam80amU1ZG12dGkifQ.73BM_7EqOe3l5z6Y7kRWNw'
    }
})

export default searchApi;