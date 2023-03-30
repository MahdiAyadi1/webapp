import React, { useState } from "react";
import './home.css' ;
import {LeafletMap,Metroinfo,Manageaccounts,Sidebar,Timetable, Declarations , Metrolist} from '../../components'
const Home = ()=> {
    const [nav,setNav]= useState('map')
    const [filtre,setFiltre]= useState([])

    return (
        <div className="home">
            <Sidebar nav={nav}  setNav={setNav}/>
            {nav=='map' && <LeafletMap filtre={filtre} />}
            {nav=='map' && <Metroinfo setFiltre={setFiltre} filtre={filtre}/>}
            {nav=='manageaccounts' &&<Manageaccounts />}
            {nav=='timetable' && <Timetable />}
            {nav=='declarations' && <Declarations />}
            {nav=='metrolist' && <Metrolist/>}
        </div>
    )
}
export default Home