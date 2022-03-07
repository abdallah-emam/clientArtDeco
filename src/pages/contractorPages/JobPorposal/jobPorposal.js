import React, { useState } from "react";
// import Footer from "../Footer/Footer";
import "./jobPorposal.css";
import PaidIcon from "@mui/icons-material/Paid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { axiosInstace } from "../../../network/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const MySwal = withReactContent(Swal);

export default function JobProposal() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params.id);

  const [Times, setTimes] = useState([
    "one month",
    "two months",
    "three months",
    "more than three months",
  ]);
  const [formValues, setFormValues] = useState({
    coverLetter: "",
    financialOffer: "",
    estimatedTime: "one month",
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "coverLetter":
        setFormValues({
          ...formValues,
          coverLetter: event.target.value,
        });
        break;

      case "financialOffer":
        setFormValues({
          ...formValues,
          financialOffer: event.target.value,
        });
        break;

      case "estimatedTime":
        setFormValues({
          ...formValues,
          estimatedTime: event.target.value,
        });
        break;

      default:
        break;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    axiosInstace
      .post(`job/${params.id}/proposal`, formValues)
      .then((response) => {
        console.log(formValues);
        console.log(response.data);
        MySwal.fire(`Proposal Sent To the Job Owner , Thanks For Working With Us`).then(result => {
          if (result.isConfirmed) {
            window.location.replace(`/JobDetails/${params.id}`);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire(` Can't Send This Proposal, Please Check again before add Proposal`);
      });
  };

  return (
    <>
      <br />
      <br />
      <div className="Proposal MainDiv container">
        <div className="Proposal FirstWrapper">
          <div className="Proposal topLeft">
            <span className="Proposal Sign-Page">Proposal</span>
          </div>
          <div className="Proposal topRight">
            <button
              onClick={(e) => handleSubmitForm(e)}
              type="button"
              class="Proposal btn"
            >
              Send Proposal
            </button>
          </div>
        </div>
        <hr />
        <div className="Proposal ThirdWrapper">
          <div className="Proposal topLeft">
            <h5>Cover Letter</h5>
            <h6>
              This is how companies will send to the user an offer that show what
              they can do according to the data they have from the details of user.
            </h6>
            <div class="form-group">
              <textarea
                placeholder="Enter Your Cover Letter"
                name="coverLetter"
                value={formValues.coverLetter}
                onChange={(e) => handleFormChange(e)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
              <br />

            </div>
          </div>
        </div>
        <hr />
        <div className="Proposal ForthWrapper">
          <div className="topLeft">
            <h5>Details</h5>
            <div class="form-group">
              <label>Budget</label>
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <PaidIcon />
                </span>
                <input
                  name="financialOffer"
                  value={formValues.financialOffer}
                  onChange={(e) => handleFormChange(e)}
                  type="number"
                  min={0}
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label>Estimated Time</label>
              <select
                name="estimatedTime"
                value={formValues.estimatedTime}
                onChange={(e) => handleFormChange(e)}
                class="form-select"
              >
                {Times.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="topRight">
            <div className="Special container">
              <h6>
                Enter The Details Of Your Work To make It Clear To the Companies
                to know everything you need to finish your work in right way.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
}
