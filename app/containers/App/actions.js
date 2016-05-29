import { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER, OPEN_SEARCH, CLOSE_SEARCH, TOGGLE_SEARCH } from './constants';

export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });
export const toggleDrawer = () => ({ type: TOGGLE_DRAWER });
export const openSearch = () => ({ type: OPEN_SEARCH });
export const closeSearch = () => ({ type: CLOSE_SEARCH });
export const toggleSearch = () => ({ type: TOGGLE_SEARCH });
