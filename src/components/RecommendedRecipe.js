import React, { useContext } from "react";
import { RecommendedRecipeContext } from "./context/RecommendedRecipeContext";
import { DisplayRecipes } from "./DisplayRecipes";

export default function RecommendedRecipe() {
  const [recommendedRecipes] = useContext(RecommendedRecipeContext);
  console.log(recommendedRecipes);
  return (
    <div>
       <DisplayRecipes></DisplayRecipes>
    </div>
  );
}
