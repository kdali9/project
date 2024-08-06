import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Your one stop fundraising tool.Bringing fundraisers to the tip of
            your fingers.Welcome All
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
        <h2>FORODHA</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Donation</a></li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
            <ul>
                <li>+254 719 441 502</li>
                <li>contact@forodha.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024  Forodha.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
