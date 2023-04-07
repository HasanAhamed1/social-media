import React from 'react';

const Upload = () => {
    return (
        <div>
            <div>
            <textarea placeholder="What's on your mind?" className="textarea textarea-bordered textarea-xs w-full max-w-xs" >
            </textarea>
            <input type="file" className="file-input w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn" />
            </div>
        </div>
    );
};

export default Upload;