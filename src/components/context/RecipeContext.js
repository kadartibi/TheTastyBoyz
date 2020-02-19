import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  const apiKey = "39d8ec36e5e145ed9c239a253bce163c";
  if (!recipe) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/716429/information?includeNutrition=true&apiKey=" +
          apiKey
      )
      .then(res => setRecipe(res.data));
  }
  return (
    <RecipeContext.Provider value={[recipe]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
