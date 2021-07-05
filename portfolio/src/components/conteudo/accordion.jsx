import React, { useState, useRef } from "react";
import "./estilo.css";
import Chevron from "./chevron";


function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("acIcon");
  
    const content = useRef(null);
  
    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      );
      setRotateState(
        setActive === "active" ? "acIcon" : "acIcon rotate"
      );
    }
  
    return (
      <div className="accordionSection">
        <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="acTitle">{props.title}</p>
          <Chevron className={`${setRotate}`} width={10} fill={"teal"} />
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="acBody">{props.content}
          <div>
            
        </div>
        </div>
      </div>
    );
  }
  
  export default Accordion;

