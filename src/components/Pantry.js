import React, { useContext } from "react";
import { PantryContext } from "./PantryContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AddToPantry from "./AddToPantry";

export default function Pantry() {
  const [pantryItems, setPantryItems] = useContext(PantryContext);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: 200,
      display: "inline-block",
      textAlign: "center",
      alignSelf: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  const pantryList = pantryItems.map(item => <p>{item}</p>);

  return (
    <div className={classes.root}>
      
        <Paper className={classes.paper} elevation={3}>
          {pantryList}
        </Paper>

        <AddToPantry></AddToPantry>
      
    </div>
  );
}
