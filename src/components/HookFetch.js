import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HookFetch() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }, []); // Empty dependency array ensures this runs once after the component mounts

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}
