import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const Btn = (props) => {
  const classes = useBtnStyles(props);
  return (
    <div>
      <Button
        onClick={props.onClick}
        className={classes.btn}
        variant={props.variant}
        fontSize="16"
      >
        {props.text}
      </Button>
    </div>
  );
};

const useBtnStyles = makeStyles({
  btn: {
    borderRadius: "10vw",
    color: (props) => props.color,
    float: "right",

    backgroundColor: (props) => props.backgroundColor,
    border: (props) => props.border,
    margin: (props) => props.margin,
    marginTop: (props) => props.marginTop,
    marginRight: (props) => props.marginRight,
    position: (props) => props.position,
    top: (props) => props.top,
    left: (props) => props.left,
    height: (props) => props.height,
    width: (props) => props.width,
    padding: (props) => props.padding,
  },
});

export default Btn;
