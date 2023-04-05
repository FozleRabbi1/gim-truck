import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ShowUserInfo = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handerGobackFun = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>User name : {data.name}</h2>
            <button onClick={handerGobackFun} >Go back</button>
        </div>
    );
};

export default ShowUserInfo;