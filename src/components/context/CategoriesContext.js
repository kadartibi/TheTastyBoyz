import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

export function CategoriesProvider(props) {
  const [recipesByCategories, setRecipesByCategories] = useState();
  const apiKey = "47a2adbba5e44a6d938c6a2bf8db9e4c";
  const [dietType, setDietType] = useState();
  const queryString =
    "https://api.spoonacular.com/recipes/search?diet=" +
    dietType +
    "&number=6&apiKey=" +
    apiKey;
  useEffect(() => {
    axios.get(queryString).then(res => setRecipesByCategories(res.data));
  }, [dietType]);
  
  return (
    <CategoriesContext.Provider
      value={[dietType, setDietType, recipesByCategories]}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
}
