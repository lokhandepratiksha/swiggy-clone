import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>404</h1>
            <h3>Something Went Wrong</h3>
            <p>{err.status}</p>
            <p>{err.statusText}</p>
            
        </div>
    )
}

export default Error;