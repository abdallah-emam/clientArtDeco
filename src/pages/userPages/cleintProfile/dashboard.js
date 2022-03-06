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
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function ClientDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [UserDetails, setUserDetails] = useState([]);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstace
      .get("users/getMe")
      .then(res => {
        setUserDetails(res.data.data.data);
        setJobs(res.data.data.data.jobs);
        console.log("result", res.data.data.data);
        console.log("jobs", res.data.data.data.jobs);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
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
    }).then(result => {
      if (result.isConfirmed) {
        axiosInstace
          .delete(`job/${id}`)
          .then(res => {
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
            // window.location.replace("/clientLogin");
          });
        Swal.fire(
          "Deleted!",
          "Your Requested Job has been deleted.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <div className='container my-5 dashboardContainer'>
        <div className='container my-3'>
          <div className='row'>
            <div className='col-6 '>
              <Grid item className='section_title top_30'>
                <span></span>
                <h2>Your Dashboard</h2>
              </Grid>
            </div>
          </div>
        </div>

        {/* secondsection */}
        {isLoading ? "loading..." : null}

        {Jobs?.length == 0 ? (
          <div>
            <div className='container'>
              <div className='d-flex justify-content-center'>
                <img src={fileimg} />
              </div>
              <div className='d-flex justify-content-center'>
                <p> You don't have a Posts Yet</p>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-center align-items-center col-12 col-md-4'>
                  {/* <div >
                  <BTN URL="/" text="Post a Job" type="defult" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          Jobs?.length > 0 &&
          Jobs.map(job => {
            return (
              <section className='jobsSection border p-sm-3 p-xs-5 col-12'>
                <div className='d-flex justify-content-between'>
                  <h5 className='d-inline-block  w-auto'>{job.headLine}</h5>
                </div>
                <div className='jobDeleteIcon d-inline-block w-auto float-end'>
                  <FontAwesomeIcon
                    onClick={() => deleteJob(job.id)}
                    className='fa-xl icon mr-1 rounded-circle p-2 mx-md-2'
                    icon={faTrashCan}
                  />
                </div>
                <div className='jobInfoLine my-2'>
                  <span className='border-end border-warning border-3 px-3'>
                    Budget:&nbsp;{job.budget}
                  </span>
                  <span className='border-end border-warning border-3 px-3'>
                    {new Date(Date.parse(job.createdAt)).toDateString()}
                  </span>
                  <span className='border-end border-warning border-3 px-3'>
                    Estimited Time:&nbsp;{job.estimitedTime}
                    {}
                  </span>
                  <span className='px-3'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    &nbsp;{job.location}
                  </span>
                </div>
                <div className='jobDescription my-3'>
                  <p>{job.description}</p>
                </div>
                <div className='Proposals my-3'>
                  <p>
                    Proposals :&nbsp;
                    <span className='jobKeyWord rounded-pill p-1 me-2'>
                      {job.totalProposal}
                    </span>
                  </p>
                </div>
              </section>
            );
          })
        )}
        <div className='d-flex justify-content-center row'>
          <div className='d-flex justify-content-center align-items-center col-12'>
            <div className='my-3'>
              <BTN URL='/JobCreation' text='Post a new Job' type='defult' />
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
