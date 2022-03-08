import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { axiosInstace } from "./../../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import { CardActionArea } from "@mui/material";

const MySwal = withReactContent(Swal);

function PreviousWork(props) {
  const [formValues, setFormValues] = useState([]);
  const [isUploaded, setisUploaded] = useState(false);

  const handleFormChange = (event) => {
    setisUploaded(true);
    setFormValues((oldArray) => [...oldArray, ...event.target.files]);
  };

  const handleSubmitForm = (formValues) => {
    const formData = new FormData();
    for (const value of formValues) {
      formData.append("gallery", value);
    }

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

  const openImg = (event) => {
    Swal.fire({
      html: `<img src="${event.target.currentSrc}" style="width:100%" crossOrigin="anonymous" alt='image' /> `,
      showCloseButton: true,
      width: 600,
    });
  };
  return (
    <div className="w-100">
      <Box className="w-100" sx={{ display: "flex" }}>
        <Grid container spacing={2} item xs={12} className="">
          <Grid
            item
            style={{ display: "block" }}
            className="section_title top_30 d-block mb-4"
          >
            <span></span>
            <h2> Change Your Gallery Images :</h2>
          </Grid>

          {props.contractorDetails.gallery.length <= 0 ? (
            <h6>No Gallery Added Yet !</h6>
          ) : (
            <>
              <Grid container spacing={2} className="">
                {props.contractorDetails.gallery.map((img) => (
                  <Grid key={img} item lg={4} md={6} sm={12} xs={12}>
                    <Card className="job-card">
                      <CardActionArea>
                        <figure className="card_image">
                          <img
                            onClick={(e) => openImg(e)}
                            src={img}
                            crossOrigin="anonymous"
                            alt=""
                          />
                        </figure>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          <Grid container spacing={2} className="mt-2 px-2">
            <Grid item xs={12} className="text-center p-2">
              <input
                className="form-control file-Attach w-100"
                type="file"
                id="formFileMultiple"
                name="photo"
                multiple
                onChange={(e) => handleFormChange(e)}
              />
              <br />
              <Button
                onClick={() => handleSubmitForm(formValues)}
                className="site_btn"
              >
                <span className="button_text">Update Data</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PreviousWork;

// ----------------------------------------------------------------
