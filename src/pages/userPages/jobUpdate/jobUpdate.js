import React, { useState, useEffect } from "react";
import "./jobUpdate.css";
import PaidIcon from "@mui/icons-material/Paid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { axiosInstace } from "../../../network/axiosConfig";
import { useParams } from "react-router-dom";
import ClientLogin from "./../clientLogin/login";

const MySwal = withReactContent(Swal);

export default function JobUpdate() {
  // const navigate = useNavigate();
  const [Governorates] = useState([
    "Cairo",
    "Giza",
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Ismailia",
    "Kafr El Sheikh",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ]);
  const [Times] = useState([
    "one month",
    "two months",
    "three months",
    "more than three months",
  ]);
  const params = useParams();

  const [job, setJob] = useState([]);

  const [formValues, setFormValues] = useState({
    headLine: "",
    description: "",
    budget: "",
    estimatedTime: "one month",
    location: "Cairo",
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "headLine":
        setFormValues({
          ...formValues,
          headLine: event.target.value,
        });
        break;

      case "description":
        setFormValues({
          ...formValues,
          description: event.target.value,
        });
        break;

      case "budget":
        setFormValues({
          ...formValues,
          budget: event.target.value,
        });
        break;

      case "estimatedTime":
        setFormValues({
          ...formValues,
          estimatedTime: event.target.value,
        });
        break;

      case "location":
        setFormValues({
          ...formValues,
          location: event.target.value,
        });
        break;

      default:
        break;
    }
  };

  //Get Specific Job
  const GetSpecificJob = () => {
    axiosInstace
      .get(`job/${params.id}`)
      .then((response) => {
        const myJob = response.data.data.job;
        setFormValues(myJob);
        setJob(myJob);
      })
      .catch(() => {});
  };
  useEffect(() => GetSpecificJob(), []);

  // Update With BAckEND
  const handleSubmitForm = (e) => {
    e.preventDefault();

    axiosInstace
      .patch(`job/${params.id}`, formValues)
      .then((response) => {
        MySwal.fire(`Job Updated Successfully`).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/ClientProfile");
          }
        });
      })
      .catch((err) => {
        MySwal.fire(`Can't Update This Job , Enter Valid Date`);
      });
  };

  return localStorage.getItem("user_token") ? (
    <>
      <br />
      <br />
      <div className="MainDiv container">
        <div className="FirstWrapper">
          <div className="topLeft">
            <span className="Sign-Page">Job Update</span>
          </div>
          <div className="topRight">
            <button
              onClick={(e) => handleSubmitForm(e)}
              type="button"
              className="btn"
            >
              Update Job
            </button>
          </div>
        </div>
        <hr />
        <div className="SecondWrapper">
          <div className="topLeft">
            <div className="form-group m-2">
              <label>HeadLine</label>
              <input
                type="text"
                maxLength={100}
                className="form-control"
                name="headLine"
                value={formValues.headLine}
                placeholder={job.headLine}
                onChange={(e) => handleFormChange(e)}
              ></input>
            </div>
            <small>
              Your Headline Must Be Descriptive to help the companies to
              understand what you really want
            </small>
          </div>
        </div>
        <hr />
        <div className="ThirdWrapper">
          <div className="topLeft">
            <h5>Describe Your Job</h5>
            <h6>
              This is how companies will figure out what you need and why they
              should make an offer to you.
            </h6>
            <div className="form-group m-2">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                name="description"
                placeholder={job.description}
                value={formValues.description}
                onChange={(e) => handleFormChange(e)}
              ></textarea>
              <br />
              <h5>Location</h5>
              <select
                name="location"
                value={formValues.location}
                onChange={(e) => handleFormChange(e)}
                placeholder={job.location}
                class="form-select"
                aria-label="Default select example"
              >
                {Governorates.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="ForthWrapper">
          <div className="topLeft">
            <h5>Details</h5>
            <div className="form-group">
              <label>Budget</label>
              <div className="input-group mb-3 ">
                <span className="input-group-text">
                  <PaidIcon />
                </span>
                <input
                  type="number"
                  min={0}
                  name="budget"
                  value={formValues.budget}
                  onChange={(e) => handleFormChange(e)}
                  placeholder={job.budget}
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label>Estimated Time</label>
              <select
                name="estimatedTime"
                value={formValues.estimatedTime}
                placeholder={job.estimatedTime}
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
                Enter The Details Of Your Work To be Updated to make It Clear To
                the Companies to know everything you need to finish your work in
                right way.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  ) : (
    <ClientLogin />
  );
}
