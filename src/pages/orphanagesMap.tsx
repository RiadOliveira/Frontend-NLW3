import React from 'react'
import mapMarker from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import '../styles/pages/orphanages.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,

    iconSize: [58, 50],

    iconAnchor: [29, 50],

    popupAnchor: [140 , 8]
})

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Areia Branca</strong>
                    <span>Rio Grande do Norte</span>
                </footer>
            </aside>

            <Map 
                center={[-4.9525219,-37.1241409]} 
                zoom={15.75} 
                style={{ width: '100%', height: '100%', zIndex: 0 }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                <Marker position={[-4.9525219,-37.1241409]} icon={mapIcon}>
                    <Popup closeButton={false} minWidth={180} maxWidth={180} className='map-popup'>
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color='#FFF'/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanage/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;