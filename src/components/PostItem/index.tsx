import React from 'react';
import './styles.css';
import {post} from "../../types/post";

const PostItem: React.FC<post> = ({
                                      userId,
                                      id,
                                      title,
                                      body
                                  }: post) => {
    return <>
        <div className="post-item-container" key={id}>
            <div className="post-item-information">
                <span className="key">Title: </span>
                <span className="value">{title}</span>
            </div>
            <div className="post-item-information">
                <span className="key">Body: </span>
                <span className="value">{body}</span>
            </div>
        </div>
    </>
};

export default PostItem
