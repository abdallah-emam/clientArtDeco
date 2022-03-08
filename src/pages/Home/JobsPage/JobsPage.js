import React from "react";
import "./JobsPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstace } from "./../../../network/axiosConfig";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function JobsPage() {
  const [allJobsDetails, setallJobsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState();

  useEffect(() => {
    axiosInstace
      .get(`job?page=${currentPage}&limit=10`, {})
      .then((res) => {
        setallJobsDetails(res.data.data.jobs);
        setPagesCount(Math.ceil(res.data.fullLength / 10));
        window.scrollTo(0, 0);
        setIsLoading(false);
      })
      .catch((err) => {
        window.location.replace("/contractorLogin");
      });
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleSearch = (e) => {
    setIsLoading(true);

    const searchWord = document.getElementById("form1").value;
    axiosInstace
      .get(`job?search=${searchWord}`, {})
      .then((res) => {
        setallJobsDetails(res.data.data.jobs);
        setPagesCount(Math.ceil(res.data.fullLength / 10));
        window.scrollTo(0, 0);
        setIsLoading(false);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="container JobsPage-container p-md-5">
        {isLoading ? (
          <div className="w-100 position-relative">
            <Box
              className="position-absolute top-0 start-50 translate-middle-x"
              sx={{ display: "flex" }}
            >
              <CircularProgress className="m-5" />
            </Box>
          </div>
        ) : (
          <>
            {/* Search bar */}
            <div className="input-group d-flex justify-content-center mb-4 searchBar">
              <div className="form-outline w-75">
                <input
                  placeholder="Search"
                  type="search"
                  id="form1"
                  className="form-control"
                />
              </div>
              <button
                onClick={(e) => {
                  handleSearch(e);
                }}
                type="button"
                className="btn"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
            {/* Jobs */}
            <div className="jobsContainer border-bottom row">
              {allJobsDetails.map((job) => (
                <Link key={job.id} to={`/JobDetails/${job.id}`}>
                  <section className="jobsSection border p-sm-3 p-xs-5 col-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="d-inline-block  w-auto">{job.headLine}</h5>
                    </div>
                    <div className="jobInfoLine my-2">
                      <span className="border-end border-warning border-3 px-3">
                        Budget:&nbsp;{job.budget}
                      </span>
                      <span className="border-end border-warning border-3 px-3">
                        {new Date(Date.parse(job.createdAt)).toDateString()}
                      </span>
                      <span className="border-end border-warning border-3 px-3">
                        Estimited Time:&nbsp;{job.estimatedTime}
                        {}
                      </span>
                      <span className="px-3">
                        <FontAwesomeIcon icon={faLocationDot} />
                        &nbsp;{job.location}
                      </span>
                    </div>
                    <div className="jobDescription my-3">
                      <p>{job.description}</p>
                    </div>
                    <div className="Proposals my-3">
                      <p>
                        Proposals :&nbsp;
                        <span className="jobKeyWord rounded-pill p-1 me-2">
                          {job.totalProposal}
                        </span>
                      </p>
                    </div>
                  </section>
                </Link>
              ))}
            </div>

            {/* pagination */}
            <div className="pagination d-flex justify-content-center p-sm-4">
              <ReactPaginate
                previousLabel="< previous"
                nextLabel="next >"
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
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
