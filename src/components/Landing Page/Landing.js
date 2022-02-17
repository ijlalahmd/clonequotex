import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";
export const Landing = () => {
  return (
    <div className="landingMain">
      <div className="landigWrapper">
        <div className="landingContent">
          <span>DIGITAL MARKETING</span>
          <h1>Make your Site Amazing & Unique with</h1>
            <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
              onInit={(typewriter) => {
                typewriter

                  .typeString("FX OPTION.IO")
                  .pauseFor(1000)
                  .start();
              }}
            />
          <p>
            Vestibulum egestas magna ut aliquet sodales nunc fermentum <br />{" "}
            ligula quis tidunt vitae massa.
          </p>
          <div className="buttons">
            <button className="contactBtn">contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};