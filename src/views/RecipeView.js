import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeView() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState("");

  useEffect(() => {
    console.log(id);
    fetch("./recipe.json")
      .then((response) => response.json())
      .then((data) => {
        const someData = data.filter((recipe) => recipe.id == id);
        setRecipeData(someData);
        console.log(someData, recipeData);
      })
      .catch((error) => console.log(error));
  }, [recipeData, id]);

  return (
    <div>
      {recipeData && recipeData.length > 0 && (
        <div className="full-recipe" key={recipeData[0].id}>
          <div className="box-shadow">
            <h2>{recipeData[0].recipe_name}</h2>
            <p>Portioner: {recipeData[0].servings}</p>
            <p>Tid: {recipeData[0].time}</p>
            <ul>
              {recipeData[0].ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <ol>
              {recipeData[0].instructions.map((instructions, index) => (
                <li key={index}>{instructions}</li>
              ))}
            </ol>
          </div>
          <Link to="/Recipes">
            <button>Tillbaka</button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default RecipeView;
