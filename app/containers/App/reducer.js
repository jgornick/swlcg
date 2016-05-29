import { fromJS } from 'immutable';
import { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER, OPEN_SEARCH, CLOSE_SEARCH, TOGGLE_SEARCH } from './constants';

const initialState = fromJS({
  drawerOpen: false,
  searchOpen: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return state.set('drawerOpen', true);
    case CLOSE_DRAWER:
      return state.set('drawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('drawerOpen', !state.get('drawerOpen'));
    case OPEN_SEARCH:
      return state.set('searchOpen', true);
    case CLOSE_SEARCH:
      return state.set('searchOpen', false);
    case TOGGLE_SEARCH:
      return state.set('searchOpen', !state.get('searchOpen'));
    default:
      return state;
  }
}

export default globalReducer;
