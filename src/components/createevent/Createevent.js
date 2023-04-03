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
        <form className='create-container'>
          <div className='create-container-group'>
            <div className='create--form--header'>Title :</div>
            <input onChange={handleChange} className="create--form--field" name='title' placeholder='title'/>
            <div className='create--form--header'>Day :</div>
            <select onChange={handleChange} className="create--form--field" name='daysOfWeek' placeholder='day'>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="0">Sunday</option>
            </select>
          </div>
          <div className='create-container-group'>

            <div className='create--form--header'>Date :</div>
            <input onChange={handleChange} className="create--form--field" name='start' placeholder='start'/>
          <div className='create--form--header'>Time :</div>
            <input onChange={handleChange} className="create--form--field" name='end' placeholder='end'/>
          </div>
          <div className='create-container-group'>
            <div className='create--form--header'>Metro :</div>
            <input onChange={handleChange}  className="create--form--field"name='metro' placeholder='metro'/>
            <div className='create--form--header'>Line :</div>
            <input onChange={handleChange}  className="create--form--field" name='line' placeholder='line'/>
            <div></div>
          </div>
        </form>
            <button className="signin--form--button" style={{margin : "10px"}} onClick={handleClick}>
              Add
            </button>
    </div>
  )
}

export default Createevent