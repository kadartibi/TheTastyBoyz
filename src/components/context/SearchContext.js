import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchedRecipeContext = createContext();

export function SearchedRecipeProvider(props) {
  const [searched, setSearchedRecipes] = useState();
  const [searchItem, setSearchItem] = useState();
  const apiKey = "&apiKey=3678e7ea03864b63934107f9bdb996ac";
  const recipeSearchString =
    "https://api.spoonacular.com/recipes/search?query=";

  let searchString = recipeSearchString + String(searchItem) + apiKey;

  useEffect(() => {
    if (searchItem !== undefined) {
      axios.get(searchString).then(res => setSearchedRecipes(res.data));
    }
  }, [searchItem, searchString]);

  return (
    <SearchedRecipeContext.Provider value={[searched, setSearchItem]}>
      {props.children}
    </SearchedRecipeContext.Provider>
  );
}
