import React from "react";
import "../Components/Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
      <Navbar />
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have a question, feedback,
            or a business inquiry, feel free to reach out to us.{" "}
          </p>
          <div className="contact-info">
            <h3>Address : </h3>
            <p>Chennai</p>
            <h3>Phone :</h3>
            <p>+91 903784837</p>
            <h3>Email :</h3>
            <p>harishmkdev@gmail.com</p>
            <h3>Business Hours :</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p> Saturday - Sunday: Closed</p>
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
};

export default Contact;
