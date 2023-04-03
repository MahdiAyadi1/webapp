import React from 'react'
import {useState} from 'react'
import './createevents.css'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
  } from "firebase/firestore";
  import { db } from "../../firebase-config";

const Createevent = (props) => {
    // const [create, setCreate] = useState(false);
    // const handleClick = () => {
    //     setCreate(!create);
    //     console.log(create);
    //   };
    const [FormData,setFormData] = useState({allDay : false})
  function handleChange(event){
      setFormData(old => {
          return {
              ...old,
              [event.target.name]: event.target.value
          }
      })
  }
    const handleClick = (e)=>{
      e.preventDefault()
      console.log(FormData)
      props.setEvents((events)=>{return events.concat(FormData)})
      console.log(props.events)
      
    }
  return (
    <div >
        <form className='grid-container '>
            <input onChange={handleChange} name='title' placeholder='title'/>
            <select onChange={handleChange} name='daysOfWeek' placeholder='day'>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="0">Sunday</option>
            </select>
            <input onChange={handleChange} name='date' placeholder='date'/>
            <input onChange={handleChange} name='time' placeholder='time'/>
            <input onChange={handleChange} name='metro' placeholder='metro'/>
            <input onChange={handleChange} name='line' placeholder='line'/>
            <div></div>
            <button className="signin--form--button" onClick={handleClick}>
              Add
            </button>
        </form>
    </div>
  )
}

export default Createevent