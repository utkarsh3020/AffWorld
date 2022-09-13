import React from "react";
import ContactImage from "../assets/contact.svg";
import background from "../assets/background.svg";
import "./CSS/Contact.css";

function Contact() {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="Contact"
    >
      <div className="service-content">
      <h1 className="sub-titles">
            <span>Contact</span> Us
          </h1>
        <img className="service-img" src={ContactImage} alt="" />
        <h2>Have A Query? Feel Free To Contact With Us!</h2>
        <p>
          We are available here 24*7 for you to reach out to us incase you have
          any queries or any doubts you have regading our services or our
          website. We'll resolve all of your queries.
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </section>
  );
}

export default Contact;
