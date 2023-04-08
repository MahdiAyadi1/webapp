import React from "react";
import { useState,useEffect } from "react";
import './leafletmap.css' ;
import { MapContainer, TileLayer,Marker,Popup,Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet' ;
import { lineone } from "./lineone";
import {simulationData} from "./simulationData"

const LeafletMap = (props)=> {
    const [metroPosition,setMetroPosition]=useState({"lat":36.80412074650377,"lng":10.121765064880966});
	useEffect(()=>{
		var i =0 ;

		const intervalId = setInterval(()=>
		{   
			var element = simulationData[i]
			i++
			setMetroPosition([element.lat,element.lng])
			console.log(element.lat,element.lng)
			if (i ==simulationData.length)
            {   console.log("clearingInterval")
			clearInterval(intervalId)}
			
		},2000)
	},[])
	var myIcon = L.icon({
		iconUrl: require("./metro.png"),
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
        <Marker position={metroPosition} icon={myIcon}>
          <Popup>
            Metro 401
          </Popup>
          <Tooltip>Metro 401</Tooltip>
        </Marker>
        {stations.map((val) =>{ 
            return (
              props.filtre.includes(val.ligne.at(-1)) &&
               <Marker key={val.id} position={val.coordinates} icon={L.icon({
                iconUrl: require(`./station${val.ligne.at(-1)}.png`),
                iconSize: [36, 36],
                iconAnchor: [36, 36],
                popupAnchor: [-3, -76],
              })}>
                <Popup>
                  Station {val.name} <br/>{val.ligne}
                </Popup>
                <Tooltip>Station {val.name} <br/>{val.ligne}</Tooltip>
                </Marker>
              )
        })
        }         

      </MapContainer>
    </div>
  );
}
export default LeafletMap