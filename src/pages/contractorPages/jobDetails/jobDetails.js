/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./jobDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function JobDetails() {
  return (
    <div>
      <br></br>
      <br></br>
      <div className="container">
        <h1> Job Details </h1>
        <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
          <div className="row align-items-center">
            <ul className="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
              <li>
                <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                <span>
                  &nbsp;{" "}
                  <span className="text-110">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </span>
                </span>
              </li>
              <li className="mt-25">
                <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                &nbsp;<span className="text-110">Molestie nunc non</span>
              </li>
            </ul>
            <div className="col-12 col-md-4 text-center ">
              <Link
                to={"/JobProposal/622216d2cac0a0058f6d8dfa"}
                className="f-n-hover btn btn-back-color btn-raised px-4 py-25 w-75 text-600 m-3"
              >
                <span>Send a Proposal</span>
              </Link>


            </div>
            <div className="row align-items-center">
              <ul className="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                  <span>
                    &nbsp;{" "}
                    <span className="text-110">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </span>
                  </span>
                </li>
              </ul>
              <div className="container p-4">
                <div className="row">
                  <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={""} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={''} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={''} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
                <div className="row align-items-center">
                  <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                    <li>
                      <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                      <span>
                        <span className="text-110">
                          {" "}
                          <h4 className="pt-3 text-170 text-600 btn-back-color-d1 letter-spacing ">
                            skills and Expertise{" "}
                          </h4>
                        </span>
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          {" "}
                          lorem
                        </span>{" "}
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          Warning
                        </span>
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          lorem
                        </span>
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          {" "}
                          lorem
                        </span>{" "}
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          Warning
                        </span>
                        <span className="badge rounded-pill btn-back-color text-dark m-2 text-white">
                          lorem
                        </span>
                      </span>
                    </li>

                    <li className="mt-25">
                      <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                      &nbsp;<span className="text-110">Molestie nunc non</span>
                    </li>
                  </ul>
                  <div className="col-3 col-md-4">
                    <h4 className="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                      Plan
                    </h4>
                    <div className="text-secondary-d1 text-120">
                      <span className="ml-n15 align-text-bottom">$</span>
                      <span className="text-180">50</span> / M
                    </div>
                  </div>

                  <div className="col-3 col-md-4 text-center">
                    <h4 className="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                      Client{" "}
                    </h4>
                    <h5> Ahmed A.</h5>
                    <p>Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
