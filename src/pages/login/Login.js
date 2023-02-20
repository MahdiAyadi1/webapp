import { TextField } from "@mui/material";
import React from "react";
import './login.css' ;

const Login = ()=> {
    return (
    <div className="signin">
        <form className="signin--form">
            <div className="signin--form--title">
                Sign in
            </div>
            <div className="signin--form--subtext">
                subtext  i have no idea what to write  
            </div>
            <TextField className="signin--form--field">

            </TextField>
            <TextField className="signin--form--field">

            </TextField>
            <input type="checkbox" /> 
            <div>
            Remember me
            </div>
            <button>Login</button>
        </form>
    </div>
    )
}
export default Login