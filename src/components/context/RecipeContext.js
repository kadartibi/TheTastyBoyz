import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const [recipeId, setRecipeId] = useState("716429");
  const apiKey = "ede037e5481b45e6aa041dd91def64ab";
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
