import "./App.css";
import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Pantry from "./components/Pantry";
import Search from "./components/Search";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { PantryProvider } from "./components/context/PantryContext";
import { RecipeProvider } from "./components/context/RecipeContext";
import { RecommendedRecipeProvider } from "./components/context/RecommendedRecipeContext";
import Recipe from "./components/Recipe";
import RecommendedRecipe from "./components/RecommendedRecipe";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className="App">
        <PantryProvider>
          <RecommendedRecipeProvider>
            <RecipeProvider>
              <Paper className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  scrollButtons="auto"
                  variant="scrollable"
                >
                  <Tab label="Home" component={Link} to="/" />
                  <Tab label="Categories" component={Link} to="/categories" />
                  <Tab label="Pantry" component={Link} to="/pantry" />
                  <Tab label="Search" component={Link} to="/search" />
                  <Tab
                    label="Recommended Recipes"
                    component={Link}
                    to="/recommended-recipes"
                  />
                  <Tab label="TestItem" component={Link} to="/testitem" />
                </Tabs>
              </Paper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/pantry" component={Pantry} />
                <Route path="/search" component={Search} />
                <Route
                  path="/recommended-recipes"
                  component={RecommendedRecipe}
                />
                <Route exact path="/testitem" component={Recipe} />
              </Switch>
            </RecipeProvider>
          </RecommendedRecipeProvider>
        </PantryProvider>
      </div>
    </Router>
  );
}

export default App;
