import React from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTES
import Login from './pages/Login';
import GamePage from './pages/GamePage';

// CSS
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/game" component={ GamePage } />
      </Switch>
    );
  }
}

export default App;
