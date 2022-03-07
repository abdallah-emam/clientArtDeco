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
import ReactPaginate from "react-paginate";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function JobsPage() {
  const [allJobsDetails, setallJobsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState();
  const [formValues, setFormValues] = useState({});
  const [Governorates, setGovernorates] = useState([
    "Cairo",
    "Giza",
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Ismailia",
    "Kafr El Sheikh",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ]);

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
        console.log(err);
        window.location.replace("http://localhost:3000/contractorLogin");
      });
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormValues({
          ...formValues,
          name: event.target.value,
        });
        break;
      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        break;
      case "phone":
        setFormValues({
          ...formValues,
          phone: event.target.value,
        });
        break;
      case "address":
        setFormValues({
          ...formValues,
          address: event.target.value,
        });
        break;
      case "aboutMe":
        setFormValues({
          ...formValues,
          aboutMe: event.target.value,
        });
        break;
      default:
        break;
    }
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
            <Grid item xs={12} sm={12} className="mb-4">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formValues.address ? formValues.address : ""}
                    name="address"
                    label="Address"
                    onChange={(e) => handleFormChange(e)}
                  >
                    {Governorates.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Jobs */}
            <div className="jobsContainer border-bottom row">
              {allJobsDetails.map((job) => (
                <Link key={job.id} to={`/JobDetails/${job.id}`}>
                  <section className="jobsSection border p-sm-3 p-xs-5 col-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="d-inline-block  w-auto">{job.headLine}</h5>
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
