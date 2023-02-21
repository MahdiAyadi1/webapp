import React from "react";
import { useState,useEffect } from "react";
import './leafletmap.css' ;
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet' ;

const LeafletMap = ()=> {
  var myIcon = L.icon({
    iconUrl: require("./metro.png"),
    iconSize: [36, 36],
    iconAnchor: [36, 36],
    popupAnchor: [-3, -76]
});
  return (
    <div className="map">
      <MapContainer 
        style={{ width: "100%", height: "100vh" }}
        zoom={13}
        center={[36.80962269649294, 10.157530321904984]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.80962269649294, 10.157530321904984]} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default LeafletMap