import React, { Component } from 'react'
import axios from 'axios';
export class HttpGET extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount() {
        axios.get( 'https://jsonplaceholder.typicode.com/posts').then((Response)=>{
            console.log(Response);
            this.setState({posts: Response.data});
        }).catch((err)=>{console.log(err)});
    }

  render() {
    const{posts}=this.state;
    return (
      <div>List of posts
       {posts.length > 0 ? (
  posts.map(post => (
    <div key={post.id}>
      <span>ID: {post.id}</span> <span>Title: {post.title}</span>
    </div>
  ))
) : (
  <div>No posts to display</div>
)}

      </div>
    )
  }
}

export default HttpGET