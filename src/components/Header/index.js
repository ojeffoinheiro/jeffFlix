import React from 'react';
import './styles.css';

import logo from '../../imgs/logo.png'

export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href={'/'}><img src={logo}/></a>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}
