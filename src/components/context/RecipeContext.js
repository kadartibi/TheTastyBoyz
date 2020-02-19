import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const apiKey = "apiKey=bd83e659ea444e4c95cdea36564ee7f7"
  if (!recipe) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&" + apiKey
      )
      .then(res => setRecipe(res.data));
  }
  return (
    <RecipeContext.Provider value={[recipe]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
