import React from "react";
import "./CallToAction.css";
import { DiBower } from "react-icons/di";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <DiBower className="dibower" />
          <h2>We're the Flying Duck blogger</h2>
          <p>Subscribe to see more travel contents around the world. To make your journey <strong>be more ENJOYABLE !!</strong></p>
          <Link  className="cta-btn" to="/Subscribe">Subscribe</Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
