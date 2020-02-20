import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const [recipeId, setRecipeId] = useState();
  const apiKey = "70bfdafc11684e60a8890fb24d9b227a";
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/" +
          recipeId +
          "/information?includeNutrition=true&apiKey=" +
          apiKey
      )
      .then(res => setRecipe(res.data));
  }, [recipeId]);
  return (
    <RecipeContext.Provider value={[recipe, recipeId, setRecipeId]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
