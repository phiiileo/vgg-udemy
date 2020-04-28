import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes,faTachometerAlt,faUserGraduate, faSearch ,faCloudUploadAlt,faChartLine, faSpinner )

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
          <Route exact path="/"><SignIn /></Route>
          <Route exact path="/home-:id"><Home /></Route>
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
