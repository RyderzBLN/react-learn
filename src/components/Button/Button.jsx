import React from "react";
import "./Button.style.css";

function Button({ text, style, eventhandler }) {
  const handleClick = (event) => {
    console.log("HALLO");
    event.target.style.backgroundColor = "yellow";
    setTimeout(() => {
      event.target.style.backgroundColor = `${style}`;
    }, 200);

    
  };

  return <button className={`Button ${style}`} onClick={eventhandler} >{text}</button>;
}

export default Button;
