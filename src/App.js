import React from 'react';
import logo from './logo.svg';
import classes from './App.css';
import { BrowserRouter } from 'react-router-dom';

import SpaceStream from './containers/SpaceStream/SpaceStream';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <SpaceStream />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
