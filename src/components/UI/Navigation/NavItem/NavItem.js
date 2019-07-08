import React from "react";

import classes from './NavItem.css';

import NasaLogo from '../../../../assets/images/1224px-NASA_logo.svg.png';
import LaunchLogo from '../../../../assets/images/launch.svg';
import SpaceXLogo from '../../../../assets/images/spacex/spacex-vector-logo.svg';

const navItem = (props) => {
    let classList = [classes.Item];
    if(props.navBar === 'Content'){
        // Manages active link for current page, and it comes from Conten in spacex.js or nasa.js
        if(props.active === 'nasa' && props.name === "NASA"){
            classList.push(classes.Active);
        } else if(props.active === 'space' && props.name === 'SpaceX'){
            classList.push(classes.Active);
        }

        return <li className={classList.join(" ")}><a href={props.link}>{props.name}</a></li>
    } else {
        // Manages the footer navBar
        classList.push(classes.Footer);
        switch (props.name){

            case 'home':
                return <li className={classList.join(" ")}><a href={props.link}><img src={LaunchLogo} alt="Launch Logo"/></a></li>

            case 'nasa':
                return <li className={classList.join(" ")}><a href={props.link}><img src={NasaLogo} alt="Nasa Logo"/></a></li>

            case 'spaceX':
                
                return <li className={classList.join(" ")}><a href={props.link}><img src={SpaceXLogo} alt="SpaceX Logo"/></a></li>

            case 'github':
                return <li className={classList.join(" ")}><a href={props.link}><i class="fa fa-github fa-3x"></i></a></li>
            default:
                return <li className={classList.join(" ")}><a href={props.link}>{props.name}</a></li>
                
        }
        
    }
}

export default navItem;