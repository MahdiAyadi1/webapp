import React from "react";
import { useState,useEffect } from "react";
import './leafletmap.css' ;
import { MapContainer, TileLayer,Marker,Popup,Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet' ;
import { lineone } from "./lineone";
import {StationIcon} from './stationIcon'

const LeafletMap = ()=> {
  var myIcon = L.icon({
    iconUrl: require("./metro.png"),
    iconSize: [36, 36],
    iconAnchor: [36, 36],
    popupAnchor: [-3, -76],
});
var station1Icon = L.icon({
  iconUrl: require("./station1.png"),
  iconSize: [36, 36],
  iconAnchor: [36, 36],
  popupAnchor: [-3, -76],
});
var station2Icon = L.icon({
  iconUrl: require("./station2.png"),
  iconSize: [36, 36],
  iconAnchor: [36, 36],
  popupAnchor: [-3, -76],
});
var station3Icon = L.icon({
  iconUrl: require("./station3.png"),
  iconSize: [36, 36],
  iconAnchor: [36, 36],
  popupAnchor: [-3, -76],
});
var station4Icon = L.icon({
  iconUrl: require("./station4.png"),
  iconSize: [36, 36],
  iconAnchor: [36, 36],
  popupAnchor: [-3, -76],
});
var station5Icon = L.icon({
  iconUrl: require("./station5.png"),
  iconSize: [36, 36],
  iconAnchor: [36, 36],
  popupAnchor: [-3, -76],
});
  return (
    <div className="map">
      <MapContainer 
        style={{ width: "100%", height: "100vh" }}
        zoom={13}
        center={[36.80962269649294, 10.157530321904984]}
        // scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.80962269649294, 10.157530321904984]} icon={myIcon}>
          <Popup>
            Metro 401
          </Popup>
          <Tooltip>Metro 401</Tooltip>
        </Marker>
        {lineone.map((val) =>{ 
          switch (val.ligne){
            case("Ligne 1"):
            return (
              // <Marker key={val.name} position={val.coordinates} icon={<StationIcon url="./station1.png"/>}>
              <Marker key={val.name} position={val.coordinates} icon={station1Icon}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
              </Marker>
            )
            case("Ligne 2"):
            return (
              <Marker key={val.name} position={val.coordinates} icon={station2Icon}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
              </Marker>
            )
            case("Ligne 3"):
            return (
              <Marker key={val.name} position={val.coordinates} icon={station3Icon}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
              </Marker>
            )
            case("Ligne 4"):
            return (
              <Marker key={val.name} position={val.coordinates} icon={station4Icon}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
              </Marker>
            )
            case("Ligne 5"):
            return (
              <Marker key={val.name} position={val.coordinates} icon={station5Icon}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
              </Marker>
            )
          }
        })
        }         

      </MapContainer>
    </div>
  );
}
export default LeafletMap