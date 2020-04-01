import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
