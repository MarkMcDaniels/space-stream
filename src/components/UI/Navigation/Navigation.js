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
            classList = [classes.Footer, classes.Footer_ul];
            break;

        default:
            classList = [classes.Header];
            break;
    }

    let list = null;
    let items = null;
    let keySlug = "-" + props.navBar;

    // Active link check react-router-dom alternative
    let active = false;
    

    items = props.navItems.map(link => {
        if(props.path === '/spacex-schedule'){
            active = 'space';
        } else {
            active = 'nasa';
        }
        return <NavItem key={link[0] + keySlug} link={link[1]} name={link[0]} active={active} navBar={props.navBar} />;
});

    
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