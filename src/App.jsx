import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import AllPagesRoute from './routes/IndexRoute';
import theme from './theme';
import AuthContextProvider from './state-manager/contexts/authContext/AuthContext';
import VideoProvider from './state-manager/contexts/videoContext/VideoContext';
// import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance } from '@fortawesome/free-solid-svg-icons';
// library.add(fab, faSignOutAlt, faHeart, faQuestion, faStar, faBars, faTimes, faTachometerAlt, faUserGraduate, faSearch, faCloudUploadAlt, faChartLine, faSpinner, faAmbulance)

function App() {
  const useStyles = makeStyles(theme => {
    console.log(theme.palette.type)
    return ({
      root: {
        minHeight: "100vh"
      }
    })
  })
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <VideoProvider>
          <section className={classes.root}>
            <AllPagesRoute />
          </section>
        </VideoProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );

}

export default App;
