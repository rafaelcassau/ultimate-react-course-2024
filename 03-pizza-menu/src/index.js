import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PIZZA_DATA } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [PIZZA_DATA];

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from ours stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {PIZZA_DATA.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = hour >= open && hour < close;
  console.log("isOpen", isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order open={open} close={close} />
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {close}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        We're open from {open}:00 until {close}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
