import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { PantryContext } from "./PantryContext";

export const RecommendedRecipeContext = createContext();

export function RecommendedRecipeProvider(props) {
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [pantryItems, setPantryItems] = useContext(PantryContext);
  const pantryItemsQueryString = pantryItems.join(",+");
  const resultLimit = "&number=6&apiKey=";
  const apiKey = "cff302811d164d978d3f7b58489da7fb";
  const ingredientSearchString =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";
  const randomRecipe =
    "https://api.spoonacular.com/recipes/random?number=6&apiKey=";

  const recommendedSearchString =
    pantryItems.length > 0
      ? ingredientSearchString + pantryItemsQueryString + resultLimit + apiKey
      : randomRecipe + apiKey;

  useEffect(() => {
    axios
      .get(recommendedSearchString)
      .then(res => setRecommendedRecipes(res.data));
  }, [pantryItems, pantryItemsQueryString, recommendedSearchString]);

  return (
    <RecommendedRecipeContext.Provider value={[recommendedRecipes]}>
      {props.children}
    </RecommendedRecipeContext.Provider>
  );
}
