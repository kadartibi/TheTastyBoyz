import React, { useContext } from "react";
import { RecommendedRecipeContext } from "./context/RecommendedRecipeContext";

export default function RecommendedRecipe() {
  const [recommendedRecipes] = useContext(RecommendedRecipeContext);
  console.log(recommendedRecipes)
  return <h1>Recommended Recipes</h1>;
}
