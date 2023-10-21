import React from 'react';
import axios from 'axios';
import './adminaddnews.css';
import baseURL from './baseurl';
class AdminAddNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    
    };
  }

  // handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   this.setState({ image: file });
  // };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content} = this.state;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    // formData.append('image', image);

    try {
      // Send data to the backend API
      await axios.post(`${baseURL}/news/add`, formData);

      // Reset the form
      this.setState({
        title: '',
        content: '',
        // image: null,
      });

      // Notify the parent component that news has been added
      if (this.props.onAddNews) {
        this.props.onAddNews();
      }
    } catch (error) {
      console.error('Error adding news:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  render() {
    const { title, content } = this.state;

    return (
      <div className="admin-add-news">
        <h2 className="admin-add-news-title">Add News</h2>
        <form className="admin-add-news-form" onSubmit={this.handleSubmit}>
          <label className="admin-add-news-label">
            Title:
            <input
              className="admin-add-news-input"
              type="text"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </label>
          <br />
          <label className="admin-add-news-label">
            Content:
            <textarea
              className="admin-add-news-textarea"
              value={content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </label>
          <br />
          {/* <label className="admin-add-news-label">
            Image:
            <input
              className="admin-add-news-file-input"
              type="file"
              accept="image/*"
              onChange={this.handleImageChange}
            />
          </label> */}
          <br />
          <button className="admin-add-news-submit" type="submit">
            Add News
          </button>
        </form>
      </div>
    );
  }
}

export default AdminAddNews;
