import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const [recipeId, setRecipeId] = useState();
  const apiKey = "47a2adbba5e44a6d938c6a2bf8db9e4c";
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
