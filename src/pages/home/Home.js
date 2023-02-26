import React, { useState } from "react";
import './home.css' ;
import {LeafletMap,Metroinfo,Manageaccounts,Sidebar,Timetable} from '../../components'
const Home = ()=> {
    const [nav,setNav]= useState('map')
    return (
        <div className="home">
            <Sidebar nav={nav}  setNav={setNav}/>
            {nav=='map' && <LeafletMap />}
            {nav=='map' && <Metroinfo/>}
            {nav=='manageaccounts' &&<Manageaccounts />}
            {nav=='timetable' && <Timetable />}
        </div>
    )
}
export default Home