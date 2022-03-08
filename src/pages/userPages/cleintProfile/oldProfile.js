import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";
import fileimg from "../../../images/fileimg.jpg";
import { axiosInstace } from "../../../network/axiosConfig";
import BTN from "../../../components/button/btn";

export default function ClientProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [UserDetails, setUserDetails] = useState([]);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstace
      .get("users/getMe")
      .then((res) => {
        setUserDetails(res.data.data.data);
        setJobs(res.data.data.data.jobs);

        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/clientLogin");
      });
  }, []);

  return (
    <div>
      <div class="container my-5">
        <div class="container my-3">
          <div class="row">
            <div class="col-6 ">
              <h3 className="mb-2"> Your Dashboard </h3>
              <h6>{UserDetails.name}</h6>
            </div>
            <div class="col-6">
              <div className="my-3 my-md-0 text-end">
                <BTN URL="/ClientSetting" text="Settings" type="defult" />
              </div>
            </div>
          </div>
        </div>

        {/* secondsection */}
        <div class="container">
          <div class=" w-100 my-2 py-3 shadow-sm" style={{ width: "50%" }}>
            <div class="row align-items-center">
              <div class=" mb-0 col-12 col-md-8 text-dark-l1 text-90  my-4 my-md-0">
                <div class="row">
                  <div class="col-sm-8 text-left m-2">
                    <h3> Your Postings</h3>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />

        {isLoading ? "loading..." : null}

        {Jobs?.length === 0 ? (
          <div>
            <div class="container">
              <div class="d-flex justify-content-center">
                <img alt="fileImage" src={fileimg} />
              </div>
              <div class="d-flex justify-content-center">
                <p> You don't have a Posts Yet</p>
              </div>
              <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center align-items-center col-12 col-md-4"></div>
              </div>
            </div>
          </div>
        ) : (
          Jobs?.length > 0 &&
          Jobs.map((job) => {
            return (
              <div class="container">
                <div class="row">
                  <div class="col-sm-6 align-self-start">
                    <h6 style={{ fontWeight: "bolder" }}> {job.description}</h6>
                    <p>Public-Hourly</p>
                    <p style={{ fontWeight: "lighter" }}>
                      {" "}
                      posted 18 Hours ago by You
                    </p>
                  </div>
                  <div class="col-sm-2">
                    <p>
                      {" "}
                      <span style={{ color: "#fdc236", fontWeight: "bolder" }}>
                        {job.totalProposal}
                      </span>
                    </p>
                    <p> Proposals</p>
                  </div>
                  <div class="col-sm-2">
                    <p>{job.status}</p>
                    <p> Status</p>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        )}
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center col-12 col-md-4">
            <div className="my-3">
              <BTN URL="/JobCreation" text="Post a Job" type="defult" />
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
