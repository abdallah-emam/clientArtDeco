import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import FAQ from "../contact/FAQ";
import { useEffect } from "react";

export default function NavBar() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='aboutContainer'>
        <section className="about">
          <div className="page-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-center m-5 text-muted ">
                    About Us
                  </h1>
                  <br /> <br />
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="container"></div>
            </div>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="./3.jpg" alt="product" className="w-100" />
                    <br />
                    <br /> <br />
                    <br />
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item">
                      <div className="fs-2 text-muted">
                        <span>Who is ArtDeco ?</span>
                      </div>
                      <div className="about-text">
                        ArtDeco is a promising startup that aims to solve one of
                        the main problems we face when we try to decorate our
                        home, apartment, or even our company. We get frustrated
                        and overwhelmed by the offers, the marketplace, the
                        quality of material, etc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="./2.jpg" alt="product" className="w-100" />
                    <br />
                    <br /> <br />
                    <br />
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item">
                      <div className="fs-2 text-muted">Why ArtDeco ?</div>
                      <div className="about-text">
                        Here comes our part, which is to create a place where
                        the customer can finally fulfill his/her dreams by just
                        picking the best offers made to him/her by the available
                        companies. So, we help the customer to have the luxury
                        and the variety of options to choose from and have a
                        satisfying experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <FAQ />
          <br /> <br />
          <br /> <br />
        </section>
      </div>
      <br />
    </>
  );
}
