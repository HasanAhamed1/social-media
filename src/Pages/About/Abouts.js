import React, { useEffect, useState } from 'react';
import About from './About';
import Update from '../Update/Update';
import UpdateModal from '../Update/UpdateModal';
import { useLoaderData } from 'react-router-dom';

const Abouts = () => {
  const stroeduser = useLoaderData();
    const [user, setUser] = useState(stroeduser);
    const [abouts, setAbouts] = useState([]);
    const [update, setUpdate] = useState([]);
  useEffect( () =>{
    fetch('http://localhost:5000/about')
    .then(res => res.json())
    .then(data => setAbouts(data))
  }, [])
    return (
        <div>
          <div>
            {
                abouts.map(about => <About
                key={about._id}
                about={about}
                
                ></About>)
            }
        </div>
        {/* <UpdateModal
          update={update}
        ></UpdateModal> */}
        </div>
        
    );
};

export default Abouts;