/*
import React from "react";
import IngredientList from "./IngredientList";
import DetailedViewPicture from "./DetailedViewPicture";
import DetailedViewTitle from "./DetailedViewTitle";
import Paper from "@material-ui/core/Paper";

const Recipe = props => {
  const paperStyle = {
    padding: 20,
    width: "50%",
    align: "left",
    fontSize: 20
  };
  const titleStyle = {
    margin: "auto",
    width: "60%",
    marginTop: "7%"
  };
  const pictureStyle = {
    width: "50%",
    margin: "auto",
    padding: 20
  };
  const containerStyle = {
    display: "flex",
    marginLeft: "20%",
    marginRight: "20%"
  };
  return (
    <div>
      <Paper elevation={3} style={titleStyle}>
        <DetailedViewTitle />
      </Paper>
      <div style={containerStyle}>
        <Paper elevation={3} style={pictureStyle}>
          <DetailedViewPicture />
        </Paper>
        <Paper elevation={3} style={paperStyle}>
          <h2>Ingredients:</h2>
          <IngredientList />
        </Paper>
      </div>
    </div>
  );
};
export default Recipe;
*/

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import IngredientList from "./IngredientList";
import DetailedViewTitle from "./DetailedViewTitle";
import { RecipeContext } from "./context/RecipeContext";
import NutritionList from "./NutritionList";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "60%",
    alignSelf: "center",
    marginLeft: "20%"
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [recipe] = useContext(RecipeContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<DetailedViewTitle />}
      />
      <CardMedia
        className={classes.media}
        image={recipe ? String(recipe.image) : ""}
        title={<DetailedViewTitle />}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ingredients:
          <IngredientList />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        Nutritions:
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{<NutritionList />}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
