import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";
import Ingredient from "./Ingredient";
import CircularProgress from '@material-ui/core/CircularProgress';

const IngredientList = props => {
  const [recipe] = useContext(RecipeContext);
  return recipe ? (
    recipe.extendedIngredients.map(ingredient => (
      <Ingredient
        key={ingredient.id}
        ingredient={String(ingredient.original)}
      />
    ))
  ) : (
    <CircularProgress/>
  );
};
export default IngredientList;
