import React from 'react';
import localMarker from '../images/Local.svg'
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {

    return (
        <div id="page-map">
            <aside>
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
                center={[-22.8949765, -47.311227]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

            </Map>

            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color="#fff"></FiPlus>
            </Link>

        </div>
    )
}

export default OrphanagesMap;