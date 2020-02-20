import React, { useContext } from "react";
import { RecommendedRecipeContext } from "./context/RecommendedRecipeContext";
import { DisplayRecipes } from "./DisplayRecipes";

export default function RecommendedRecipe() {
  let [recommendedRecipes] = useContext(RecommendedRecipeContext);
  recommendedRecipes = Array.isArray(recommendedRecipes)
    ? recommendedRecipes
    : recommendedRecipes.recipes;

  return (
    <div>
      <DisplayRecipes recipes={recommendedRecipes}></DisplayRecipes>
    </div>
  );
}
