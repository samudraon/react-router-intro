import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>hello friends</h1>
        </div>
    );
};

export default Friends;