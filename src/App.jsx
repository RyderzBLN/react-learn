import Button from "./components/Button/Button.jsx";
import "./App.css";
import React from "react";
import Count from "./components/Count/Count.jsx";



export default function App() {

  return (
    <>
      <header style={{display: "none"}}>
        <section className="hero">
          <div>
            <h1>Hallo</h1>
          </div>
          <div>
            <h2>WELT</h2>
          </div>
          <div>
          </div>

        </section>
      </header>
      <main>
        <Count />
      </main>
    </>
  );
}
