/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./onGoingJob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BTN from "../../../components/button/btn";
import { useParams, Link } from "react-router-dom";


import { useEffect, useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { to } from './../../../../node_modules/moment/src/lib/moment/to';

const MySwal = withReactContent(Swal);

const HandleClick = () => {
    MySwal.fire({
        icon: "success",
        title: "Your Review has been sent",
        showConfirmButton: false,
        timer: 1500,
    }).then((result) => {
        window.location = "/";
    });
};

export default function JobRate() {
    const [formValues, setFormValues] = useState({
        jobRatingReview: "",
    });

    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "jobRatingReview":
                setFormValues({
                    ...formValues,
                    jobRatingReview: event.target.value,
                });
                break;

            default:
                break;
        }
    };

    const [rating, setRatingvalue] = useState(2);
    const params = useParams();

    // console.log(params);
    // const [jobDetails, setJobDetails] = useState([]);
    // console.log(Ratingvalue);

    // useEffect(() => {
    //     axiosInstace
    //         .patch(`job/${params.jobID}/endJob/${params.contractorID}`)
    //         .then((res) => {
    //             setJobDetails(res.data.data.job);
    //             console.log("result", res.data.data.job);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        axiosInstace
            .patch(`job/${params.jobID}/endJob/${params.contractorID}`, formValues.jobRatingReview, rating)
            .then((response) => {
                console.log(response.data);
                MySwal.fire(`Job Ended Successfully , Thanks For WorkingWith ArtDeco.com`).then(result => {
                    if (result.isConfirmed) {
                        window.location.replace('/');
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                MySwal.fire(`Can't End This Job , Please Try Again`);
            });
    };
    return (
        <div>
            <div className="container my-5">
                <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
                    <div className="row my-4 jobDetailsContent">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="">
                                    <h3> Rate the contractor</h3>
                                    <Stack spacing={1}>
                                        <Rating
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
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                {" "}
                                <h4 className="m-2"> Add A Review For The Contractor</h4>
                            </label>
                            <textarea
                                name="jobRatingReview"
                                placeholder="Enter a Description for your Job"
                                value={formValues.jobRatingReview}
                                onChange={(e) => handleFormChange(e)}
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
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
                            <Link to="" onClick={(e) => handleSubmitForm(e)}><BTN URL={``} text="End Job" type="defult" /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
