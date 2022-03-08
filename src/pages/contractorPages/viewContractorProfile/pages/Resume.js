import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Portfolio from "../components/Portfolio";
import { Typography, Rating } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { Grid } from "@mui/material";

function Resume(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* About Me */}
        <Grid container className="section pb_45 hstack gap-3 w-100">
          <Grid item className="section_title top_30">
            <span></span>
            <h2>About Me</h2>
          </Grid>
          <Grid container className="top_30">
            <Grid item>
              <Typography variant="body2" className="aboutme_text">
                {props.contractorDetails.aboutMe || "No About Me Added !"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*Experiences */}
        <Grid container className="section">
          <Grid item className="section_title top_30">
            <span></span>
            <h2>Work History</h2>
          </Grid>

          <Grid container className="top_30">
            {/*Experiences*/}
            <Grid item lg={12} md={12} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <DoneOutlineRoundedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Completed jobs ({props.jobsRating.length})
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {props.jobsRating.map((job) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {job.jobName}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        <Rating
                          className="timeline_rating"
                          name="read-only"
                          value={job.rating}
                          readOnly
                          size="small"
                        />
                        {/* {job.date} */}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {job.jobRatingReview}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>

        {/*Services*/}
        {/* <Grid container className='section p_50 pb_50'>
          <Grid item className='section_title mb_45'>
            <span></span>
            <h2>Our Services</h2>
          </Grid>
          <Grid container spacing={3} justify='space-around'>
            {props.services.map(service => (
              <Grid key={service.title} item lg={3} md={6} sm={6} xs={12}>
                <Paper elevation={0} className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography variant='h6' className='service_title'>
                    {service.title}
                  </Typography>
                  <Typography variant='body2' className='service_description'>
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
        <Portfolio {...props} />
        {/*Skills*/}
        {/* <Grid container className='section graybg p_50 pb_50'>
          <Grid container spacing={3} justify={"space-between"}>
            {props.skills.map(skill => (
              <Grid key={skill.title} item lg={4} md={6} sm={12} xs={12}>
                <Paper elevation={0} className='skills'>
                  <Typography variant='h6' className='skills_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map(el => (
                    <Typography variant='body2' className='skills_description'>
                      <TimelineDot
                        variant='outlined'
                        className='timeline_dot'
                      />
                      {el}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid> */}

        {/*Contact*/}
        {/* <Grid container className='section p_50 pb_50' spacing='10'>
          <Grid item xs={12} lg={12}>
            <Grid container>
              <Grid item className='section_title top_30'>
                <span></span>
                <h2>Contact El Waleed :</h2>
              </Grid>

              <Grid item className='top_30'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name='name' label='Name' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name='email' label='E-mail' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Message' multiline rows={4} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text={"Submit"} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Resume;
