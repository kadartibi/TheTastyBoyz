import React from "react";
import AddToPantry from "./AddToPantry";
import PantryList from "./PantryList";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    width: 230,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    display: "table"
  }
});

export default function Pantry() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <PantryList />
      </CardContent>
      <CardActions>
        <AddToPantry />
      </CardActions>
    </Card>
  );
}
