import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Welcome to Boilerplate </h1>
      <Link className={classes.link} to="/add/people">
        <Button
          size="large"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <h1>Go to Add People Page</h1>
        </Button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  heading: {
    fontSize: "6em",
    fontWeight: 750,
  },
  button: {
    borderRadius: "10vw",
    width: "30vw",
  },
  link: {
    textDecoration: "none",
  },
});

export default WelcomePage;
