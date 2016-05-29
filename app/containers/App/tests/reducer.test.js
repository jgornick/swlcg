import expect from 'expect';
import globalReducer from '../reducer';
import { openDrawer, closeDrawer, toggleDrawer, openSearch, closeSearch, toggleSearch } from '../actions';
import { fromJS } from 'immutable';

describe('globalReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      drawerOpen: false,
      searchOpen: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the openDrawer action correctly', () => {
    const expectedResult = state.set('drawerOpen', true);
    expect(globalReducer(state, openDrawer())).toEqual(expectedResult);
  });

  it('should handle the closeDrawer action correctly', () => {
    const expectedResult = state.set('drawerOpen', false);
    expect(globalReducer(state, closeDrawer())).toEqual(expectedResult);
  });

  it('should handle the toggleDrawer action correctly', () => {
    const expectedResult = state.set('drawerOpen', !state.get('drawerOpen'));
    expect(globalReducer(state, toggleDrawer())).toEqual(expectedResult);
  });

  it('should handle the openSearch action correctly', () => {
    const expectedResult = state.set('searchOpen', true);
    expect(globalReducer(state, openSearch())).toEqual(expectedResult);
  });

  it('should handle the closeSearch action correctly', () => {
    const expectedResult = state.set('searchOpen', false);
    expect(globalReducer(state, closeSearch())).toEqual(expectedResult);
  });

  it('should handle the toggleSearch action correctly', () => {
    const expectedResult = state.set('searchOpen', !state.get('searchOpen'));
    expect(globalReducer(state, toggleSearch())).toEqual(expectedResult);
  });
});
