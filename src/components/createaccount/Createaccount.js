import React, { useState, useRef, useEffect } from "react";
import "./createaccount.css";
import { db } from "../../firebase-config";
import {
  doc,
  setDoc,
} from "firebase/firestore";


const Createaccount = (props) => {
  const [FormCreate, setFormCreate] = useState({});
  const [create, setCreate] = useState(false);
  const [buttonstatus, setbuttonstatus] = useState(true);

  const handleClick = () => {
    setCreate(!create);
    console.log(create);
  };

  const editAccountRef = useRef(null);

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

  const createChauffeur = async (e) => {
    try {
      console.log(FormCreate);
      e.preventDefault();
      setbuttonstatus(false);
      const docRef = doc(db, "chauffeur", FormCreate.name);
      await setDoc(docRef, FormCreate);
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
      <button className="signin--form--button" onClick={handleClick}>
        Add Account
      </button>
      {create && (
        <div className="editaccount" ref={editAccountRef}>
          <form className="signin--form" onSubmit={createChauffeur}>
            <div className="signin--form--title">Create Account</div>
            <input
              onChange={handleChange}
              name="name"
              className="signin--form--field"
              placeholder="Name"
            />
            <input
              onChange={handleChange}
              name="lastName"
              className="signin--form--field"
              placeholder="Last Name"
            />
            <input
              onChange={handleChange}
              name="email"
              className="signin--form--field"
              placeholder="Email"
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

export default Createaccount;
