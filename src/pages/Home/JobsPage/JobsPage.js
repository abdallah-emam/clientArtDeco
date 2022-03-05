import React from "react";
import "./JobsPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstace } from "./../../../network/axiosConfig";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DateRangePickerInput from "@mui/lab/DateRangePicker/DateRangePickerInput";
import ReactPaginate from 'react-paginate';

function JobsPage() {
  const [allJobsDetails, setallJobsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState()
  useEffect(() => {
    axiosInstace
      .get(`job?page=${currentPage}&limit=10`, {})
      .then(res => {
        console.log(res.data.data.jobs);
        console.log(currentPage);
        setallJobsDetails(res.data.data.jobs);
        // setTotalCount(res.headers.get('Content-Length'))
        console.log(res.headers['content-length']);
        // console.log(res.headers['x-total-count']);
        // console.log('totalCount',totalCount);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        // window.location.replace("http://localhost:3000/contractorLogin");
      });
  }, [currentPage]);


  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  }

  return (
    <>
      <div className='container JobsPage-container p-md-5'>
        {isLoading ? (
          <div className='w-100 position-relative'>
            <Box
              className='position-absolute top-0 start-50 translate-middle-x'
              sx={{ display: "flex" }}
            >
              <CircularProgress className='m-5' />
            </Box>
          </div>
        ) : (
          <>
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
            <div className='jobsContainer border-bottom row'>
              {allJobsDetails.map(job => (
                <Link key={job.id} to={`/JobDetails/${job.id}`}>
                  <section className='jobsSection border p-sm-3 p-xs-5 col-12'>
                    <div className='d-flex justify-content-between'>
                      <h5 className='d-inline-block  w-auto'>
                        {job.headLine}
                      </h5>
                      {/* <div className='d-inline-block w-auto float-end'>
                        <FontAwesomeIcon
                          className='fa-xl icon mr-1 rounded-circle p-2 mx-md-2'
                          icon={faThumbsDown}
                        />
                        <FontAwesomeIcon
                          className='fa-xl icon mr-1 rounded-circle p-2 mx-md-2'
                          icon={faHeart}
                        />
                      </div> */}
                    </div>
                    <div className='jobInfoLine my-2'>
                      <span className='border-end border-warning border-3 px-3'>
                      Budget:&nbsp;{job.budget}
                      </span>
                      <span className='border-end border-warning border-3 px-3'>
                        {new Date(Date.parse(job.createdAt)).toDateString()}
                      </span>
                      <span className='border-end border-warning border-3 px-3'>
                      Estimited Time:&nbsp;{job.estimitedTime}
                      {
                        
                      }
                      </span>
                      <span className='px-3'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        &nbsp;{job.location}
                      </span>
                    </div>
                    <div className='jobDescription my-3'>
                      <p>
                        {job.description}
                      </p>
                    </div>
                    {/* <div className='jobKeyWords my-3'>
                      <span className='jobKeyWord rounded-pill p-1 me-2'>
                        {"HTML"}
                      </span>
                      <span className='jobKeyWord rounded-pill p-1 mx-2'>
                        {"CSS"}
                      </span>
                      <span className='jobKeyWord rounded-pill p-1 mx-2'>
                        {"JavaScript"}
                      </span>
                      <span className='jobKeyWord rounded-pill p-1 mx-2'>
                        {"Bootstrap"}
                      </span>
                    </div> */}
                    <div className='Proposals my-3'>
                      <p>
                        Proposals :&nbsp;
                        <span className='jobKeyWord rounded-pill p-1 me-2'>
                          {job.totalProposal}
                        </span>
                      </p>
                    </div>
                  </section>
                </Link>
              ))}
            </div>

            {/* pagination */}
            <div className='pagination p-sm-4'>
              <ReactPaginate 
              previousLabel="< previous"
              nextLabel="next >"
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={10}
              marginPagesDisplayed={2}
              renderOnZeroPageCount={null}
              containerClassName={'pagination justify-content-center'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default JobsPage;


// ----------------------------------------------------------------