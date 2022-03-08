import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <i className="fas fa-home"></i>
              <span className="footer-other-text d-block mt-3 mb-3">
                ArtDeco is a promising startup that aims to solve one of the
                main problems we face when we try to decorate our home,
                apartment, or any property.
              </span>
              <div className="footer-social">
                <div className="footer-social-item">
                  {" "}
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="footer-social-item">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="footer-social-item">
                  {" "}
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <p className="footer-title">Menu</p>
              <br />
              <ul className="footer-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact Us</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <p className="footer-title">utilities</p>
                <br />
                <ul className="footer-ul">
                  <li>
                    <Link to="/AboutUs">How we work?</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <p className="footer-title">Contact</p>
              <br />
              <ul className="footer-ul">
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-envelope"></i>
                  </div>{" "}
                  <span>ardeco.inc@gmail.com</span>
                </li>
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>{" "}
                  <span>Egypt</span>
                </li>
                <li className="d-flex">
                  <div className="footer-info-item">
                    <i className="fas fa-phone-alt"></i>
                  </div>{" "}
                  <span>+201234568</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
