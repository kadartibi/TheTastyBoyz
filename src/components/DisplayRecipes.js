import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import CircularProgress from '@material-ui/core/CircularProgress';
import { RecipeContext } from "./context/RecipeContext";
import { Link } from "react-router-dom";
import placeholder  from "../images/placeholder.png"

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    width: "auto",
    maxWidth: 600,
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

const fixImageUrl = imageSrc => {
  if (imageSrc !== undefined) {
    const imageUrl = "https://spoonacular.com/recipeImages/";
    return imageSrc.includes(imageUrl) ? imageSrc : imageUrl + imageSrc;
  }
  return placeholder;
};

export function DisplayRecipes(props) {
  const classes = useStyles();
  let recipesDataReceived = props.recipes;
  const [food, recipeId, setRecipeId] = useContext(RecipeContext);

  recipesDataReceived = Array.isArray(recipesDataReceived)
    ? recipesDataReceived
    : recipesDataReceived.recipes;

  return recipesDataReceived ? (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} eleva>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="h1">Found recipes:</ListSubheader>
        </GridListTile>
        {recipesDataReceived.map(recipe => (
          <GridListTile key={recipe.title}>
            <Link
              to="/recipe"
              onClick={() => {
                setRecipeId(recipe.id);
              }}
            >
              <img src={fixImageUrl(recipe.image)} alt="Image not available" />
            </Link>
            <GridListTileBar title={recipe.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  ) : (
    <CircularProgress />
  );
}
