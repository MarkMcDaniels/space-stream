import React from 'react';

import NavItem from '../Navigation/NavItem/NavItem';

import classes from './Navigation.css';

const navigation = (props) => {

    console.log(props);
    let classList = [classes.Header_ul, classes.Header];

    let ul = null;
    let items = null;
    let keySlug = "-" + props.navBar;



    items = props.navItems.map(link => (
        
        <NavItem key={link[0] + keySlug} link={link[1]} name={link[0]} />
    ));

    
    ul = (
        <ul className={classList.join(" ")}>
            {items}

        </ul>
    );
    

    return (
        <React.Fragment>
            {ul}
        </React.Fragment>
    );
}

export default navigation;