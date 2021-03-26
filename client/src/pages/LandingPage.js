import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import landingpage from "../components/img/landingpage.png";
import NavBar1 from "../components/NavBar1";
import Btn from "../components/Btn";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ModalWin from "../components/Modal";
import LogIn from "../components/LogIn";

const LandingPage = () => {
  const classes = useLPStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open === false) setOpen(true);
    if (open === true) setOpen(false);
  };
  const content = (
    <div>
      <LogIn />
    </div>
  );

  return (
    <div>
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${landingpage})`,
        }}
      >
        <div>
          <NavBar1 />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "start",
            fontSize: 48,
            flexDirection: "column",
            marginTop: "12%",
            marginLeft: "6%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            Come and dance
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",

              display: "flex",
              justifyContent: "start",
            }}
          >
            <div>rewind your</div>
            <div style={{ fontSize: 64, fontFamily: "Caveat" }}>story</div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <Btn
              text="Get Started"
              variant="contained"
              color="white"
              backgroundColor="#EE6C4D"
              height="40"
              width="131"
              onClick={handleClick}
            />
          </div>
          <div>
            <div>
              <ModalWin
                open={open}
                content={content}
                handleClick={handleClick}
              ></ModalWin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useLPStyles = makeStyles((theme) => ({
  image: {
    height: "100vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  modalHeading: {
    padding: 10,
  },
  textField: {
    padding: 10,
  },
}));

export default LandingPage;
