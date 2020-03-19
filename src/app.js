import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
import firebase from "./firebase";

const cakes = [
  { name: "Chocolate cake", link: "", image: "./cake.png", number: 0 },
  { name: "?", link: "", image: "./cake.png", number: 1 },
  { name: "Mudcake", link: "mudcake", image: "./cake.png", number: 1 },
  { name: "???", link: "", image: "./cake.png", number: 1 }
];

const App = () => {
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
      setShowModal(false);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [recipeNumber, setRecipeNumber] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("recipe")
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes);
      });
  }, []);

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
            {/*<Recipe />*/}
          </div>
        </div>
      )}
      <div className="container">
        <p className="text">
          Some vegan and gluten free cakes, cookies and other pastries. Enjoy
        </p>
        {recipes.map(({ id }) => (
          <div className="card" key={id}>
            <img className="card--avatar" src="./cake.png" alt="cake" />
            <h1 className="card--title">{id}</h1>
            <button className="card--link" onClick={() => clickOpen(id)}>
              Try
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
