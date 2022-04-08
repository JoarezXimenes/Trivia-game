import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Login from './pages/Login';
import Settings from './pages/Settings';
import ResultPage from './pages/ResultPage';
import RankingPage from './pages/RankingPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/game" component={ GamePage } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/result-page" component={ ResultPage } />
        <Route exact path="/ranking" component={ RankingPage } />
      </Switch>
    );
  }
}

export default App;
