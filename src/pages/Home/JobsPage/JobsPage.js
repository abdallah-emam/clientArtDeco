import React from "react";
import "./JobsPage.css";
import Job from "./components/Job";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

function JobsPage() {
  return (
    <>
      <div className='container JobsPage-container p-md-5'>
        {/* Search bar */}
        <div className='input-group d-flex justify-content-center mb-4 searchBar'>
          <div className='form-outline w-75'>
            <input
              placeholder='Search'
              type='search'
              id='form1'
              className='form-control'
            />
          </div>
          <button type='button' className='btn'>
            <i className='fas fa-search'></i>
          </button>
        </div>

        {/* Jobs */}
        <div className='jobsContainer border-bottom'>
        <Link to={`/JobDetails`}>
          <Job />
        </Link>
        <Link to={`/JobDetails`}>
          <Job />
        </Link>
        <Link to={`/JobDetails`}>
          <Job />
        </Link>
        <Link to={`/JobDetails`}>
          <Job />
        </Link>
        <Link to={`/JobDetails`}>
          <Job />
        </Link>
        </div>

        {/* pagination */}
        <div className='pagination p-sm-4'>
          <Stack className='m-auto' spacing={2}>
            <Pagination count={10} className='pagination' />
          </Stack>
        </div>
      </div>
    </>
  );
}

export default JobsPage;
