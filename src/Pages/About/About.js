import React from 'react';
import { Link } from 'react-router-dom';

const About = ({about}) => {

    const {_id, name, email, university, address} = about;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <p>{university}</p>
    <p>{address}</p>
    <div className="card-actions justify-end">
    <Link to={`/about/${_id}`}>
        
              <button className="btn btn-primary">edit</button>
              </Link>
    </div>
    {/* <label htmlFor="my-modal-6" className="btn" onClick={() => setUpdate(about)}>open modal</label> */}
  </div>
</div>
    );
};

export default About;