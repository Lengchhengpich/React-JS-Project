import React from 'react'
import myPhoto from "./myPhoto.webp";
import "./App.css";
export const Contact = () => {
  return (
    <div className="container">
      <div className="right">
        <img src={myPhoto} alt="myPhoto" />
      </div>
      <div className="left">
        <div>
          <h1 className="text-red">Contact Me</h1>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;