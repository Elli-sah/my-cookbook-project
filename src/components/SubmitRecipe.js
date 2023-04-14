import React, { useState } from "react";

function SubmitRecipe(props) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
    };
    props.onSubmit(recipe);
    setName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <br />
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default SubmitRecipe;
