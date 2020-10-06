import React from 'react';

import './PostItem.scss';

const PostItem = ({ title, body }) => {
    return (
        <div className="post-item">
            <button className="post-item__remove-btn">X</button>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;