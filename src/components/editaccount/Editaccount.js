import React  from 'react'
import './editaccount.css'
import { useState,useEffect,useRef } from 'react';

const Editaccount = (props) => {
  
  const handleClick = (
    // e
  )=>{
    // e.preventDefault()
    props.setEdit(false)
  }


  const editRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (event) =>
      handleClickOutside(event)
    );

    return () => {
      document.removeEventListener("click", (event) =>
        handleClickOutside(event)
      );
    };
  }, [handleClick]);

  const handleClickOutside = (event) => {
    if (editRef.current && !editRef.current.contains(event.target) && !event.target.matches(".editIcon")) {
      console.log("Click detected outside editaccount div");
      handleClick();
    }
  };

  return (
    <>
    <div className='editaccount' ref={editRef}>
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
    </>
    )
}

export default Editaccount