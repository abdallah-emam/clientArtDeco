import React from "react";
import "./jobDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JobDetails() {
  return (
    <div>
      <br></br>
      <br></br>
      <div class="container">
        <h1> Job Details </h1>
        <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
          <div class="row align-items-center">
            <ul class="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
              <li>
                <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                <span>
                  &nbsp;{" "}
                  <span class="text-110">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </span>
                </span>
              </li>
              <li class="mt-25">
                <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                &nbsp;<span class="text-110">Molestie nunc non</span>
              </li>
            </ul>
            <div class="col-12 col-md-4 text-center">
              <a
                href="#"
                class="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600 m-3"
              >
                Send a Proposal
              </a>

              <a
                href="#"
                class="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600"
              >
                {" "}
                Save the job
              </a>
            </div>
            <div class="row align-items-center">
              <ul class="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                  <span>
                    &nbsp;{" "}
                    <span class="text-110">
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
              <div class="container p-4">
                <div class="row">
                  <div class="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src={""} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src={''} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>{" "}
                  </div>
                  <div class="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src={''} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
                <div class="row align-items-center">
                  <ul class="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                    <li>
                      <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                      <span>
                        <span class="text-110">
                          {" "}
                          <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                            skills and Expertise{" "}
                          </h4>
                        </span>
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          {" "}
                          lorem
                        </span>{" "}
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          Warning
                        </span>
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          lorem
                        </span>
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          {" "}
                          lorem
                        </span>{" "}
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          Warning
                        </span>
                        <span class="badge rounded-pill bg-warning text-dark m-2">
                          lorem
                        </span>
                      </span>
                    </li>

                    <li class="mt-25">
                      <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
                      &nbsp;<span class="text-110">Molestie nunc non</span>
                    </li>
                  </ul>
                  <div class="col-3 col-md-4">
                    <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                      Plan
                    </h4>
                    <div class="text-secondary-d1 text-120">
                      <span class="ml-n15 align-text-bottom">$</span>
                      <span class="text-180">50</span> / M
                    </div>
                  </div>

                  <div class="col-3 col-md-4 text-center">
                    <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
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
