import React from "react";
import "./clientProfile.css";
import { useState, useEffect } from "react";
import { axiosInstace } from "../../../network/axiosConfig";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";
import ClientData from "./clientData";
import { Grid } from "@mui/material";
import ClientDashboard from "./dashboard";

export default function ClientProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [UserDetails, setUserDetails] = useState([]);
  const [Jobs, setJobs] = useState(null);

  useEffect(() => {
    axiosInstace
      .get("users/getMe")
      .then((res) => {
        setUserDetails(res.data.data.user);
        setJobs(res.data.data.user.jobs);
        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/clientLogin");
      });
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
                <ClientData UserDetails={UserDetails} />
              </Col>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 tab-container">
                <div className="content border-2">
                  <ClientDashboard />
                </div>
              </div>
            </Row>
            <Grid item xs={12} className="p_30 fixed-bottom opacity-75"></Grid>
          </>
        )}
      </div>
    </>
  );
}
