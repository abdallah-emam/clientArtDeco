import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(50),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "#ff8a00",
    height: "90px",
    width: "100px",
    paddingTop: "5px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: "#ff8a00",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const LogOUTContractor = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  const LogOUTClient = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  return (
    <AppBar color="navlinks.link" elevation={2} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/">
            <img src="https://i.ibb.co/GCnMNC0/logo.png" alt="Logo" className={classes.logo} />
          </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            {/* Protected Routes for Contractor(Company) */}
            {localStorage.getItem("company_token") ? (
              <>
                {/* Private */}
                <Link to="/ContactorProfile" className={classes.link}>
                  Profile
                </Link>
                {/* Private */}
                <Link to="/JobsPage" className={classes.link}>
                  Browse Jobs
                </Link>
                {/* Private */}
                <Link
                  to=""
                  onClick={(e) => LogOUTContractor(e)}
                  className={classes.link}
                >
                  Logout
                </Link>
              </>
            ) : localStorage.getItem("user_token") ? (
              <>
                {/* Private */}
                <Link to="/ClientProfile" className={classes.link}>
                  Profile
                </Link>
                {/* Private */}
                <Link to="/JobCreation" className={classes.link}>
                  Create a Job
                </Link>
                {/* Private */}
                <Link
                  to=""
                  onClick={(e) => LogOUTClient(e)}
                  className={classes.link}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {/* public */}
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                {/* public */}
                <Link to="/about" className={classes.link}>
                  About
                </Link>
                {/* public */}
                <Link to="/AboutUs" className={classes.link}>
                  How we work?
                </Link>
                {/* public */}
                <Link to="/Contact" className={classes.link}>
                  Contact Us
                </Link>
                {/* public */}
                <Link to="/Choose" className={classes.link}>
                  Login/Register
                </Link>
              </>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
