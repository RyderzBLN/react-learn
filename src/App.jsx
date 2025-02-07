import Button from "./components/Button/Button.jsx";
import "./App.css";
import React from "react";



export default function App() {
  return (
    <>
      <header>
        <section className="hero">
          <div>
            <h1>Hallo</h1>
          </div>
          <div>
            <h2>WELT</h2>
          </div>
          <div>
          </div>
          <Button text={"EINS"} style={"blue"} />
          <Button text="ZWEI" style="red" />
        </section>
      </header>
    </>
  );
}
