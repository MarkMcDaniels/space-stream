import React from 'react';

import Navigation from '../../UI/Navigation/Navigation';

import classes from './Header.css';

const header = (props) =>{
    

    let classList = [classes.Header];
    return(
        <div className={classList.join(' ')}>
            <h1>Space Stream</h1>
            <Navigation navBar="Header" navItems={props.navItems}  />
        </div>
    );
}

export default header;