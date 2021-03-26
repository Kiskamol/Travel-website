import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Flying Duck Copyright 2021. All Right Reserve</p>
      <div className="logo-contact">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
      </div>
    </div>
  );
};

export default Footer;
