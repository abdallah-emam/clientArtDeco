import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";
import fileimg from "../../../images/fileimg.jpg";
import { axiosInstace } from "../../../network/axiosConfig";
import BTN from "../../../components/button/btn";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Typography } from "@mui/material";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineItem from "@mui/lab/TimelineItem";
import Timeline from "@mui/lab/Timeline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "react-bootstrap";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ClientDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [UserDetails, setUserDetails] = useState([]);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstace
      .get("users/getMe")
      .then((res) => {
        setUserDetails(res.data.data.user);
        setJobs(res.data.data.user.jobs);
        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/clientLogin");
      });
  }, []);

  const deleteJob = function (id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstace
          .delete(`job/${id}`)
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            window.location.replace("/clientLogin");
          });
        Swal.fire(
          "Deleted!",
          "Your Requested Job has been deleted.",
          "success"
        );
      }
    });
  };

  const editJob = function (id) {
    window.location.replace(`/JobUpdate/${id}`);
  };

  const acceptProposal = function (jobId, contractorId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm this proposal !",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstace
          .patch(`job/${jobId}/proposal/${contractorId}`)
          .then((res) => {
            Swal.fire(
              "Confirmed!",
              `We will notify the contractor and contact you soon on ${UserDetails.email}`,
              "success"
            ).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((err) => {});
      }
    });
  };
  return (
    <div>
      <div className="container my-5 dashboardContainer">
        <div className="container my-3">
          <div className="row">
            <div className="col-6 ">
              <Grid item className="section_title top_30">
                <span></span>
                <h2>Your Dashboard</h2>
              </Grid>
            </div>
          </div>
        </div>

        {/* secondsection */}
        {isLoading ? "loading..." : null}

        {Jobs?.length === 0 ? (
          <div>
            <div className="container">
              <div className="d-flex justify-content-center">
                <img src={fileimg} alt={"no jops"} />
              </div>
              <div className="d-flex justify-content-center">
                <p> You don't have a Posts Yet</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center col-12 col-md-4"></div>
              </div>
            </div>
          </div>
        ) : (
          Jobs?.length > 0 &&
          Jobs.slice(0)
            .reverse()
            .map((job) => {
              return (
                <section
                  key={job.id}
                  className="jobsSection border p-sm-3 p-xs-5 col-12"
                >
                  <div className="d-flex justify-content-between">
                    <h5 className="d-inline-block  w-auto">{job.headLine}</h5>
                  </div>
                  {job.status === "pending" ? (
                    <div className="jobIcons d-inline-block w-auto float-end">
                      <FontAwesomeIcon
                        onClick={() => editJob(job.id)}
                        className="fa-xl icon  mr-1 rounded-circle p-2 mx-md-2"
                        icon={faPenToSquare}
                      />
                      <br />
                      <FontAwesomeIcon
                        onClick={() => deleteJob(job.id)}
                        className="fa-xl icon mt-3 mr-1 rounded-circle p-2 mx-md-2"
                        icon={faTrashCan}
                      />
                    </div>
                  ) : null}
                  <div className="jobInfoLine my-2">
                    <span className="border-end border-warning border-3 px-3">
                      Budget:&nbsp;{job.budget}
                    </span>
                    <span className="border-end border-warning border-3 px-3">
                      {new Date(Date.parse(job.createdAt)).toDateString()}
                    </span>
                    <span className="border-end border-warning border-3 px-3">
                      Estimited Time:&nbsp;{job.estimatedTime}
                    </span>
                    <span className="px-3">
                      <FontAwesomeIcon icon={faLocationDot} />
                      &nbsp;{job.location}
                    </span>
                  </div>
                  <div className="jobDescription my-3">
                    <p>{job.description}</p>
                  </div>
                  <div className="Proposals my-3">
                    <p>
                      Proposals :&nbsp;
                      <span className="jobKeyWord rounded-pill p-1 me-2">
                        {job.totalProposal}
                      </span>
                    </p>
                  </div>
                  <Grid item lg={6} md={12} className="experience pb_30">
                    <Timeline className="timeline">
                      {(() => {
                        if (job.status === "pending") {
                          return (
                            <>
                              <TimelineItem>
                                <TimelineSeparator>
                                  <TimelineDot className="timeline_dot_header">
                                    <LocalOfferIcon />
                                  </TimelineDot>
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <Typography
                                    variant="h6"
                                    className="timeline_header"
                                  >
                                    Contractors Proposals : (
                                    {job.proposals.length})
                                  </Typography>
                                </TimelineContent>
                              </TimelineItem>
                              {job.proposals.map((proposal) => (
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
                                      Estimated time :&nbsp;
                                      {proposal.estimatedTime}
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
                                    <Button
                                      onClick={() =>
                                        window.location.assign(
                                          `/ViewContactorProfile/${proposal.contractor}`
                                        )
                                      }
                                      className="viewContractorProfileButton mt-2 mx-2"
                                      variant="contained"
                                    >
                                      View Profile
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        acceptProposal(
                                          job.id,
                                          proposal.contractor
                                        )
                                      }
                                      className="acceptProposalButton mt-2 mx-2"
                                      variant="contained"
                                    >
                                      Accept Proposal
                                    </Button>
                                  </TimelineContent>
                                </TimelineItem>
                              ))}
                            </>
                          );
                        } else if (job.status === "ongoing") {
                          return (
                            <Link to={`/onGoingJob/${job.id}`}>
                              <Button
                                className="acceptProposalButton mt-2"
                                variant="contained"
                              >
                                On Going
                              </Button>
                            </Link>
                          );
                        } else if (job.status === "done") {
                          return (
                            <div className="p-3 mb-2 bg-success text-white rounded">
                              <FontAwesomeIcon
                                className="fa-2xl"
                                icon={faCircleCheck}
                              />
                              <span className="mx-3 fs-5">
                                Job has been Done !
                              </span>
                            </div>
                          );
                        }
                      })()}
                    </Timeline>
                  </Grid>
                </section>
              );
            })
        )}
        <div className="d-flex justify-content-center row">
          <div className="d-flex justify-content-center align-items-center col-12">
            <div className="my-3">
              <BTN URL="/JobCreation" text="Post a new Job" type="defult" />
              <br />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
