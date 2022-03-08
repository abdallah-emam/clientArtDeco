/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./onGoingJob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const MySwal = withReactContent(Swal);

export default function JobRate() {
  const [formValues, setFormValues] = useState({
    jobRatingReview: "",
  });
  const [formValuesErrors, setFormValuesErrors] = useState({
    jobRatingReviewErr: null,
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "jobRatingReview":
        setFormValues({
          ...formValues,
          jobRatingReview: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          jobRatingReviewErr:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;

      default:
        break;
    }
  };

  const [rating, setRatingvalue] = useState(3);
  const params = useParams();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!formValuesErrors.jobRatingReviewErr) {
      axiosInstace
        .patch(`job/${params.jobID}/endJob/${params.contractorID}`, {
          jobRatingReview: formValues.jobRatingReview,
          rating,
        })
        .then((response) => {
          MySwal.fire(
            `Job Ended Successfully , Thanks For Working With ArtDeco.com`
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/");
            }
          });
        })
        .catch((err) => {
          MySwal.fire(`Can't End This Job , Please Try Again`);
        });
    }
  };

  return (
    <div>
      <div className="container my-5 w-75">
        <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
          <div className="row my-4 jobDetailsContent">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="">
                  <h4> Rate the contractor</h4>
                  <Stack spacing={1}>
                    <Rating
                      required
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                      value={rating}
                      onChange={(event, newValue) => {
                        setRatingvalue(newValue);
                      }}
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="form-group ReviewArea">
              <label htmlFor="exampleFormControlTextarea1">
                {" "}
                <h5 className="m-2"> Add A Review For The Contractor</h5>
              </label>
              <textarea
                required
                name="jobRatingReview"
                placeholder="Enter a Review for this Contractor"
                value={formValues.jobRatingReview}
                onChange={(e) => handleFormChange(e)}
                class="form-control RatingArea w-75"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            {formValuesErrors.jobRatingReviewErr && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.jobRatingReviewErr}
              </div>
            )}
          </div>
          <div className="row align-items-center">
            <ul className="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
              <li>
                <i className=" text-success-m2 text-110 mr-2 mt-1"></i>
                <span>
                  {/* <span className="text-110">{jobDetails.description}</span> */}
                </span>
              </li>
            </ul>
            <div className="col-12 col-md-4 text-center my-2 my-md-0 jobDetailsBtn ">
              <div className="topRight">
                <button
                  onClick={(e) => handleSubmitForm(e)}
                  type="button"
                  className="btn"
                  disabled={
                    formValuesErrors.jobRatingReviewErr ||
                    formValues.jobRatingReview === ""
                  }
                >
                  End Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
