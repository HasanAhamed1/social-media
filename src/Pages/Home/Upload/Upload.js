import React from 'react';
import LatestPosts from '../LatestPosts/LatestPosts';

const Upload = () => {
    return (
        <div className='md:flex md:flex-row lg:flex lg:flex-row justify-around'>
            <div className='basis-3/5'>
                <LatestPosts></LatestPosts>
            </div>
            <div className='grid gap-y-4 basis-1/5'>
            <textarea placeholder="What's on your mind?" className="textarea textarea-bordered textarea-xs" >
            </textarea>
            <input type="file" className="file-input" />
            <input type="submit" value="Submit" className="btn" />
            </div>
        </div>
    );
};

export default Upload;