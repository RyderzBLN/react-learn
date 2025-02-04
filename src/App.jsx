import "./App.css";
import Name from "./components/NAME/NAME";

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
            <button>Drück hier</button>
          </div>
          <Name />
        </section>
      </header>
    </>
  );
}
