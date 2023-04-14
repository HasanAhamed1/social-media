import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const stroeduser = useLoaderData();
    const [user, setUser] = useState(stroeduser);
    const handleUpdate = event =>{
        event.preventDefault();
        console.log(user);

        fetch(`http://localhost:5000/about/${stroeduser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknoeledged){
                alert('Updated successfully');
                event.target.reset();
            }
        })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <p>{stroeduser.name}</p>
            <form onSubmit={handleUpdate}>
            <input onChange={handleInputChange} type="text" defaultValue={stroeduser.name} name="name" id="" />
                <br />
                <input onChange={handleInputChange} type="email" defaultValue={stroeduser.email} name="email" id="" />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={stroeduser.university} name="univarsity" id="" />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={stroeduser.address} name="address" id="" />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;