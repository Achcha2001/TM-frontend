import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsPage.css'; // Import the CSS file
//import baseURL from './baseurl';
const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from the server
    const fetchNews = async () => {
      try {
        const response = await axios.get('/news'); // Adjust the API endpoint
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const educationalProgramsLink = 'https://www.toastmasters.org/education'; // Replace with the actual link

  return (
    <div className="news-page">
      <div className='new-back'>
        <h2 className="news-page-title">Welcome to Minuwangoda Toastmasters<br></br> Club News Page</h2>
        <p className='p'>
          Explore the latest updates and news from Minuwangoda Toastmasters Club. Stay informed about
          our club activities, events, and achievements. Toastmasters is a place where leaders are made,
          and our news reflects the excellence and growth within our community.
        </p>
      </div>

      {/* Image Grid Section */}
      <h1 className='head'>Our Headlines</h1>
      <div className="image-grid-section">
        
        {/* Image 1 */}
        <div className="image-grid-item">
          <img src="../images/thanku.jpeg" alt="Headline 1" className="image-grid-image" />
       
          <p className="image-grid-text">Thank you exco committee 22/23<br></br> For your massive commitment.</p>
        </div>

        {/* Image 2 */}
        <div className="image-grid-item">
          <img src="../images/news2.jpeg" alt="Headline 2" className="image-grid-image" />
         
          <p className="image-grid-text">We warmly welcome our new committee<br></br> for 23/24. </p>
        </div>

        {/* Image 3 */}
        <div className="image-grid-item">
          <img src="../images/news3.jpeg" alt="Headline 3" className="image-grid-image" />
        
          <p className="image-grid-text">Happy to announce that our club awarded <br></br>from the Quality Club Award.</p>
        </div>
      </div>

      <div className="news-container">
        {news.map((item) => (
          <div key={item._id} className="news-item">
            <h3 className="news-item-title">{item.title}</h3>
            <p className="news-item-content">{item.content}</p>
            <p className="news-item-category">Category: {item.category}</p>
            {item.image && (
              <img
                src={`/uploads/${item.image}`} // Assuming images are stored in the "uploads" folder
                alt="News"
                className="news-item-image"
              />
            )}
          </div>
        ))}
      </div>

      {/* Affordable Membership Block */}
      <div className="membership-block">
        <h2 className="membership-title">Affordable Membership</h2>
        <p className="membership-price">
          $60 USD* <span className="membership-frequency">semiannually</span>
        </p>
        <p className="membership-note">
          *plus any potential club dues and a one-time $20 USD new-member fee
        </p>
        <p className="membership-join-text">
          Talk to a leader at the club of your choice when you’re ready to join.
        </p>
      </div>

      {/* Educational Programs Section */}
      <div className="educational-programs-section">
        <h2 className="educational-programs-title">
          Let's Get to Know How Toastmasters Can Help Us Boost Our Skills
        </h2>
        <p className="educational-programs-description">
          Discover the educational programs offered by Toastmasters to enhance your communication
          and leadership skills. Take the first step toward personal and professional growth.
        </p>
        <a href={educationalProgramsLink} target="_blank" rel="noopener noreferrer">
          <button className="educational-programs-button">Educational Programs</button>
        </a>
      </div>
    </div>
  );
};

export default NewsPage;
