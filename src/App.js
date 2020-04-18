import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
          <Route exact path="/"><SignIn /></Route>
          <Route path="/home"><Home /></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
