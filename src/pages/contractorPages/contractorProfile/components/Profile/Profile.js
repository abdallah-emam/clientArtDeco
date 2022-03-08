import React from "react";

import { Grid, Typography } from "@mui/material";
import Swal from "sweetalert2";
import CustomButton from "./../../../../userPages/settingClenit/components/Button";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Profile = (props) => {
  const openImg = (event) => {
    Swal.fire({
      html: `<img src="${event.target.currentSrc}" style="width:100%" crossOrigin="anonymous" alt='image' /> `,
      showCloseButton: true,
      width: 600,
    });
  };

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{props.contractorDetails.name}</Typography>
      </div>

      <figure className="profile_image">
        <img
          onClick={(e) => openImg(e)}
          src={props.contractorDetails.photo}
          crossOrigin="anonymous"
          alt=""
        />
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
            <span>Email:</span> {props.contractorDetails.email}
          </p>
        </li>
        <li>
          <p>
            <span>Phone:</span> {props.contractorDetails.phone}
          </p>
        </li>
        <li>
          <p>
            <span>Address:</span> {props.contractorDetails.address}
          </p>
        </li>
      </ul>
      <Grid item xs={12} className="button_container">
        <Link to={`/contractorSettings`}>
          <CustomButton text={"Settings"} icon={<EditIcon />} />
        </Link>
      </Grid>
    </div>
  );
};

export default Profile;
