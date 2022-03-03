import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";
// import fileimg from '../../images/fileimg.jpg'
import { axiosInstace } from "../../../network/axiosConfig";
import BTN from "../../../components/button/btn";

export default function ClientProfile() {
  const [Job, setJobs] = useState([]);
  useEffect(() => {
    axiosInstace
      .get(`api/v1/users/621b9383236b5c2b1b76d6ec`)
      .then((res) => {
        setJobs(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [Job]);

  return (
    <div>
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-sm p-10 m-5">
              <h3> Your Dashboard </h3>
              <h6> Doaa Eldesoki</h6>
            </div>
            <div class="col-sm"></div>
            <div class="d-flex justify-content-center align-items-center col-12 col-md-4">
              <div id="BTN">
                <BTN URL="/" text="Post a Job" type="defult" />
              </div>
            </div>
          </div>
        </div>

        {/* secondsection */}

        <div
          class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm"
          style={{ width: "50%" }}
        >
          <div class="row align-items-center">
            <div class=" mb-0 col-12 col-md-8 text-dark-l1 text-90  my-4 my-md-0">
              <div class="row">
                <div class="col-sm-8 text-left m-2">
                  {" "}
                  <h3> Your Postings</h3>
                </div>
              </div>
            </div>
            <hr />
            <div class="container joblist">
              <div class="row">
                <div class="col-sm-6 align-self-start">
                  <h6 style={{ fontWeight: "bolder" }}>Landing Page</h6>
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
                      24
                    </span>
                  </p>
                  <p> Proposals</p>
                </div>
                <div class="col-sm-2">
                  <p>0</p>
                  Messaged
                </div>
                <div class="col-sm-2">
                  <p>0</p>
                  <p> Hired</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-6 align-self-start">
                  <h6 style={{ fontWeight: "bolder" }}>Landing Page</h6>
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
                      24
                    </span>
                  </p>
                  <p> Proposals</p>
                </div>
                <div class="col-sm-2">
                  <p>0</p>
                  Messaged
                </div>
                <div class="col-sm-2">
                  <p>0</p>
                  <p> Hired</p>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center align-items-center col-12 col-md-4">
                  <div>
                    <BTN URL="/" text="Post a Job" type="defult" />
                  </div>
                </div>
              </div>
            </div>

            {/* if no posts  */}

            {/*
            <div class="d-flex justify-content-center">
              <img src={fileimg} />
            </div>
            <div class="d-flex justify-content-center">
              <p> No Posts Yet</p>
            </div>
            <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-center align-items-center col-12 col-md-4">
              <div >
                <BTN URL="/" text="Post a Job" type="defult" />
              </div>
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <section className="clientProfile">
  //       <div className="container">
  //         <div className="cleintProfileEditWidth">
  //           <div className="row profile-tile">
  //             <div className="col-sm-12 col-md-6">
  //               <h4>Your Dashboard</h4>
  //               <p className="">Doaa Eldosoky</p>
  //             </div>
  //             <div className="d-none d-md-block col-md-6 text-end">
  //               <BTN URL="/" text="Post a Job" type="defult" />
  //             </div>
  //           </div>
  //           <div className="row ">
  //             <div className="clientJobs col-12 col-lg-8">
  //               <div className="row jobTitle">
  //                 <h4>Your Postings</h4>
  //               </div>
  //               <div className="row jobslist">
  //                 <div className="jobitem col-12 col-lg-8">
  //                   <h5>Landing page js</h5>
  //                   <p>Puplic</p>
  //                   <p>Posted 2 days ago by you</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}
