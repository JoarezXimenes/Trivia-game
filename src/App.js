import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Login from './pages/Login';
import Settings from './pages/Settings';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ GamePage } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}

export default App;
