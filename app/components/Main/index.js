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
          drawerOpen={drawerOpen}
          searchOpen={searchOpen}
          toggleDrawer={toggleDrawer}
          toggleSearch={toggleSearch}
        />
        {children}
      </div>
    </MuiThemeProvider>
  );
}

Main.propTypes = {
  children: React.PropTypes.node,
  drawerOpen: React.PropTypes.boolean,
  searchOpen: React.PropTypes.boolean,
  toggleDrawer: React.PropTypes.func,
  toggleSearch: React.PropTypes.func,
};

export default Main;
