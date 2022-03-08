import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { axiosInstace } from "./../../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = (props) => {
  const [formValues, setFormValues] = useState({});

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormValues({
          ...formValues,
          name: event.target.value,
        });
        break;
      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        break;
      case "phone":
        setFormValues({
          ...formValues,
          phone: event.target.value,
        });
        break;
      case "address":
        setFormValues({
          ...formValues,
          address: event.target.value,
        });
        break;
      case "aboutMe":
        setFormValues({
          ...formValues,
          aboutMe: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (formValues) => {
    axiosInstace
      .patch("users/updateMe", formValues)
      .then((res) => {
        MySwal.fire(`Data changed Successfully`).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        MySwal.fire(`Error , Try again`).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
  };

  return (
    <>
      <Grid container className="section pb_50" spacing="10">
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item className="top_30">
              <Grid container spacing={2}>
                <Grid item className="section_title top_30">
                  <span></span>
                  <h2>User Name :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label={props.UserDetails.name}
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item className="section_title top_30">
                  <span></span>
                  <h2>User Email :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="email"
                    label={props.UserDetails.email}
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item className="section_title top_30">
                  <span></span>
                  <h2>Phone :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="phone"
                    label={props.UserDetails.phone}
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item className="section_title top_30">
                  <span></span>
                  <h2>Address :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {props.UserDetails.address}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formValues.address ? formValues.address : ""}
                        name="address"
                        label="Address"
                        onChange={(e) => handleFormChange(e)}
                      >
                        <MenuItem value={"Cairo"}>Cairo</MenuItem>
                        <MenuItem value={"Giza"}>Giza</MenuItem>
                        <MenuItem value={"Menia"}>Menia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => handleSubmitForm(formValues)}
                    className="site_btn"
                  >
                    <span className="button_text">Update Data</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
