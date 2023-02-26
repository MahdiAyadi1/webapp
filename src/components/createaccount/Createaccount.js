import React from 'react'
import { useState } from 'react'
const Createaccount = (props) => {
  const [create , setCreate]= useState(false)
  const handleClick = ()=>{
    setCreate(!create)
    console.log(create)
  }
  return (
    <>
    <button className="signin--form--button" onClick={handleClick} style={{}}>Add Account</button>
    {
      create && 
    <div className='editaccount'>
      <form className="signin--form">
            <div className="signin--form--title">
                Create  Account
            </div>
            <input className="signin--form--field" placeholder="Name"/>
            <input className="signin--form--field" placeholder="Last Name"/>
            <input className="signin--form--field" placeholder="Email"/>
            
            
            <button className="signin--form--button" onClick={handleClick}>Create</button>
            <button className="signin--form--button" onClick={handleClick}>Cancel</button>
        </form>
    </div>
  }
    </>
  
  )
}

export default Createaccount