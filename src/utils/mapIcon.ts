import Leaflet from 'leaflet';

import mapMarker from '../images/map-marker.svg';

const MapIcon = Leaflet.icon({
    iconUrl: mapMarker,

    iconSize: [58, 50],

    iconAnchor: [29, 50],

    popupAnchor: [140 , 8]
})

export default MapIcon