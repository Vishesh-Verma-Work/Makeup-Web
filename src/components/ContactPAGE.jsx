import React from 'react';
import '../styles/contactPAGE.css';
import img from "../utils/contact.png";
const ContactPAGE = () => {
  return (
    <>
      <div className="contactForm-container">
        <div className="contactForm-content">
          <h2>Get in Touch</h2>
          <h3>Let's Chat, Reach Out to Us</h3>
          <p>Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>

          <form>
            <div className="contactForm-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Leave us a message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contactForm-imageContainer">
          <img src={img} alt="Contact" />
        </div>
      </div>

      <div className="contactForm-info">
        <h4>Contact Info</h4>
        <p><strong>Email:</strong> techteam@kawruh.com</p>
        <p><strong>Phone:</strong>8449922911, 8445172303</p>
      </div>
    </>
  );
};

export default ContactPAGE;
