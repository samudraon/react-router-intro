import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const { id, body, userId, title } = post;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>Details about your post: {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack} style={{ color: 'white' }}>Go Back</button>
        </div>
    );
};

export default PostDetail;