import React from "react";

import classes from './NavItem.css';

const navItem = (props) => {
    let classList = [classes.Item];
    if(props.name === "SpaceX"){
        classList.push(classes.Active);
    } else {
        classList.push(classes.Inactive);
    }
    return <li className={classList.join(" ")}><a href={props.link}>{props.name}</a></li>
}

export default navItem;