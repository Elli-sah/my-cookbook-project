import React, { useState, useEffect } from "react";
import CategoryList from "../components/CategoryList";
// import Recipes from "../components/Recipes";

function FetchedData() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch("/recipe.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipeData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="view-divs">
      <div></div>
      <div>
        <CategoryList />
      </div>
      <div>{/* <Recipes /> */}</div>
      {/* <h1>Recept</h1>

      {recipeData &&
        recipeData.map((recipe) => (
          <div className="recipe-boxes" key={recipe.id}>
            <h2>{recipe.recipe_name}</h2>
            <p>Portioner: {recipe.servings}</p>
            <p>Tid: {recipe.time}</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <ol>
              {recipe.instructions.map((instructions, index) => (
                <li key={index}>{instructions}</li>
              ))}
            </ol>
          </div>
        ))} */}
    </div>
  );
}
export default FetchedData;
