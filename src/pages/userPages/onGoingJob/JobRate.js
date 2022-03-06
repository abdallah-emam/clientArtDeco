/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./onGoingJob.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BTN from "../../../components/button/btn";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const MySwal = withReactContent(Swal);



const HandleClick = () => {
    MySwal.fire({
        icon: 'success',
        title: 'Your Review has been sent',
        showConfirmButton: false,
        timer: 1500
    }).then((result) =>{
        window.location='/'
    })
};
export default function JobRate() {

    const params = useParams()
    const [jobDetails, setJobDetails] = useState([]);
    useEffect(() => {
        axiosInstace
            .get(`job/contractor/${params.id}`)
            .then(res => {
                setJobDetails(res.data.data.job);
                console.log("result", res.data.data.job);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>

            <div className="container my-5">
                <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"> <h4 className="m-2"> Add A Review For The Contractor</h4>
                            </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>


                    </div>

                    <div className="row my-4 jobDetailsContent justify-content-center">
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <h5> Contractor name</h5>
                                    <p>Doaa. A</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h5> Duration</h5>
                                    <p> Not Specified</p>
                                </div>
                                <div className="col-6 col-md-3 mt-2 mt-md-0">
                                    <h5> Rate the contractor</h5>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </Stack>
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
                                        {jobDetails.description}

                                    </span>
                                </span>
                            </li>
                        </ul>
                        <div onClick={HandleClick} className="col-12 col-md-4 text-center my-2 my-md-0 jobDetailsBtn ">
                            <BTN URL={``} text="Submit Review" type="defult" />
                        </div>
                        <div className="row align-items-center">



                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
