import React, { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";
import { Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const DetailedViewTitle = props => {
  const [recipe] = useContext(RecipeContext);
  return recipe ? (
    <Typography variant="h3">{String(recipe.title)}</Typography>
  ) : (
    <CircularProgress/>
  );
};
export default DetailedViewTitle;
