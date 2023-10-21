import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from './baseurl';
//import './UpdateMembersPage.css'; // Import your CSS file for styling

const UpdateMembersPage = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // Fetch user details from your API when the component mounts
    axios.get(`${baseURL}/UserDetails/getAll`).then((response) => {
      setUserDetails(response.data);
    });
  }, []);

  const handleEdit = (userDetailId) => {
    // Implement edit functionality, e.g., navigate to an edit page or open a modal
    console.log('Edit user detail with ID:', userDetailId);
  };

  return (
    <div>
      <h1>Update Members Page</h1>
      <table className="members-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Pathway</th>
            <th>Level</th>
            <th>Birthday</th>
            <th>Joined Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userDetails) && userDetails.length > 0 ? (
            userDetails.map((userDetail) => (
              <tr key={userDetail._id}>
                <td>{userDetail._id}</td>
                <td>{userDetail.pathway}</td>
                <td>{userDetail.level}</td>
                <td>{userDetail.birthday}</td>
                <td>{userDetail.joinedDate}</td>
                <td>
                  <button onClick={() => handleEdit(userDetail._id)}>Edit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No user details found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateMembersPage;
