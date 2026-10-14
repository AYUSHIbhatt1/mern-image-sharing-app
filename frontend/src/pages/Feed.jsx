
import React, { useState } from 'react';
import './Feed.css';
import { useEffect } from 'react';
import axios from "axios";


const Feed = () => {
  const [posts, setpost] = useState([
  ]);
useEffect(()=>{
    async function fetchPosts() {
   let response = await axios.get('http://localhost:3000/feed')
    setpost(response.data.postdata); 
    }
    fetchPosts();
},[])
  return (
    <div className="feed">
      <section>
        <h1>Feed</h1>

        <div className="posts-container">
          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feed;
