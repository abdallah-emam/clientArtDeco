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
    marginLeft: theme.spacing(80),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "white",
    height: "90px",
    width: "120px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(4),
    "&:hover": {
      color: "grey",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar color="primary" elevation={2} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src="./logo.png" alt="" srcset="" className={classes.logo} />
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/ContractorLogin" className={classes.link}>
              About
            </Link>
            <Link to="/Blog" className={classes.link}>
              Ads
            </Link>
            <Link to="/Userprofile" className={classes.link}>
              Client
            </Link>
            <Link to="/ClientFeed" className={classes.link}>
              Feed
            </Link>
            <Link to="/ContactorProfile" className={classes.link}>
              Contractor
            </Link>
            <Link to="/Choose" className={classes.link}>
              Account
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
