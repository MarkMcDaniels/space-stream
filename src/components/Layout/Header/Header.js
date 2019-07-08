import React from 'react';

import { NavLink } from 'react-router-dom';

import LaunchLogo from '../../../assets/images/launch.svg'

import classes from './Header.css';

const header = (props) =>{
    
    let styles = {width: '60%', marginTop: '10px'};

    let classList = [classes.Header];
    return(
        <div className={classList.join(' ')}>
            <NavLink  to="/"><img src={LaunchLogo} alt="Launch spot logo" style={styles}/></NavLink>
            <h1>The Launch Spot</h1>
        </div>
    );
}

export default header;