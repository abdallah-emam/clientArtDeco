import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as YourSvg } from "../../images/svg/undraw_certificate_re_yadi.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import BTN from "../../components/button/btn";
import "./Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Section 1 */}
      <section className="HomePage">
        <article className="container">
          <div className="conriner container-edit-width">
            <div className="row">
              <div className="col-12 col-md-6">
                <h1>
                  How work <br />
                  should be?
                </h1>
                <div className="home-about  text-secondary">
                  <p>
                    Forget the old rules. You can choose the best contractor to
                    make your home fantastic
                  </p>
                  <p>Right now. Right here.</p>
                </div>
                <div className="select-type d-flex">
                  <BTN
                    URL="/ContractorSignUp"
                    text="Be a Contractor"
                    type="defult"
                  />
                  <BTN URL="/ClientSignUp" text="Be a Client" type="outline" />
                </div>
              </div>
              <div className=" d-none d-md-block text-align-center col-md-6">
                <div className="svg">
                  <YourSvg height="100%" width="60%" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Section 2 */}
      <section className="whyArtDeco-section">
        <div className="container why-us-container">
          <div className="container container-edit-width">
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="row">
                  <div className="col-12 col-lg-10">
                    <h1>Why Art Deco?</h1>
                  </div>
                </div>
                <div className="whyItemBox">
                  <div className="row whyItem">
                    <div className="d-flex">
                      <div className="me-3 mt-2">
                        <i class="fas fa-star"></i>
                      </div>
                      <div className="">
                        <h3>Proof of quality</h3>
                        <p className="text-secondary">
                          Check any pro’s work samples, client reviews, and
                          identity verification.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row whyItem">
                    <div className="d-flex">
                      <div className="me-3 mt-2">
                        <i class="fas fa-money-bill-alt"></i>
                      </div>
                      <div className="">
                        <h3>No cost until you hire</h3>
                        <p className="text-secondary">
                          Interview potential fits for your job, negotiate
                          rates, and only pay for work you approve.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row whyItem">
                    <div className="d-flex">
                      <div className="me-3 mt-2">
                        <i class="fas fa-check-circle"></i>
                      </div>
                      <div className="">
                        <h3>Safe and secure</h3>
                        <p className="text-secondary">
                          Focus on your work knowing we help protect your data
                          and privacy. We’re here with 24/7 support if you need
                          it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="delivery-models-client">
        <div className="container models-client-container py-15 py-md-30">
          <div className="container container-edit-width">
            <div className="row for-client-title">
              <p>For client</p>
            </div>
            <div className="row for-client-about">
              <div className="col-sm-12 col-md-9 col-lg-5 ">
                <h1>
                  Find talent <br /> you want
                </h1>
                <p>
                  Work with the largest network of independent professionals and
                  get things done—from quick turnarounds to big transformations.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 for-client-go-to">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-stretch mt-3 pt-10">
                    <button className="card-link">
                      <h2>
                        Post a job <br /> and hire pro
                      </h2>
                      <Link to="/clientLogin">
                        {" "}
                        Talent market place &#x2192;
                      </Link>
                    </button>
                  </div>
                  <div className="col-lg-4 d-flex align-items-stretch mt-3 pt-10">
                    <button className="card-link">
                      <h2>
                        Browse <br /> and buy project
                      </h2>
                      <Link to="/"> Project list &#x2192; </Link>
                    </button>
                  </div>
                  <div className="col-lg-4 d-flex align-items-stretch mt-3 pt-10">
                    <button className="card-link">
                      <h2>
                        Countact us <br /> to help you in any problem
                      </h2>
                      <Link to="/Contact"> contact us &#x2192; </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="delivery-models-contractor">
        <div className="container">
          <div className="row">
            <div className="contractor-photo col-sm-12 col-md-6"></div>
            <div className="contractor-details col-sm-12 col-md-6">
              <div className="container-edit-width">
                <div className="row for-contractor-title">
                  <p>For contractor</p>
                </div>
                <div className="row for-contractor-about">
                  <div className="col-sm-12 col-md-10 col-lg-10 ">
                    <h1>
                      Find valuable <br /> work
                    </h1>
                    <p>
                      Meet clients you’re excited to work with and take your
                      career or business to new heights.
                    </p>
                  </div>
                </div>
                <div className="row for-clinet-offers">
                  <div className="col-6 col-md-4">
                    <p>
                      Find opportunities for every stage of your freelance
                      career
                    </p>
                  </div>
                  <div className="col-6 col-md-4">
                    <p>Control when, where, and how you work</p>
                  </div>
                  <div className="col-6 mt-4 mt-md-0 col-md-4">
                    <p>Explore different ways to earn</p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-7 col-md-12 col-lg-7">
                    <BTN
                      URL="/ContractorLogin"
                      text="find opportunity"
                      type="outline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
