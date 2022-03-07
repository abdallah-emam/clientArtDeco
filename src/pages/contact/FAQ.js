import React from "react";
import "./FAQ.css";
import FAQItem from "./FAQItem";

export default function FAQ() {
  var firstColumn = [
    {
      "Is there is a fee for posting jobs?":
        " Yes, there is a minimum fees as a compensation for using our platform which will be taken from both parties whether you're are a client or a contractor.",
    },
    {
      "Can i Change my password?":
        "Of course, you can change your password by heading to settings page and click on the  update password. Your password will be changed.",
    },
    {
      "How to know if this is a scam contractor?":
        "There are't any scammers here, we take a very deep look in any contractor that registers his credentials as for the client we also do the same, so our visitors can have a safe journey in our website",
    },
  ];

  var secondColumn = [
    {
      "How many jobs can i post per day?":
        "You can post as much as you want if you meet the requirements before posting you job.",
    },
    {
      "Can i see examples for job posts?":
        "You can a preview a hob post example before posting you new job",
    },
    {
      "Is there is any fees for creating an account?":
        "No, there aren't any fees for creating an account whether you are a client or a contractor.",
    },
  ];

  return (
    <section className="faq faqContainer">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2 className="text-muted">F.A.Q</h2>
          <p className="text-muted">Frequently Asked Questions</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <div className="accordion accordion-flush">
              {firstColumn.map((questions, index) => {
                return (
                  <FAQItem
                    question={Object.keys(questions)}
                    answer={Object.values(questions)}
                    index={index}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion accordion-flush">
              {secondColumn.map((questions, index) => {
                return (
                  <FAQItem
                    question={Object.keys(questions)}
                    answer={Object.values(questions)}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
