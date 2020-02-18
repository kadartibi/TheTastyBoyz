import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = props => {
  const [recipe, setRecipe] = useState();
  if (!recipe) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=a571bf59d10f4bf7b057fec91bc9d741"
      )
      .then(res => setRecipe(res.data));
  }
  return (
    <RecipeContext.Provider value={[recipe]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
