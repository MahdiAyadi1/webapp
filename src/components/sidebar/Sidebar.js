import React from "react";
import './sidebar.css' ;
import {SidebarElements} from './SidebarElements.js'
import { useNavigate } from "react-router-dom";
const Sidebar = (props)=> {
    const navigate = useNavigate();
    const handleClick = (value)=> {
        props.setNav(value)
    }
    const handleLogOut =()=>{
        navigate("/login")
    }
    return (
    <div className="sidebar">
        <div className="sidebar--logo">
            App Logo
        </div>
        <ul className="sidebar--elements">
        {SidebarElements.map((val,key)=>{
            return(
                <li key = {key} className="sidebar--elements--single" onClick={val.link=='logout'?handleLogOut:()=>{handleClick(val.link)}}>
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