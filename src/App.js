import React from 'react';
import logo from './logo.svg';
import classes from './App.css';

import SpaceStream from './containers/SpaceStream/SpaceStream';

function App() {
  return (
    <div className={classes.App}>
      <h1>Space Stream</h1>
      <SpaceStream />
    </div>
  );
}

export default App;
