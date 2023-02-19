import React from "react";
import './sidebar.css' ;
import {SidebarElements} from './SidebarElements.js'
const Sidebar = ()=> {
    return (
    <div className="sidebar">
        <div className="sidebar--logo">
            App Logo
        </div>
        <ul className="sidebar--elements">
        {SidebarElements.map((val,key)=>{
            return(
                <li key = {key} className="sidebar--elements--single">
                    <div className="sidebar--elements--single--icon">
                        {val.icon} 
                    </div>
                    <div className="sidebar--elements--single--title">
                        {val.title}
                    </div>
                </li>
                
                )
            })}
        </ul>
    </div>
    )
}
export default Sidebar