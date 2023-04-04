import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, body, title } = post;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button style={{ color: 'white', marginLeft: '10px' }}>Show post details</button></Link>
            <button onClick={handleNavigate} style={{ color: 'white', marginLeft: '10px' }}>With Button Handler</button>
        </div>
    );
};

export default Post;