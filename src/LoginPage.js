import React, { Component } from "react";
import ghil from "./ghilpng.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class LoginPage extends Component {
  render() {

    return (
      <div
        style={{
          background: "white",
          height: "516px",
          width: "376px",
          padding: "30px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      >
        <img style={{ height: "50px", width: "80px" }} src={ghil} />
        <Typography style={{ paddingTop: "10px" }} variant="h5" gutterBottom>
          Sign in
        </Typography>
        <Typography
          style={{ paddingBottom: "16px" }}
          variant="subtitle1"
          gutterBottom
        >
          Use your google account
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Email or phone"
            variant="outlined"
            style={{ fontSize: "326px" }}
          />
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography
              style={{
                color: "#007df2",
                fontWeight: "bold",
                paddingTop: "4px",
                paddingBottom: "16px",
                cursor: "pointer",
              }}
              variant="subtitle2"
              gutterBottom
            >
              Forgot email?
            </Typography>
          </div>
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
          />
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography
              style={{
                color: "#007df2",
                fontWeight: "bold",
                paddingTop: "4px",
                paddingBottom: "16px",
                cursor: "pointer",
              }}
              variant="subtitle2"
              gutterBottom
            >
              Forgot password?
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography
              style={{ fontSize: "14px" }}
              variant="subtitle1"
              gutterBottom
            >
              Not your computer? Use Guest mode to sign in privately
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography
              style={{
                color: "#007df2",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              variant="subtitle2"
              gutterBottom
            >
              Learn more
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "36px",
            }}
          >
            <Typography
              style={{ color: "#007df2", cursor: "pointer" }}
              variant="subtitle2"
              gutterBottom
            >
              Creat Account
            </Typography>
            <Button
              style={{ fontSize: "16px" }}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
