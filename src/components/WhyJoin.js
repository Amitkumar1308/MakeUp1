// src/components/WhyJoin.js
import React from 'react';
import './CSS/WhyJoin.css'; // create a CSS file for custom styles
import { FaVideo, FaStar, FaUsers } from 'react-icons/fa';

const WhyJoin = () => (
  <section className="why-join">
    <h2>Why Should You Join Airblack?</h2>
    <div className="benefits">
      <div>
        <FaVideo />
        <p>Do-it-together, live on Zoom</p>
      </div>
      <div>
        <FaStar />
        <p>4.8/5 Rated Classes</p>
      </div>
      <div>
        <FaUsers />
        <p>35,000+ Members</p>
      </div>
    </div>
    <button className="apply-now">Apply Now</button>
  </section>
);

export default WhyJoin;