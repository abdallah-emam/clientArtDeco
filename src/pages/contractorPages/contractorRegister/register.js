import React, { useState } from "react";

import "./register.css";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "./Register-regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Grid, Paper, Avatar, Typography, TextField } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { axiosInstace } from "../../../network/axiosConfig";

const MySwal = withReactContent(Swal);

const ContractorSignUp = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    emailErr: null,
    passErr: null,
    nameErr: null,
    passConfirmationError: null,
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormValues({
          ...formValues,
          name: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          nameErr:
            event.target.value.length === 0
              ? "This field is required"
              : nameValidator.test(event.target.value) === false
              ? "name must be in right format to be a real name"
              : null,
        });
        break;

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
              : emailValidator.test(event.target.value) === false
              ? "Email must be like that (uuuwwwaaa@Example.com)"
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
              : passwordValidator.test(event.target.value) === false
              ? "Password must be like that (Pass12345)"
              : null,
        });
        break;

      case "passwordConfirm":
        setFormValues({
          ...formValues,
          passwordConfirm: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passConfirmationError:
            event.target.value.length === 0
              ? "This field is required"
              : (formValues.passwordConfirm === formValues.password) === true
              ? "Password Confirm doesn't Match"
              : null,
        });
        break;

      default:
        break;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formValuesErrors.emailErr &&
      !formValuesErrors.passErr &&
      !formValuesErrors.nameErr &&
      !formValuesErrors.passConfirmationError
    ) {
      axiosInstace
        .post("contractors/signup", formValues)
        .then((response) => {
          MySwal.fire(
            `Registered Successfully , Welcome ${response.data.data.contractor.name} , at ArtDeco.com`
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/");
            }
          });
          localStorage.setItem("company_token", response.data.token);
        })
        .catch((err) => {
          MySwal.fire(
            `Invalid Register , Please Enter Your Personal Data in Right Way`
          );
        });
    }
  };
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };

  const avatarStyle = { backgroundColor: "#ff8a00" };
  return (
    <div className="SignUp text-center m-5">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <TextField
              value={formValues.name}
              onChange={(e) => handleFormChange(e)}
              name="name"
              fullWidth
              label="Name"
              placeholder="Enter your name"
            />
            {formValuesErrors.nameErr && (
              <div className="form-text text-danger">
                {formValuesErrors.nameErr}
              </div>
            )}
            <TextField
              value={formValues.email}
              onChange={(e) => handleFormChange(e)}
              name="email"
              fullWidth
              label="Email"
              placeholder="Enter your email"
            />
            {formValuesErrors.emailErr && (
              <div className="form-text text-danger">
                {formValuesErrors.emailErr}
              </div>
            )}
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={(e) => handleFormChange(e)}
              name="password"
              type="password"
            />
            {formValuesErrors.passErr && (
              <div className="form-text text-danger">
                {formValuesErrors.passErr}
              </div>
            )}
            <TextField
              value={formValues.passwordConfirm}
              onChange={(e) => handleFormChange(e)}
              name="passwordConfirm"
              type="password"
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
            />
            {formValuesErrors.passConfirmationError && (
              <div className="form-text text-danger">
                {formValuesErrors.passConfirmationError}
              </div>
            )}

            <div className="topRight">
              <button
                onClick={(e) => handleSubmitForm(e)}
                type="submit"
                className="btn"
                disabled={
                  formValuesErrors.emailErr ||
                  formValuesErrors.passErr ||
                  formValuesErrors.nameErr ||
                  formValuesErrors.passConfirmationError ||
                  (formValues.email &&
                    formValues.name &&
                    formValues.password &&
                    formValues.passConfirmation) === ""
                }
              >
                Sign up
              </button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default ContractorSignUp;
