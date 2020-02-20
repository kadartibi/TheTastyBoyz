import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { RecipeContext } from "./context/RecipeContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 110,
    width: 600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    height: 550
  }
}));

export function DisplayRecipes(props) {
  const classes = useStyles();
  const recipes = props.recipes;
  const [food, recipeId, setRecipeId] = useContext(RecipeContext);

  return recipes ? (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="h1">Found recipes:</ListSubheader>
        </GridListTile>
        {recipes.map(recipe => (
          <GridListTile key={recipe.id}>
            <Link
              to="/recipe"
              onClick={() => {
                setRecipeId(recipe.id);
              }}
            >
              <img src={recipe.image} alt={recipe.image} />
            </Link>
            <GridListTileBar title={recipe.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  ) : (
    <div>Loading....</div>
  );
}
