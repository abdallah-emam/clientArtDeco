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
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(50),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: '#ff8a00',
    height: "90px",
    width: "100px",
    paddingTop: "5px"
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: '#ff8a00',
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar color=" navlinks.link" elevation={2} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src="./logo.png" alt="" srcSet="" className={classes.logo} />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/ClientProfile" className={classes.link}>
              Client
            </Link>
            <Link to="/ContactorProfile" className={classes.link}>
              Contractor
            </Link>
            <Link to="/JobCreation" className={classes.link}>
              Job
            </Link>
            <Link to="/JobUpdate/622216d2cac0a0058f6d8dfa" className={classes.link}>
              UpdateJob
            </Link>
            <Link to="/JobDetails" className={classes.link}>
              Details
            </Link>
            <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link>
            {/* <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link>
            <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link>
            <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link>
            <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link>
            <Link to="/Choose" className={classes.link}>
              Login/Register
            </Link> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
