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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { CategoriesProvider } from "./components/context/CategoriesContext";
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = [
    "Gluten-free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescatarian",
    "Paleo",
    "Primal",
    "Whole30"
  ];

  return (
    <Router>
      <div className="App">
        <PantryProvider>
          <CategoriesProvider>
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

                    <Tab
                      label="Categories"
                      component={Button}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {categories.map(category => (
                        <MenuItem
                          onClick={handleClose}
                          component={Link}
                          to={"/categories/" + categories.indexOf(category)}
                        >
                          {category}
                        </MenuItem>
                      ))}
                    </Menu>
                    <Tab label="Pantry" component={Link} to="/pantry" />
                    <Tab label="Search" component={Link} to="/search" />
                    <Tab
                      label="Recommended Recipes"
                      component={Link}
                      to="/recommended-recipes"
                    />
                  </Tabs>
                </Paper>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/categories/:id" component={Categories} />
                  <Route path="/pantry" component={Pantry} />
                  <Route path="/search" component={Search} />
                  <Route
                    path="/recommended-recipes"
                    component={RecommendedRecipe}
                  />
                  <Route path="/recipe" component={Recipe} />
                </Switch>
              </RecipeProvider>
            </RecommendedRecipeProvider>
          </CategoriesProvider>
        </PantryProvider>
      </div>
    </Router>
  );
}

export default App;
