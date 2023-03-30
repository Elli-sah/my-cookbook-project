// import React, { useState, useEffect } from "react";

// function FetchedData() {
//   const [recipeData, setRecipeData] = useState(null);

//   useEffect(() => {
//     fetch("recipe.json")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setRecipeData(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {recipeData &&
//         recipeData.map((recipe) => (
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <p>Portioner: {recipe.servings}</p>
//             <p>Tid: {recipe.time}</p>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//             <ol>
//               <li>{recipe.instructions}</li>
//             </ol>
//           </div>
//         ))}
//     </div>
//   );
// }
// export default FetchedData;
