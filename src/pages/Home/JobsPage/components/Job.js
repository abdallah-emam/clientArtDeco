import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Job() {
  return (
    <section className='jobsSection border p-sm-3 p-xs-5'>
      <div className='d-flex justify-content-between'>
        <h5 className='d-inline-block  w-auto'>I want to make a website.</h5>
        <div className='d-inline-block w-auto float-end'>
          <FontAwesomeIcon
            className='fa-xl icon mr-1 rounded-circle p-2 mx-md-2'
            icon={faThumbsDown}
          />
          <FontAwesomeIcon
            className='fa-xl icon mr-1 rounded-circle p-2 mx-md-2'
            icon={faHeart}
          />
        </div>
      </div>
      <div className='jobInfoLine my-2'>
        <span className='border-end border-warning border-3 pe-3'>
          {"Fixed-price"}
        </span>
        <span className='border-end border-warning border-3 px-3'>
          {"Entry level"}
        </span>
        <span className='border-end border-warning border-3 px-3'>
          {"Est. Budget: $400"}
        </span>
        <span className='border-end border-warning border-3 px-3'>{"Posted 1 hour ago"}</span>
        <span className='px-3'>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp;{"Cairo"}
        </span>
      </div>
      <div className='jobDescription my-3'>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip.
        </p>
      </div>
      <div className='jobKeyWords my-3'>
        <span className='jobKeyWord rounded-pill p-1 me-2'>{"HTML"}</span>
        <span className='jobKeyWord rounded-pill p-1 mx-2'>{"CSS"}</span>
        <span className='jobKeyWord rounded-pill p-1 mx-2'>{"JavaScript"}</span>
        <span className='jobKeyWord rounded-pill p-1 mx-2'>{"Bootstrap"}</span>
      </div>
      <div className='Proposals my-3'>
        <p>
          Proposals :{" "}
          <span className='jobKeyWord rounded-pill p-1 me-2'>
            {"Less than 5"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Job;
