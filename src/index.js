import React from "react";
import ReactDOM from 'react-dom/client';

// pizza data

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  


// end of pizza data

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footers />
        </div>
    );
}

//header
const Header = () => {
    return <h1>Fast React Pizza Co.</h1>
}

const Menu = () => {
    return <div>
        <h2>Our Menu</h2>
        <Pizza />
    </div>
}

function Footers () {
    return <footer>We Are Currently Open !</footer>
}
// new component
function Pizza(){
    return (
        <div>
            <img src="pizzas/prosciutto.jpg" alt="pizza" />
            <h2>Pizza Salamino</h2>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);