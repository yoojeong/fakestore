import React from "react";
import { FaRegAddressBook, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/contactus.scss';

function ContactUs(props) {
  return (
    <div>
      <h1 className="page-title">Contact Us</h1>
      <h5 className="contact-us-desc">Questions not answered? We're here to help!</h5>

      <div className="contact-methods">
        <div>
          <FaRegAddressBook />
          <h5>Address</h5>
          <p>634 E 400 S, Salt Lake City, UT 84102</p>
        </div>
        <div>
          <FaPhone />
          <h5>Phone</h5>
          <p>+1 (801) 555-5555</p>
        </div>
        <div>
          <FaEnvelope />
          <h5>Email</h5>
          <p>contact-us@fakestore.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
