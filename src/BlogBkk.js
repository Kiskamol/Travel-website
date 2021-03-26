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
            <h1>Bangkok ( กรุงเทพ )</h1>
            <img
              src="https://images.unsplash.com/photo-1589896013340-e416c11972d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Bangkok</h2>
            <p>
              Bangkok welcomes more visitors than any other city in the world
              and it doesn’t take long to realise why. Bangkok is a city of
              contrasts with action at every turn. Marvel at the gleaming
              temples, catch a tuk tuk through bustling Chinatown or take a
              longtail boat through floating markets. Food is another Bangkok
              highlight, from local dishes served at humble street stalls to
              haute cuisine at romantic rooftop restaurants.
            </p>
            <p>
              Luxury malls compete with a sea of boutiques and markets, where
              you can treat yourself without overspending. Extravagant luxury
              hotels and surprisingly cheap serviced apartments welcome you with
              the same famed Thai hospitality. And no visit to Bangkok would be
              complete without a glimpse of its famous nightlife. Be it
              nightclubs, cabarets or exotic red-light districts, Bangkok never
              ceases to amaze.
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://images.unsplash.com/photo-1461604516355-61bd391c793f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Things to do</h2>
            <p>
              Bangkok is as intoxicating as it is diverse; a melting pot of
              exotic aromas, interesting sights and visual delights. It's a city
              with infinite layers which you need to explore to reveal its
              hidden secrets. If you're planning a trip to Bangkok, make sure to
              allow enough time to see some of the treasures that have given
              this city iconic status. At least 3 to 5 days to get a proper
              glimpse of all its faces.
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://a.cdn-hotels.com/gdcs/production168/d707/c3156d7b-ce5a-4a5c-9a99-002b0ff57fe8.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h1>Recommended</h1>
            <h2>Grand Palace and Wat Prakeaw ( วัดพระแก้ว )</h2>
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
              The Grand Palace and Wat Prakaew command respect from all who have
              walked in their sacred grounds. Built in 1782, and served as the
              home of Thai Kings and the Royal court for 150 years, The Grand
              Palace continues to have visitors in awe with its beautiful
              architecture and intricate detail. Wat Pra Kaew enshrines Phra
              Kaew Morakot (the Emerald Buddha), a sacred Buddha image
              meticulously carved from a single block of emerald.
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Temple+of+the+Emerald+Buddha+-+Wat+Phra+Si+Rattana+Satsadaram+%2F+Wat+Phra+Kaew/@13.7514967,100.4904799,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2990eee7769e5:0x343cc1aab522fe88!8m2!3d13.7516435!4d100.4927041"
                target="_blank"
              >
                <b>Location:</b> Na Phra Lan Rd, Phra Borom Maha Ratchawang,
                Phra Nakhon, Bangkok 10200, Thailand <b>(Map)</b>
              </a>
            </p>
          </div>
          <div className="content-img">
            <img
              src="https://a.cdn-hotels.com/gdcs/production146/d156/d00e2ee1-a6a5-4b2d-bad9-4111d1c90944.jpg"
              alt=""
            />
          </div>
          <div className="content-text">
            <h2>Chinatown ( Yaowarat / ไชน่าทาวน์ เยาวราช )</h2>
            <div className="tag">
              <h4>
                <AiFillTag></AiFillTag> Good for :
              </h4>
              <ul>
                <li>Shoppers</li>
                <li>Night Life</li>
                <li>Food</li>
                <li>Photo</li>
              </ul>
            </div>
            <hr />
            <p>
              Bangkok's Chinatown is a colourful, exotic and pleasingly chaotic
              area, packed with market stalls and probably the highest
              concentration of gold shops in the city. During major festivities
              like Chinese New Year and the Vegetarian Festival, the dynamism
              and spirit of celebration spread across town like wildfire, and if
              you happen to be around, don’t miss an opportunity to witness
              Chinatown Bangkok at its best.
            </p>
            <p className="location">
              <a
                href="https://www.google.com/maps/place/Yaowarat+Rd,+Krung+Thep+Maha+Nakhon/@13.7373979,100.5107494,17z/data=!3m1!4b1!4m5!3m4!1s0x30e29921f76193f7:0x5864886b1bdc3702!8m2!3d13.7373927!4d100.5129381"
                target="_blank"
              >
                <b>Location:</b> Yaowarat Road, Samphanthawong, Bangkok 10100,
                Thailand <b>(Map)</b>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogBkk;
