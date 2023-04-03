import React, { useEffect } from "react";
import './timetable.css' ;
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Createevent} from ".."
import {useState} from 'react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc
  } from "firebase/firestore";
  import { db } from "../../firebase-config";
const  Timetable= ()=> {
  const handleDateClick = (arg) => {
    const selectedEvent = {title : arg.event._def.title }
    console.log(selectedEvent)
    if (arg.event._def.title) {
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (confirmDelete) {
          const updatedEvents = events.filter((event) => event.title !== selectedEvent.title);
          console.log(updatedEvents)
          setEvents(updatedEvents);
        }
    }
  };
  // const handleDateClick = (arg) => {
  //   console.log("test")
  //   const clickedDate = arg.date.toISOString();
  //   const clickedEvent = events.find((event) => event.start === clickedDate);
  
  //   if (clickedEvent) {
  //     const confirmDelete = window.confirm("Are you sure you want to delete this event?");
  //     if (confirmDelete) {
  //       const updatedEvents = events.filter((event) => event.start !== clickedDate);
  //       setEvents(updatedEvents);
  //     }
  //   } else {
  //     // Handle case where there is no event for the clicked date
  //   }
  // };
    const [events , setEvents] = useState({})
    const getFromDatabase = async()=>{
      try {
        const docRef = doc(db, "timetable","chauffeur test");
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
        setEvents( docSnap.data().json)
        
      } catch (error) {
        
      }
    }
    useEffect(()=>{
      getFromDatabase()
    },[])
    const saveToDatabase =async()=>{
      console.log("clicked")
      try {
      const docRef = doc(db, "timetable","chauffeur test");
    await setDoc(docRef, {json : events})
      } catch (error) {
        alert(error.message);
      }
    }
    return (
        
    <div className="timetable">
        <FullCalendar
        height={350}
        center="Add"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        // slotMinTime="05:00"
        // slotMaxTime="23:00"
        // allDaySlot={false}
        className="timtable--calendar"
        plugins={[ dayGridPlugin , timeGridPlugin,interactionPlugin ]}
        initialView="timeGridWeek"
        events={events}
        eventClick={handleDateClick}
      />
      <Createevent setEvents={setEvents} events={events} />
        <button className="signin--form--button"onClick={saveToDatabase} style={{margin : "10px"}}>Save</button>
    </div>
    )
}
export default Timetable