import React from "react";
import "../assets/stylesheets/contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <span className="createGap" />

      <body className="contact-us-body">
        <div className="container contact-container">
          <div className="row">
            <h1>contact us</h1>
          </div>
          <div className="row">
            <h4>We'd love to hear from you!</h4>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input className="contact-us-input" type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input className="contact-us-input" type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input className="contact-us-input" type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12 ">
              <div className="btn btn-outline-primary submit-btn send-msg-btn">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </body>
      <span className="createGap-Footer" />
      <Footer />
    </>
  );
};

export default Contact;
