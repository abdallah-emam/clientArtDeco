import React from "react";

// import "./Profile.css";
import { Typography } from "@mui/material";

import Swal from "sweetalert2";

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
            <span>Address:</span> {props.contractorDetails.address}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
