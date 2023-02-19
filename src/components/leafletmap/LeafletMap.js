import React from "react";
import { useState,useEffect } from "react";
import './leafletmap.css' ;
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet' ;

const LeafletMap = ()=> {
    const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const map = L.map('map').setView([36.80962269649294, 10.157530321904984], 12);
    L.tileLayer('https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=NFoV9hj7fYKfYkIwipDm', {
      attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    setMap(map);
    return () => {
        if (map) {
            map.remove();
        }
        }
    }, []);

  useEffect(() => {
    if (map && !marker) {
      if (!navigator.geolocation) {
        console.log("Your browser doesn't support geolocation feature!")
      } else {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
    }
  }, [map, marker]);

  function getPosition(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    var myIcon = L.icon({
        iconUrl: 'metro.png',
        iconSize: [36, 36],
        iconAnchor: [36, 36],
        popupAnchor: [-3, -76],
        // shadowUrl: 'metro.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });
    if (marker) {
      marker.remove();
    }

    const newMarker = L.marker([lat, long],{icon:myIcon}).addTo(map);
    newMarker.addTo(map)
    setMarker(newMarker);
    
    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy);
  }

  return (
    <div id="map" className="map" style={{ width: '100%', height: '100vh' }}></div>
  );

}
export default LeafletMap