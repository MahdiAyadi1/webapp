import React  from 'react'
import './editaccount.css'
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

const Editaccount = (props) => {
  
  const handleClick = (e)=>{
    e.preventDefault()
    props.setEdit(false)
  }
  return (
    <>
    {true &&

    <div className='editaccount'>
      <form className="signin--form" onSubmit={handleClick}>
            <div className="signin--form--title">
                Edit {props.name}'s Account
            </div>
            <input className="signin--form--field" placeholder="Name"/>
            <input className="signin--form--field" placeholder="Last Name"/>
            <input className="signin--form--field" placeholder="Email"/>
            <button className="signin--form--button" >Update</button>
        </form>
    </div>
    }
    </>
    )
}

export default Editaccount