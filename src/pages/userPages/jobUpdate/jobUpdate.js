import React, { useState, useEffect } from "react";
import "./jobUpdate.css";
import PaidIcon from "@mui/icons-material/Paid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { axiosInstace } from "../../../network/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const MySwal = withReactContent(Swal);

export default function JobUpdate() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params.id);

  const [job, setJob] = useState([]);

  const [formValues, setFormValues] = useState({
    headLine: "",
    description: "",
    budget: "",
    estimatedTime: "",
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

      default:
        break;
    }
  };

  //Get Specific Job 
  const GetSpecificJob = () => {
    axiosInstace
      .get(`job/${params.id}`)
      .then((response) => {
        // console.log(response.data.data.job);
        const myJob = response.data.data.job;
        setJob(myJob);
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire(`Can't Get This Job`);
      });
  };
  useEffect(() => GetSpecificJob(), [])


  // Update With BAckEND 
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
    axiosInstace
      .patch(`job/${params.id}`, formValues)
      .then((response) => {
        console.log(response.data);
        MySwal.fire(`Job Updateed Successfully`);
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire(`Can't Update This Job`);
      });
  };

  return (
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
              <input
                className="form-control file-Attach"
                type="file"
                id="formFileMultiple"
                multiple
              />
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
              <label>Estimated Date</label>
              <div className="input-group mb-3">
                <input
                  type="date"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  name="estimatedTime"
                  placeholder={job.estimatedTime}
                  value={formValues.estimatedTime}
                  onChange={(e) => handleFormChange(e)}
                ></input>
              </div>
            </div>
          </div>
          <div className="topRight">
            <div className="Special container">
              <h6>
                Enter The Details Of Your Work To be Updated to make It Clear To the Companies
                to know everything you need to finish your work in right way.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
