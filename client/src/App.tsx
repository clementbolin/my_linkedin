import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
