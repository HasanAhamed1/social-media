import React, { useEffect, useState } from "react";
import LatestPost from "./LatestPost";
import axios from "axios";

const LatestPosts = () => {

  const [user, setUser] = useState([]);

  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('http://localhost:5000/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  // function handleLike(id) {
  //   fetch(`http://localhost:5000/posts/like/${id}`, { method: 'PUT' })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const updatedPosts = posts.map((post) => {
  //         if (post._id === id) {
  //           return { ...post, likes: data.likes };
  //         } else {
  //           return post;
  //         }
  //       });
  //       setPosts(updatedPosts);
  //     });
  // }  
  
    
  return (
    <div>
      <h3>Latest Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts.map(post => <LatestPost key={post._id}
          post={post}
          // onLike={() => handleLike(post._id)}
          ></LatestPost>)
        }
      </div>
      
    </div>
  );
};

export default LatestPosts;
