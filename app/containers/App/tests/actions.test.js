import expect from 'expect';

import { OPEN_DRAWER, CLOSE_DRAWER, TOGGLE_DRAWER, OPEN_SEARCH, CLOSE_SEARCH, TOGGLE_SEARCH } from '../constants';
import { openDrawer, closeDrawer, toggleDrawer, openSearch, closeSearch, toggleSearch } from '../actions';

describe('App Actions', () => {
  describe('openDrawer', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: OPEN_DRAWER };
      expect(openDrawer()).toEqual(expectedResult);
    });
  });

  describe('closeDrawer', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: CLOSE_DRAWER };
      expect(closeDrawer()).toEqual(expectedResult);
    });
  });

  describe('toggleDrawer', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: TOGGLE_DRAWER };
      expect(toggleDrawer()).toEqual(expectedResult);
    });
  });

  describe('openSearch', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: OPEN_SEARCH };
      expect(openSearch()).toEqual(expectedResult);
    });
  });

  describe('closeSearch', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: CLOSE_SEARCH };
      expect(closeSearch()).toEqual(expectedResult);
    });
  });

  describe('toggleSearch', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: TOGGLE_SEARCH };
      expect(toggleSearch()).toEqual(expectedResult);
    });
  });
});
