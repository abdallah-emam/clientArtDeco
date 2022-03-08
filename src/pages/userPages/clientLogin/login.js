import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "./regex.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Grid, Paper, Avatar, TextField, Typography } from "@material-ui/core";
import "./login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { axiosInstace } from "../../../network/axiosConfig";
import BTN from "../../../components/button/btn";

const MySwal = withReactContent(Swal);

const ClientLogin = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    emailErr: null,
    passErr: null,
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          emailErr:
            event.target.value.length === 0
              ? "This field is required"
              : validEmail.test(event.target.value) === false
              ? "Email must be like that (exmple@example.com)"
              : null,
        });
        break;

      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passErr:
            event.target.value.length === 0
              ? "This field is required"
              : validPassword.test(event.target.value) === false
              ? "Password must be like that (Pass12345)"
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formValuesErrors.emailErr && !formValuesErrors.passErr) {
      axiosInstace
        .post("users/login", formValues)
        .then((response) => {
          MySwal.fire(
            `Logged-in Successfully , Welcome ${response.data.data.user.name} , at ArtDeco.com`
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/");
            }
          });
          localStorage.setItem("user_token", response.data.token);
        })
        .catch((err) => {
          MySwal.fire(
            `Invalid Login , Please Enter Your Email and Password Right`
          );
        });
    }
  };

  const foregetHandle = (e) => {
    e.preventDefault();
    if (!formValuesErrors.emailErr) {
      axiosInstace
        .post("users/forgotPassword", formValues)
        .then((response) => {
          MySwal.fire(`Please Check Your Email To Reset Your Password`);
        })
        .catch((err) => {
          MySwal.fire(
            `Can't Find This Email , Please Right Your Email In Right Way`
          );
        });
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#ff8a00" };

  return (
    <div className="Login text-center m-5">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>

          <form onSubmit={(e) => handleSubmitForm(e)}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
              value={formValues.email}
              onChange={(e) => handleFormChange(e)}
              name="email"
            />
            {formValuesErrors.emailErr && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.emailErr}
              </div>
            )}
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              value={formValues.password}
              onChange={(e) => handleFormChange(e)}
              name="password"
            />
            {formValuesErrors.passErr && (
              <div className="form-text text-danger">
                {formValuesErrors.passErr}
              </div>
            )}
            {/* <div className="m-3 ">
              <BTN
                URL="/company_signup"
                text="Sign in"
                type="defult"
              />
            </div> */}
            <div className="topRight">
              <button
                onClick={(e) => handleSubmitForm(e)}
                type="submit"
                className="btn"
                disabled={
                  formValuesErrors.emailErr ||
                  formValuesErrors.passErr ||
                  (formValues.email && formValues.password) === ""
                }
              >
                Sign in
              </button>
            </div>
            {/* <Button
              type="submit"
              variant="contained"
              style={btnStyle}
              fullWidth
              disabled={
                formValuesErrors.emailErr ||
                formValuesErrors.passErr ||
                (formValues.email && formValues.password) === ""
              }
            >
              Sign in
            </Button> */}
          </form>
          <Typography>
            {" "}
            <Link onClick={(e) => foregetHandle(e)} to="">
              {" "}
              Forgot password ?
            </Link>
          </Typography>
          <br />
          <Typography>
            {" "}
            Do you have an account ? <br />
            {/* <Link to={"/user_signup"}>Sign Up</Link> */}
            <div className="m-3 ">
              <BTN URL="/ClientSignUp" text="Sign up" type="outline" />
            </div>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default ClientLogin;
