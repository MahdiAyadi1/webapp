import React, { useState, useRef, useEffect } from "react";

const Createaccount = (props) => {
  const [create, setCreate] = useState(false);

  const handleClick = () => {
    setCreate(!create);
    console.log(create);
  };

  const editAccountRef = useRef(null);

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
    if (editAccountRef.current && !editAccountRef.current.contains(event.target)&&
    !event.target.matches(".signin--form--button")) {
      console.log("Click detected outside editaccount div");
      handleClick();
    }
  };

  return (
    <>
      <button className="signin--form--button" onClick={handleClick}>
        Add Account
      </button>
      {create && (
        <div className="editaccount" ref={editAccountRef}>
          <form className="signin--form">
            <div className="signin--form--title">Create Account</div>
            <input className="signin--form--field" placeholder="Name" />
            <input className="signin--form--field" placeholder="Last Name" />
            <input className="signin--form--field" placeholder="Email" />
            <button className="signin--form--button" onClick={handleClick}>
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
