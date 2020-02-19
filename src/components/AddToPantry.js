import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PantryContext } from "./context/PantryContext";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function AddToPantry() {
  const classes = useStyles();
  const [newItem, setNewItem] = useState("");
  const [pantryItems, setPantryItems] = useContext(PantryContext);

  const addNewItem = e => {
    setNewItem(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    setPantryItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={addItem}
      >
        <Input id="component-simple" value={newItem} onChange={addNewItem} />
        <Button variant="contained" color="primary" type="submit">
          Add to pantry
        </Button>
      </form>
    </div>
  );
}
