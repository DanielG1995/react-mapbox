import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MapsApp from './MapsApp.tsx'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnk5NWdoIiwiYSI6ImNsdGhldmt1YTA0YXQyam80amU1ZG12dGkifQ.73BM_7EqOe3l5z6Y7kRWNw';



if(!navigator.geolocation){
  alert('No soporte geolocalizacion')
  throw new Error('No es posible ejecutar la aplicacion')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
