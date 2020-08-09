import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AllPagesRoute from './routes/IndexRoute';
import theme from './theme';
import AuthContextProvider from './state-manager/contexts/authContext/AuthContext';
// import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance } from '@fortawesome/free-solid-svg-icons';
// library.add(fab, faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance)

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <section className="app">
          <AllPagesRoute />
        </section>
      </AuthContextProvider>
    </ThemeProvider>
  );

}

export default App;
