import React from 'react';
import './Volunteer.css';
import { assets } from '../../assets/assets';

const Volunteer = () => {
  return (
    <div className="volunteer-container" id='volunteer'>
      <div className="top">
        <h1>Apply <span className="highlight">As Volunteer</span></h1>
      </div>
      <div className="testimonial">
        <div className="testimonial-image">
          <img src={assets.zesta} alt="Jean Yutri Raissa" />
        </div>
        <div className="testimonial-text">
          <p>"I would encourage anyone who is looking for a meaningful way to give back to consider volunteering with this wonderful organization."</p>
          <p className="author">Jean Yutri Raissa<br/>@yrais</p>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-card">
          <p>I have also learned so much about the issue of food insecurity in my community.</p>
          <p className="author">Emily Smith<br/>@Emily<br/>Toronto, ON</p>
        </div>
        <div className="testimonial-card">
          <p>It is heart-breaking to see the number of people who are struggling to put food on the table.</p>
          <p className="author">Justin Thompson<br/>@justin<br/>Montreal, QC</p>
        </div>
        <div className="testimonial-card">
          <p>I am so grateful for the opportunity to make a difference in the lives of others.</p>
          <p className="author">Michael Williams<br/>@Michael<br/>Ottawa, ON</p>
        </div>
      </div>
      <div className="apply-button">
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Volunteer;