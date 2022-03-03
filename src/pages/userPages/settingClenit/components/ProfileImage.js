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
// for single image
//   const handleFormChange = event => {
//     console.log(event.target.files[0]);
//     setFormValues({
//       ...formValues,
//       photo: event.target.files[0],
//     });
//   };
// for multi image
  const handleFormChange = event => {
    console.log(event.target.files[0]);
    setFormValues({
      ...formValues,
      gallery: event.target.files[0],
    });
  };
  const handleSubmitForm = formValues => {
    console.log("formValues", formValues);
    const config = {
      header: {
        "content-type": "multipart/fotm-data",
      },
    };
    // if (formValues.photo) {
    if (formValues.gallery) {
      axiosInstace
        .patch("contractors/updateMe", formValues, config)
        .then(res => {
          console.log(res.data.data.user);
          MySwal.fire(`Data changed Successfully`).then(result => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        })
        .catch(err => {
          MySwal.fire(`Error , Try again`).then(result => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
          console.log(err);
        });
    }
  };

  return (
    <div className='w-100'>
      <Box className='w-100' sx={{ display: "flex" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            className='imageSettings'
            component='img'
            // height='194'
            image='http://localhost:8000\puplic\img\contractors\contractor-621e0b07cd332800aa2d61b2-1646229522732-cover.jpeg'
            alt='profile image'
          />
          <CardActions disableSpacing>
            <input
              className='form-control file-Attach w-100'
              type='file'
              id='formFileMultiple'
              name='photo'
              multiple
              onChange={e => handleFormChange(e)}
            />
            <br />
          </CardActions>
          <Grid item xs={12} className='text-center p-2'>
            <Button
              onClick={() => handleSubmitForm(formValues)}
              className='site_btn'
            >
              <span className='button_text'>Update Data</span>
            </Button>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}

export default ProfileImage;

// ----------------------------------------------------------------
