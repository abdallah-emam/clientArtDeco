import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { axiosInstace } from "./../../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Grid } from "@mui/material";
import { Button } from "react-bootstrap";

const MySwal = withReactContent(Swal);

function ProfileImage(props) {
  const [formValues, setFormValues] = useState({});
  const [isUploaded, setisUploaded] = useState(false);

  const handleFormChange = (event) => {
    setFormValues(event.target.files[0]);
    setisUploaded(true);
  };
  const handleSubmitForm = (formValues) => {
    const formData = new FormData();
    formData.append("photo", formValues);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (isUploaded) {
      axiosInstace
        .patch("contractors/updateMe", formData, config)
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
    }
  };

  return (
    <div className="w-100">
      <Box className="w-100" sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ display: "block" }}
            className="section_title top_30 d-block"
          >
            <span></span>
            <h2> Change Profile Image :</h2>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                className="imageSettings"
                component="img"
                // height='194'
                image={props.contractorDetails.photo}
                crossOrigin="anonymous"
                alt="profile image"
              />
              <CardActions disableSpacing>
                <input
                  className="form-control file-Attach w-100"
                  type="file"
                  id="formFileMultiple"
                  name="photo"
                  //   multiple
                  onChange={(e) => handleFormChange(e)}
                />
                <br />
              </CardActions>
              <Grid item xs={12} className="text-center p-2">
                <Button
                  onClick={() => handleSubmitForm(formValues)}
                  className="site_btn"
                >
                  <span className="button_text">Update Data</span>
                </Button>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProfileImage;

// ----------------------------------------------------------------
