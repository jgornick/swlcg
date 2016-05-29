/**
*
* NavSearch
*
*/

import React from 'react';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

import styles from './styles.css';

function NavSearch({ searchOpen, toggleSearch }) {
  return (
    <div className={styles.navSearch}>
      <IconButton onClick={toggleSearch}><Search color="#fff"/></IconButton>
      <TextField
        id="navSearchField"
        className={styles.searchField}
        underlineShow={false}
      />
    </div>
  );
}

export default NavSearch;
