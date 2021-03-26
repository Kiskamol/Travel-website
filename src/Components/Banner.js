import React from "react";
import "./Banner.css";

let bannerData = {
  title: "Thailand",
  desc: `Thailand is one of the most popular travel destinations in the world - Twenty years ago it was considered 'daring' to travel to Thailand. Times have certainly changed. From the majestic five-star hotels in Bangkok to simple beach huts in Koh Samui or Koh Samet, accommodation choices are many. From the stunning plains and hills of the Golden Triangle to the wave-lapped white sand beaches of Phuket, Samui and Krabi, the kingdom radiates beauty. Thailand has so much to offer that one visit is never enough – you'll want to come back and discover more time after time.`,
};

const Banner = ({title , text}) => {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
