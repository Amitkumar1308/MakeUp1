// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './CSS/Footer.css'; // create a CSS file for custom styles

const Footer = () => (
  <footer className="footer">
    <div className="social-media">
      <FaInstagram />
      <FaFacebook />
      <FaLinkedin />
      <FaTwitter />
    </div>
  </footer>
);

export default Footer;