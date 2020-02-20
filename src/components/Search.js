import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";

import { DisplayRecipes } from "./DisplayRecipes";
import { SearchedRecipeContext } from "./context/SearchContext";

const Search = e => {
  const [searched, setSearchItem] = useContext(SearchedRecipeContext);
  const [newItem, setNewItem] = useState();

  const addNewItem = e => {
    setNewItem(e.target.value);
  };

  const addSearchString = e => {
    e.preventDefault();
    setSearchItem(newItem);
  };
  return (
    <div>
      <Paper elevation={3} className="searchbar">
        <form noValidate autoComplete="off" onSubmit={addSearchString}>
          <Input id="contained" value={null} onChange={addNewItem} />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </Paper>
      {searched ? (
        <div>
          <DisplayRecipes recipes={searched.results}></DisplayRecipes>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Search;
