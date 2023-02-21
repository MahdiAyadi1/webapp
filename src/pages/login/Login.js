import { TextField } from "@mui/material";
import React from "react";
import './login.css' ;
import { useNavigate } from "react-router-dom";
const Login = ()=> {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/')
    }
    return (
    <div className="signin">
        <form className="signin--form">
            <div className="signin--form--title">
                Admin Login
            </div>
            <div className="signin--form--subtext">
                Log in to access real-time information on metro movement 
            </div>
            <input className="signin--form--field" placeholder="Username"/>
            <input className="signin--form--field" placeholder="Password" type="password"/>

            
            <div className="signin--form--remember">
            <input type="checkbox"  /> 

            <div>
            Remember me
            </div>
            </div>
            <button className="signin--form--button" onClick={handleClick}>Login</button>
        </form>
    </div>
    )
}
export default Login