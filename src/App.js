import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><h1>Hello World</h1></Route>
      </Switch>
    </Router>
    // <div className="App">
      
    // </div>
  );
}

export default App;
