import React from 'react';

import { NavLink } from 'react-router-dom';

import LaunchLogo from '../../../assets/images/launch.svg'

import classes from './Header.css';

const header = (props) =>{
    
    //let styles = {width: '40%', marginTop: '10px'};

    let classList = [classes.Header];
    return(
        <div className={classList.join(' ')}>
            <NavLink  to="/"><img src={LaunchLogo} alt="Launch spot logo"/></NavLink>
            <p>The Launch Spot</p>
        </div>
    );
}

export default header;