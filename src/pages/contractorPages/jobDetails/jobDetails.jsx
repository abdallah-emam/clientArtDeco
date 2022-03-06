/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./jobDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import BTN from "../../../components/button/btn";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { axiosInstace } from "../../../network/axiosConfig";

export default function JobDetails() {
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
        <h2 className="mx-2"> Job Details </h2>
        <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
          <div className="row">
            <h4>{jobDetails.headLine} </h4>

          </div>
        <div className="row my-4 jobDetailsContent">
            <div className='col-12 col-md-6'>
              <div className="row"> 
              <div className="col-6 col-md-3">
                <h5> Client</h5>
                <p>Doaa. A</p>
              </div>
              <div className="col-6 col-md-3">
                <h5> Duration</h5>
                <p> Not Specified</p>
              </div>
              <div className="col-6 col-md-3 mt-2 mt-md-0">
                <h5> Budget</h5>
                <p>{jobDetails.budget}</p>
              </div>
              <div className="col-6 col-md-3 mt-2 mt-md-0">
                <h5> Proposals</h5>
                <p>{jobDetails.totalProposal}</p>
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
            <div className="col-12 col-md-4 text-center my-3 my-md-0 jobDetailsBtn ">
              <BTN URL={`/JobProposal/${jobDetails.id}`} text="Send a Proposal" type="defult" />
            </div>
            <div className="row align-items-center">
                 
            </div>
          </div>
         
        </div>

      </div>
    </div>
  );
}
