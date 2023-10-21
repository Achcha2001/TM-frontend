// SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './signup.css';

function SignupPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [membershipNumber, setMembershipNumber] = useState('');
  const [membershipNumberError, setMembershipNumberError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleMembershipNumberChange = (e) => {
    const value = e.target.value;

    // Check if the membership number is exactly 8 digits
    if (/^\d{0,8}$/.test(value)) {
      setMembershipNumber(value);
      setMembershipNumberError('');
    } else {
      setMembershipNumberError('Membership number should be a number with exactly 8 digits');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Check membership number error before submitting
    if (membershipNumberError) {
      alert(membershipNumberError);
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await axios.post(`${baseURL}/member/add`, {
        fullname: fullName,
        email: email,
        password: hashedPassword,
        membershipnumber: membershipNumber,
      });

      // Reset the form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setMembershipNumber('');

      // Redirect to the login page after successful signup
      navigate('/login');

      alert('Signup successful! Please log in.');
    } catch (error) {
      console.error('Error adding member: ', error);
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <div className="signup-page">
      <h2 className="signup-heading">Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label className="signup-label">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Membership Number:</label>
          <input
            type="text"
            value={membershipNumber}
            onChange={handleMembershipNumberChange}
            className="signup-input"
          />
          {membershipNumberError && (
            <p className="error-message">{membershipNumberError}</p>
          )}
        </div>

        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
