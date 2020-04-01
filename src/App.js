import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NetWorthForm from './NetWorthForm';
import NetWorthDetail from './NetWorthDetail';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/networthform" component={NetWorthForm} />
        <Route path="/networthdetail" component={NetWorthDetail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
