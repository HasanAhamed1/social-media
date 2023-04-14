import React, { useEffect, useState } from 'react';
import LatestPost from '../Home/LatestPosts/LatestPost';

const Media = () => {
    const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('http://localhost:5000/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts.map(post => <LatestPost key={post._id}
          post={post}
          ></LatestPost>)
        }
      </div>
        </div>
    );
};

export default Media;