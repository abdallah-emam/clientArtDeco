import React from "react";
// import Footer from "../../";
import "./contractorProfile.css";
import Profile from "./components/Profile/Profile";
import resume from "./utils/resume";
import { Col, Row } from "react-bootstrap";
import Resume from "./pages/Resume";
import { axiosInstace } from "../../../network/axiosConfig";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function ContactorProfile() {
  const [contractorDetails, setContractorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inProgressJobs, setinProgressJobs] = useState([]);

  useEffect(() => {
    axiosInstace
    .get("contractors/MyAllJobs", {})
    .then(res => {
      setinProgressJobs(res.data.data.jobs);
      console.log("inProgressJobs", res.data.data.jobs);
    })
    .catch(err => {
    });

    axiosInstace
      .get("contractors/getMe", {})
      .then(res => {
        setContractorDetails(res.data.data.data);
        console.log("res", res.data.data.data);
        console.log("contractorDetails", contractorDetails);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        window.location.replace("/contractorLogin");
      });

  }, []);

  return (
    <>
      <div className='top_60 container contractor-Profile-Container'>
        {isLoading ? (
          <div className='w-100 position-relative'>
            <Box
              className='position-absolute top-0 start-50 translate-middle-x'
              sx={{ display: "flex" }}
            >
              <CircularProgress className='m-5' />
            </Box>
          </div>
        ) : (
          <>
            <Row className='row'>
              <Col className='col-xl-3 col-lg-4 col-md-4 col-sm-12 mb-5'>
                <Profile contractorDetails={contractorDetails} />
              </Col>
              <div className='col-xl-9 col-lg-8 col-md-8 col-sm-12 tab-container'>
                <div className='content'>
                  <Resume contractorDetails={contractorDetails} inProgressJobs={inProgressJobs} {...resume} />
                </div>
              </div>
            </Row>
          </>
        )}
      </div>
    </>
  );
}
