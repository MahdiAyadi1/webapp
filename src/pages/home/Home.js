import React from "react";
import './home.css' ;
import {LeafletMap,Metroinfo,Manageaccounts,Sidebar,Timetable} from '../../components'
const Home = ()=> {
    return (
    <div className="home">
        <Sidebar />
            <LeafletMap />
            <Metroinfo/>
        {/* <Manageaccounts />
        <Timetable /> */}
    </div>
    )
}
export default Home