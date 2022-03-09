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
import { useParams } from "react-router-dom";

const MySwal = withReactContent(Swal);

export default function ViewContactorProfile() {
  const [contractorDetails, setContractorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [jobsRating, setjobsRating] = useState([]);

  const params = useParams();

  useEffect(() => {
    axiosInstace
      .get(`contractors/${params.contractorID}`, {})
      .then((res) => {
        setContractorDetails(res.data.data);
        axiosInstace
          .get(`jobHistory/${res.data.data._id}`, {})
          .then((res) => {
            setjobsRating(res.data.data);
          })
          .catch((err) => {});

        setIsLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="top_60 container contractor-Profile-Container">
        {isLoading ? (
          <div className="w-100 position-relative">
            <Box
              className="position-absolute top-0 start-50 translate-middle-x"
              sx={{ display: "flex" }}
            >
              <CircularProgress className="m-5" />
            </Box>
          </div>
        ) : (
          <>
            <Row className="row">
              <Col className="col-xl-3 col-lg-4 col-md-4 col-sm-12 mb-5">
                <Profile contractorDetails={contractorDetails} />
              </Col>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 tab-container">
                <div className="content">
                  <Resume
                    contractorDetails={contractorDetails}
                    jobsRating={jobsRating}
                    staticData={resume}
                  />
                </div>
              </div>
            </Row>
          </>
        )}
      </div>
    </>
  );
}
