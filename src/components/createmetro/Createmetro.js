import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

const Createmetro = (props) => {
  const [FormCreate, setFormCreate] = useState({});
  const [buttonstatus, setbuttonstatus] = useState(true);
  const editAccountRef = useRef(null);
  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(!create);
    console.log(create);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => handleClickOutside(event));

    return () => {
      document.removeEventListener("click", (event) =>
        handleClickOutside(event)
      );
    };
  }, [handleClick]);

  const handleClickOutside = (event) => {
    if (
      editAccountRef.current &&
      !editAccountRef.current.contains(event.target) &&
      !event.target.matches(".signin--form--button")
    ) {
      console.log("Click detected outside editaccount div");
      handleClick();
    }
  };

  const createMetro = async (e) => {
    try {
      console.log(FormCreate);
      e.preventDefault();
      setbuttonstatus(false);
      const docRef = doc(db, "metro", FormCreate.id);
      await setDoc(docRef, FormCreate);
      props.setbool((old)=>{return !old})
    } catch (error) {
      alert(error.message);
    }
  };
  
  function handleChange(event) {
    setFormCreate((old) => {
      return {
        ...old,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <>
    
      <button className="signin--form--button" onClick={handleClick} style={{}}>
        Add Metro
      </button>
      {create && (
        <div className="editaccount" ref={editAccountRef} >
          <form className="signin--form" onSubmit={createMetro}>
            <div className="signin--form--title">Add metro</div>
            <input
              onChange={handleChange}
              name="id"
              className="signin--form--field"
              placeholder="Id"
            />
            <input
              onChange={handleChange}
              name="type"
              className="signin--form--field"
              placeholder="Type"
            />
            <input
              onChange={handleChange}
              name="madein"
              className="signin--form--field"
              placeholder="Made in"
            />
            <input
              onChange={handleChange}
              name="capacity"
              className="signin--form--field"
              placeholder="Capacity"
            />
            <input
              onChange={handleChange}
              name="line"
              className="signin--form--field"
              placeholder="Line"
            />
            <button className="signin--form--button" disabled={!buttonstatus}>
              Create
            </button>
            <button className="signin--form--button" onClick={handleClick}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Createmetro;
