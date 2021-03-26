import React from "react";
import { makeStyles } from "@material-ui/core";
import { WelcomePage, AddPeoplePage } from "./pages";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import api from "./config/axios";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const classes = useStyles();
  api.get("/users/all").then((res) => console.log(res));
  return (
    <div className={classes.root} style={{ fontFamily: "Lato" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/add/people" component={AddPeoplePage} />
        </Switch>
      </Router>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export default App;
