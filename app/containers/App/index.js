/**
 *
 * App.react.js
 *
 */

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectDrawerOpen, selectSearchOpen } from './selectors';
import { toggleDrawer, toggleSearch } from './actions';
import Main from '../../components/Main/index';

function mapDispatchToProps(dispatch) {
  return {
    toggleSearch: () => dispatch(toggleSearch()),
    toggleDrawer: () => dispatch(toggleDrawer()),
    dispatch,
  };
}

export default connect(createSelector(
  selectDrawerOpen(),
  selectSearchOpen(),
  (drawerOpen, searchOpen) => ({ drawerOpen, searchOpen })
), mapDispatchToProps)(Main);
