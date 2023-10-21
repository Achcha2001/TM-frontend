import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../images/logo.png" alt="logo" className="footer-logo-image" />
          <span className="footer-logo-text">Minuwangoda Toastmasters Club</span>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100057616931062" target="_blank" rel="noopener noreferrer">
            <img src="../images/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
            <img src="../images/instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
