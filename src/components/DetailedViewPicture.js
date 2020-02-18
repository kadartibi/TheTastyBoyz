import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";

const DetailedViewPicture = props => {
  const [recipe] = useContext(RecipeContext);
  return recipe ? (
    <div>
      <img src={String(recipe.image)} alt="" />
    </div>
  ) : (
    <div></div>
  );
};
export default DetailedViewPicture;
