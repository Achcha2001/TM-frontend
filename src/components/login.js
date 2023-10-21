// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import baseURL from './baseurl';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your authentication endpoint
      const response = await axios.post(`${baseURL}/member/authenticate`, {
        email,
        password,
      });
      console.log(response.data);

      // Check if the authentication is successful
      if (response.data.success) {
        // If the user is an admin, redirect to the admin portal
        if (response.data.member.isAdmin) {
          navigate('/admin');
        } else {
          // If the user is not an admin, redirect to the user portal
          navigate('/login/user');
        }
      } else {
        // Check if the entered email and password match the admin credentials
        if (email === 'minuwangodatmc@gmail.com' && password === 'minuwangoda2023') {
          // Redirect to the admin portal
          navigate('/admin');
        } else {
          // Handle invalid credentials (show an alert or redirect to a different page)
          alert('Invalid email or password. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('Error during authentication. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="login-input"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <p>Don't have an account? Let's get started.</p>
      <div className="navbar-signup">
        <a href="/signup" className="navbar-signup-link">
          <button className="navbar-signup-button">Signup</button>
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
