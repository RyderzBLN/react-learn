import React from "react";
import "./Button.style.css";

function Button({ text, style }) {
  const handleClick = () => {
    console.log("HALLO");
    
  };

  return <button onClick={handleClick} className={`Button ${style}`}>{text}</button>;
}

export default Button;
