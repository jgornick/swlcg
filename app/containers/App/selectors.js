import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectDrawerOpen = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('drawerOpen')
);

const selectSearchOpen = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('searchOpen')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectDrawerOpen,
  selectSearchOpen,
  selectLocationState,
};
