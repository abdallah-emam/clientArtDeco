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
  const [Governorates] = useState([
    "Cairo",
    "Giza",
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Ismailia",
    "Kafr El Sheikh",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ]);

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
      .patch("contractors/updateMe", formValues)
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
                    label={props.contractorDetails.name}
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
                    label={props.contractorDetails.email}
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
                    label={props.contractorDetails.phone}
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
                        {props.contractorDetails.address}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formValues.address ? formValues.address : ""}
                        name="address"
                        label="Address"
                        onChange={(e) => handleFormChange(e)}
                      >
                        {Governorates.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item className="section_title top_30">
                  <span></span>
                  <h2>About Me :</h2>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="aboutMe"
                    label="About Me"
                    placeholder={props.contractorDetails.aboutMe}
                    multiline
                    rows={4}
                    onChange={(e) => handleFormChange(e)}
                  />
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
