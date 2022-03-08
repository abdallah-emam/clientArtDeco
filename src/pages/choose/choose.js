import React from "react";
import { Link } from "react-router-dom";
import "./choose.css";
import { Button } from "react-bootstrap";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
// import Foooter from '../Footer/Footer'

export default function Choose() {
  return (
    <>
      <div className="Choose m-5">
        <Link to={"/ClientLogin"}>
          <Button className="btn-1 m-5 ">
            <FaUserAlt></FaUserAlt> <br />
            <span>Client</span>
          </Button>
        </Link>
        <Link to={"/ContractorLogin"}>
          <Button className="btn-2 m-5 ">
            <FaBuilding></FaBuilding> <br />
            <span>Contractor</span>
          </Button>
        </Link>{" "}
      </div>
    </>
  );
}
