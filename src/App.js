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
          <Route exact path="/home/:id"><Home /></Route>
          <Route render= {()=>
          (
            <div>
              Page not found
            </div>
          )}/>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
