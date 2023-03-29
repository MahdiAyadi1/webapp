import React from "react";
import './login.css' ;
import { useNavigate } from "react-router-dom";
import { useState} from "react"; 
import { auth } from "../../firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth";
const Login = ()=> {
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
            <input onChange={handleChange} name='email' value={FormDataSignIn.email}  className="signin--form--field" placeholder="Username"/>
            <input  onChange={handleChange} name="mdp" value={FormDataSignIn.mdp} className="signin--form--field" placeholder="Password" type="password"/>

            
            <div className="signin--form--remember">
            <input type="checkbox"  /> 

            <div>
            Remember me
            </div>
            </div>
            <button className="signin--form--button">Login</button>
        </form>
    </div>
    )
}
export default Login