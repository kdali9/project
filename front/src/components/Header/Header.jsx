import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Find a Cause to help the Needy</h2>
        <p>
          Inspired by the belief that every person deserves a chance to shine,
          we were born from the shared desire to make a difference. Witnessing
          the struggles faced by many due to limited access and a lack of
          representation, we knew we had to act.</p>
          <button className="view">View Causes</button>
      </div>
    </div>
  );
};

export default Header;
