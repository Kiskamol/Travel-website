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
      <Banner title = {bannerData.title} text = {bannerData.desc}/>
      <div className="container">
        <div className="content">
          <div className="content-img">
          <h1>Chiang Mai ( เชียงใหม่ )</h1>
            <img
              src="https://images.unsplash.com/photo-1566811850186-d575a2e6a9c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            />
          </div>
          <div className="content-text">
            <h2>Chiang Mai</h2>
            <p>
              Chiang Mai is a land of misty mountains and colourful hill tribes,
              a playground for seasoned travellers, a paradise for shoppers and
              a delight for adventurers. On a trip to Chiang Mai, the curious
              traveller can expand their horizons with Thai massage and cooking
              courses. Others will be bowled over by the variety of handicrafts
              and antiques. The wild child will find plenty of lively nightlife,
              and the epicure can indulge in wonderful cuisine. Despite its
              relatively small size, Chiang Mai truly has it all.
            </p>
            <p>
              Located 700 km (435 miles) north of Bangkok in a verdant valley on
              the banks of the Ping River, Chiang Mai was founded in 1296 as the
              capital of the ancient Lanna Kingdom. Today it is a place where
              past and the present seamlessly merge with modern buildings
              standing side by side with venerable temples.
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://images.unsplash.com/flagged/photo-1578076548484-93e7ae7135df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Things to do</h2>
            <p>
              If thinking about what to do in Chiang Mai, let me first assure
              you that there is more to this beautiful city than just temples.
              As one of the many former capitals of Buddhism in Southeast Asia,
              the city certainly has no shortage of ancient places of wordship
              and they are absolutely worth checking out. However, this capital
              of culture has more than one string to its bow, and there are also
              plenty of interesting museums, wonderful spas and beautiful
              historical buildings to investigate.
            </p>
            <p>
              If you’re the adventurous type, you’ll be happy to hear that the
              list of Chiang Mai attractions includes plenty of outdoor
              activities. The city is surrounded by some of the tallest
              mountains in Thailand, with beautiful national parks in almost
              every direction. There are great opportunities for trekking, river
              rafting and exploring. These mountains are also the home of a
              number of hill-tribe villages, including the famous Karen
              long-neck tribe.
            </p>
          </div>
          <div className="content-img">
            <img
              src="http://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/attractions/tha-pae-gate/pagePropertiesImage/Tha-Pae-Gate-chiang-mai-4.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h1>Recommended</h1>
            <h2>Tha Pae Gate ( ประตูท่าแพ )</h2>
            <div className="tag">
              <h4>
                <AiFillTag></AiFillTag> Good for :
              </h4>
              <ul>
                <li>Families</li>
                <li>Photo</li>
                <li>History</li>
              </ul>
            </div>
            <hr />
            <p>
              Tha Pae Gate is one of the most famous landmarks in Chiang Mai and
              is part of the crumbling city wall which once acted as a fortress
              for the ‘Old City’ (and still today acts as a geographical
              boundary). The gate area is an epicentre for tourism in Chiang
              Mai, boasting more hotels, bars, restaurants, cafes, massage
              parlours and shops than anywhere else in the city.
            </p>
            <p>
              Staying near Tha Pae Gate not only means you’ll be surrounding
              yourself with fellow travellers, but it also means you’re
              well-placed to walk to many of Chiang Mai’s main attractions such
              as the Night Bazaar, the numerous temples in the Old City, and
              even the Riverside area (at a push).
            </p>
            <p>
              The area also has a spacious public square which plays host to a
              variety of events, from lantern-lighting during Loy Kratong, to
              water-fights at Songkran and regular live music and cultural shows
              throughout the year. Other notable dates include the Flower
              Carnival Festival and Makha Bucha Day (both February), and
              currently there is live music every Saturday night as the famous
              night market starts from here.
            </p>
            <p>
              Perhaps the best time to visit Thai Pae Gate is on Saturday
              evenings when a live band performs on a semi-permanent stage in
              front of the brick gate. Food vendors pop up all over the place
              too, selling everything from grilled chicken to som tam and
              noodles. You can bring your own drinks and find a spot to chill
              out, then head to any one of the surrounding bars, restaurants or
              clubs later on to carry on your evening.
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Tha+Phae+Gate/@18.7876922,98.9934652,15z/data=!4m5!3m4!1s0x0:0x9d3b8fabe43926f6!8m2!3d18.7876922!4d98.9934652"
                target="_blank"
              >
                <b>Location:</b> Thapae Rd, Chang Khlan Sub-district, Mueang
                Chiang Mai District, Chiang Mai 50200 <b> (Map)</b>
              </a>
            </p>
          </div>
          <div className="content-img">
            <img
              src="http://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/homepage/top10/top10-nimmanhemin/pagePropertiesImage/top10-nimman.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Nimman Road ( Nimmanhemin / ถนนนิมมานเหมินทร์ )</h2>
            <div className="tag">
              <h4>
                <AiFillTag></AiFillTag> Good for :
              </h4>
              <ul>
                <li>Shoppers</li>
                <li>Food</li>
                <li>Photo</li>
              </ul>
            </div>
            <hr />
            <p>
              Nimman Road and the surrounding side streets are at the heart of
              the trendiest part of Chiang Mai. Occasionally known by its full
              name of Nimmanhaemin Road, the place is alive with fashionable
              restaurants, cafés, bars, shops and boutique hotels. It definitely
              gives Chiang Mai a new angle, far removed from the traditional
              Thai sensibilities found in other areas of Thailand’s so-called
              ‘Rose of the North’.
            </p>
            <p>
              We’ve categorised the Nimman area as anything within a 10 minute
              walk of the main Nimmanhaemin Road itself, which runs south from
              Maya Shopping Mall on Huay Kaew Road, cutting through the city’s
              bustling university area towards the airport, all of which is
              huddled in the shadows of the towering Doi Suthep Mountain towards
              the west. 
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Nimmanahaeminda+Road,+Tambon+Su+Thep,+Amphoe+Mueang+Chiang+Mai,+Chang+Wat+Chiang+Mai/@18.7958248,98.9636229,17z/data=!3m1!4b1!4m5!3m4!1s0x30da3a631dd1e249:0x4a2c22bf81e2b035!8m2!3d18.7958248!4d98.9658116"
                target="_blank"
              >
                <b>Location:</b> Suthep, Mueang Chiang Mai District, Chiang Mai <b> (Map)</b>
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
