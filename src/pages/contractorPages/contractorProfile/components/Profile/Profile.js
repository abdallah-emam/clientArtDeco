import React from "react";

// import "./Profile.css";
import { Button, Grid, Icon, Typography } from "@mui/material";
import resume from "../../utils/resume";
import MessageIcon from '@mui/icons-material/Message';
import CustomButton from "../Button/Button";

const Profile = (props) => {
  const { name, title, displayImage, birthday, email, socials } = resume;
  console.log("props",props.contractorDetails)

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{props.contractorDetails.name}</Typography>
        <Typography className="title">{title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={`${displayImage}`} alt="" />
      </figure>

      <ul className="profile_information">
        <li></li>
        <li>
          <p>
            <span>Name:</span> {props.contractorDetails.name}{" "}
          </p>
        </li>
        <li>
          <p>
            <span>Founded in:</span> {birthday}
          </p>
        </li>
        <li>
          <p>
            <span>Specialization:</span> {title}
          </p>
        </li>
        <li>
          <p>
            <span>Email:</span> {props.contractorDetails.email}
          </p>
        </li>
        {Object.keys(socials).map((key) => (
          <li>
            <p>
              <span>{key}: </span>{" "}
              <a href={socials[key].link} target="_blank">
                {socials[key].text}
              </a>
            </p>
          </li>
        ))}
      </ul>

      <Grid xs={12} className="button_container">
        <CustomButton text={"Send Message"} icon={<MessageIcon />} />
      </Grid>
    </div>
  );
};

export default Profile;
