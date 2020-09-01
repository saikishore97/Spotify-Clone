import React from 'react';
import './Login.styles.css';
import {accessUrl} from './spotify';



const LoginPage=()=> {
    return (
        <div className='login'>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default LoginPage;
