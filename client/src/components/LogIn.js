import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core";

const LogIn = () => {
  const classes = useModalStyle();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div
        id="simple-modal-title"
        style={{ display: "flex ", justifyContent: "center" }}
        className={classes.modalHeading}
      >
        Log in with E-mail
      </div>
      <div id="simple-modal-description">
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          placeholder="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          fullWidth
        />
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          placeholder="e-mail"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          fullWidth
        />
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          htmlFor="standard-adornment-password"
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          fullWidth
        />
      </div>
    </div>
  );
};
const useModalStyle = makeStyles({
  modalHeading: {
    padding: 10,
  },
  textField: {
    paddingTop: 10,
    paddingBottom: 15,
  },
});
export default LogIn;
