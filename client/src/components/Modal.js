import { makeStyles } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import React from "react";
import Btn from "../components/Btn";
import { GoogleLogin } from "react-google-login";

const ModalWin = (props) => {
  const classes = useModalStyles(props);
  const responseGoogle = (response) => {
    /*  console.log(response); */
  };

  return (
    <div>
      <div>
        <Modal open={props.open} onClose={props.handleClick}>
          <div
            className={classes.paper}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div
              className={classes.modalContent}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <GoogleLogin
                  clientId="936394007066-tpi6q6r1nv36rosco2gdigmkgples14r.apps.googleusercontent.com"
                  buttonText="Login"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={classes.gbutton}
                    >
                      Log in with Google
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div
                style={{
                  display: "flex ",
                  justifyContent: "space-evenly",
                  margin: 20,
                }}
              >
                {" "}
                or
              </div>
              <div>{props.content}</div>
              <div>
                <Btn
                  text="LogIn"
                  variant="contained"
                  color="white"
                  backgroundColor="#EE6C4D"
                  height="48px"
                  width="374px"
                  onClick={props.handleClick}
                  className={classes.modalButton}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const useModalStyles = makeStyles({
  paper: {
    position: "absolute",
    width: 500,
    height: 500,
    top: "50%",
    transform: "translate(-50%,-50%)",
    left: "50%",
    backgroundColor: "white",
    border: "1px solid #333",
    borderRadius: 8,
    padding: 0,
    fontFamily: "Lato",
    fontSize: 16,
  },
  modalContent: {
    marginLeft: 63,
    width: 374,
    height: 374,
  },

  gbutton: {
    height: 48,
    width: 374,
    backgroundColor: "white",
    color: "#333333",
    border: "2px solid #333333",
    borderRadius: 8,
    margin: 21,
  },
});
export default ModalWin;
