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
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { Grid } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
              <Typography variant="body2" className="fs-4 aboutme_text">
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
            <Grid item lg={6} md={12} className="experience pb_30">
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
            {/*inProgressJobs*/}
            <Grid item md={6} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <HandymanRoundedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      In progress ({props.inProgressJobs.length})
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {props.inProgressJobs.length <= 0 ? (
                  <h6>No Jobs at the moment !</h6>
                ) : (
                  <>
                    {props.inProgressJobs.map((job) => (
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
                            {job.headLine}
                          </Typography>
                          <Typography
                            variant="body3"
                            className="timeline_title"
                          >
                            <FontAwesomeIcon icon={faLocationDot} />
                            &nbsp;{job.location}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="timeline_description"
                          >
                            {job.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </>
                )}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>

        <Portfolio {...props} />
      </Grid>
    </Grid>
  );
}

export default Resume;
