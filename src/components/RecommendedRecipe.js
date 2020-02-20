import React, { useContext } from "react";
import { RecommendedRecipeContext } from "./context/RecommendedRecipeContext";
import { DisplayRecipes } from "./DisplayRecipes";

export default function RecommendedRecipe() {
  let [recommendedRecipes] = useContext(RecommendedRecipeContext);

  return (
    <div>
      <DisplayRecipes recipes={recommendedRecipes}/>
    </div>
  );
}
