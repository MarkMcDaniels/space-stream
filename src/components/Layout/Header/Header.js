import React from 'react';

import LaunchLogo from '../../../assets/images/launch.svg'

import classes from './Header.css';

const header = (props) =>{
    

    let classList = [classes.Header];
    return(
        <div className={classList.join(' ')}>
            <img src={LaunchLogo} alt="Launch spot logo" />
            <h1>The Launch Spot</h1>
        </div>
    );
}

export default header;