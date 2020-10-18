import React, { useState } from 'react';
import localMarker from '../images/Local.svg'
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import lua from '../images/lua.png';
import sol from '../images/sol.png';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

const mapIcon = Leaflet.icon({
    iconUrl: localMarker,
    iconAnchor: [29, 68],
    iconSize: [58, 68],
    popupAnchor: [170,2]
})

function OrphanagesMap() {

    const [mode, setMode] = useState('light-v10');
    const [backgroundMode, setBackgroundMode] = useState(lua)
    const [backgroundeAside, setBackgroundAside] = useState("linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)")

    function handleMode() {
        if (mode === 'light-v10') {
            setMode('dark-v10')
            setBackgroundMode(sol)
            setBackgroundAside("linear-gradient(329.54deg, #a9b0b2 0%, #444b4b 100%)")
        } else {
            setMode('light-v10')
            setBackgroundMode(lua)
            setBackgroundAside("linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%)")
        }
    }

    return (
        <div id="page-map" style={{ background: "linear-gradient(329.54deg, #a9b0b2 0%, #444b4b 100%)" }}>
            <aside >
                <header>
                    <img src={localMarker} alt="localMarker" />
                    <h2>Escolha um orfanato no mapa</h2>

                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Campinas</strong>
                    <span>São Paulo</span>
                </footer>

            </aside>

            <Map
                center={[-12.8949765, -57.311227]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/${mode}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                ></TileLayer>

                <Marker
                    position={[-12.8949765, -57.311227]}
                    icon={mapIcon}
                >
                    <Popup
                        className="map-popup"
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                    > Lar das Meninas
                    <Link to="">
                        <FiArrowRight size={20} color={"#FFF"}></FiArrowRight>
                    </Link>
                        
                    </Popup>
                </Marker>


            </Map>



            <div className="change-mode">
                <button
                    onClick={handleMode}
                ><img src={backgroundMode} alt="" /></button>
            </div>

            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>

        </div>
    )
}

export default OrphanagesMap;