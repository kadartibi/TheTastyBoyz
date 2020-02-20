import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { PantryContext } from "./PantryContext";

export const RecommendedRecipeContext = createContext();

export function RecommendedRecipeProvider(props) {
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [pantryItems] = useContext(PantryContext);
  const pantryItemsQueryString = pantryItems.join(",+");
  const resultLimit = "&number=6&apiKey=";
  const apiKey = "3678e7ea03864b63934107f9bdb996ac";
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
