import axios from 'axios';
import React, { Component } from 'react';

export class HttpPOST extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        };
    }

    changehandleruserid = (event) => {
        this.setState({ userId: event.target.value });
    };

    changehandlertitle = (event) => {
        this.setState({ title: event.target.value });
    };

    changehandlerbody = (event) => {
        this.setState({ body: event.target.value });
    };

    onsubmitlogic = (event) => {
        event.preventDefault();
        const { userId, title, body } = this.state;
        axios.post("https://jsonplaceholder.typicode.com/posts", { userId, title, body })
            .then((response) => {
                console.log(response.data); // Log the response data
            })
            .catch((error) => {
                console.error('Error while posting data:', error);
            });
    };

    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.onsubmitlogic}>
                    <input type="text" value={userId} onChange={this.changehandleruserid} placeholder="User ID" />
                    <input type="text" value={title} onChange={this.changehandlertitle} placeholder="Title" />
                    <input type="text" value={body} onChange={this.changehandlerbody} placeholder="Body" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default HttpPOST;
