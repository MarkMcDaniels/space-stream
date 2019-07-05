import React from 'react';
import Navigation from '../../UI/Navigation/Navigation';
import classes from './Footer.css';

const footer = (props) =>{
    return (
        <div>
            <Navigation navBar="Footer" navItems={props.navItems}  />
        </div>


    );
}

export default footer;