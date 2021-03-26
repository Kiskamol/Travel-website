import React from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import "./BlogBkk.css";
import { AiFillTag } from "react-icons/ai";
import Footer from "./Components/Footer";

const BlogBkk = () => {
  let bannerData = {
    title: "Thailand",
    desc: `Thailand is one of the most popular travel destinations in the world - Twenty years ago it was considered 'daring' to travel to Thailand. Times have certainly changed. From the majestic five-star hotels in Bangkok to simple beach huts in Koh Samui or Koh Samet, accommodation choices are many. From the stunning plains and hills of the Golden Triangle to the wave-lapped white sand beaches of Phuket, Samui and Krabi, the kingdom radiates beauty. Thailand has so much to offer that one visit is never enough – you'll want to come back and discover more time after time.`,
  };
  return (
    <>
      <Header />
      <Banner title={bannerData.title} text={bannerData.desc} />
      <div className="container">
        <div className="content">
          <div className="content-img">
            <h1> Phuket ( ภูเก็ต )</h1>
            <br />
            <img
              src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Phuket</h2>
            <p>
              Phuket is among the world’s finest beach destinations, with fine
              white sands, nodding palm trees, glittering seas and lively towns.
              It has something for a wide array of tastes and budgets, with
              hundreds of hotels to choose from, an eclectic choice of dining
              and plenty of partying options. Aside from visiting the fantastic
              attractions of Thailand’s biggest island, you can take an
              exhilarating speedboat trip to the many nearby tropical islands,
              including the famous Koh Phi Phi, or enjoy a serene cruise around
              the mystical Phang Nga Bay.
            </p>
            <p>
              Phuket is blessed with more than 30 amazing beaches to choose
              from. Patong Beach, Kata, Karon and Kamala have always been the
              most popular, but the north of the island reveals some hidden gems
              for travellers searching for a more romantic atmosphere.
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://images.unsplash.com/photo-1584280282203-143dd29f3fcc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=658&q=80"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Things to do</h2>
            <p>
              Phuket has a fantastic array of attractions. From natural to
              man-made, from land-based to water activities, there's always
              something to see and do on Phuket Island. The beauty of it all is
              that these wonders are all within a short driving or sailing
              distance from each other.
            </p>
            <p>
              There are weird and wonderful museums, remarkable religious and
              cultural structures, exotic shows, vibrant nightlife and some
              beautiful beaches on which to enjoy the soft white sand, tropical
              surf and the amazing scenery.
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://a.cdn-hotels.com/gdcs/production25/d10/6d7212d9-e4f1-4abf-bcd3-cf6aa261169d.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h1>Recommended</h1>
            <h2>Phi Phi Islands ( เกาะพีพี )</h2>
            <div className="tag">
              <h4>
                <AiFillTag></AiFillTag> Good for :
              </h4>
              <ul>
                <li>Families</li>
                <li>Photo</li>
                <li>Adventure</li>
              </ul>
            </div>
            <hr />
            <p>
              Tour the beautiful Phi Phi Islands by speedboat and you'll enjoy a
              day of exploring the most stunning sights around these very
              popular and very beautiful islands in Southern Thailand.
            </p>
            <p>
              This includes such remarkable places as Maya Bay, made famous by
              the movie The Beach, as well as Viking Cave and Monkey Beach.
              You'll also stop on Phi Phi Don for an international buffet lunch.
              The advantage of travelling by speedboat is that you can get from
              one point of interest to the next much quicker than by other
              alternatives.
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Ko+Phi+Phi+Don/@7.7358254,98.710515,12z/data=!4m8!1m2!2m1!1sphi+phi+island!3m4!1s0x3051dee915cc99bb:0x75bea0ddd8e4d014!8m2!3d7.7461158!4d98.77841"
                target="_blank"
              >
                <b>Location :</b> Ao Nang, Mueang Krabi District, Krabi{" "}
                <b> (Map)</b>
              </a>
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://a.cdn-hotels.com/gdcs/production135/d1101/921ff6e5-a4ce-474e-9acb-7e8a5069987f.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Soi Bangla ( ซอยบางลา )</h2>
            <div className="tag">
              <h4>
                <AiFillTag></AiFillTag> Good for :
              </h4>
              <ul>
                <li>Night Life</li>
                <li>Food</li>
              </ul>
            </div>
            <hr />
            <p>
              It sometimes seems like anything goes along Bangla Road, with an
              incredible variety of things to see and do. Alongside
              international-standard nightclubs are hundreds of beer bars and
              dozens of go-go bars, as well as street performances, vendors,
              lounge bars, games, live music and more. Certain aspects of it can
              seem pretty shocking and it's certainly not family-friendly.
              However, taken with the right attitude, it's a barrel of laughs
              and a great night out in Phuket.
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Thanon+Bangla,+Tambon+Patong,+Amphoe+Kathu,+Chang+Wat+Phuket+83150/@7.8935886,98.2946152,17z/data=!3m1!4b1!4m5!3m4!1s0x30503abca3ef6d49:0xaa5e766fce3724ff!8m2!3d7.8935833!4d98.2968039"
                target="_blank"
              >
                <b>Location :</b> Pa Tong, Kathu District, Phuket 83150{" "}
                <b> (Map)</b>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogBkk;
