// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function RecipeDetails() {
//   const [recipe, setRecipe] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     fetch("./recipe.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const selectedRecipe = data.find((recipe) => recipe.id === id);
//         setRecipe(selectedRecipe);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);

//   return (
//     <div>
//       <h2>{recipe.recipe_name}</h2>
//       <p>Portioner: {recipe.servings}</p>
//       <p>Tid: {recipe.time}</p>
//       <ul>
//         {recipe.ingredients &&
//           recipe.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//       </ul>
//       <ol>
//         {recipe.instructions &&
//           recipe.instructions.map((instruction, index) => (
//             <li key={index}>{instruction}</li>
//           ))}
//       </ol>
//     </div>
//   );
// }

// export default RecipeDetails;
