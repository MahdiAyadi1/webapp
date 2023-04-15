import React from "react";
import './login.css' ;
import { useNavigate } from "react-router-dom";
import { useState} from "react"; 
import { auth } from "../../firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth";
import TextField from '@mui/material/TextField';

const Login = ()=> {
    const inputStyle = {
        backgroundColor: 'white', // set background color to white
        '& .MuiInputBase-input': {
          color: 'black', // set text color to black
        },
        borderRadius :"4px",
        width : "300px" 
      }
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault()
        console.log(FormDataSignIn)
        
        try {
        const user = await signInWithEmailAndPassword(
            auth,
            FormDataSignIn.email,
            FormDataSignIn.mdp
        );
        navigate('/')
        
        } catch (error) {
        alert(error.message);
        }
    };
    const [FormDataSignIn,setFormDataSignIn] = useState({
        email:"",
        mdp:""
    })
    function handleChange(event){
        setFormDataSignIn(old => {
            return {
                ...old,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
    <div className="signin">
        <form className="signin--form" onSubmit={login} >
            <div className="signin--form--title">
                Admin Login
            </div>
            <div className="signin--form--subtext">
                Log in to access real-time information on metro movement 
            </div>

            <TextField id="filled-basic" label="Username" variant="filled" style={inputStyle}  onChange={handleChange} name='email' value={FormDataSignIn.email} />
            <TextField id="filled-basic" label="Password" variant="filled" style={inputStyle}   onChange={handleChange} name="mdp" value={FormDataSignIn.mdp} type="password"/>

            <button className="signin--form--button">Login</button>
        </form>
    </div>
    )
}
export default Login