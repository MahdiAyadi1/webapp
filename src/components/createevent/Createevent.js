import React from 'react'
import {useState} from 'react'
import './createevents.css'

const Createevent = (props) => {
    const [FormData,setFormData] = useState({daysOfWeek : "1"})
    const [formValid, setFormValid] = useState(false);
  function handleChange(event){
      setFormData(old => {
          return {
              ...old,
              [event.target.name]: event.target.value
          }
      })
  }
    const handleClick = (e)=>{
      if (FormData.startTime && FormData.endTime && FormData.metro && FormData.line) {
        setFormValid(true);
      e.preventDefault()
      console.log(FormData)
      props.setEvents((events)=>{
        try{
          return events.concat(FormData)
        }
        catch(e){return [FormData]}
        })
      }else{
        alert('Please fill in all required fields');
      }
        

      console.log(props.events)
      
    }
  return (
    <div >
        <form className='create-container '>
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

            <div className='create--form--header'>Start Time :</div>
            <input onChange={handleChange} className="create--form--field" name='startTime' placeholder='exemple: 09:00' required/>
          <div className='create--form--header'>End Time :</div>
            <input onChange={handleChange} className="create--form--field" name='endTime' placeholder='exemple: 13:30' required/>
          </div>
          <div className='create-container-group'>
            <div className='create--form--header'>Metro ID :</div>
            <input onChange={handleChange}  className="create--form--field"name='metro' placeholder='metro' required/>
            <div className='create--form--header'>Line :</div>
            <input onChange={handleChange}  className="create--form--field" name='line' placeholder='line' required/>
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