import React, { useContext } from "react";
import { CategoriesContext } from "./context/CategoriesContext";
import { DisplayRecipes } from "./DisplayRecipes";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Categories(props) {
  const categoryDescriptions = {
    0: [
      "Gluten free",
      "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
    ],
    1: [
      "Ketogenic",
      "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not."
    ],
    2: [
      "Vegetarian",
      "No ingredients may contain meat or meat by-products, such as bones or gelatin."
    ],
    3: [
      "Lacto-vegetarian",
      "All ingredients must be vegetarian and none of the ingredients can be or contain egg."
    ],
    4: [
      "Ovo-vegetarian",
      "All ingredients must be vegetarian and none of the ingredients can be or contain dairy."
    ],
    5: [
      "Vegan",
      "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."
    ],
    6: [
      "Pescetarian",
      "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."
    ],
    7: [
      "Paleo",
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."
    ],
    8: [
      "Primal",
      "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."
    ],
    9: [
      "Whole30",
      "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites."
    ]
  };

  const chosenCategory = categoryDescriptions[parseInt(props.match.params.id)];

  const categoryName = chosenCategory[0];

  const categoryDescription = chosenCategory[1];

  const [dietType, setDietType, recipesByCategories] = useContext(
    CategoriesContext
  );

  setDietType(categoryName.toLowerCase());

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={categoryName}
      />
      <CardContent>{categoryDescription}</CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show recipes"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <DisplayRecipes recipes={recipesByCategories.results} />>
        </CardContent>
      </Collapse>
    </Card>
  );
}
