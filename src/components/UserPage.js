// src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserPage.css'; // Import your CSS file for styling
import baseURL from './baseurl';

const UserPage = () => {
  const [member, setMember] = useState({});
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the email of the logged-in user
        const emailResponse = await axios.get(`${baseURL}/member/getLoggedInUser`);
        const { success, email } = emailResponse.data;

        if (success) {
          setUserEmail(email);

          // Now fetch all member details using the obtained email
          const memberResponse = await axios.get(`${baseURL}/member/get/${email}`);
          const { status, user } = memberResponse.data;

          if (status === 'Success') {
            setMember(user);
          } else {
            console.error('Error fetching member details:', status);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      // Prepare the user details data
      const userDetailsData = {
        // memberId: member._id, // Assuming _id is the member's unique identifier
        birthday: member.birthday,
        joinedDate: member.joinedDate,
        pathway: member.pathway,
        currentLevel: member.level,
      };

      // Send a POST request to save user details to the UserDetails table
      await axios.post('http://localhost:8070/UserDetails/add');

      alert('User details saved successfully!');
    } catch (error) {
      console.error('Error saving user details:', error);
      alert('Error saving user details. Please try again.');
    }
  };

  return (
    <div className="user-page">
      <h2 className="welcome-message">Welcome {member.fullname || 'User'}!</h2>

      <div className="user-info">
        <label className="info-label" htmlFor="pathway">
          Enter your selected pathway:
        </label>
        <input
          className="info-input"
          type="text"
          id="pathway"
          name="pathway"
          value={member.pathway || ''}
          onChange={(e) => setMember({ ...member, pathway: e.target.value })}
        />
      </div>

      <div className="user-info">
        <label className="info-label" htmlFor="level">
          Select Level:
        </label>
        <select
          className="info-input"
          id="level"
          name="level"
          value={member.level || ''}
          onChange={(e) => setMember({ ...member, level: e.target.value })}
        >
          <option value="">Select Level</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
        </select>
      </div>

      <div className="user-info">
        <label className="info-label" htmlFor="birthday">
          Birthday:
        </label>
        <input
          className="info-input"
          type="date"
          id="birthday"
          name="birthday"
          value={member.birthday || ''}
          onChange={(e) => setMember({ ...member, birthday: e.target.value })}
        />
      </div>

      <div className="user-info">
        <label className="info-label" htmlFor="joinedDate">
          Joined Date:
        </label>
        <input
          className="info-input"
          type="date"
          id="joinedDate"
          name="joinedDate"
          value={member.joinedDate || ''}
          onChange={(e) => setMember({ ...member, joinedDate: e.target.value })}
        />
      </div>

      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default UserPage;
