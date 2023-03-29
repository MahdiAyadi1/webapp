import React from "react";
import './leafletmap.css' ;
import 'leaflet/dist/leaflet.css';
import L from 'leaflet' ;

const StationIcon = (props) => {
    return(
        
            L.icon({
                iconUrl: require(props.url),
                iconSize: [36, 36],
                iconAnchor: [36, 36],
                popupAnchor: [-3, -76],
            })
    );
}

export default StationIcon