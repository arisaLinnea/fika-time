import React, { useState } from "react";
import cakeImg from "./cake.png";
import Recipe from "./recipe";

const cakes = [
  { name: "Chocolate cake", link: "", image: "./cake.png", number: 0 },
  { name: "?", link: "", image: "./cake.png", number: 1 },
  { name: "Mudcake", link: "mudcake", image: "./cake.png", number: 1 },
  { name: "???", link: "", image: "./cake.png", number: 1 }
];

const App = () => {

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        setShowModal(false);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [recipeNumber, setRecipeNumber] = useState(1);

  const clickClose = () => {
    setShowModal(false);
  };

  const clickOpen = number => {
    setShowModal(true);
    setRecipeNumber(number);
  };

  return (
    <>
      <nav>
        <h1>Fika inspiration</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
      {showModal && (
          <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => clickClose()}>
            &times;
          </span>
          <Recipe number={recipeNumber} />
        </div>
        </div>
      )}
      <div className="container">
        <p className="text">
          Some vegan and gluten free cakes, cookies and other pastries. Enjoy
        </p>
        {cakes.map(({ name, image, number }) => (
          <div className="card" key={name}>
            <img className="card--avatar" src={image} />
            <h1 className="card--title">{name}</h1>
            <a className="card--link" onClick={() => clickOpen(number)}>
              Try
            </a>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default App;
