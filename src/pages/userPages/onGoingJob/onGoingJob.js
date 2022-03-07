/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./onGoingJob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import BTN from "../../../components/button/btn";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);



const HandleClick = () => {
    MySwal.fire({
        title: "End The Job!",
        text: "Are You Sure To End This Job?",
        type: "success",
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed)
            window.location = '/jobRate'
    })
};
export default function OnGoingJob() {

    const params = useParams();

    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        axiosInstace
            .get(`users/getMyOngoingJobs/${params.id}`)
            .then(res => {
                console.log(res);
                setJobDetails(res.data.data.currentJob);
                console.log("result", res.data.data.currentJob);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <div className="container my-5 border border-2">
                <h2 className="m-3"> Ongoing Job </h2>
                <hr />
                <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
                    <div className="row">
                        <h3 className="m-2">Job Title</h3>
                        <hr className="w-50" />
                        <h4>
                            {jobDetails.headLine}
                        </h4>
                    </div>
                    <div className="row mt-5">
                        <h4 className="m-2"> Accepted Proposal</h4>
                        <hr className='w-50' />
                        <h4>
                            {jobDetails.proposals[0].coverLetter}
                        </h4>
                        {/* <h4>{jobDetails.headLine} </h4> */}
                    </div>
                    <div className="row my-4 jobDetailsContent">
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <h5> Contractor Name</h5>
                                    <p>Doaa. A</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h5> Duration</h5>
                                    <p> Not Specified</p>
                                </div>
                                <div className="col-6 col-md-3 mt-2 mt-md-0">
                                    <h5> Budget</h5>
                                    {/* <p>{jobDetails.budget}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <ul className="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
                            <li>
                                <i className=" text-success-m2 text-110 mr-2 mt-1"></i>
                                <span>
                                    <span className="text-110">
                                        {/* {jobDetails.description} */}
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <div onClick={HandleClick} className="col-12 col-md-4 text-center my-3 my-md-0 jobDetailsBtn ">
                            <BTN URL={``} text="End Job" type="defult" />
                        </div>
                        <div className="row align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}