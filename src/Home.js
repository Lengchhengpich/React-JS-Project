import React, { useState } from "react";
import "./App.css";
import myPhoto from "./myPhoto.webp";
import Typewriter from "typewriter-effect";
export const Home = () => {
  const [name, setName] = useState("Chhengpich");
  return (
    <div className="container">
      <div className="right">
        <img src={myPhoto} alt="myPhoto" />
      </div>
      <div className="left">
        <div>
          <h1 className="text-red">
            Hello My Name {name}
          </h1>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["I'm Frontend Developer", "I'm UX/UI Desginer"],
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
