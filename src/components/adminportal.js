// src/components/AdminPortal.js

import React from 'react';
import { Link } from 'react-router-dom';
import './adminportal.css';

const AdminPortal = ({ setIsAdmin }) => {
  // Set isAdmin to true when entering the admin portal
  setIsAdmin(true);

  return (
    <div className="admin-portal">
      <div className='admin1'>
        {/* <AdminNavbar /> */}
        <h1>Welcome to the Admin Portal</h1>
        <p>
          As an administrator, you are responsible for managing all news and events on this platform.
          Use the navigation links to access different sections such as Dashboard, Users, Update Members, and Add News.
          Ensure that the information you add is accurate and relevant to maintain a high standard of content.
        </p>
        {/* Link to View Members page */}
        <Link to="/admin/veiwmembers" className="view-members-button">
          View Members
        </Link>
        {/* Add your admin-related components and logic here */}
      </div>
    </div>
  );
};

export default AdminPortal;
