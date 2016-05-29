/**
*
* Main
*
*/

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from '../../components/NavBar/index';


function Main({ children, drawerOpen, searchOpen, toggleDrawer, toggleSearch }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <NavBar
          searchOpen={searchOpen}
          toggleSearch={toggleSearch}
        />
        {children}
      </div>
    </MuiThemeProvider>
  );
}

export default Main;
