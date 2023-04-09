import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeDetails = () => {
    const {img,heading,details} = useLoaderData();
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
            <p>{details}</p>
          </div>
        </div>
    );
};

export default SeeDetails;