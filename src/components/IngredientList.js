import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";
import Ingredient from "./Ingredient";

const IngredientList = props => {
  const [recipe] = useContext(RecipeContext);
  console.log(recipe);
  return recipe ? (
    recipe.extendedIngredients.map(ingredient => (
      <Ingredient
        key={ingredient.id}
        ingredient={String(ingredient.original)}
      />
    ))
  ) : (
    <div>Loading...</div>
  );
};
export default IngredientList;
