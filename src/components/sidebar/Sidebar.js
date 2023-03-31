import React from "react";
import './sidebar.css' ;
import {SidebarElements} from './SidebarElements.js'
import {signOut} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import MapIcon from '@mui/icons-material/Map';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import SubwayIcon from '@mui/icons-material/Subway';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const Sidebar = (props)=> {
    const SidebarElements = [
        {
            title : 'Map',
            icon : <MapIcon />,
            link : 'map'
        },
        {
            title : 'Manage Accounts',
            icon : <ManageAccountsIcon />,
            link : 'manageaccounts'
        },
        {
            title : 'Timetable',
            icon : <EventNoteIcon />,
            link : 'timetable'
        },
        {
            title : 'Metro List',
            icon : <SubwayIcon />,
            link : 'metrolist'
        },
        {
            title : 'Declarations',
            icon : <Badge badgeContent={props.nbDeclarations} color="primary">
                    <MailIcon  />
                    </Badge>,
            link : 'declarations'
        },
        {
            title : 'Log out',
            icon : <LogoutIcon/>,
            link : 'logout'
        },
    ]
    const navigate = useNavigate();
    const handleClick = (value)=> {
        props.setNav(value)
    }
    const handleLogOut = async()=>{
        await signOut(auth);
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