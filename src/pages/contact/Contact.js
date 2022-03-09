import React from "react";
import "./Contact.scss";
import contact from "./contact-image.png";
import "./AnaSayfa.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="Material-contact-section section-dark mt-3">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-image-side container">
              <img src={contact} alt="" className="form-image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-header mb-5 text-center">
              <h1 className="contact text-muted">Contact Us</h1>
            </div>
            <div className="form-wrapper">
              <form
                className="shake"
                method="get"
                id="contactForm"
                name="contact-form"
                data-toggle="validator"
              >
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    required
                    data-error="Please enter your name"
                  ></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label" for="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    required
                    data-error="Please enter your Email"
                  ></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label">Subject</label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    required
                    data-error="Please enter your message subject"
                  ></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label for="message" className="control-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    required
                    data-error="Write your message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-submit mt-5 text-center">
                  <button
                    className="btn btn-warning"
                    type="submit"
                    id="form-submit"
                  >
                    Send
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden "></div>
                  <div className="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Contact;
