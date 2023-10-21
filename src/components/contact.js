// contact.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import axios from 'axios';
import baseURL from './baseurl';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server endpoint
      await axios.post(`${baseURL}/contact/submit`, formData);

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="contact-us">
      <div className="top-image">
        <div className="grid-container">
          <div className="grid-item">
            <img src="../images/contactback.jpg" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="../images/contactback2.jpg" alt="Image 2" />
          </div>
          <div className="grid-item">
            <img src="../images/contactback3.jpg" alt="Image 3" />
          </div>
          <div className="centered-text">
            <p>
              <span className="j">Join</span> with us <span className="j">Smile</span> with us...
            </p>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-us-info">
          <h2>Contact us for more information</h2>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>minuwangodatmc@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <p>+94 76 926 3677</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarker} />
            <p>Lion Center Minuwangoda</p>
          </div>
        </div>
        <div className="contact-us-form">
          <h2>Leave us a message</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Message:</label>
              <textarea className="msg" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
