import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";

const DetailedViewTitle = props => {
  const [recipe] = useContext(RecipeContext);
  return recipe ? <h1>{String(recipe.title)}</h1> : <div></div>;
};
export default DetailedViewTitle;
