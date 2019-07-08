import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Spacex from '../../components/Spacex/Spacex';
import Nasa from '../../components/Nasa/Nasa';

import classes from './Content.css';

class Content extends Component {
    
    render(){
        
        
        let classList = [classes.Content];
        return(
            <div className={classList.join(' ')}>
                
                
                <Switch>
                    
                    <Route path='/nasa-schedule' render={(props) => <Nasa {...this.props} />} />
                    <Route path="/spacex-schedule" render={(props) => <Spacex {...this.props} path={'/spacex-schedule'} />}  />
                    <Route path='/' render={(props) => <Nasa {...this.props} />} />

                </Switch>
                
                
            </div>
        );
    }
    
}

export default Content;