import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const [recipeId, setRecipeId] = useState("716429");
  const apiKey = "c7e73174371043249f5d5f07b1d5a55c";
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
