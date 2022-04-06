import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/GamePage';
import Login from './pages/Login';
import Settings from './pages/Settings';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/settings" component={ Settings } />
      </Switch>
    );
  }
}

export default App;
