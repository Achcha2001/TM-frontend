import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminAddEvents.css';
import baseURL from './baseurl';

class AdminAddEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      events: [],
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseURL}/events`);
      this.setState({
        events: response.data,
      });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, date } = this.state;

    try {
      await axios.post('http://localhost:8070/events/add', {
        title,
        description,
        date,
      });

      this.setState({
        title: '',
        description: '',
        date: '',
      });

      this.fetchEvents();

      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error adding event. Please try again.');
    }
  };

  handleDelete = async (eventId) => {
    try {
      await axios.delete(`${baseURL}/events/delete/${eventId}`);
      this.fetchEvents();
      alert('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event. Please try again.');
    }
  };

  render() {
    const { title, description, date, events } = this.state;

    return (
      <div className="admin-add-events">
        <h2 className="admin-add-events-title">Add Event</h2>
        <form className="admin-add-events-form" onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              rows="4"
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add Event</button>
        </form>

        <div className="added-events">
          <h2>Added Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event._id}>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <button onClick={() => this.handleDelete(event._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminAddEvents;
