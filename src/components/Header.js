import React from 'react';
import './CSS/Header.css'; // create a CSS file for custom styles
import logo from "./logo.png";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Airblack Beauty Club" className="logo" />
    <h1>Professional Online Makeup Course</h1>
    <p>Rated 4.8/5</p>
    <p>Certification Programme</p>
    <p>India's No.1 Online Makeup Course</p>
  </header>
);

export default Header;
