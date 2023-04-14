import "../css/Categories.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Ratings from "../components/Ratings";

function CategoryList() {
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams();
  // const recipe = recipeData;

  useEffect(() => {
    fetch("./recipe.json")
      .then((response) => response.json())
      .then((recipeData) => {
        console.log(recipeData);
        setRecipeData(recipeData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredData(
      recipeData.filter((recipe) => {
        return recipe.category === id;
      })
    );
  }, [recipeData, id]);

  return (
    <div>
      <div className="category-links-box">
        <li className="category-buttons">
          <Link to="/Recipes/">Alla recept</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Förrätter">Förrätter</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Varmrätter">Varmrätter</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Efterrätter">Efterrätter</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Kallrätter">Kallrätter</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Brunch">Brunch</Link>
        </li>
        <li className="category-buttons">
          <Link to="/Recipes/Mellanmål">Mellanmål</Link>
        </li>
      </div>
      <div>
        {filteredData.length ? (
          <div>
            <h2>{filteredData[0].category}</h2>

            <div className="big-box-recipes">
              {filteredData.map((recipe) => (
                <div className="recipe-boxes" key={recipe.id}>
                  <Link to={`/Recipes/${recipe.recipe_name}`}>
                    <div className="box-images"></div>
                  </Link>
                  <div className="recipe-links">
                    <li>{recipe.recipe_name}</li>
                    <li>{recipe.time}</li>
                    <Ratings id={recipe.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CategoryList;
