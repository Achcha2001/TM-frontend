import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css'; // Import your CSS file for styling
import baseURL from './baseurl';
const Events = () => {
  const [events, setEvents] = useState([]);
  const [animationText, setAnimationText] = useState(''); // Added missing state declaration

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${baseURL}/events/getAll`);
        setEvents(response.data);
        animateText("Let's discover what we do...");
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const animateText = (text) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setAnimationText(text.substring(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 120);
  };

  return (
    <div className="events-container">
      {/* Introductory Image */}
      <div className="intro-image">
        <img src="./images/IMG-20230723-WA0020.jpg" alt="Introduction" className="intro-image" />
        <div className="intro-text">
          <h2>{animationText}</h2>
        </div>
      </div>

      <h1 className="events-title">Events</h1>
      <ul className="events-list">
        {events.map(event => (
          <li key={event._id} className="event-item">
            <div className="event-details">
              <strong className="event-title">{event.title}</strong>
              <p className="event-description">{event.description}</p>
              <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Posts Section */}
      <div className="posts-container">
        <h2 className="posts-title">Posts</h2>
        <div className="gallery-grid">
          <img src="./images/openhouse.jpg" alt="Image 1" className="gallery-image" />
          <img src="./images/openhouse2.jpg" alt="Image 2" className="gallery-image" />
          <img src="./images/post3.jpg" alt="Image 3" className="gallery-image" />
        </div>
      </div>

     
    </div>
  );
};

export default Events;
