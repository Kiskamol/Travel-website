import React from "react";
import "./Content.css";
import {Link} from 'react-router-dom'

const Content = () => {
  return (
    <div className="container">
      <section className="content-con">
        <div className="content-l">
        <Link to = '/Chaing mai'>
          <img
            src="https://images.unsplash.com/photo-1566811850186-d575a2e6a9c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            alt=""
          />
          </Link>
        </div>
        <div className="content-r">
          <h2>Chiang Mai</h2>
          <p>
            Chiang Mai is a land of misty mountains and colourful hill tribes, a
            playground for seasoned travellers, a paradise for shoppers and a
            delight for adventurers. On a trip to Chiang Mai, the curious
            traveller can expand their horizons with Thai massage and cooking
            courses. <br /> <Link to = '/Chaing mai'> <b>View more ...</b> </Link>
          </p>
        </div>
      </section>
      <section className="content-con">
        <div className="content-r">
          <h2>Bangkok</h2>
          <p>
            Bangkok welcomes more visitors than any other city in the world and
            it doesn’t take long to realise why. Bangkok is a city of contrasts
            with action at every turn. Marvel at the gleaming temples, catch a
            tuk tuk through bustling Chinatown or take a longtail boat through
            floating markets. <br /> <Link to = '/Bangkok'> <b>View more ...</b> </Link>
          </p>
        </div>
        <div className="content-l">
        <Link to = '/Bangkok'>
          <img
            src="https://images.unsplash.com/photo-1589896013340-e416c11972d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt=""
          />
          </Link>
        </div>
      </section>
      <section className="content-con">
        <div className="content-l">
        <Link to = '/Phuket'>
          <img
            src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80"
            alt=""
          />
        </Link>
        </div>
        <div className="content-r">
          <h2>Phuket</h2>
          <p>
            Phuket is among the world’s finest beach destinations, with fine
            white sands, nodding palm trees, glittering seas and lively towns.
            It has something for a wide array of tastes and budgets, with
            hundreds of hotels to choose from, an eclectic choice of dining and
            plenty of partying options. <Link to = '/Phuket'> <b>View more ...</b> </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Content;
