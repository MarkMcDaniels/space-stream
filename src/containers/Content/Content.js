import React, { Component } from 'react';
import Navigation from '../../components/UI/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import Spacex from '../../components/Spacex/Spacex';
import Nasa from '../../components/Nasa/Nasa';

import classes from './Content.css';

class Content extends Component {
    
    render(){
        

        let classList = [classes.Content];
        return(
            <div className={classList.join(' ')}>
                <div className={classes.Nav}>
                    <p>Upcoming:</p>
                    <Navigation navBar="Content" navItems={this.props.navContent} />
                </div>

                <Switch>
                    
                    <Route path='/nasa-schedule' component={Nasa} />
                    <Route path="/spacex-schedule" component={Spacex} />
                    <Route path='/' component={Nasa} />

                </Switch>
            </div>
        );
    }
    
}

export default Content;