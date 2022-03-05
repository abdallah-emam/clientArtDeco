/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./jobDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import BTN from "../../../components/button/btn";

export default function JobDetails() {
  return (
    <div>
     
      <div className="container my-5">
        <h2 className="mx-2"> Job Details </h2>
       
        <div className=" border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 p-3 shadow-sm">
        <div className="row my-4">
            <div className='col-12 col-md-6'>
              <div className="row"> 
              <div className="col-4">
                <h5> Client</h5>
                <p>Doaa. A</p>
              </div>
              <div className="col-4">
                <h5> Duration</h5>
                <p> 20</p>
              </div>
              <div className="col-4">
                <h5> Budget</h5>
                <p>50</p>
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </span>
                </span>
              </li>
            </ul>
            <div className="col-12 col-md-4 text-center my-3 my-md-0 ">
              <BTN URL="/JobProposal/622216d2cac0a0058f6d8dfa" text="Send a Proposal" type="defult" />
            </div>
            <div className="row align-items-center">
                 
            </div>
          </div>
         
        </div>

      </div>
    </div>
  );
}
