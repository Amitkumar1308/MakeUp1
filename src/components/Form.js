import React from 'react';
import './CSS/Form.css';

const InquiryForm = () => (
  <div className="inquiry-form-container">
    <form className="inquiry-form">
    <p className="btn btn-primary">FILL THE FORM BELOW TO ENQUIRE</p>
      <div className="form-group">
        <label htmlFor="formName">Enter your name</label>
        <input
          type="text"
          id="formName"
          className="form-control"
          placeholder="Eg. John Doe"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formWhatsApp">Enter your WhatsApp Number</label>
        <input
          type="text"
          id="formWhatsApp"
          className="form-control"
          placeholder="+91 1234567890"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formProfession">Select your profession</label>
        <select id="formProfession" className="form-control">
          <option>Choose the most relevant option</option>
          <option value="Makeup Artist">Makeup Artist</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="formProfession">Select your goal</label>
        <select id="formProfession" className="form-control">
          <option>Choose the most relevant option</option>
          <option value="Makeup Artist">goal</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="formCity">Select your city</label>
        <select id="formCity" className="form-control">
          <option>Choose the most relevant option</option>
          <option value="Delhi">Delhi</option>
          {/* Add more options here */}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default InquiryForm;
