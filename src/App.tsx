import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './Pages/Login/Login';
import { HomePage } from './Pages/Home/Home';
import { useSelector } from 'react-redux';
import { UserState } from './reducers/userReducer';
import { useEffect } from 'react';

function App() {
  const user = useSelector<UserState, UserState["user"]>((state) => state.user)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage}></Route>
          <Route exact path='/home' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
