import React from "react";
import './home.css' ;
import {Map,Metroinfo,Manageaccounts,Sidebar,Timetable} from '../../components'
const Home = ()=> {
    return (
    <div>
        <Map />
        <Metroinfo/>
        <Manageaccounts />
        <Sidebar />
        <Timetable />
    </div>
    )
}
export default Home