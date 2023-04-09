import React from 'react';
import { Link } from 'react-router-dom';

const LatestPost = ({post}) => {

  const {_id, img, heading} = post;
    return (
        
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{heading}</h2>
            
            <div className="card-actions justify-end">
              <Link to={`/seeDetails/${_id}`}>
              <button className="btn btn-primary">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        
      
    );
};

export default LatestPost;