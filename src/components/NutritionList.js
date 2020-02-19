import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";
import Nutrition from "./Nutrition";

const NutritionList = props => {
  const [recipe] = useContext(RecipeContext);
  console.log(recipe);
  return recipe ? (
    recipe.nutrition.nutrients.map(nutritient => (
      <Nutrition
        key={nutritient.id}
        title={String(nutritient.title)}
        amount={String(nutritient.amount)}
        unit={String(nutritient.unit)}
      />
    ))
  ) : (
    <div>Loading...</div>
  );
};
export default NutritionList;
