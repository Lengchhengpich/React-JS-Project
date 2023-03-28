import React from "react";
import myPhoto from "./myPhoto.webp";
import "./App.css";
export const About = () => {
  return (
    <div className="container">
      <div className="right">
        <img src={myPhoto} alt="myPhoto" />
      </div>
      <div className="left">
        <div>
          <h1 className="text-red">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, lorem vel pharetra imperdiet, diam dui eleifend orci, sed
            pharetra mi eros sed orci. Aliquam vitae ex sagittis, vehicula nisl
            non, tempus tortor. Nunc luctus enim eu mi viverra, et ullamcorper
            risus rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
