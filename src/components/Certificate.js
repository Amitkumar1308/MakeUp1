// src/components/Certification.js
import React from 'react';
import './CSS/Certification.css'; // create a CSS file for custom styles
import certification from "./1.png";

const Certification = () => (
  <section className="certification">
    <h2>Get Certified From India's Biggest Beauty Platform</h2>
    <img src={certification} alt="Certificate" className="logo" />
    <p>Join our growing community of 35,000+ alumni</p>
    <button className="apply-now">Apply Now</button>
  </section>
);

export default Certification;