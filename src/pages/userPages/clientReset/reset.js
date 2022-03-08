import React, { useState } from "react";
import { validPassword } from "./regex.js";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import LockResetIcon from "@mui/icons-material/LockReset";
import { axiosInstace } from "../../../network/axiosConfig";

const MySwal = withReactContent(Swal);
const ClientReset = () => {
  const params = useParams();

  const [formValues, setFormValues] = useState({
    password: "",
    passwordConfirm: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    passErr: null,
    passwordConfirmErr: null,
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
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
      case "passwordConfirm":
        setFormValues({
          ...formValues,
          passwordConfirm: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passwordConfirmErr:
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
    if (!formValuesErrors.passErr && !formValuesErrors.passwordConfirmErr) {
      axiosInstace
        .patch(`users/resetPassword/${params.resetToken}`, formValues)
        .then((response) => {
          MySwal.fire(
            `Password Rested Successfully , Please Login With Your New Password`
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/clientLogin");
            }
          });
        })
        .catch((err) => {
          MySwal.fire(
            `Invalid Password , Please Enter Your New Password in Right Way`
          );
        });
    }
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#ff8a00" };
  return (
    <div className="text-center m-5">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockResetIcon />
            </Avatar>
            <h3>Reset Password</h3>
          </Grid>

          <form onSubmit={(e) => handleSubmitForm(e)}>
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
            <TextField
              value={formValues.passwordConfirm}
              onChange={(e) => handleFormChange(e)}
              name="passwordConfirm"
              type="password"
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
            />
            {formValuesErrors.passwordConfirmErr && (
              <div className="form-text text-danger">
                {formValuesErrors.passwordConfirmErr}
              </div>
            )}

            <div className="topRight">
              <button
                onClick={(e) => handleSubmitForm(e)}
                type="submit"
                className="btn"
                disabled={
                  formValuesErrors.passErr ||
                  formValuesErrors.passwordConfirmErr ||
                  (formValues.password && formValues.passwordConfirm) === ""
                }
              >
                Reset
              </button>
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default ClientReset;
