import React from "react";
import "./jobDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineItem from "@mui/lab/TimelineItem";
import Timeline from "@mui/lab/Timeline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BTN from "./../../../components/button/btn";

export default function JobDetails() {
  const params = useParams();
  const [jobDetails, setJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstace
      .get(`job/contractor/${params.id}`)
      .then((res) => {
        setJobDetails(res.data.data.job);
        window.scrollTo(0, 0);
        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/contractorLogin");
      });
  }, []);
  return (
    <div className="container m-md-5 JobsPage-container">
      {isLoading ? (
        <div className="w-100 position-relative">
          <Box
            className="position-absolute top-0 start-50 translate-middle-x"
            sx={{ display: "flex" }}
          >
            <CircularProgress className="m-5" />
          </Box>
        </div>
      ) : (
        <section
          key={jobDetails.id}
          className="jobsSection border p-sm-3 p-xs-5 col-12"
        >
          <div className="d-flex justify-content-between">
            <h5 className="d-inline-block  w-auto">{jobDetails.headLine}</h5>
          </div>
          <div className="jobInfoLine my-2">
            <span className="border-end border-warning border-3 px-3">
              Budget:&nbsp;{jobDetails.budget}
            </span>
            <span className="border-end border-warning border-3 px-3">
              {new Date(Date.parse(jobDetails.createdAt)).toDateString()}
            </span>
            <span className="border-end border-warning border-3 px-3">
              Estimited Time:&nbsp;{jobDetails.estimatedTime}
            </span>
            <span className="px-3">
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp;{jobDetails.location}
            </span>
          </div>
          <div className="jobDescription my-3">
            <p>{jobDetails.description}</p>
          </div>
          <div className="Proposals my-3">
            <p>
              Proposals :&nbsp;
              <span className="jobKeyWord rounded-pill p-1 me-2">
                {jobDetails.totalProposal}
              </span>
            </p>
          </div>
          <Grid item lg={6} md={12} className="experience pb_30">
            <Timeline className="timeline">
              {jobDetails.status === "pending" ? (
                <>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot className="timeline_dot_header">
                        <LocalOfferIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" className="timeline_header">
                        Contractors Proposals : ({jobDetails.proposals.length})
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  {jobDetails.proposals.map((proposal) => (
                    <TimelineItem key={proposal.id}>
                      <TimelineSeparator className="separator_padding">
                        <TimelineDot
                          variant="outlined"
                          className="timeline_dot"
                        />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          Financial Offer :&nbsp;
                          {proposal.financialOffer}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          Estimated time :&nbsp;{proposal.estimatedTime}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          Cover letter :&nbsp;{proposal.coverLetter}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          Created at :&nbsp;
                          {new Date(
                            Date.parse(proposal.createdAt)
                          ).toDateString()}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </>
              ) : (
                <Link to={`/onGoingJob/${jobDetails.id}`}>
                  <Button
                    className="acceptProposalButton mt-2"
                    variant="contained"
                    color="success"
                  >
                    On Going
                  </Button>
                </Link>
              )}
            </Timeline>
          </Grid>
          <div className="col-12 text-center my-4 jobDetailsBtn ">
            <BTN
              URL={`/JobProposal/${jobDetails.id}`}
              text="Send a Proposal"
              type="defult"
            />
          </div>
        </section>
      )}
    </div>
  );
}
