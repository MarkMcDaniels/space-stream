import React from 'react';

import NavItem from '../Navigation/NavItem/NavItem';

import classes from './Navigation.css';

const navigation = (props) => {

        
    let classList = [];
    switch (props.navBar){
        case 'Header':
            classList = [classes.Header];
            break;
        
        case 'Content': 
            classList = [classes.Nav];
            break;

        case 'Footer':
            classList = [classes.Footer];
            break;

        default:
            classList = [classes.Header];
            break;
    }

    let list = null;
    let items = null;
    let keySlug = "-" + props.navBar;

    // Active link check
    let active = false;
    if(props.path === '/spacex-schedule'){
        active = true;
    }

    items = props.navItems.map(link => (
        
        <NavItem key={link[0] + keySlug} link={link[1]} name={link[0]} active={active} />
    ));

    
    list = (
        <ul className={classList.join(' ')}>
            {items}

        </ul>
    );
    

    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    );
}

export default navigation;