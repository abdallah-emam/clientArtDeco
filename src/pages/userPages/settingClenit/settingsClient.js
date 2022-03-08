import * as React from "react";
import "./settingsPageStyle.css";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Contact from "./components/Contact";
import UpdatePassword from "./components/UpdatePassword";
import { axiosInstace } from "../../../network/axiosConfig";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileImage from "./components/ProfileImage";

export function ClientSetting(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

ClientSetting.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SettingsPageUser() {
  const [value, setValue] = React.useState(0);
  const [UserDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axiosInstace
      .get("users/getMe")
      .then((res) => {
        setUserDetails(res.data.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/clientLogin");
      });
  }, []);

  return (
    <>
      <Container className="top_60">
        <Row className="row">
          <Col className="col-lg-3 col-md-4">
            <div className="profile">
              <Box
                className="css-1n3h4wo"
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 224,
                }}
              >
                <Grid container className="section graybg p_50">
                  <Grid container spacing={3} justify={"space-between"}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        // textColor= '#fdc236'

                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: "#fdc236",
                            width: "4px",
                          },
                        }}
                      >
                        <Tab
                          label="User Information"
                          {...a11yProps(0)}
                          className="Tab"
                        />
                        <Tab
                          label="Change Password"
                          {...a11yProps(1)}
                          className="Tab"
                        />
                        <Tab label="Profile Image" {...a11yProps(2)} />
                      </Tabs>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Col>
          <div className="col-lg-9 col-md-8 tab-container">
            <div className="content">
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
                  <ClientSetting value={value} index={0}>
                    <Contact UserDetails={UserDetails} />
                  </ClientSetting>
                  <ClientSetting value={value} index={1}>
                    <UpdatePassword />
                  </ClientSetting>
                  <ClientSetting value={value} index={2}>
                    <ProfileImage UserDetails={UserDetails} />
                  </ClientSetting>
                </>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
