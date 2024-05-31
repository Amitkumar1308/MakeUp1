import React from 'react';
import './CSS/Header.css'; // create a CSS file for custom styles
import logo from "./logo.png";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Airblack Beauty Club" className="logo" />
    <h1>Professional Online Makeup Course</h1>
    <div className="sub-header">
      <span className="rated">Certification Programme</span>
      <span className="rated">Rated 4.8/5</span>
    </div>
    <div className="benefits">
      <span className="benefit">
        <span className="checkmark">&#10004;</span> India's No.1 Online Makeup Course&nbsp;
      </span>
      {/* <span className="benefit">
        <span className="checkmark">&#10004;</span> Learn by LIVE Do-it-Together Classes&nbsp;
      </span>
      <span className="benefit">
        <span className="checkmark">&#10004;</span> Unlimited Practice Session to master skills&nbsp;
      </span> */}
    </div>
  </header>
);

export default Header;
