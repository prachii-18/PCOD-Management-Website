import React, { useEffect, useState } from "react";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div>
      <h2>Healthy Recipes</h2>
      {recipes.length === 0 ? (
        <p>Loading recipes...</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              
              <p>Name: {recipe.name}</p>
              <p>Ingredients: {recipe.ingredients.join(", ")}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Calories: {recipe.calories} kcal</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
