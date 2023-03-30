import "../css/Categories.css";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function CategoryList() {
  // const { category } = useParams();

  return (
    <div>
      <h1>Kategorier</h1>

      <div className="category-buttons">
        <Link to="/Recipes/Frukost">Frukost</Link>
      </div>
      <div className="category-buttons">
        <Link to="/Recipes/Förrätter">Förrätter</Link>
      </div>
      <div className="category-buttons">
        <Link to="/Recipes/Varmrätter">Varmrätter</Link>
      </div>
      <div className="category-buttons">
        <Link to="/Recipes/Efterrätter">Efterrätter</Link>
      </div>
      <div className="category-buttons">
        <Link to="/Recipes/Mellanmål">Mellanmål</Link>
      </div>
      <div className="category-buttons">
        <Link to="/Recipes/Kallrätter">Kallrätter</Link>
      </div>
    </div>
  );
}

export default CategoryList;
// function RecipeList() {
//   const [recipe, setRecipe] = useState([]);
//   const [showElements, setShowElements] = useState(false);
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     axios
//       .get("recipe.json")
//       .then((response) => {
//         setRecipe(recipe.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   function handleCategoryClick(category) {
//     setShowElements(true);
//     setCategory(category);
//   }

//   function getFilteredRecipes() {
//     return recipe.filter((recipe) => recipe.category === category);
//   }

//   return (
//     <>
//       <div className="nav">
//         <ul id="ul">
//           <Link
//             to="/Recipes/All_products"
//             onClick={() => setShowElements(false)}
//           >
//             <li className="catgory-links">Frukost</li>
//           </Link>
//           <Link
//             to="/products/electronics"
//             onClick={() => handleCategoryClick("electronics")}
//           >
//             <li className="catgory-links">Electronics</li>
//           </Link>
//           <Link
//             to="/products/jewelery"
//             onClick={() => handleCategoryClick("jewelery")}
//           >
//             <li className="catgory-links">Jewelery</li>
//           </Link>
//           <Link
//             to="/products/men's clothing"
//             onClick={() => handleCategoryClick("men's clothing")}
//           >
//             <li className="catgory-links">Men's clothing</li>
//           </Link>
//           <Link
//             to="/products/women's clothing"
//             onClick={() => handleCategoryClick("women's clothing")}
//           >
//             <li className="catgory-links">Women's clothing</li>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
// }
// filteredRecipes() {
//   const category = $route.params.category;
//   return Recipe.filter((Recipe) => Recipe.category === category);}
// export default RecipeList;

// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import recipeData from "../../src/recipe.json";

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
//     <div className="view-divs">
//       <div></div>
//       <h1>Recept</h1>
//       {recipeData &&
//         recipeData.map((recipe) => (
//           <div key={recipe.id}>
//             <h2>{recipe.recipe_name}</h2>
//             <p>Portioner: {recipe.servings}</p>
//             <p>Tid: {recipe.time}</p>
//             <ul>
//               {recipe.ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//             <ol>
//               {recipe.instructions.map((instructions, index) => (
//                 <li key={index}>{instructions}</li>
//               ))}
//             </ol>
//           </div>
//         ))}
//     </div>
//   );
// }

// function Category() {
//   const { id } = useParams();
//   const category = recipeData.categories.find((c) => c.id === Number(id));

//   return (
//     <div>
//       <h2>{category.name}</h2>
//       <h3>Recipes</h3>
//       <ul>
//         {category.recipes.map((recipe) => (
//           <li key={recipe.id}>{recipe.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function CategoryList() {
//   const categories = recipeData.categories;

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             <Link to={`/Recipes/${category.id}`}>{category.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default (CategoryList, Category, FetchedData);
