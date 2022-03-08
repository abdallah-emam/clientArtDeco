import { Card, CardActionArea, Grid } from "@mui/material";

import Swal from "sweetalert2";

const Portfolio = (props) => {
  const openImg = (event) => {
    Swal.fire({
      html: `<img src="${event.target.currentSrc}" style="width:100%" crossOrigin="anonymous" alt='image' /> `,
      showCloseButton: true,
      width: 600,
    });
  };

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb-4">
        <span></span>
        <h2>Some of our Works</h2>
      </Grid>

      <Grid item xs={12} className="">
        {props.contractorDetails.gallery.length <= 0 ? (
          <h6>No Gallery Added Yet !</h6>
        ) : (
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
        )}
      </Grid>
    </Grid>
  );
};

export default Portfolio;
