import React from "react";
import { makeStyles } from "@material-ui/core";

const NavBar1 = () => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "10vh",
        }}
      >
        <div
          className="right"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 36, color: "#333333" }}>Logo</div>
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "space-around",
            }}
          >
            <div style={{ fontSize: 16, color: "#293241" }}>About Us</div>
            <div style={{ fontSize: 16, color: "#293241" }}> Help</div>
          </div>
        </div>
        <div
          className="left"
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 16, color: "white" }}> Login</div>

          <div style={{ fontSize: 16, color: "white" }}> Sign In</div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default NavBar1;
