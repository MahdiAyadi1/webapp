import React from "react";
import './home.css' ;
import {Map,Metroinfo,Manageaccounts,Sidebar,Timetable} from '../../components'
const Home = ()=> {
    return (
    <div className="home">
        <Sidebar />
        {/* <Map />
        <Metroinfo/>
        <Manageaccounts />
        <Timetable /> */}
    </div>
    )
}
export default Home