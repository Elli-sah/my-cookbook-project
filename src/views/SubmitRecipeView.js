import React, { useState } from "react";
import SubmitRecipe from "../components/SubmitRecipe";

function RecipeForm() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <h1>My Recipes</h1>
      <SubmitRecipe onSubmit={handleAddRecipe} />
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeForm;
