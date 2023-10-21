// src/components/ViewMembers.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewMembers.css'; // Import your CSS file for styling
import baseURL from './baseurl';
const ViewMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members data from your API when the component mounts
    axios.get(`${baseURL}/member`).then((response) => {
      setMembers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>View Members</h1>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Membership Number</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              <td>{member.fullname}</td>
              <td>{member.email}</td>
              <td>{member.membershipnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMembers;
