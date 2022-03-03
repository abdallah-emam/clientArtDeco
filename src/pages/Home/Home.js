import React from "react";
import { Link } from "react-router-dom";
// import svg from '../../images/svg/undraw_ideas_re_7twj'
import { ReactComponent as YourSvg } from "../../images/svg/undraw_certificate_re_yadi.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import BTN from "../../components/button/btn";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="HomePage">
        <article className="howWork container">
          <div className="row svg ">
            <div className=" col-sm-12 col-md-6">
              <h1>
                How we <br /> work?
              </h1>
              <div className="homWork-about  text-secondary">
                <p>
                  Forget the old rules. You can choose the best contractor to
                  make your Home fantasric
                </p>
                <p>Right now. Right here.</p>
              </div>
              <div className="select-type d-flex">
                <BTN
                  URL="/contractorLogin"
                  text="find contractor"
                  type="defult"
                />
                <BTN URL="/about" text="find Clinet" type="outline" />
              </div>
            </div>
            <div className=" d-none d-md-block  col-md-6">
              <div className="svg">
                <YourSvg height="100%" width="60%" />
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Sectio 2 */}
      <section className="whyArtDeco-section">
        <div className="container why-us-container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <h1>Why ArtDeco..?</h1>
              <div className="row whyItem">
                <h3>Proof of quality</h3>
                <p>
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </p>
              </div>
              <div className="row whyItem">
                <h3>No cost until you hire</h3>
                <p>
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </p>
              </div>
              <div className=" row whyItem">
                <h3>Safe and secure</h3>
                <p>
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sectio 3 */}
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
                  <div className="col-md-4 mt-3 pt-10">
                    <button className="card-link">
                      <h2>
                        Post a job <br /> and hire pro
                      </h2>
                      <Link to="/"> Talent market place &#x2192;</Link>
                    </button>
                  </div>
                  <div className="col-md-4 mt-3  pt-10">
                    <button className="card-link">
                      <h2>
                        Post a job <br /> and hire pro
                      </h2>
                      <Link to="/"> Talent market place &#x2192; </Link>
                    </button>
                  </div>
                  <div className="col-md-4  mt-3  pt-10">
                    <button className="card-link">
                      <h2>
                        Post a job <br /> and hire pro
                      </h2>
                      <Link to="#"> Talent market place &#x2192; </Link>
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
              <div className="container-edit-width-contractor">
                <div className="row for-contractor-title">
                  <p>For contractor</p>
                </div>
                <div className="row for-contractor-about">
                  <div className="col-sm-12 col-md-10 col-lg-10 ">
                    <h1>
                      Find Greet <br /> work
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
                    <p>
                      Find opportunities for every stage of your freelance
                      career
                    </p>
                  </div>
                  <div className="col-6 mt-4 mt-md-0 col-md-4">
                    <p>
                      Find opportunities for every stage of your freelance
                      career
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-7 col-md-12 col-lg-7">
                    <BTN URL="/" text="find property" type="outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default Home;
