import React, { useState } from 'react';

const User = ({name}) => {
const [count] = useState(0);
const [count1] = useState(1);

    return (
        <div className='usercard'>
            <h2>Count :{count}</h2>
            <h2>Count1 : {count1}</h2>
            <h3>Name : {name}</h3>
            <p>Location : Dehradun</p>
            <p>Contcat Onfo : pratikshalokhande@gmail.com</p>
        </div>
    )

}

export default User;
