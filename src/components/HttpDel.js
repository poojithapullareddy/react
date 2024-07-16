import axios from 'axios';
import React, { Component } from 'react';
import './HttpDEL.css'; // Importing the CSS file for styling

export class HttpDEL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: '',
            posts: [] 
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.setState({ posts: response.data });
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmitLogic = (event) => {
        event.preventDefault();
        const { userId, title, body } = this.state;
        axios.post("https://jsonplaceholder.typicode.com/posts", { userId, title, body })
            .then((response) => {
                console.log('Post added successfully:', response.data);
                this.fetchPosts(); // Refresh posts after successful addition
                this.setState({ userId: '', title: '', body: '' }); // Clear input fields
            })
            .catch((error) => {
                console.error('Error while posting data:', error);
            });
    };

    handleDelete = (postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                console.log('Post deleted successfully:', response.data);
                this.fetchPosts(); // Refresh posts after successful deletion
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    render() {
        const { userId, title, body, posts } = this.state;
        return (
            <div className="container">
                <h1>Post Manager</h1>
                <form onSubmit={this.onSubmitLogic} className="post-form">
                    <div className="form-group">
                        <label>User ID:</label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="User ID" />
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label>Body:</label>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} placeholder="Body" />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

                <h2>Posts</h2>
                <ul className="post-list">
                    {posts.map(post => (
                        <li key={post.id} className="post-item">
                            <div className="post-content">
                                <strong>User ID:</strong> {post.userId}<br />
                                <strong>Title:</strong> {post.title}<br />
                                <strong>Body:</strong> {post.body}
                                <button className="delete-button" onClick={() => this.handleDelete(post.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default HttpDEL;
