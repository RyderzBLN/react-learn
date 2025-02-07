import React from "react";
import "./Count.style.css";
import Button from "./../Button/Button.jsx"
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(13);
  const plusHandler = () => {
    setCount(count + 1);
  };
  const minusHandler = () => {
    setCount(count - 1);
  }
  const resetHandler = () => {
    setCount(0);
  }
  return <section className="Count-section"><h3>{count}</h3>
  
  <div>
    <Button text="+" style={"blue"} eventhandler={plusHandler} />
    <Button text="-" style={"red"} eventhandler={minusHandler}/>
    <Button text="Reset" style={"green"} eventhandler={resetHandler} />
  </div>
  </section>;
}

export default Count;
