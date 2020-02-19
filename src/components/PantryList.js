import React, { useContext, Fragment } from "react";
import { PantryContext } from "./context/PantryContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width: 200
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export default function Pantry() {
  const [pantryItems, setPantryItems] = useContext(PantryContext);
  const classes = useStyles();

  const deleteItem = (itemToDelete) => {
    setPantryItems(pantryItems.filter(item => item !== itemToDelete));
  };

  return pantryItems.map(item => (
    <div className={classes.demo}>
      <List dense={false}>
        {generate(
          <React.Fragment>
            <ListItem>
              <ListItemText primary={item} />
              <ListItemSecondaryAction onClick={() => deleteItem(item)}>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider absolute />
          </React.Fragment>
        )}
      </List>
    </div>
  ));
}
