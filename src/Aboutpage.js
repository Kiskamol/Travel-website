import React from "react";
import './Aboutpage.css'
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import { FaHeart } from "react-icons/fa";
import { DiBower } from "react-icons/di";
import Footer from "./Components/Footer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <>
      <Header />
      <Banner title={"About Flying Duck"} />
      <div className="about">
        <h1>Hello everyone <DiBower/></h1>
        <h2>
          We're travel bloggers from Thailand And we love to create blogs about
          travelling ; place , what to do , history or anything to make you
          fascinate in travelling around the world 
        </h2>
        <h2>We hope this could make you enjoy in travelling more or less. if we do anything that might bother you, please feel free to contact us ,we love to see your comments</h2>
        <h2>And more importantly , Thank you for visiting our site <FaHeart className = 'faheart'/></h2>
        <hr/>
        <h4>Kiskamol Kulpradith : Co-Founder of Flying Duck.com</h4>
        <div className="logo-contact">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Aboutpage;
