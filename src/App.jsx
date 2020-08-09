import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AllPagesRoute from './routes/IndexRoute';
import theme from './theme';
// import './App.css';
// import Home from './Components/Home/Home';
// import SignIn from './Components/Auth/SignIn';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance } from '@fortawesome/free-solid-svg-icons';
// import NotFound from './Components/NotFound/NotFound';
// import ThemeContextProvider from './context/ThemeContext';
// library.add(fab, faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance)

function App() {
  return (

    <ThemeProvider theme={theme}>
      <section className="app">
        <AllPagesRoute />
      </section>
    </ThemeProvider>
  );
}

export default App;
