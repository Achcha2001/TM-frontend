import React, { useState } from 'react';
import './menubar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-header">
        <img src="../images/logo.png" alt="logo" className="navbar-logo-image" />
        
      </div>
      <div className={`navbar-menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/news" className="navbar-link">
            News
          </a>
        </li>
        <li className="navbar-item">
          <a href="/events" className="navbar-link">
            Events
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contactus" className="navbar-link">
            Contact us
          </a>
        </li>
       
       
      </ul>
      <div className="navbar-login">
        <a href="/login" className="navbar-login-link">
          <button className="navbar-login-button">Login</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
