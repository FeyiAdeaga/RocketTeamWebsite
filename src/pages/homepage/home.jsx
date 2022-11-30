import React from "react";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="home">
      Home
    </div>
    <div className="learn-more">
      <div className="learn-more-button">
        LEARN MORE
      </div>
      <div className="welcome">
      WELCOME TO THE OFFICIAL WEBSITE OF THE FISK ROCKET TEAM
      </div>
    </div>
    <div className="subscribe">
        <div className="get-new-content">
        Get new content delivered directly to your inbox.
        </div>
        <div className="email-area">
          <input type={"text"} placeholder= {"Email"} className={"input-field"}></input>
          <div className="subscribe-button">
            Subscribe
          </div>
        </div>
      </div>
  </div>
);

export default Homepage;
