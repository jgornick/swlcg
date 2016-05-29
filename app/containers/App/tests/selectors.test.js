import { fromJS } from 'immutable';
import expect from 'expect';

import { selectLocationState, selectGlobal, selectDrawerOpen, selectSearchOpen } from 'containers/App/selectors';

describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({ global: globalState });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectDrawerOpen', () => {
  const drawerOpenSelector = selectDrawerOpen();
  it('should select the drawer open status', () => {
    const drawerState = true;
    const mockedState = fromJS({ global: { drawerOpen: drawerState } });
    expect(drawerOpenSelector(mockedState)).toEqual(drawerState);
  });
});

describe('selectSearchOpen', () => {
  const searchOpenSelector = selectSearchOpen();
  it('should select the search open status', () => {
    const searchState = true;
    const mockedState = fromJS({ global: { searchOpen: searchState } });
    expect(searchOpenSelector(mockedState)).toEqual(searchState);
  });
});

describe('selectLocationState', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocationState()(mockedState)).toEqual(route.toJS());
  });
});
