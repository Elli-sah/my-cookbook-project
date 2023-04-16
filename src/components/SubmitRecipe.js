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
        Namn:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ingredienser:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <br />
      <label>
        Instruktioner:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Lägg till Recept</button>
    </form>
  );
}

export default SubmitRecipe;
