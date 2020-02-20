import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

export function CategoriesProvider(props) {
  const [recipesByCategories, setRecipesByCategories] = useState();

  return (
    <CategoriesContext.Provider value={[recipesByCategories]}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
