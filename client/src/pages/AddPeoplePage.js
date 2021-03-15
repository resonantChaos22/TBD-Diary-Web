import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import PeopleContainer from "../components/PeoplePage/PeopleContainer";
import { BrowserRouter as Router, Link } from "react-router-dom";

const AddPeoplePage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PeopleContainer />
      <Link className={classes.link} to="/">
        <Button
          size="large"
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          <h1>Go Back</h1>
        </Button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
  button: {
    borderRadius: "10vw",
    width: "30vw",
  },
  link: {
    marginTop: "10vh",
    textDecoration: "none",
  },
});

export default AddPeoplePage;
