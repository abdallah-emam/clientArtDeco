/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import Footer from "../Footer/Footer";
import "./jobReview.css";
import PaidIcon from "@mui/icons-material/Paid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { axiosInstace } from "../../../network/axiosConfig";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

export default function JobCreation() {
  const navigate = useNavigate();
  const [Governorates, setGovernorates] = useState([
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
  const [Times, setTimes] = useState([
    "one month",
    "two months",
    "three months",
    "more than three months",
  ]);
  const [formValues, setFormValues] = useState({
    headLine: "",
    description: "",
    budget: "",
    estimatedTime: "",
    location: "",
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
  const handleSubmitForm = (e) => {
    e.preventDefault();

    axiosInstace
      .post("job", formValues)
      .then((response) => {
        console.log(response.data);
        MySwal.fire(`Job Added Successfully`).then(result => {
          if (result.isConfirmed) {
            window.location.replace('/ClientProfile');
          }
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire(`Can't Add This Job , Enter All The Date`);
      });
  };

  return (
    <>
      <br />
      <br />
      <div className="MainDiv container">
        <div className="FirstWrapper">
          <div className="topLeft">
            <span className="Sign-Page">Create a Job</span>
          </div>
          <div className="topRight">
            <button
              onClick={(e) => handleSubmitForm(e)}
              type="button"
              className="btn"
            >
              SUbmit Job
            </button>
          </div>
        </div>
        <hr />
        <div className="SecondWrapper">
          <div className="topLeft">
            <div className="form-group">
              <label>HeadLine</label>
              <input
                required
                maxLength={100}
                type="text"
                className="form-control"
                name="headLine"
                value={formValues.headLine}
                onChange={(e) => handleFormChange(e)}
                placeholder="Enter a Descriptive HeadLine"
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
            <div className="form-group">
              <textarea
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                name="description"
                placeholder="Enter a Description for your Job"
                value={formValues.description}
                onChange={(e) => handleFormChange(e)}
              ></textarea>
            </div>
            <br />
            <h5>Location</h5>
            <select
              name="location"
              value={formValues.location}
              onChange={(e) => handleFormChange(e)}
              class="form-select"
              aria-label="Default select example"
            >
              {Governorates.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <hr />
        <div className="ForthWrapper">
          <div className="topLeft">
            <h5>Details</h5>
            <div className="form-group">
              <label>Budget</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <PaidIcon />
                </span>
                <input
                  required
                  type="number"
                  min={0}
                  name="budget"
                  value={formValues.budget}
                  onChange={(e) => handleFormChange(e)}
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <label>Estimated Time</label>
              <select
                required
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
