import React, { useState } from 'react';
import LatestPosts from '../LatestPosts/LatestPosts';

const Upload = () => {
    const [upload, setUpload] = useState({});
    const handleUpload = event =>{
        event.preventDefault();
        console.log(upload);

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upload)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Your status uploaded successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newPost = {...upload}
        newPost[field] = value;
        setUpload(newPost);

    }
    return (
        <div className='md:flex md:flex-row lg:flex lg:flex-row justify-around'>
            <div className='basis-3/5'>
                <LatestPosts></LatestPosts>
            </div>
            <form onSubmit={handleUpload}>
            <div className='grid gap-y-4 basis-1/5'>
            <input onBlur={handleInputBlur} name='img' type="file" className="file-input" />
            <input onBlur={handleInputBlur} type="text" name="heading" placeholder='Title here' className="file-input" />
            <textarea onBlur={handleInputBlur} name='details' placeholder="What's on your mind?" className="textarea textarea-bordered textarea-xs" >
            </textarea>
            <input type="submit" value="Submit" className="btn" />
            </div>
            </form>
        </div>
    );
};

export default Upload;