import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo, FiArrowLeft } from 'react-icons/fi'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { useHistory } from 'react-router-dom'
import L from 'leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanage.css'

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60],
})

export default function Orphanage() {
    const { goBack } = useHistory()

    return (
        <div id="page-orphanage">
            <aside>
                <img src={mapMarkerImg} alt="Happy" />

                <footer>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                    </button>
                </footer>
            </aside>

            <main>
                <div className="orphanage-details">
                    <img
                        src="http://www.casadacriancasantoamaro.org.br/photos/IMG_9179.jpg"
                        alt="Casa das Crianças"
                    />

                    <div className="images">
                        <button className="active" type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/casa_da_Crianca_boblioteca-WEB-16.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/casa_da_Crianca_boblioteca-WEB-19.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/casadacrianca10.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/casadacrianca11.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/casadacrianca12.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="http://www.casadacriancasantoamaro.org.br/photos/sala.jpg"
                                alt="Casa das Crianças"
                            />
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Casa das Crianças</h1>
                        <p>
                            Somos uma entidade sem fins lucrativos que atende
                            crianças de 0 a 18 anos.
                        </p>

                        <div className="map-container">
                            <Map
                                center={[-23.580409, -46.6637472]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker
                                    interactive={false}
                                    icon={happyMapIcon}
                                    position={[-23.580409, -46.6637472]}
                                />
                            </Map>

                            <footer>
                                <a href="/">Ver rotas no Google Maps</a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>
                            Venha como se sentir mais à vontade e traga muito
                            amor para dar.
                        </p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                8h às 18h
                            </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                                Atendemos <br />
                                fim de semana
                            </div>
                        </div>

                        <button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
