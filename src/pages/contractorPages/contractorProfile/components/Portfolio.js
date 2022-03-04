import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import {
  Paper,
  Typography,
  Icon,
  Rating,
  TextField,
  Button,
} from "@mui/material";
// import { Grid } from "@mui/core";

const Portfolio = props => {
  console.log(props.contractorDetails.gallery);
  return (
    <Grid container className='section pb_45 pt_45'>
      <Grid item className='section_title mb-4'>
        <span></span>
        <h2>Some of our Works</h2>
      </Grid>

      <Grid item xs={12} className=''>
        <Grid container spacing={2} className=''>
          {props.contractorDetails.gallery.map(img => (
            <Grid key={img} item lg={4} md={6} sm={12} xs={12}>
              <Card className='job-card'>
                <CardActionArea>
                  <figure className='card_image'>
                    <img src={img} crossOrigin="anonymous" alt='' />
                  </figure>
                  {/* <CardContent>
                    <Typography variant='h6' className='job-card-title fw-bold'>
                        {job.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      className='job-card-description fs-7'
                    >
                      {job.description}
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
