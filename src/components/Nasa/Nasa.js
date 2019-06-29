import React, { Component } from 'react';


import classes from './Nasa.css';


class Nasa extends Component {
    render(){
        return (
            <div className={classes.NasaBlock}>
                Nasa schedule.
            </div>
        );
    }
}

export default Nasa;