import React from "react";
import "./Subscribe.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

const Subscribe = () => {
    let bannerData = {
        title: "Thailand",
        desc: `Thailand is one of the most popular travel destinations in the world - Twenty years ago it was considered 'daring' to travel to Thailand. Times have certainly changed. From the majestic five-star hotels in Bangkok to simple beach huts in Koh Samui or Koh Samet, accommodation choices are many. From the stunning plains and hills of the Golden Triangle to the wave-lapped white sand beaches of Phuket, Samui and Krabi, the kingdom radiates beauty. Thailand has so much to offer that one visit is never enough – you'll want to come back and discover more time after time.`,
      };
  return (
    <>
      <Header />
      <Banner title = {bannerData.title} text = {bannerData.desc}/>
      <div className="subscribe">
        <div className="container-form">
          <section className="overlay-form">
          </section>
          <div className="form">
            <h2>Want to see more contents from us ? What're you waiting for ?</h2>
            <h1>SUBSCRIBE NOW !!! </h1>
            <div><center><input type="input" placeholder = 'Enter Your email here *'/></center></div>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Subscribe;
