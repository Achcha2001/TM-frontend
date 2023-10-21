// AdminNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; // Import the CSS file
import './menubar.css';
import { useNavigate } from 'react-router-dom';  


const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
  
 navigate('/');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-header">
        <img src="../images/logo.png" alt="logo" className="navbar-logo-image" />
        <span className="navbar-logo-text">Minuwangoda Toastmasters Club</span>
      </div>
      <ul className="admin-navbar-list">
        <li className="admin-navbar-item">
          <Link to="/admin" className="admin-navbar-link">Dashboard</Link>
        </li>
        <li className="admin-navbar-item">
          <Link to="/admin/messages" className="admin-navbar-link">Messages</Link>
        </li>
        <li className="admin-navbar-item">
          <Link to="/admin/update-members" className="admin-navbar-link">Update Members</Link>
        </li>
        <li className="admin-navbar-item">
          <Link to="/admin/addnews" className="admin-navbar-link">Add News</Link>
        </li>
        <li className="admin-navbar-item">
          <Link to="/admin/addevents" className="admin-navbar-link">Add Events</Link>
        </li>
        <li className="admin-navbar-item">
          <button className="admin-logout-button" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
