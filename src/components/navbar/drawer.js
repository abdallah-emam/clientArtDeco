import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useNavigate, Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    width: "125 px",
    "&:hover": {
      color: "#ff8a00",
      borderBottom: "1px solid #ff8a00",
    },
  },
  icon: {
    color: "#ff8a00",
  },
  style: {
    color: "#ff8a00",
    "&:hover": {
      color: "#ff8a00",
      borderBottom: "1px solid #ff8a00",
    },
  },
}));

function DrawerComponent() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
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
    <>
      <Drawer
        className="style"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {/* Protected Routes for Contractor(Company) */}
        {localStorage.getItem("company_token") ? (
          <>
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/ContactorProfile" className={classes.link}>
                  Profile
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/JobsPage" className={classes.link}>
                  Browse Jobs
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link
                  to=""
                  onClick={(e) => LogOUTContractor(e)}
                  className={classes.link}
                >
                  Logout
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ) : // Protected Routes for Client(User)
        localStorage.getItem("user_token") ? (
          <>
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/ClientProfile" className={classes.link}>
                  Profile
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/JobCreation" className={classes.link}>
                  Create a Job
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            {/* Private */}
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link
                  to=""
                  onClick={(e) => LogOUTClient(e)}
                  className={classes.link}
                >
                  Logout
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ) : (
          <>
            <List>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  {/* public */}
                  <Link to="/" className={classes.link}>
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  {/* public */}
                  <Link to="/about" className={classes.link}>
                    About
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  {/* public */}
                  <Link to="/AboutUs" className={classes.link}>
                    How we work?
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  {/* public */}
                  <Link to="/Contact" className={classes.link}>
                    Contact Us
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  {/* public */}
                  <Link to="/Choose" className={classes.link}>
                    Login/Register
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
            </List>
          </>
        )}
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
