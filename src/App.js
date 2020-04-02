import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import NetWorthForm from './Components/NetWorthForm/NetWorthForm';
import NetWorthDetail from './Components/NetWorthDetail/NetWorthDetail';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/networthform" component={NetWorthForm} />
        <Route path="/networthdetail" component={NetWorthDetail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
