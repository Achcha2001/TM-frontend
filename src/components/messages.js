// src/components/Messages.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from './baseurl';
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages data from your API when the component mounts
    axios.get(`${baseURL}/contact/messages`).then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <strong>Name:</strong> {message.name}<br />
            <strong>Email:</strong> {message.email}<br />
            <strong>Message:</strong> {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
