import "./App.css";
import React, { Fragment } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Categories from "./components/Categories";
import Pantry from "./components/Pantry";
import Search from "./components/Search";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { RecipeProvider } from "./components/context/RecipeContext";
import Recipe from "./components/Recipe";

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
      <RecipeProvider>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Paper className={classes.root}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab label="Categories" component={Link} to="/categories" />
                    <Tab label="Pantry" component={Link} to="/pantry" />
                    <Tab label="Search" component={Link} to="/search" />
                    <Tab label="TestItem" component={Link} to="/testitem" />
                  </Tabs>
                </Paper>
                <Switch>
                  <Route exact path="/categories" component={Categories} />
                  <Route exact path="/pantry" component={Pantry} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/testitem" component={Recipe} />
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </RecipeProvider>
    </Router>
  );
}

export default App;
