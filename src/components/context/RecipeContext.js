import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  if (!recipe) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/716429/information?includeNutrition=true&apiKey=1eac39f1d4cb4425977ed9965b436d65"
      )
      .then(res => setRecipe(res.data));
  }
  return (
    <RecipeContext.Provider value={[recipe]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
